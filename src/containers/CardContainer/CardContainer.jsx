import { Card } from "../../components/Card/Card";

export function CardContainer({ eventList }) {
  return (
    <div className=" grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
      {eventList.map((event, i) => (
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
