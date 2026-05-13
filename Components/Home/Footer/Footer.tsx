"use client"

import { ArrowUp, Mail } from "lucide-react"
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs"
import { FaGithub } from "react-icons/fa6"
import { LiaLinkedin } from "react-icons/lia"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="bg-[#081229] text-white px-6 md:px-16 py-10 relative">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-500"
                >
                    &lt;Dev/&gt;
                </Link>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/SumritSingh15"
                        target="_blank"
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
                    >
                        <FaGithub size={18} />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/sumrit-singh-4bb6a627a/"
                        target="_blank"
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
                    >
                        <LiaLinkedin size={18} />
                    </Link>



                    <Link
                        href="mailto:sumrit578singh@gmail.com"
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
                    >
                        <Mail size={18} />
                    </Link>
                </div>

                {/* Credit */}
                <p className="text-sm text-gray-300">
                    Build by Sumrit Singh.
                    <span className="text-red-500">❤</span>
                </p>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-center pt-6">
                <p className="text-sm text-gray-400">
                    © 2026 All rights reserved.
                </p>
            </div>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                className="absolute right-5 bottom-5 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    )
}

export default Footer