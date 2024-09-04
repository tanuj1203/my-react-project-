import React, { useState, useEffect } from 'react';
import './ContactMe.css';
import resumePDF from '../assests/resume (1).pdf'; 
const ContactMe = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-container" id="contact">
            <a href={resumePDF} className="download-button" download="Tanuj_Kumar_Mishra_Resume">Download Resume</a>

      {showMessage && <div className="popup-message">You can contact me here!</div>}
      {!showMessage && (
        <div className="contact-form-container">
          <h1 className="contact-title">Contact Me</h1>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className="social-icons">
            <a href="https://github.com/tanuj1203" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/btwitsindian_/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/tanuj-mishra-b0a887288/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMe;
