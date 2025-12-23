"use client";

import { useEffect, useState } from "react";

export default function ProjectsSection() {
    const [mounted, setMounted] = useState(false);
    const [isMobileState, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mobile = mounted && isMobileState;

    return (
        <section
            id="projects"
            className="flex flex-col justify-start items-center px-5 pb-16 relative overflow-hidden"
            style={{
                backgroundColor: '#000000',
                minHeight: '300vh',
                paddingTop: mobile ? '45px' : '96px',
            }}
        >
            <h1
                className="font-grotesk font-black text-6xl md:text-9xl text-text mb-6"
                style={{ position: 'relative', zIndex: 1 }}
            >
                PROJECTS
            </h1>
        </section>
    );
}
