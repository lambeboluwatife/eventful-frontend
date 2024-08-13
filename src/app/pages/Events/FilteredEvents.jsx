import EventList from "@/components/EventList";

const FilteredEvents = ({ events }) => {
  const seminarEvents = events.filter((event) => event.category === "seminar");
  const technologyEvents = events.filter(
    (event) => event.category === "technology"
  );
  const artsEvents = events.filter((event) => event.category === "arts");

  return (
    <section className="filtered-event">
      <div className="container">
        <div className="seminar-events">
          <h1>Seminars</h1>
          <EventList events={seminarEvents} />
        </div>
        <div className="seminar-events">
          <h1>Technology</h1>
          <EventList events={technologyEvents} />
        </div>
        <div className="seminar-events">
          <h1>Arts</h1>
          <EventList events={artsEvents} />
        </div>
      </div>
    </section>
  );
};

export default FilteredEvents;
