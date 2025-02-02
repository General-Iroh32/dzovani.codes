import "./work.scss"
import { ProjectBox } from '../shared/ProjectBox';

export default function Work() {
    const projects = [
        {
            url: "https://talentslounge.com",
            title: "TalentsLounge LMS",
            technologies: "HTML • PHP • CSS • PostgreSQL",
            description: "Austria's leading Learning Management System for 'Digitale Grundbildung', serving 5000+ active users. Developed core features and maintained scalable architecture."
        },
        {
            title: "Mobiletouch IT Infrastructure Migration",
            technologies: "Python • AX2012 • Azure",
            description: "Key member of the team that completed the migration of IT infrastructure and software systems for Austria's largest Samsung partner. Modernized legacy systems and implemented newer solutions."
        },
        {
            githubUrl: "https://github.com/team-vsus/golink",
            title: "GoLink",
            technologies: "HTML/SCSS • JSX",
            description: "A modern Join clone with enhanced features and improved UI/UX. Built with React and modern web technologies."
        },
        {
            githubUrl: "https://github.com/PikaYuhno/email-notifier-bot",
            title: "Email Notifier Discord",
            technologies: "CSS • TS",
            description: "A Discord bot that parses emails and forwards them to Discord channels, featuring the default Discord theme for seamless integration."
        },
        {
            githubUrl: "https://github.com/General-Iroh32/dzovani.codes",
            title: "dzovani.codes",
            technologies: "HTML/SCSS • JSX",
            description: "My personal portfolio website showcasing my projects and skills. Built with React and modern design principles."
        },
        {
            githubUrl: "https://github.com/General-Iroh32/Snek",
            title: "Snek",
            technologies: "C# • WPF • SQLITE",
            description: "A graph creation and visualization tool developed during my school years, demonstrating early programming skills."
        },
        {
            title: "Valor Minecraft Mod",
            technologies: "Java • ps",
            description: "A Minecraft mod with a futuristic theme, adding new items and mechanics to enhance gameplay."
        }
    ];

    return (
        <div className="work" id="work">
            <section id="projects" className="project">
                <h5 className="head">featured projects &mdash;</h5>
                <h2 className="headi">Stuff I've worked on 📁</h2>
                <div className="project-box__wrapper">
                    {projects.map((project, index) => (
                        <ProjectBox key={index} githubUrl={project.githubUrl} url={project.url}>
                            <h3 className="heading-3 mb-l">{project.title}</h3>
                            <h5 className="heading-5">{project.technologies}</h5>
                            <p className="project-description">{project.description}</p>
                        </ProjectBox>
                    ))}
                </div>
            </section>
        </div>
    );
}
