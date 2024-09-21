import Footer from "@/components/Footer";
import ScrollAwareNavbar from "@/components/ScrollAwareNavbar";

export const metadata = {
  title: "Eventful - Discover all events",
  description: "Discover and browser through variety of events on eventful.",
};

const EventsDetailsLayout = ({ children }) => {
  return (
    <div>
      <ScrollAwareNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default EventsDetailsLayout;
