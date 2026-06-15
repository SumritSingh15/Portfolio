"use client"
import SectionHeading from '@/Components/Helper/SectionHeading';
import { projects } from '@/data';
import { motion } from 'framer-motion';
import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="py-16 bg-gray-950/20 scroll-mt-40" id='projects'>
            <SectionHeading
                title_1="Featured"
                title_2="Projects"
                description="A selection of my recent work and side projects"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[80%] mx-auto">
                {projects.map((project, index) => {
                    // Alternate: even index → from bottom, odd → from top
                    const yStart = index % 2 === 0 ? 60 : -60;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: yStart }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                                delay: (index % 3) * 0.12,
                            }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}

export default Projects
