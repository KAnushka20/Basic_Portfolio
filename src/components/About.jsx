import React from "react";
import "./About.css"; // Importing plain CSS

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {" "}
        {/* Reusable class */}
        <h2 className="section-heading">About Me</h2> {/* Reusable class */}
        <h3 className="section-subheading">Get to know me better</h3>
        <div className="about-content">
          <p className="about-paragraph">
            Hello! I'm Anushka Kumari, a passionate web developer. I specialize
            in building responsive, user-friendly, and performant web
            applications using modern technologies like React.
          </p>
          <p className="about-paragraph">
            My journey in web development started with a curiosity for how
            things work on the internet, and it quickly grew into a dedication
            to crafting robust and engaging digital experiences. I thrive on
            learning new technologies and solving complex problems to deliver
            high-quality solutions.
          </p>
          {/* Add more about your skills, interests, etc. */}
        </div>
      </div>
    </section>
  );
}

export default About;
