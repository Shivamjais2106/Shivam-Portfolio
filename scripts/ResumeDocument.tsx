import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";

Font.register({
    family: "Helvetica",
    fonts: [
        { src: "Helvetica" },
        { src: "Helvetica-Bold", fontWeight: 700 },
    ],
});

const c = {
    ink: "#0f172a",
    body: "#334155",
    muted: "#64748b",
    accent: "#4338ca",
    line: "#e2e8f0",
    soft: "#f8fafc",
};

const styles = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
        fontSize: 10.5,
        color: c.body,
        backgroundColor: "#ffffff",
        paddingTop: 32,
        paddingBottom: 36,
        paddingHorizontal: 36,
    },
    header: {
        marginBottom: 22,
        paddingBottom: 16,
        borderBottomWidth: 1.5,
        borderBottomColor: c.line,
    },
    name: {
        fontSize: 28,
        fontWeight: 700,
        color: c.ink,
        letterSpacing: -0.5,
        marginBottom: 6,
    },
    headline: {
        fontSize: 11,
        color: c.accent,
        fontWeight: 700,
        marginBottom: 10,
    },
    contactRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
        marginBottom: 3,
    },
    contactText: {
        fontSize: 9.5,
        color: c.muted,
        lineHeight: 1.5,
    },
    columns: {
        flexDirection: "row",
        gap: 24,
    },
    leftCol: { width: "34%" },
    rightCol: { width: "66%" },
    section: { marginBottom: 18 },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        color: c.accent,
        textTransform: "uppercase",
        letterSpacing: 1.2,
        marginBottom: 10,
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: c.line,
    },
    summary: {
        fontSize: 11,
        lineHeight: 1.65,
        color: c.body,
    },
    bullet: {
        fontSize: 10.5,
        lineHeight: 1.6,
        color: c.body,
        marginBottom: 6,
    },
    eduItem: { marginBottom: 12 },
    eduDegree: {
        fontSize: 10.5,
        fontWeight: 700,
        color: c.ink,
        lineHeight: 1.35,
    },
    eduSchool: { fontSize: 10, color: c.muted, marginTop: 2 },
    eduDate: { fontSize: 9.5, color: c.muted, marginTop: 2 },
    skillGroup: { marginBottom: 10 },
    skillLabel: {
        fontSize: 10,
        fontWeight: 700,
        color: c.ink,
        marginBottom: 3,
    },
    skillItems: {
        fontSize: 10,
        color: c.body,
        lineHeight: 1.5,
    },
    certSubheading: {
        fontSize: 10,
        fontWeight: 700,
        color: c.ink,
        marginTop: 14,
        marginBottom: 6,
    },
    certText: {
        fontSize: 10,
        color: c.body,
        lineHeight: 1.55,
        marginBottom: 6,
    },
    project: { marginBottom: 14 },
    projectHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 3,
    },
    projectTitle: {
        fontSize: 12,
        fontWeight: 700,
        color: c.ink,
    },
    projectDate: { fontSize: 9.5, color: c.muted },
    projectRole: {
        fontSize: 9.5,
        fontWeight: 700,
        color: c.accent,
        marginBottom: 4,
    },
    projectDesc: {
        fontSize: 10.5,
        lineHeight: 1.6,
        color: c.body,
        marginBottom: 5,
    },
    techLine: {
        fontSize: 9.5,
        color: c.muted,
    },
    pageTwoLabel: {
        fontSize: 10,
        fontWeight: 700,
        color: c.muted,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 14,
    },
});

const education = [
    { degree: "BS Computer Science — AI", school: "NASTP NIIT University", date: "2023 — 2027" },
    { degree: "Intermediate (ICS Physics)", school: "Queen Mary College", date: "2021 — 2023" },
    { degree: "Matriculation — Science", school: "KIPS Education System", date: "2019 — 2021" },
];

const skills = [
    { label: "AI / ML", items: "Python, TensorFlow, PyTorch, NLP, OpenCV, MediaPipe" },
    { label: "Development", items: "TypeScript, React, Next.js, Node.js, C++, PHP" },
    { label: "Design", items: "UI/UX, Figma, Branding, Three.js" },
    { label: "Data & Cloud", items: "SQL, MySQL, Pandas, AWS, Docker" },
];

const certs = [
    "Hugging Face Agents — Hugging Face (2026)",
    "Fundamentals of Agents — Hugging Face (2026)",
    "AI for Beginners — NS Training (2024)",
];

const projects = [
    {
        title: "MediSense AI",
        date: "2025",
        role: "AI/ML Engineer",
        desc: "Symptom analysis and prescription advisory system with NLP interface, confidence scoring, and FastAPI backend.",
        tech: "Python · ML · NLP · FastAPI",
    },
    {
        title: "GestureLingo",
        date: "2025",
        role: "ML Engineer",
        desc: "Real-time sign language translator using MediaPipe and a custom CNN for accessible communication.",
        tech: "Python · OpenCV · MediaPipe · TensorFlow",
    },
    {
        title: "Echoes Of Matrix",
        date: "2024",
        role: "Solo Developer",
        desc: "3D first-person shooter in Unreal Engine with C++ gameplay logic and AI enemy behavior.",
        tech: "C++ · Unreal Engine · Game Design",
    },
    {
        title: "AI Pacman Game",
        date: "2024",
        role: "AI Developer",
        desc: "Pacman clone with A* pathfinding and adaptive ghost AI using Python and Pygame.",
        tech: "Python · AI · Algorithms",
    },
    {
        title: "GravFall",
        date: "2024",
        role: "Solo Developer",
        desc: "2D platformer built in x86 Assembly with custom gravity physics and direct video memory rendering.",
        tech: "Assembly · MASM · x86",
    },
    {
        title: "Food Tracking Site",
        date: "2023",
        role: "Full Stack Developer",
        desc: "Food delivery platform with PHP/MySQL backend, order management, and delivery tracking.",
        tech: "PHP · MySQL · HTML/CSS",
    },
];

const strengths = [
    "AI/ML pipelines from preprocessing through deployment",
    "Full-stack web apps with React, Next.js, and TypeScript",
    "Game development in C++, Unreal Engine, and Python",
    "UI/UX design and polished product presentation",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );
}

function ProjectItem({ project }: { project: (typeof projects)[number] }) {
    return (
        <View style={styles.project} wrap={false}>
            <View style={styles.projectHead}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDate}>{project.date}</Text>
            </View>
            <Text style={styles.projectRole}>{project.role}</Text>
            <Text style={styles.projectDesc}>{project.desc}</Text>
            <Text style={styles.techLine}>{project.tech}</Text>
        </View>
    );
}

function ResumeHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.name}>Shivam Jaiswal</Text>
            <Text style={styles.headline}>AI Student · Developer · Designer</Text>
            <View style={styles.contactRow}>
                <Text style={styles.contactText}>amnaimran404@gmail.com  ·  +92 333 0495370  ·  Lahore, Pakistan</Text>
            </View>
            <View style={styles.contactRow}>
                <Text style={styles.contactText}>
                    LinkedIn: amna-imran-4385052a7  ·  GitHub: amnaimran404  ·  amnaimran.dev
                </Text>
            </View>
        </View>
    );
}

export function ResumeDocument() {
    const pageOneProjects = projects.slice(0, 3);
    const pageTwoProjects = projects.slice(3);

    return (
        <Document title="Shivam Jaiswal — Resume" author="Shivam Jaiswal">
            <Page size="A4" style={styles.page}>
                <ResumeHeader />

                <View style={styles.columns}>
                    <View style={styles.leftCol}>
                        <Section title="Education">
                            {education.map((item) => (
                                <View key={item.school} style={styles.eduItem}>
                                    <Text style={styles.eduDegree}>{item.degree}</Text>
                                    <Text style={styles.eduSchool}>{item.school}</Text>
                                    <Text style={styles.eduDate}>{item.date}</Text>
                                </View>
                            ))}
                        </Section>

                        <Section title="Skills & Certifications">
                            {skills.map((group) => (
                                <View key={group.label} style={styles.skillGroup}>
                                    <Text style={styles.skillLabel}>{group.label}</Text>
                                    <Text style={styles.skillItems}>{group.items}</Text>
                                </View>
                            ))}
                            <Text style={styles.certSubheading}>Certifications</Text>
                            {certs.map((cert) => (
                                <Text key={cert} style={styles.certText}>• {cert}</Text>
                            ))}
                        </Section>
                    </View>

                    <View style={styles.rightCol}>
                        <Section title="Summary">
                            <Text style={styles.summary}>
                                Artificial Intelligence student and software engineer focused on machine learning, full-stack development, and human-centered design. I build intelligent products—from NLP health tools and computer-vision apps to immersive games and production-ready web experiences.
                            </Text>
                        </Section>

                        <Section title="Core Strengths">
                            {strengths.map((item) => (
                                <Text key={item} style={styles.bullet}>• {item}</Text>
                            ))}
                        </Section>

                        <Section title="Selected Projects">
                            {pageOneProjects.map((project) => (
                                <ProjectItem key={project.title} project={project} />
                            ))}
                        </Section>
                    </View>
                </View>
            </Page>

            <Page size="A4" style={styles.page}>
                <Text style={styles.pageTwoLabel}>Selected Projects — Continued</Text>
                {pageTwoProjects.map((project) => (
                    <ProjectItem key={project.title} project={project} />
                ))}
            </Page>
        </Document>
    );
}
