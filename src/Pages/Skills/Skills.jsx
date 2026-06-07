// Skills.jsx
import "./Skills.css";
import {
  SiOpenjdk, SiTypescript, SiJavascript, SiPython, SiC, SiCplusplus,
  SiHtml5, SiCss3, SiPhp, SiSpring, SiReact, SiRedux, SiNodedotjs,
  SiExpress, SiFlask, SiBootstrap, SiTailwindcss, SiDocker, SiApachemaven,
  SiGit, SiGithub, SiApachecouchdb, SiMongodb, SiMysql, SiPostgresql, SiJest, SiCypress,
  SiAnaconda,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "Java", icon: <SiOpenjdk />, color: "#f89820" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "Python", icon: <SiPython />, color: "#3776ab" },
  { name: "C", icon: <SiC />, color: "#a8b9cc" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599c" },
  { name: "HTML", icon: <SiHtml5 />, color: "#e34f26" },
  { name: "CSS", icon: <SiCss3 />, color: "#1572b6" },
  { name: "PHP", icon: <SiPhp />, color: "#777bb4" },
  { name: "Spring Boot", icon: <SiSpring />, color: "#6db33f" },
  { name: "React.js", icon: <SiReact />, color: "#61dafb" },
  { name: "Redux", icon: <SiRedux />, color: "#764abc" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#5fa04e" },
  { name: "Express.js", icon: <SiExpress />, color: "#f2f3d9" },
  { name: "Flask", icon: <SiFlask />, color: "#f2f3d9" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06b6d4" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
  { name: "Maven", icon: <SiApachemaven />, color: "#c71a36" },
  { name: "Git", icon: <SiGit />, color: "#f05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#f2f3d9" },
  { name: "CouchDB", icon: <SiApachecouchdb />, color: "#e42528" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "SQL", icon: <SiMysql />, color: "#4479a1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
  { name: "Jest", icon: <SiJest />, color: "#c21325" },
  { name: "Cypress", icon: <SiCypress />, color: "#69d3a7" },
  { name: "VS Code", icon: <VscVscode />, color: "#007acc" },
  { name: "Anaconda", icon: <SiAnaconda />, color: "#44a833" },
];

const Skills = () => {
    return (
        <div className="skills-section">
            <h2>Skills</h2>

            <div className="skillBox">
                {skills.map((skill, i) => (
                    <div
                        className="skillItem"
                        key={i}
                        style={{ "--icon-color": skill.color }}
                    >
                        <span className="skillIcon">{skill.icon}</span>
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
