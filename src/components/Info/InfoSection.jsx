import ShowCard from "./ShowCard";
import FeatureCard from "./FeatureCard";

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
        />
        <FeatureCard
          title="Download your shows to watch offline"
          desc="Save your favorites easily and always have something to watch."
          img='./download.png'
        />
        <FeatureCard
          title="Watch everywhere"
          desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          img='./telescope.png'
        />
        <FeatureCard
          title="Create profiles for kids"
          desc="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
        />
      </div>
    </section>
  );
}
