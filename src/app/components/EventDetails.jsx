// "use client";
// import useAuth from "@/hooks/useAuth";
// import LoadingPage from "@/loading";
// import axios from "axios";
// import moment from "moment";
// import { CiCalendarDate } from "react-icons/ci";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import EventList from "./EventList";
// import { applyToEvent } from "@/utils/ApplyForEvent";
// import { generateTicket } from "@/utils/generateTicket";

// async function fetchEvent(id) {
//   try {
//     const response = await axios.get(
//       `https://altschool-eventful-backend.onrender.com/api/events/${id}`
//     );
//     return response.data.data;
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     return [];
//   }
// }

// async function fetchEvents() {
//   try {
//     const response = await axios.get(
//       "https://altschool-eventful-backend.onrender.com/api/events/"
//     );
//     return response.data.data;
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     return [];
//   }
// }

// const EventDetails = async ({ id }) => {
//   const { decodedToken, isLoading } = useAuth();

//   if (isLoading) {
//     return <LoadingPage />;
//   }

//   const event = await fetchEvent(id);

//   const applicantApplied = event.applicants.some(
//     (applicant) => applicant.applicantId === decodedToken.user._id
//   );

//   const ticketGenerated = event.tickets.some(
//     (applicant) => applicant.attendeeId === decodedToken.user._id
//   );

//   const events = await fetchEvents();

//   const otherEvents = events.filter(
//     (newEvent) =>
//       newEvent.category === event.category && newEvent._id !== event._id
//   );

//   return (
//     <section className="event-details">
//       <div
//         className="event-details-hero"
//         style={{
//           backgroundImage: `url(${event.backdrop})`,
//         }}
//       >
//         <div className="event-details-showcase">
//           <div className="container">
//             <h1>{event.title}</h1>
//           </div>
//         </div>
//       </div>
//       <div className="event-details-content">
//         <div className="container">
//           <div className="first-content">
//             <div className="date">
//               {moment(event.date).format("dddd MMMM, YYYY")}
//             </div>
//             <h1>{event.title}</h1>
//             <h6>{event.description}</h6>
//             <div className="date-time">
//               <h3>Date and Time</h3>
//               <div>
//                 <span className="icon">
//                   <CiCalendarDate color="red" size={20} />
//                 </span>
//                 <span>{moment(event.date).format("dddd MMMM, YYYY")}</span>
//                 <span>
//                   <strong>{event.time}</strong>
//                 </span>
//               </div>
//             </div>

//             <div className="location">
//               <h3>Location</h3>
//               <div>
//                 <span>
//                   <HiOutlineLocationMarker color="red" size={20} />
//                 </span>
//                 <span>{event.location}</span>
//               </div>
//             </div>

//             <div className="organizer">
//               <h3>Organized By</h3>
//               <h2>
//                 <strong>{event.organizer.organizationName}</strong>
//               </h2>
//             </div>
//           </div>
//           <div className="second-content">
//             <div className="price">
//               <h3>Price:</h3>
//               <h1>{event.price === 0 ? "Free" : `N${event.price}`}</h1>
//               <h6>Ticket Sold: {event.ticketsSold}</h6>
//               {decodedToken ? (
//                 applicantApplied ? (
//                   ticketGenerated ? (
//                     "Ticket generated, check dashboard for ticket"
//                   ) : (
//                     <button onClick={() => generateTicket(id)}>
//                       Generate Ticket
//                     </button>
//                   )
//                 ) : (
//                   <button onClick={() => applyToEvent(id)}>
//                     Apply For This Event
//                   </button>
//                 )
//               ) : (
//                 <p>Please sign in to apply for this event.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="other-events">
//         <div className="container">
//           <h3>Other events you may like</h3>
//           <EventList events={otherEvents} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventDetails;

"use client";
import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import LoadingPage from "@/loading";
import axios from "axios";
import moment from "moment";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import EventList from "./EventList";
import { applyToEvent } from "@/utils/ApplyForEvent";
import { generateTicket } from "@/utils/generateTicket";

async function fetchEvent(id) {
  try {
    const response = await axios.get(
      `https://altschool-eventful-backend.onrender.com/api/events/${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return null;
  }
}

async function fetchEvents() {
  try {
    const response = await axios.get(
      "https://altschool-eventful-backend.onrender.com/api/events/"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

const EventDetails = ({ id }) => {
  const { decodedToken, isLoading } = useAuth();
  const [event, setEvent] = useState(null);
  const [otherEvents, setOtherEvents] = useState([]);
  const [applicantApplied, setApplicantApplied] = useState(false);
  const [ticketGenerated, setTicketGenerated] = useState(false);

  useEffect(() => {
    const loadEventData = async () => {
      const eventData = await fetchEvent(id);
      setEvent(eventData);

      if (decodedToken && eventData) {
        const hasApplied = eventData.applicants.some(
          (applicant) => applicant.applicantId === decodedToken.user._id
        );
        setApplicantApplied(hasApplied);

        const hasTicket = eventData.tickets.some(
          (ticket) => ticket.attendeeId === decodedToken.user._id
        );
        setTicketGenerated(hasTicket);
      }

      const allEvents = await fetchEvents();
      const filteredEvents = allEvents.filter(
        (newEvent) =>
          newEvent.category === eventData.category &&
          newEvent._id !== eventData._id
      );
      setOtherEvents(filteredEvents);
    };

    loadEventData();
  }, [id, decodedToken]);

  if (isLoading || !event) {
    return <LoadingPage />;
  }

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
          <div className="first-content">
            <div className="date">
              {moment(event.date).format("dddd MMMM, YYYY")}
            </div>
            <h1>{event.title}</h1>
            <h6>{event.description}</h6>
            <div className="date-time">
              <h3>Date and Time</h3>
              <div>
                <span className="icon">
                  <CiCalendarDate color="red" size={20} />
                </span>
                <span>{moment(event.date).format("dddd MMMM, YYYY")}</span>
                <span>
                  <strong>{event.time}</strong>
                </span>
              </div>
            </div>

            <div className="location">
              <h3>Location</h3>
              <div>
                <span>
                  <HiOutlineLocationMarker color="red" size={20} />
                </span>
                <span>{event.location}</span>
              </div>
            </div>

            <div className="organizer">
              <h3>Organized By</h3>
              <h2>
                <strong>{event.organizer.organizationName}</strong>
              </h2>
            </div>
          </div>
          <div className="second-content">
            <div className="price">
              <h3>Price:</h3>
              <h1>{event.price === 0 ? "Free" : `N${event.price}`}</h1>
              <h6>Ticket Sold: {event.ticketsSold}</h6>
              {decodedToken ? (
                applicantApplied ? (
                  ticketGenerated ? (
                    "Ticket generated, check dashboard for ticket"
                  ) : (
                    <button onClick={() => generateTicket(id)}>
                      Generate Ticket
                    </button>
                  )
                ) : (
                  <button onClick={() => applyToEvent(id)}>
                    Apply For This Event
                  </button>
                )
              ) : (
                <p>Please sign in to apply for this event.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {otherEvents.length !== 0 && (
        <div className="other-events">
          <div className="container">
            <h3>Other events you may like</h3>
            <EventList events={otherEvents} />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetails;
