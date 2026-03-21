"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const hasPreloaded = sessionStorage.getItem("hasPreloaded");
        if (hasPreloaded) {
            setLoading(false);
            return;
        }

        const imagePaths = [
            "/ayan.png",
            "/my pfp.jpg",
        ];

        const videoPaths = [
            "/brain.webm",
            "/cli.webm",
            "/chameleon.webm",
        ];

        let loadedItems = 0;
        const totalItems = imagePaths.length + videoPaths.length;

        const handleProgress = () => {
            loadedItems++;
            setProgress(Math.floor((loadedItems / totalItems) * 100));
        };

        const loadImages = imagePaths.map((path) =>
            new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = img.onerror = () => { handleProgress(); resolve(); };
                img.src = path;
            })
        );

        const loadVideos = videoPaths.map((path) =>
            new Promise<void>((resolve) => {
                const video = document.createElement("video");
                video.preload = "metadata";
                video.onloadedmetadata = video.onerror = () => { handleProgress(); resolve(); };
                video.src = path;
                video.load();
            })
        );

        const completeLoading = () => {
            setProgress(100);
            setIsFadingOut(true);
            setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem("hasPreloaded", "true");
            }, 500);
        };

        Promise.race([
            Promise.all([...loadImages, ...loadVideos]),
            new Promise((resolve) => setTimeout(resolve, 2000)),
        ]).then(completeLoading);

        return () => { setLoading(false); };
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
