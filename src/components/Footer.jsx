// src/components/Footer/Footer.jsx (or Footer.js)

import "./Footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi"; // Correct path assuming Footer.css is in the same directory

function Footer() {
  const currentYear = new Date().getFullYear(); // Removed the /* @__PURE__ */ comment which is not needed for typical React development

  return (
    <footer className="footer-section">
      <div className="section-container footer-content">
        <div className="footer-logo">
          <div className="footer-contents">
            <h3>Anushka Kumari</h3>
            <p>
              Full Stack Developer passionate about creating amazing web
              experiences.
            </p>
          </div>
          <div className="footer-contents">
            <h3>Quick Links</h3>
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#skills" className="footer-link">
              Skills
            </a>
            <a href="#projects" className="footer-link">
              Projects
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </div>
          <div className="footer-contents">
            <h3>Connect</h3>
            <div className="footer-connect">
              <a
                href="www.linkedin.com/in/anushka-kumari-746405330 "
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <i className="fab fa-linkedin">
                  <FaLinkedin />
                </i>
              </a>

              <a
                href="https://github.com/KAnushka20/K_Anushka1220"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <i className="fab fa-github">
                  <IoLogoGithub />
                </i>
              </a>
              <a href="anushkakri303@gmail.com" className="footer-social-link">
                <i className="fas fa-envelope">
                  <BiLogoGmail />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} My Portfolio. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built with <i className="fas fa-heart"></i> by [Anushka
            Kumari]
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
