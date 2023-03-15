import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../../api/feteDeLaMusique";
import { Section } from "../../../components/Section/Section";
import { ModalDelete } from "../../../components/ModalDelete/ModalDelete";

export function AdminEventsList() {

    const [eventsList, setEventsList] = useState();
    const [modalContent, setModalContent] = useState();
    const [modalState, setModalState] = useState(false);

    async function fetchEvents() {
        let resultFetch = await FeteDeLaMusique.fetchAllEvents();
        setEventsList(resultFetch);
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    function handleDelete(e) {
        setModalState(e.target.dataset.id);
        setModalContent('Êtes-vous certains de vouloir supprimer cet événement ?');
    }

    async function onDelete(e) {
        let resultDelete = await FeteDeLaMusique.deleteEventById(e.target.dataset.elementId);
        console.log(resultDelete);

        if(resultDelete) {
            setModalState(false);
            setModalContent(false);

            setEventsList(eventsList.filter((element) => {
                console.log(element);
                if(element.id == e.target.dataset.elementId) {
                    return false;
                }
                return true;
            }));
        }
    }

    function onCancel() {
        setModalState(false);
        setModalContent(false);
    }

    return <Section className="mx-10 rounded-lg overflow-x-auto border border-gray-200">
        <table className="table-auto w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nom
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ville
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Artiste
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Max tickets
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Prix
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Démarrage vente
                    </th>
                </tr>
            </thead>
            <tbody>
                {eventsList && eventsList.map((event, i) => (
                    <tr key={event.name + i} className="bg-white even:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{event.name}</td>
                        <td className="px-6 py-4">{event.place}</td>
                        <td className="px-6 py-4">{event.max_tickets}</td>
                        <td className="px-6 py-4">{event.price/100}</td>
                        <td className="px-6 py-4">Du {event.start_at.slice(0, 16)} à {event.end_at.slice(0, 16)}</td>
                        <td className="px-6 py-4">{event.sell_at.slice(0, 16)}</td>
                        <td>
                            <a href={`/admin/event/update/${event.id}`} className="font-bold text-primary cursor-pointer hover:underline">Modifier</a>
                            <div data-id={event.id} onClick={handleDelete} className="font-bold text-red-900 cursor-pointer hover:underline">Supprimer</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {modalState && <ModalDelete onConfirm={onDelete} onCancel={onCancel} content={modalContent} elementId={modalState} />}
    </Section>
}