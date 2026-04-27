import React from "react";
import "../Style/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="heros">
      <div className="heros-container">
        <span className="heros-subtitle">Our Services</span>
        
        <h1 className="heros-title">
          Our Flooring <span className="highlights-red">Services</span>
        </h1>

        <p className="heros-description">
          High-quality flooring solutions designed for strength,<br />
          durability, and precision.
        </p>

        <div className="heros-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;
