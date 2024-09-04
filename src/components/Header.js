import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import resumePDF from '../assests/resume (1).pdf'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        <Link className="nav-link" to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
        <Link className="nav-link" to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link>
        <Link className="nav-link" to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
        <Link className="nav-link" to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
        <a href={resumePDF} className="download-button" download="Tanuj_Kumar_Mishra_Resume">Download Resume</a>
      </div>
    </nav>
  );
};

export default Header;
