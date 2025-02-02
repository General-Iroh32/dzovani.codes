import "./portfolio.scss";
import { useRef, useEffect } from "react";
import { SkillBar } from '../shared/SkillBar';

export default function Portfolio() {
  const inputRef = useRef();
  
  const scrollHandler = () => {
    if (window.screen.height >= inputRef.current.getBoundingClientRect().top) {
      inputRef.current.style.display = "flex";
    } else {
      inputRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  const skillSets = [
    {
      title: "Programming Language",
      skills: ["Python", "Java", "Javascript", "Typescript", "C#"]
    },
    {
      title: "Design & Tools",
      skills: ["Html", "Css", "Xaml", "Figma", "Photoshop"]
    }
  ];

  return (
    <div className="portfolio" id="skills">
      <p className="p">Skills</p>
      <div className="FlexBox" ref={inputRef}>
        {skillSets.map((skillSet, index) => (
          <SkillBar
            key={index}
            title={skillSet.title}
            skills={skillSet.skills}
          />
        ))}
      </div>
    </div>
  );
}



