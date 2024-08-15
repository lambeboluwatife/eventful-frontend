const DashboardHero = ({ user }) => {
  return (
    <section className="dashboard-hero">
      <div className="container">
        <h3>Welcome</h3>
        <h2>{user.username}</h2>
        <h5>
          {user.role === "organizer"
            ? "See all created events, events analytics, and create new event here."
            : "See all events applied to, events tickets. QR codes, and other details here."}
        </h5>
      </div>
    </section>
  );
};

export default DashboardHero;
