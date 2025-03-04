import React from "react";
import "./About.css";

const AboutUs = () => {
  
// create array
  const data = [
    { icon: "🚀", title: "Our Mission", text: "Delivering cutting-edge digital solutions that elevate brands and enhance customer engagement." },
    { icon: "🌍", title: "Our Vision", text: "To be a globally trusted tech partner, driving digital excellence and innovation." },
    { icon: "🎯", title: "Our Goal", text: "Building long-term relationships through quality services and customer-centric solutions." }
  ];

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
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}

      </section>
    </div>
  );
};

export default AboutUs;
