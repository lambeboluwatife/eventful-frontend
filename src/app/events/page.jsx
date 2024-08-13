import Footer from "@/components/Footer";
import ScrollAwareNavbar from "@/components/ScrollAwareNavbar";
import EventsHero from "@/pages/Events/EventsHero";
import LatestEvents from "@/pages/Events/LatestEvents";

async function fetchEvents() {
  const response = await fetch(
    "https://altschool-eventful-backend.onrender.com/api/events"
  );

  new Promise((resolve) => setTimeout(resolve, 2000));

  const events = await response.json();

  return events.data;
}

const EventsPage = async () => {
  const events = await fetchEvents();

  return (
    <div>
      <ScrollAwareNavbar />
      <EventsHero />
      <LatestEvents events={events} />
      <Footer />
    </div>
  );
};

export default EventsPage;
