import React, { useState, useEffect } from "react";
import "./Navbar.css";

import newLogo from "./assets/new logo.png";
import oldLogo from "./assets/old logo.png";
import { Link, NavLink } from "react-router-dom";



function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);

  /* ================= SCROLL HIDE / SHOW ================= */
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector(".header");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // add shadow after scroll
      if (currentScrollY > 10) {
        header.classList.add("nav-shadow");
      } else {
        header.classList.remove("nav-shadow");
      }

      // scroll down → hide
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        header.classList.add("nav-hide");
      }
      // scroll up → show
      else {
        header.classList.remove("nav-hide");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <div className="navbar">

          {/* LOGO */}
          <div className="width-logo">
            <NavLink to="/" className="thim-logo logo-hover">
              <img src={newLogo} alt="Logo" className="logo-img old-logo" />
              <img src={oldLogo} alt="Logo Hover" className="logo-img new-logo" />
            </NavLink>
          </div>

          {/* DESKTOP MENU */}
          <nav className="menu">
            <div className="menu-item">
                <NavLink to="/">Home</NavLink>
            </div>

            <span className="separator">|</span>

            <div className="menu-item"><a href="#">About Us</a></div>
            <span className="separator">|</span>

            <div className="menu-item">
              <a href="#">Courses ▾</a>
              <div className="mega">
                <div>
                  <h4>Computer Courses</h4>
                  <a href="#">Basic Computer</a>
                  <a href="#">ADCS</a>
                  <a href="#">ADIWA</a>
                  <a href="#">Tally + GST</a>
                  <a href="#">DIOA</a>
                  <a href="#">Typing</a>
                </div>
                <div>
                  <h4>Programming</h4>
                  <a href="#">C / C++</a>
                  <a href="#">Java</a>
                  <a href="#">Python</a>
                  <a href="#">Web Development</a>
                  <a href="#">HTML / CSS</a>
                  <a href="#">JavaScript</a>
                </div>
                <div>
                  <h4>Professional</h4>
                  <a href="#">AutoCad</a>
                  <a href="#">Graphic Design</a>
                  <a href="#">Corel Draw</a>
                  <a href="#">PhotoShop</a>
                  <a href="#">DataEntry</a>
                </div>
              </div>
            </div>

            <span className="separator">|</span>

            <div className="menu-item">
              <a href="#">Training ▾</a>
              <div className="dropdown">
                <a href="#">3 Month Training</a>
                <a href="#">6 Month Training</a>
                <a href="#">Summer Training</a>
              </div>
            </div>

            <span className="separator">|</span>

            <div className="menu-item">
                <NavLink to="/gallery">Gallery</NavLink>
            </div>
            
            <span className="separator">|</span>

            <div className="menu-item"><a href="#"></a></div>
            <span className="separator">|</span>

            <div className="menu-item"><a href="#">Contact Us</a></div>
          </nav>

          <a className="offer" href="#">Latest Offers »</a>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="gradient"></div>
      </header>

      {/* MOBILE MENU */}
<div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
  
  <NavLink to="/" onClick={() => setMobileOpen(false)}>
    Home
  </NavLink>

  <NavLink to="/about" onClick={() => setMobileOpen(false)}>
    About Us
  </NavLink>

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      setCourseOpen(!courseOpen);
    }}
  >
    Courses ▾
  </a>

  {courseOpen && (
    <div className="mobile-dropdown">
      <a href="#">Basic Computer</a>
      <a href="#">Tally + GST</a>
      <a href="#">Web Development</a>
      <a href="#">Digital Marketing</a>
    </div>
  )}

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      setTrainingOpen(!trainingOpen);
    }}
  >
    Training ▾
  </a>

  {trainingOpen && (
    <div className="mobile-dropdown">
      <a href="#">Industrial Training</a>
      <a href="#">Internship</a>
    </div>
  )}

  {/* 🔥 YAHI ADD KIYA GAYA HAI */}
  <NavLink to="/gallery" onClick={() => setMobileOpen(false)}>
    Gallery
  </NavLink>

  <a href="#">Verify</a>
  <a href="#">Blog</a>

  <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
    Contact Us
  </NavLink>
</div>

    </>
  );
}

export default Navbar;
