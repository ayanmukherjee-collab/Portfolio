"use client";

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface GlassSectionProps {
    label: string;
    title: string | ReactNode;
    children?: ReactNode;
    className?: string;
    id?: string;
}

export function GlassSection({ label, title, children, className, id }: GlassSectionProps) {
    return (
        <section
            id={id}
            className={twMerge(
                "min-h-screen w-full flex items-center justify-center py-4 lg:py-8 px-4",
                "snap-center",
                className
            )}
        >
            <div className="relative w-full max-w-[1400px] flex justify-center">
                {/* Background Title - Positioned behind the glass card */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: { y: 150, opacity: 0, transition: { duration: 0.2 } },
                        visible: { y: 0, opacity: 0.8, transition: { duration: 1, ease: "easeOut" } }
                    }}
                    className={twMerge(
                        "absolute top-[5.9rem] lg:top-[7rem] z-0", // Adjusted top for mobile to sit half behind card
                        "text-[60px] md:text-[100px] lg:text-[150px] font-bold text-white leading-none tracking-tighter", // Responsive text size
                        "select-none pointer-events-none",
                        "left-1/2 -translate-x-1/2 w-full text-center",
                        "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    )}
                >
                    {title}
                </motion.h2>

                <div className={twMerge(
                    "relative z-10 w-full max-w-[1000px] min-h-[50vh] md:min-h-[70vh] h-auto mt-32 md:mt-32 lg:mt-56", // Adjusted margins and height constraint
                    "flex flex-col",
                    "rounded-[24px] lg:rounded-[32px] overflow-hidden",
                    // Gradient: Shine from top (white/10) -> Shadow at bottom (black/40)
                    "bg-gradient-to-b from-white/10 via-white/5 to-black/40",
                    "backdrop-blur-[10px]",
                    "border border-white/[0.15]",
                    "shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
                    "transition-all duration-700 ease-out",
                    "group"
                )}>
                    {/* Top Edge Shine */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    {/* Inner Content */}
                    <div className="flex flex-col h-full p-4 md:p-6 lg:p-10"> {/* Responsive padding */}
                        {/* Header Group - Only render if label exists */}
                        {label && (
                            <div className="flex-shrink-0 mb-6 lg:mb-8">
                                <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-3 text-center lg:text-left">
                                    {label}
                                </p>
                            </div>
                        )}

                        {/* Body */}
                        <div className="flex-grow h-full w-full">
                            {/* Removed overflow-y-auto constraint here to allow grid to control itself, or keep it but ensure full height */}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
