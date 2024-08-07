import Button from "@/components/Button";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <h1>
          Events Made Easy <br />
          For Creators
        </h1>
        <h2>
          Eventful is more than just a ticketing platform; <br />
          it's your passport to a world of unforgettable moments.
        </h2>

        <div className="showcase-btn">
          <Button
            text="Discover Events"
            color="red"
            textColor="white"
            link="/events"
          />
          <Button
            text="Create an Event"
            color="white"
            textColor="red"
            link="/events"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
