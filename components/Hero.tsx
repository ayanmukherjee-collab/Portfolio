"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram, Download } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="identity"
            className="relative z-10 w-full aspect-square md:aspect-auto md:h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[2.5rem] md:rounded-b-[8rem] bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]"
        >
            {/* Vignette Layer */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-70"
                style={{
                    background: 'radial-gradient(circle, transparent 0%, black 100%)'
                }}
            />

            {/* Text Layer */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <h1 className="text-[22vw] md:text-[14vw] font-bold text-black tracking-widest leading-none uppercase opacity-90">
                    Ayan
                </h1>
            </div>

            {/* Foreground Photo Layer */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center w-full h-full z-20 pointer-events-none">
                <Image
                    src="/ayan.png"
                    alt="Ayan"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-bottom pointer-events-none"
                />
            </div>

            {/* Desktop — Left Side Description */}
            <div className="absolute left-[22%] lg:left-[27%] top-[62%] z-30 max-w-[280px] hidden md:block">
                <p className="text-sm text-black/60 font-medium leading-relaxed tracking-wide">
                    AI Systems Builder &amp; Full-Stack Developer — crafting intelligent tools, structured memory architectures, and immersive web experiences.
                </p>
            </div>

            {/* Desktop — Right Side Resume + Socials */}
            <div className="absolute right-[22%] lg:right-[29%] top-[62%] z-30 hidden md:flex flex-col items-end gap-5">
                <a
                    href="/ayan-resume.pdf"
                    download
                    className="text-sm text-black/60 font-semibold tracking-wide hover:text-black transition-colors duration-300 flex items-center gap-2.5"
                >
                    <Download size={16} strokeWidth={2} />
                    Download Resume
                </a>
                <div className="flex items-center gap-4">
                    {[
                        { icon: Github, href: "https://github.com/ayanmukherjee-collab", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/ayan-vfx", label: "LinkedIn" },
                        { icon: Twitter, href: "https://x.com/simply_ayann", label: "Twitter" },
                        { icon: Instagram, href: "https://www.instagram.com/simply.ayannn", label: "Instagram" },
                    ].map((item) => (
                        <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors duration-300">
                            <item.icon size={18} strokeWidth={2} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile — Bottom Strip */}
            <div className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center gap-3 px-6 pb-6 pt-8 md:hidden"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
            >
                <p className="text-[10px] text-white/80 font-medium leading-relaxed tracking-wide text-center max-w-[300px]">
                    AI Systems Builder &amp; Full-Stack Developer — crafting intelligent tools, structured memory architectures, and immersive web experiences.
                </p>
                <div className="flex items-center gap-5 mt-1">
                    <a
                        href="/ayan-resume.pdf"
                        download
                        className="text-[10px] text-white/80 font-semibold tracking-wide hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                    >
                        <Download size={12} strokeWidth={2} />
                        Resume
                    </a>
                    <span className="w-px h-3 bg-white/30" />
                    {[
                        { icon: Github, href: "https://github.com/ayanmukherjee-collab", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/ayan-vfx", label: "LinkedIn" },
                        { icon: Twitter, href: "https://x.com/simply_ayann", label: "Twitter" },
                        { icon: Instagram, href: "https://www.instagram.com/simply.ayannn", label: "Instagram" },
                    ].map((item) => (
                        <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
                            <item.icon size={14} strokeWidth={2} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
