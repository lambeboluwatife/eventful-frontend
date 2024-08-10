const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h1>Stay Updated</h1>
        <h5>
          Subscribe to our monthly newsletter and get updates <br /> about our
          services, a quick update on the latest events, <br /> tips, and
          insights just for you.
        </h5>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
