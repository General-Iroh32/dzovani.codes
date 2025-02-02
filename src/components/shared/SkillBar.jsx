import React from 'react';

const skillPercentages = {
  Javascript: 85,
  Typescript: 70,
  Java: 85,
  'C#': 75,
  Python: 90,
  Html: 95,
  Css: 85,
  Xaml: 75,
  'Figma': 80,
  Photoshop: 50
};

export const SkillBar = ({ title, skills }) => (
  <div className="skill-bars">
    <p className="p5">{title}</p>
    {skills.map((skill, index) => (
      skill && (
        <div key={index} className="bar">
          <div className="info">
            <span>{skill}</span>
          </div>
          <div className={`progress-line ${skill.replace(/\s+/g, '')}`}>
            <span style={{ width: `${skillPercentages[skill] || 50}%` }}></span>
          </div>
        </div>
      )
    ))}
  </div>
); 