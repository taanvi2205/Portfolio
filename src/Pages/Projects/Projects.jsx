import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className='project-section'>
                <div className="grid-container">
                    <div className="box" style={{ gridArea: 'a' }}>
                        <div className="image-container">
                            <img src="/assets/food2.png" alt="Project 1" />
                            <div className="overlay">
                                <p className='project-heading'>Food Delivery App</p>
                                <p className="project-description">A full-stack Food Ordering System that allows users to browse menus, place orders, and track their status in real-time.
                                    It includes an admin panel for managing food items, categories, and order processing.
                                    Built with modern web technologies to deliver a responsive, user-friendly experience for both customers and admins.</p>
                                <p className='tech-stack'>MERN Stack (MongoDB, Express.js, React.js, Node.js)</p>

                                <a href="https://fooodorderinwebsite.netlify.app/" target="_blank">
                                    <button className='project-Link github1'>Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="box" style={{ gridArea: 'b' }}>
                        <div className="image-container">
                            <img src="/assets/trip2.png" alt="Project 1" />
                            <div className="overlay">
                                <p className='project-heading'> Travel Itinerary System </p>
                                <p className="project-description">A full-stack Travel Itinerary System built as a team project, allowing users to register, log in, and create personalized travel plans.
                                Users can select destinations, journey dates, and activities to generate detailed itineraries.
                                Includes an admin panel for managing destinations, activities, and user plans.</p>
                                <p className='tech-stack'>PHP, HTML, CSS, JavaScript, and MySQL</p>

                                <a href="https://github.com/taanvi2205/Trip-Tailor" target="_blank">
                                    <button className='project-Link github1'>Github</button>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="box" style={{ gridArea: 'c' }}>
                        <div className="image-container graph">
                            <img src="/assets/graph.png" alt="Project 1" />
                            <div className="overlay">
                                <p className='project-heading'>Osseointegration Simulation</p>
                                <p className="project-description">A VPython-based 3D simulation of osseointegration, showing how bone bonds with an implant over time. Integrated with a Flask web interface, it allows users to control parameters like bone density and implant depth for interactive visualization.</p>
                                <p className='tech-stack'>HTML, CSS, Flask, VPython, Matplotlib, NumPy</p>

                                <a href="https://github.com/taanvi2205/Osseointegration-simulation" target="_blank">
                                    <button className='project-Link'>Github</button>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="box" style={{ gridArea: 'd' }}>
                        <div className="image-container">
                            <img src="/assets/cover2.png" alt="Project 1" />
                            <div className="overlay">
                                <p className='project-heading'>Cover Letter Generator</p>
                                <p className="project-description">A web application that leverages Cohere's AI to generate tailored, professional cover letters based on user input and job descriptions. Users can customize content and download the final letter in DOCX format.</p>
                                <p className='tech-stack'>HTML, CSS, Javascript, Flask, Cohere API </p>

                                <a href="https://cover-letter-generator-oe8n.onrender.com/" target="_blank">
                                    <button className='project-Link github1'>Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="box" style={{ gridArea: 'e' }}>
                        <div className="image-container graph">
                            <img src="/assets/portfolio.png" alt="Project 1" />
                            <div className="overlay">
                                <p className='project-heading'>My Portfolio</p>
                                <p className="project-description">A responsive personal site to showcase my projects, skills, and experience in web development.</p>
                                <p className='tech-stack'> React.js, CSS</p>

                                <button className='project-Link github1'>Link</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="box" style={{ gridArea: 'f' }}>
                        <div className="image-container graph">
                            <img src="/assets/download.jpeg" alt="Project 1" />
                            <div className="overlay">
                                <p className='project-heading'>Instagram Clone</p>
                                <p className="project-description">An Instagram clone with core features like posts, likes, comments, and user profiles, plus an admin panel for managing content and users.</p>
                                <p className='tech-stack'>React Native, Node.js, React.js, Firebase</p>

                                <a href="https://github.com/taanvi2205/Instagram-Clone" target="_blank">
                                    <button className='project-Link'>Github</button>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
