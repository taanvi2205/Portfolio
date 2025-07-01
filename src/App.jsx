import { useState } from 'react'
import './App.css'
import Hero from './Pages/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About/About'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer/Footer'
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <section id='home' name='home'>
        <Hero/>
      </section>
      
      <section id='about' name='about'>
        <About/>
      </section>

      <section id='skills' name='skills'>
        <Skills/>
      </section>


      <section id='projects' name='projects'>
        <Projects/>
      </section>
      <Footer/>
    </>
      
  )
}

export default App
