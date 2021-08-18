import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./particles";
export default function About() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Giovanni", "Giovani", "Dzovani."],
      loop: false,
    });
  }, []);
  
  return (
    <div className="about" id="home">
      <div className="intro-main">
        <div className="header">
          
        <Particles height={window.screen.height} params={ParticlesConfig}></Particles>
      
          <div className="hero">
            <h2 className="first">Hi there👋, I’m</h2>
            <div className="text-container">
              <span ref={textRef}></span>
            </div>
            <h4 className="second">fullstack webdev</h4>
            <h4 className="second">software engineer</h4>
            <p className="tsecond">I’m a fullstack developer</p>
            <p className="tsecond">based in Vienna, Austria.</p>
            
          </div>
          
          </div>
          <a href="#portfolio">
            <img src= {process.env.PUBLIC_URL+"/images/down.png"} alt="down"></img>
          </a>
        
      </div>
    </div>
  );
}
