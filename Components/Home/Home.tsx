"use client"
import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import dynamic from 'next/dynamic'

// ssr: false prevents hydration mismatch from Math.random() running differently
// on the server vs client — particles are purely decorative client-side
const ParticlesBackground = dynamic(
    () => import('../Helper/ParticlesBackground'),
    { ssr: false }
)

function Home() {
    return (
        <div className='relative overflow-hidden'>
            {/* Global particles behind all sections */}
            <ParticlesBackground />

            {/* All sections sit above particles */}
            <div className='relative' style={{ zIndex: 1 }}>
                <section id="hero">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Home
