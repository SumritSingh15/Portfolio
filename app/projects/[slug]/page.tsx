import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data";
import ProjectDetailClient from "./ProjectDetailClient";

// ── Types ────────────────────────────────────────────────────────────────────
type PageProps = {
    params: Promise<{ slug: string }>;
};

// ── SEO metadata ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} — Sumrit Singh Portfolio`,
        description: project.longDescription.slice(0, 160),
        openGraph: {
            title: project.title,
            description: project.longDescription.slice(0, 160),
            images: [{ url: project.image }],
        },
    };
}

// ── Pre-render all slugs at build time ───────────────────────────────────────
export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

// ── Page component ────────────────────────────────────────────────────────────
export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const currentIndex = projects.findIndex((p) => p.slug === slug);

    if (currentIndex === -1) notFound();

    const project    = projects[currentIndex];
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return (
        <ProjectDetailClient
            project={project}
            prevProject={prevProject ?? undefined}
            nextProject={nextProject ?? undefined}
        />
    );
}
