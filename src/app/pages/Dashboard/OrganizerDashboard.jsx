"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../../css/dashboard.css";

import axios from "axios";
import LoadingPage from "@/loading";
import EventListTable from "@/components/EventListTable";

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

        const response2 = await axios.get(
          `https://altschool-eventful-backend.onrender.com/api/analytics/overall`,
          config
        );
        console.log(response2.data);

        // const response3 = await axios.get(
        //   `https://altschool-eventful-backend.onrender.com/api/events/`,
        //   config
        // );
        // console.log("Response 3:", response3.data);

        setData({
          createdEvents: response1.data.data,
          overallAnalytics: response2.data.data,
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
          {data?.createdEvents !== "" ? (
            <EventListTable events={data?.createdEvents} />
          ) : (
            <h6>No created events</h6>
          )}
        </div>
        <div className="organizer-analytics">
          <Link href="/create-event">Create Event</Link>
          {data?.overallAnalytics && (
            <div className="overall-analytics">
              <h1>Analytics</h1>
              <div className="analytics-data">
                <h6>
                  Total Applicants: {data?.overallAnalytics.totalApplicants}
                </h6>
                <h6>Ticket Sold: {data?.overallAnalytics.totalTicketSold}</h6>
                <h6>
                  Scanned Tickets: {data?.overallAnalytics.totalScannedTickets}
                </h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrganizerDashboard;
