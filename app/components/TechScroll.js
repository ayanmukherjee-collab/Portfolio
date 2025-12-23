"use client";

import { useEffect, useState } from "react";

const techIcons = [
    { name: "TypeScript", src: "/tech-icons/brand-typescript-svgrepo-com.svg" },
    { name: "After Effects", src: "/tech-icons/icons8-adobe-after-effects.svg" },
    { name: "Premiere Pro", src: "/tech-icons/icons8-adobe-premiere-pro.svg" },
    { name: "Blender", src: "/tech-icons/icons8-blender.svg" },
    { name: "DaVinci Resolve", src: "/tech-icons/icons8-davinci-resolve.svg" },
    { name: "Figma", src: "/tech-icons/icons8-figma.svg" },
    { name: "Illustrator", src: "/tech-icons/icons8-illustrator.svg" },
    { name: "Photoshop", src: "/tech-icons/icons8-photoshop.svg" },
    { name: "Next.js", src: "/tech-icons/next-js-svgrepo-com.svg" },
    { name: "Tailwind CSS", src: "/tech-icons/tailwind-css-svgrepo-com.svg" },
];

export default function TechScroll() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Triple the icons for seamless infinite scroll
    const scrollIcons = [...techIcons, ...techIcons, ...techIcons];

    return (
        <>
            <style>
                {`
                    @keyframes scrollTechLeft {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-33.333%);
                        }
                    }
                `}
            </style>
            <div
                style={{
                    width: '100%',
                    overflow: 'hidden',
                    padding: isMobile ? '15px 0' : '20px 0',
                    marginTop: isMobile ? '10px' : '20px',
                    position: 'relative',
                }}
            >
                {/* Left gradient fade */}
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '60px',
                        background: 'linear-gradient(to right, #000000 0%, transparent 100%)',
                        zIndex: 2,
                        pointerEvents: 'none',
                    }}
                />

                {/* Right gradient fade */}
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '60px',
                        background: 'linear-gradient(to left, #000000 0%, transparent 100%)',
                        zIndex: 2,
                        pointerEvents: 'none',
                    }}
                />

                {/* Scrolling icons row */}
                <div
                    style={{
                        display: 'flex',
                        gap: isMobile ? '30px' : '32px',
                        width: 'fit-content',
                        animation: 'scrollTechLeft 40s linear infinite',
                    }}
                >
                    {scrollIcons.map((icon, index) => (
                        <div
                            key={`icon-${icon.name}-${index}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <div
                                style={{
                                    width: isMobile ? '36px' : '44px',
                                    height: isMobile ? '36px' : '44px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    filter: 'grayscale(100%) brightness(0.6)',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                                    e.currentTarget.style.transform = 'scale(1.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%) brightness(0.6)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <img
                                    src={icon.src}
                                    alt={icon.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
