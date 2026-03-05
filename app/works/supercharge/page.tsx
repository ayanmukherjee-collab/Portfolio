"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroSection } from "./components/HeroSection";
import { ByokSection } from "./components/ByokSection";
import { PmlSection } from "./components/PmlSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { CommandsSection } from "./components/CommandsSection";
import { EngineeringSection } from "./components/EngineeringSection";
import { ExplorerSection } from "./components/ExplorerSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ConclusionSection } from "./components/ConclusionSection";

export default function SuperchargePage() {
    return (
        <main className="min-h-screen bg-[#0b0b0d] text-white selection:bg-violet-500/30 overflow-hidden">


            <Link href="/works" className="fixed bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-6 md:left-6 z-50 flex items-center gap-2 text-white/40 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-wider">Back to Works</span>
            </Link>

            <HeroSection />
            <ByokSection />
            <PmlSection />
            <ArchitectureSection />
            <CommandsSection />
            <EngineeringSection />
            <ExplorerSection />
            <RoadmapSection />
            <ConclusionSection />

        </main>
    );
}
