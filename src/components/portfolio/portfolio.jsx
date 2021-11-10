import "./portfolio.scss";
import { useRef,useEffect } from "react";


export default function Portfolio() {
  const inputRef = useRef();
  const scrollHandler = _ => {
    if(window.screen.height >= inputRef.current.getBoundingClientRect().top){
      //display the portfolio
      inputRef.current.style.display = "flex";
    }
    else{
      //hide the portfolio
      inputRef.current.style.display = "none";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []); 
  
  return (
    <div className="portfolio" id="skills">
      
      <p className="p">Skills</p>
      <div className="FlexBox" ref={inputRef}>
        {newFunction(
          "Programming Language",
          "Javascript",
          "Typescript",
          "Java",
          "C#",
          "CC",
          "Python"
        )}
        {newFunction(
          "Design",
          "Css",
          "Xaml",
          "Html",
          "Adobe XD",
          "AdobeXD",
          "Photoshop"
        )}
      </div>
    </div>
  );
  function newFunction(title,first,second,third,fourth,fourth2,fifth) {
    return <div className="skill-bars">
      <p className="p5">{title}</p>
      <div className="bar">
        <div className="info">
          <span>{first}</span>
        </div>
        <div className={"progress-line "+first}>
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="info">
          <span>{second}</span>
        </div>
        <div className={"progress-line "+second}>
          <span></span>
        </div>
      </div>
      {third && 
      <div className="bar">
        <div className="info">
          <span>{third}</span>
        </div>
        <div className={"progress-line "+third}>
          <span></span>
        </div>
      </div>
      }
      {fourth && 
      <div className="bar">
        <div className="info">
          <span>{fourth}</span>
        </div>
        <div className={"progress-line "+fourth2}>
          <span></span>
        </div>
      </div>
      }
       {fifth && 
      <div className="bar">
        <div className="info">
          <span>{fifth}</span>
        </div>
        <div className={"progress-line "+fifth}>
          <span></span>
        </div>
      </div>
      }
    </div>;
  }
}



