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
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: { y: 150, opacity: 0, transition: { duration: 0.2 } },
                        visible: { y: 0, opacity: 0.8, transition: { duration: 1, ease: "easeOut" } }
                    }}
                    className={twMerge(
                        "absolute top-[5.9rem] lg:top-[7rem] z-0",
                        "text-[60px] md:text-[100px] lg:text-[150px] font-bold text-white leading-none tracking-tighter",
                        "select-none pointer-events-none",
                        "left-1/2 -translate-x-1/2 w-full text-center",
                        "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    )}
                >
                    {title}
                </motion.h2>

                <div className={twMerge(
                    "relative z-10 w-full max-w-[1000px] min-h-[50vh] md:min-h-[70vh] h-auto mt-32 md:mt-32 lg:mt-56",
                    "flex flex-col",
                    "rounded-[24px] lg:rounded-[32px] overflow-hidden",
                    "bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-black/60",
                    "backdrop-blur-2xl",
                    "border border-white/[0.08]",
                    "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] inset-0 ring-1 ring-inset ring-white/10",
                    "transition-all duration-700 ease-out",
                    "group"
                )}>

                    <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />


                    <div className="relative z-10 flex flex-col h-full p-4 md:p-6 lg:p-10">
                        {label && (
                            <div className="flex-shrink-0 mb-6 lg:mb-8">
                                <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-3 text-center lg:text-left">
                                    {label}
                                </p>
                            </div>
                        )}


                        <div className="flex-grow h-full w-full">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
