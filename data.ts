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
import type { Project } from "@/types/project";


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

export const projects: Project[] = [
    {
        slug: "trendtrove",
        title: "TrendTrove",
        description:
            "A fully responsive e-commerce web app with cart management, order summaries, product filtering, and pagination — optimised with React.memo.",
        longDescription:
            "TrendTrove is a complete e-commerce web application built with React, Tailwind CSS, and Redux. It delivers a polished shopping experience with product browsing, cart management, order placement, and order history. The platform leverages React.memo for smooth performance, Redux for centralised state management of cart items and user data, and a fully responsive layout that adapts seamlessly across all devices. Key features include product filtering, pagination, itemised order summaries, and an intuitive checkout flow — making it a solid demonstration of modern frontend engineering.",
        image: "/trendtrove-home.png",
        techStack: ["React", "TailwindCss", "Redux"],
        githubUrl: "https://github.com/SumritSingh15/TrendTrove",
        screenshots: [
            {
                src: "/trendtrove-home.png",
                title: "TrendTrove Homepage",
                description:
                    "The homepage presents a curated e-commerce experience with featured products, category navigation, and a clean responsive layout. Built with React and Tailwind CSS, it uses a component-based architecture with reusable product cards, header navigation, and a hero banner. Product data is managed via Redux store enabling real-time cart state updates across the entire application.",
            },
            {
                src: "/order-summary.png",
                title: "Order Summary",
                description:
                    "A detailed order summary page that displays selected items, quantities, unit prices, and final totals. Users can review their entire cart before proceeding to checkout. The page calculates subtotals, discounts, and grand totals dynamically — all driven by Redux state — ensuring consistency with the cart on other pages.",
            },
            {
                src: "/view-orders.png",
                title: "View Orders",
                description:
                    "The order history page allows users to track all past purchases with order IDs, purchase dates, statuses, and itemised breakdowns. Redux persists order state, and the UI provides a clean timeline of transactions. Each order entry expands to show full details, enabling users to quickly re-order or check delivery status.",
            },
            {
                src: "/product-page.png",
                title: "Product Detail Page",
                description:
                    "Individual product pages showcase high-quality images, detailed descriptions, available variants, pricing, and stock status. An 'Add to Cart' button dispatches a Redux action that instantly updates the cart counter in the navbar. React.memo ensures this component only re-renders when the specific product's data changes, keeping scrolling and interactions smooth.",
            },
        ],
    },
    {
        slug: "netflix-gpt",
        title: "NetflixGpt",
        description:
            "A Netflix-inspired movie browsing app with Firebase auth, TMDB API integration, and Grok AI-powered natural language movie search.",
        longDescription:
            "NetflixGpt is a full-stack web application that recreates the Netflix experience and enhances it with AI-powered movie recommendations. The platform integrates Firebase Authentication for secure email/password user management, the TMDB API for a comprehensive and up-to-date movie database, and Grok AI for intelligent natural language movie search. Users can browse trending movies, explore genre categories, watch trailers, and discover films using conversational queries such as 'a thriller with a shocking plot twist'. The responsive UI faithfully mirrors Netflix's design language using React and Tailwind CSS with Redux for global state.",
        image: "/netflixgpt-home.png",
        techStack: ["React", "TailwindCss", "Grok AI", "Firebase"],
        githubUrl: "https://github.com/SumritSingh15/NetflixGpt",
        screenshots: [
            {
                src: "/netflixgpt-home.png",
                title: "Netflix GPT Homepage",
                description:
                    "The homepage showcases a Netflix-inspired UI with a dynamic full-screen hero banner, a persistent top navigation, and horizontally scrollable rows of trending, popular, and top-rated movies — all fetched live from the TMDB API. The layout is fully responsive and renders sharply on mobile, tablet, and widescreen displays using Tailwind CSS flexbox and grid utilities.",
            },
            {
                src: "/signin-page.png",
                title: "Sign In / Sign Up Page",
                description:
                    "Firebase Authentication powers a secure email/password login and signup flow. The page replicates Netflix's authentic form design with real-time validation, descriptive error messages, and smooth transitions between sign-in and sign-up states. On success, the user is redirected to the browse page with their session persisted via Firebase's onAuthStateChanged observer.",
            },
            {
                src: "/ai-search-movies.png",
                title: "AI-Powered Movie Search",
                description:
                    "Grok AI integration enables users to discover movies using plain English queries — for example, 'romantic comedies set in Paris' or 'sci-fi films with time travel'. The AI interprets the query and maps it to relevant TMDB movie categories and titles. Results are displayed in a clean card grid identical to the browse page, providing a seamless discovery experience.",
            },
            {
                src: "/movies-list.png",
                title: "Movies Catalog",
                description:
                    "A comprehensive scrollable movie catalog fetches data from multiple TMDB endpoints (trending, popular, now playing, top-rated) and organises them into labelled rows. Movie posters display ratings, release years, and genres on hover. Clicking any card opens a modal with a full synopsis, cast information, and an embedded trailer — all fetched dynamically from TMDB.",
            },
        ],
    },
    {
        slug: "youtubeis",
        title: "Youtubeis",
        description:
            "A YouTube clone supporting video search, playback, and browsing with YouTube API integration and a complete dark mode toggle.",
        longDescription:
            "Youtubeis is a YouTube-inspired video browsing platform built in React that brings a full YouTube-like experience through the YouTube Data API v3. Users can search for videos, watch content in an embedded player, and browse related video suggestions across music, gaming, movies, and all other categories. The application features a complete dark mode implementation for comfortable low-light viewing, Redux for efficient global state management, and a responsive grid layout that adapts from compact mobile cards to a widescreen multi-column browsing grid. The project demonstrates advanced API integration, state management patterns, and accessible UI design.",
        image: "/youtubeis-home.png",
        techStack: ["React", "Redux", "TailwindCss", "YouTube Api"],
        githubUrl: "https://github.com/SumritSingh15/Youtubeis",
        screenshots: [
            {
                src: "/youtubeis-home.png",
                title: "Youtubeis Homepage",
                description:
                    "The homepage recreates YouTube's familiar responsive video grid with thumbnails, channel avatars, view counts, and relative upload timestamps — all sourced from the YouTube Data API v3. A top search bar with voice input support and a left sidebar with category filters allow users to quickly navigate content. The layout adjusts from a single-column mobile view to a dense widescreen grid.",
            },
            {
                src: "/video-page.png",
                title: "Video Player Page",
                description:
                    "The video player page embeds YouTube's iframe player in a fluid 16:9 container alongside a related videos sidebar that populates from API suggestions. The page displays the video title, channel name, subscriber count, view count, upload date, and a truncated description that expands on click. Like/dislike counts and share actions are included for a complete YouTube-like experience.",
            },
            {
                src: "/dark-search-page.png",
                title: "Dark Theme Search Results",
                description:
                    "A fully dark-themed variant of the search results page activates when the user toggles dark mode from the header. Every UI surface — backgrounds, cards, text, icons, and borders — switches to a dark palette using Tailwind's dark mode utilities. The dark theme reduces eye strain during night browsing while maintaining full search, playback, and navigation functionality.",
            },
            {
                src: "/search-page.png",
                title: "Search Results Page",
                description:
                    "The search results page fetches and renders filtered video results for any user query using the YouTube Search API. Results update in near real-time as the user types, powered by debounced API calls managed via Redux middleware. Each result card shows a landscape thumbnail, title, channel name, view count, and age — styled to match YouTube's familiar search layout.",
            },
        ],
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