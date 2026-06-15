"use client"
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    title_1: string;
    title_2: string;
    description: string;
};

const SectionHeading = ({ description, title_1, title_2 }: Props) => {
    return (
        <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>{title_1}{" "}
                <span className='text-purple-400'>{title_2}</span>
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>{description}</p>
        </motion.div>
    )
}



export default SectionHeading
