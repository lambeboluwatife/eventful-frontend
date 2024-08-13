import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const EventList = ({ events }) => {
  return (
    <div className="events-container">
      {events.map((event) => (
        <div className="event-card" key={event._id}>
          <Image
            src={event.backdrop}
            alt={event.title}
            width={200}
            height={50}
            className="event-image"
          />
          <div className="event-content">
            <h2 className="event-title">
              {event.title.length > 30
                ? event.title.substring(0, 15) + "..."
                : event.title}
            </h2>
            <h6 className="event-date">
              {moment(event.date, "DD/MM/YYYY").format("ddd. D MMM, YY")}
            </h6>
            <h6 className="event-location">{event.location}</h6>
            <h6 className="event-description">
              {event.description.length > 100
                ? event.description.substring(0, 15) + "..."
                : event.description}
            </h6>
            <Link
              href={`/events/details/${event._id}`}
              className="event-button"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;

{
  /* <div className="event-cards">
<div className="grid grid-4">
  {events.map((event) => {
    return (
      <div className="event-card" key={event._id}>
        <Link href={`/events/details/${event._id}`}>
          {" "}
          <Image
            width={600}
            height={200}
            priority={false}
            src={event.backdrop}
            alt={`${event.title} backdrop`}
            className="event-card-image"
          />
          <div className="event-card-details">
            <h3>
              {event.title.length > 30
                ? event.title.substring(0, 15) + "..."
                : event.title}
            </h3>
            <h5 className="event-location">{event.location}</h5>
            <div className="event-timeline">
              <span>
                <h6 className="event-date">
                  {moment(event.date, "DD/MM/YYYY").format(
                    "ddd. D MMM, YY"
                  )}
                </h6>
              </span>
              <span>
                <h6 className="event-time">{event.time}</h6>
              </span>
            </div>
            <h6 className="event-price">
              {event.price === 0 ? "Free" : `N${event.price}`}
            </h6>

            <h5 className="event-organizer">
              {`Created By: ${event.organizer.organizationName}`}
            </h5>
          </div>
        </Link>
      </div>
    );
  })}
</div>
</div> */
}
