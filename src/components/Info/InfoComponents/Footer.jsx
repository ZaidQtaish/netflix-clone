export default function Footer() {
  return (
    <footer>
      <a className="footer-link">Questions? Contact us.</a>

      <div className="footer-link-container">
        <a className="footer-link">FAQ</a>
        <a className="footer-link">Help Center</a>
        <a className="footer-link">Account</a>
        <a className="footer-link">Media Center</a>
        <a className="footer-link">Investor Relations</a>
        <a className="footer-link">Jobs</a>
        <a className="footer-link">Ways to Watch</a>
        <a className="footer-link">Terms of Use</a>
        <a className="footer-link">Privacy</a>
        <a className="footer-link">Cookie Preferences</a>
        <a className="footer-link">Corporate Information</a>
        <a className="footer-link">Contact us</a>
        <a className="footer-link">Speed Test</a>
        <a className="footer-link">Legal Notices</a>
        <a className="footer-link">Only on Netflix</a>
      </div>

      <select className="lang">
        <option value="en">English</option>
        <option value="ar">العربية</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>

      <p>Netflix Jordan</p>
      <p className="disclaimer">This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot <a href=''>Learn More.</a></p>
    </footer>
  );
}
