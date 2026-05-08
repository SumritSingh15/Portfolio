"use client";
import { Navlinks } from '@/Constant/Constants'
import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'
import { IoMenu } from 'react-icons/io5'
import { useEffect, useState } from 'react';
import Logo from '@/Components/Helper/Logo';
import ThemeToggler from '@/Components/Helper/ThemeToggler';


type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {

    const [navbg, setnavbg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setnavbg(true);
            if (window.scrollY < 90) setnavbg(false);
        };
        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, [])


    return (
        <div className={`transition-all ${navbg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full`}>
            <div className='flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto'>
                <Logo />

                <div className='hidden lg:flex items-center space-x-10'>
                    {Navlinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className='text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 font-semibold transition-all duration-200'
                        >
                            <p>{link.name}</p>
                        </Link>
                    ))}
                </div>

                <div className='flex items-center space-x-4'>
                    <a
                        href="#_"
                        className='relative z-20 inline-flex items-center px-6 sm:px-8 py-3 font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md group'
                    >
                        <span className='flex items-center space-x-2 text-sm'>
                            <FiDownload className='w-4 h-4' />
                            <span>Download CV</span>
                        </span>
                    </a>

                    <ThemeToggler />

                    <IoMenu onClick={openNav} className='w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Nav;
