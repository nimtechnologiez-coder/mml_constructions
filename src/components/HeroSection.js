import React from "react";
import "../Style/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <span className="hero-subtitle">Our Services</span>
        
        <h1 className="hero-title">
          Our Flooring <span className="highlight-red">Services</span>
        </h1>

        <p className="hero-description">
          High-quality flooring solutions designed for strength,<br />
          durability, and precision.
        </p>

        <div className="hero-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;