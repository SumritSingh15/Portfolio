import {
    Briefcase,
    Cloud,
    Code2,
    Coffee,
    Cpu,
    Database,
    GitBranch,
    Globe,
    GraduationCap,
    Layers,
    Layout,
    Mail,
    MapPin,
    Palette,
    Phone,
    Server,
    Smartphone,
    Terminal,
} from "lucide-react";

import { FaGithub, FaGithubAlt, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
    { label: "Projects Built", value: "5+" },
    { label: "Technologies Learned", value: "6+" },
    { label: "Hackathon Finalist", value: "Top 15" },
    { label: "Internship Experience", value: "1+" },
];

export const highlights = [
    { icon: Briefcase, text: "Frontend Developer Intern @ SkillXa" },
    { icon: GraduationCap, text: "B.Tech IT Student at MAIT" },
    { icon: MapPin, text: "Delhi, India" },
    { icon: Coffee, text: "Focused on React, Next.js & DSA" },
];


export const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "sumrit578singh@gmail.com",
        href: "mailto:sumrit578singh@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91-8750343900",
        href: "tel:+91-8750343900",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "New Delhi,India",
        href: "#",
    },
];

export const socialLinks = [
    { icon: FaGithub, href: "https://github.com/SumritSingh15", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sumrit-singh-4bb6a627a/", label: "LinkedIn" },
    ,
];

export const experiences = [
    {
        type: "work",
        title: "Frontend Developer Intern",
        company: "SkillXa Technologies",
        period: "5 April 2026 - 5 May 2026",
        description:
            "Built responsive and reusable UI components using React.js and Tailwind CSS. Worked on modern frontend interfaces, improved user experience, and contributed to scalable web application development.",
        technologies: ["React", "TailwindCss", "Redux", "TypeScript"],
    },

    {
        type: "education",
        title: "B.Tech in Information Technology",
        company: "GGSIP University",
        period: "2025 - 2028",
        description:
            "Currently pursuing B.Tech in Information Technology with a focus on web development, problem-solving, and scalable application development while actively practicing Data Structures and Algorithms.",
    },
    {
        type: "education",
        title: "HackAVENSIS Hackathon Finalist",
        company: "HackAVENSIS",
        period: "2026",
        description:
            "Selected among the Top 15 finalists for developing a phishing email analyzer project focused on improving email security and threat detection.",
    },

    {
        type: "education",
        title: "Diploma in Computer Engineering",
        company: "Delhi Skill And Entrepreneurship University",
        period: "2022 - 2025",
        description:
            "Built a strong foundation in programming, computer science fundamentals, and software development through academic projects and practical learning.",
    },
];

export const projects = [
    {
        title: "TrendTrove",
        description:
            "Trend Trove is a responsive e-commerce web app built with React and Tailwind CSS. Features:Fully responsive design, Add to Cart functionality, Order Page & Order Summary,Product filtering and pagination and Optimized performance using React.memo",
        image: "/images/p1.jpg",
        techStack: ["React", "TailwindCss", "Redux"],
        githubUrl: "https://github.com/SumritSingh15/TrendTrove",
    },
    {
        title: "NetflixGpt",
        description:
            "Developed a Netflix-inspired movie browsing application using React, Redux, and Tailwind CSS with AI-powered search functionality. Implemented dynamic movie recommendations, responsive UI components, state management, and real-time data fetching to deliver an interactive user experience",
        image: "/images/p2.jpg",
        techStack: ["React", "TailwindCss", "Grok AI", "Firebase"],
        githubUrl: "https://github.com/SumritSingh15/NetflixGpt",
    },
    {
        title: "Youtubeis",
        description:
            "Youtubeis is a YouTube clone web application built with modern frontend technologies. It allows users to search and watch videos including music, movies, and other content with a fast, responsive, and user-friendly interface. The application also supports Dark Mode for an enhanced viewing experience.",
        image: "/images/p3.jpg",
        techStack: ["React", "Redux", "TailwindCss", "YouTube Api"],
        githubUrl: "https://github.com/SumritSingh15/Youtubeis",
    },


];

export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: Code2 },
            { name: "Next.js", icon: Globe },
            { name: "TypeScript", icon: Terminal },
            { name: "Tailwind CSS", icon: Palette },
            { name: "Redux", icon: Palette },

        ],
    },
    // {
    //     title: "Backend",
    //     skills: [
    //         { name: "Node.js", icon: Server },
    //         { name: "Express", icon: Layers },
    //         { name: "MongoDB", icon: Database },
    //         { name: "PostgreSQL", icon: Database },
    //         { name: "GraphQL", icon: Cpu },
    //         { name: "REST APIs", icon: Cloud },
    //     ],
    // },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git", icon: GitBranch },
            // { name: "Docker", icon: Server },
            // { name: "AWS", icon: Cloud },
            // { name: "Linux", icon: Terminal },
            { name: "Figma", icon: Palette },
            { name: "GitHub", icon: FaGithubAlt },
            // { name: "CI/CD", icon: Cpu },
        ],
    },
];