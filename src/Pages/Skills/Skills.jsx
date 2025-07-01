// Skills.jsx
import { useEffect } from "react";
import "./Skills.css";

const logos = [
    // Languages
    { name: "C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

    // Tools
    { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", url: "/assets/image.png" },
    { name: "Anaconda", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },

    // Frameworks & Libraries
    { name: "React.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Express.js", url: "/assets/express-js.png" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TailwindCSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Flask", url: "/assets/flask.png" },

    // CS Concepts (no logos — will use text fallback)
    //   { name: "DSA", url: null },
    //   { name: "DBMS", url: null },
    //   { name: "Operating Systems", url: null },
    //   { name: "OOP", url: null },
];
const groupedSkills = [
  ["C", "C++", "Python"], // row 1 - 3 items
  ["JavaScript", "HTML", "CSS", "PHP"], // row 2 - 4 items
  ["TailwindCSS", "VS Code"], // row 3 - 2 items
  ["Git", "GitHub", "React.js", "Express.js"], // row 4 - 5 items
  [ "Node.js", "SQL", "Flask"], 
  ["MongoDB","DSA"],
  ["DBMS", "OS", "OOP"]
];

const Skills = () => {
    useEffect(() => {
        const waitForImages = () => {
            const images = document.querySelectorAll("#tagList img");
            let loaded = 0;

            images.forEach((img) => {
                if (img.complete) {
                    loaded++;
                } else {
                    img.onload = () => {
                        loaded++;
                        if (loaded === images.length) startCanvas();
                    };
                    img.onerror = () => {
                        loaded++;
                        if (loaded === images.length) startCanvas();
                    };
                }
            });

            if (loaded === images.length) {
                startCanvas();
            }
        };

        const startCanvas = () => {
            try {
                window.TagCanvas.Start("myCanvas", "tagList", {
                    textColour: "#ffffff",
                    outlineColour: "#ffffff",
                    reverse: true,
                    depth: 0.8,
                    maxSpeed: 0.05,
                    imageMode: "both",
                    imagePosition: "center",
                    fadeIn: 800,
                    initial: [0.1, -0.1],
                    wheelZoom: false,
                });
            } catch (e) {
                console.log("TagCanvas error:", e);
            }
        };

        setTimeout(waitForImages, 300);
    }, []);


    return (
        <div className="skills-section">
            <h2>Skills</h2>
            <div className="container">
                

                <div className="sphere-container">
                    <canvas width="500" height="500" id="myCanvas">
                        Your browser does not support canvas.
                    </canvas>

                    <div id="tagList" style={{ display: "none" }}>
                        <ul>
                            {logos.map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" title={item.name}>
                                        {item.url ? (
                                            <img src={item.url} alt={item.name} width="45" height="45"
                                                className={
                                                    ["GitHub", "Express.js", "Flask"].includes(item.name)
                                                        ? "invert-icon"
                                                        : ""
                                                }
                                            />
                                        ) : (
                                            <span style={{ color: "#fff", fontSize: "16px" }}>{item.name}</span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="skillBox">
                    {groupedSkills.map((row, rowIndex) => (
                        <div className="skillRow" key={rowIndex}>
                        {row.map((skill, i) => (
                            <div className="skillItem" key={i}>
                            {skill}
                            </div>
                        ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
