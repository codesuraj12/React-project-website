import React from "react";
import HeroSection from "./heroSection";
import Portfolio from "./portfolio";
import Footer from "./footer";
import { FaBrain,FaRobot, 
   FaMobileAlt, FaCloud, FaShieldAlt,
    FaChartBar, FaNetworkWired,FaDatabase, FaServer, FaCodeBranch } from "react-icons/fa";

import { CiMobile3 } from "react-icons/ci";


import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <HeroSection />

        <section id="services" className="services-section">
          <h2 >Our Services</h2>
          <div className="services-grid">
            {[
             { icon: <FaBrain />, title: "AI Solutions", desc: "Advanced AI-driven solutions to enhance efficiency and automation." },
             { icon: <FaMobileAlt />, title: "Mobile Development", desc: "Cross-platform mobile apps for iOS and Android." },
             { icon: <FaCloud />, title: "Cloud Solutions", desc: "Scalable and secure cloud computing services." },
             { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Robust security solutions to protect your digital assets." },
             { icon: <FaChartBar />, title: "Data Analytics", desc: "Data-driven insights for smarter decision-making." },
             { icon: <FaNetworkWired />, title: "IoT Integration", desc: "Smart device connectivity for modern businesses." }
            ].map((service, index) => (
              <div className="card-container" key={index}>
                <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <h2 className="about-title">Who We Are</h2>
            <p className="about-description">
              At <span className="highlight">VibranixTech</span>, we craft cutting-edge and scalable digital solutions tailored to drive business growth. Our passion for innovation fuels our mission to deliver seamless, high-performance technology that transforms industries.
            </p>
          </div>
        </section>

        <Portfolio />

        <section id="expertise" className="expertise-section">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            {[
             { icon: <FaRobot />, title: "AI & ML", desc: "Advanced machine learning models and AI-driven solutions." },
             { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Protecting digital assets with robust security." },
             { icon: <FaCloud />, title: "DevOps", desc: "Automated CI/CD pipelines and DevOps workflows." },
             { icon: <CiMobile3 />, title: "Mobile Dev", desc: "Seamless cross-platform mobile applications." },
             { icon: <FaCloud />, title: "Cloud Native", desc: "Scalable and resilient cloud solutions." }
            ].map((expertise, index) => (
              <div className="card-container" key={index}>
                <div className="expertise-card">
                <div className="expertise-icon">{expertise.icon}</div>
                  
                  <h3>{expertise.title}</h3>
                  <p>{expertise.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="expertise-grid second-row">
            {[
              // { icon: faCogs, title: "DevOps", desc: "Automated CI/CD pipelines and DevOps workflows." },
              // { icon: faMobileAlt, title: "Mobile Dev", desc: "Seamless cross-platform mobile applications." }
            ].map((expertise, index) => (
              <div className="card-container" key={index}>
                <div className="expertise-card">
                <div className="expertise-icon">{expertise.icon}</div>
                  
                  <h3>{expertise.title}</h3>
                  <p>{expertise.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="technology-stack" className="technology-stack-section">
          <h2>Technology Stack</h2>
          <div className="tech-stack-grid">
            {[
              { icon: <FaDatabase />, title: "MongoDB", desc: "NoSQL database for modern applications." },
              { icon: <FaServer />, title: "Node.js", desc: "Backend development with JavaScript." },
              { icon: <FaCodeBranch />, title: "Git & DevOps", desc: "Version control and deployment pipelines." }
            ].map((tech, index) => (
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
