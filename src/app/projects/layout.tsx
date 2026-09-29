import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects — MERN, Next.js & AI Apps",
    description:
        "Full-stack projects by Shivam Jaiswal — Internova AI, TechnoKart, Civic Issue Reporting System and more, built with React, Next.js, Node.js, Express, MongoDB and AI APIs.",
    alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
