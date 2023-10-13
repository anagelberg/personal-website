import './Projects.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';

const projects = [
    {
        title: "MovieJar",
        shortDescription: "Capstone project for organizing movies and selecting those to watch based on preferences.",
        collaborators: null,
        github: "https://github.com/anagelberg/MovieJar",
        techStack: ["react.js", "scss", "node.js", "express.js", "mysql"],
        deployment: "https://moviejar.ca",
    },
    {
        title: "LUSH Digi-Basket",
        shortDescription: "In this 24-hour cross-discipline collaboration hackathon project, we were tasked with designing and building a new in-store point-of-sale system concept that meets LUSH's ethical standards.",
        collaborators: "Web Developer Elise, UX Designers Grace and Ning, Data Scientists Quentin and John",
        github: "https://github.com/anagelberg/lush-industry-project",
        trophy: true,
        techStack: ["react.js", "scss"],
        deployment: "https://lush.amy-nagelberg.dev/",
    },
    {
        title: "InStock",
        shortDescription: "Full-stack inventory management system built collaboratively over the course of one week as part of the BrainStation Bootcamp.",
        collaborators: "Web Developers Sabrine Dhaliwal, Claudio, Yuna",
        github: "locked",
        techStack: ["react.js", "scss", "node.js", "express.js", "mysql", "jira"],
        deployment: "https://instock.amy-nagelberg.dev/",
    },
    {
        title: "BrainFlix",
        shortDescription: "Full-stack project built as part of the BrainStation bootcamp curriculum that has form and function similar to YouTube.",
        collaborators: null,
        github: "locked",
        techStack: ["react.js", "scss", "node.js", "express.js"],
        deployment: "https://brainflix.amy-nagelberg.dev/",
    },
    {
        title: "BandSite",
        shortDescription: "Website built for a local band as part of the BrainStation bootcamp curriculum utilizing vanilla JavaScript DOM Manipulation.",
        collaborators: null,
        github: "locked",
        techstack: ["javascript", "scss", "html"],
        deployment: "https://bandsite.amy-nagelberg.dev/",
    }
]

function Projects() {
    return (
        <section>

            <CollapsibleSection title="My Projects" contents={() => {
                return projects.map(project => {
                    return <ProjectCard project={project} />
                })
            }

            } />
        </section >

    )
}

export default Projects;