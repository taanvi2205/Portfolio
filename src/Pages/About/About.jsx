import React from 'react';
import './About.css';
import { FaGraduationCap } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';


const About = () => {
    return (
        <div className="about-container" id="about">
            <h2>About Me</h2>
            <div className="desc-container">
                <div className="about-description">
                    <p>
                    Hey there! I'm Taanvi Khevaria — a <span className="highlight">web developer</span> and 
                    <span className="highlight"> UI design enthusiast</span> with a passion for building 
                    visually stunning and user-friendly websites. I love transforming ideas into interactive
                    digital experiences that not only look good but also perform smoothly.
                </p>
                <img src="assets/me2.jpeg" alt="" />
                {/* <p>
                    My journey started with a love for front-end development — bringing designs to life 
                    with <span className="highlight">HTML, CSS, JavaScript, and React</span>. Over time, I expanded 
                    into the <span className="highlight"> backend</span> world to understand how things work behind the scenes.
                </p>
                <p>
                    But I don't just stop at development — I have a keen interest in <span className="highlight"> user interface and 
                    visual design</span>. I believe that how something looks and feels is just as important as 
                    how it works. I enjoy experimenting with color palettes, typography, layouts, and 
                    micro-interactions that elevate the overall experience.
                </p> */}
                
                </div>

                <div className="about-me">
                    <div className='education'>
                        <div className='ab-heading'>
                            <FaGraduationCap className='cap-icon'/>
                            <span>Education</span>
                        </div>
                        <div className='my-details'>
                            <p className='college-name'>IIIT Jabalpur</p>
                            <p className='btech'>Bachelor of Technology in Computer Science and Engineering</p>
                            <div className='date'>
                                <FaRegCalendarAlt/>
                                <span>Aug 2023 - May 2027</span>
                            </div>
                        </div>
                    </div>


                    <div className="resume">
                        
                        <div className='ab-heading'>
                            <FaFileAlt className='res-icon'/>
                            <span>Resume</span>
                        </div>
                        <div className='my-details'>
                            <p className="resume-heading">Resume/CV</p>
                            <p className="download">Download my resume</p>
                             <a href="assets/Taanvi-resume.pdf" download>
                                <button className='download-button'>
                                <FaDownload /> Download
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
