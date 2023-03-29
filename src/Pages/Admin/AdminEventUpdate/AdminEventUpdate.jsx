import { useNavigate, useParams } from "react-router-dom"

import { Section } from "../../../components/Section/Section"
import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../../api/feteDeLaMusique";
import { ButtonAdmin } from "../../../components/ButtonAdmin/ButtonAdmin";

export function AdminEventUpdate() {

    const {id} = useParams();

    const [event, setEvent] = useState();
    const [name, setName] = useState();
    const [place, setPlace] = useState();
    const [maxTickets, setMaxTickets] = useState();
    const [price, setPrice] = useState();
    const [startAt, setStartAt] = useState();
    const [endAt, setEndAt] = useState();
    const [sellAt, setSellAt] = useState();

    const [returnMessage, setReturnMessage] = useState();

    const navigation = useNavigate();

    async function fetchEvent() {
        let event = await FeteDeLaMusique.fetchEventById(id);

        setName(event.name);
        setPlace(event.place);
        setMaxTickets(event.max_tickets);
        setPrice(event.price/100);
        setStartAt(event.start_at.slice(0, 16));
        setEndAt(event.end_at.slice(0, 16));
        setSellAt(event.sell_at.slice(0, 16));

        setEvent(event);
    }

    useEffect(() => {
        fetchEvent();
    }, []);

    async function handleChange(e) {
        e.preventDefault();

        let updatedEvent = event;
        updatedEvent.name = name;
        updatedEvent.place = place;
        updatedEvent.max_tickets = maxTickets;
        updatedEvent.price = price*100;
        updatedEvent.start_at = startAt;
        updatedEvent.end_at = endAt;
        updatedEvent.sell_at = sellAt;

        let returnUpdate = await FeteDeLaMusique.updateEventById(updatedEvent);

        if(returnUpdate) {
            setReturnMessage("L'événement a bien été modifié");
        }
    }

    return event ? <Section className="flex-col items-start">
        <ButtonAdmin
            handle={function() {
                navigation("/admin/events")
            }}
        >
            Retour
        </ButtonAdmin>
        {returnMessage && returnMessage}
        <form className="w-full">
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={name} onChange={(e) => { setName(e.target.value) }} required />
            </div>
            <div className="mb-6">
                <label htmlFor="place" className="block mb-2 text-sm font-medium text-gray-900">Ville</label>
                <input type="text" id="place" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={place} onChange={(e) => { setPlace(e.target.value) }} required />
            </div>
            <div className="mb-6">
                <label htmlFor="max_tickets" className="block mb-2 text-sm font-medium text-gray-900">Max tickets</label>
                <input type="number" id="max_tickets" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={maxTickets} onChange={(e) => { setMaxTickets(e.target.value) }} required />
            </div>
            <div className="mb-6">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Prix (€)</label>
                <input type="number" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={price} onChange={(e) => { setPrice(e.target.value) }} required />
            </div>
            <div className="mb-6">
                <label htmlFor="start_at" className="block mb-2 text-sm font-medium text-gray-900">Date/heure début</label>
                <input type="datetime-local" id="start_at" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={startAt} onChange={(e) => { setStartAt(e.target.value) }} required />
            </div>
            <div className="mb-6">
                <label htmlFor="end_at" className="block mb-2 text-sm font-medium text-gray-900">Date/heure fin</label>
                <input type="datetime-local" id="end_at" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={endAt} onChange={(e) => { setEndAt(e.target.value) }} required />
            </div>
            <div className="mb-6">
                <label htmlFor="sell_at" className="block mb-2 text-sm font-medium text-gray-900">Date/heure début</label>
                <input type="datetime-local" id="sell_at" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={sellAt} onChange={(e) => { setSellAt(e.target.value) }} required />
            </div>
            <button type="submit" onClick={handleChange} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Modifier l'événement</button>
        </form>
    </Section> : <div>Chargement</div>
}