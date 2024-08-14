import Showcase from "./pages/Home/Showcase";
import Features from "./pages/Home/Features";
import HowItWorks from "./pages/Home/HowItWorks";
import UpcomingEventsWithQueryClient from "./pages/Home/UpcomingEvents";
import Newsletter from "./pages/Home/Newsletter";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
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
