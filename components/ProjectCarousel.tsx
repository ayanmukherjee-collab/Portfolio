"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
            {/* Background Gradient Animation (Optional subtle shift) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            {/* Desktop Navigation Arrows */}
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
                    // Prevent click propagation for drag to work smoothly
                    onPointerDown={(e) => e.stopPropagation()}
                >
                    {/* Number Indicator big in background */}
                    <div className="absolute top-4 right-6 text-[120px] md:text-[200px] font-bold text-white/[0.02] leading-none select-none pointer-events-none font-mono">
                        0{items[currentIndex].id}
                    </div>

                    <div className="relative z-10 pointer-events-none"> {/* Make text unobstructive to drag if needed, but buttons need clicks. Actually, keeping pointer-events-auto is fine if drag is on parent. */}
                        <div className="flex items-center gap-3 mb-2">
                            <span className="h-px w-8 bg-white/40" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                                {items[currentIndex].category}
                            </span>
                        </div>

                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 pointer-events-auto">
                            {items[currentIndex].title}
                        </h3>

                        <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group/btn w-fit pointer-events-auto">
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
