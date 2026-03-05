"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface CarouselItem {
    id: number;
    title: string;
    category: string;
    href?: string;
    image?: string;
    customThumbnail?: string;
}


export function SteganographyCarouselAnimation({ isPaused }: { isPaused: boolean }) {
    const gridSize = 24;
    const revealRadius = 8;
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    const hiddenPixels = new Set([
        3, 8, 14, 19, 22,
        27, 35, 42,
        51, 58, 66,
        76, 82, 89, 94,
        103, 111, 118,
        127, 134, 141, 147,
        152, 159, 166, 172,
        181, 188, 195, 202, 209,
        217, 224, 231, 238,
        243, 251, 258, 265, 271,
        280, 287, 294, 301,
        312, 319, 326, 333, 340,
        351, 358, 365, 372,
        384, 391, 398, 405,
        413, 420, 427, 434, 441,
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
                    const isRevealed = isPaused && isHidden && isInRadius;


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
                                    : isPaused && isInRadius
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


            {isPaused && (
                <div
                    className="absolute pointer-events-none transition-opacity duration-300"
                    style={{
                        left: `${(mousePos.x / gridSize) * 100}%`,
                        top: `${(mousePos.y / gridSize) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                        opacity: mousePos.x > 0 ? 1 : 0
                    }}
                />
            )}


            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 20%, rgba(12, 12, 12, 0.6) 60%, rgba(12, 12, 12, 0.95) 100%)'
                }}
            />


            <div className="absolute inset-0 pointer-events-none" style={{
                boxShadow: 'inset 0 0 80px 40px rgba(12, 12, 12, 0.7)'
            }} />
        </div>
    );
}


export function TerminalCarouselAnimation({ isPaused }: { isPaused: boolean }) {
    return (
        <div className="absolute inset-0 bg-[#0c0c0c] flex flex-col font-mono">

            <div className="h-8 bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/60" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/60" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]/60" />
                <span className="text-white/20 text-[11px] ml-2 font-medium tracking-wide">zsh</span>
            </div>


            <div className="flex-1 px-6 py-6 flex flex-col justify-start">
                <div className="space-y-3 text-sm">
                    <div
                        className="flex items-start gap-2 transition-all duration-300"
                        style={{
                            opacity: isPaused ? 1 : 0.5,
                            transform: isPaused ? 'translateX(0)' : 'translateX(-8px)'
                        }}
                    >
                        <span className="text-emerald-400 font-semibold">$</span>
                        <div className="flex flex-wrap gap-x-1">
                            <span className="text-cyan-400 font-medium">curl</span>
                            <span className="text-white/50">-OJ</span>
                            <span className="text-amber-400/90">&quot;cli-ai.vercel.app/api/ask?q=hello&quot;</span>
                        </div>
                    </div>
                    <div
                        className="text-white/40 text-xs pl-5 transition-all duration-300"
                        style={{
                            opacity: isPaused ? 0.8 : 0.3,
                            transform: isPaused ? 'translateX(0)' : 'translateX(-8px)',
                            transitionDelay: '0.1s'
                        }}
                    >
                        ▓▓▓▓▓▓▓▓▓▓ 100%
                    </div>
                    <div
                        className="flex items-center gap-2 pl-5 transition-all duration-300"
                        style={{
                            opacity: isPaused ? 1 : 0.4,
                            transform: isPaused ? 'translateX(0)' : 'translateX(-8px)',
                            transitionDelay: '0.2s'
                        }}
                    >
                        <span className="text-emerald-400">✓</span>
                        <span className="text-white/80 font-medium">hello.py</span>
                        <span className="text-white/30 text-xs">saved</span>
                    </div>
                    <div
                        className="flex items-center gap-2 transition-all duration-300"
                        style={{
                            opacity: isPaused ? 1 : 0.4,
                            transform: isPaused ? 'translateX(0)' : 'translateX(-8px)',
                            transitionDelay: '0.3s'
                        }}
                    >
                        <span className="text-emerald-400 font-semibold">$</span>
                        <span
                            className="text-emerald-400"
                            style={{ animation: isPaused ? 'cursorBlink 1s step-end infinite' : 'none' }}
                        >▋</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ProjectCarouselProps {
    items: CarouselItem[];
}

export function ProjectCarousel({ items }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [manualPause, setManualPause] = useState(false);
    const manualPauseTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isPaused || manualPause) return;

        if (!items || items.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, manualPause, items]);

    const triggerManualPause = () => {
        setManualPause(true);
        if (manualPauseTimeout.current) {
            clearTimeout(manualPauseTimeout.current);
        }
        manualPauseTimeout.current = setTimeout(() => {
            setManualPause(false);
        }, 10000);
    };

    const nextSlide = () => {
        triggerManualPause();
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        triggerManualPause();
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    if (!items || items.length === 0) {
        return (
            <div className="w-full h-[60vh] md:h-[50vh] rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20">
                No items to display
            </div>
        );
    }

    const currentItem = items[currentIndex];

    return (
        <motion.div
            className="relative w-full h-[45vh] md:h-[50vh] overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 group touch-pan-y"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -100) {
                    nextSlide();
                } else if (swipe > 10000 || offset.x > 100) {
                    prevSlide();
                }
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
            >
                <ChevronRight size={20} />
            </button>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 select-none"
                    onPointerDown={(e) => e.stopPropagation()}
                >

                    {currentItem.customThumbnail === "steganography" && (
                        <SteganographyCarouselAnimation isPaused={isPaused} />
                    )}
                    {currentItem.customThumbnail === "terminal" && (
                        <TerminalCarouselAnimation isPaused={isPaused} />
                    )}


                    {currentItem.image && !currentItem.customThumbnail && (
                        <div className="absolute inset-0 z-0">
                            <img
                                src={items[currentIndex].image}
                                alt={items[currentIndex].title}
                                className="w-full h-full object-cover opacity-60 scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>
                    )}

                    <div className="absolute top-4 right-6 text-[120px] md:text-[200px] font-bold text-white/[0.02] leading-none select-none pointer-events-none font-mono">
                        0{items[currentIndex].id}
                    </div>

                    <div className="relative z-10 pointer-events-none">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="h-px w-8 bg-white/40" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                                {items[currentIndex].category}
                            </span>
                        </div>

                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 pointer-events-auto">
                            {items[currentIndex].title}
                        </h3>

                        {items[currentIndex].href ? (
                            <Link href={items[currentIndex].href} className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group/btn w-fit pointer-events-auto">
                                <span>VIEW CASE STUDY</span>
                                <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </Link>
                        ) : (
                            <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group/btn w-fit pointer-events-auto">
                                <span>VIEW CASE STUDY</span>
                                <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex gap-2 z-20">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </motion.div>
    );
}
