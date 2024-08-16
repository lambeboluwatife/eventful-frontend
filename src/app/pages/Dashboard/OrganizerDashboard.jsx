"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import axios from "axios";
import LoadingPage from "@/loading";

const OrganizerDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      setLoading(true);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response1 = await axios.get(
          "https://altschool-eventful-backend.onrender.com/api/organizer/created",
          config
        );
        console.log("Response 1:", response1.data.data);

        // const response2 = await axios.get(
        //   `https://altschool-eventful-backend.onrender.com/api/events/`,
        //   config
        // );
        // console.log("Response 2:", response2.data);

        // const response3 = await axios.get(
        //   `https://altschool-eventful-backend.onrender.com/api/events/`,
        //   config
        // );
        // console.log("Response 3:", response3.data);

        setData({
          createdEvents: response1.data.data,
        });
      } catch (err) {
        console.error("API call failed:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingPage />;
  if (error) return <h6 className="container">Error: {error.message}</h6>;

  return (
    <section className="organizer-dashboard-details">
      <div className="container">
        <div className="organizer-events">
          <h1>Created Events</h1>
          {data?.createdEvents !== null ? (
            <h6>Events</h6>
          ) : (
            <h6>No created events</h6>
          )}
        </div>
        <div className="organizer-analytics">
          <Link href="/create-event">Create Event</Link>
        </div>
      </div>
    </section>
  );
};

export default OrganizerDashboard;
