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
          Vibra<span>nix</span> Solutions
        </h1>
        <p>
          Pushing the boundaries of what's possible with cutting-edge innovation
          and future-forward technology solutions.
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