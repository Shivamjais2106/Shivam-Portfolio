import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Hire a MERN Stack Developer",
    description:
        "Contact Shivam Jaiswal, MERN Stack Developer from Bhopal, India, for SDE-1 / junior full stack roles, freelance projects and collaborations.",
    alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
