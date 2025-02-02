import React from 'react';

export const ProjectBox = ({ githubUrl, children }) => (
  <div className="project-box">
    <div className="project-box__link">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <img 
          src={process.env.PUBLIC_URL + "/images/github.svg"} 
          alt="github logo"
        />
      </a>
    </div>
    <div className="project-box__content">
      {children}
    </div>
  </div>
); 