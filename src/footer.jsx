import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Branding */}
        <div className="footer-logo">
          <h2>VibranixTech</h2>
          <p>Innovating the Future</p>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        {/* Copyright */}
        <p className="copyright">© 2025 VibranixTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
