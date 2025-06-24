import React, { useState } from "react";
import "./Contact.css"; // Importing plain CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {" "}
        {/* Reusable class */}
        <h2 className="section-heading">Get In Touch</h2> {/* Reusable class */}
        <p className="contact-intro-text">
          I'm always open to new opportunities, collaborations, and interesting
          discussions. Feel free to reach out!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        <div className="social-links-contact">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-contact"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-contact"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="social-icon-contact"
          >
            <i className="fas fa-envelope"></i>
          </a>
          {/* Add more social links like Twitter, etc. */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
