import Footer from "@/components/Footer";
import ScrollAwareNavbar from "@/components/ScrollAwareNavbar";
import EventsHero from "@/pages/Events/EventsHero";
import FilteredEvents from "@/pages/Events/FilteredEvents";
import LatestEvents from "@/pages/Events/LatestEvents";
import axios from "axios";

async function fetchEvents() {
  try {
    const response = await axios.get(
      "https://altschool-eventful-backend.onrender.com/api/events"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

const EventsPage = async () => {
  const events = await fetchEvents();

  return (
    <div>
      <ScrollAwareNavbar />
      <EventsHero />
      <LatestEvents events={events} />
      <FilteredEvents events={events} />
      <Footer />
    </div>
  );
};

export default EventsPage;
