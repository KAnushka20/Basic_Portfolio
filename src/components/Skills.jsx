import React from "react";
import "./Skills.css"; // Importing plain CSS

function Skills() {
  const skillsList = [
    { name: "HTML", icon: "fab fa-html" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "React.js", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "Git & GitHub", icon: "fab fa-github" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt" },
    { name: "UI/UX Principles", icon: "fas fa-drafting-compass" },
    { name: "RESTful APIs", icon: "fas fa-exchange-alt" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "Figma", icon: "fas fa-design" },
    { name: "Java", icon: "fas fa-language" },

    // Add more skills as needed
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {" "}
        {/* Reusable class */}
        <h2 className="section-heading">My Skills</h2> {/* Reusable class */}
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              <i className={`${skill.icon} skill-icon`}></i>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
