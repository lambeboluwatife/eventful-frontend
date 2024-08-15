"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import LoadingPage from "@/loading";
import ScrollAwareNavbar from "@/components/ScrollAwareNavbar";
import Footer from "@/components/Footer";
import DashboardHero from "@/pages/Dashboard/DashboardHero";
import OrganizerDashboard from "@/pages/Dashboard/OrganizerDashboard";
import AttendeeDashboard from "@/pages/Dashboard/AttendeeDashboard";

export default function Dashboard() {
  const router = useRouter();

  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/sign-in");
      } else {
        try {
          const decoded = jwtDecode(token);

          const currentTime = Math.floor(Date.now() / 1000);
          if (decoded.exp < currentTime) {
            localStorage.removeItem("token");
            router.push("/sign-in");
          } else {
            setDecodedToken(decoded);
          }
        } catch (error) {
          console.error("Failed to decode token:", error);
          router.push("/sign-in");
        }
      }
    }
  }, [router]);

  if (!decodedToken) {
    return <LoadingPage />;
  }

  return (
    <>
      <ScrollAwareNavbar />
      <DashboardHero user={decodedToken.user} />
      {decodedToken.user.role === "organizer" ? (
        <OrganizerDashboard user={decodedToken.user} />
      ) : (
        <AttendeeDashboard user={decodedToken.user} />
      )}
      <Footer />
    </>
  );
}
