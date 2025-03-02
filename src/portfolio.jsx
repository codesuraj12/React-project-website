import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./portfolio.css"; // Ensure this CSS file exists for styling

import burgerTemplate from "./assets/burger_template.png";
import shaadhi from "./assets/shaadhi.png";
import toffee from "./assets/toffee.png"

const portfolioItems = [
  { 
    name: "Burger Template", 
    image: burgerTemplate, 
    description: "A modern and responsive burger restaurant template." 
  },
  { 
    name: "shaadhi.com clone", 
    image: shaadhi, 
    description: "shaadhi.com clone solution on affordable price." 
  },
  { 
    name: "Graphic design", 
    image: toffee, 
    description: "perfect design on affordable price." 
  }
];

const Portfolio = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
      <section className="portfolio">
        <h2>Portfolio</h2> {/* Modern Styled Title */}
        <div className="portfolio-layout">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img src={item.image} alt={item.name} />
              <div className="portfolio-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => navigate("/Blog")}>View More</button> {/* Navigate to Blog */}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Portfolio;
