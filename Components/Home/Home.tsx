"use-client"
import React from 'react'
import ResponsiveNav from './Navbar/ResponsiveNav'
import Hero from './Hero/Hero'


function Home() {
    return (
        <div className=' overflow-hidden h-[500]'>
            <ResponsiveNav />
            <Hero />
        </div>
    )
}

export default Home
