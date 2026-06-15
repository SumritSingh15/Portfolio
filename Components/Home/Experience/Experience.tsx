"use client"
import SectionHeading from '@/Components/Helper/SectionHeading';
import { experiences } from '@/data';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import React from 'react'

const Experience = () => {
    return (
        <div className="py-16 bg-gray-900/20">
            <SectionHeading
                title_1="Experience & "
                title_2="Education"
                description="My professional journey and academic background"
            />
            <div className="relative px-6 max-w-4xl mx-auto">
                {/* timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-blue-900 md:-translate-x-px"></div>

                {experiences.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 == 0 ? "md:flex-row-reverse" : ""}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                                delay: index * 0.12,
                            }}
                        >
                            {/* timeline node */}
                            <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-gray-900 border-2 border-blue-500 flex items-center justify-center z-10">
                                {item.type === "work" ? (
                                    <Briefcase className="w-4 h-4 text-blue-400" />
                                ) : (
                                    <GraduationCap className="w-4 h-4 text-blue-400" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                                <div className="bg-gray-800/60 border border-white/8 shadow-lg rounded-xl p-6 hover:scale-[1.02] hover:border-blue-500/30 transition-all duration-300">
                                    <div className='flex item-center gap-2 text-sm text-blue-400 mb-2'>
                                        <span className='px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/20 font-medium'>
                                            {item.period}
                                        </span>
                                    </div>
                                    <h3 className='text-xl font-semibold mb-1 text-white'>{item.title}</h3>
                                    <p className='text-gray-400 text-sm mb-3'>{item.company}</p>
                                    <p className='text-gray-400 text-sm mb-4'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <div className='hidden md:block md:w-[calc(50%-2rem)]'></div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}

export default Experience
