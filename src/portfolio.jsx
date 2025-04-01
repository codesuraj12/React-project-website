import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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


  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate();
  const [direction, setDirection] = useState(1)
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1)
    }, 5000);
    return () => clearInterval(interval)

  }, [])


  const nextSlide = () => {
    setDirection(1); // Move right
    setCurrentIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setDirection(-1); // Move left
    setCurrentIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2>Our Portfolio</h2>
        <p>Explore our top-notch work delivered to happy clients worldwide.</p>
        <div className="portfolio-slider">
          <AnimatePresence mode="wait">
            {portfolioItems.map((item, index) => (

              index === currentIndex ? (

                <motion.div
                  key={index}
                  className='portfolio-card'
                  initial={{opacity: 0, x: direction * 100 }}
                  animate={{opacity : 1 , x: 0 }}
                  exit={{ x: direction * -100}}
                  transition={{  duration: 0.5, ease: "easeIn" }} 

                >
                  <img src={item.image} alt={item.name} />
                  <div className="portfolio-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button onClick={() => navigate(item.link)}>View Details</button>
                  </div>
                </motion.div>
              ) : null
            ))}
          </AnimatePresence>
        <div className="nav-buttons">
          <button onClick={prevSlide}>
            ❮
          </button>
          <button onClick={nextSlide}>
            ❯
          </button>
        </div>
        </div>
      </div>
    </section>

  );
};

export default Portfolio;
