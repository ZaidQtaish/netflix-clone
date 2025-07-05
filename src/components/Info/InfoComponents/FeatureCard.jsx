export default function FeatureCard({ title, desc, iconClass }) {
  return (
    <div className="feature-card">
      <div>
        <h5 className="feature-title">{title}</h5>
        <p className="desc">{desc}</p>
      </div>
      <i className={`icon fa-xl fa-solid ${iconClass}`}></i>
    </div>
  );
}
