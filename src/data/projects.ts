import {
    Gamepad2, Ghost, Utensils, Building2, Network,
    Layers, Vote, Rocket, Cpu, Activity, HandMetal,
    Brain, PenTool, Link2, ShoppingBag, Sprout, FileSearch, Shirt, Landmark,
    LayoutTemplate, Music, PanelLeft, Cat, Type, LayoutGrid, Trophy,
    type LucideIcon,
} from "lucide-react";

export interface Project {
    slug: string;
    title: string;
    desc: string;
    longDesc: string;
    goal: string;
    result: string;
    tech: string[];
    icon: LucideIcon;
    image: string;
    color: string;
    hexColor: string;
    glow: string;
    date: string;
    liveUrl?: string;
    githubUrl?: string;
    category?: "major" | "mini";
    stats: {
        duration: string;
        role: string;
        platform: string;
    };
}

export const projects: Project[] = [
    // ── 2025 (New Additions) ────────────────────────────────────────────────
    {
        slug: "internova-ai",
        title: "Internova AI",
        desc: "AI-powered career guidance platform with resume analysis, skill gap detection, personalized roadmaps, and job recommendations.",
        longDesc:
            "Internova AI is a full-stack AI career platform designed for students and fresh graduates. It analyzes resumes, identifies missing skills for target roles, generates personalized learning roadmaps, recommends internships, and provides an AI career assistant using Groq LLM. The platform also supports Google authentication, Cloudinary-based PDF storage, and user profile management.",
        goal: "Help students prepare for careers by providing AI-driven resume analysis, learning plans, and job recommendations.",
        result: "Built a scalable AI-powered career platform with authentication, AI services, and personalized career guidance.",
        tech: ["Next.js", "Node.js", "Express.js", "Python", "MongoDB Atlas", "Groq API", "JWT", "Google OAuth", "Tailwind CSS"],
        icon: Brain,
        image: "/projects/internova-ai.webp",
        color: "from-teal-500/30 to-cyan-500/30",
        hexColor: "#14b8a6",
        glow: "rgba(20, 184, 166, 0.5)",
        date: "2025",
        liveUrl: "https://internova-ai.vercel.app",
        githubUrl: "https://github.com/Shivamjais2106/Internova-AI", // TODO: add repo link
        stats: { duration: "4 weeks", role: "Full Stack AI Developer", platform: "Web" },
    },
    {
        slug: "contentforge",
        title: "ContentForge ",
        desc: "AI-powered content generation platform for blogs, articles, and digital creators.",
        longDesc:
            "ContentForge enables users to generate high-quality content using artificial intelligence. It includes secure authentication, content management, AI-assisted writing workflows, and a responsive interface for creating and organizing digital content efficiently.",
        goal: "Reduce content creation time through AI-assisted writing.",
        result: "Developed a modern AI content platform with authentication and content management.",
        tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        icon: PenTool,
        image: "/projects/contentForge.webp",
        color: "from-amber-500/30 to-orange-500/30",
        hexColor: "#f59e0b",
        glow: "rgba(245, 158, 11, 0.5)",
        date: "2025",
        liveUrl: "https://content-forge-murex.vercel.app/", // TODO: not deployed yet
        githubUrl: "https://github.com/Shivamjais2106/ContentForge", // TODO: add repo link
        stats: { duration: "3 weeks", role: "Full Stack Developer", platform: "Web" },
    },
    {
        slug: "technokart",
        title: "TechnoKart",
        desc: "Student marketplace for buying, selling, and renting products securely.",
        longDesc:
            "TechnoKart is an online student marketplace where users can buy, sell, and rent products. The platform offers authentication, messaging, product listings, and personalized recommendations to simplify transactions within student communities.",
        goal: "Create a dedicated marketplace for students to exchange products securely.",
        result: "Developed a marketplace platform with user authentication and product management.",
        tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
        icon: ShoppingBag,
        image: "/projects/technokart.webp",
        color: "from-fuchsia-500/30 to-pink-500/30",
        hexColor: "#d946ef",
        glow: "rgba(217, 70, 239, 0.5)",
        date: "2025",
        liveUrl: "https://techno-kart-kappa.vercel.app/", // TODO: not deployed yet (repo is private)
        githubUrl: "https://github.com/Shivamjais2106/TechnoKart", // TODO: add repo link
        stats: { duration: "3 weeks", role: "Full Stack Developer", platform: "Web" },
    },
    {
        slug: "civic-issues-system",
        title: "Civic Issues Reporting System",
        desc: "Digital platform for citizens to report and track civic issues within their community.",
        longDesc:
            "A civic engagement platform that allows citizens to report local infrastructure and public service issues — such as broken roads, faulty streetlights, and waste management problems — directly to relevant authorities. Designed with an Indian government portal aesthetic, the platform provides a structured complaint submission flow and status tracking for reported issues.",
        goal: "Bridge the gap between citizens and local authorities by simplifying how civic problems are reported and resolved.",
        result: "Built a full-stack civic reporting platform with a government-style interface and structured issue tracking.",
        tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        icon: Landmark,
        image: "/projects/civic-issue.webp",
        color: "from-red-500/30 to-rose-500/30",
        hexColor: "#dc2626",
        glow: "rgba(220, 38, 38, 0.5)",
        date: "2025",
        liveUrl: "https://shivamjais2106.github.io/jharkhand-civic-issues/", // TODO: add deployment link
        githubUrl: "https://github.com/Shivamjais2106/jharkhand-civic-issues", // TODO: add repo link
        stats: { duration: "2 weeks", role: "Full Stack Developer", platform: "Web" },
    },
    {
        slug: "ruralBiz-ai",
        title: "RuralBiz AI",
        desc: "AI-powered platform supporting rural entrepreneurs with business guidance and market insights.",
        longDesc:
            "RuralBiz AI helps rural entrepreneurs validate business ideas, access market insights, connect with mentors, and discover government resources. The platform simplifies entrepreneurship using AI-generated recommendations and educational resources.",
        goal: "Support rural entrepreneurs with accessible AI-powered business guidance.",
        result: "Created a hackathon project promoting entrepreneurship through AI assistance.",
        tech: ["HTML5", "CSS3", "JavaScript", "AI APIs (ChatGPT/Gemini)"],
        icon: Sprout,
        // NOTE: file in your folder is named "rural-edge.png", not "ruralBiz-ai" — using actual filename below.
        image: "/projects/ruralBiz-ai.webp",
        color: "from-lime-500/30 to-green-500/30",
        hexColor: "#84cc16",
        glow: "rgba(132, 204, 22, 0.5)",
        date: "2025",
        liveUrl: "https://shivamjais2106.github.io/ruralbiz-ai/", // TODO: add GitHub Pages link
        githubUrl: "https://github.com/Shivamjais2106/ruralbiz-ai", // TODO: add repo link
        stats: { duration: "2 days", role: "Frontend Developer", platform: "Web" },
    },
    {
        slug: "urbanthreads",
        title: "UrbanThreads",
        desc: "Modern fashion e-commerce frontend with responsive UI, product browsing, shopping cart, and clean shopping experience.",
        longDesc:
            "UrbanThreads is a responsive fashion e-commerce web application designed with a modern and user-friendly interface. It features a stylish landing page, product browsing, category sections, shopping cart, and intuitive navigation to provide a seamless online shopping experience across desktop and mobile devices.",
        goal: "Build a modern and responsive fashion shopping interface while improving frontend development and UI/UX design skills.",
        result: "Developed a visually appealing e-commerce frontend with responsive layouts, reusable components, and an optimized user experience.",
        tech: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "React Router", "HTML5", "CSS3"],
        icon: Shirt,
        // TODO: no image found in your projects/ folder for this one yet — add "urbanthreads.png" or update this path.
        image: "/projects/urban-trends.webp",
        color: "from-orange-500/30 to-amber-500/30",
        hexColor: "#f97316",
        glow: "rgba(249, 115, 22, 0.5)",
        date: "2025",
        liveUrl: "https://shivamjais2106.github.io/unstop-frontend-task/", // TODO: add deployment link
        githubUrl: "https://github.com/Shivamjais2106/unstop-frontend-task", // TODO: add repo link
        stats: { duration: "1 week", role: "Frontend Developer", platform: "Web" },
    },
    {
        slug: "LinkForge",
        title: "LinkForge",
        desc: "Modern URL shortening platform with QR code generation and click analytics.",
        longDesc:
            "A full-stack URL Shortener that converts long URLs into shareable short links. Users can generate QR codes, download them, track click counts, and access shortened links instantly through QR scanning. The application provides a responsive user interface with fast performance.",
        goal: "Provide a simple platform to shorten URLs while tracking usage statistics.",
        result: "Built a complete URL shortening system with analytics and QR code support.",
        tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "NanoID", "Tailwind CSS", "DaisyUI"],
        icon: Link2,
        // TODO: no image found in your projects/ folder for this one yet — add "linkforge.png" or update this path.
        image: "/projects/linkForge.webp",
        color: "from-sky-500/30 to-blue-500/30",
        hexColor: "#0ea5e9",
        glow: "rgba(14, 165, 233, 0.5)",
        date: "2025",
        liveUrl: "https://link-forge-theta.vercel.app/", // TODO: not deployed yet
        githubUrl: "https://github.com/Shivamjais2106/linkForge", // TODO: add repo link
        stats: { duration: "1 week", role: "Full Stack Developer", platform: "Web" },
    },

    // ── Mini Projects ─────────────────────────────────────────────────────
    {
        slug: "landing-pages",
        title: "Landing Pages",
        desc: "A collection of practice landing page designs focused on responsive layouts and clean UI.",
        longDesc:
            "A set of practice landing pages built to strengthen core frontend fundamentals — responsive grid/flex layouts, typography hierarchy, and component structuring across different design styles.",
        goal: "Practice building responsive, visually clean landing pages from scratch.",
        result: "Built multiple responsive landing page layouts demonstrating strong CSS fundamentals.",
        tech: ["HTML", "CSS", "JavaScript"],
        icon: LayoutTemplate,
        // TODO: no image found in your projects/ folder for this one yet — add "landing-pages.png" or update this path.
        image: "/projects/landingpages.webp",
        color: "from-zinc-500/30 to-slate-500/30",
        hexColor: "#71717a",
        glow: "rgba(113, 113, 122, 0.5)",
        date: "2024",
        category: "mini",
        liveUrl: "https://shivamjais2106.github.io/landing-pages/", // TODO: add link
        githubUrl: "https://github.com/Shivamjais2106/landing-pages", // TODO: add repo link
        stats: { duration: "3 days", role: "Frontend Developer", platform: "Web" },
    },
    {
        slug: "spotify-ui-clone",
        title: "Spotify UI Clone",
        desc: "A functional frontend clone of Spotify's music player interface.",
        longDesc:
            "A practice project recreating Spotify's core UI — including the sidebar navigation, playlist view, and now-playing bar — built to sharpen pixel-perfect layout and styling skills.",
        goal: "Practice replicating a real-world, polished UI with precise spacing and styling.",
        result: "Built a visually accurate Spotify interface clone using HTML and CSS.",
        tech: ["HTML", "CSS"],
        icon: Music,
        // NOTE: file in your folder is named "spotify-clone.png", not "spotify-ui-clone" — using actual filename below.
        image: "/projects/spotify-Clone.webp",
        color: "from-green-500/30 to-lime-500/30",
        hexColor: "#1db954",
        glow: "rgba(29, 185, 84, 0.5)",
        date: "2024",
        category: "mini",
        liveUrl: "https://shivamjais2106.github.io/spotify-ui-clone/", // TODO: add link
        githubUrl: "https://github.com/Shivamjais2106/spotify-ui-clone", // TODO: add repo link
        stats: { duration: "2 days", role: "Frontend Developer", platform: "Web" },
    },
    {
        slug: "sidebar-menu",
        title: "Sidebar Menu",
        desc: "A responsive, collapsible sidebar navigation component.",
        longDesc:
            "A reusable sidebar navigation UI pattern featuring smooth collapse/expand animations and responsive behavior across screen sizes — built as a standalone component for future projects.",
        goal: "Build a reusable, responsive sidebar navigation component.",
        result: "Created a smooth, collapsible sidebar UI pattern usable across projects.",
        tech: ["HTML", "CSS", "JavaScript"],
        icon: PanelLeft,
        image: "/projects/sidebar-menu.webp",
        color: "from-cyan-600/30 to-sky-500/30",
        hexColor: "#0891b2",
        glow: "rgba(8, 145, 178, 0.5)",
        date: "2024",
        category: "mini",
        liveUrl: "https://shivamjais2106.github.io/Sidebar-menu/", // TODO: add link
        githubUrl: "https://github.com/Shivamjais2106/Sidebar-menu", // TODO: add repo link
        stats: { duration: "1 day", role: "Frontend Developer", platform: "Web" },
    },
    {
        slug: "pet-card",
        title: "Pet Card",
        desc: "A styled pet profile card component with hover interactions.",
        longDesc:
            "A small UI component project — a pet profile card featuring clean typography, image presentation, and interactive hover states, built to practice component-level design.",
        goal: "Practice building polished, interactive UI card components.",
        result: "Built a clean, reusable pet profile card with smooth hover interactions.",
        tech: ["HTML", "CSS"],
        icon: Cat,
        // TODO: no image found in your projects/ folder for this one yet — add "pet-card.png" or update this path.
        image: "/projects/pet-card.webp",
        color: "from-pink-400/30 to-rose-400/30",
        hexColor: "#f472b6",
        glow: "rgba(244, 114, 182, 0.5)",
        date: "2024",
        category: "mini",
        liveUrl: "https://shivamjais2106.github.io/pet-card/", // TODO: add link
        githubUrl: "https://github.com/Shivamjais2106/pet-card", // TODO: add repo link
        stats: { duration: "1 day", role: "Frontend Developer", platform: "Web" },
    },
    {
        slug: "text-animation",
        title: "Text Animation",
        desc: "A collection of animated text effects including staggered and staircase-style reveals.",
        longDesc:
            "A pure CSS/JavaScript exploration of animated text reveal effects — including cascading letter animations and staircase-style transitions — built to practice creative frontend animation techniques.",
        goal: "Explore and practice creative CSS-based text animation techniques.",
        result: "Built multiple smooth, eye-catching text animation effects using HTML and CSS.",
        tech: ["HTML", "CSS"],
        icon: Type,
        image: "/projects/text-animation.png",
        color: "from-amber-400/30 to-yellow-400/30",
        hexColor: "#fbbf24",
        glow: "rgba(251, 191, 36, 0.5)",
        date: "2024",
        category: "mini",
        liveUrl: "https://shivamjais2106.github.io/Text-Animation/", // TODO: add link
        githubUrl: "https://github.com/Shivamjais2106/Text-Animation", // TODO: add repo link
        stats: { duration: "1 day", role: "Frontend Developer", platform: "Web" },
    },
    {
        slug: "unstop-frontend-task",
        title: "Unstop Frontend Task",
        desc: "A frontend assignment built as part of an Unstop coding challenge.",
        longDesc:
            "A timed frontend assignment solved as part of an Unstop coding challenge — implementing a UI from a given design brief with attention to layout accuracy and responsiveness.",
        goal: "Implement a given UI design accurately under a timed challenge format.",
        result: "Delivered a working, responsive UI implementation matching the challenge requirements.",
        tech: ["HTML", "CSS", "JavaScript"],
        icon: LayoutGrid,
        image: "/projects/unstop-task.png",
        color: "from-slate-600/30 to-gray-600/30",
        hexColor: "#475569",
        glow: "rgba(71, 85, 105, 0.5)",
        date: "2024",
        category: "mini",
        liveUrl: "https://shivamjais2106.github.io/unstop-frontend-task/", // TODO: add link
        githubUrl: "https://github.com/Shivamjais2106/unstop-frontend-task", // TODO: add repo link
        stats: { duration: "1 day", role: "Frontend Developer", platform: "Web" },
    },
    {
        slug: "hackday-shivamjaiswal",
        title: "HackDay Project",
        desc: "A rapid-prototype project built during a hackathon event.",
        longDesc:
            "A project built during a hackathon under time constraints, focused on quickly turning an idea into a working prototype while managing scope and priorities effectively.",
        goal: "Build and ship a working prototype within a tight hackathon timeframe.",
        result: "Delivered a functional prototype demonstrating rapid development under pressure.",
        tech: ["HTML", "CSS", "JavaScript"],
        icon: Trophy,
        // TODO: no image found in your projects/ folder for this one yet — add "hackday.png" or update this path.
        image: "/projects/hackday.png",
        color: "from-orange-600/30 to-red-500/30",
        hexColor: "#ea580c",
        glow: "rgba(234, 88, 12, 0.5)",
        date: "2024",
        category: "mini",
        // liveUrl: "", // TODO: add link
        // githubUrl: "", // TODO: add repo link
        stats: { duration: "2 days", role: "Frontend Developer", platform: "Web" },
    },
];