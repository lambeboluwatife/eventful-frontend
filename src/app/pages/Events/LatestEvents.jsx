import EventList from "@/components/EventList";

const LatestEvents = ({ events }) => {
  return (
    <section className="latest-events">
      <div className="container">
        <h1>Latest Events</h1>
        <EventList events={events} />
      </div>
    </section>
  );
};

export default LatestEvents;
