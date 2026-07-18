import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore featured projects by Shivam Jaiswal — AI, web development, game design, and more.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
