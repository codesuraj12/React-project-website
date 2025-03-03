import React from "react";
import { useNavigate } from "react-router-dom";
import "./portfolio.css";

import burgerTemplate from "./assets/burger_template.png";
import shaadhi from "./assets/shaadhi.png";
import toffee from "./assets/toffee.png";

const portfolioItems = [
  {
    name: "Burger Template",
    image: burgerTemplate,
    description: "A modern and responsive burger restaurant template.",
    link: "/blog",
  },
  {
    name: "Shaadi.com Clone",
    image: shaadhi,
    description: "Affordable Shaadi.com clone solution with advanced features.",
    link: "/blog",
  },
  {
    name: "Graphic Design",
    image: toffee,
    description: "High-quality graphic designs at budget-friendly prices.",
    link: "/blog",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2>Our Portfolio</h2>
        <p>Explore our top-notch work delivered to happy clients worldwide.</p>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card">
              <img src={item.image} alt={item.name} />
              <div className="portfolio-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => navigate(item.link)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
