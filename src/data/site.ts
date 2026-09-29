export const siteConfig = {
    name: "Shivam Jaiswal",
    title: "Shivam Jaiswal — MERN Stack Developer | Portfolio",
    jobTitle: "MERN Stack Developer",
    description:
        "Shivam Jaiswal is a MERN Stack Developer from Bhopal, India — MERN intern at Fakhri IT Services, building full-stack apps with React, Next.js, Node.js, MongoDB and AI APIs.",
    keywords: [
        "Shivam Jaiswal",
        "Shivam Jaiswal portfolio",
        "Shivam Jaiswal developer",
        "MERN Stack Developer",
        "MERN Stack Developer Bhopal",
        "Full Stack Developer Bhopal",
        "Next.js Developer",
        "React Developer India",
        "Node.js Developer",
        "Fakhri IT Services",
        "SIRT Bhopal",
        "Internova AI",
        "TechnoKart",
    ],
    twitterHandle: "@shivamJais_noxx",
    url: (process.env.NEXT_PUBLIC_SITE_URL || "https://shivamjaiswal-portfolio.vercel.app").replace(/\/$/, ""),
    email: "shivamjais2106@gmail.com",
    phone: "+91 7869037289",
    location: "Bhopal, India",
    resumePath: "/shivam-jaiswal-resume.pdf",
    resumeLabel: "Download CV",
    resumeDownloadName: "Shivam-Jaiswal-Resume.pdf",
    socials: [
        { name: "LNKDN", href: "https://www.linkedin.com/in/shivam-jaiswal-37a951369" },
        { name: "MAIL", href: "mailto:shivamjais2106@gmail.com" },
        { name: "GITHUB", href: "https://github.com/Shivamjais2106" },
    ] as const,
    // Public profiles used for schema.org `sameAs` (entity linking for search & AI engines)
    profiles: [
        "https://www.linkedin.com/in/shivam-jaiswal-37a951369",
        "https://github.com/Shivamjais2106",
        "https://leetcode.com/Shivamjais2303",
        "https://x.com/shivamJais_noxx",
    ],
};

export const projectCountLabel = (count: number) => `${count}+`;
