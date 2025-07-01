import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="wave-footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#C16E70"
          fillOpacity="1"
          d="M0,32L60,64C120,96,240,160,360,170.7C480,181,600,139,720,133.3C840,128,960,160,1080,154.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <div className="footer-icons">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#04011f" size={50} />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub color="#04011f" size={50} />
        </a>
        <a href="mailto:taanvikhevaria@gmail.com">
          <FaEnvelope size={50} color="#04011f" /> {/* Gmail red */}
        </a>
      </div>
    </div>
  );
};

export default Footer;
