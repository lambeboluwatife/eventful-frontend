import EventList from "@/components/EventList";
import { events } from "../../data/events";

async function fetchEvents() {
  const response = await fetch(
    "https://altschool-eventful-backend.onrender.com/api/events"
  );

  new Promise((resolve) => setTimeout(resolve, 2000));

  const events = await response.json();
  return events.data;
}

const UpcomingEvents = async () => {
  // const events = await fetchEvents()
  // console.log(events)
  return (
    <div className="upcoming-events">
      <div className="container">
        <h1>Upcoming Events</h1>
        <EventList events={events} />
      </div>
    </div>
  );
};

export default UpcomingEvents;