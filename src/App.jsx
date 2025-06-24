import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css"; // Importing the global App styles

/**
 * App component serves as the main container for the entire portfolio website.
 * It imports and renders all major sections and components.
 */
function App() {
  return (
    <div className="app-container">
      {/* Navbar component for navigation links */}
      <Navbar />

      {/* Hero section: main introductory banner */}
      <Hero />

      {/* About section: details about the developer */}
      <About />

      {/* Skills section: showcases the developer's technical skills */}
      <Skills />

      {/* Projects section: displays various projects undertaken */}
      <Projects />

      {/* Contact section: form and social links for getting in touch */}
      <Contact />

      {/* Footer component: copyright and additional links */}
      <Footer />
    </div>
  );
}

export default App;
