"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ onLoadComplete }) {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Preload all assets
        const assets = [
            '/chess-bg.png',
            '/AYAN.png',
            '/tech-stack-grid.png',
            '/king-chess.webm',
            '/ayan-loader.webm',
        ];

        const preloadAssets = async () => {
            const promises = assets.map((src) => {
                return new Promise((resolve) => {
                    if (src.endsWith('.webm')) {
                        const video = document.createElement('video');
                        video.src = src;
                        video.onloadeddata = resolve;
                        video.onerror = resolve;
                    } else {
                        const img = new Image();
                        img.src = src;
                        img.onload = resolve;
                        img.onerror = resolve;
                    }
                });
            });

            await Promise.all(promises);

            // Minimum loading time for animation to play
            await new Promise(resolve => setTimeout(resolve, 2500));

            setFadeOut(true);
            setTimeout(() => {
                setIsLoading(false);
                onLoadComplete();
            }, 500);
        };

        preloadAssets();
    }, [onLoadComplete]);

    if (!isLoading) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.5s ease-out',
            }}
        >
            <video
                autoPlay
                muted
                playsInline
                style={{
                    width: '200px',
                    maxWidth: '80vw',
                    height: 'auto',
                }}
            >
                <source src="/ayan-loader.webm" type="video/webm" />
            </video>
        </div>
    );
}
