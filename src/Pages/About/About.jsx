import './About.css';
import { FaGraduationCap } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';


const About = () => {
    return (
        <div className="about-container" id="about">
            <h2>About Me</h2>

            <div className="about-intro">
                <img src="assets/me2.jpeg" alt="Taanvi Khevaria" />
                <p>
                    Hey there! I'm Taanvi Khevaria — a <span className="highlight">full-stack developer</span> and
                    <span className="highlight"> open source contributor</span>, selected for
                    <span className="highlight"> Google Summer of Code '26 @ SW360</span>. I'm passionate about
                    building scalable web applications and love turning ideas into clean, efficient code.
                </p>
            </div>

            <div className="about-cards">
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

                <div className='gsoc'>
                    <div className='ab-heading'>
                        <FaCode className='gsoc-icon'/>
                        <span>Open Source</span>
                    </div>
                    <div className='my-details'>
                        <p className='college-name'>Google Summer of Code '26</p>
                        <p className='btech'>Contributor @ Eclipse SW360</p>
                        <div className='date'>
                            <FaRegCalendarAlt/>
                            <span>Summer 2026</span>
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
                        <a href="assets/TaanviResume.pdf" download>
                            <button className='download-button'>
                                <FaDownload /> Download
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
