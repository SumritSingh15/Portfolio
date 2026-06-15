// Central TypeScript types for project data

export interface Screenshot {
    src: string;
    title: string;
    description: string;
}

export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    screenshots: Screenshot[];
}
