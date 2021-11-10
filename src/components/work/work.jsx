import "./work.scss"

export default function work() {
    return (
        <div className="work" id="work">
          <section id="projects" className="project">
                    <h5 className="head">featured projects &mdash;</h5>
                    <h2 className="headi">Stuff I’ve worked on 📁</h2>
                    <div className="project-box__wrapper">
                        <div className="project-box">
                            <div className="project-box__link">
                                <a href="https://github.com/General-Iroh32/Snek" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL +"/images/github.svg"} alt="github logo"/></a>
                               
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3 mb-l">Snek</h3>
                                <h5 className="heading-5">C# &nbsp; WPF &nbsp; SQLITE</h5>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="project-box__link">
                                <a href="https://github.com/General-Iroh32/dzovani.codes" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL +"/images/github.svg"} alt="github logo"/></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3 mb-l">dzovani.codes</h3>
                                <h5 className="heading-5">HTML/SCSS &nbsp; JSX</h5>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="project-box__link">
                                <a href="https://github.com/PikaYuhno/email-notifier-bot" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL +"/images/github.svg"} alt="github logo"/></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3 mb-l">Email Notifier Discord</h3>
                                <h5 className="heading-5">CSS &nbsp; TS</h5>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="project-box__link">
                                <a href="" target="_blank" rel="noopener noreferrer"></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3 mb-l">Valor Minecraft Mod</h3>
                                <h5 className="heading-5">Java &nbsp; ps</h5>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="project-box__link">
                                <a href="https://github.com/team-vsus/golink" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL +"/images/github.svg"} alt="behance logo"/></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3 mb-l">GoLink (Work in Progress)</h3>
                                <h5 className="heading-5">HTML/SCSS &nbsp; JSX</h5>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}
