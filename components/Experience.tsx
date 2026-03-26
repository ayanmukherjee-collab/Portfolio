"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const EXPERIENCES = [
    {
        id: 1,
        role: "AI/ML Lead",
        company: "GDG Hackathon",
        period: "2025",
        image: "/my pfp.jpg",
        link: "",
        tags: ["React", "Python", "A* Algorithm", "PWA"],
        desc: [
            "Spearheaded a cross-functional team to design Campus Connect — an AI-assisted indoor navigation PWA.",
            "Engineered an A* pathfinding algorithm with an AI floor-plan detection module for automated mapping.",
            "Orchestrated full-stack architecture decisions across React frontend, navigation logic, and AI module."
        ]
    },
    {
        id: 2,
        role: "Web Design Intern",
        company: "Jharkhand Government Tool Room",
        period: "06/2025 - 08/2025",
        image: "/my pfp.jpg",
        link: "",
        tags: ["HTML", "CSS", "JavaScript"],
        desc: [
            "Architected responsive, cross-browser web interfaces using robust front-end practices.",
            "Built reusable component libraries that reduced UI development time by approximately 30%.",
            "Collaborated with senior engineering stakeholders to translate design specifications into production-ready code."
        ]
    },
    {
        id: 3,
        role: "Creator & Developer",
        company: "Supercharge + PML",
        period: "2025 - Present",
        image: "/supercharge-app-preview.png",
        link: "https://ai-supercharge.vercel.app/",
        tags: ["React", "TypeScript", "Supabase", "LLMs"],
        desc: [
            "Engineered a production-grade BYOK AI chat web application enabling unified access to multiple LLM providers.",
            "Invented PML (Personal Memory Language) — a custom structured memory-encoding protocol.",
            "Implemented tiered prompt injection granting AI assistants persistent, hallucination-resistant context recall."
        ]
    },
    {
        id: 4,
        role: "Security Developer",
        company: "Steganography Tool",
        period: "2025",
        image: "/cli-ai.png",
        link: "https://stenograph-ayan.vercel.app/",
        tags: ["Cryptography", "Security", "Web"],
        desc: [
            "Developed a full-stack web security tool enabling covert file-within-file encoding.",
            "Integrated a Trojan detection module that analyzes embedded payloads for malicious signatures.",
            "Utilized advanced steganographic techniques to ensure data stealth and integrity."
        ]
    },
    {
        id: 5,
        role: "BSc IT Student",
        company: "Dr. Shyama Prasad Mukherjee University",
        period: "2022 - Present",
        image: "/my pfp.jpg",
        link: "",
        tags: ["DBMS", "DSA", "OOP", "Java", "C++"],
        desc: [
            "Pursuing a Bachelor of Science in Information Technology.",
            "Relevant coursework: Database Management Systems (DBMS), Management Information (MIS), DSA, and OOP.",
            "Active member of the university developer community and participant in inter-college tech events."
        ]
    },
    {
        id: 6,
        role: "Cybersecurity Analyst",
        company: "CTF Competitions",
        period: "2022 - Present",
        image: "/my pfp.jpg",
        link: "",
        tags: ["Cybersecurity", "OWASP", "CTF"],
        desc: [
            "Placed 13th in the first-ever CTF cybersecurity competition hosted at WASP Cybersecurity Webinar, JRSU.",
            "Applied OWASP vulnerability analysis and penetration testing techniques under competitive conditions.",
            "Continuously expanding expertise in identifying and mitigating web security threats."
        ]
    }
];

const TOTAL_FRAMES = 60;
const SNAPS = EXPERIENCES.length;
const FRAMES_PER_SNAP = 10;
const CYCLE_FRAMES = SNAPS * FRAMES_PER_SNAP; // one full loop cycle
const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function Experience() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);
    const [skipTransition, setSkipTransition] = useState<Set<number>>(new Set());
    const prevActiveRef = useRef(0);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const gearAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    // Temporary disable transitions during wrap-arounds
    useLayoutEffect(() => {
        const prev = prevActiveRef.current;
        const curr = activeCardIndex;
        prevActiveRef.current = curr;

        const linearDiff = Math.abs(curr - prev);
        if (linearDiff > 1) {
            // Wrap-around detected - find cards whose offset jumped significantly
            const skip = new Set<number>();
            for (let idx = 0; idx < SNAPS; idx++) {
                let oldOff = idx - prev;
                if (oldOff > SNAPS / 2) oldOff -= SNAPS;
                if (oldOff < -SNAPS / 2) oldOff += SNAPS;

                let newOff = idx - curr;
                if (newOff > SNAPS / 2) newOff -= SNAPS;
                if (newOff < -SNAPS / 2) newOff += SNAPS;

                if (Math.abs(newOff - oldOff) > 2) skip.add(idx);
            }

            if (skip.size > 0) {
                setSkipTransition(skip);
                // Re-enable transitions after browser paints the new positions
                requestAnimationFrame(() => {
                    setSkipTransition(new Set());
                });
            }
        }
    }, [activeCardIndex]);

    const targetFrameRef = useRef(0);
    const currentFrameRef = useRef(0);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const requestRef = useRef<number>(0);

    const isDraggingRef = useRef(false);
    const lastYRef = useRef(0);
    const lastXRef = useRef(0);
    const snapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const activeIndexRef = useRef(0);

    useEffect(() => {
        let loadedCount = 0;
        const loadImages = async () => {
            const loadPromises = Array.from({ length: TOTAL_FRAMES }).map((_, i) => {
                return new Promise<void>((resolve) => {
                    const img = new Image();
                    const indexStr = (i + 1).toString().padStart(4, "0");
                    img.src = `/gear/${indexStr}.webp`;

                    const checkComplete = () => {
                        loadedCount++;
                        if (loadedCount === TOTAL_FRAMES) setImagesLoaded(true);
                        resolve();
                    };

                    if (img.complete) {
                        imagesRef.current[i] = img;
                        checkComplete();
                    } else {
                        img.onload = () => {
                            imagesRef.current[i] = img;
                            checkComplete();
                        };
                        img.onerror = () => {
                            console.warn(`Failed to load frame ${indexStr}`);
                            checkComplete();
                        };
                    }
                });
            });
            await Promise.all(loadPromises);
        };

        loadImages();
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault(); // Block native page scroll

            // Adjust the frame target based on wheel delta (no clamping — loops)
            targetFrameRef.current += e.deltaY * 0.04;

            // Debounced detent snapping
            if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
            snapTimeoutRef.current = setTimeout(() => {
                const nearestSnap = Math.round(targetFrameRef.current / FRAMES_PER_SNAP) * FRAMES_PER_SNAP;
                targetFrameRef.current = nearestSnap;
            }, 100);
        };

        const handleTouchMoveNative = (e: TouchEvent) => {
            // Prevents page scroll natively while dragging the gear
            if (isDraggingRef.current && window.innerWidth >= 768) {
                if (e.cancelable) e.preventDefault();
            }
        };

        // We listen to wheel over the gear to prevent weird scrolling bugs
        // Touch move intercept is needed on the gear area if drag happens there
        const gearArea = gearAreaRef.current;
        if (gearArea) {
            gearArea.addEventListener('wheel', handleWheel, { passive: false });
            gearArea.addEventListener('touchmove', handleTouchMoveNative, { passive: false });
        }

        return () => {
            if (gearArea) {
                gearArea.removeEventListener('wheel', handleWheel);
                gearArea.removeEventListener('touchmove', handleTouchMoveNative);
            }
        };
    }, []);

    const dragStartXRef = useRef(0);
    const dragStartYRef = useRef(0);
    const directionLockedRef = useRef<'horizontal' | 'vertical' | null>(null);
    const DIRECTION_THRESHOLD = 8; // px before we lock a direction

    // Circular tracking refs
    const centerXRef = useRef(0);
    const centerYRef = useRef(0);
    const lastAngleRef = useRef(0);
    const SENSITIVITY = 15; // frames per radian of cursor sweep

    const handlePointerDown = (e: React.PointerEvent) => {
        isDraggingRef.current = true;
        directionLockedRef.current = null;
        lastYRef.current = e.clientY;
        lastXRef.current = e.clientX;
        dragStartXRef.current = e.clientX;
        dragStartYRef.current = e.clientY;

        if (gearAreaRef.current) {
            const rect = gearAreaRef.current.getBoundingClientRect();
            centerXRef.current = rect.left + rect.width / 2;
            centerYRef.current = rect.top + rect.height / 2;
            // Calculate initial touch angle relative to center of gear
            lastAngleRef.current = Math.atan2(e.clientY - centerYRef.current, e.clientX - centerXRef.current);
        }

        // On desktop, capture immediately for smooth dragging
        if (isDesktop) {
            gearAreaRef.current?.setPointerCapture(e.pointerId);
        }
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return;

        // On mobile, detect direction first before doing anything
        if (!isDesktop) {
            if (directionLockedRef.current === null) {
                const totalDx = Math.abs(e.clientX - dragStartXRef.current);
                const totalDy = Math.abs(e.clientY - dragStartYRef.current);

                if (totalDx >= DIRECTION_THRESHOLD || totalDy >= DIRECTION_THRESHOLD) {
                    if (totalDx > totalDy) {
                        directionLockedRef.current = 'horizontal';
                        // Now capture pointer for smooth gear tracking
                        gearAreaRef.current?.setPointerCapture(e.pointerId);
                    } else {
                        directionLockedRef.current = 'vertical';
                        // Vertical — abandon drag, let native scroll handle it
                        isDraggingRef.current = false;
                        return;
                    }
                } else {
                    // Not enough movement yet to decide
                    return;
                }
            }

            // If we're here, direction is locked to horizontal manipulation
            if (directionLockedRef.current === 'horizontal') {
                const currentAngle = Math.atan2(e.clientY - centerYRef.current, e.clientX - centerXRef.current);
                let deltaAngle = currentAngle - lastAngleRef.current;

                if (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
                if (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

                targetFrameRef.current -= deltaAngle * SENSITIVITY;
                lastAngleRef.current = currentAngle;

                if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
            }
        } else {
            // Desktop: process angular movement immediately
            const currentAngle = Math.atan2(e.clientY - centerYRef.current, e.clientX - centerXRef.current);
            let deltaAngle = currentAngle - lastAngleRef.current;

            if (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
            if (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

            // Negative so physical clockwise spin maps naturally to forward shifting
            targetFrameRef.current -= deltaAngle * SENSITIVITY;
            lastAngleRef.current = currentAngle;

            if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
        }
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        directionLockedRef.current = null;

        try {
            gearAreaRef.current?.releasePointerCapture(e.pointerId);
        } catch { /* pointer may not have been captured */ }

        // Snap to nearest detent on release
        const nearestSnap = Math.round(targetFrameRef.current / FRAMES_PER_SNAP) * FRAMES_PER_SNAP;
        targetFrameRef.current = nearestSnap;
    };

    const cardsTouchStartX = useRef(0);
    const cardsTouchStartY = useRef(0);

    const handleCardsTouchStart = (e: React.TouchEvent) => {
        if (isDesktop) return;
        cardsTouchStartX.current = e.touches[0].clientX;
        cardsTouchStartY.current = e.touches[0].clientY;
    };

    const handleCardsTouchMove = (e: React.TouchEvent) => {
        if (isDesktop) return;
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const deltaX = currentX - cardsTouchStartX.current;
        const deltaY = currentY - cardsTouchStartY.current;

        // If predominantly horizontal swiping, intercept and scrub gear
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 5) {
            if (e.cancelable) e.preventDefault();

            // Reduced sensitivity so we don't skip cards
            targetFrameRef.current += (-deltaX) * 0.08;

            cardsTouchStartX.current = currentX;
            cardsTouchStartY.current = currentY;

            if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
        }
    };

    const handleCardsTouchEnd = () => {
        if (isDesktop) return;
        const nearestSnap = Math.round(targetFrameRef.current / FRAMES_PER_SNAP) * FRAMES_PER_SNAP;
        targetFrameRef.current = nearestSnap;
    };

    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // High DPI Canvas Scaling
        const dpr = window.devicePixelRatio || 1;
        const width = 800;
        const height = 800;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = "100%";
        canvas.style.maxWidth = "800px";
        canvas.style.aspectRatio = "1/1";

        const render = () => {
            // Velocity smoothing
            const diff = targetFrameRef.current - currentFrameRef.current;
            let smoothing = 0.12;

            if (Math.abs(diff) > 2) {
                smoothing = 0.25;
            }

            currentFrameRef.current += diff * smoothing;

            // Use modulo so the gear animation and cards loop seamlessly
            let renderFrame = mod(Math.floor(currentFrameRef.current), TOTAL_FRAMES);

            // Sync React state for cards (debounced to avoid loop disruption)
            const newCardIndex = mod(Math.round(currentFrameRef.current / FRAMES_PER_SNAP), SNAPS);
            if (newCardIndex !== activeIndexRef.current) {
                activeIndexRef.current = newCardIndex;
                setActiveCardIndex(newCardIndex);
            }

            const img = imagesRef.current[renderFrame];

            if (img && img.complete) {
                ctx.clearRect(0, 0, width, height);

                ctx.shadowColor = "rgba(74, 222, 128, 0.15)";
                ctx.shadowBlur = 40;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 10;

                const imgRatio = img.width / img.height;
                const canvasRatio = width / height;

                let drawWidth = width;
                let drawHeight = height;
                let x = 0;
                let y = 0;

                if (imgRatio > canvasRatio) {
                    drawHeight = width / imgRatio;
                    y = (height - drawHeight) / 2;
                } else {
                    drawWidth = height * imgRatio;
                    x = (width - drawWidth) / 2;
                }

                ctx.drawImage(img, x, y, drawWidth, drawHeight);

                ctx.shadowBlur = 0;
                ctx.shadowColor = "transparent";
            }

            requestRef.current = requestAnimationFrame(render);
        };

        requestRef.current = requestAnimationFrame(render);
        return () => cancelAnimationFrame(requestRef.current);
    }, [imagesLoaded]); // strictly depend on imagesLoaded so loop survives component lifecycle

    const [particles, setParticles] = useState<Array<{ id: number, top: string, left: string, duration: string, delay: string, size: string }>>([]);

    useEffect(() => {
        setParticles([...Array(15)].map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${10 + Math.random() * 20}s`,
            delay: `${-(Math.random() * 20)}s`,
            size: `${2 + Math.random() * 4}px`,
        })));
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[100vh] bg-[#0b0b0d] flex flex-col md:flex-row max-w-[1400px] mx-auto px-6 overflow-hidden">
            <div className="absolute top-8 md:top-14 left-6 md:left-12 z-40 pointer-events-auto">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    Experience<span className="text-[#4ADE80]">.</span>
                </h2>
            </div>

            {/* Experience Cards */}
            <div className="w-full md:w-3/5 h-[75vh] md:h-full relative z-20 pt-[12vh] md:pt-0 flex items-start md:items-center justify-center pointer-events-none">

                <div className="hidden md:block absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0b0b0d] via-[#0b0b0d]/90 to-transparent z-30 pointer-events-none fade-edge" />
                <div className="hidden md:block absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/90 to-transparent z-30 pointer-events-none fade-edge" />

                {/* Mobile: Swipe overlay, Desktop: Center wrapper */}
                <div
                    className="w-full h-[60vh] min-h-[400px] md:h-[80vh] md:min-h-[500px] relative flex justify-center items-start md:items-center pointer-events-auto touch-pan-y z-40"
                    onTouchStart={handleCardsTouchStart}
                    onTouchMove={handleCardsTouchMove}
                    onTouchEnd={handleCardsTouchEnd}
                    onTouchCancel={handleCardsTouchEnd}
                >
                    {EXPERIENCES.map((exp, idx) => {
                        // Circular offset: ensures cards always slide in from the correct direction
                        let offset = idx - activeCardIndex;
                        if (offset > SNAPS / 2) offset -= SNAPS;
                        if (offset < -SNAPS / 2) offset += SNAPS;
                        const isActive = offset === 0;
                        const shouldSkip = skipTransition.has(idx);

                        return (
                            <div
                                key={exp.id}
                                className={`absolute w-full max-w-[90vw] md:max-w-2xl ${shouldSkip ? '' : 'transition-all duration-[800ms] md:duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)]'} ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                                style={{
                                    transform: isDesktop
                                        ? `translateY(calc(${offset * 105}% + ${offset * 1.5}rem)) scale(${isActive ? 1 : 0.92 + Math.abs(offset) * 0.02})`
                                        : `translateX(calc(${offset * 110}% + ${offset * 0.5}rem)) scale(${isActive ? 1 : 0.94 + Math.abs(offset) * 0.02})`,
                                    opacity: isActive ? 1 : (Math.abs(offset) <= 1 ? 0.35 : 0),
                                    filter: `blur(${isActive ? 0 : 6}px)`,
                                    zIndex: 50 - Math.abs(offset)
                                }}
                            >
                                <div className="w-full h-full md:h-auto lg:aspect-[4/3] min-h-[420px] md:min-h-[450px] relative rounded-[24px] lg:rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 lg:p-12 flex flex-col backdrop-blur-[24px] shadow-2xl shadow-black/50 overflow-hidden">

                                    {/* Content wrapper */}
                                    <div className="flex flex-col relative flex-1 min-h-0 z-10">

                                        <div className="flex flex-col gap-3 lg:gap-4 mb-8 shrink-0">
                                            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-medium text-[#4ADE80] flex items-center gap-2 lg:gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_10px_rgba(74,222,128,0.8)] block" /> {exp.period}
                                            </span>
                                            <h3 className="text-[2rem] sm:text-4xl lg:text-[3.5rem] font-bold tracking-tighter text-white leading-[1.05]">
                                                {exp.role}
                                            </h3>
                                            <p className="text-base sm:text-xl lg:text-2xl font-light text-white/60 leading-snug">
                                                @ {exp.company}
                                            </p>
                                        </div>

                                        <ul className="space-y-3.5 md:space-y-4 flex-1 overflow-y-auto pr-4 pb-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
                                            {exp.desc.map((bullet, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <span className="mt-[0.6rem] relative flex h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                                                    <span className="text-white/70 text-sm lg:text-[15px] leading-relaxed tracking-wide font-light">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex justify-between items-end sm:items-center pt-6 mt-4 shrink-0 border-t border-white/[0.08]">
                                            <div className="flex gap-2 flex-wrap">
                                                {/* On mobile only show max 3 tags to not crowd space */}
                                                {exp.tags.slice(0, 4).map(tag => (
                                                    <span key={tag} className="px-3 py-1.5 lg:px-3.5 lg:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-[10px] lg:text-[11px] font-medium tracking-wide text-white/80 hidden sm:inline-block">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {exp.tags.slice(0, 2).map(tag => (
                                                    <span key={tag + "-mob"} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] text-[10px] font-medium tracking-wide text-white/80 sm:hidden">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            {exp.link && (
                                                <a href={exp.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs lg:text-sm font-semibold shrink-0 group/link px-4 py-2 sm:h-10 sm:px-5 lg:h-10 lg:px-6 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40">
                                                    <span className="hidden md:inline">View Live</span>
                                                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subtle radial glow background behind text */}
                                    <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10" style={{ background: 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.03) 0%, transparent 60%)' }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Gear Engine */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-full absolute bottom-0 md:bottom-auto md:relative flex items-end md:items-center justify-center z-10 pointer-events-none md:right-0 md:top-0">

                <div className="absolute top-[75%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vh] h-[30vh] bg-[#4ADE80]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {particles.map(p => (
                        <div
                            key={p.id}
                            className="absolute bg-white rounded-full animate-particle-drift opacity-0"
                            style={{
                                top: p.top,
                                left: p.left,
                                width: p.size,
                                height: p.size,
                                animationDuration: p.duration,
                                animationDelay: p.delay,
                                boxShadow: "0 0 10px rgba(255,255,255,0.5)"
                            }}
                        />
                    ))}
                </div>

                {!imagesLoaded && (
                    <div className="absolute text-white/30 font-mono text-sm uppercase tracking-widest flex flex-col items-center gap-4 pointer-events-none">
                        <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#4ADE80]/50 animate-spin" />
                        Initializing Engine...
                    </div>
                )}

                {/* The actual constrained gear area with pointer events */}
                <div
                    ref={gearAreaRef}
                    className="relative w-[140vw] sm:w-[120vw] h-auto max-w-none md:w-full md:max-w-[500px] lg:max-w-[650px] xl:max-w-[800px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-auto z-40 touch-pan-y md:touch-none translate-y-0 md:translate-y-0"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                >
                    <canvas
                        ref={canvasRef}
                        className={`w-full h-full transition-opacity duration-1000 pointer-events-none select-none ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />

                    {/* Scroll Indicator Curve */}
                    <div className={`absolute left-[10%] sm:left-[8%] md:-left-[4%] lg:-left-[6%] top-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-1000 text-gray-500 ${imagesLoaded ? 'opacity-60' : 'opacity-0'} hidden md:flex flex-col items-center`}>
                        <svg width="40" height="240" viewBox="0 0 40 240" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M 35 15 Q 5 120 35 225" />
                            <circle cx="35" cy="15" r="4" fill="currentColor" />
                            <circle cx="35" cy="225" r="4" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
