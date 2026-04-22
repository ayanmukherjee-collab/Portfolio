"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { id: "identity", label: "Identity" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "connect", label: "Connect" },
];

export function Navbar() {
    const [activeId, setActiveId] = useState("identity");
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));

            let currentActiveId = activeId;
            let minDistance = Infinity;

            sections.forEach(section => {
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const sectionCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = Math.abs(viewportCenter - sectionCenter);
                const isOnScreen = rect.top < window.innerHeight / 2 + 100 && rect.bottom > window.innerHeight / 2 - 100;

                if (distance < minDistance && isOnScreen) {
                    minDistance = distance;
                    currentActiveId = section.id;
                }
            });

            setActiveId(prev => (prev !== currentActiveId ? currentActiveId : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const isHero = activeId === "identity";

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[120]">
            <div className="flex items-center gap-1">
                {navItems.map((item) => {
                    const isActive = isHome && activeId === item.id;

                    return (
                        <Link
                            key={item.id}
                            href={`/#${item.id}`}
                            onClick={(e) => handleNavClick(e, item.id)}
                            className={twMerge(
                                "px-4 py-2 text-sm font-medium tracking-wide transition-all duration-500",
                                isHero
                                    ? (isActive ? "text-black" : "text-black/40 hover:text-black")
                                    : (isActive ? "text-white" : "text-white/40 hover:text-white")
                            )}
                        >
                            <span className={isActive ? (isHero ? "drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]" : "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]") : ""}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
