import React from 'react';

export const SkillBar = ({ title, skills }) => (
  <div className="skill-bars">
    <p className="p5">{title}</p>
    {skills.map((skill, index) => (
      skill && (
        <div key={index} className="bar">
          <div className="info">
            <span>{skill}</span>
          </div>
          <div className={`progress-line ${title.toLowerCase()}`}>
            <span></span>
          </div>
        </div>
      )
    ))}
  </div>
); 