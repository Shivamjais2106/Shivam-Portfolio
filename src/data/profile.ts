// Single source of truth for career facts — used by JSON-LD, the FAQ section and /llms.txt.
// Keep this in sync with the resume so search engines and AI answer engines see consistent facts.

export const currentRole = {
    title: "MERN Stack Developer Intern",
    company: "Fakhri IT Services (India) Pvt. Ltd.",
    companyUrl: "https://www.fakhriitservices.com/",
    startDate: "2026-09-21",
    endDate: "2026-12-21",
    location: "Bhopal, Madhya Pradesh, India",
    summary:
        "Developing and maintaining MERN stack web applications — responsive React.js / Next.js / Tailwind CSS interfaces, RESTful APIs with Node.js and Express.js, MongoDB schema design, JWT authentication with role-based access control, and third-party / AI API integrations.",
};

export const experience = [
    currentRole,
    {
        title: "MERN Full Stack Developer Intern",
        company: "RRID Tech Pvt. Ltd.",
        companyUrl: undefined,
        startDate: "2026-06-15",
        endDate: "2026-09",
        location: "Bhopal, Madhya Pradesh, India",
        summary:
            "Worked on a full-stack Internship Management System covering the complete internship lifecycle, role-based dashboards (Super Admin, HR, Mentor, Intern) with React 19, Vite and Tailwind CSS, and JWT/RBAC authentication, attendance and reporting modules on a Node.js/Express/MongoDB backend.",
    },
];

export const education = {
    degree: "B.Tech in Computer Science & Information Technology",
    institution: "Sagar Institute of Research and Technology (SIRT), Bhopal",
    years: "2023 – 2027",
};

export const skills = {
    languages: ["JavaScript", "Java"],
    frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Web Design"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware Development"],
    databases: ["MongoDB", "Mongoose ODM"],
    ai: ["Groq API", "Gemini API", "Prompt Engineering"],
    tools: ["Docker", "Git", "GitHub", "Postman", "Vercel", "Render"],
};

export const allSkills = Object.values(skills).flat();

export const certifications = [
    { name: "MERN Stack Development", issuer: "Apna College" },
    { name: "Full-Stack Web Development", issuer: "Apna College" },
    { name: "Data Structures & Algorithms", issuer: "Apna College" },
];

export const awards = [
    "3rd Position — Vibe Coding Competition, BMIET Sonipat Hackathon (2025), among 50+ teams",
    "3rd Prize & Certificate of Excellence — Group Presentation, American Institute of English Language Pvt. Ltd. (April 2026)",
];

export const shortBio =
    "Shivam Jaiswal is a MERN Stack Developer from Bhopal, India, currently working as a MERN Stack Developer Intern at Fakhri IT Services (India) Pvt. Ltd. He is a B.Tech Computer Science & IT student at SIRT Bhopal (2023–2027) who builds full-stack web applications with React.js, Next.js, Node.js, Express.js and MongoDB, and integrates AI APIs such as Groq and Gemini.";

// Question/answer pairs rendered visibly on /about AND emitted as FAQPage JSON-LD.
// Answer-engine friendly: each answer is self-contained and names Shivam explicitly.
export const faqs = [
    {
        question: "Who is Shivam Jaiswal?",
        answer: shortBio,
    },
    {
        question: "Where does Shivam Jaiswal currently work?",
        answer: `Since September 2026, Shivam Jaiswal has been working as a ${currentRole.title} at ${currentRole.company}, where he builds and maintains MERN stack web applications. Before that, he was a MERN Full Stack Developer Intern at RRID Tech Pvt. Ltd., working on an Internship Management System.`,
    },
    {
        question: "What technologies does Shivam Jaiswal work with?",
        answer: `Shivam Jaiswal works mainly with the MERN stack — MongoDB, Express.js, React.js and Node.js — along with Next.js, Tailwind CSS, JWT authentication, REST API development, Docker, Git and deployment on Vercel and Render. He also integrates AI APIs including Groq and Gemini.`,
    },
    {
        question: "What projects has Shivam Jaiswal built?",
        answer: "Shivam Jaiswal's key projects include Internova AI (an AI career platform with resume analysis and personalized roadmaps using the Groq API), TechnoKart (a student marketplace with JWT auth and rental management built on Next.js, Express and MongoDB), and a Civic Issue Reporting System with role-based access, maps and real-time status tracking.",
    },
    {
        question: "Where does Shivam Jaiswal study?",
        answer: `Shivam Jaiswal is pursuing a ${education.degree} at ${education.institution} (${education.years}).`,
    },
    {
        question: "Is Shivam Jaiswal open to job opportunities?",
        answer: "Yes. Shivam Jaiswal is open to SDE-1, Junior Full Stack Developer and MERN Stack Developer roles, as well as freelance and collaboration opportunities. He can be contacted through the contact page on this portfolio, by email at shivamjais2106@gmail.com, or on LinkedIn.",
    },
];
