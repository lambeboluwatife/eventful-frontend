import EventDetails from "@/components/EventDetails";

const EventDetailsPage = ({ params: { id } }) => {
  return (
    <div>
      <EventDetails id={id} />
    </div>
  );
};

export default EventDetailsPage;
