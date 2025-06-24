import React from "react";
import "./Projects.css"; // Importing plain CSS

function Projects() {
  const projectsList = [
    {
      title: "E-commerce Store",
      description:
        "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB, featuring user authentication and payment integration.",
      image: "project1.jpg", // Ensure this image is in your public/ folder
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
        "Redux",
      ],
      githubLink: "https://github.com/your-username/ecommerce-store",
      liveLink: "https://www.live-ecommerce-store.com",
    },
    {
      title: "Task Management App",
      description:
        "A responsive task manager with drag-and-drop functionality, real-time updates, and robust user authentication.",
      image: "project2.jpg", // Ensure this image is in your public/ folder
      technologies: ["React", "Firebase", "Redux Toolkit", "Material-UI"],
      githubLink: "https://github.com/your-username/task-app",
      liveLink: "https://www.live-task-app.com",
    },
    {
      title: "Portfolio Website",
      description:
        "This very portfolio website, showcasing modern web development skills and a clean, responsive design.",
      image: "project3.jpg", // Ensure this image is in your public/ folder
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/your-username/my-portfolio",
      liveLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A sleek weather application that provides real-time weather data based on user location or search query, consuming a public API.",
      image: "project4.jpg", // Ensure this image is in your public/ folder
      technologies: ["React", "API Integration", "Axios", "CSS3"],
      githubLink: "https://github.com/your-username/weather-app",
      liveLink: "https://www.live-weather-app.com",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {" "}
        {/* Reusable class */}
        <h2 className="section-heading">My Projects</h2> {/* Reusable class */}
        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div key={index} className="project-card">
              <img
                // Corrected line: Directly reference image from public folder root
                src={"/" + project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-list">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button github-button"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button live-button"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
