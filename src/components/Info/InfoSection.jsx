import ShowCard from "./InfoComponents/ShowCard";
import FeatureCard from "./InfoComponents/FeatureCard";
import FaqBox from "./InfoComponents/FaqBox";
import Footer from "./InfoComponents/Footer"

export default function InfoSection() {
  return (
    <section className="info-section">
      <h5>Trending Now</h5>
      <div className="showcard-container">
        <ShowCard img="./squidgame.png" number="1" />
        <ShowCard img="./al-ashash.jpg" number="2" />
        <ShowCard img="./ginny.jpg" number="3" />
        <ShowCard img="./el-le3eb.jpg" number="4" />
        <ShowCard img="./straw.jpg" number="5" />
        <ShowCard img="./prison-break.jpg" number="6" />
      </div>

      <h5>More Reasons to Join</h5>
      <div className="feature-container">
        <FeatureCard
          title="Enjoy on your TV"
          desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          iconClass="fa-tv"
        />
        <FeatureCard
          title="Download your shows to watch offline"
          desc="Save your favorites easily and always have something to watch."
          iconClass="fa-cloud-arrow-down"
        />
        <FeatureCard
          title="Watch everywhere"
          desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          iconClass="fa-earth"
        />
        <FeatureCard
          title="Create profiles for kids"
          desc="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
          iconClass="fa-children"
        />
      </div>

      <h5>Frequently Asked Questions</h5>
      <div className="faq-container">
        <FaqBox
          question="What is Netflix?"
          answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
          anime, documentaries, and more on thousands of internet-connected devices.
          You can watch as much as you want, whenever you want without a single commercial –
          all for one low monthly price. There's always something new to discover and new TV shows and movies are
          added every week!"
        />
        <FaqBox
          question="How much does Netflix cost?"
          answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop,
          or streaming device, all for one fixed monthly fee.
          Plans range from USD 3.99 to USD 9.99 a month. No extra costs,
          no contracts."
        />
        <FaqBox
          question="Where can i watch?"
          answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones,
          tablets, streaming media players and game consoles.
          You can also download your favorite shows with the iOS or Android app.
          Use downloads to watch while you're on the go and without an internet connection.
          Take Netflix with you anywhere."
        />
        <FaqBox
          question="How do i cancel?"
          answer="Netflix is flexible. There are no pesky contracts and no commitments.
          You can easily cancel your account online in two clicks.
          There are no cancellation fees – start or stop your account anytime."
        />
        <FaqBox
          question="What can i watch on Netflix"
          answer="Netflix has an extensive library of feature films,
          documentaries, TV shows, anime, award-winning Netflix originals, and more.
          Watch as much as you want, anytime you want."
        />
        <FaqBox
          question="is Netflix good for kids?"
          answer="The Netflix Kids experience is included in your membership to give parents
          control while kids enjoy family-friendly TV shows and movies in their own space.
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity
          rating of content kids can watch and block specific titles you don’t want kids to see."
        />
      </div>
      <div className="second-email-container">
        <div>
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
      </div>
      <Footer />
    </section>
  );
}
