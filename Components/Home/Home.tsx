"use client"
import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'


function Home() {
    return (
        <div className=' overflow-hidden '>

            <Hero />
            <About />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home
