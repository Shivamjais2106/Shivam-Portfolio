import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { JsonLd, personId } from "@/components/PersonJsonLd";
import ProjectDetailClient from "./ProjectDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found", robots: { index: false } };

    const title = `${project.title.trim()} — ${project.tech.slice(0, 3).join(", ")} Project`;
    const path = `/projects/${project.slug}`;

    return {
        title: { absolute: `${title} | ${siteConfig.name}` },
        description: project.desc,
        keywords: [project.title.trim(), ...project.tech, "Shivam Jaiswal"],
        alternates: { canonical: path },
        openGraph: {
            type: "article",
            url: path,
            siteName: siteConfig.name,
            locale: "en_IN",
            title: `${project.title.trim()} | ${siteConfig.name}`,
            description: project.desc,
            images: [{ url: project.image, alt: `${project.title.trim()} — project by ${siteConfig.name}` }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title.trim()} | ${siteConfig.name}`,
            description: project.desc,
            images: [project.image],
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    const url = `${siteConfig.url}/projects/${project.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "@id": `${url}#app`,
                name: project.title.trim(),
                description: project.longDesc,
                url: project.liveUrl ?? url,
                image: `${siteConfig.url}${project.image}`,
                applicationCategory: "WebApplication",
                operatingSystem: "Web",
                dateCreated: project.date,
                keywords: project.tech.join(", "),
                author: { "@id": personId },
                creator: { "@id": personId },
                ...(project.githubUrl && { codeRepository: project.githubUrl, sameAs: [project.githubUrl] }),
                offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.url}/projects` },
                    { "@type": "ListItem", position: 3, name: project.title.trim(), item: url },
                ],
            },
        ],
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <ProjectDetailClient slug={slug} />
        </>
    );
}
