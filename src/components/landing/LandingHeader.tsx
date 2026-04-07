import Image from "next/image";
const navItems = ["Ride", "Drive", "Business", "Safety", "About"];
import mainLogo from "../../assets/mainLogo.png";

const headerassets = {
  mainLogo: mainLogo
}

export function LandingHeader() {
  return (
    <header className="landing-header">
      <div className="landing-shell landing-header__inner">
        <a href="#top" className="landing-brand" aria-label="SimpliRide home">
          <Image src={headerassets.mainLogo} alt="" aria-hidden="true" className="headerLogo" />
        </a>

        <nav className="landing-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="landing-header__actions">
          <a href="/login" className="landing-button landing-button--primary">
            Earn with SimpliRide
          </a>
          <a href="/register" className="landing-button landing-button--secondary">
            Get SimpliRide App
          </a>
        </div>
      </div>
    </header>
  );
}

