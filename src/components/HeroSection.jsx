import Header from "./Header";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Header />
      <div className="center">
        <h1 className="title">
          Unlimited movies, TV
          <br />
          shows, and more
        </h1>
        <h6 className="pricing">Starts at USD 3.99. Cancel anytime.</h6>
        <p className="center-p">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="email-form">
          <input className="email" type="email" placeholder="Email address" />
          <button className="btn-netflix email-submit">
            Get Started <i className="fa-solid fa-angle-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
