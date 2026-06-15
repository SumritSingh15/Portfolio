"use client";
import { Button } from "@/Components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type Props = {
    slug: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
};

const ProjectCard = ({
    description,
    title,
    image,
    techStack,
    githubUrl,
    slug,
}: Props) => {
    const router = useRouter();
    const [hovered, setHovered] = useState(false);

    const goToDetail = () => router.push(`/projects/${slug}`);

    return (
        <motion.div
            className="group relative bg-gray-800/70 border border-white/[0.08] backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden h-full flex flex-col"
            whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.45)" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* ── Image container with hover overlay ── */}
            <div
                className="relative h-56 overflow-hidden cursor-pointer bg-gray-950 shrink-0"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={goToDetail}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={`object-contain p-2 transition-transform duration-500 ease-out ${
                        hovered ? "scale-105" : "scale-100"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />

                {/* Hover overlay */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="absolute inset-0 bg-black/65 flex items-center justify-center"
                        >
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.04 }}
                                className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 rounded-full text-black font-semibold text-sm shadow-lg"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Go To Project
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ── Card body ── */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl text-white font-semibold mb-2 group-hover:text-emerald-400 transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                    {description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-indigo-600/80 text-white font-medium border border-indigo-500/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                    {githubUrl && (
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1 border-white/15 hover:border-white/30 bg-transparent text-gray-300 hover:text-white"
                        >
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-4 h-4 mr-2" />
                                GitHub
                            </a>
                        </Button>
                    )}
                    <Button
                        size="sm"
                        onClick={goToDetail}
                        className="flex-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-200 font-medium"
                    >
                        View Details
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
