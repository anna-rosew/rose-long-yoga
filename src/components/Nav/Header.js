import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../styles/imgs/icons/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <a href="/" className="site-logo">
            <img src={Logo} alt="Rose Long Logo" className="site-logo" />
          </a>
        </div>
        <div className="menu">
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <Link to="/" className="menu-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/work" className="menu-link" onClick={toggleMenu}>
              Work With Me
            </Link>
            <Link to="/about" className="menu-link" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="menu-link" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/membership" className="menu-link" onClick={toggleMenu}>
              Membership
            </Link>
            <Link to="/membership" className="menu-link" onClick={toggleMenu}>
              Membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
