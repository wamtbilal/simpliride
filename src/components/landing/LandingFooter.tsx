const footerLinks = {
  Ride: ["Travel with SimpliRide", "Sign up to be a rider"],
  Products: ["Ride", "Drive", "Business"],
  SimpliRide: ["Safety", "Sustainability", "Zero Tolerance"],
  QuickLinks: ["Help", "Terms & Conditions", "Privacy Policy"],
};

export function LandingFooter() {
  return (
    <footer className="landing-footer" id="contact">
      <div className="landing-shell landing-footer__grid">
        <div>
          <a href="#top" className="landing-brand landing-brand--footer">
            <span className="landing-brand__mark">S</span>
            <span>simpliride</span>
          </a>
          <p className="landing-footer__copy">
            On-time, safe and affordable rides for city travel, airport runs and
            everyday commutes across the city.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3>{title === "QuickLinks" ? "Quick links" : title}</h3>
            <ul className="landing-footer__links">
              {links.map((link) => (
                <li key={link}>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

