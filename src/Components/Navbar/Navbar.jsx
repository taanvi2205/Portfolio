import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <div className="fade-top"></div>
        <div className="navbar">
            <p className='component'><a href="#home">Home</a></p>
            <p className='component'><a href="#about">About</a></p>
            <p className='component'><a href="#skills">Skills</a></p>
            <p className='component'><a href="#projects">Projects</a></p>
        </div>
    </div>
  )
}

export default Navbar