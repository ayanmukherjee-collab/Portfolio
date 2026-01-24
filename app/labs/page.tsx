"use client";

const allLabs = [
    { id: 1, title: "Stenography", category: "Cryptography • Security", href: "/labs/stenography", image: "https://i.pinimg.com/originals/7e/f0/01/7ef001bcd5e84b508d8c8ce33e3015c5.gif", desc: "Cryptographic LSB embedding tool for hiding data within image pixels." },
    { id: 2, title: "Fluid Simulation", category: "WebGL • GLSL", href: "/labs/fluid", desc: "Real-time Navier-Stokes fluid simulation running on the GPU." },
    { id: 3, title: "Raymarching Engine", category: "Three.js • Physics", href: "/labs/raymarching", desc: "Volumetric rendering engine using signed distance fields." },
    { id: 4, title: "Generative Audio", category: "WebAudio • Canvas", href: "/labs/audio", desc: "Procedural sound generation visualized in real-time." },
    { id: 5, title: "Particle System", category: "React Three Fiber", href: "/labs/particles", desc: "High-performance particle system with interactive force fields." },
    { id: 6, title: "Neural Style Transfer", category: "TensorFlow.js", href: "/labs/neural", desc: "In-browser machine learning for artistic style transfer." },
    { id: 7, title: "Physics Playground", category: "Matter.js", href: "/labs/physics", desc: "2D rigid body physics engine with constraint visualizers." },
];

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LabsPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0d] flex flex-col items-center py-24 px-4 relative">
            <Link href="/" className="fixed bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-6 md:left-6 z-50 flex items-center gap-2 text-white/40 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <ArrowLeft size={16} />
                <span className="text-sm font-medium uppercase tracking-wider">Back</span>
            </Link>

            <div className="w-full max-w-[1400px]">
                <header className="mb-24 text-center mt-[30vh] md:mt-0">
                    <span className="text-white/40 font-mono uppercase tracking-widest text-sm mb-4 block">02 / R&D</span>
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Labs</h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
                        Experimental sketches, visual studies, and technical proof-of-concepts.
                        A playground for ideas that don't fit into the commercial constraints.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allLabs.map((lab) => (
                        <Link
                            href={lab.href}
                            key={lab.id}
                            className="group relative aspect-video rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.06] transition-all duration-500 cursor-pointer"
                        >
                            {lab.image && (
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={lab.image}
                                        alt={lab.title}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end z-10">
                                <span className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">{lab.category}</span>
                                <h2 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">{lab.title}</h2>
                                {lab.desc && <p className="text-white/60 line-clamp-2 max-w-md">{lab.desc}</p>}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
