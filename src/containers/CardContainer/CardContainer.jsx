import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "../../api/feteDeLaMusique";
import { Card } from "../../components/Card/Card";

export function CardContainer() {
  const [eventList, setEventList] = useState();

  async function fetchEvents() {
    const resultFetch = await FeteDeLaMusique.fetchAllEvents();
    setEventList(resultFetch);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className=" grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
      {eventList &&
        eventList.map((event, i) => (
          <Card
            key={event.name + i}
            max_tickets={event.max_tickets}
            name={event.name}
            place={event.place}
          />
        ))}
    </div>
  );
}
