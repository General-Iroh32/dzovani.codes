import "./topbar.scss";
import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Topbar() {
    const [open, setOpen] = useState(false);
    const animation = useAnimation();
    let ref = useRef(null);
    let refi = useRef(null);
    let custom = 0;
    if (open) {
        ref.current.style.display = "flex";
        animation.start({
            y: 0,
            opacity: 0.96
        });
    }
    else {
        custom = 0.8;
        if (ref.current != null) {
            setTimeout(() => {
                ref.current.style.display = "none";
            }, 1000);
        }
        animation.start({
            y: -1000,
            opacity: 0
        });
    }

    function time() {
        refi.current.disabled = true;
        setTimeout(function () {
            refi.current.disabled = false;
        }, 1000);
    }
    return (

        <div className="nav-container">
            <img
                src={process.env.PUBLIC_URL + "/images/unknown.png"}
                alt="Girl in a jacket"
                width="100%"
                height="100%"
            />
            <button className={"nav-icon" + open} id="icon" ref={refi} onClick={() => { setOpen(!open); time(); }}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </button>

            <nav className="nav-main" ref={ref}>
                <div className="box-wrapper" >
                    {Motion(0.2, "box")}
                    {Motion(0.4, "box")}
                    {Motion(0.6, "box")}
                    {Motion(0.8, "box")}
                </div>
                <motion.div
                    animate={animation}
                    transition={{ delay: custom * 0.9 }}
                    className="nav-left"
                >
                    <p className="socials">My Socials</p>
                    <div className="socialbox">

                    </div>
                </motion.div>
                <motion.div
                    animate={animation}
                    transition={{ delay: custom * 0.9 }}
                    className="nav-right"
                >
                    <p className="p1">Navigation</p>
                    <div className="nav-flex">
                        {Nav("#home", "Home")}
                        {Nav("#portfolio", "Portfolio")}
                        {Nav("#work", "Projects")}
                        {Nav("#contact", "Contact")}
                    </div>
                </motion.div>
            </nav>

        </div>
    );

    function Nav(href, text) {
        return <p className="p2">
            <a href={href} onClick={() => setOpen(!open)}>
                {text}
            </a>
        </p>;
    }

    function Motion(delay, classname) {
        return (
            <motion.div
                animate={animation}
                transition={{ delay: delay }}
                className={classname}
            ></motion.div>
        );
    }
}

