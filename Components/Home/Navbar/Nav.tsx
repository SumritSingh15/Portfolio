"use client";
import { Navlinks } from '@/Constant/Constants'
import { FiDownload } from 'react-icons/fi'
import { IoMenu } from 'react-icons/io5'
import { useEffect, useState, useCallback } from 'react';
import Logo from '@/Components/Helper/Logo';

type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navbg, setNavbg] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("#hero");

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavbg(true);
            if (window.scrollY < 90) setNavbg(false);
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Active section detection via IntersectionObserver
    useEffect(() => {
        const sectionIds = Navlinks.map((link) => link.href.replace("#", ""));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${id}`);
                    }
                },
                { threshold: 0.35 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Smooth scroll on nav click
    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className={`transition-all ${navbg
            ? "dark:bg-gray-800 bg-gray-900 shadow-md"
            : "fixed"
            } duration-200 h-[8vh] z-[100] fixed w-full`}>
            <div className='flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto'>
                <Logo />

                {/* Desktop nav links */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {Navlinks.map((link, index) => {
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                key={index}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`relative font-semibold transition-all duration-200 py-1 group ${isActive
                                    ? "text-cyan-400"
                                    : "text-white hover:text-yellow-400"
                                    }`}
                            >
                                {link.name}
                                {/* Active/hover underline */}
                                <span
                                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </a>
                        );
                    })}
                </div>

                <div className='flex items-center space-x-4'>
                    <a
                        href="#_"
                        className='relative z-20 inline-flex items-center px-6 sm:px-8 py-3 font-bold text-white transition-all duration-300 bg-indigo-600 hover:bg-indigo-500 rounded-md group'
                    >
                        <button onClick={() => window.open("./resume-Sumrit_Singh.pdf", "blank")}>
                            <span className='flex items-center space-x-2 text-sm'>
                                <FiDownload className='w-4 h-4' />
                                <span>View Resume</span>
                            </span>
                        </button>
                    </a>

                    <IoMenu onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Nav;
