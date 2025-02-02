import "./about.scss";
import React, { useEffect, useState, useMemo } from "react";

// Custom hook for typing animation
const useTypewriter = (words, options = {}) => {
  const {
    typingSpeed = 150,
    backspaceSpeed = 100,
    pauseBeforeBackspace = 1000
  } = options;

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentWord = words[currentIndex];

    if (currentIndex >= words.length) {
      setCurrentIndex(0);
      return;
    }

    if (isTyping) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseBeforeBackspace);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, backspaceSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex(prev => (prev + 1) % words.length);
      }
    }

    return () => timeout && clearTimeout(timeout);
  }, [currentIndex, displayText, isTyping, words, typingSpeed, backspaceSpeed, pauseBeforeBackspace]);

  return { displayText };
};

export default function About() {
  const names = useMemo(() => ["Giovanni", "Giovani", "Dzovani"], []);
  const { displayText } = useTypewriter(names, {
    typingSpeed: 150,
    backspaceSpeed: 100,
    pauseBeforeBackspace: 1000
  });

  return (
    <div className="about" id="home">
      <div className="intro-main">
        <div className="header">
          <div className="hero">
            <h2 className="first">Hi there👋, I'm</h2>
            <div className="text-container">
              <span className="typing-text">
                {displayText}
                <span className="cursor-animation">|</span>
              </span>
            </div>
            <h4 className="second">Full-Stack Developer</h4>
            <h4 className="second">software engineer</h4>
            <p className="tsecond">I'm a full-stack developer</p>
            <p className="tsecond">based in Vienna, Austria.</p>
          </div>
        </div>
        <a href="#skills">
          <img src={process.env.PUBLIC_URL + "/images/down.png"} alt="down" />
        </a>
      </div>
    </div>
  );
}

