import { mockEvents, mockReminders, mockTickets } from "@/data/mockData";

const AttendeeDashboard = () => {
  return (
    <section className="dashboard-details">
      <div className="container">
        <h1>Attendee Dashboard</h1>

        <div className="dashboard">
          <h1 className="dashboard-title">Attendee Dashboard</h1>

          {/* User Event Section */}
          <section className="section">
            <h2>Events You're Attending</h2>
            <div className="events">
              {mockEvents.length > 0 ? (
                mockEvents.map((event) => (
                  <div key={event.id} className="event-card">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(event.date).toDateString()}
                    </p>
                    <p>
                      <strong>Time:</strong> {event.time}
                    </p>
                    <p>
                      <strong>Category:</strong> {event.category}
                    </p>
                  </div>
                ))
              ) : (
                <p>No upcoming events</p>
              )}
            </div>
          </section>

          {/* Tickets Section */}
          <section className="section">
            <h2>Your Tickets</h2>
            <div className="tickets">
              {mockTickets.length > 0 ? (
                mockTickets.map((ticket) => (
                  <div key={ticket.id} className="ticket-card">
                    <p>
                      <strong>Event:</strong> {ticket.eventTitle}
                    </p>
                    <p>
                      <strong>Seat:</strong> {ticket.seat}
                    </p>
                    <p>
                      <strong>Price:</strong> ${ticket.price}
                    </p>
                  </div>
                ))
              ) : (
                <p>No tickets bought</p>
              )}
            </div>
          </section>

          {/* Reminders Section */}
          <section className="section">
            <h2>Reminders</h2>
            <div className="reminders">
              {mockReminders.length > 0 ? (
                mockReminders.map((reminder) => (
                  <div key={reminder.id} className="reminder-card">
                    <p>
                      <strong>Event:</strong> {reminder.eventTitle}
                    </p>
                    <p>
                      <strong>Reminder:</strong> {reminder.message}
                    </p>
                  </div>
                ))
              ) : (
                <p>No reminders</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AttendeeDashboard;
