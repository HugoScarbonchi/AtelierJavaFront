import { Card } from "../../components/Card/Card";

export function CardContainer({ eventList }) {
  return (
    <div className=" flex container mx-auto">
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
