import Button from "../UI/Button";
import EventItem from "./EventItem";

function EventList({ items }) {
  return (
    <ul className="h-screen flex flex-col justify-center items-center gap-5">
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
