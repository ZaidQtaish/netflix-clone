export default function FeatureCard({ title, desc, img }) {
    return (
        <div className="feature-card">
            <h5 className="feature-title">{title}</h5>
            <p className="desc">{desc}</p>
        </div>
    )
}