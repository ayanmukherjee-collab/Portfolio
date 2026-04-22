"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ChevronDown } from "lucide-react";

interface SelectedWork {
    id: number;
    slug: string;
    title: string;
    category: string;
    href: string;
    kicker: string;
    hook: string;
    tech: string[];
    links: { demo: string; repo: string };
    details?: string[];
    videoPath: string;
}

export const selectedWorksData: SelectedWork[] = [
    {
        id: 1,
        slug: "supercharge",
        title: "Supercharge",
        category: "AI Web Application",
        href: "/works/supercharge",
        kicker: "BYOK Engine",
        hook: "Dynamic workflows via modular injection memory.",
        tech: ["React", "Vite", "PML", "AI APIs"],
        links: { demo: "https://ai-supercharge.vercel.app/", repo: "https://github.com/ayanmukherjee-collab/Supercharge" },
        details: [
            "Designed PML (Personal Model Language), a custom context encoding system that reduced prompt redundancy.",
            "Built a React + Vite web interface enabling dynamic AI workflows via user-provided API keys.",
            "Architected a scalable context abstraction layer that improved AI response consistency."
        ],
        videoPath: "/brain.webm",
    },
    {
        id: 2,
        slug: "cli-ai",
        title: "CLI-AI",
        category: "API Design • DevX",
        href: "/works/cli-ai",
        kicker: "Single-Curl Access",
        hook: "Unified workflows in one abstraction layer.",
        tech: ["Python", "API Design", "Bash"],
        links: { demo: "https://cli-ayan-ai.vercel.app/api/ask?q=hello+world&filename=hello.py", repo: "https://github.com/ayanmukherjee-collab/CLI-AI" },
        details: [
            "Built a terminal-based AI assistant that unified developer command workflows into a single abstraction layer.",
            "Designed a structured I/O pipeline to minimize response latency and enforce execution clarity.",
            "Architected a modular command system enabling extensible AI capabilities."
        ],
        videoPath: "/cli.webm",
    },
    {
        id: 3,
        slug: "steganography",
        title: "Steganography",
        category: "Cryptography • Security",
        href: "/works/stenography",
        kicker: "Visual Stealth",
        hook: "Embed encrypted data within image pixels.",
        tech: ["Cryptography", "Steganography", "Security"],
        links: { demo: "https://stenograph-ayan.vercel.app/", repo: "https://github.com/ayanmukherjee-collab/stenograph" },
        details: [
            "Developed an engine to seamlessly embed and extract encrypted data within image files.",
            "Implemented robust cryptographic algorithms to ensure data security and integrity.",
            "Created a user-friendly interface for visual stealth operations without degrading image quality."
        ],
        videoPath: "/chameleon.webm",
    }
];

// Homepage cards use this tightened copy to reinforce the site's main SEO themes.
const selectedWorksContent: SelectedWork[] = [
    {
        id: 1,
        slug: "supercharge",
        title: "Supercharge",
        category: "AI Web App",
        href: "/works/supercharge",
        kicker: "BYOK Engine",
        hook: "A full-stack AI web app with persistent memory.",
        tech: ["React", "Vite", "PML", "AI APIs"],
        links: { demo: "https://ai-supercharge.vercel.app/", repo: "https://github.com/ayanmukherjee-collab/Supercharge" },
        details: [
            "Designed PML (Personal Model Language), a custom context format that reduced prompt redundancy.",
            "Built a React + Vite AI web app that lets users bring their own API keys across providers.",
            "Architected a scalable context layer that improved response consistency across sessions."
        ],
        videoPath: "/brain.webm",
    },
    {
        id: 2,
        slug: "cli-ai",
        title: "CLI-AI",
        category: "Developer Tool",
        href: "/works/cli-ai",
        kicker: "Single-Curl Access",
        hook: "A terminal AI developer tool built around one clean workflow.",
        tech: ["Python", "API Design", "Bash"],
        links: { demo: "https://cli-ayan-ai.vercel.app/api/ask?q=hello+world&filename=hello.py", repo: "https://github.com/ayanmukherjee-collab/CLI-AI" },
        details: [
            "Built a terminal-based AI developer tool that brings code and command workflows into one interface.",
            "Designed a structured I/O pipeline to keep output fast, clear, and easy to execute.",
            "Architected a modular command system that made the tool straightforward to extend."
        ],
        videoPath: "/cli.webm",
    },
    {
        id: 3,
        slug: "steganography",
        title: "Steganography",
        category: "Cybersecurity Project",
        href: "/works/stenography",
        kicker: "Visual Stealth",
        hook: "A web security tool for hiding encrypted data inside images.",
        tech: ["Cryptography", "Steganography", "Security"],
        links: { demo: "https://stenograph-ayan.vercel.app/", repo: "https://github.com/ayanmukherjee-collab/stenograph" },
        details: [
            "Built an engine to embed and extract encrypted data inside image files.",
            "Implemented cryptographic logic to preserve payload security and data integrity.",
            "Created a clean interface for visual stealth workflows without noticeably degrading image quality."
        ],
        videoPath: "/chameleon.webm",
    }
];

const TOTAL = selectedWorksContent.length;
const mod = (n: number, m: number) => ((n % m) + m) % m;

function ManagedProjectVideo({
    src,
    shouldPlay,
    className,
}: {
    src: string;
    shouldPlay: boolean;
    className: string;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const tryPlay = () => {
            if (!shouldPlay) {
                video.pause();
                return;
            }

            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(() => {
                    // Autoplay can fail transiently while media is still becoming ready.
                });
            }
        };

        if (!shouldPlay) {
            video.pause();
            return;
        }

        if (video.src !== video.currentSrc && video.currentSrc !== src) {
            video.load();
        }

        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
            tryPlay();
            return;
        }

        video.addEventListener("loadeddata", tryPlay, { once: true });
        video.addEventListener("canplay", tryPlay, { once: true });
        tryPlay();

        return () => {
            video.removeEventListener("loadeddata", tryPlay);
            video.removeEventListener("canplay", tryPlay);
        };
    }, [shouldPlay, src]);

    return (
        <video
            ref={videoRef}
            autoPlay={shouldPlay}
            loop
            muted
            playsInline
            preload={shouldPlay ? "metadata" : "none"}
            src={shouldPlay ? src : undefined}
            className={className}
            aria-hidden="true"
        />
    );
}

export default function SelectedWorks() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [renderOffset, setRenderOffset] = useState(0);
    const [expandedWorkId, setExpandedWorkId] = useState<number | null>(null);
    const [isDesktop, setIsDesktop] = useState(true);
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    const activeIndexRef = useRef(0);
    const targetScrollRef = useRef(0);
    const currentScrollRef = useRef(0);
    const snapTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const requestRef = useRef<number>(0);
    const canvasAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    useEffect(() => {
        const area = canvasAreaRef.current;
        if (!area) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSectionVisible(entry?.isIntersecting ?? false);
            },
            { rootMargin: "200px 0px" }
        );

        observer.observe(area);
        return () => observer.disconnect();
    }, []);

    // Wheel Physics
    useEffect(() => {
        const area = canvasAreaRef.current;
        if (!area) return;

        const handleWheel = (e: WheelEvent) => {
            if (!isDesktop) return;

            const rect = area.getBoundingClientRect();
            const threshold = window.innerHeight * 0.45; // 45% of screen threshold to catch fast scrolls

            if (Math.abs(rect.top) < threshold) {
                const isScrollingDown = e.deltaY > 0;
                const isAtBottom = targetScrollRef.current >= selectedWorksContent.length - 1;
                const isAtTop = targetScrollRef.current <= 0;

                // Release condition: allow native scroll if pushed past boundaries
                if ((isScrollingDown && isAtBottom) || (!isScrollingDown && isAtTop)) {
                    return;
                }

                // Otherwise, perfectly trap into 2D mode!
                e.preventDefault();

                // If not perfectly aligned, magnetically glide it into place smoothly
                if (Math.abs(rect.top) > 5) {
                    window.scrollTo({ top: window.scrollY + rect.top, behavior: 'smooth' });
                }

                // Scrub cards!
                targetScrollRef.current += e.deltaY * 0.003;
                if (expandedWorkId !== null) setExpandedWorkId(null);
                targetScrollRef.current = Math.max(0, Math.min(selectedWorksContent.length - 1, targetScrollRef.current));

                if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
                snapTimeoutRef.current = setTimeout(() => {
                    targetScrollRef.current = Math.round(targetScrollRef.current);
                }, 200);
            }
        };

        area.addEventListener('wheel', handleWheel, { passive: false });
        // NOTE: No touchmove here because mobile uses pure horizontal swipe now!
        return () => area.removeEventListener('wheel', handleWheel);
    }, [isDesktop, expandedWorkId]);

    // Animation Loop
    useEffect(() => {
        const render = () => {
            const diff = targetScrollRef.current - currentScrollRef.current;
            currentScrollRef.current += diff * 0.15; // smooth momentum
            setRenderOffset(currentScrollRef.current);

            const newIndex = mod(Math.round(currentScrollRef.current), TOTAL);
            if (newIndex !== activeIndexRef.current) {
                activeIndexRef.current = newIndex;
                setActiveIndex(newIndex);
            }

            requestRef.current = requestAnimationFrame(render);
        };

        requestRef.current = requestAnimationFrame(render);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    // Mobile Touch Physics
    const touchStartXRef = useRef(0);
    const touchStartYRef = useRef(0);
    const isHorizontalSwipe = useRef<boolean | null>(null);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartXRef.current = e.touches[0].clientX;
        touchStartYRef.current = e.touches[0].clientY;
        isHorizontalSwipe.current = null;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (isDesktop) return;

        const deltaX = touchStartXRef.current - e.touches[0].clientX;
        const deltaY = touchStartYRef.current - e.touches[0].clientY;

        if (isHorizontalSwipe.current === null) {
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 5) {
                isHorizontalSwipe.current = true;
            } else if (Math.abs(deltaY) > 5) {
                isHorizontalSwipe.current = false;
            }
        }

        if (isHorizontalSwipe.current) {
            // Horizontal swipe! Trap sideways movement to scrub cards.
            if (e.cancelable) e.preventDefault();

            targetScrollRef.current += deltaX * 0.01;
            if (expandedWorkId !== null) setExpandedWorkId(null);

            touchStartXRef.current = e.touches[0].clientX; // update anchor

            if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
        }
    };

    const handleTouchEnd = () => {
        if (isDesktop) return;
        if (isHorizontalSwipe.current) {
            targetScrollRef.current = Math.round(targetScrollRef.current);
        }
    };

    const scrollToPanel = (idx: number) => {
        // On mobile (looping), find the shortest path to the target
        const currentRounded = Math.round(targetScrollRef.current);
        const currentMod = mod(currentRounded, TOTAL);
        let diff = idx - currentMod;
        if (diff > TOTAL / 2) diff -= TOTAL;
        if (diff < -TOTAL / 2) diff += TOTAL;
        targetScrollRef.current = currentRounded + diff;
        setExpandedWorkId(null);
    };

    return (
        <div
            ref={canvasAreaRef}
            className="w-full relative h-[100dvh]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
        >
            <div className="w-full h-full bg-[#0b0b0d] text-white flex flex-col lg:flex-row shadow-[0_-20px_50px_rgba(11,11,13,1)] z-10 border-t border-white/[0.05] overflow-hidden">
                {/* Left Navigation */}
                <nav className="w-full lg:w-[320px] lg:h-full z-30 flex flex-col justify-between py-5 px-5 pt-28 sm:py-6 sm:px-6 sm:pt-36 lg:py-24 lg:px-12 bg-[#0b0b0d]/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none border-none lg:border-r border-white/[0.05]">
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">02 / Portfolio</span>
                        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8 hidden lg:block">Selected Works</h2>
                    </div>

                    <ul className="flex flex-row lg:flex-col gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible pb-2 mt-2 lg:mt-0 lg:pb-0 scrollbar-hide no-scrollbar snap-x">
                        {selectedWorksContent.map((work, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <li key={work.id} className="snap-start shrink-0">
                                    <button
                                        onClick={() => scrollToPanel(idx)}
                                        className="flex flex-col items-start gap-1 group text-left outline-none"
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`text-xs font-mono transition-colors duration-200 ${isActive ? "text-[#7be7ff]" : "text-white/30 group-hover:text-white/60"}`}>
                                                0{idx + 1}
                                            </span>
                                            <span className={`h-px bg-[#7be7ff] transition-all duration-200 ease-out ${isActive ? "w-8 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-50"}`} />
                                        </div>
                                        <span className={`whitespace-nowrap text-[15px] sm:text-lg lg:text-xl font-bold tracking-tight transition-all duration-200 ${isActive ? "text-white translate-x-1 lg:translate-x-2" : "text-white/40 group-hover:text-white/70 group-hover:translate-x-1"}`}>
                                            {work.title}
                                        </span>
                                        <span className={`whitespace-nowrap text-[9px] lg:text-[10px] uppercase tracking-wider font-semibold transition-opacity duration-200 ${isActive ? "opacity-100 text-white/60 translate-x-1 lg:translate-x-2" : "opacity-0 text-white/40"}`}>
                                            {work.category}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Canvas Area */}
                <div
                    className="flex-1 relative w-full h-full"
                >
                    {selectedWorksContent.map((work, idx) => {
                        // Desktop uses activeIndex (discrete), Mobile uses renderOffset (continuous)
                        let offset = 0;
                        if (isDesktop) {
                            offset = idx - activeIndex;
                        } else {
                            offset = idx - mod(renderOffset, TOTAL);
                        }

                        // Circular wrapping
                        if (offset > TOTAL / 2) offset -= TOTAL;
                        if (offset < -TOTAL / 2) offset += TOTAL;

                        const isActive = isDesktop ? offset === 0 : Math.abs(offset) < 0.5;
                        const shouldLoadMedia = isSectionVisible && Math.abs(offset) <= 1;

                        // Desktop: vertical | Mobile: horizontal
                        let opacity: number;
                        let translate: string;
                        if (isDesktop) {
                            const state = offset === 0 ? 'active' : offset < 0 ? 'past' : 'future';
                            opacity = isActive ? 1 : 0;
                            translate = state === 'active' ? 'translateY(0)' : state === 'past' ? 'translateY(-15vh)' : 'translateY(15vh)';
                        } else {
                            opacity = isActive ? 1 : 0;
                            translate = `translateX(${offset * 110}%)`;
                        }

                        return (
                            <div
                                key={work.id}
                                className="absolute inset-0 px-4 pb-8 pt-32 sm:pb-12 sm:pt-40 lg:p-12 flex flex-col justify-end lg:justify-center items-center pointer-events-none"
                                style={{ zIndex: isActive ? 20 : 10 - Math.abs(offset) }}
                            >
                                <div
                                    data-card
                                    className={`relative overflow-visible mt-auto lg:mt-0 w-full max-w-[1100px] h-[48vh] sm:h-[55vh] lg:h-full max-h-[700px] rounded-[24px] lg:rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 lg:p-14 flex flex-col justify-end lg:justify-between ${isDesktop ? 'backdrop-blur-[24px] shadow-2xl shadow-black/50' : 'shadow-lg shadow-black/30'}`}
                                    style={{
                                        opacity,
                                        transform: translate,
                                        transition: isDesktop ? 'opacity 500ms ease-in-out, transform 500ms ease-in-out' : 'opacity 200ms ease-out',
                                        pointerEvents: isActive ? 'auto' : 'none',
                                        willChange: 'transform, opacity'
                                    }}
                                    role="region"
                                    aria-hidden={!isActive}
                                >
                                    <div
                                        className="absolute inset-0 z-[15] rounded-[24px] lg:rounded-[32px] pointer-events-none transition-opacity duration-500 ease-in-out"
                                        style={{
                                            opacity: expandedWorkId === work.id && isActive ? 1 : 0,
                                            background: 'radial-gradient(ellipse 75% 80% at 25% 55%, rgba(11,11,13,0.95) 0%, rgba(11,11,13,0.3) 50%, transparent 100%)',
                                        }}
                                        aria-hidden="true"
                                    />

                                    <div className="relative z-20 w-full lg:w-3/5 h-full flex flex-col justify-end lg:justify-center gap-5 lg:gap-8 mt-auto lg:mt-0">
                                        <div className="flex flex-col gap-3 lg:gap-4 pr-10 sm:pr-20 lg:pr-0">
                                            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-medium text-[#7be7ff] flex items-center gap-2 lg:gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#7be7ff] shadow-[0_0_10px_rgba(123,231,255,0.8)] block" /> {work.kicker}
                                            </span>
                                            <h1 className="text-[2.2rem] sm:text-5xl lg:text-[5.5rem] font-bold tracking-tighter text-white leading-[1.05] pb-1">
                                                {work.title}
                                            </h1>
                                            <p className="text-base sm:text-xl lg:text-2xl font-light text-white/75 leading-snug max-w-xl">
                                                &ldquo;{work.hook}&rdquo;
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 lg:gap-2.5 mt-1 lg:mt-2">
                                            {work.tech.map(t => (
                                                <span key={t} className="px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-[10px] lg:text-[11px] font-medium tracking-wide text-white/80">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div
                                            style={{
                                                opacity: isActive ? 1 : 0,
                                                transition: 'opacity 300ms ease-in-out 150ms',
                                                pointerEvents: isActive ? 'auto' : 'none',
                                            }}
                                            className="flex flex-wrap items-center gap-3 lg:gap-5 mt-4 lg:mt-10"
                                        >
                                            {work.links.demo && (
                                                <a href={work.links.demo} target="_blank" rel="noopener noreferrer" className="h-10 px-5 lg:h-12 lg:px-7 rounded-full bg-white text-black hover:bg-[#7be7ff] hover:scale-105 transition-all duration-300 text-xs lg:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                                    Live Demo <ExternalLink size={14} className="lg:w-4 lg:h-4" strokeWidth={2.5} />
                                                </a>
                                            )}
                                            <a href={work.links.repo} target="_blank" rel="noopener noreferrer" className="h-10 px-5 lg:h-12 lg:px-7 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-xs lg:text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
                                                GitHub <Github size={14} className="lg:w-4 lg:h-4" strokeWidth={2} />
                                            </a>
                                            {work.details && (
                                                <button
                                                    onClick={() => setExpandedWorkId(expandedWorkId === work.id ? null : work.id)}
                                                    className="ml-1 sm:ml-2 text-xs lg:text-sm font-semibold text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group/link outline-none"
                                                >
                                                    {expandedWorkId === work.id ? 'Show Less' : 'Read More'}
                                                    <ChevronDown
                                                        size={14}
                                                        className={`lg:w-4 lg:h-4 transition-transform duration-300 ${expandedWorkId === work.id ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        <div
                                            className="grid transition-all duration-500 ease-in-out"
                                            style={{
                                                gridTemplateRows: expandedWorkId === work.id && isActive ? "1fr" : "0fr",
                                                opacity: expandedWorkId === work.id && isActive ? 1 : 0,
                                                pointerEvents: isActive ? 'auto' : 'none',
                                            }}
                                        >
                                            <div className="overflow-hidden">
                                                <ul className="flex flex-col gap-3 mt-6 pl-4">
                                                    {work.details?.map((detail, dIdx) => (
                                                        <li key={dIdx} className="text-white/60 text-[15px] leading-relaxed relative">
                                                            <span className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-white/20" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Media Layers */}
                                    <div
                                        className="absolute pointer-events-none z-10 hidden lg:block"
                                        style={{
                                            top: work.slug === 'steganography' ? '-20%' : '-35%',
                                            right: work.slug === 'steganography' ? '-10%' : '-25%',
                                            width: work.slug === 'steganography' ? '68%' : '80%',
                                            height: work.slug === 'steganography' ? '155%' : '180%',
                                            transformOrigin: 'center right',
                                            opacity: isActive ? 1 : 0,
                                            transition: 'opacity 300ms ease-in-out',
                                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                                            maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                                        }}
                                    >
                                        {work.videoPath.endsWith('.webp') ? (
                                            <img
                                                src={work.videoPath}
                                                alt={`${work.title} animation`}
                                                className="w-full h-full object-contain pointer-events-none"
                                                aria-hidden="true"
                                                loading={isActive ? "eager" : "lazy"}
                                            />
                                        ) : (
                                            <ManagedProjectVideo
                                                src={work.videoPath}
                                                shouldPlay={shouldLoadMedia}
                                                className="w-full h-full object-contain pointer-events-none"
                                            />
                                        )}

                                        <div
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full pointer-events-none -z-10"
                                            style={{ background: 'radial-gradient(circle, rgba(123, 231, 255, 0.08) 0%, transparent 70%)' }}
                                        />
                                    </div>

                                    <div
                                        className={`absolute left-1/2 -top-[25vh] sm:-top-[30vh] pointer-events-none z-0 lg:hidden ${work.slug === 'steganography'
                                            ? 'w-[110vw] sm:w-[100vw] h-[40vh] sm:h-[45vh]'
                                            : 'w-[140vw] sm:w-[120vw] h-[45vh] sm:h-[50vh]'
                                            }`}
                                        style={{
                                            transform: 'translate3d(-50%,0,0)',
                                            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                        }}
                                    >
                                        {work.videoPath.endsWith('.webp') ? (
                                            <img
                                                src={work.videoPath}
                                                alt={`${work.title} animation`}
                                                className="w-full h-full object-contain pointer-events-none"
                                                aria-hidden="true"
                                                loading="eager"
                                            />
                                        ) : (
                                            <ManagedProjectVideo
                                                src={work.videoPath}
                                                shouldPlay={shouldLoadMedia}
                                                className="w-full h-full object-contain pointer-events-none"
                                            />
                                        )}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
