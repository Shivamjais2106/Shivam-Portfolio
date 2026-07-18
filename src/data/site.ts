export const siteConfig = {
    name: "Shivam Jaiswal",
    title: "Shivam Jaiswal | Portfolio",
    jobTitle: "Full Stack Developer", 
    description:
        "Portfolio of Shivam Jaiswal — AI student, developer, and designer building intelligent experiences with code, design, and innovation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://shivamjaiswal-portfolio.vercel.app",
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
};

export const projectCountLabel = (count: number) => `${count}+`;
