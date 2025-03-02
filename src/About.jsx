import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="info-section">
        <div className="info-content">
          <h2>Embarking on a journey of innovation and impact.</h2>
          <p>
            We are a passionate group of digital artisans, dedicated to helping
            our clients navigate the digital landscape. We believe in the power
            of technology and design to transform businesses, catapulting them
            into the future.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Goal Section */}
      <section className="mission-vision">
        <div className="card">
          <div className="icon">🚀</div>
          <h3>Our Mission</h3>
          <p>
            Empower businesses with innovative, high-quality digital solutions
            that enhance online presence and drive growth.
          </p>
        </div>
        <div className="card">
          <div className="icon">👀</div>
          <h3>Our Vision</h3>
          <p>
            Be a leading digital agency known worldwide for innovation,
            commitment to quality, and client success.
          </p>
        </div>
        <div className="card">
          <div className="icon">🎯</div>
          <h3>Our Goal</h3>
          <p>
            Exceed client expectations with tailored digital solutions, building
            trust and shared success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
