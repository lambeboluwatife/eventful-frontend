import EventList from "@/components/EventList";

const LatestEvents = ({ events }) => {
  //   const recentEvents = events
  //     .sort((a, b) => b.createdAt - a.createdAt)
  //     .slice(0, 4);
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
