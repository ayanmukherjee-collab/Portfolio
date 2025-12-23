"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onLoadComplete={() => setIsLoaded(true)} />
      <main style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}>
        <HeroSection />
        <ProjectsSection />

        <section id="blog" className="min-h-screen flex flex-col justify-center items-center bg-bg px-5 py-20 relative z-10">
          <h2 className="font-grotesk font-bold text-4xl md:text-6xl text-text mb-6">Blog</h2>
          <p className="text-lg text-white/60">Coming soon...</p>
        </section>

        <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-bg px-5 py-20 relative z-10">
          <h2 className="font-grotesk font-bold text-4xl md:text-6xl text-text mb-6">Contact</h2>
          <p className="text-lg text-white/60">Coming soon...</p>
        </section>
      </main>
    </>
  );
}
