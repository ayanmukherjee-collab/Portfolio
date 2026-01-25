import { GlassSection } from "@/components/GlassSection";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const works = [
  { id: 1, title: "Project Interface 1", category: "Next.js • System Design" },
  { id: 2, title: "Project Interface 2", category: "WebGL • Experience" },
  { id: 3, title: "Project Interface 3", category: "React • Dashboard" },
];

const labs = [
  { id: 1, title: "Stenography", category: "Cryptography • Security", href: "/labs/stenography", customThumbnail: "steganography" },
  { id: 2, title: "CLI-AI", category: "API Design • DevX", href: "/labs/cli-ai", customThumbnail: "terminal" },
  { id: 3, title: "Fluid Simulation", category: "WebGL • GLSL" },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">

      <GlassSection
        id="identity"
        label=""
        title="IDENTITY"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 h-full p-2">

          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6 h-full">

            <div className="w-full aspect-[4/3] lg:aspect-auto lg:flex-1 rounded-2xl bg-white/5 backdrop-blur-[18px] border border-white/10 relative overflow-hidden group flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/my pfp.jpg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-6 left-6 z-20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 duration-1000"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>

              <div className="absolute bottom-6 left-6 z-10 p-2">
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/60 uppercase mb-1">01 / PROFILE</p>
                <h3 className="text-white font-bold text-lg md:text-xl">Ayan Mukherjee</h3>
              </div>
            </div>

            <div className="h-20 lg:h-24 rounded-2xl bg-white/5 backdrop-blur-[18px] border border-white/10 flex items-center justify-around px-4 hover:bg-white/[0.07] transition-colors flex-shrink-0">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/ayan-vfx", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/simply_ayann", label: "Twitter" },
                { icon: Instagram, href: "https://www.instagram.com/simply.ayannn", label: "Instagram" },
                { icon: Github, href: "https://github.com/ayanmukherjee-collab", label: "GitHub" },
              ].map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <item.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4 lg:gap-6 h-full min-h-0">

            <div className="flex-1 rounded-2xl bg-white/[0.015] backdrop-blur-[18px] border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.04] transition-colors relative group">
              <div>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-3xl mb-6">
                  What I do
                </p>
                <p className="text-sm md:text-lg text-white/50 leading-relaxed max-w-3xl">
                  I build high-fidelity digital interfaces with a focus on motion, depth, and interaction. My work explores the space between utility and atmosphere, creating systems that feel less like simple websites and more like persistent, immersive environments. I specialize in the React ecosystem, leveraging WebGL and advanced CSS to push the boundaries of what is possible on the web.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Core Technologies</p>
                <div className="flex gap-2 md:gap-3 flex-wrap opacity-60">
                  {["TypeScript", "React", "Next.js 14", "Tailwind CSS", "Framer Motion", "WebGL"].map((tech) => (
                    <span key={tech} className="text-[10px] md:text-xs font-mono border border-white/10 bg-white/5 px-2 py-1 md:px-3 md:py-1.5 rounded-md hover:bg-white/10 cursor-default transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a href="#work" className="hidden lg:flex h-32 md:h-auto flex-shrink-0 lg:flex-1 rounded-2xl bg-white/5 backdrop-blur-[24px] border border-white/10 p-6 md:p-8 items-center justify-between group hover:bg-white/[0.07] hover:border-white/20 transition-all cursor-pointer relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '32px 32px'
                }}
              />

              <div className="relative z-10 flex flex-col gap-1">
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">02 / WORK</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform">SELECTED WORKS</h3>
              </div>

              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/40 group-hover:rotate-45 transition-all">
                <ArrowUpRight size={20} className="md:w-6 md:h-6" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>
        </div>
      </GlassSection>

      <GlassSection
        id="work"
        label="02 / Portfolio"
        title={
          <>
            <span className="lg:hidden">WORKS</span>
            <span className="hidden lg:inline">WORKS</span>
          </>
        }
      >
        <div className="w-full flex flex-col items-center gap-8">
          <ProjectCarousel items={works} />
          <a href="/works" className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 text-sm font-medium tracking-widest uppercase">
            View All Work
          </a>
        </div>
      </GlassSection>

      <GlassSection
        id="process"
        label="03 / Approach"
        title="PROCESS"
      >
        <div className="space-y-12">
          {[
            { step: "01", title: "Deconstruction", desc: "Breaking down requirements into atomic conceptual units." },
            { step: "02", title: "Structure", desc: "Establishing the rigid spine of the application state and layout." },
            { step: "03", title: "Atmosphere", desc: "Layering depth, light, and motion to breathe life into the grid." }
          ].map((item) => (
            <div key={item.step} className="flex flex-col border-l border-white/10 pl-8 py-2">
              <span className="text-xs font-mono text-white/30 mb-2">{item.step}</span>
              <h4 className="text-xl font-medium text-white/80 mb-2">{item.title}</h4>
              <p className="text-white/40 max-w-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </GlassSection>

      <GlassSection
        id="experiments"
        label="04 / Labs"
        title="LABS"
      >
        <div className="w-full flex flex-col items-center gap-8">
          <ProjectCarousel items={labs} />
          <a href="/labs" className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 text-sm font-medium tracking-widest uppercase">
            View All Labs
          </a>
        </div>
      </GlassSection>

      <GlassSection
        id="connect"
        label="05 / Signal"
        title="CONNECT"
      >
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 w-full h-full">
          {[
            { label: "Email", href: "mailto:ayanmukherjee.official@gmail.com", icon: ArrowUpRight, span: "col-span-2 md:col-span-2" },
            { label: "Twitter / X", href: "https://x.com/simply_ayann", icon: Twitter, span: "col-span-1 md:col-span-2" },
            { label: "GitHub", href: "https://github.com/ayanmukherjee-collab", icon: Github, span: "col-span-1 md:col-span-2" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ayan-vfx", icon: Linkedin, span: "col-span-1 md:col-span-3" },
            { label: "Instagram", href: "https://www.instagram.com/simply.ayannn", icon: Instagram, span: "col-span-1 md:col-span-3" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                        ${item.span} group relative h-full min-h-[160px] rounded-2xl bg-white/5 border border-white/10 
                        p-6 md:p-8 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden
                    `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex justify-between items-start">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <item.icon size={24} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <ArrowUpRight size={20} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white/40 group-hover:text-white transition-colors">{item.label}</h3>
              </div>
            </a>
          ))}
        </div>
      </GlassSection>
    </main>
  );
}
