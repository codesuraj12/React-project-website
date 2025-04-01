import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "./assets/vibranix-logo.png"
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newdropdownOpen, setNewDropdownOpen] = useState(false);
  const [careeropen, setCareeropen] = useState(false)

  return (
    <nav className='navbar' >
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Vibranix Logo" className="logo-img" />
          </a>
        </div>



        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About Us</a></li>


          <li className="relative">


            <a className="dropdown "
              onClick={() => setDropdownOpen((prev) => !prev)}
            >Services
              {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>

            <ul className={`Service-menu ${dropdownOpen ? 'show' : ''}`} >


              <li><a href="/services/web-development" >Web Development</a></li>
              <li><a href="/services/branding" >Branding</a></li>
              <li><a href="/services/digital-marketing" >Digital Marketing</a></li>
              <li><a href="/services/Ecommerce Seller" >Ecommerce Seller</a></li>
            </ul>


          </li>
          <li className="relative">


            <a className="dropdown "
              onClick={() => setNewDropdownOpen((prev) => !prev)}
            >E-Commerce Solutions
              {newdropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>

            <ul className={`Service-menu ${newdropdownOpen ? 'add' : ''}`} >


              <li><a href="/ecommerce/Amezon " >Amezon Seller Management</a></li>
              <li><a href="/ecommerce/Flipkart" >Flipkart Seller Management</a></li>
              <li><a href="/ecommerce/store" >E-Commerce Store Setup</a></li>
              <li><a href="/ecommerce/Inventory" >Order & Inventory Manegement </a></li>
              <li><a href="/ecommerce/adcampaign" >Ad Campaign Management </a></li>
            </ul>


          </li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/video">Video</a></li>
          <li>

<a href="career">Careers</a>


            {/* <a className="dropdown "
              onClick={() => setCareeropen((prev) => !prev)}
            >Career
              {careeropen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
<ul className={`Service-menu ${careeropen? 'addcareer': ''}`}>

<li><a href="">All Jobs</a></li>
<li><a href="">Applied jobs</a></li>
</ul> */}

          </li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
