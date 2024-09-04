import React from 'react';
import './About.css';
import profileImage1 from '../assests/tanuj.jpeg'; // Make sure the path is correct

const About = () => (
  <div className="about-container" id="about">
    <div className="image-container">
      <img src={profileImage1} alt="Tanuj Kumar Mishra" className="profile-image1" />
    </div>
    <div className="text-container">
      <h2 className="heading">About</h2>
      <p className="paragraph">
        I am Tanuj Kumar Mishra, a passionate Front-End Developer based in Prayagraj.
        I enjoy creating websites that are not only functional but also visually appealing.
        With a strong foundation in HTML, CSS, and JavaScript, I specialize in building
        responsive, user-friendly websites using React.js.
      </p>
      <p className="paragraph">
        My journey as a developer started with a curiosity for how websites work.
        Over the years, I’ve honed my skills and have developed a keen eye for detail.
        Whether it’s a small personal project or a large-scale application, I am
        dedicated to delivering high-quality work.
      </p>
      <p className="paragraph">
        Think we could create something amazing together? Feel free to{' '}
        <a href="mailto:mishratanuj43@gmail.com" className="email-link">drop me an email</a>.
        

      </p>
    </div>
  </div>
);

export default About;
