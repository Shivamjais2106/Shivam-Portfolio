// export interface EducationEntry {
//     id: number;
//     institution: string;
//     program: string;
//     status: "current" | "completed";
//     statusLabel: string;
//     date: string;
//     description: string;
//     highlights: string[];
//     image: string;
//     logo: string;
//     accent: "purple" | "cyan" | "blue";
// }

// export const educationEntries: EducationEntry[] = [
//     {
//         id: 1,
//         institution: "NASTP NIIT University",
//         program: "BS Computer Science — AI",
//         status: "current",
//         statusLabel: "Currently Enrolled",
//         date: "2023 — 2027",
//         description:
//             "Building a strong foundation in artificial intelligence, machine learning, software engineering, and intelligent systems design.",
//         highlights: ["Neural Networks", "ML Pipelines", "AI Systems Design"],
//         image: "/education_ai.png",
//         logo: "/logo_nastp.png",
//         accent: "purple",
//     },
//     {
//         id: 2,
//         institution: "Queen Mary College (QMC)",
//         program: "Intermediate — Pre-Engineering (ICS Physics)",
//         status: "completed",
//         statusLabel: "Completed",
//         date: "2021 — 2023",
//         description:
//             "Focused on computer science, physics, and mathematics — developing analytical thinking and leadership as a college GR.",
//         highlights: ["Computer Science", "Physics", "Student Leadership"],
//         image: "/education_ics.png",
//         logo: "/logo_qmc.png",
//         accent: "cyan",
//     },
//     {
//         id: 3,
//         institution: "KIPS Education System",
//         program: "Matriculation — Science",
//         status: "completed",
//         statusLabel: "Completed",
//         date: "2019 — 2021",
//         description:
//             "Completed science track with active participation in sports, creative activities, and academic competitions.",
//         highlights: ["Science Track", "Sports & Arts", "Academic Excellence"],
//         image: "/education_matric.png",
//         logo: "/logo_kips.png",
//         accent: "blue",
//     },
// ];

// export const accentStyles = {
//     purple: {
//         gradient: "from-neonPurple/20 to-neonPurple/5",
//         border: "border-neonPurple/30",
//         badge: "bg-neonPurple/15 text-neonPurple border-neonPurple/25",
//         dot: "bg-neonPurple shadow-[0_0_20px_rgba(168,85,247,0.8)]",
//         line: "from-neonPurple to-neonPurple/40",
//     },
//     cyan: {
//         gradient: "from-neonCyan/20 to-neonCyan/5",
//         border: "border-neonCyan/30",
//         badge: "bg-neonCyan/15 text-neonCyan border-neonCyan/25",
//         dot: "bg-neonCyan shadow-[0_0_20px_rgba(6,182,212,0.8)]",
//         line: "from-neonCyan to-neonCyan/40",
//     },
//     blue: {
//         gradient: "from-neonBlue/20 to-neonBlue/5",
//         border: "border-neonBlue/30",
//         badge: "bg-neonBlue/15 text-neonBlue border-neonBlue/25",
//         dot: "bg-neonBlue shadow-[0_0_20px_rgba(59,130,246,0.8)]",
//         line: "from-neonBlue to-neonBlue/40",
//     },
// } as const;

/* ============================================================================
   UPDATED education.ts — apni src/data/education.ts file KO PURA REPLACE
   kar do is content se.

   ⚠️ IMAGE/LOGO NOTE:
   Maine neeche naye filenames use kiye hain (logo_sirt.png, logo_school.png
   etc.) kyunki purane wale (logo_nastp.png, logo_qmc.png, logo_kips.png)
   kisi aur institute ke the — tumhare college/school ke nahi. Tumhe:

   1. Apne college (Sagar Institute) ka logo dhundh ke
      `public/logo_sirt.png` naam se save karna hoga
   2. Apne school (Vidya Sagar Higher Secondary) ka logo
      `public/logo_vidyasagar.png` naam se save karna hoga
      (10th aur 12th dono same school hai, to same logo use ho jayega)

   Agar abhi logo nahi hai to koi baat nahi — placeholder ke liye tum
   in dono lines mein purane wale hi rehne de sakte ho temporarily:
       logo: "/logo_nastp.png"   →   pehle se hai, kaam chalega
   Jab actual logo mil jaaye, filename change kar dena.
============================================================================ */

export interface EducationEntry {
    id: number;
    institution: string;
    program: string;
    status: "current" | "completed";
    statusLabel: string;
    date: string;
    description: string;
    highlights: string[];
    image: string;
    logo: string;
    accent: "purple" | "cyan" | "blue";
}

export const educationEntries: EducationEntry[] = [
    {
        id: 1,
        institution: "Sagar Institute of Research & Technology, Bhopal",
        program: "B.Tech — Computer Science & Information Technology",
        status: "current",
        statusLabel: "Currently Enrolled",
        date: "2023 — 2027",
        description:
            "Building a strong foundation in software engineering and computer science fundamentals, with hands-on coursework in Data Structures & Algorithms, Database Management Systems, Operating Systems, and Computer Networks. CPI: 6.38 / 10.00.",
        highlights: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks"],
        image: "/education_ai.png",
        logo: "/logo_sirt.png",
        accent: "purple",
    },
    {
        id: 2,
        institution: "Vidya Sagar Higher Secondary School, Bhopal",
        program: "Senior Secondary (PCMB)",
        status: "completed",
        statusLabel: "Completed",
        date: "2022 — 2023",
        description:
            "Completed Senior Secondary with Physics, Chemistry, Mathematics, and Biology (PCMB), scoring 83.8% and building a solid analytical foundation ahead of engineering studies.",
        highlights: ["Physics", "Chemistry", "Mathematics"],
        image: "/education_ics.png",
        logo: "/logo_vidyasagar.png",
        accent: "cyan",
    },
    {
        id: 3,
        institution: "Vidya Sagar Higher Secondary School, Bhopal",
        program: "Matriculation (10th Grade)",
        status: "completed",
        statusLabel: "Completed",
        date: "2020 — 2021",
        description:
            "Completed matriculation with 86%, laying the academic groundwork that led into science studies and, eventually, a computer science degree.",
        highlights: ["Science Track", "Academic Foundation"],
        image: "/education_matric.png",
        logo: "/logo_vidyasagar.png",
        accent: "blue",
    },
];

export const accentStyles = {
    purple: {
        gradient: "from-neonPurple/20 to-neonPurple/5",
        border: "border-neonPurple/30",
        badge: "bg-neonPurple/15 text-neonPurple border-neonPurple/25",
        dot: "bg-neonPurple shadow-[0_0_20px_rgba(168,85,247,0.8)]",
        line: "from-neonPurple to-neonPurple/40",
    },
    cyan: {
        gradient: "from-neonCyan/20 to-neonCyan/5",
        border: "border-neonCyan/30",
        badge: "bg-neonCyan/15 text-neonCyan border-neonCyan/25",
        dot: "bg-neonCyan shadow-[0_0_20px_rgba(6,182,212,0.8)]",
        line: "from-neonCyan to-neonCyan/40",
    },
    blue: {
        gradient: "from-neonBlue/20 to-neonBlue/5",
        border: "border-neonBlue/30",
        badge: "bg-neonBlue/15 text-neonBlue border-neonBlue/25",
        dot: "bg-neonBlue shadow-[0_0_20px_rgba(59,130,246,0.8)]",
        line: "from-neonBlue to-neonBlue/40",
    },
} as const;