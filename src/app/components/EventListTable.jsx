import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const EventListTable = ({ events }) => {
  return (
    <section className="event-list">
      <div className="event-table">
        <div className="event-row header">
          <div className="event-cell">Backdrop</div>
          <div className="event-cell">Event Title</div>
          <div className="event-cell">Date</div>
          <div className="event-cell">Location</div>
          <div className="event-cell">Category</div>
        </div>
        {events?.map((event) => (
          <Link href={`/events/details/${event._id}`}>
            <div className="event-row">
              <div className="event-cell">
                <Image
                  width={100}
                  height={100}
                  src={event.backdrop}
                  alt="Tech Conference 2024 Backdrop"
                  className="event-backdrop"
                />
              </div>
              <div className="event-cell">{event.title}</div>
              <div className="event-cell">
                {moment(event.date).format("ddd. D MMM, YY")}
              </div>
              <div className="event-cell">{event.location}</div>
              <div className="event-cell">{event.category}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EventListTable;
