import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../Images/logo.png";
import "../Style/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column company-info">
          <div className="footer-logo-box">
            <img src={logoImg} alt="MML Logo" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">Trusted Flooring & Construction Services</p>

          <p className="footer-desc">
            Providing reliable flooring and construction solutions in Chennai with a focus on quality professionalism.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
          </ul>
        </div>


        {/* Contact Us Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <span className="icon">📞</span>
              <a href="tel:+918610013355" className="contact-link">+91 86100 13355</a>
            </li>
            <li>
              <span className="icon">✉️</span>
              <a href="mailto:mmlconstruction61@gmail.com" className="contact-link">mmlconstruction61@gmail.com</a>
            </li>
            <li>
              <span className="icon">📍</span>
              <span>#7 Krapangavanayagar koil Street,<br />
                Kannadapalayam, Chennai - 600123</span>
            </li>
          </ul>
        </div>


        {/* Social Links */}
        <div className="footer-column">
          <h3>Social Links</h3>
          <div className="social-icons">
            <span className="social-icon">in</span>
            <span className="social-icon">f</span>
            <span className="social-icon">ig</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom-line"></div>
    </footer>
  );
};

export default Footer;

