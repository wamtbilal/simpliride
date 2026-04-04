import { LandingFooter } from "./LandingFooter";
import { LandingHeader } from "./LandingHeader";

const assets = {
  heroBackdrop: "https://www.figma.com/api/mcp/asset/afdb11e3-194a-4ebc-a248-77aa0626fe18",
  heroOverlay: "https://www.figma.com/api/mcp/asset/adfded08-1bb3-4f3e-a720-41f05a1b8bf9",
  heroCar: "https://www.figma.com/api/mcp/asset/d608a569-38fc-4871-84d3-bb684b026b26",
  heroCardImage: "https://www.figma.com/api/mcp/asset/6d50babc-02a2-4a5c-9f8a-501919ea962a",
  appOne: "https://www.figma.com/api/mcp/asset/dece1d6d-dc74-42fe-8a4c-e7863a9fb095",
  appTwo: "https://www.figma.com/api/mcp/asset/552cf1a0-3399-4f80-875f-50ee21c1b64e",
  appThree: "https://www.figma.com/api/mcp/asset/e73e6689-844f-466f-98c5-1a280ee27b7d",
  appFour: "https://www.figma.com/api/mcp/asset/8191d244-de79-4ebd-9a87-62ada4f8e299",
  whyChoose: "https://www.figma.com/api/mcp/asset/c9d7936e-c848-426c-832e-46de1041b0ab",
  familySafety: "https://www.figma.com/api/mcp/asset/c37e3f3f-ef3e-4771-a9cd-aff83ad9138d",
  cityCar: "https://www.figma.com/api/mcp/asset/c90d745b-fdbb-4c98-beb8-acbe09c1c8c1",
  luxuryRide: "https://www.figma.com/api/mcp/asset/ff4e62b8-37ea-475e-8218-4eaab4337bb3",
  phoneLady: "https://www.figma.com/api/mcp/asset/26b88e37-ccae-460e-9f49-b52b8453b36b",
  futureCar: "https://www.figma.com/api/mcp/asset/521ddefc-7b0c-4a39-9393-4611a98f47b0",
};

const rideOptions = [
  "Bike",
  "Mini",
  "Sedan",
  "Comfort",
  "Electric",
  "XL",
  "Premium",
];

const driverBenefits = [
  {
    title: "Reliable Income",
    text: "Build a steady source of income with every ride and predictable payouts.",
  },
  {
    title: "Flexible Schedule",
    text: "Drive around your routine. No rigid commitments, just freedom to earn.",
  },
  {
    title: "Instant Payments",
    text: "Get paid faster after completed trips when you need your earnings most.",
  },
];

const safetyCards = [
  {
    title: "24/7 Incident Support",
    text: "Dedicated help and monitored journeys keep every trip supported from start to finish.",
  },
  {
    title: "Track My Ride",
    text: "Live trip tracking and ride sharing make arrivals easier to follow in real time.",
  },
];

const appCards = [
  {
    title: "Ride with SimpliRide",
    text: "Request in seconds, ride in minutes. All in one app.",
    image: assets.appOne,
  },
  {
    title: "Locate Your Car",
    text: "Track and locate where your driver is parked.",
    image: assets.appTwo,
  },
  {
    title: "SOS Alert",
    text: "Record ride, report crash, share trip and send SOS instantly.",
    image: assets.appThree,
  },
  {
    title: "Schedule Ride",
    text: "Schedule your rides in advance with complete assurance.",
    image: assets.appFour,
  },
];

const comfortCards: Array<{ title: string; text: string; tone: "blue" | "light"; }> = [
  {
    title: "Reclaim Your Commute",
    text: "Polished interiors, reliable pickups and calm trips make busy days feel smoother.",
    tone: "blue",
  },
  {
    title: "Your Ride, Your Way",
    text: "Choose the comfort level, timing and trip style that fits your routine best.",
    tone: "light",
  },
];

const futureFeatures = [
  {
    number: "01",
    title: "Airport Transfers",
    text: "Reliable pickups and planned arrivals for stress-free travel to and from the airport.",
  },
  {
    number: "02",
    title: "Ride-Sharing",
    text: "Smarter everyday city trips with clean cars, fair pricing and easy booking.",
  },
  {
    number: "03",
    title: "Corporate Accounts",
    text: "Business-ready transport for teams, guests and recurring office travel.",
  },
  {
    number: "04",
    title: "Standard Rides",
    text: "Affordable, dependable and always easy to book for everyday movement.",
  },
];

function AppShowcaseCard({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <article className="landing-app-card">
      <div className="landing-app-card__header">
        <span className="landing-app-card__pill">{title}</span>
        <span className="landing-app-card__arrow" aria-hidden="true">
          +
        </span>
      </div>
      <p>{text}</p>
      <img src={image} alt={title} className="landing-app-card__image" />
    </article>
  );
}

function MiniInfoCard({
  title,
  text,
  tone = "light",
}: {
  title: string;
  text: string;
  tone?: "light" | "blue";
}) {
  return (
    <article className={`landing-mini-card landing-mini-card--${tone}`}>
      <div className="landing-mini-card__icon" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function LandingPage() {
  return (
    <>
      <LandingHeader />

      <main className="landing-page" id="top">
        <section className="landing-hero landing-hero--figma">
          <div className="landing-shell landing-hero-figma">
            <div className="landing-hero-figma__bg">
              <img src={assets.heroBackdrop} alt="" aria-hidden="true" className="landing-hero-figma__bg-image" />
              <img src={assets.heroOverlay} alt="" aria-hidden="true" className="landing-hero-figma__overlay-image" />
            </div>

            <div className="landing-hero-figma__content">
              <p className="landing-hero-figma__eyebrow">Book a Ride</p>
              <h1>On Time, Safe &amp; Affordable</h1>
              <p className="landing-hero-figma__subtext">
                Trip booking made simple with trusted drivers, smooth pickups and city rides that feel premium without the premium fare.
              </p>

              <form className="landing-booking-form">
                <input type="text" placeholder="Enter Pickup Location" />
                <input type="text" placeholder="Enter Drop Location" />
                <button type="button">Book Ride</button>
              </form>
            </div>

            <div className="landing-hero-badge landing-hero-badge--comfort">Comfortable</div>
            <div className="landing-hero-badge landing-hero-badge--secure">Secure Ride</div>

            <div className="landing-hero-card">
              <img src={assets.heroCardImage} alt="Trusted by thousands" className="landing-hero-card__image" />
              <div className="landing-hero-card__overlay" />
              <span className="landing-hero-card__brand">SimpliRide</span>
              <h2>Trusted by Thousands People</h2>
              <div className="landing-hero-card__rating">
                <div className="landing-hero-card__avatars">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <span>4.8 Rating</span>
              </div>
            </div>

            <div className="landing-hero-stats">
              <div>
                <span>Traveler</span>
                <strong>12,000+</strong>
              </div>
              <div>
                <span>Safe Ride</span>
                <strong>6,000+</strong>
              </div>
            </div>

            <img src={assets.heroCar} alt="SimpliRide hero car" className="landing-hero-figma__car" />
          </div>
        </section>

        <section className="landing-section landing-section--driver">
          <div className="landing-shell">
            <div className="landing-section-copy">
              <div>
                <p className="landing-section-copy__eyebrow">Become a Driver</p>
                <h2>Drive on your time, Earn when you want</h2>
              </div>
              <p>
                Experience the freedom of accessing your earnings on your own schedule. Every day can feel like payday with flexible driving and simpler withdrawals.
              </p>
            </div>

            <div className="landing-driver-grid">
              <div className="landing-benefit-grid">
                {driverBenefits.map((item) => (
                  <article key={item.title} className="landing-benefit-card">
                    <div className="landing-benefit-card__icon" aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
              <div className="landing-driver-photo">
                <img src={assets.luxuryRide} alt="Driver using SimpliRide app" />
              </div>
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--rides" id="ride">
          <div className="landing-shell">
            <div className="landing-rides-heading">
              <div>
                <p>Choose your</p>
                <h2>Perfect Ride</h2>
              </div>
              <p>
                Flexible choices, dependable comfort and safer city movement built for every kind of routine.
              </p>
            </div>

            <div className="landing-ride-options">
              {rideOptions.map((option) => (
                <button key={option} type="button" className="landing-ride-pill">
                  <span className="landing-ride-pill__icon" aria-hidden="true" />
                  {option}
                </button>
              ))}
            </div>

            <div className="landing-safety-intro">
              <div>
                <p className="landing-section-copy__eyebrow">SimpliRide Safety First</p>
                <h3>Your Safety always comes first without any compromise.</h3>
              </div>
              <p>
                Verified captains, monitored journeys and built-in support tools help every trip feel more dependable.
              </p>
            </div>

            <div className="landing-safety-grid">
              <div className="landing-safety-photo">
                <img src={assets.familySafety} alt="Parent securing child in car" />
              </div>
              {safetyCards.map((card) => (
                <MiniInfoCard key={card.title} title={card.title} text={card.text} />
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--app" id="features">
          <div className="landing-shell landing-app-showcase">
            <div className="landing-app-showcase__heading">
              <p>Your next ride is just one tap away.</p>
              <h2>Experience the power of our app</h2>
            </div>

            <div className="landing-app-showcase__grid">
              {appCards.map((card) => (
                <AppShowcaseCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--city">
          <div className="landing-shell landing-city-feature">
            <div className="landing-city-feature__image">
              <img src={assets.cityCar} alt="SimpliRide electric vehicle in city" />
            </div>
            <div className="landing-city-feature__content">
              <p className="landing-section-copy__eyebrow">Why Choose SimpliRide</p>
              <h2>Rides you can believe in</h2>
              <p>
                Cleaner design, dependable pickups and service standards that make every city trip feel more refined.
              </p>
              <a href="/register" className="landing-button landing-button--primary">
                Get Ride with SimpliRide
              </a>
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--style">
          <div className="landing-shell">
            <div className="landing-style-heading">
              <div>
                <p>Sit back and</p>
                <h2>Ride in Style</h2>
              </div>
              <p>
                Where comfort, convenience and reliability come together for everyday commutes and important meetings.
              </p>
            </div>

            <div className="landing-style-grid">
              <div className="landing-style-photo">
                <img src={assets.luxuryRide} alt="Passenger riding in comfort" />
              </div>
              {comfortCards.map((card) => (
                <MiniInfoCard key={card.title} title={card.title} text={card.text} tone={card.tone} />
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--phone">
          <div className="landing-shell landing-phone-cta">
            <div className="landing-phone-cta__content">
              <p className="landing-section-copy__eyebrow">Download SimpliRide Application</p>
              <h2>Smarter rides, One tap away where every ride begins on your phone</h2>
              <p>
                Book rides, choose from verified drivers and track your journey in real time with an app designed around convenience.
              </p>
              <div className="landing-store-row">
                <a href="/" className="landing-store-badge">Google Play</a>
                <a href="/" className="landing-store-badge">App Store</a>
              </div>
            </div>
            <div className="landing-phone-cta__image-wrap">
              <img src={assets.phoneLady} alt="Woman using SimpliRide app" className="landing-phone-cta__image" />
              <div className="landing-phone-chip landing-phone-chip--one">Anytime</div>
              <div className="landing-phone-chip landing-phone-chip--two">Safer Ride</div>
              <div className="landing-phone-chip landing-phone-chip--three">Affordable</div>
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--future">
          <div className="landing-shell landing-future">
            <div className="landing-future__headline">
              <p className="landing-section-copy__eyebrow">Ontime-Safe-Affordable</p>
              <h2>The Future of ultimate ride service experience starts here</h2>
            </div>

            <div className="landing-future__body">
              <div className="landing-future__list">
                {futureFeatures.map((feature) => (
                  <article key={feature.number} className="landing-future-item">
                    <div className="landing-future-item__top">
                      <span>{feature.number}</span>
                      <strong>{feature.title}</strong>
                      <em>{feature.number === "01" ? "-" : "+"}</em>
                    </div>
                    <p>{feature.text}</p>
                  </article>
                ))}
              </div>
              <div className="landing-future__image">
                <img src={assets.futureCar} alt="SimpliRide future car" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}

