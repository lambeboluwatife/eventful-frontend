import { FaArrowAltCircleRight } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h1>How It Works</h1>
        <div className="steps">
          <div className="step">
            <div className="step icon">
              <FaArrowAltCircleRight size={32} color="red" />
            </div>
            <div className="step-details">
              <h3>Discover</h3>
              <p>
                Explore a wide range of events tailored to your passions.
                Whether you're interested in concerts, workshops, or networking
                opportunities, our platform curates a list of activities that
                align with your interests. Browse through various categories and
                find events that excite you.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step icon">
              <FaArrowAltCircleRight size={32} color="red" />
            </div>
            <div className="step-details">
              <h3>Apply/Attend</h3>
              <p>
                Once you've found an event that catches your eye, securing your
                spot is just a few clicks away. Easily apply for exclusive
                events or register to attend open sessions. With our streamlined
                process, you can confirm your attendance and start planning your
                experience in no time.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step icon">
              <FaArrowAltCircleRight size={32} color="red" />
            </div>
            <div className="step-details">
              <h3>Create</h3>
              <p>
                Have a vision for an event? Bring it to life with our
                easy-to-use tools. Host your own events and connect with
                like-minded individuals. Whether it's a small gathering or a
                large-scale conference, our platform helps you reach your target
                audience and manage every detail seamlessly.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step icon">
              <FaArrowAltCircleRight size={32} color="red" />
            </div>
            <div className="step-details">
              <h3>Remind</h3>
              <p>
                Never miss an important event again. Set up personalized
                reminders for the events you plan to attend. Receive
                notifications in advance, so you have plenty of time to prepare
                and enjoy the experience without any last-minute surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
