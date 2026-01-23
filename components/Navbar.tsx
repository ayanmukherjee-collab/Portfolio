"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { id: "identity", label: "Identity" },
    { id: "work", label: "Work" },
    { id: "process", label: "Process" },
    { id: "experiments", label: "Labs" },
    { id: "connect", label: "Connect" },
];

export function Navbar() {
    const [activeId, setActiveId] = useState("identity");
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        if (!isHome) return; // Only track scroll on home page

        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));

            let currentActiveId = activeId;
            let minDistance = Infinity;

            sections.forEach(section => {
                if (!section) return;

                const rect = section.getBoundingClientRect();
                // Calculate distance from center of viewport to center of section
                const sectionCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = Math.abs(viewportCenter - sectionCenter);

                // Standard check: Is it reasonably on screen?
                const isOnScreen = rect.top < window.innerHeight / 2 + 100 && rect.bottom > window.innerHeight / 2 - 100;

                if (distance < minDistance && isOnScreen) {
                    minDistance = distance;
                    currentActiveId = section.id;
                }
            });

            // Update if changed
            setActiveId(prev => (prev !== currentActiveId ? currentActiveId : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]); // Re-run effect if isHome changes (though logic mainly handles mount/unmount)

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        // If not home, standard Link navigation to /#id occurs
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className={twMerge(
                "flex items-center gap-1 p-1.5 rounded-full",
                "bg-white/[0.03] backdrop-blur-[12px] border border-white/10",
                "shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)]"
            )}>
                {navItems.map((item) => {
                    // If not home, we don't really have an "active" section in the main nav sense, 
                    // or we could possibly highlight "Work" if on /works, but simpler to just show none proper active or stick to default.
                    // Let's keep active state only visible on Home for clarity, or just rely on activeId (which defaults to 'identity' or last known).
                    const isActive = isHome && activeId === item.id;

                    return (
                        <Link
                            key={item.id}
                            href={`/#${item.id}`}
                            onClick={(e) => handleNavClick(e, item.id)}
                            className={twMerge(
                                "px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-500",
                                "hover:text-white hover:bg-white/5",
                                isActive
                                    ? "text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10"
                                    : "text-white/40 border border-transparent"
                            )}
                        >
                            <span className={isActive ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : ""}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
