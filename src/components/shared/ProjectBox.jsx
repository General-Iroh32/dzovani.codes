import React from 'react';

export const ProjectBox = ({ githubUrl, url, children }) => (
  <div className="project-box">
    <div className="project-box__link">
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img 
            src={process.env.PUBLIC_URL + "/images/github.svg"} 
            alt="github logo"
          />
        </a>
      )}
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img 
            src={process.env.PUBLIC_URL + "/images/link.svg"} 
            alt="external link"
          />
        </a>
      )}
    </div>
    <div className="project-box__content">
      {children}
    </div>
  </div>
); 