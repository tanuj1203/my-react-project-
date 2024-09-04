import React from 'react';
import './ProjectSection.css'; // Import the CSS file

// Replace these with your actual project images and GitHub links
import projectImage1 from '../assests/Project1.jpeg';
import projectImage2 from '../assests/Project2.jpeg';
import projectImage3 from '../assests/Project3.jpeg';


const projects = [
  { 
    image: projectImage1, 
    title: 'Femcare', 
    subtitle: 'UX + Responsive', 
    githubLink: 'https://github.com/tanuj1203' 
  },
  { 
    image: projectImage2, 
    title: 'Foodies App', 
    subtitle: 'Frontend', 
    githubLink: 'https://github.com/tanuj1203' 
  },
  { 
    image: projectImage3, 
    title: 'Kepler Voice', 
    subtitle: 'UX + MIXED REALITY', 
    githubLink: 'https://keplervoice.com/' 
  },
];

const ProjectSection = () => (
  <section id="project-section">
    <h2 className="project-heading">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <a 
            href={project.githubLink} 
            className="project-github-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectSection;
