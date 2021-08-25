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
                alt="D#"
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
                        <div className="socialrow">
                            <div className="social">
                                <div className="showHover">Github</div>
                                {socialhref("https://github.com/General-Iroh32", "/images/github.svg", "1")}
                            </div>
                            <div className="social">
                                <div className="showHover">LinkedIn</div>
                                {socialhref("https://www.linkedin.com/in/dzovani-koller-37a9ab21a/", "/images/linkedin.svg", "1")}
                            </div>
                            <div className="social">
                                <div className="showHover">Twitter</div>
                                {socialhref("https://twitter.com/dzovani_k/", "/images/twitter.svg", "1")}
                            </div>
                        </div>
                        <div className="socialrow">
                            <div className="social">
                                <div className="showHover">Codingame</div>
                                {socialhref("https://www.codingame.com/profile/fd2426c0276dd5c9013ad1387c2772873930193", "/images/codingame.svg", "100")}
                            </div>
                            <div className="social">
                                <div className="showHover">Discord</div>
                                {socialhref("https://discordapp.com/users/500371094956670976", "/images/discord.svg", "1")}
                            </div>
                            <div className="social">
                                <div className="showHover">Spengerhub</div>
                                {socialhref("https://hub.spengergasse.at/u/kol19575/user/profile", "/images/spengo.png", "1")}
                            </div>

                        </div>
                    </div>
                
                {Nav("#home", "Resume📖")}
                

                </motion.div>
                <motion.div
                    animate={animation}
                    transition={{ delay: custom * 0.7 }}
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

    function socialhref(ahref, filepath, filter) {
        return <a href={ahref} className="socialContent" style={{ filter: 'brightness(' + filter + '%)' }}>
            <img
                src={process.env.PUBLIC_URL + filepath}
                alt={filepath}
                height="24px"
                width="25px"
            />
        </a>;
    }

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

