"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, ExternalLink, ChevronDown } from "lucide-react";

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
    posterPath: string;
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
        posterPath: "/videos/supercharge-poster.png",
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
        posterPath: "/videos/cli-ai-poster.png",
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
        posterPath: "/videos/steganography-poster.png",
    }
];

export default function SelectedWorks() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const [expandedWorkId, setExpandedWorkId] = useState<number | null>(null);
    const [isDesktop, setIsDesktop] = useState(true);

    // Track outgoing card for mobile slide animation
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [swipeDir, setSwipeDir] = useState<'left' | 'right'>('left');
    const prevCleanupTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    // The tall outer wrapper acting as our scroll buffer
    const wrapperRef = useRef<HTMLDivElement>(null);
    // The sticky inner container identical to viewport size
    const stickyRef = useRef<HTMLDivElement>(null);

    const isAnimating = useRef(false);
    const unlockedAt = useRef<number>(0);

    // Ref mirrors so wheel handler doesn't need these in the dependency array
    const activeIndexRef = useRef(activeIndex);
    activeIndexRef.current = activeIndex;

    // Track global scroll direction so we know which end to start at on entry
    const scrollDir = useRef<'down' | 'up'>('down');
    useEffect(() => {
        let prevY = window.scrollY;
        const track = () => {
            if (window.scrollY > prevY) scrollDir.current = 'down';
            else if (window.scrollY < prevY) scrollDir.current = 'up';
            prevY = window.scrollY;
        };
        window.addEventListener('scroll', track, { passive: true });
        return () => window.removeEventListener('scroll', track);
    }, []);

    // ── 1. NATIVE STICKY ENTRY DETECTION ──
    // Because the inner container is `sticky top-0`, the browser natively halts its visual 
    // movement identically to a perfect lock, with zero JavaScript latency. 
    // We observe when it reaches perfect 100% viewport coverage to activate the internal wheel trap.
    useEffect(() => {
        if (!isDesktop) {
            if (isLocked) {
                setIsLocked(false);
                document.body.style.overflow = '';
            }
            return;
        }

        if (isLocked) return;
        if (!stickyRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.99) {
                    if (Date.now() - unlockedAt.current < 1000) return;

                    // Engage the wheel trap
                    document.body.style.overflow = 'hidden';

                    const startIdx = scrollDir.current === 'down' ? 0 : selectedWorksData.length - 1;
                    setActiveIndex(startIdx);
                    activeIndexRef.current = startIdx;

                    setIsLocked(true);

                    // Nudge the true scrollbar to the middle of our 150dvh buffer wrapper
                    // so momentum is safely caught without hovering directly on a trigger boundary.
                    if (wrapperRef.current) {
                        const targetTop = wrapperRef.current.offsetTop + (window.innerHeight * 0.25);
                        window.scrollTo({ top: targetTop, behavior: 'instant' });
                    }
                }
            },
            { threshold: 0.99 }
        );

        observer.observe(stickyRef.current);
        return () => observer.disconnect();
    }, [isLocked, isDesktop]);

    // ── 2. WHEEL/TOUCH INTERCEPTION WHILE LOCKED ──
    useEffect(() => {
        if (!isLocked) {
            document.body.style.overflow = '';
            return;
        }

        document.body.style.overflow = 'hidden';

        const COOLDOWN = 250; // Matches the CSS ease-in-out transition exactly
        const LAST = selectedWorksData.length - 1;

        const unlock = (direction: 'up' | 'down') => {
            unlockedAt.current = Date.now();
            isAnimating.current = false;
            setIsLocked(false);
            document.body.style.overflow = '';

            // Seamless eject: transport the scrollbar to exactly the edge of our 150dvh buffer.
            // When `overflow` is restored, the user's ongoing momentum perfectly exits the section.
            if (wrapperRef.current) {
                if (direction === 'down') {
                    const bottomEject = wrapperRef.current.offsetTop + wrapperRef.current.offsetHeight - window.innerHeight + 10;
                    window.scrollTo({ top: bottomEject, behavior: 'instant' });
                } else {
                    const topEject = wrapperRef.current.offsetTop - 10;
                    window.scrollTo({ top: topEject, behavior: 'instant' });
                }
            }
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isAnimating.current) return;
            if (Math.abs(e.deltaY) < 10) return; // Filter trackpad micro-ticks

            const goingDown = e.deltaY > 0;
            const idx = activeIndexRef.current;

            if (goingDown) {
                if (idx < LAST) {
                    isAnimating.current = true;
                    setActiveIndex(idx + 1);
                    setTimeout(() => { isAnimating.current = false; }, COOLDOWN);
                } else {
                    unlock('down');
                }
            } else {
                if (idx > 0) {
                    isAnimating.current = true;
                    setActiveIndex(idx - 1);
                    setTimeout(() => { isAnimating.current = false; }, COOLDOWN);
                } else {
                    unlock('up');
                }
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            if (isAnimating.current) return;

            const diff = touchStartY - e.touches[0].clientY;
            const idx = activeIndexRef.current;

            if (Math.abs(diff) > 40) {
                const goingDown = diff > 0;
                if (goingDown) {
                    if (idx < LAST) {
                        isAnimating.current = true;
                        setActiveIndex(idx + 1);
                        setTimeout(() => { isAnimating.current = false; }, COOLDOWN);
                    } else {
                        unlock('down');
                    }
                } else {
                    if (idx > 0) {
                        isAnimating.current = true;
                        setActiveIndex(idx - 1);
                        setTimeout(() => { isAnimating.current = false; }, COOLDOWN);
                    } else {
                        unlock('up');
                    }
                }
                touchStartY = e.touches[0].clientY;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isLocked]);

    const scrollToPanel = (idx: number) => {
        if (isAnimating.current || activeIndex === idx) return;
        if (!isLocked && isDesktop && wrapperRef.current) {
            wrapperRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        isAnimating.current = true;

        // Track outgoing card for mobile slide animation
        if (!isDesktop) {
            if (prevCleanupTimer.current) clearTimeout(prevCleanupTimer.current);
            setPrevIndex(activeIndex);
            setSwipeDir(idx > activeIndex ? 'left' : 'right');
            // Clean up the outgoing card after animation completes
            prevCleanupTimer.current = setTimeout(() => {
                setPrevIndex(null);
            }, 250);
        }

        setActiveIndex(idx);
        setExpandedWorkId(null);
        setTimeout(() => { isAnimating.current = false; }, 300);
    };

    // ── 3. MOBILE SWIPE INTERCEPTION ──
    // Zero-alloc, rAF-batched, cached-ref approach for 60fps on low-end GPUs.
    const canvasRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const isDragging = useRef(false);
    const swipeCommitted = useRef(false);
    const activeCardRef = useRef<HTMLElement | null>(null);
    const rafId = useRef(0);
    const lastDiff = useRef(0);

    const handleMobileTouchStart = (e: React.TouchEvent) => {
        if (isDesktop) return;
        touchStartX.current = e.touches[0].clientX;
        isDragging.current = true;
        swipeCommitted.current = false;
        lastDiff.current = 0;

        // Cache the active card ref once — no DOM queries during move
        const cards = canvasRef.current?.querySelectorAll<HTMLElement>('[data-card]');
        activeCardRef.current = cards ? cards[activeIndex] || null : null;

        if (activeCardRef.current) {
            activeCardRef.current.style.transition = 'none';
        }
    };

    const handleMobileTouchMove = (e: React.TouchEvent) => {
        if (isDesktop || !isDragging.current || swipeCommitted.current) return;

        const diff = touchStartX.current - e.touches[0].clientX;

        // Commit swipe mid-move at 30px — instant response
        if (Math.abs(diff) > 30) {
            swipeCommitted.current = true;
            isDragging.current = false;
            cancelAnimationFrame(rafId.current);

            if (activeCardRef.current) {
                activeCardRef.current.style.transition = 'opacity 180ms ease-out, transform 180ms ease-out';
            }

            if (diff > 0) {
                // Swipe Left -> Next item (Loop to first if at end)
                scrollToPanel(activeIndex === selectedWorksData.length - 1 ? 0 : activeIndex + 1);
            } else if (diff < 0) {
                // Swipe Right -> Prev item (Loop to last if at start)
                scrollToPanel(activeIndex === 0 ? selectedWorksData.length - 1 : activeIndex - 1);
            }

            activeCardRef.current = null;
            return;
        }

        // Batch DOM write into rAF — prevents layout thrash
        lastDiff.current = diff;
        cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(() => {
            if (activeCardRef.current) {
                activeCardRef.current.style.transform = `translate3d(${-lastDiff.current}px,0,0)`;
            }
        });
    };

    const handleMobileTouchEnd = () => {
        if (isDesktop) return;
        cancelAnimationFrame(rafId.current);

        if (!swipeCommitted.current && activeCardRef.current) {
            activeCardRef.current.style.transition = 'transform 120ms ease-out';
            activeCardRef.current.style.transform = '';
            activeCardRef.current.style.opacity = '';
        }

        isDragging.current = false;
        swipeCommitted.current = false;
        activeCardRef.current = null;
    };

    return (
        <div ref={wrapperRef} className="w-full relative h-[100dvh] lg:h-[150dvh]">
            <div
                ref={stickyRef}
                className="sticky top-0 w-full h-[100dvh] bg-[#0b0b0d] text-white flex flex-col lg:flex-row overflow-hidden"
                onTouchStart={handleMobileTouchStart}
                onTouchMove={handleMobileTouchMove}
                onTouchEnd={handleMobileTouchEnd}
            >
                {/* ── LEFT NAV ── sticky interface ── */}
                <nav className="w-full lg:w-[320px] lg:h-full z-50 flex flex-col justify-between py-5 px-5 pt-28 sm:py-6 sm:px-6 sm:pt-36 lg:py-24 lg:px-12 bg-[#0b0b0d]/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none border-none lg:border-r border-white/[0.05]">
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">02 / Portfolio</span>
                        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8 hidden lg:block">Selected Works</h2>
                    </div>

                    <ul
                        className="flex flex-row lg:flex-col gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible pb-2 mt-2 lg:mt-0 lg:pb-0 scrollbar-hide snap-x"
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                    >
                        {selectedWorksData.map((work, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <li key={work.id} className="snap-start shrink-0">
                                    <button
                                        onClick={() => scrollToPanel(idx)}
                                        className="flex flex-col items-start gap-1 group text-left outline-none"
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`text-xs font-mono transition-colors duration-200 ${isActive ? "text-[#7be7ff]" : "text-white/30 group-hover:text-white/60"
                                                    }`}
                                            >
                                                0{idx + 1}
                                            </span>
                                            <span
                                                className={`h-px bg-[#7be7ff] transition-all duration-200 ease-out ${isActive ? "w-8 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-50"
                                                    }`}
                                            />
                                        </div>
                                        <span
                                            className={`whitespace-nowrap text-[15px] sm:text-lg lg:text-xl font-bold tracking-tight transition-all duration-200 ${isActive ? "text-white translate-x-1 lg:translate-x-2" : "text-white/40 group-hover:text-white/70 group-hover:translate-x-1"
                                                }`}
                                        >
                                            {work.title}
                                        </span>
                                        <span
                                            className={`whitespace-nowrap text-[9px] lg:text-[10px] uppercase tracking-wider font-semibold transition-opacity duration-200 ${isActive ? "opacity-100 text-white/60 translate-x-1 lg:translate-x-2" : "opacity-0 text-white/40"
                                                }`}
                                        >
                                            {work.category}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>


                </nav>

                {/* ── RIGHT CANVAS ── absolute layer stage ── */}
                <div ref={canvasRef} className="flex-1 relative w-full h-full">
                    {selectedWorksData.map((work, idx) => {
                        // Identify state relative to active
                        const isActive = activeIndex === idx;
                        const isOutgoing = !isDesktop && prevIndex === idx;
                        const state =
                            isActive ? 'active' :
                                activeIndex > idx ? 'past' :
                                    'future';

                        // On mobile, only render the active card + the outgoing card (for slide anim)
                        if (!isDesktop && !isActive && !isOutgoing) {
                            return null;
                        }

                        let opacity: number;
                        let translate: string;

                        if (isDesktop) {
                            opacity = state === 'active' ? 1 : 0;
                            translate = state === 'active' ? 'translateY(0)' : state === 'past' ? 'translateY(-15vh)' : 'translateY(15vh)';
                        } else if (isOutgoing) {
                            // Outgoing card slides off-screen in the swipe direction
                            opacity = 0;
                            translate = swipeDir === 'left' ? 'translate3d(-60vw,0,0)' : 'translate3d(60vw,0,0)';
                        } else {
                            // Active card slides in from the opposite side
                            opacity = 1;
                            translate = 'translate3d(0,0,0)';
                        }

                        return (
                            <div
                                key={work.id}
                                className="absolute inset-0 px-4 pb-8 pt-32 sm:pb-12 sm:pt-40 lg:p-12 flex flex-col justify-end lg:justify-center items-center pointer-events-none"
                                style={{
                                    zIndex: state === 'active' ? 20 : 10,
                                }}
                            >
                                <div
                                    data-card
                                    className={`relative overflow-visible mt-auto lg:mt-0 w-full max-w-[1100px] h-[48vh] sm:h-[55vh] lg:h-full max-h-[700px] rounded-[24px] lg:rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 lg:p-14 flex flex-col justify-end lg:justify-between ${isDesktop ? 'backdrop-blur-[24px] shadow-2xl shadow-black/50' : 'shadow-lg shadow-black/30'}`}
                                    style={{
                                        opacity,
                                        transform: translate,
                                        transition: isDesktop ? 'opacity 300ms ease-in-out, transform 300ms ease-in-out' : 'opacity 180ms ease-out, transform 180ms ease-out',
                                        pointerEvents: state === 'active' ? 'auto' : 'none',
                                        willChange: 'transform, opacity'
                                    }}
                                    role="region"
                                    aria-hidden={state !== 'active'}
                                >
                                    {/* ── Content Layer ── */}
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
                                                opacity: state === 'active' ? 1 : 0,
                                                transition: 'opacity 300ms ease-in-out 150ms', // Delayed fade
                                                pointerEvents: state === 'active' ? 'auto' : 'none',
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

                                        {/* ── Expandable Details ── */}
                                        <div
                                            className="grid transition-all duration-500 ease-in-out"
                                            style={{
                                                gridTemplateRows: expandedWorkId === work.id && state === 'active' ? "1fr" : "0fr",
                                                opacity: expandedWorkId === work.id && state === 'active' ? 1 : 0,
                                                pointerEvents: state === 'active' ? 'auto' : 'none',
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

                                    {/* ── Floating Media Layer (Desktop) ── */}
                                    <div
                                        className="absolute pointer-events-none z-10 hidden lg:block"
                                        style={{
                                            top: work.slug === 'steganography' ? '-20%' : '-35%',
                                            right: work.slug === 'steganography' ? '-10%' : '-25%',
                                            width: work.slug === 'steganography' ? '68%' : '80%',
                                            height: work.slug === 'steganography' ? '155%' : '180%',
                                            transformOrigin: 'center right',
                                            opacity: state === 'active' ? 1 : 0,
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
                                                loading={state === 'active' ? "eager" : "lazy"}
                                            />
                                        ) : (
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload={state === 'active' ? "auto" : "none"}
                                                poster={work.posterPath}
                                                className="w-full h-full object-contain pointer-events-none"
                                                aria-hidden="true"
                                            >
                                                <source src={work.videoPath} type="video/webm" />
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={work.posterPath} alt="" className="w-full h-full object-contain" />
                                            </video>
                                        )}

                                        <div
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full pointer-events-none -z-10"
                                            style={{ background: 'radial-gradient(circle, rgba(123, 231, 255, 0.08) 0%, transparent 70%)' }}
                                        />
                                    </div>

                                    {/* ── Floating Media Layer (Mobile) ── */}
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
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                                poster={work.posterPath}
                                                className="w-full h-full object-contain pointer-events-none"
                                                aria-hidden="true"
                                            >
                                                <source src={work.videoPath} type="video/webm" />
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={work.posterPath} alt="" className="w-full h-full object-contain" />
                                            </video>
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
