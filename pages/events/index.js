import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <h1>
        <EventsSearch />
        <EventList items={events} />
      </h1>
    </div>
  );
}

export default AllEventsPage;
