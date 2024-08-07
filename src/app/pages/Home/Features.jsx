import { MdEventNote, MdQrCode2, MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaRegStickyNote } from "react-icons/fa";
import { BiCollection } from "react-icons/bi";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <h1>Features</h1>
        <div className="grid grid-4">
          <div className="feature">
            <BiCollection size={32} color="red" />
            <h3>Diverse Experiences</h3>
            <h6>
              Discover a wide range of events that cater to every taste and
              passion. From high-energy concerts featuring top artists to
              captivating theater performances that bring stories to life,
              there's something for everyone.
            </h6>
          </div>
          <div className="feature">
            <MdQrCode2 size={32} color="red" />
            <h3>QR Code Tickets</h3>
            <h6>
              Experience seamless and secure entry to your favorite events with
              QR code tickets. When you purchase a ticket on Eventful, a unique
              QR code is generated, ensuring that your ticket is personal and
              secure.
            </h6>
          </div>
          <div className="feature">
            <FaRegStickyNote size={32} color="red" />
            <h3>Reminders</h3>
            <h6>
              Never miss an event again with customizable reminders. Event
              creators can set reminders to notify attendees about event dates.
              This flexible reminder system ensures that both organizers and
              participants stay informed.
            </h6>
          </div>
          <div className="feature">
            <MdOutlineAnalytics size={32} color="red" />
            <h3>Analytics</h3>
            <h6>
              Gain valuable insights into your event’s performance with detailed
              analytics. Eventful provides event creators with comprehensive
              data on attendee numbers, ticket sales, and engagement metrics.
            </h6>
          </div>
          {/* <div className="feature">
                <MdEventNote size={32} color="red" />
                <h3>Event Creation</h3>
                <h6>Create events and experiences like webinars, seminars, conferences, tech events, and classes from anywhere in the world and Sell event tickets online.</h6>
            </div>
            <div className="feature">
                <AiOutlineUsergroupAdd size={32} color="red"/>
                <h3>Attendee Engagement</h3>
                <h6>Keep attendees informed and engaged by reminding them about upcoming events, event updates, and tickets. Attendee can also set when to receive notifications about events.</h6>
            </div>
            <div className="feature">
                <MdQrCode2 size={32} color="red"/>
                <h3>QR Code Tickets</h3>
                <h6>QR codes are generated for attendee when the tickets are bought. This QR code would be used to verify that the attendee is valid and can have access to an event.</h6>
            </div>
            <div className="feature">
                <MdOutlineAnalytics size={32} color="red"/>
                <h3>Analytics</h3>
                <h6>Eventful provides creators the ability to see how many attendees they have had all the time and specific to events and also how many tickets bought all the time and specific to events.</h6>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
