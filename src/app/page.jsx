import Showcase from "./pages/Home/Showcase";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Features from "./pages/Home/Features";
import HowItWorks from "./pages/Home/HowItWorks";
import UpcomingEventsWithQueryClient from "./pages/Home/UpcomingEvents";

const Home = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <ScrollAwareNavbar />
      <Showcase />
      <Features />
      <UpcomingEventsWithQueryClient />
      <HowItWorks />
    </div>
  );
};

export default Home;
