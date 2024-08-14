import axios from "axios";
import moment from "moment";

async function fetchEvent(id) {
  try {
    const response = await axios.get(
      `https://altschool-eventful-backend.onrender.com/api/events/${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

const EventDetails = async ({ id }) => {
  const event = await fetchEvent(id);

  return (
    <section className="event-details">
      <div
        className="event-details-hero"
        style={{
          backgroundImage: `url(${event.backdrop})`,
        }}
      >
        <div className="event-details-showcase">
          <div className="container">
            <h1>{event.title}</h1>
          </div>
        </div>
      </div>
      <div className="event-details-content">
        <div className="container">
          <div className="date">
            {moment(event.date, "DD/MM/YYYY").format("dddd MMMM, YYYY")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
