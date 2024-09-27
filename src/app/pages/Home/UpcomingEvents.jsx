"use client";
import { useState, useEffect } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Link from "next/link";
import LoadingPage from "@/loading";

const queryClient = new QueryClient();

const UpcomingEvents = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["eventsData"],
    queryFn: () =>
      fetch("https://altschool-eventful-backend.onrender.com/api/events").then(
        (res) => res.json()
      ),
  });

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(Math.floor(Math.random() * 5) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleActiveChange = (index) => {
    setActiveCard(index);
  };

  if (isLoading) return <LoadingPage />;

  if (error) return <h4>An error has occurred: {error.message}</h4>;

  const recentEvents = data.data
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 7);

  return (
    <div className="upcoming-events">
      <div className="container">
        <h1>Upcoming Events</h1>
        <div className="expanding-cards">
          {recentEvents.map((event, index) => (
            <div
              className={activeCard === index ? "panel active" : "panel"}
              key={event._id}
              style={{
                backgroundImage: `url(${event.backdrop})`,
              }}
              onClick={() => handleActiveChange(index)}
            >
              <h3>{event.title}</h3>
              <h5>{event.location}</h5>
              <h6>
                {event.description.length > 100
                  ? event.description.substring(0, 100) + "..."
                  : event.description}
              </h6>
              <Link href={`events/details/${event._id}`}>See Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const UpcomingEventsWithQueryClient = () => (
  <QueryClientProvider client={queryClient}>
    <UpcomingEvents />
  </QueryClientProvider>
);

export default UpcomingEventsWithQueryClient;
