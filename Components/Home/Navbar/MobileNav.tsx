"use client";
import { Navlinks } from '@/Constant/Constants';
import React, { useCallback } from 'react'
import { RxCross1 } from 'react-icons/rx';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const sidebaropenclose = showNav ? "translate-x-0" : "translate-x-[-100%]";

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        closeNav();
        const id = href.replace("#", "");
        // small delay so the sidebar closes before scrolling
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 350);
    }, [closeNav]);

    return (
        <div className={`fixed ${sidebaropenclose} inset-0 transform transition-all duration-500 z-[1002] bg-black/70 w-full h-screen`}>
            <div className={`text-white ${sidebaropenclose} fixed flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gray-900/95 backdrop-blur-md border-r border-white/10 space-y-6 z-[1050]`}>
                {Navlinks.map((link, index) => {
                    return (
                        <a
                            key={index}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            <p className="text-gray-200 hover:text-cyan-400 transition-colors duration-200 w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white/20 sm:text-[30px]">
                                {link.name}
                            </p>
                        </a>
                    );
                })}
                <RxCross1 onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:text-cyan-400 transition-colors' />
            </div>
        </div>
    )
}

export default MobileNav;
