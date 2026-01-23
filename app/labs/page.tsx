"use client";

const allLabs = [
    { id: 1, title: "Fluid Simulation", category: "WebGL • GLSL" },
    { id: 2, title: "Raymarching Engine", category: "Three.js • Physics" },
    { id: 3, title: "Generative Audio", category: "WebAudio • Canvas" },
    { id: 4, title: "Particle System", category: "React Three Fiber" },
    { id: 5, title: "Neural Style Transfer", category: "TensorFlow.js" },
    { id: 6, title: "Physics Playground", category: "Matter.js" },
];

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LabsPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0d] flex flex-col items-center py-24 px-4 relative">
            <Link href="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white/40 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <ArrowLeft size={16} />
                <span className="text-sm font-medium uppercase tracking-wider">Back</span>
            </Link>

            <div className="w-full max-w-[1400px]">
                <header className="mb-24 text-center">
                    <span className="text-white/40 font-mono uppercase tracking-widest text-sm mb-4 block">02 / R&D</span>
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Labs</h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
                        Experimental sketches, visual studies, and technical proof-of-concepts.
                        A playground for ideas that don't fit into the commercial constraints.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {allLabs.map((lab) => (
                        <div key={lab.id} className="aspect-square rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">{lab.title}</h3>
                            <span className="text-xs font-mono text-white/40 uppercase">{lab.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
