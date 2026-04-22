"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        let rafId = 0;
        let finishTimeout = 0;
        let fallbackTimeout = 0;
        let completed = false;
        const startTime = performance.now();
        const connection = "connection" in navigator
            ? (navigator as Navigator & {
                connection?: { saveData?: boolean; effectiveType?: string };
            }).connection
            : undefined;
        const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
        const prefersQuickExit =
            isSmallScreen ||
            connection?.saveData === true ||
            connection?.effectiveType?.includes("2g");

        const MIN_DURATION = prefersQuickExit ? 180 : 420;
        const MAX_DURATION = prefersQuickExit ? 700 : 1100;
        const FADE_DURATION = 420;

        const animateProgress = () => {
            const elapsed = performance.now() - startTime;
            const target = Math.min(92, Math.round((elapsed / MAX_DURATION) * 92));
            setProgress((current) => (current >= target ? current : target));

            if (!completed) {
                rafId = window.requestAnimationFrame(animateProgress);
            }
        };

        const completeLoading = () => {
            if (completed) return;
            completed = true;

            window.cancelAnimationFrame(rafId);
            setProgress(100);
            setIsFadingOut(true);

            finishTimeout = window.setTimeout(() => {
                setLoading(false);
                try {
                    sessionStorage.setItem("hasPreloaded", "true");
                } catch {
                    // Ignore storage issues in private browsing or strict environments.
                }
            }, FADE_DURATION);
        };

        const scheduleCompletion = () => {
            if (completed) return;

            const elapsed = performance.now() - startTime;
            const remaining = Math.max(0, MIN_DURATION - elapsed);
            window.clearTimeout(finishTimeout);
            finishTimeout = window.setTimeout(completeLoading, remaining);
        };

        let hasPreloaded = false;
        try {
            hasPreloaded = sessionStorage.getItem("hasPreloaded") === "true";
        } catch {
            hasPreloaded = false;
        }

        if (hasPreloaded) {
            setLoading(false);
            return;
        }

        rafId = window.requestAnimationFrame(animateProgress);
        fallbackTimeout = window.setTimeout(scheduleCompletion, MAX_DURATION);

        if (document.readyState === "complete") {
            scheduleCompletion();
        } else {
            window.addEventListener("load", scheduleCompletion, { once: true });
        }

        return () => {
            completed = true;
            window.cancelAnimationFrame(rafId);
            window.clearTimeout(finishTimeout);
            window.clearTimeout(fallbackTimeout);
            window.removeEventListener("load", scheduleCompletion);
            setLoading(false);
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0b0d] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-[240px]">

                <div className="flex flex-col items-center gap-1.5 w-full text-center">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-white/40 uppercase">
                        System Load
                    </span>
                    <h2 className="text-white/90 text-sm font-medium tracking-[0.1em] uppercase">
                        Ayan Mukherjee
                    </h2>
                </div>

                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                    <div
                        className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="flex w-full items-center justify-between">
                    <span className="text-[10px] font-mono text-white/40">
                        {progress < 100 ? progress.toString().padStart(3, "0") : "100"}%
                    </span>
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                            {progress < 100 && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-40"></span>}
                            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${progress < 100 ? 'bg-white/80' : 'bg-green-500'}`}></span>
                        </span>
                        <span className="text-[9px] font-medium text-white/30 tracking-widest uppercase">
                            {progress < 100 ? "FETCHING" : "READY"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
