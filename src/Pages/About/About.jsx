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
                <div className="about-left">
                    <img src="assets/me2.jpeg" alt="" />
                    <p>
                        Hey there! I'm Taanvi Khevaria — a <span className="highlight">full-stack developer</span> and
                        <span className="highlight"> open source contributor</span> passionate about building
                        scalable web applications. I love turning ideas into clean, efficient code.
                    </p>
                </div>

                <div className="about-right">
                    <div className='education'>
                        <div className='ab-heading'>
                            <FaGraduationCap className='cap-icon'/>
                            <span>Education</span>
                        </div>
                        <div className='my-details'>
                            <p className='college-name'>IIIT Jabalpur</p>
                            <p className='btech'>B.Tech in Computer Science</p>
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
