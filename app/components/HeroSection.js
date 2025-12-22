"use client";

import { useEffect, useState } from "react";

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
                minHeight: '100vh',
                display: 'flex',
                alignItems: isMobile ? 'flex-start' : 'center',
                backgroundColor: '#000000',
                paddingTop: isMobile ? '120px' : '0',
                marginTop: isMobile ? '0' : '-10vh'
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
                <div>
                    {/* Hello I'm text - grey, no italic */}
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontStyle: 'normal',
                            color: '#888888',
                            fontSize: isMobile ? '8vw' : '2.5vw',
                            marginBottom: '0',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Hello I'm
                    </p>

                    {/* Main name row with 7 and AYAN video + description */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            marginTop: isMobile ? '-2vw' : '-1vw',
                            marginBottom: '0'
                        }}
                    >
                        {/* Large 7 with gradient - LARGEST element */}
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
                                marginTop: isMobile ? '1vw' : '2vw',
                                position: 'relative'
                            }}
                        >
                            {/* AYAN WebM Video - positioned behind, larger size */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    height: isMobile ? '28vw' : '18vw',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    position: 'absolute',
                                    top: isMobile ? '-59vw' : '-41.5vw',
                                    left: isMobile ? '-90vw' : '-42vw',
                                    zIndex: 0,
                                    transform: 'scale(5.0)',
                                    transformOrigin: 'left top'
                                }}
                            >
                                <source src="/Ayan.webm" type="video/webm" />
                            </video>

                            {/* Spacer to maintain layout height */}
                            <div style={{ height: isMobile ? '28vw' : '13vw' }} />

                            {/* Description text - SMALLEST element */}
                            <p
                                style={{
                                    fontFamily: "'Inter Tight', sans-serif",
                                    fontWeight: 400,
                                    color: '#888888',
                                    fontSize: isMobile ? '3vw' : '1.1vw',
                                    marginTop: isMobile ? '-2vw' : '-2.5vw',
                                    lineHeight: 1.4,
                                    letterSpacing: '0',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                I specialize in problem solving, UI design, editing<br />
                                as well as full-stack development.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side: Motion Graphics Video */}
                {!isMobile && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            height: '32vw',
                            width: 'auto',
                            objectFit: 'contain',
                            marginRight: '-40px',
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
