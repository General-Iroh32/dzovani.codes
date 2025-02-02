import "./topbar.scss";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SocialLink } from "../shared/SocialLink";

const SOCIAL_LINKS = [
  {
    platform: "Github",
    url: "https://github.com/General-Iroh32",
    iconPath: "/images/github.svg"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/dzovani-koller-37a9ab21a/",
    iconPath: "/images/linkedin.svg"
  },
  {
    platform: "Codingame",
    url: "https://www.codingame.com/profile/fd2426c0276dd5c9013ad1387c2772873930193",
    iconPath: "/images/codingame.svg"
  }
];

const NAV_ITEMS = [
  { href: "#home", text: "Home" },
  { href: "#skills", text: "Skills" },
  { href: "#work", text: "Projects" },
  { href: "#contact", text: "Contact" }
];

const NavItem = ({ href, text, onClick }) => (
  <p className="p2">
    <a href={href} onClick={onClick}>{text}</a>
  </p>
);

const Logo = () => (
  <img
    src={process.env.PUBLIC_URL + "/images/unknown.png"}
    alt="D#"
    width="100%"
    height="100%"
  />
);

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const animation = useAnimation();
  const ref = useRef(null);
  const refi = useRef(null);
  const customRef = useRef(0);

  useEffect(() => {
    const updateAnimation = async () => {
      if (open) {
        if (ref.current) ref.current.style.display = "flex";
        customRef.current = 0;
        await animation.start({
          y: 0,
          opacity: 0.96,
          transition: { duration: 0.5 }
        });
      } else {
        customRef.current = 0.8;
        await animation.start({
          y: -1000,
          opacity: 0,
          transition: { duration: 0.5 }
        });
        if (ref.current) ref.current.style.display = "none";
      }
    };
    updateAnimation();
  }, [open, animation]);

  const handleButtonClick = () => {
    setOpen(!open);
    if (refi.current) {
      refi.current.disabled = true;
      setTimeout(() => {
        if (refi.current) refi.current.disabled = false;
      }, 1000);
    }
  };

  return (
    <div className="nav-container">
      <Logo />
      <button 
        className={`nav-icon${open ? "true" : "false"}`}
        id="icon" 
        ref={refi} 
        onClick={handleButtonClick}
        style={{ opacity: 1 }}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      <nav className="nav-main" ref={ref} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div className="box-wrapper">
          {[0.2, 0.4, 0.6, 0.8].map((delay, index) => (
            <motion.div
              key={index}
              animate={animation}
              transition={{ delay }}
              className="box"
            />
          ))}
        </div>
        
        <motion.div
          animate={animation}
          transition={{ delay: customRef.current * 0.9 }}
          className="nav-left"
        >
          <p className="socials">My Socials</p>
          <div className="socialbox">
            <div className="socialrow">
              {SOCIAL_LINKS.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
          <NavItem 
            href="#home" 
            text="Code is poetry, technology is art, and together we shape tomorrow's reality." 
            onClick={() => setOpen(false)} 
          />
        </motion.div>

        <motion.div
          animate={animation}
          transition={{ delay: customRef.current * 0.7 }}
          className="nav-right"
        >
          <p className="p1">Navigation</p>
          <div className="nav-flex">
            {NAV_ITEMS.map((item, index) => (
              <NavItem 
                key={index}
                href={item.href}
                text={item.text}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
}

