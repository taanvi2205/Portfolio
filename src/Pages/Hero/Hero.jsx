import React from 'react'
import './Hero.css'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';


const Hero = () => {
  return (
        <div className="content">
            <h1>Hi, I'm</h1>
            <div className="glitch-wrapper">
                <h2 className="text" data-text="Taanvi Khevaria">Taanvi Khevaria</h2>
            </div>
            <h2 className="description">A Web Developer & Open Source Enthusiast</h2>

            <div className="header-icons">
                    <a href="https://www.linkedin.com/in/taanvi/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin color="#C16E70" size={50} />
                    </a>
                    <a href="https://github.com/taanvi2205" target="_blank" rel="noopener noreferrer">
                      <FaGithub color="#C16E70" size={50} />
                    </a>
              
                    <a href="mailto:taanvikhevaria@gmail.com">
                      <FaEnvelope size={50} color="#C16E70" /> {/* Gmail red */}
                    </a>
                  </div>
        </div>

                
  )
}

export default Hero