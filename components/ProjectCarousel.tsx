"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface CarouselItem {
    id: number;
    title: string;
    category: string;
}

interface ProjectCarouselProps {
    items: CarouselItem[];
}

export function ProjectCarousel({ items }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        if (!items || items.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, items]);

    if (!items || items.length === 0) {
        return (
            <div className="w-full h-[60vh] md:h-[50vh] rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20">
                No items to display
            </div>
        );
    }

    return (
        <div
            className="relative w-full h-[45vh] md:h-[50vh] overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Gradient Animation (Optional subtle shift) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col justify-end p-8 md:p-12"
                >
                    {/* Number Indicator big in background */}
                    <div className="absolute top-4 right-6 text-[120px] md:text-[200px] font-bold text-white/[0.02] leading-none select-none pointer-events-none font-mono">
                        0{items[currentIndex].id}
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="h-px w-8 bg-white/40" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                                {items[currentIndex].category}
                            </span>
                        </div>

                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {items[currentIndex].title}
                        </h3>

                        <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group/btn w-fit">
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex gap-2 z-20">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
