"use client";
import useAuth from "@/hooks/useAuth";
import LoadingPage from "@/loading";
import ScrollAwareNavbar from "@/components/ScrollAwareNavbar";
import Footer from "@/components/Footer";
import DashboardHero from "@/pages/Dashboard/DashboardHero";
import OrganizerDashboard from "@/pages/Dashboard/OrganizerDashboard";
import AttendeeDashboard from "@/pages/Dashboard/AttendeeDashboard";

export default function Dashboard() {
  const { decodedToken, isLoading } = useAuth(true);

  if (isLoading) {
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
