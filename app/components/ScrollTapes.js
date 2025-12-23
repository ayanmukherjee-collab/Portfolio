"use client";

export default function ScrollTapes() {
    const tapeText = "SCROLL DOWN • ".repeat(20);

    return (
        <>
            <style>
                {`
                    @keyframes scrollTapeLeft {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes scrollTapeRight {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                `}
            </style>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '180px',
                    overflow: 'hidden',
                    backgroundColor: '#000000',
                }}
            >
                {/* Left vignette gradient */}
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '150px',
                        background: 'linear-gradient(to right, #000000 0%, transparent 100%)',
                        zIndex: 10,
                        pointerEvents: 'none',
                    }}
                />

                {/* Right vignette gradient */}
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '150px',
                        background: 'linear-gradient(to left, #000000 0%, transparent 100%)',
                        zIndex: 10,
                        pointerEvents: 'none',
                    }}
                />

                {/* First tape - tilted right (behind) */}
                <div
                    style={{
                        position: 'absolute',
                        left: '-10%',
                        top: '50%',
                        width: '120%',
                        height: '36px',
                        backgroundColor: '#8a8a8a',
                        transform: 'rotate(4deg) translateY(-50%)',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            animation: 'scrollTapeLeft 50s linear infinite',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Inter Tight', sans-serif",
                                fontWeight: 800,
                                fontSize: '13px',
                                color: '#000000',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            {tapeText}
                        </span>
                        <span
                            style={{
                                fontFamily: "'Inter Tight', sans-serif",
                                fontWeight: 800,
                                fontSize: '13px',
                                color: '#000000',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            {tapeText}
                        </span>
                    </div>
                </div>

                {/* Second tape - tilted left (in front with shadow) */}
                <div
                    style={{
                        position: 'absolute',
                        left: '-10%',
                        top: '50%',
                        width: '120%',
                        height: '36px',
                        backgroundColor: '#a8a8a8',
                        transform: 'rotate(-4deg) translateY(-50%)',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            animation: 'scrollTapeRight 50s linear infinite',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Inter Tight', sans-serif",
                                fontWeight: 800,
                                fontSize: '13px',
                                color: '#000000',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            {tapeText}
                        </span>
                        <span
                            style={{
                                fontFamily: "'Inter Tight', sans-serif",
                                fontWeight: 800,
                                fontSize: '13px',
                                color: '#000000',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            {tapeText}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
