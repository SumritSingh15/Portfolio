"use client"
import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'


function Home() {
    return (
        <div className=' overflow-hidden '>

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
