import "./portfolio.scss";
import { useRef } from "react";


export default function Portfolio() {
  let ref = useRef(null);
  if(ref.current!=null){
    ref.current.getBoundingClientRect();
  }
  
  return <div className="portfolio" id="skills">
     {newFunction("Programming Language","Javascript","Typescript","Java","C#","CC","Python")}
     {newFunction("Programming Language","Javascript","Typescript","Java","C#","CC","Python")}
     {newFunction("Programming Language","Javascript","Typescript","Java","C#","CC","Python")}
  </div>;
  function newFunction(title,first,second,third,fourth,fourth2,fifth) {
    return <div class="skill-bars">
      <p className="p5" ref={ref}>{title}</p>
      <div class="bar">
        <div class="info">
          <span>{first}</span>
        </div>
        <div class={"progress-line "+first}>
          <span></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>{second}</span>
        </div>
        <div class={"progress-line "+second}>
          <span></span>
        </div>
      </div>
      {third && 
      <div class="bar">
        <div class="info">
          <span>{third}</span>
        </div>
        <div class={"progress-line "+third}>
          <span></span>
        </div>
      </div>
      }
      {fourth && 
      <div class="bar">
        <div class="info">
          <span>{fourth}</span>
        </div>
        <div class={"progress-line "+fourth2}>
          <span></span>
        </div>
      </div>
      }
       {fifth && 
      <div class="bar">
        <div class="info">
          <span>{fifth}</span>
        </div>
        <div class={"progress-line "+fifth}>
          <span></span>
        </div>
      </div>
      }
    </div>;
  }
}



