"use client";

import { GlassSection } from "@/components/GlassSection";

const allWorks = [
    { id: 1, title: "Project Interface 1", category: "Next.js • System Design", desc: "A comprehensive dashboard system designed for high-frequency data visualization." },
    { id: 2, title: "Project Interface 2", category: "WebGL • Experience", desc: "Immersive brand experience featuring real-time fluid simulations." },
    { id: 3, title: "Project Interface 3", category: "React • Dashboard", desc: "Analytics platform with customizable widgets and dark mode support." },
    { id: 4, title: "Mobile App Design", category: "Figma • UX/UI", desc: "End-to-end user experience design for a fintech mobile application." },
    { id: 5, title: "E-Commerce System", category: "Shopify • Liquid", desc: "Custom theme development for a luxury fashion brand." },
];

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// ... existing code ...

export default function WorksPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0d] flex flex-col items-center py-24 px-4 relative">
            <Link href="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white/40 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <ArrowLeft size={16} />
                <span className="text-sm font-medium uppercase tracking-wider">Back</span>
            </Link>

            <div className="w-full max-w-[1400px]">
                <header className="mb-24 text-center">
                    <span className="text-white/40 font-mono uppercase tracking-widest text-sm mb-4 block">01 / Portfolio</span>
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">All Works</h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
                        A collection of selected projects, experiments, and commercial work spanning web design, application development, and interactive experiences.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allWorks.map((work) => (
                        <div key={work.id} className="group relative aspect-video rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.06] transition-all duration-500 cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <span className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">{work.category}</span>
                                <h2 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">{work.title}</h2>
                                <p className="text-white/60 line-clamp-2 max-w-md">{work.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
