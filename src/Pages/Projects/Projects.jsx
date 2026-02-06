import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "IIITJ Canteen Tracker",
        image: "assets/canteen.png",
        description: "A full-stack web app for tracking food availability across 6 dining facilities. Features multi-canteen support, rating system, JWT authentication, and responsive design.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        live: "https://canteeniiitj-frontend.onrender.com/"
    },
    {
        title: "Food Delivery App",
        image: "assets/food2.png",
        description: "Full-stack Food Ordering System with real-time order tracking and admin panel for managing items and orders.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        github: null,
        live: "https://fooodorderinwebsite.netlify.app/"
    },
    {
        title: "Travel Itinerary System",
        image: "assets/trip2.png",
        description: "A full-stack system for creating personalized travel plans with destinations, dates, and activities. Includes admin panel.",
        tech: ["PHP", "MySQL", "JavaScript", "CSS"],
        github: "https://github.com/taanvi2205/Trip-Tailor",
        live: null
    },
    {
        title: "Cover Letter Generator",
        image: "assets/cover2.png",
        description: "AI-powered app using Cohere to generate professional cover letters. Download in DOCX format.",
        tech: ["Flask", "Cohere API", "JavaScript"],
        github: null,
        live: "https://cover-letter-generator-oe8n.onrender.com/"
    },
    {
        title: "Osseointegration Simulation",
        image: "assets/graph.png",
        description: "3D VPython simulation of bone-implant bonding with Flask web interface for parameter control.",
        tech: ["Flask", "VPython", "NumPy", "Matplotlib"],
        github: "https://github.com/taanvi2205/Osseointegration-simulation",
        live: null
    },
    {
        title: "Instagram Clone",
        image: "assets/download.jpeg",
        description: "Clone with posts, likes, comments, user profiles, and admin panel for content management.",
        tech: ["React Native", "Node.js", "Firebase"],
        github: "https://github.com/taanvi2205/Instagram-Clone",
        live: null
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <p className="projects-subtitle"></p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>

                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
