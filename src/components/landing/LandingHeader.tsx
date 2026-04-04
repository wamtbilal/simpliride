const navItems = ["Ride", "Drive", "Business", "Safety", "About"];

export function LandingHeader() {
  return (
    <header className="landing-header">
      <div className="landing-shell landing-header__inner">
        <a href="#top" className="landing-brand" aria-label="SimpliRide home">
          <span className="landing-brand__mark">S</span>
          <span>SimpliRide</span>
        </a>

        <nav className="landing-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="landing-header__actions">
          <a href="/register" className="landing-button landing-button--secondary">
            Get SimpliRide App
          </a>
          <a href="/login" className="landing-button landing-button--primary">
            Earn with SimpliRide
          </a>
        </div>
      </div>
    </header>
  );
}

