import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const EventList = ({ events }) => {
  const recentEvents = events
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 3);
  return (
    <div className="event-cards">
      <div className="grid grid-4">
        {recentEvents.map((event) => {
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
    </div>
  );
};

export default EventList;
