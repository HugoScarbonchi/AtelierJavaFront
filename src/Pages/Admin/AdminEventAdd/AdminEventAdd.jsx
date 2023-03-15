import { useState } from "react";
import { FeteDeLaMusique } from "../../../api/feteDeLaMusique";
import { Section } from "../../../components/Section/Section";

export function AdminEventAdd() {

    const [name, setName] = useState();
    const [place, setPlace] = useState();
    const [maxTickets, setMaxTickets] = useState();
    const [price, setPrice] = useState();
    const [startAt, setStartAt] = useState();
    const [endAt, setEndAt] = useState();
    const [sellAt, setSellAt] = useState();

    const [returnMessage, setReturnMessage] = useState();

    async function handleAdd(e) {
        e.preventDefault();

        let returnAdd = await FeteDeLaMusique.createEvent({
            name: name,
            place: place,
            max_tickets: maxTickets,
            price: price*100,
            start_at: startAt,
            end_at: endAt,
            sell_at: sellAt
        });

        if(returnAdd) {
            setReturnMessage("L'événement a bien été ajouté");
        }
    }

    return <Section className="flex-col">
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
            <button type="submit" onClick={handleAdd} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ajouter un nouvel événement</button>
        </form>
    </Section>

}