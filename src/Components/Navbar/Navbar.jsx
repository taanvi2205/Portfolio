import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const sections = ['home', 'about', 'skills', 'contributions', 'projects'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef('home');

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              activeSectionRef.current = section;
              setActiveSection(section);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sections.includes(hash)) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
      }
    }
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.history.pushState(null, '', `#${id}`);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="fade-top"></div>
        <div className="navbar">
            {sections.map((section) => (
              <span
                key={section}
                className={`component ${activeSection === section ? 'active' : ''}`}
                onClick={() => handleClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            ))}
        </div>
    </div>
  )
}

export default Navbar
