import "./topbar.scss"
import {useState} from 'react';
import {motion} from 'framer-motion';

export default function Topbar() {
    const [open,setOpen] = useState(false);
    const animateFrom = {opacity: 0, y: -1000}
    const animateTo = {opacity: 0.96, y: 0}
    return (
        <div className="nav-container">
            
            
                <img src={process.env.PUBLIC_URL+"/images/unknown.png"} alt="Girl in a jacket" width="100%" height="100%"/>
               
           
        <div className={"nav-icon" + (open)} onClick={() => setOpen(!open)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            
        </div>
        {open && 
        <nav className="nav-main">
           <div className="box-wrapper">
                <motion.div
                 initial={animateFrom}
                 animate={animateTo}
                 transition={{delay: 0.2}}
                 className="box"></motion.div>
                <motion.div
                 initial={animateFrom}
                 animate={animateTo}
                 transition={{delay: 0.4}} className="box"></motion.div>
                <motion.div
                 initial={animateFrom}
                 animate={animateTo}
                 transition={{delay: 0.6}} className="box"></motion.div>
                <motion.div
                 initial={animateFrom}
                 animate={animateTo}
                 transition={{delay: 0.8}} className="box"></motion.div>
            </div>
            <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.7}} className="nav-left">
            aa
            </motion.div>
            <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.9}} className="nav-right">
            <ol className="normal">Navigation
            <li><a href="#home"  onClick={() => setOpen(!open)} >Home</a></li>
            <li><a href="#portfolio"  onClick={() => setOpen(!open)} >Portfolio</a></li>
            <li><a href="#work"  onClick={() => setOpen(!open)} >Projects</a></li>
            <li><a href="#contact"  onClick={() => setOpen(!open)} >Contact</a></li>
            </ol>
            </motion.div>
            </nav>
            }
            
            </div>
            
    )
}
