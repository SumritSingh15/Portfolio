"use client"
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    name: string;
    icon: LucideIcon | IconType;
}

const SkillCard = ({ icon: Icon, name }: Props) => {
    return (
        <motion.div
            className="group relative bg-gray-800/70 border border-white/8 backdrop-blur-sm shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer"
            whileHover={{
                scale: 1.08,
                y: -4,
                borderColor: "rgba(167, 139, 250, 0.4)",
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.25)",
            }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-200">
                {name}
            </span>
        </motion.div>
    )
}

export default SkillCard
