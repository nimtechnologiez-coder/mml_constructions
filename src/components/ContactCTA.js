import React from "react";
import "../Style/ContactCTA.css";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          Ready to start your <span className="highlight-red">flooring</span> project?<br />
          Get in touch with us today.
        </h2>
        <Link to="/contact">
          <button className="cta-button">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
