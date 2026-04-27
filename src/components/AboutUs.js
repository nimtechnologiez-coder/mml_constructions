import React from "react";
import "../Style/AboutUs.css";
import whoWeAreImg from "../Images/Vaccum.png";

import missionIcon from "../Images/ourmission.png";
import visionIcon from "../Images/ourvission.png";
import projectsIcon from "../Images/Projects.png";
import yearsIcon from "../Images/years.png";
import happyIcon from "../Images/happy.png";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <span className="hero-subtitle">About Us</span>
          <h1 className="hero-title">
            Precision <span className="highlight-red">Flooring</span>,<br />
            Built to Last
          </h1>
          <p className="hero-description">
            We provide reliable flooring solutions, from industrial work to<br />
            smooth finishing, designed to last.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="about-container flex-row">
          <div className="who-image">
            <img src={whoWeAreImg} alt="Who we are" />
          </div>
          <div className="who-content">
            <span className="section-subtitle">Who we are</span>
            <h2 className="section-title">Your Vision,<br />Our Commitment</h2>
            <p className="section-desc">
              MML Constructions is a flooring-focused company delivering high-quality concrete and industrial flooring solutions. From vacuum dewatered flooring to precision finishing, we ensure every surface is strong, level, and long-lasting.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="about-container">
          <h3 className="centered-subtitle">— Our Mission & Vision —</h3>
          <div className="mv-card">
            <div className="mv-item">
              <div className="mv-icon">
                <img src={missionIcon} alt="Mission" />
              </div>
              <div className="mv-text">
                <h4>Our Mission</h4>
                <p>Deliver strong, durable flooring with quality and precision.</p>
              </div>
            </div>
            <div className="mv-divider"></div>
            <div className="mv-item">
              <div className="mv-icon">
                <img src={visionIcon} alt="Vision" />
              </div>
              <div className="mv-text">
                <h4>Our Vision</h4>
                <p>Be a trusted name in high-performance flooring solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="about-container">
          <h3 className="centered-subtitle">— Our Experience —</h3>
          <div className="stats-card">
            <div className="stat-item">
              <div className="stat-icon">
                <img src={projectsIcon} alt="Projects" />
              </div>
              <p className="stat-number">50+</p>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <img src={yearsIcon} alt="Years" />
              </div>
              <p className="stat-number">5+</p>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <img src={happyIcon} alt="Clients" />
              </div>
              <p className="stat-number">100+</p>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <img src={happyIcon} alt="Satisfaction" />
              </div>
              <p className="stat-number">100%</p>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tagline */}
      <section className="final-tagline">
        <h2>Durable floors. <span className="highlight-red">Perfect finish.</span></h2>
      </section>
    </div>
  );
};

export default AboutUs;

