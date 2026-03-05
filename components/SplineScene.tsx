"use client";

import { useState, useEffect } from "react";

interface SplineSceneProps {
    url: string;
    className?: string;
}

export default function SplineScene({ url, className }: SplineSceneProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // Mount after initial render to avoid hydration mismatch and defer iframe creation
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className={`relative w-full h-full ${className ?? ""}`}>
            {/* Skeleton shimmer while iframe loads */}
            {!loaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent animate-pulse rounded-xl z-20" />
            )}

            <iframe
                src={url}
                onLoad={() => setLoaded(true)}
                className="w-full h-full border-0"
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.8s ease",
                }}
                allow="autoplay; fullscreen; vr"
                loading="lazy"
            ></iframe>
        </div>
    );
}
