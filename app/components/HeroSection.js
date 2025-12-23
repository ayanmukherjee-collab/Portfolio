"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const [isMobileState, setIsMobile] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Use desktop layout until mounted to prevent hydration mismatch
    const mobile = mounted && isMobileState;

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("ayanmukherjee.collab@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            style={{
                minHeight: mobile ? 'auto' : '100vh',
                display: 'flex',
                alignItems: mobile ? 'flex-start' : 'center',
                backgroundColor: '#000000',
                position: 'relative',
                overflow: 'hidden',
                padding: mobile ? '100px 24px 40px' : '0 64px',
            }}
        >
            {/* Chess Background */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: mobile ? '100%' : '65%',
                    backgroundImage: 'url(/chess-bg.png)',
                    backgroundSize: mobile ? '900px auto' : 'cover',
                    backgroundPosition: mobile ? 'right 70px' : '-525px center',
                    backgroundRepeat: 'no-repeat',
                    opacity: mobile ? 0.5 : 1,
                    zIndex: 1,
                }}
            />

            {/* Left Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: mobile ? '100%' : '55%',
                    background: mobile
                        ? 'linear-gradient(to right, #000000 0%, #000000 40%, transparent 100%)'
                        : 'linear-gradient(to right, #000000 0%, transparent 60%)',
                    zIndex: 2,
                }}
            />

            {/* Bottom Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: mobile ? '30%' : '20%',
                    background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
                    zIndex: 2,
                }}
            />

            {/* Main Container */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: mobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: mobile ? '40px' : '20px',
                    position: 'relative',
                    zIndex: 3,
                }}
            >
                {/* Left Content */}
                <div
                    style={{
                        flex: mobile ? '1' : '0 0 45%',
                        maxWidth: mobile ? '100%' : '520px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 900,
                            color: '#949494ff',
                            fontSize: mobile ? '28px' : '55px',
                            marginBottom: mobile ? '4px' : '-8px',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Hello I'm
                    </p>

                    <img
                        src="/AYAN.png"
                        alt="AYAN"
                        style={{
                            height: mobile ? '70px' : '129px',
                            width: 'auto',
                            display: 'block',
                            marginBottom: mobile ? '20px' : '28px',
                        }}
                    />

                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 800,
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: mobile ? '14px' : '22px',
                            lineHeight: 1.4,
                            marginBottom: mobile ? '28px' : '32px',
                            maxWidth: mobile ? '100%' : '580px',
                            textAlign: 'left',
                        }}
                    >
                        I specialize in problem solving, UI design, editing as well as full-stack development.
                    </p>

                    {/* Buttons */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '12px',
                            marginBottom: mobile ? '32px' : '40px',
                        }}
                    >
                        <button
                            onClick={scrollToContact}
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                                fontSize: mobile ? '14px' : '15px',
                                padding: mobile ? '12px 24px' : '14px 28px',
                                backgroundColor: '#FFFFFF',
                                color: '#000000',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#f0f0f0';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#FFFFFF';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Contact me
                        </button>

                        <button
                            onClick={handleCopyEmail}
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                                fontSize: mobile ? '14px' : '15px',
                                padding: mobile ? '12px 24px' : '14px 28px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: '#FFFFFF',
                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            {copied ? 'Copied!' : 'Copy email'}
                        </button>
                    </div>

                    <img
                        src="/tech-stack-grid.png"
                        alt="Tech Stack"
                        style={{
                            height: mobile ? '90px' : '85px',
                            width: 'auto',
                        }}
                    />
                </div>

                {/* King Chess Video - Desktop Only */}
                {!mobile && (
                    <div
                        style={{
                            flex: '0 0 50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            width: 'auto',
                        }}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '180%',
                                maxWidth: '1050px',
                                transform: 'scale(1.15)',
                                height: 'auto',
                            }}
                        >
                            <source src="/king-chess.webm" type="video/webm" />
                        </video>
                    </div>
                )}
            </div>
        </section>
    );
}
