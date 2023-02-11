import { useEffect, useState } from "react";
import { FeteDeLaMusique } from "./api/feteDeLaMusique";
import { CardContainer } from "./containers/CardContainer/CardContainer";

export function App() {
  const [eventList, setEventList] = useState();

  async function fetchEvents() {
    const resultFetch = await FeteDeLaMusique.fetchAllEvents();
    setEventList(resultFetch);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1 className="mb-20">Java Front</h1>
      {eventList && <CardContainer eventList={eventList} />}
    </div>
  );
}
