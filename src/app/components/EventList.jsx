import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const EventList = ({ events }) => {
  return (
    <div className="event-cards">
      <div className="grid grid-4">
        {events.map((event) => {
          return (
            <div className="event-card" key={event._id}>
              <Link href={`/events/details/${event._id}`}>
                <Image
                  width={100}
                  height={70}
                  priority={false}
                  src={event.backdrop}
                  alt={`${event.title} backdrop`}
                  className="event-card-image"
                />
                <h5>
                  {event.title.length > 30
                    ? event.title.substring(0, 15) + "..."
                    : event.title}
                </h5>
                <div className="event-card-details">
                  <span>
                    <small className="event-date">
                      {moment(event.date, "DD/MM/YYYY").format("MMM D, YY")}
                    </small>
                  </span>
                  <span>
                    <small className="event-time">{event.time}</small>
                  </span>
                  <h6 className="event-category">{event.category}</h6>
                  <h6 className="event-price">
                    {event.price === 0 ? "Free" : `N${event.price}`}
                  </h6>

                  <h6 className="event-organizer">
                    {event.organizer.organizationName}
                  </h6>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
