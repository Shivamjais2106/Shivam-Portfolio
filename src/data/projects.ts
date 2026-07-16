// import {
//     Gamepad2, Ghost, Utensils, Building2, Network,
//     Layers, Vote, Rocket, Cpu, Activity, HandMetal,
//     Brain, PenTool, Link2, ShoppingBag, Sprout, FileSearch, Shirt, Landmark,
//     LayoutTemplate, Music, PanelLeft, Cat, Type, LayoutGrid, Trophy,
//     type LucideIcon,
// } from "lucide-react";

// export interface Project {
//     slug: string;
//     title: string;
//     desc: string;
//     longDesc: string;
//     goal: string;
//     result: string;
//     tech: string[];
//     icon: LucideIcon;
//     image: string;
//     color: string;
//     hexColor: string;
//     glow: string;
//     date: string;
//     liveUrl?: string;
//     githubUrl?: string;
//     category?: "major" | "mini";
//     stats: {
//         duration: string;
//         role: string;
//         platform: string;
//     };
// }

// export const projects: Project[] = [
//     // ── 2025 ──────────────────────────────────────────────────────────────
//     // {
//     //     slug: "medisense-ai",
//     //     title: "MediSense AI",
//     //     desc: "An intelligent symptom analysis and prescription advisory model powered by machine learning.",
//     //     longDesc:
//     //         "MediSense AI is an AI-driven medical advisory system that analyzes patient symptoms through a natural language interface, cross-references against a curated medical knowledge base, and provides intelligent preliminary prescription recommendations. It emphasizes transparency with confidence scores and clear clinical disclaimers.",
//     //     goal: "Build an accessible AI symptom checker that helps users understand possible conditions while keeping medical disclaimers clear and responsible.",
//     //     result: "Delivered an NLP-powered advisory pipeline with structured outputs, confidence scoring, and a FastAPI backend ready for further clinical validation.",
//     //     tech: ["Python", "ML", "NLP", "FastAPI"],
//     //     icon: Activity,
//     //     image: "/projects/medisense-ai.webp",
//     //     color: "from-rose-500/30 to-pink-500/30",
//     //     hexColor: "#f43f5e",
//     //     glow: "rgba(244, 63, 94, 0.5)",
//     //     date: "2025",
//     //     stats: { duration: "4 weeks", role: "AI/ML Engineer", platform: "Web / API" },
//     // },
//     // {
//     //     slug: "gesturelingo",
//     //     title: "GestureLingo",
//     //     desc: "A real-time sign language translator bridging communication between the deaf and hearing communities.",
//     //     longDesc:
//     //         "GestureLingo uses computer vision and deep learning to translate sign language gestures into text and speech in real time. The system captures hand landmarks via MediaPipe, classifies them through a custom CNN, and outputs natural language — making communication seamless and inclusive for the deaf community.",
//     //     goal: "Create a real-time sign language translator that turns hand gestures into readable text and speech for more inclusive communication.",
//     //     result: "Built a MediaPipe + CNN pipeline that recognizes gestures in real time and outputs natural language with strong potential for accessibility use cases.",
//     //     tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
//     //     icon: HandMetal,
//     //     image: "/projects/gesturelingo.webp",
//     //     color: "from-violet-600/30 to-purple-500/30",
//     //     hexColor: "#8b5cf6",
//     //     glow: "rgba(139, 92, 246, 0.5)",
//     //     date: "2025",
//     //     stats: { duration: "6 weeks", role: "ML Engineer", platform: "Cross-Platform" },
//     // },

//     // // ── 2024 ──────────────────────────────────────────────────────────────
//     // {
//     //     slug: "gravfall",
//     //     title: "GravFall",
//     //     desc: "A gravity-defying retro game built from scratch using Assembly Language (COAL/MASM).",
//     //     longDesc:
//     //         "GravFall is a low-level 2D platformer developed entirely in x86 Assembly using MASM/COAL. The game manipulates video memory directly to render pixel-art sprites, implements a custom gravity physics engine, and handles real-time keyboard input through hardware interrupts — all in pure assembly language.",
//     //     goal: "Prove that a playable platformer with custom physics can be built entirely in x86 assembly without high-level game engines.",
//     //     result: "Shipped a responsive retro platformer with direct video memory rendering and hardware-interrupt input handling in pure assembly.",
//     //     tech: ["Assembly", "MASM", "COAL", "x86"],
//     //     icon: Cpu,
//     //     image: "/projects/gravfall.webp",
//     //     color: "from-green-600/30 to-emerald-500/30",
//     //     hexColor: "#10b981",
//     //     glow: "rgba(16, 185, 129, 0.5)",
//     //     date: "2024",
//     //     stats: { duration: "3 weeks", role: "Solo Developer", platform: "DOS / x86" },
//     // },
//     // {
//     //     slug: "void-striker",
//     //     title: "Void Striker",
//     //     desc: "A high-octane 2D spaceship shooter built with C++ and SFML.",
//     //     longDesc:
//     //         "Void Striker is a fast-paced action game that pushes the limits of 2D rendering using SFML. It features procedural enemy spawning, dynamic difficulty scaling, a custom particle engine for explosive combat effects, and a leaderboard system. The project highlights efficient resource management and smooth game loops.",
//     //     goal: "Build a polished 2D shooter with procedural enemies, particle effects, and scalable difficulty in C++.",
//     //     result: "Delivered a smooth SFML game loop with dynamic combat, particle feedback, and a working leaderboard in under a week of development.",
//     //     tech: ["C++", "SFML", "Game Dev"],
//     //     icon: Rocket,
//     //     image: "/projects/void-striker.webp",
//     //     color: "from-purple-600/30 to-indigo-600/30",
//     //     hexColor: "#9333ea",
//     //     glow: "rgba(147, 51, 234, 0.5)",
//     //     date: "2024",
//     //     stats: { duration: "5 days", role: "Solo Developer", platform: "Windows" },
//     // },
//     // {
//     //     slug: "echoes-of-matrix",
//     //     title: "Echoes Of Matrix",
//     //     desc: "Developed a fully functional 3D first-person shooter game using C++ and Unreal Engine.",
//     //     longDesc:
//     //         "Echoes Of Matrix is a high-performance 3D FPS built from the ground up using Unreal Engine 5. It features advanced AI behavior, realistic physics, and immersive environment design. The project focuses on optimizing C++ for game logic and leveraging Blueprints for rapid prototyping of UI and game mechanics.",
//     //     goal: "Design a 3D FPS prototype in Unreal Engine that balances C++ performance with rapid Blueprint iteration for gameplay systems.",
//     //     result: "Produced an immersive FPS experience with AI enemies, physics-driven interactions, and optimized C++ gameplay logic.",
//     //     tech: ["C++", "Unreal Engine", "Game Design"],
//     //     icon: Gamepad2,
//     //     image: "/projects/echoes-of-matrix.webp",
//     //     color: "from-blue-600/30 to-cyan-500/30",
//     //     hexColor: "#3b82f6",
//     //     glow: "rgba(37, 99, 235, 0.5)",
//     //     date: "2024",
//     //     stats: { duration: "2 weeks", role: "Solo Developer", platform: "Windows / PC" },
//     // },
//     // {
//     //     slug: "ai-pacman",
//     //     title: "AI Pacman Game",
//     //     desc: "Created a classic Pacman game in Python integrated with AI logic for intelligent ghost movement.",
//     //     longDesc:
//     //         "This project reimagines the classic Pacman arcade game using Python and Pygame. The highlight is the unique AI implementation for the ghosts, using A* pathfinding and custom heuristics to create challenging and smart behavior that adapts to the player's movements.",
//     //     goal: "Recreate Pacman with ghost AI that adapts to player movement using pathfinding and heuristic decision-making.",
//     //     result: "Built a playable arcade clone where ghosts intelligently chase the player using A* and custom AI behavior trees.",
//     //     tech: ["Python", "AI", "Algorithms"],
//     //     icon: Ghost,
//     //     image: "/projects/ai-pacman.webp",
//     //     color: "from-yellow-400/30 to-orange-500/30",
//     //     hexColor: "#eab308",
//     //     glow: "rgba(234, 179, 8, 0.5)",
//     //     date: "2024",
//     //     stats: { duration: "3 weeks", role: "AI Developer", platform: "Cross-Platform" },
//     // },

//     // // ── 2023 ──────────────────────────────────────────────────────────────
//     // {
//     //     slug: "food-tracking",
//     //     title: "Food Tracking Site",
//     //     desc: "Designed and developed a responsive food delivery tracking website with a MySQL database.",
//     //     longDesc:
//     //         "A full-stack web application designed for seamless food ordering and real-time delivery tracking. It features a robust PHP backend, a relational MySQL database for managing orders and users, and a modern, responsive frontend crafted with CSS for high visual impact.",
//     //     goal: "Create a responsive food tracking website with order management and live delivery status backed by a relational database.",
//     //     result: "Launched a full-stack PHP/MySQL app with user flows for ordering, tracking, and managing deliveries across devices.",
//     //     tech: ["HTML", "CSS", "PHP", "MySQL"],
//     //     icon: Utensils,
//     //     image: "/projects/food-tracking.webp",
//     //     color: "from-green-500/30 to-emerald-500/30",
//     //     hexColor: "#22c55e",
//     //     glow: "rgba(16, 185, 129, 0.5)",
//     //     date: "2023",
//     //     stats: { duration: "3 weeks", role: "Full Stack Developer", platform: "Web Browser" },
//     // },
//     // {
//     //     slug: "hotel-management",
//     //     title: "Hotel Management",
//     //     desc: "Designed and developed a comprehensive Hotel Management System using C++.",
//     //     longDesc:
//     //         "A sophisticated management console built with C++ for handling hotel operations. It includes modules for room booking, customer billing, and inventory management, all while demonstrating strong principles of Object-Oriented Programming and efficient data structure usage.",
//     //     goal: "Design a C++ hotel management console covering bookings, billing, and inventory with clean OOP architecture.",
//     //     result: "Implemented modular hotel operations software demonstrating structured data handling and maintainable class design.",
//     //     tech: ["C++", "System Architecture"],
//     //     icon: Building2,
//     //     image: "/projects/hotel-management.webp",
//     //     color: "from-indigo-500/30 to-purple-500/30",
//     //     hexColor: "#6366f1",
//     //     glow: "rgba(99, 102, 241, 0.5)",
//     //     date: "2023",
//     //     stats: { duration: "2 weeks", role: "System Architect", platform: "CLI / Desktop" },
//     // },
//     // {
//     //     slug: "network-communication",
//     //     title: "Brand Network",
//     //     desc: "Created a professional brand communication network system using Cisco Packet Tracer.",
//     //     longDesc:
//     //         "A simulated enterprise-level network infrastructure designed in Cisco Packet Tracer. It implements secure VLANs, OSPF routing, and firewall configurations to ensure robust and secure communication across a geographically distributed brand network.",
//     //     goal: "Model a secure enterprise network with VLAN segmentation, routing, and firewall rules in Cisco Packet Tracer.",
//     //     result: "Validated a scalable brand network design with working OSPF routing and secure inter-VLAN communication.",
//     //     tech: ["Cisco", "Networking", "Security"],
//     //     icon: Network,
//     //     image: "/projects/network-communication.webp",
//     //     color: "from-cyan-500/30 to-blue-500/30",
//     //     hexColor: "#06b6d4",
//     //     glow: "rgba(6, 182, 212, 0.5)",
//     //     date: "2023",
//     //     stats: { duration: "1 week", role: "Network Engineer", platform: "Cisco Packet Tracer" },
//     // },
//     // {
//     //     slug: "vr-platform-ui",
//     //     title: "VR Platform UI/UX",
//     //     desc: "Designed and developed a UI/UX for a Virtual Reality platform focusing on spatial interfaces.",
//     //     longDesc:
//     //         "A forward-thinking UI/UX project focused on the unique challenges of immersive environments. This design explores spatial interfaces, gaze-based interaction, and holographic menus, aiming to provide a frictionless and intuitive user experience in a 3D VR space.",
//     //     goal: "Design intuitive spatial UI patterns for VR including gaze interaction, holographic menus, and immersive navigation.",
//     //     result: "Delivered a cohesive VR interface system focused on clarity, comfort, and natural interaction in 3D space.",
//     //     tech: ["UI/UX", "Virtual Reality", "Design"],
//     //     icon: Layers,
//     //     image: "/projects/vr-platform-ui.webp",
//     //     color: "from-pink-500/30 to-rose-500/30",
//     //     hexColor: "#ec4899",
//     //     glow: "rgba(244, 63, 94, 0.5)",
//     //     date: "2023",
//     //     stats: { duration: "1 week", role: "UI Designer", platform: "Oculus / Vive" },
//     // },
//     // {
//     //     slug: "digital-voting",
//     //     title: "Digital Voting System",
//     //     desc: "Designed a digital voting system using Proteus and implemented it on a breadboard.",
//     //     longDesc:
//     //         "An end-to-end hardware engineering project that began with a complex digital logic simulation in Proteus, featuring multi-display output, encoder logic, and a physical breadboard implementation that validated the integrity of the digital voting process.",
//     //     goal: "Design and validate a tamper-resistant digital voting circuit from simulation through breadboard implementation.",
//     //     result: "Successfully simulated and built a working voting system with encoder logic, display output, and verified hardware integrity.",
//     //     tech: ["Proteus", "Hardware", "Breadboard", "Logic Gates"],
//     //     icon: Vote,
//     //     image: "/projects/digital-voting.webp",
//     //     color: "from-slate-500/30 to-gray-500/30",
//     //     hexColor: "#64748b",
//     //     glow: "rgba(100, 116, 139, 0.5)",
//     //     date: "2023",
//     //     stats: { duration: "1.5 months", role: "Hardware Engineer", platform: "Physical Hardware" },
//     // },
//     /* ============================================================================
//    NAYE PROJECTS — projects.ts MEIN PASTE KARNE KE LIYE
//    ============================================================================

//    ISKO KAISE USE KAREIN:

//    STEP 1 — Imports update karo
//    -----------------------------
//    Apne src/data/projects.ts ke top wale import block mein ye icons ADD karo
//    (jo pehle se hain unke saath comma laga ke):

//        Brain, PenTool, Link2, ShoppingBag, Sprout, FileSearch, Shirt,

//    Poora import block kuch aisa dikhega:

//        import {
//            Gamepad2, Ghost, Utensils, Building2, Network,
//            Layers, Vote, Rocket, Cpu, Activity, HandMetal,
//            Brain, PenTool, Link2, ShoppingBag, Sprout, FileSearch, Shirt,
//            type LucideIcon,
//        } from "lucide-react";


//    STEP 2 — Array entries paste karo
//    -----------------------------------
//    Neeche diya hua poora object array copy karo aur apne `projects` array ke
//    ANDAR, sabse last comma (,) ke turant baad paste kar do — closing `];`
//    se pehle.


//    STEP 3 — Images daalo
//    -----------------------
//    Ye images `public/projects/` folder mein daalni hongi (naam exactly match
//    hone chahiye):

//        - internova-ai.webp
//        - contentforge.webp
//        - url-shortener.webp
//        - technokart.webp
//        - rural-edge.webp
//        - infoforge.webp
//        - urbanthreads.webp

//    Agar image ka naam different rakhna hai to bas neeche `image:` field mein
//    path change kar dena.


//    STEP 4 — TODO wale links fill karo
//    -------------------------------------
//    Jin projects mein `liveUrl` ya `githubUrl` nahi diya (Internova AI ka
//    GitHub, ContentForge, URL Shortener, TechnoKart, InfoForge, UrbanThreads),
//    unke liye neeche "// TODO" comment chhoda hai — jab link ho to bas
//    uncomment/add kar dena. Interface mein ye fields optional (`?`) hain,
//    isliye missing hone se koi error nahi aayega.

// ============================================================================ */

// // ── 2025 (New Additions) ────────────────────────────────────────────────
// {
//     slug: "internova-ai",
//     title: "Internova AI",
//     desc: "AI-powered career guidance platform with resume analysis, skill gap detection, personalized roadmaps, and job recommendations.",
//     longDesc:
//         "Internova AI is a full-stack AI career platform designed for students and fresh graduates. It analyzes resumes, identifies missing skills for target roles, generates personalized learning roadmaps, recommends internships, and provides an AI career assistant using Groq LLM. The platform also supports Google authentication, Cloudinary-based PDF storage, and user profile management.",
//     goal: "Help students prepare for careers by providing AI-driven resume analysis, learning plans, and job recommendations.",
//     result: "Built a scalable AI-powered career platform with authentication, AI services, and personalized career guidance.",
//     tech: ["Next.js", "Node.js", "Express.js", "Python", "MongoDB Atlas", "Groq API", "JWT", "Google OAuth", "Tailwind CSS"],
//     icon: Brain,
//     image: "/projects/internova-ai.webp",
//     color: "from-teal-500/30 to-cyan-500/30",
//     hexColor: "#14b8a6",
//     glow: "rgba(20, 184, 166, 0.5)",
//     date: "2025",
//     liveUrl: "https://internova-ai.vercel.app",
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "4 weeks", role: "Full Stack AI Developer", platform: "Web" },
// },
// {
//     slug: "contentforge",
//     title: "ContentForge ",
//     desc: "AI-powered content generation platform for blogs, articles, and digital creators.",
//     longDesc:
//         "ContentForge enables users to generate high-quality content using artificial intelligence. It includes secure authentication, content management, AI-assisted writing workflows, and a responsive interface for creating and organizing digital content efficiently.",
//     goal: "Reduce content creation time through AI-assisted writing.",
//     result: "Developed a modern AI content platform with authentication and content management.",
//     tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
//     icon: PenTool,
//     image: "/projects/contentforge.webp",
//     color: "from-amber-500/30 to-orange-500/30",
//     hexColor: "#f59e0b",
//     glow: "rgba(245, 158, 11, 0.5)",
//     date: "2025",
//     // liveUrl: "", // TODO: not deployed yet
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "3 weeks", role: "Full Stack Developer", platform: "Web" },
// },
// {
//     slug: "technokart",
//     title: "TechnoKart",
//     desc: "Student marketplace for buying, selling, and renting products securely.",
//     longDesc:
//         "TechnoKart is an online student marketplace where users can buy, sell, and rent products. The platform offers authentication, messaging, product listings, and personalized recommendations to simplify transactions within student communities.",
//     goal: "Create a dedicated marketplace for students to exchange products securely.",
//     result: "Developed a marketplace platform with user authentication and product management.",
//     tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
//     icon: ShoppingBag,
//     image: "/projects/technokart.webp",
//     color: "from-fuchsia-500/30 to-pink-500/30",
//     hexColor: "#d946ef",
//     glow: "rgba(217, 70, 239, 0.5)",
//     date: "2025",
//     // liveUrl: "", // TODO: not deployed yet (repo is private)
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "3 weeks", role: "Full Stack Developer", platform: "Web" },
// },
// {
    
//     slug: "civic-issues-system",
//     title: "Civic Issues Reporting System",
//     desc: "Digital platform for citizens to report and track civic issues within their community.",
//     longDesc:
//         "A civic engagement platform that allows citizens to report local infrastructure and public service issues — such as broken roads, faulty streetlights, and waste management problems — directly to relevant authorities. Designed with an Indian government portal aesthetic, the platform provides a structured complaint submission flow and status tracking for reported issues.",
//     goal: "Bridge the gap between citizens and local authorities by simplifying how civic problems are reported and resolved.",
//     result: "Built a full-stack civic reporting platform with a government-style interface and structured issue tracking.",
//     tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//     icon: Landmark,
//     image: "/projects/civic-issues.webp",
//     color: "from-red-500/30 to-rose-500/30",
//     hexColor: "#dc2626",
//     glow: "rgba(220, 38, 38, 0.5)",
//     date: "2025",
//     // liveUrl: "", // TODO: add deployment link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "2 weeks", role: "Full Stack Developer", platform: "Web" },
// },
// {
//     slug: "ruralBiz-ai",
//     title: "RuralBiz AI",
//     desc: "AI-powered platform supporting rural entrepreneurs with business guidance and market insights.",
//     longDesc:
//         "RuralBiz AI helps rural entrepreneurs validate business ideas, access market insights, connect with mentors, and discover government resources. The platform simplifies entrepreneurship using AI-generated recommendations and educational resources.",
//     goal: "Support rural entrepreneurs with accessible AI-powered business guidance.",
//     result: "Created a hackathon project promoting entrepreneurship through AI assistance.",
//     tech: ["HTML5", "CSS3", "JavaScript", "AI APIs (ChatGPT/Gemini)"],
//     icon: Sprout,
//     image: "/projects/ruralBiz-ai.webp",
//     color: "from-lime-500/30 to-green-500/30",
//     hexColor: "#84cc16",
//     glow: "rgba(132, 204, 22, 0.5)",
//     date: "2025",
//     // liveUrl: "", // TODO: add GitHub Pages link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "2 days", role: "Frontend Developer", platform: "Web" },
// },
// // {
// //     slug: "infoforge",
// //     title: "InfoForge",
// //     desc: "AI-powered document processing platform for extracting and managing structured information.",
// //     longDesc:
// //         "InfoForge is an AI-based information management platform that processes uploaded documents and extracts useful insights. It provides an organized interface for handling and managing document-based information efficiently.",
// //     goal: "Simplify document processing using AI.",
// //     result: "Built an AI-powered document management solution.",
// //     tech: ["Next.js", "Node.js", "MongoDB", "AI APIs", "Tailwind CSS"],
// //     icon: FileSearch,
// //     image: "/projects/infoforge.webp",
// //     color: "from-violet-500/30 to-indigo-500/30",
// //     hexColor: "#8b5cf6",
// //     glow: "rgba(139, 92, 246, 0.5)",
// //     date: "2025",
// //     // liveUrl: "", // TODO: add link
// //     // githubUrl: "", // TODO: add repo link
// //     stats: { duration: "2 weeks", role: "Full Stack Developer", platform: "Web" },
// // },
// {
//     slug: "urbanthreads",
//     title: "UrbanThreads",
//     desc: "Modern fashion e-commerce frontend with responsive UI, product browsing, shopping cart, and clean shopping experience.",
//     longDesc:
//         "UrbanThreads is a responsive fashion e-commerce web application designed with a modern and user-friendly interface. It features a stylish landing page, product browsing, category sections, shopping cart, and intuitive navigation to provide a seamless online shopping experience across desktop and mobile devices.",
//     goal: "Build a modern and responsive fashion shopping interface while improving frontend development and UI/UX design skills.",
//     result: "Developed a visually appealing e-commerce frontend with responsive layouts, reusable components, and an optimized user experience.",
//     tech: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "React Router", "HTML5", "CSS3"],
//     icon: Shirt,
//     image: "/projects/urbanthreads.webp",
//     color: "from-orange-500/30 to-amber-500/30",
//     hexColor: "#f97316",
//     glow: "rgba(249, 115, 22, 0.5)",
//     date: "2025",
//     // liveUrl: "", // TODO: add deployment link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "1 week", role: "Frontend Developer", platform: "Web" },
// },
// {
//     slug: "LinkForge",
//     title: "LinkForge",
//     desc: "Modern URL shortening platform with QR code generation and click analytics.",
//     longDesc:
//         "A full-stack URL Shortener that converts long URLs into shareable short links. Users can generate QR codes, download them, track click counts, and access shortened links instantly through QR scanning. The application provides a responsive user interface with fast performance.",
//     goal: "Provide a simple platform to shorten URLs while tracking usage statistics.",
//     result: "Built a complete URL shortening system with analytics and QR code support.",
//     tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "NanoID", "Tailwind CSS", "DaisyUI"],
//     icon: Link2,
//     image: "/projects/linkforge.webp",
//     color: "from-sky-500/30 to-blue-500/30",
//     hexColor: "#0ea5e9",
//     glow: "rgba(14, 165, 233, 0.5)",
//     date: "2025",
//     // liveUrl: "", // TODO: not deployed yet
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "1 week", role: "Full Stack Developer", platform: "Web" },
// },
// /* ============================================================================
//    PART 1 — data/projects.ts MEIN INTERFACE UPDATE KARO
//    ============================================================================

//    Apni Project interface mein (jo file ke top pe hai) ek naya OPTIONAL field
//    add karo — isse purane saare projects (jo pehle se likhe hain) bilkul
//    touch nahi karne padenge, kyunki `?` optional hone ki wajah se undefined
//    ko automatically "major" treat kar liya jayega page.tsx mein.

//    PEHLE:
//    -------
//    export interface Project {
//        slug: string;
//        title: string;
//        ...
//        stats: {
//            duration: string;
//            role: string;
//            platform: string;
//        };
//    }

//    AB YE KARO (bas ek line add karni hai, "category" field):
//    ------------------------------------------------------------
//    export interface Project {
//        slug: string;
//        title: string;
//        ...
//        category?: "major" | "mini";   // 👈 YE LINE ADD KARO
//        stats: {
//            duration: string;
//            role: string;
//            platform: string;
//        };
//    }

//    Bas itna hi — purane 19 projects (jinme category field nahi hai) automatically
//    "major" maane jayenge. Sirf niche wale 7 mini projects mein explicitly
//    `category: "mini"` likha hai.


//    ============================================================================
//    PART 2 — PURANE 7 MINI-PROJECT OBJECTS KO IN NAYE SE REPLACE KAR DO
//    ============================================================================

//    Agar tumne pichli baar wale 7 mini projects (landing-pages se
//    hackday-shivamjaiswal tak) already paste kar diye hain, to unhe DHOONDH
//    KE DELETE kar do aur neeche wale naye 7 (jinme category: "mini" hai)
//    unki jagah paste kar do.

//    Agar abhi tak paste nahi kiye, to seedha neeche wale hi paste kar do
//    apne projects array ke end mein, `];` se pehle.
// ============================================================================ */

// {
//     slug: "landing-pages",
//     title: "Landing Pages",
//     desc: "A collection of practice landing page designs focused on responsive layouts and clean UI.",
//     longDesc:
//         "A set of practice landing pages built to strengthen core frontend fundamentals — responsive grid/flex layouts, typography hierarchy, and component structuring across different design styles.",
//     goal: "Practice building responsive, visually clean landing pages from scratch.",
//     result: "Built multiple responsive landing page layouts demonstrating strong CSS fundamentals.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     icon: LayoutTemplate,
//     image: "/projects/landing-pages.webp",
//     color: "from-zinc-500/30 to-slate-500/30",
//     hexColor: "#71717a",
//     glow: "rgba(113, 113, 122, 0.5)",
//     date: "2024",
//     category: "mini",
//     // liveUrl: "", // TODO: add link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "3 days", role: "Frontend Developer", platform: "Web" },
// },
// {
//     slug: "spotify-ui-clone",
//     title: "Spotify UI Clone",
//     desc: "A functional frontend clone of Spotify's music player interface.",
//     longDesc:
//         "A practice project recreating Spotify's core UI — including the sidebar navigation, playlist view, and now-playing bar — built to sharpen pixel-perfect layout and styling skills.",
//     goal: "Practice replicating a real-world, polished UI with precise spacing and styling.",
//     result: "Built a visually accurate Spotify interface clone using HTML and CSS.",
//     tech: ["HTML", "CSS"],
//     icon: Music,
//     image: "/projects/spotify-ui-clone.webp",
//     color: "from-green-500/30 to-lime-500/30",
//     hexColor: "#1db954",
//     glow: "rgba(29, 185, 84, 0.5)",
//     date: "2024",
//     category: "mini",
//     // liveUrl: "", // TODO: add link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "2 days", role: "Frontend Developer", platform: "Web" },
// },
// {
//     slug: "sidebar-menu",
//     title: "Sidebar Menu",
//     desc: "A responsive, collapsible sidebar navigation component.",
//     longDesc:
//         "A reusable sidebar navigation UI pattern featuring smooth collapse/expand animations and responsive behavior across screen sizes — built as a standalone component for future projects.",
//     goal: "Build a reusable, responsive sidebar navigation component.",
//     result: "Created a smooth, collapsible sidebar UI pattern usable across projects.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     icon: PanelLeft,
//     image: "/projects/sidebar-menu.webp",
//     color: "from-cyan-600/30 to-sky-500/30",
//     hexColor: "#0891b2",
//     glow: "rgba(8, 145, 178, 0.5)",
//     date: "2024",
//     category: "mini",
//     // liveUrl: "", // TODO: add link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "1 day", role: "Frontend Developer", platform: "Web" },
// },
// {
//     slug: "pet-card",
//     title: "Pet Card",
//     desc: "A styled pet profile card component with hover interactions.",
//     longDesc:
//         "A small UI component project — a pet profile card featuring clean typography, image presentation, and interactive hover states, built to practice component-level design.",
//     goal: "Practice building polished, interactive UI card components.",
//     result: "Built a clean, reusable pet profile card with smooth hover interactions.",
//     tech: ["HTML", "CSS"],
//     icon: Cat,
//     image: "/projects/pet-card.webp",
//     color: "from-pink-400/30 to-rose-400/30",
//     hexColor: "#f472b6",
//     glow: "rgba(244, 114, 182, 0.5)",
//     date: "2024",
//     category: "mini",
//     // liveUrl: "", // TODO: add link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "1 day", role: "Frontend Developer", platform: "Web" },
// },
// {
//     slug: "text-animation",
//     title: "Text Animation",
//     desc: "A collection of animated text effects including staggered and staircase-style reveals.",
//     longDesc:
//         "A pure CSS/JavaScript exploration of animated text reveal effects — including cascading letter animations and staircase-style transitions — built to practice creative frontend animation techniques.",
//     goal: "Explore and practice creative CSS-based text animation techniques.",
//     result: "Built multiple smooth, eye-catching text animation effects using HTML and CSS.",
//     tech: ["HTML", "CSS"],
//     icon: Type,
//     image: "/projects/text-animation.webp",
//     color: "from-amber-400/30 to-yellow-400/30",
//     hexColor: "#fbbf24",
//     glow: "rgba(251, 191, 36, 0.5)",
//     date: "2024",
//     category: "mini",
//     // liveUrl: "", // TODO: add link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "1 day", role: "Frontend Developer", platform: "Web" },
// },
// {
//     slug: "unstop-frontend-task",
//     title: "Unstop Frontend Task",
//     desc: "A frontend assignment built as part of an Unstop coding challenge.",
//     longDesc:
//         "A timed frontend assignment solved as part of an Unstop coding challenge — implementing a UI from a given design brief with attention to layout accuracy and responsiveness.",
//     goal: "Implement a given UI design accurately under a timed challenge format.",
//     result: "Delivered a working, responsive UI implementation matching the challenge requirements.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     icon: LayoutGrid,
//     image: "/projects/unstop-task.webp",
//     color: "from-slate-600/30 to-gray-600/30",
//     hexColor: "#475569",
//     glow: "rgba(71, 85, 105, 0.5)",
//     date: "2024",
//     category: "mini",
//     // liveUrl: "", // TODO: add link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "1 day", role: "Frontend Developer", platform: "Web" },
// },
// {
//     slug: "hackday-shivamjaiswal",
//     title: "HackDay Project",
//     desc: "A rapid-prototype project built during a hackathon event.",
//     longDesc:
//         "A project built during a hackathon under time constraints, focused on quickly turning an idea into a working prototype while managing scope and priorities effectively.",
//     goal: "Build and ship a working prototype within a tight hackathon timeframe.",
//     result: "Delivered a functional prototype demonstrating rapid development under pressure.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     icon: Trophy,
//     image: "/projects/hackday.webp",
//     color: "from-orange-600/30 to-red-500/30",
//     hexColor: "#ea580c",
//     glow: "rgba(234, 88, 12, 0.5)",
//     date: "2024",
//     category: "mini",
//     // liveUrl: "", // TODO: add link
//     // githubUrl: "", // TODO: add repo link
//     stats: { duration: "2 days", role: "Frontend Developer", platform: "Web" },
// },
// ];


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
        image: "/projects/internova-ai.png",
        color: "from-teal-500/30 to-cyan-500/30",
        hexColor: "#14b8a6",
        glow: "rgba(20, 184, 166, 0.5)",
        date: "2025",
        liveUrl: "https://internova-ai.vercel.app",
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/contentforge.png",
        color: "from-amber-500/30 to-orange-500/30",
        hexColor: "#f59e0b",
        glow: "rgba(245, 158, 11, 0.5)",
        date: "2025",
        // liveUrl: "", // TODO: not deployed yet
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/technokart.png",
        color: "from-fuchsia-500/30 to-pink-500/30",
        hexColor: "#d946ef",
        glow: "rgba(217, 70, 239, 0.5)",
        date: "2025",
        // liveUrl: "", // TODO: not deployed yet (repo is private)
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/civic-issues.png",
        color: "from-red-500/30 to-rose-500/30",
        hexColor: "#dc2626",
        glow: "rgba(220, 38, 38, 0.5)",
        date: "2025",
        // liveUrl: "", // TODO: add deployment link
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/rural-edge.png",
        color: "from-lime-500/30 to-green-500/30",
        hexColor: "#84cc16",
        glow: "rgba(132, 204, 22, 0.5)",
        date: "2025",
        // liveUrl: "", // TODO: add GitHub Pages link
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/urbanthreads.png",
        color: "from-orange-500/30 to-amber-500/30",
        hexColor: "#f97316",
        glow: "rgba(249, 115, 22, 0.5)",
        date: "2025",
        // liveUrl: "", // TODO: add deployment link
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/linkforge.png",
        color: "from-sky-500/30 to-blue-500/30",
        hexColor: "#0ea5e9",
        glow: "rgba(14, 165, 233, 0.5)",
        date: "2025",
        // liveUrl: "", // TODO: not deployed yet
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/landing-pages.png",
        color: "from-zinc-500/30 to-slate-500/30",
        hexColor: "#71717a",
        glow: "rgba(113, 113, 122, 0.5)",
        date: "2024",
        category: "mini",
        // liveUrl: "", // TODO: add link
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/spotify-clone.png",
        color: "from-green-500/30 to-lime-500/30",
        hexColor: "#1db954",
        glow: "rgba(29, 185, 84, 0.5)",
        date: "2024",
        category: "mini",
        // liveUrl: "", // TODO: add link
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/sidebar-menu.png",
        color: "from-cyan-600/30 to-sky-500/30",
        hexColor: "#0891b2",
        glow: "rgba(8, 145, 178, 0.5)",
        date: "2024",
        category: "mini",
        // liveUrl: "", // TODO: add link
        // githubUrl: "", // TODO: add repo link
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
        image: "/projects/pet-card.png",
        color: "from-pink-400/30 to-rose-400/30",
        hexColor: "#f472b6",
        glow: "rgba(244, 114, 182, 0.5)",
        date: "2024",
        category: "mini",
        // liveUrl: "", // TODO: add link
        // githubUrl: "", // TODO: add repo link
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
        // liveUrl: "", // TODO: add link
        // githubUrl: "", // TODO: add repo link
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
        // liveUrl: "", // TODO: add link
        // githubUrl: "", // TODO: add repo link
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