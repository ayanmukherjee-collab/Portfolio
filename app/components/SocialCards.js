"use client";

import { useEffect, useState } from "react";

export default function SocialCards() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const cardStyle = {
        backgroundColor: '#141414',
        borderRadius: '14px',
        padding: isMobile ? '14px' : '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        transition: 'all 0.3s ease',
        border: '1px solid #222',
    };

    const linkCardStyle = {
        ...cardStyle,
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
    };

    const iconStyle = {
        width: '36px',
        height: '36px',
        backgroundColor: '#1f1f1f',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    };

    const arrowStyle = {
        marginLeft: 'auto',
        color: '#555',
        fontSize: '16px',
    };

    return (
        <div
            style={{
                width: '100%',
                marginTop: isMobile ? '20px' : '30px',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr 1fr',
                    gridTemplateRows: isMobile ? 'auto' : 'auto auto auto',
                    gap: '12px',
                    maxWidth: '700px',
                }}
            >
                {/* Open to Work Card - spans 2 rows on desktop */}
                <div
                    style={{
                        ...cardStyle,
                        gridRow: isMobile ? 'auto' : '1 / 4',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        minHeight: isMobile ? 'auto' : '120px',
                        padding: isMobile ? '16px' : '18px',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={iconStyle}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: '#22c55e',
                                borderRadius: '50%',
                                boxShadow: '0 0 8px #22c55e',
                            }}
                        />
                    </div>
                    <div style={{ marginTop: isMobile ? '12px' : '0' }}>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 600,
                            fontSize: '15px',
                            color: '#ffffff',
                            margin: '0 0 3px 0',
                        }}>
                            Open to Work
                        </p>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 400,
                            fontSize: '12px',
                            color: '#666',
                            margin: 0,
                        }}>
                            Available for Hire
                        </p>
                    </div>
                </div>

                {/* GitHub Card */}
                <a
                    href="https://github.com/ayanmukherjee-collab"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1a1a1a';
                        e.currentTarget.style.borderColor = '#333';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#141414';
                        e.currentTarget.style.borderColor = '#222';
                    }}
                >
                    <div style={iconStyle}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#777">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#ffffff',
                            margin: '0 0 2px 0',
                        }}>
                            GitHub
                        </p>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 400,
                            fontSize: '11px',
                            color: '#666',
                            margin: 0,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                            @ayanmukherjee-collab
                        </p>
                    </div>
                    <span style={arrowStyle}>↗</span>
                </a>

                {/* Location Card */}
                <div style={cardStyle}>
                    <div style={iconStyle}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#ffffff',
                            margin: '0 0 2px 0',
                        }}>
                            Ranchi, India
                        </p>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 400,
                            fontSize: '11px',
                            color: '#666',
                            margin: 0,
                        }}>
                            Remote Available
                        </p>
                    </div>
                </div>

                {/* LinkedIn Card */}
                <a
                    href="https://www.linkedin.com/in/ayan-mukherjee-5885aa338"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1a1a1a';
                        e.currentTarget.style.borderColor = '#333';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#141414';
                        e.currentTarget.style.borderColor = '#222';
                    }}
                >
                    <div style={iconStyle}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#777">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#ffffff',
                            margin: '0 0 2px 0',
                        }}>
                            LinkedIn
                        </p>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 400,
                            fontSize: '11px',
                            color: '#666',
                            margin: 0,
                        }}>
                            /in/ayan-mukherjee
                        </p>
                    </div>
                    <span style={arrowStyle}>↗</span>
                </a>

                {/* Gmail Card */}
                <a
                    href="mailto:ayanmukherjee.official01@gmail.com"
                    style={linkCardStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1a1a1a';
                        e.currentTarget.style.borderColor = '#333';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#141414';
                        e.currentTarget.style.borderColor = '#222';
                    }}
                >
                    <div style={iconStyle}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#777">
                            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                        </svg>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 600,
                            fontSize: '14px',
                            color: '#ffffff',
                            margin: '0 0 2px 0',
                        }}>
                            Gmail
                        </p>
                        <p style={{
                            fontFamily: "'Inter Tight', sans-serif",
                            fontWeight: 400,
                            fontSize: '11px',
                            color: '#666',
                            margin: 0,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                            ayanmukherjee.official01
                        </p>
                    </div>
                    <span style={arrowStyle}>↗</span>
                </a>
            </div>
        </div>
    );
}
