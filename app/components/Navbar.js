"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
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
        <nav
            style={{
                position: 'fixed',
                top: isMobile ? '12px' : '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000
            }}
        >
            <div
                style={{
                    background: 'rgba(18, 18, 18, 0.92)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '50px',
                    padding: isMobile ? '6px 10px' : '8px 12px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                }}
            >
                <ul
                    style={{
                        display: 'flex',
                        gap: isMobile ? '4px' : '8px',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                    }}
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                style={{
                                    display: 'block',
                                    padding: isMobile ? '6px 12px' : '8px 16px',
                                    fontSize: isMobile ? '12px' : '13px',
                                    fontWeight: 500,
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    textDecoration: 'none',
                                    borderRadius: '25px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#ffffff';
                                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                                    e.target.style.background = 'transparent';
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
