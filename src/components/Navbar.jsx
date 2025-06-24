import React from "react";
import "./Navbar.css"; // Importing plain CSS

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <a href="#home" className="navbar-logo">
          Digital Presence
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
