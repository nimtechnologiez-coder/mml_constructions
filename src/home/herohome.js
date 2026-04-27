import React, { useState, useEffect } from "react";
import "../Style/herohome.css";
import { Link } from "react-router-dom";


// Import images
import hero1 from "../Images/hero1.png";
import hero2 from "../Images/hero2.png";
import hero3 from "../Images/hero3.png";
import hero4 from "../Images/hero4.png";
import hero5 from "../Images/hero5.png";
import hero6 from "../Images/hero6.png";
import hero7 from "../Images/hero7.png";

const HeroHome = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-container">
      <div className="hero-text-content">
        <h1 className="hero-title">
          Transform Your Floors in <span className="highlight">Expert</span> Precision
        </h1>
        <p className="hero-description">
          Book expert floor service professionals in just a few clicks.
        </p>
        <Link to="/service">
  <button className="btn-book">Book a service</button>
</Link>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          <div className="hero-image-shade"></div>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Expert floor service professional ${index + 1}`}
              className={`hero-img ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
