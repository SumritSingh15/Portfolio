import SectionHeading from '@/Components/Helper/SectionHeading'
import { highlights, stats } from '@/data'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='py-20 bg-gray-100 dark:bg-gray-900'>
            {/*SectionHeading*/}
            <SectionHeading title_1='About' title_2='Me' description='Get To Know The Developer Behind The Code' />
            <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'>
                {/**Image */}
                <div className='relative'>
                    <div className='aspect-square rounded-2xl overflow-hidden p-2'>
                        <Image src={"/myphoto.jpeg"} alt='profile' width={700} height={700} className='w-full h-full object-center rounded-xl' />
                    </div>
                </div>
                {/*Content */}
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold '>
                        Frontend Developer Building Real-World Web Applications
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                        I’m a frontend-focused developer currently pursuing B.Tech in Information Technology.
                        My journey started with curiosity about how web applications work,
                        and it has grown into building real-world projects using React and modern technologies.
                    </p>
                    <p className='text-muted-foreground leading-relaxed'>
                        I have experience working as a Frontend Developer Intern and have built multiple applications focused on clean UI and user experience.
                        Currently, I’m advancing into Next.js and TypeScript while strengthening my problem-solving skills through DSA.
                    </p>
                    {/*Highlights */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
                        {highlights.map((item) => {
                            return (
                                <div key={item.text}
                                    className='flex items-center gap-3 text-sm'>
                                    <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center'>
                                        <item.icon className='w-4 h-4 text-blue-500' />
                                    </div>
                                    <span className='text-muted-foreground'>{item.text}</span>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            {/*Stats*/}
            <div className='mt-16 w-[80%] mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                    {stats.map((stat) => {
                        return (
                            <div key={stat.label} className='bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center'>
                                <div className='text-3xl md-:text-4xl font-bold text-purple-400 mb-2 '>
                                    {stat.value}
                                </div>
                                <div className='text-sm text-muted-foreground'>
                                    {stat.label}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default About
