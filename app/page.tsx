import Hero from "@/components/Hero";
import DeferredSelectedWorks from "@/components/DeferredSelectedWorks";
import DeferredExperience from "@/components/DeferredExperience";
import ConnectSection from "@/components/ConnectSection";
import { SiPython, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiSupabase, SiFlutter, SiNodedotjs } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">

      {/* Identity Section */}
      <Hero />

      <section
        id="skills"
        className="relative z-10 w-full py-6 md:py-16 md:pt-24 md:pb-24 flex flex-col items-center justify-center overflow-hidden rounded-b-[2.5rem] md:rounded-b-[8rem] bg-[#0b0b0d] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
      >
        {/* Marquee container with faded edges restricted to content width */}
        <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0b0b0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0b0b0d] to-transparent z-10 pointer-events-none" />

          {/* Single Row — scrolls left */}
          <div className="marquee-row-left flex items-center py-4">
            {[...Array(3)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex gap-12 md:gap-24 shrink-0 pr-12 md:pr-24 items-center">
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <SiPython size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">Python</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <SiTypescript size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">TypeScript</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <SiReact size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">React</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <SiNextdotjs size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">Next.js</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <SiTailwindcss size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">Tailwind</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <SiSupabase size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">Supabase</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <SiFlutter size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">Flutter</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300">
                  <SiNodedotjs size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">Node.js</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <DeferredSelectedWorks />

      <DeferredExperience />

      <ConnectSection />
    </main >
  );
}
