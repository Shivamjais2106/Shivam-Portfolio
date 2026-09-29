import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — MERN Stack Developer Intern at Fakhri IT Services",
    description:
        "About Shivam Jaiswal — MERN Stack Developer Intern at Fakhri IT Services (India) Pvt. Ltd., ex-intern at RRID Tech, and B.Tech CSIT student at SIRT Bhopal. Experience, skills and FAQs.",
    alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
