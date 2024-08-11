import Showcase from "./pages/Home/Showcase";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Features from "./pages/Home/Features";
import HowItWorks from "./pages/Home/HowItWorks";
import UpcomingEventsWithQueryClient from "./pages/Home/UpcomingEvents";
import Newsletter from "./pages/Home/Newsletter";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <ScrollAwareNavbar />
      <Showcase />
      <Features />
      <UpcomingEventsWithQueryClient />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
