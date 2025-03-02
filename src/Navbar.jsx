import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaGoogle, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Main Navigation */}
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/"> <span className="thread">Vibranix</span>Tech</a>
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About US</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/Blog">Blogs</a></li>
          <li><a href="/video">Video</a></li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
