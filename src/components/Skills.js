import React from 'react';
import './Skills.css'; // Assuming your CSS is in a separate file named Skills.css

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="skill-category-heading">Programming Languages</h3>
          <ul className="skill-list">
            <li>
              <span className="skill-name">HTML</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">CSS</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">JavaScript</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">React.js</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-heading">Tools</h3>
          <ul className="skill-list">
            <li>
              <span className="skill-name">VS Code</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Figma</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">AI Tools</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">After Effects</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-heading">Languages</h3>
          <ul className="skill-list">
            <li>
              <span className="skill-name">Hindi</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '99%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">English</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
