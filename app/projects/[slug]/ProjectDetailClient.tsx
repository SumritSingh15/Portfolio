"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    X,
    ExternalLink,
    ZoomIn,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types/project";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
    show: { transition: { staggerChildren: 0.08 } },
};

// ─────────────────────────────────────────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────────────────────────────────────────
interface LightboxProps {
    src: string;
    title: string;
    onClose: () => void;
}

function Lightbox({ src, title, onClose }: LightboxProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[200] bg-black/92 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ type: "spring", damping: 26, stiffness: 320 }}
                className="relative w-full max-w-5xl bg-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    aria-label="Close lightbox"
                    className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 rounded-full text-white transition-all duration-200"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="relative h-[55vh] md:h-[70vh] bg-gray-950">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-contain p-4"
                        sizes="90vw"
                        priority
                    />
                </div>

                {/* Caption */}
                <div className="px-6 py-4 border-t border-white/10 bg-gray-900/60">
                    <p className="text-white font-semibold text-sm">{title}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page component
// ─────────────────────────────────────────────────────────────────────────────
interface Props {
    project:     Project;
    prevProject?: Project;
    nextProject?: Project;
}

export default function ProjectDetailClient({ project, prevProject, nextProject }: Props) {
    const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
    const openLightbox  = useCallback((src: string, title: string) => setLightbox({ src, title }), []);
    const closeLightbox = useCallback(() => setLightbox(null), []);

    return (
        <>
            {/* ── Lightbox overlay ── */}
            <AnimatePresence>
                {lightbox && (
                    <Lightbox src={lightbox.src} title={lightbox.title} onClose={closeLightbox} />
                )}
            </AnimatePresence>

            <div className="min-h-screen bg-[#0a0a0f] text-white">

                {/* ════════════════════════════════════════════════════════════
                    Sticky top nav
                ════════════════════════════════════════════════════════════ */}
                <motion.nav
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/[0.08]"
                >
                    <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
                        {/* Back button */}
                        <Link
                            href="/#projects"
                            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-200 group text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                            Back to Projects
                        </Link>

                        {/* Breadcrumb */}
                        <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500">
                            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3" />
                            <Link href="/#projects" className="hover:text-gray-300 transition-colors">Projects</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-emerald-400 font-medium">{project.title}</span>
                        </div>
                    </div>
                </motion.nav>

                {/* ════════════════════════════════════════════════════════════
                    Hero
                ════════════════════════════════════════════════════════════ */}
                <section className="max-w-6xl mx-auto px-5 md:px-8 pt-16 pb-12">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        {/* Title */}
                        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                                {project.title}
                            </span>
                        </motion.h1>

                        {/* Long description */}
                        <motion.p
                            variants={fadeUp}
                            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl"
                        >
                            {project.longDescription}
                        </motion.p>

                        {/* Tech badges */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full tracking-wide uppercase"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 border border-white/10 hover:border-white/20 rounded-xl text-white text-sm font-medium transition-all duration-200"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    View on GitHub
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 rounded-xl text-black text-sm font-semibold transition-all duration-200"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                </section>

                {/* ════════════════════════════════════════════════════════════
                    Divider
                ════════════════════════════════════════════════════════════ */}
                <div className="max-w-6xl mx-auto px-5 md:px-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Screenshot gallery
                ════════════════════════════════════════════════════════════ */}
                <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">
                    {/* Section heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <span className="w-1.5 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Project Gallery</h2>
                    </motion.div>

                    {/* Screenshot grid */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {project.screenshots.map((shot, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, ease, delay: (i % 2) * 0.12 }}
                            >
                                {/* Image card */}
                                <div
                                    className="group relative h-64 md:h-72 bg-gray-900 rounded-2xl overflow-hidden cursor-zoom-in border border-white/[0.07] shadow-xl mb-5"
                                    onClick={() => openLightbox(shot.src, shot.title)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`View ${shot.title} fullscreen`}
                                    onKeyDown={(e) => e.key === "Enter" && openLightbox(shot.src, shot.title)}
                                >
                                    <Image
                                        src={shot.src}
                                        alt={shot.title}
                                        fill
                                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        loading="lazy"
                                    />

                                    {/* Hover hint */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                        <motion.div
                                            initial={false}
                                            className="flex items-center gap-2 px-4 py-2 bg-emerald-500/90 rounded-full text-black text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                                        >
                                            <ZoomIn className="w-3.5 h-3.5" />
                                            Click to expand
                                        </motion.div>
                                    </div>

                                    {/* Top-right index badge */}
                                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 bg-black/60 border border-white/10 rounded-full text-gray-400">
                                        {String(i + 1).padStart(2, "0")} / {String(project.screenshots.length).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Screenshot title */}
                                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                                    {shot.title}
                                </h3>

                                {/* Screenshot description */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {shot.description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* ════════════════════════════════════════════════════════════
                    Prev / Next navigation
                ════════════════════════════════════════════════════════════ */}
                <div className="max-w-6xl mx-auto px-5 md:px-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <section className="max-w-6xl mx-auto px-5 md:px-8 py-12">
                    <div className="grid sm:grid-cols-2 gap-4">
                        {/* Previous */}
                        {prevProject ? (
                            <Link
                                href={`/projects/${prevProject.slug}`}
                                className="group flex items-center gap-4 p-5 bg-gray-900/50 hover:bg-gray-800/70 border border-white/[0.08] hover:border-emerald-500/30 rounded-2xl transition-all duration-200"
                            >
                                <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-gray-800 group-hover:bg-emerald-500/10 border border-white/10 group-hover:border-emerald-500/30 rounded-xl transition-all duration-200">
                                    <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:-translate-x-0.5 transition-all duration-200" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">Previous</p>
                                    <p className="text-white font-semibold text-sm truncate group-hover:text-emerald-400 transition-colors duration-200">
                                        {prevProject.title}
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {/* Next */}
                        {nextProject ? (
                            <Link
                                href={`/projects/${nextProject.slug}`}
                                className="group flex items-center gap-4 p-5 bg-gray-900/50 hover:bg-gray-800/70 border border-white/[0.08] hover:border-emerald-500/30 rounded-2xl transition-all duration-200 sm:flex-row-reverse sm:text-right"
                            >
                                <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-gray-800 group-hover:bg-emerald-500/10 border border-white/10 group-hover:border-emerald-500/30 rounded-xl transition-all duration-200">
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all duration-200" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-0.5">Next</p>
                                    <p className="text-white font-semibold text-sm truncate group-hover:text-emerald-400 transition-colors duration-200">
                                        {nextProject.title}
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </section>

                {/* ════════════════════════════════════════════════════════════
                    Footer strip
                ════════════════════════════════════════════════════════════ */}
                <div className="border-t border-white/[0.06] py-6 text-center">
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} Sumrit Singh &nbsp;·&nbsp; Built with Next.js &amp; Framer Motion
                    </p>
                </div>
            </div>
        </>
    );
}
