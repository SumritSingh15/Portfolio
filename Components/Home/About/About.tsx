"use client"
import SectionHeading from '@/Components/Helper/SectionHeading'
import { highlights, stats } from '@/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='py-20 bg-gray-950/30'>
            {/*SectionHeading*/}
            <SectionHeading title_1='About' title_2='Me' description='Get To Know The Developer Behind The Code' />
            <div className='grid w-[90%] md:w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'>
                {/**Image — slides in from left */}
                <motion.div
                    className='relative'
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className='aspect-square rounded-2xl overflow-hidden p-2 border border-white/10 shadow-2xl shadow-purple-900/20'>
                        <Image src={"/myphoto.jpeg"} alt='profile' width={700} height={700} className='w-full h-full object-cover rounded-xl' />
                    </div>
                </motion.div>

                {/*Content — slides in from right */}
                <motion.div
                    className='space-y-6'
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                    <h3 className='text-2xl font-semibold text-white'>
                        Frontend Developer Building Real-World Web Applications
                    </h3>
                    <p className='text-gray-400 leading-relaxed'>
                        I'm a frontend-focused developer currently pursuing B.Tech in Information Technology.
                        My journey started with curiosity about how web applications work,
                        and it has grown into building real-world projects using React and modern technologies.
                    </p>
                    <p className='text-gray-400 leading-relaxed'>
                        I have experience working as a Frontend Developer Intern and have built multiple applications focused on clean UI and user experience.
                        Currently, I'm advancing into Next.js and TypeScript while strengthening my problem-solving skills through DSA.
                    </p>
                    {/*Highlights */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
                        {highlights.map((item) => {
                            return (
                                <div key={item.text}
                                    className='flex items-center gap-3 text-sm'>
                                    <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center'>
                                        <item.icon className='w-4 h-4 text-blue-400' />
                                    </div>
                                    <span className='text-gray-300'>{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>

            {/*Stats*/}
            <div className='mt-16 w-[90%] md:w-[80%] mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                    {stats.map((stat, index) => {
                        return (
                            <motion.div
                                key={stat.label}
                                className='bg-gray-800/50 border border-white/8 shadow rounded-xl p-6 text-center'
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                            >
                                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                                    {stat.value}
                                </div>
                                <div className='text-sm text-gray-400'>
                                    {stat.label}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About
