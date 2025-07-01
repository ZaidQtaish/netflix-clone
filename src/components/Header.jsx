export default function Header() {
  return (
    <header>
      <img
        className="netflix-logo"
        src="./Netflix_logo.png"
        alt="Netflix Logo"
      />
      <div className="login-container">
        <select className="lang">
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
        <button className="btn-netflix">Sign In</button>
      </div>
    </header>
  );
}
