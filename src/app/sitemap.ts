import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url;

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: base, changeFrequency: "monthly", priority: 1, images: [`${base}/profile.jpeg`] },
        { url: `${base}/about`, changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/projects`, changeFrequency: "weekly", priority: 0.9 },
        { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.7 },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${base}/projects/${project.slug}`,
        changeFrequency: "monthly",
        priority: (project.category ?? "major") === "major" ? 0.8 : 0.5,
        images: [`${base}${encodeURI(project.image)}`],
    }));

    return [...staticRoutes, ...projectRoutes];
}
