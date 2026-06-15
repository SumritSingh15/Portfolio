"use client"
import { Button } from '@/Components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react'
import { FaFolderOpen } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const scrolltoprojects = () => {
        const projectsection = document.getElementById("projects");
        if (projectsection) {
            projectsection.scrollIntoView({
                behavior: "smooth",
            });
        }
    }
    const downloadCv = () => {
        const link = document.createElement("a");
        link.href = "./resume-Sumrit_Singh.pdf";
        link.download = "resume-Sumrit_Singh.pdf";
        link.click();
    };

    return (
        <div className="relative min-h-screen bg-[#0a0a0f]/30 flex items-center justify-center overflow-hidden">
            {/* Ambient glow */}
            <div
                className="
      absolute
      right-20
      top-1/2
      -translate-y-1/2
      w-[600px]
      h-[600px]
      bg-cyan-500/10
      rounded-full
      blur-[150px]
    "
            />
            <div
                className="
      absolute
      left-20
      top-1/3
      w-[400px]
      h-[400px]
      bg-purple-500/8
      rounded-full
      blur-[120px]
    "
            />

            <div className="relative z-10 text-center px-4">
                {/* Available badge */}
                <motion.div
                    className="sm:mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                    Hi, I&apos;m{" "}
                    <span className='text-yellow-300'>Sumrit Singh</span>
                </motion.h1>

                {/* Type animation */}
                <motion.div
                    className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-4 sm:mb-8 h-12"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Frontend Developer", 2000,
                            "Next.js Developer", 2000,
                            "React Developer", 2000,
                            "Open Source Contributor", 2000,
                            "TypeScript Developer", 2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className='font-mono text-cyan-400'
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    className='text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 px-2'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                >
                    Frontend developer specialising in React, focused on scalable and user-centric applications.
                    Expanding into Next.js &amp; TypeScript with real-world experience and proven results.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className='flex flex-col sm:flex-row gap-4 justify-center'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                >
                    <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-8" onClick={scrolltoprojects}>
                        <a href="#">
                            <FaFolderOpen className="w-5 h-5 " />
                            View Projects
                        </a>
                    </Button>
                    <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-8" onClick={downloadCv}>
                        <a href="#">
                            <Download className="w-5 h-5 " />
                            Download CV
                        </a>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero
