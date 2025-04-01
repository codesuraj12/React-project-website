import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="content">
        <h1>
          Riz<span>entra</span> 
        </h1>
        <p>
         Empowering businesses with cutting-edge technology and next-gen solutions to drive growth and success.
        </p>
        <div className="buttons">
          <button className="btn" onClick={() => handleScroll("services")}>
            Explore Services
          </button>
          <button className="btn" onClick={() => handleScroll("about")}>
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;