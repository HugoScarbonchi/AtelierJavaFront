import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../api/feteDeLaMusique";
<<<<<<< Updated upstream:src/containers/CardEventsContainer/CardEventsContainer.jsx
import { CardEvent } from "../../components/CardEvent/CardEvent";
=======
import { Card } from "../../components/Card/Card";
import { Buttton } from "../../components/Button/Button";
>>>>>>> Stashed changes:src/containers/CardContainer/CardContainer.jsx

export function CardEventsContainer({ max = false }) {
  const [eventList, setEventList] = useState();

  async function fetchEvents() {
    let resultFetch = await FeteDeLaMusique.fetchAllEvents();
    if (max) {
      resultFetch = resultFetch.slice(0, max);
    }
    setEventList(resultFetch);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className=" grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
      {eventList &&
        eventList.map((event, i) => (
          <CardEvent
            key={event.name + i}
            max_tickets={event.max_tickets}
            name={event.name}
            place={event.place}
            price={event.price}
          />
        ))}
      
    </div>
  );
}
