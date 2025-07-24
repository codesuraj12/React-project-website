import React, { useState } from "react";
import HeroSection from "./heroSection";
import Portfolio from "./portfolio";
import Footer from "./footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBrain, FaRobot,
  FaMobileAlt, FaCloud, FaShieldAlt,
  FaChartBar, FaNetworkWired, FaDatabase, FaServer, FaCodeBranch
} from "react-icons/fa";

import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

import { CiMobile3 } from "react-icons/ci";
import "./home.css";


const serviceData =[
  { icon: <FaBrain />, title: "AI Solutions", desc: "Advanced AI-driven solutions to enhance efficiency and automation." },
  { icon: <FaMobileAlt />, title: "Mobile Development", desc: "Cross-platform mobile apps for iOS and Android." },
  { icon: <FaCloud />, title: "Cloud Solutions", desc: "Scalable and secure cloud computing services." },
  { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Robust security solutions to protect your digital assets." },
  { icon: <FaChartBar />, title: "Data Analytics", desc: "Data-driven insights for smarter decision-making." },
  { icon: <FaNetworkWired />, title: "IoT Integration", desc: "Smart device connectivity for modern businesses." }
];

const expertiseData = [
  { icon: <FaRobot />, title: "AI & ML", desc: "Advanced machine learning models and AI-driven solutions." },
  { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Protecting digital assets with robust security." },
  { icon: <FaCloud />, title: "DevOps", desc: "Automated CI/CD pipelines and DevOps workflows." },
  { icon: <CiMobile3 />, title: "Mobile Dev", desc: "Seamless cross-platform mobile applications." },
  { icon: <FaCloud />, title: "Cloud Native", desc: "Scalable and resilient cloud solutions." }
]
const techData =[
  { icon: <FaDatabase />, title: "MongoDB", desc: "NoSQL database for modern applications." },
  { icon: <FaServer />, title: "Node.js", desc: "Backend development with JavaScript." },
  { icon: <FaCodeBranch />, title: "Git & DevOps", desc: "Version control and deployment pipelines." }
]





const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [more, setMore] = useState(false);


  return (
    <>
      <div className="home-container">
        <HeroSection />

        <section id="services" className="services-section">
          <h2 >Our Services</h2>
          <div className="slider">


            <div className="services-grid">
              <AnimatePresence>
              {serviceData.slice(0, showAll ? serviceData.length : 3).map((service, index) => (
                <motion.div
                key={index}
                className="card-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
            
                transition={{ duration: 0.5 }}
              >
                <div className="card-container" key={index}>
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
                </motion.div>
              ))}
              </AnimatePresence>
            </div>
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
            <div className="Straightline">

        {showAll ?"Show Less" : "Show More"}
        {showAll ? <BiUpArrowAlt/>: <BiDownArrowAlt/>}
            </div>
      </button>
          </div>

        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <h2 className="about-title">Who We Are</h2>
            <p className="about-description">
              At <span className="highlight">Vibranix</span>,
              we specialize in creating innovative, scalable, and future-ready digital solutions. Our expertise lies in harnessing cutting-edge technology to empower businesses, streamline operations, and drive long-term success. With a passion for excellence, we transform ideas into impactful digital experiences.

            </p>
          </div>
        </section>

        <Portfolio />

        <section id="expertise" className="expertise-section">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            {expertiseData.slice(0,more ?expertiseData.length: 3).map((expertise, index) => (
              <div className="card-container" key={index}>
                <div className="expertise-card">
                  <div className="expertise-icon">{expertise.icon}</div>

                  <h3>{expertise.title}</h3>
                  <p>{expertise.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="show-more-btn" onClick={() => setMore(!more)}>
            <div className="Straightline">

        {more ?"Show Less" : "Show More"}
        {more ? <BiUpArrowAlt/>: <BiDownArrowAlt/>}
            </div>
      </button>
          
        </section>

        <section id="technology-stack" className="technology-stack-section">
          <h2>Technology Stack</h2>
          <div className="tech-stack-grid">
            {techData.map((tech, index) => (
              <div className="card-container" key={index}>
                <div className="tech-stack-card">

                  <div className="tech-stack-icon">{tech.icon}</div>

                  <h3>{tech.title}</h3>
                  <p>{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </>
  );
};

export default Home;
