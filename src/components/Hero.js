import React from 'react';
import './Hero.css';
import backgroundVideo from '../assests/background.mp4'; // Make sure the path is correct
import profileImage from '../assests/tanuj1.JPG'; // Add your profile image path
import resumePDF from '../assests/resume (1).pdf'; 

const Hero = () => (
  <div className="hero-container" id="hero">
    

    <video className="video-background" autoPlay loop muted src={backgroundVideo} />

    <div className="text-container1">
      <h1 className="intro-text">Hi, I am</h1>
      <h1 className="intro-text second">Tanuj Kumar Mishra</h1>
      <h2 className="sub-text">Front-End Developer</h2>
      <a href={resumePDF} className="download-button" download="Tanuj_Kumar_Mishra_Resume">Download Resume</a>

    </div>

    <div className="image-container1">
      <img src={profileImage} alt="Tanuj Kumar Mishra" className="profile-image" />
    </div>
  </div>
);

export default Hero;
