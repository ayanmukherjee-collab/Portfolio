"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useRef } from "react";

// Type for lab items
interface Lab {
    id: number;
    title: string;
    category: string;
    href: string;
    desc: string;
    image?: string;
    customThumbnail?: string;
}

// Animated terminal component - typing animation on hover
function TerminalAnimation({ isHovered }: { isHovered: boolean }) {
    return (
        <div className="absolute inset-0 bg-[#0c0c0c] flex flex-col overflow-hidden font-mono">
            {/* Terminal Header */}
            <div className="h-8 bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/60" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/60" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]/60" />
                <span className="text-white/20 text-[11px] ml-2 font-medium tracking-wide">zsh</span>
            </div>

            {/* Terminal Content - Top Left */}
            <div className="flex-1 px-6 py-10 flex flex-col justify-start">
                <div className="space-y-3">
                    {/* Command Line */}
                    <div
                        className="flex items-start gap-2 text-sm transition-all duration-300"
                        style={{
                            opacity: isHovered ? 1 : 0.5,
                            transform: isHovered ? 'translateX(0)' : 'translateX(-8px)'
                        }}
                    >
                        <span className="text-emerald-400 font-semibold">$</span>
                        <div className="flex flex-wrap gap-x-1">
                            <span className="text-cyan-400 font-medium">curl</span>
                            <span className="text-white/50">-OJ</span>
                            <span className="text-amber-400/90 break-all">&quot;cli-ai.vercel.app/api/ask?q=hello&quot;</span>
                        </div>
                    </div>

                    {/* Progress */}
                    <div
                        className="text-white/40 text-xs pl-5 transition-all duration-300"
                        style={{
                            opacity: isHovered ? 0.8 : 0.3,
                            transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
                            transitionDelay: '0.1s'
                        }}
                    >
                        ▓▓▓▓▓▓▓▓▓▓ 100%
                    </div>

                    {/* Result */}
                    <div
                        className="flex items-center gap-2 text-sm pl-5 transition-all duration-300"
                        style={{
                            opacity: isHovered ? 1 : 0.4,
                            transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
                            transitionDelay: '0.2s'
                        }}
                    >
                        <span className="text-emerald-400">✓</span>
                        <span className="text-white/80 font-medium">hello.py</span>
                        <span className="text-white/30 text-xs">saved</span>
                    </div>

                    {/* New prompt with cursor */}
                    <div
                        className="flex items-center gap-2 text-sm transition-all duration-300"
                        style={{
                            opacity: isHovered ? 1 : 0.4,
                            transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
                            transitionDelay: '0.3s'
                        }}
                    >
                        <span className="text-emerald-400 font-semibold">$</span>
                        <span
                            className="text-emerald-400 font-medium"
                            style={{
                                animation: isHovered ? 'cursorBlink 1s step-end infinite' : 'none',
                                animationDelay: '0.4s'
                            }}
                        >▋</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Steganography animation - torchlight reveal effect
function SteganographyAnimation({ isHovered }: { isHovered: boolean }) {
    const gridSize = 24;
    const revealRadius = 8;
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    // Hidden pixels scattered across the entire grid
    const hiddenPixels = new Set([
        // Top area
        3, 8, 14, 19, 22,
        27, 35, 42,
        51, 58, 66,

        // Upper middle
        76, 82, 89, 94,
        103, 111, 118,
        127, 134, 141, 147,
        152, 159, 166, 172,

        // Center area
        181, 188, 195, 202, 209,
        217, 224, 231, 238,
        243, 251, 258, 265, 271,
        280, 287, 294, 301,

        // Lower middle
        312, 319, 326, 333, 340,
        351, 358, 365, 372,
        384, 391, 398, 405,
        413, 420, 427, 434, 441,

        // Bottom area
        456, 463, 470, 477,
        489, 496, 503, 510, 517,
        532, 539, 546, 553,
        561, 568, 575,
    ]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * gridSize;
        const y = ((e.clientY - rect.top) / rect.height) * gridSize;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: -100, y: -100 });
    };

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 bg-[#0c0c0c] overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Pixel Grid */}
            <div
                className="grid gap-[2px] w-full h-full p-4"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                }}
            >
                {Array.from({ length: gridSize * gridSize }).map((_, i) => {
                    const isHidden = hiddenPixels.has(i);
                    const row = Math.floor(i / gridSize);
                    const col = i % gridSize;

                    const distance = Math.sqrt(
                        Math.pow(col - mousePos.x, 2) + Math.pow(row - mousePos.y, 2)
                    );
                    const isInRadius = distance < revealRadius;
                    const isMouseInside = mousePos.x >= 0;
                    const isRevealed = isMouseInside && isHidden && isInRadius;

                    const brightness = isInRadius
                        ? Math.max(0, 1 - (distance / revealRadius) * 0.5)
                        : 0;

                    return (
                        <div
                            key={i}
                            className="rounded-[1px] transition-all duration-150"
                            style={{
                                backgroundColor: isRevealed
                                    ? `rgba(255,255,255,${0.9 * brightness})`
                                    : isMouseInside && isInRadius
                                        ? `rgba(255,255,255,${0.15 * brightness})`
                                        : 'rgba(255,255,255,0.04)',
                                boxShadow: isRevealed
                                    ? `0 0 ${12 * brightness}px rgba(255, 255, 255, ${0.6 * brightness})`
                                    : 'none',
                            }}
                        />
                    );
                })}
            </div>

            {/* Torchlight glow */}
            {mousePos.x >= 0 && (
                <div
                    className="absolute pointer-events-none transition-opacity duration-300"
                    style={{
                        left: `${(mousePos.x / gridSize) * 100}%`,
                        top: `${(mousePos.y / gridSize) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                        opacity: 1
                    }}
                />
            )}

            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 20%, rgba(12, 12, 12, 0.6) 60%, rgba(12, 12, 12, 0.95) 100%)'
                }}
            />

            {/* Edge blur */}
            <div className="absolute inset-0 pointer-events-none" style={{
                boxShadow: 'inset 0 0 80px 40px rgba(12, 12, 12, 0.7)'
            }} />
        </div>
    );
}

// Lab card component with hover state
function LabCard({ lab }: { lab: Lab }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={lab.href}
            className="group relative aspect-video rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.06] transition-all duration-500 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Custom animated thumbnail for CLI-AI */}
            {lab.customThumbnail === "terminal" && (
                <TerminalAnimation isHovered={isHovered} />
            )}

            {/* Custom animated thumbnail for Stenography */}
            {lab.customThumbnail === "steganography" && (
                <SteganographyAnimation isHovered={isHovered} />
            )}

            {/* Regular image thumbnail */}
            {lab.image && !lab.customThumbnail && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={lab.image}
                        alt={lab.title}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    />
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end z-10 pointer-events-none">
                <span className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">{lab.category}</span>
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform">{lab.title}</h2>
                {lab.desc && <p className="text-white/60 line-clamp-2 max-w-md">{lab.desc}</p>}
            </div>
        </Link>
    );
}

const allLabs = [
    { id: 1, title: "Stenography", category: "Cryptography • Security", href: "/labs/stenography", customThumbnail: "steganography", desc: "Cryptographic LSB embedding tool for hiding data within image pixels." },
    { id: 2, title: "CLI-AI", category: "API Design • DevX", href: "/labs/cli-ai", customThumbnail: "terminal", desc: "Zero-setup AI code generator. One curl command, one file." },
    { id: 3, title: "Fluid Simulation", category: "WebGL • GLSL", href: "/labs/fluid", desc: "Real-time Navier-Stokes fluid simulation running on the GPU." },
    { id: 4, title: "Raymarching Engine", category: "Three.js • Physics", href: "/labs/raymarching", desc: "Volumetric rendering engine using signed distance fields." },
    { id: 5, title: "Generative Audio", category: "WebAudio • Canvas", href: "/labs/audio", desc: "Procedural sound generation visualized in real-time." },
    { id: 6, title: "Particle System", category: "React Three Fiber", href: "/labs/particles", desc: "High-performance particle system with interactive force fields." },
    { id: 7, title: "Neural Style Transfer", category: "TensorFlow.js", href: "/labs/neural", desc: "In-browser machine learning for artistic style transfer." },
    { id: 8, title: "Physics Playground", category: "Matter.js", href: "/labs/physics", desc: "2D rigid body physics engine with constraint visualizers." },
];

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
                        <LabCard key={lab.id} lab={lab} />
                    ))}
                </div>
            </div>
        </main>
    );
}
