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
          <p> With a focus on efficiency and growth, we empower sellers to maximize their potential and achieve long-term success in the competitive digital marketplace.</p>
        </div>
       
      </section>

      {/* Company Info Section */}
      <section className="info-section">
        <div className="info-content">
          <h2>Innovating with Passion, Delivering with Excellence</h2>
          <p>
            At VibranixTech, we blend creativity with technology to craft
            seamless digital experiences. Our solutions are designed to
            transform businesses, ensuring growth and sustainability.
          </p>
        </div>
      </section>

<section className="second-section">
<h1>Who We Are</h1>
<p>We are a team of passionate developers, designers, and strategists dedicated to pushing the boundaries of technology. Our expertise spans web development, AI, cloud solutions, and DevOps, ensuring that businesses stay ahead in the digital era.</p>
<div className="highlights">
          <div className="highlight-box">
            <h3>Expert Guidance</h3>
            <p>We help businesses set up and scale their online presence.</p>
          </div>
          <div className="highlight-box">
            <h3>End-to-End Solutions</h3>
            <p>From store setup to marketing, we provide complete e-commerce solutions.</p>
          </div>
          <div className="highlight-box">
            <h3>Customer-Centric Approach</h3>
            <p>We focus on your success by offering tailored strategies.</p>
          </div>
</div>

<div className="stats">
  <div className="stat-box">
    <h3>500+</h3>
    <p>Happy Clients</p>
  </div>
  <div className="stat-box">
    <h3>200+</h3>
    <p>Projects Completed</p>
  </div>
  <div className="stat-box">
    <h3>10+</h3>
    <p>Years of Experience</p>
  </div>
</div>
</section>


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
