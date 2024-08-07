"use client";
import { useState } from "react";
import Showcase from "./pages/Home/Showcase";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Features from "./pages/Home/Features";
import UpcomingEvents from "./pages/Home/UpcomingEvents";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <ScrollAwareNavbar />
      <Showcase />
      <Features />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
