// export interface Certificate {
//     id: number;
//     title: string;
//     issuer: string;
//     date: string;
//     description: string;
//     /** Certificate image (PNG/JPG) or PDF path for preview + lightbox */
//     image: string;
// }

// export const certificates: Certificate[] = [
//     {
//         id: 1,
//         title: "Hugging Face Agents",
//         issuer: "Hugging Face",
//         date: "06 2026",
//         description: "Certificate of Excellence for successfully completing the Hugging Face Agents Course.",
//         image: "/certificates/huggingface-agents-excellence.webp",
//     },
//     {
//         id: 2,
//         title: "Fundamentals of Agents",
//         issuer: "Hugging Face",
//         date: "06 2026",
//         description: "Unit 1: Foundations of Agents in the Hugging Face Agents Course — building and deploying AI agents.",
//         image: "/certificates/huggingface-agents-fundamentals.webp",
//     },
//     {
//         id: 3,
//         title: "AI for Beginners",
//         issuer: "NS Training",
//         date: "06 2024",
//         description: "Foundational artificial intelligence concepts, machine learning workflows, and practical AI literacy.",
//         image: "/certificates/ai-for-beginners.pdf",
//     },
//     {
//         id: 4,
//         title: "Freelancing",
//         issuer: "NS Training",
//         date: "08 2024",
//         description: "Client acquisition, proposal writing, and building a sustainable freelance business in tech and design.",
//         image: "/certificates/Freelancing.png",
//     },
//     {
//         id: 5,
//         title: "Logo Designing",
//         issuer: "NS Training",
//         date: "09 2024",
//         description: "Brand identity fundamentals, mark construction, and visual systems for memorable logos.",
//         image: "/certificates/LogoDesigning.png",
//     },
//     {
//         id: 6,
//         title: "Graphic Designing",
//         issuer: "NS Training",
//         date: "10 2024",
//         description: "Layout, typography, color theory, and production-ready visual design for digital and print.",
//         image: "/certificates/GraphicDesigning.png",
//     },
//     {
//         id: 7,
//         title: "Social Media Marketing",
//         issuer: "NS Training",
//         date: "11 2024",
//         description: "Content strategy, audience growth, and campaign design across major social platforms.",
//         image: "/certificates/SMM.png",
//     },
// ];

// export function isCertificatePdf(path: string) {
//     return path.toLowerCase().endsWith(".pdf");
// }

// /** Safe URL for certificate assets (handles spaces and special chars in filenames). */
// export function certificateAssetUrl(path: string) {
//     return encodeURI(path);
// }



export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    /** Certificate image (PNG/JPG) or PDF path for preview + lightbox */
    image: string;
}

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "Vibe Coding Competition — 3rd Position",
        issuer: "BMIET Sonipat Hackathon",
        date: "2025",
        description: "Secured 3rd position in the Vibe Coding Competition at BMIET Sonipat Hackathon, competing among 50+ teams.",
        image: "/certificates/bmiet.jpeg",
    },

    // Add these once you have the certificate image/PDF for each:
    //
    // {
    //     id: 2,
    //     title: "MERN Stack Development",
    //     issuer: "Apna College",
    //     date: "2024",
    //     description: "Full-stack development using MongoDB, Express.js, React.js, and Node.js.",
    //     image: "/certificates/mern-stack.webp",
    // },
    // {
    //     id: 3,
    //     title: "Full-Stack Web Development",
    //     issuer: "Apna College",
    //     date: "2024",
    //     description: "End-to-end web development covering frontend, backend, and deployment.",
    //     image: "/certificates/full-stack-web-dev.webp",
    // },
    // {
    //     id: 4,
    //     title: "Data Structures & Algorithms",
    //     issuer: "Apna College",
    //     date: "2024",
    //     description: "Core DSA concepts and problem-solving for technical interviews.",
    //     image: "/certificates/dsa.webp",
    // },
];

export function isCertificatePdf(path: string) {
    return path.toLowerCase().endsWith(".pdf");
}

/** Safe URL for certificate assets (handles spaces and special chars in filenames). */
export function certificateAssetUrl(path: string) {
    return encodeURI(path);
}