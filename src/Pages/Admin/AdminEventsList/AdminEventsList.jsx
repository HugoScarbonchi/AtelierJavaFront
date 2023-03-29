import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../../api/feteDeLaMusique";
import { Section } from "../../../components/Section/Section";
import { ModalDelete } from "../../../components/ModalDelete/ModalDelete";
import { ButtonAdmin } from "../../../components/ButtonAdmin/ButtonAdmin";
import { useNavigate } from "react-router-dom";

export function AdminEventsList() {
  const [eventsList, setEventsList] = useState();
  const [modalContent, setModalContent] = useState();
  const [modalState, setModalState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function fetchEvents() {
    let resultFetch = await FeteDeLaMusique.fetchAllEvents();
    setEventsList(resultFetch);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  function handleDelete(e) {
    setModalState(e.target.dataset.id);
    setModalContent("Êtes-vous certains de vouloir supprimer cet événement ?");
  }

  async function onDelete(e) {
    try {
      await FeteDeLaMusique.deleteEventById(e.target.dataset.elementId);
      setModalState(false);
      setModalContent(false);
      setEventsList(
        eventsList.filter((element) => {
          console.log(element);
          if (element.id == e.target.dataset.elementId) {
            return false;
          }
          return true;
        })
      );
    } catch (e) {
      console.log(e);
      setErrorMessage(
        "Impossible de supprimé cet evenement, il se trouve dans le panier d'un client."
      );
    }
  }

  function onCancel() {
    setModalState(false);
    setModalContent(false);
  }

  return <Section className="flex-col items-start">
    <Section className="flex-row !justify-start">
        <ButtonAdmin
            handle={function() {
                navigate("/admin")
            }}
        >
            Retour
        </ButtonAdmin>
    </Section>
    <Section className="mx-10 rounded-lg overflow-x-auto border border-gray-200">
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
          {eventsList &&
            eventsList.map((event, i) => (
              <tr key={event.name + i} className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {event.name}
                </td>
                <td className="px-6 py-4">{event.place}</td>
                <td className="px-6 py-4">{event.max_tickets}</td>
                <td className="px-6 py-4">{event.price / 100}</td>
                <td className="px-6 py-4">
                  Du {event.start_at.slice(0, 16)} à {event.end_at.slice(0, 16)}
                </td>
                <td className="px-6 py-4">{event.sell_at.slice(0, 16)}</td>
                <td>
                  <a
                    href={`/admin/event/update/${event.id}`}
                    className="font-bold text-primary cursor-pointer hover:underline"
                  >
                    Modifier
                  </a>
                  <div
                    data-id={event.id}
                    onClick={handleDelete}
                    className="font-bold text-red-900 cursor-pointer hover:underline"
                  >
                    Supprimer
                  </div>
                </td>
              </tr>
            ))}
          <tr className="bg-white even:bg-gray-50">
            <td colSpan={7}>
              <ButtonAdmin
                handle={() => navigate("/admin/event/add")}
                className="font-bold m-5 text-green-800 border-green-800 text-center !w-52 mx-auto"
              >
                Ajouter un evenement
              </ButtonAdmin>
            </td>
          </tr>
        </tbody>
      </table>

      {modalState && (
        <ModalDelete
          onConfirm={onDelete}
          onCancel={onCancel}
          content={modalContent}
          elementId={modalState}
          errorMessage={errorMessage}
        />
      )}
    </Section>
</Section>
}
