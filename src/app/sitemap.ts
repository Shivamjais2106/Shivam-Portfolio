import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url;
    const lastModified = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: base, lastModified, changeFrequency: "monthly", priority: 1, images: [`${base}/profile.jpeg`] },
        { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/projects`, lastModified, changeFrequency: "weekly", priority: 0.9 },
        { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${base}/projects/${project.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: (project.category ?? "major") === "major" ? 0.8 : 0.5,
        images: [`${base}${encodeURI(project.image)}`],
    }));

    return [...staticRoutes, ...projectRoutes];
}
