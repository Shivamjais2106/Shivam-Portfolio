"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowLeft, Github, ExternalLink, Calendar,
    User, Globe, Rocket, Sparkles, Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectDetailClient({ slug }: { slug: string }) {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return null;

    return (
        <main className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
            <Navbar />

            <section className="relative h-screen flex flex-col justify-end pb-20 pt-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 dark:opacity-40"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/70 to-white dark:from-transparent dark:via-[#020617]/80 dark:to-[#020617] backdrop-blur-[4px] dark:backdrop-blur-none" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-neonPurple mb-8 hover:gap-4 transition-all">
                            <ArrowLeft size={16} /> Back to Works
                        </Link>
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                            {project.title.split(" ").map((word, i) => (
                                <span key={i} className={i % 2 === 1 ? "text-transparent stroke-text" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h1>
                        <div className="flex flex-wrap gap-4 items-center">
                            {project.tech.map((t) => (
                                <span key={t} className="px-6 py-2 rounded-full border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest bg-white/50 dark:bg-white/5 backdrop-blur-xl">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <style jsx>{`
                    .stroke-text {
                        -webkit-text-stroke: 1px var(--foreground);
                        opacity: 0.3;
                    }
                `}</style>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-start">
                        <div className="lg:w-1/3 space-y-16">
                            <div className="space-y-8">
                                <h3 className="text-xs font-black tracking-[0.5em] uppercase text-neonPurple">Specifications</h3>
                                <div className="space-y-6">
                                    {[
                                        { label: "Timeline", value: project.stats.duration, icon: Calendar },
                                        { label: "Lead Role", value: project.stats.role, icon: User },
                                        { label: "Environment", value: project.stats.platform, icon: Globe },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center gap-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center border border-slate-100 dark:border-white/10 group-hover:bg-neonPurple group-hover:text-white transition-all">
                                                <stat.icon size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                                                <p className="font-bold text-lg">{stat.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                {project.liveUrl ? (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-5 rounded-[2rem] bg-neonPurple text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all"
                                    >
                                        <ExternalLink size={20} /> Live Operation
                                    </a>
                                ) : (
                                    <p className="text-xs text-slate-400 uppercase tracking-widest text-center">Live demo coming soon</p>
                                )}
                                {project.githubUrl ? (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-5 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                                    >
                                        <Github size={20} /> Repository
                                    </a>
                                ) : (
                                    <p className="text-xs text-slate-400 uppercase tracking-widest text-center">Repository private or unavailable</p>
                                )}
                            </div>
                        </div>

                        <div className="lg:w-2/3 space-y-20">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase">
                                    Architectural <br /> <span className="text-neonPurple">Vision</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-slate-500 dark:text-white/60 leading-relaxed font-medium">
                                    {project.longDesc}
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group border border-slate-200 dark:border-white/10"
                            >
                                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 1024px) 100vw, 66vw" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <div className="absolute top-10 right-10 p-6 rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/20">
                                    <Sparkles className="text-white" />
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="text-2xl font-bold flex items-center gap-3">
                                        <Rocket className="text-neonPurple" size={24} /> The Goal
                                    </h4>
                                    <p className="text-slate-500 dark:text-white/40 leading-relaxed">{project.goal}</p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-2xl font-bold flex items-center gap-3">
                                        <Layers className="text-neonBlue" size={24} /> The Result
                                    </h4>
                                    <p className="text-slate-500 dark:text-white/40 leading-relaxed">{project.result}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
