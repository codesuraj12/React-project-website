import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Innovating with Passion, Delivering with Excellence</p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="info-section">
        <div className="info-content">
          <h2>Empowering Businesses with Technology</h2>
          <p>
            At VibranixTech, we blend creativity with technology to craft
            seamless digital experiences. Our solutions are designed to
            transform businesses, ensuring growth and sustainability.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Goal Section */}
      <section className="mission-vision">
        <div className="card">
          <div className="icon">🚀</div>
          <h3>Our Mission</h3>
          <p>
            Delivering cutting-edge digital solutions that elevate brands and
            enhance customer engagement.
          </p>
        </div>
        <div className="card">
          <div className="icon">🌍</div>
          <h3>Our Vision</h3>
          <p>
            To be a globally trusted tech partner, driving digital excellence
            and innovation.
          </p>
        </div>
        <div className="card">
          <div className="icon">🎯</div>
          <h3>Our Goal</h3>
          <p>
            Building long-term relationships through quality services and
            customer-centric solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
