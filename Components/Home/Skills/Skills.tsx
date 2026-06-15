"use client"
import SectionHeading from '@/Components/Helper/SectionHeading'
import { skillCategories } from '@/data'
import { motion, type Variants } from 'framer-motion'
import React from 'react'
import SkillCard from './SkillCard'

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

const Skills = () => {
    return (
        <div className='py-16 bg-gray-900/20'>
            <SectionHeading title_1="Technical" title_2='Skills' description="Technologies I've been working with recently" />
            <div className='space-y-12 w-[90%] md:w-[80%] mx-auto'>
                {skillCategories.map((category) => {
                    return (
                        <div key={category.title}>
                            <motion.h3
                                className='text-xl font-semibold mb-6 flex items-center text-purple-400 gap-3'
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <span className='w-2 h-2 rounded-full bg-purple-400'></span>
                                {category.title}
                            </motion.h3>
                            <motion.div
                                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                            >
                                {category.skills.map((skill, index) => {
                                    return (
                                        <motion.div key={index} variants={cardVariants}>
                                            <SkillCard name={skill.name} icon={skill.icon} />
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
