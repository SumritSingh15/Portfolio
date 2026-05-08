import { Navlinks } from '@/Constant/Constants';
import Link from 'next/link';
import React from 'react'
import { RxCross1 } from 'react-icons/rx';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const sidebaropenclose = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div className={`fixed  ${sidebaropenclose} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}>
            <div className={`text-white ${sidebaropenclose} fixed flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 
                space-y-6 z-1050`}>
                {Navlinks.map((link, index) => {
                    return <Link key={index} href={link.href}>
                        <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.name}</p>
                    </Link>
                })}
                <RxCross1 onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
            </div>
        </div>
    )
}

export default MobileNav;
