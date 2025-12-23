"use client";

import { useEffect, useState } from "react";
import TechScroll from "./TechScroll";
import SocialCards from "./SocialCards";

export default function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            id="home"
            style={{
                minHeight: isMobile ? 'auto' : '100vh',
                display: 'flex',
                alignItems: isMobile ? 'flex-start' : 'center',
                backgroundColor: '#000000',
                paddingTop: isMobile ? '120px' : '140px',
                paddingBottom: isMobile ? '40px' : '60px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    paddingLeft: isMobile ? '20px' : '80px',
                    paddingRight: isMobile ? '20px' : '80px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {/* Left content */}
                <div style={{ width: isMobile ? '100%' : '50%', flexShrink: 0 }}>
                    {/* Hello I'm text */}
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontStyle: 'normal',
                            color: '#888888',
                            fontSize: isMobile ? '8vw' : '4vw',
                            marginBottom: '0',
                            letterSpacing: '-0.02em',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Hello I'm
                    </p>

                    {/* Main name row with 7 and AYAN video + description */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            marginTop: isMobile ? '-2vw' : '-1.5vw',
                            marginBottom: '0'
                        }}
                    >
                        {/* Large 7 with gradient */}
                        <span
                            style={{
                                fontFamily: "'Inter Tight', sans-serif",
                                fontWeight: 900,
                                background: 'linear-gradient(180deg, #ffffff 0%, #4a4a4a 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                fontSize: isMobile ? '45vw' : '18vw',
                                lineHeight: 0.8,
                                letterSpacing: '-0.05em',
                                marginRight: isMobile ? '-5vw' : '-1.5vw'
                            }}
                        >
                            7
                        </span>

                        {/* Right column: AYAN video + description */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                marginTop: isMobile ? '1vw' : '1.5vw',
                                position: 'relative'
                            }}
                        >
                            {/* AYAN Image */}
                            <img
                                src="/AYAN.png"
                                alt="AYAN"
                                style={{
                                    height: isMobile ? '18vw' : '8vw',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    position: 'absolute',
                                    top: isMobile ? '0.6vw' : '-0.8vw',
                                    left: isMobile ? '7vw' : '2.5vw',
                                    zIndex: 0,
                                    transform: 'scale(1.1)',
                                    transformOrigin: 'left top'
                                }}
                            />

                            {/* Spacer to maintain layout height */}
                            <div style={{ height: isMobile ? '28vw' : '13vw' }} />

                            {/* Description text - SMALLEST element */}
                            <p
                                style={{
                                    fontFamily: "'Inter Tight', sans-serif",
                                    fontWeight: 400,
                                    color: '#888888',
                                    fontSize: isMobile ? '3vw' : '1.1vw',
                                    marginTop: isMobile ? '-6vw' : '-3.8vw',
                                    marginLeft: isMobile ? '4.5vw' : '2vw',
                                    lineHeight: 1.4,
                                    letterSpacing: '0',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                I specialize in problem solving, UI design, editing as well as full-stack development.
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack Infinite Scroll */}
                    <TechScroll />

                    {/* Social Cards */}
                    <SocialCards />
                </div>

                {/* Right side: Motion Graphics Video */}
                {!isMobile && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            height: '25vw',
                            width: 'auto',
                            objectFit: 'contain',
                            marginLeft: '-8vw',
                            marginTop: '8vw'
                        }}
                    >
                        <source src="/motion-graphics.webm" type="video/webm" />
                    </video>
                )}
            </div>
        </section>
    );
}
