import Image from "next/image";
// React Icons imports
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

// 1. Image import hamesha curly braces ke baghair hota hai agar default export ho
import footerBg from "../../assets/footerBg.png";
import footerLogo from "../../assets/mainFooterLogo.png";

// 2. Assets object mein direct variable pass karein, string nahi
const assets = {
  footerBg: footerBg,
  footerLogo: footerLogo
};

// 3. footerLinks object yahan define hona chahiye agar upar nahi hai
const footerLinks = {
  Ride: ["Travel with SimpliRide", "Sign up to be a rider"],
  Products: ["Ride", "Drive", "Business"],
  SimpliRide: ["Safety", "Sustainability", "Zero Tolerance"],
  Drive: ["Drive with us", "Sustainability", "Sign up to be a Driver"],
  QuickLinks: ["Help", "Terms & Conditions", "Privacy Policy"],
  Business: ["SimpliRide for Business"],
};

export function LandingFooter() {
  return (
    <footer className="landing-footer" id="contact">
      <div className="landing-shell footer-main-wrapper">
        
        {/* TOP SECTION: Logo & Grid */}
        <div className="landing-footer__grid">
          <div className="footer-brand-section">
            <a href="#top" className="landing-brand">
              <Image src={assets.footerLogo} alt="" aria-hidden="true" className="headerLogo" />
            </a>
            <div className="social-icons-row">
              <span className="icon-circle"><FaFacebookF /></span>
              <span className="icon-circle"><FaInstagram /></span>
              <span className="icon-circle"><FaXTwitter /></span>
              <span className="icon-circle"><FaLinkedinIn /></span>
            </div>
            <div className="contact-details">
              <p>help@simpliride.com</p>
              <p>+234 432 654 9876</p>
            </div>
          </div>

          <div className="footer-links-container">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer-col">
                <h3 className="footer-col-title">
                  {title === "QuickLinks" ? "QUICK LINKS" : title.toUpperCase()}
                </h3>
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
        </div>

        {/* BOTTOM SECTION: Big Text & Car */}
        <div className="footer-visual-bottom">
          <div className="footer-copyright-row">
            <p>©2024 - 2026 SimpliRide | All Rights Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
}