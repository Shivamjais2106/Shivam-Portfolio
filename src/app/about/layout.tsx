import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Shivam Jaiswal — AI student, developer, and designer building intelligent digital experiences.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
