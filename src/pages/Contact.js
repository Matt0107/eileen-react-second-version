import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div id="contact-section">
        <div className="general-management">
          <h2>Merktour - Künstleragentur</h2>
          <h3>Ingeborg Anna Zinke</h3>
          <div className="contact-icons">
            <img src="./assets/phone.svg" alt="phone" />
            <p>+497224-995 751</p>
          </div>
          <div className="contact-icons">
            <img src="./assets/mobile_phone.svg" alt="mobile-phone" />
            <p>+49151-504 012 99</p>
          </div>
          <a href="mailto:anna@merktour.de" className="contact-links">
            anna@merktour.de
          </a>
          <a href="https://www.merktour.de/" className="contact-links">
            www.merktour.de
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
