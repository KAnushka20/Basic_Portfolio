import React from "react";
import "./Hero.css";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Hi,I'm Anushka Kumari</h1>
      <h2 className="hero-title1">Full Stack Developer</h2>
      <p className="hero-subtitle">
        I create amazing web experiences with modern technologies. Passionate
        about clean code, user experience, and innovative solutions.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="hero-cta-button">
          View Projects
        </a>
        <a href="#contact" className="hero-secondary-button">
          Contact Me
        </a>
      </div>
    </div>
    <div className="hero-image">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_7xOzl2JQiuJ7lMmrUc4HL0eCahsolVATw&s"
        alt="Animated"
        style={{
          width: "90%",
          height: "90%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  </section>
);

export default Hero;
