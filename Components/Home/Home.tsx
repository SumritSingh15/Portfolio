"use client"
import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'


function Home() {
    return (
        <div className=' overflow-hidden '>

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
        </div>
    )
}

export default Home
