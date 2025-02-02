import "./work.scss"
import { ProjectBox } from '../shared/ProjectBox';

export default function Work() {
    const projects = [
        {
            githubUrl: "https://github.com/General-Iroh32/Snek",
            title: "Snek",
            technologies: "C# • WPF • SQLITE"
        },
        {
            githubUrl: "https://github.com/General-Iroh32/dzovani.codes",
            title: "dzovani.codes",
            technologies: "HTML/SCSS • JSX"
        },
        {
            githubUrl: "https://github.com/PikaYuhno/email-notifier-bot",
            title: "Email Notifier Discord",
            technologies: "CSS • TS"
        },
        {
            title: "Valor Minecraft Mod",
            technologies: "Java • ps"
        },
        {
            githubUrl: "https://github.com/team-vsus/golink",
            title: "GoLink (Work in Progress)",
            technologies: "HTML/SCSS • JSX"
        }
    ];

    return (
        <div className="work" id="work">
            <section id="projects" className="project">
                <h5 className="head">featured projects &mdash;</h5>
                <h2 className="headi">Stuff I've worked on 📁</h2>
                <div className="project-box__wrapper">
                    {projects.map((project, index) => (
                        <ProjectBox key={index} githubUrl={project.githubUrl}>
                            <h3 className="heading-3 mb-l">{project.title}</h3>
                            <h5 className="heading-5">{project.technologies}</h5>
                        </ProjectBox>
                    ))}
                </div>
            </section>
        </div>
    );
}
