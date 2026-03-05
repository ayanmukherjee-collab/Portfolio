import { GlassSection } from "@/components/GlassSection";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, Mail, Globe } from "lucide-react";

const works = [
  { id: 1, title: "CLI-AI", category: "API Design • DevX", href: "/works/cli-ai", customThumbnail: "terminal" },
  { id: 2, title: "Supercharge", category: "AI Web Application", href: "/works/supercharge" },
  { id: 3, title: "Campus Connect", category: "Navigation Engine", href: "/works/campus-connect" },
  { id: 4, title: "Stenography", category: "Cryptography • Security", href: "/works/stenography", customThumbnail: "steganography" },
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
                  AI Systems Builder and Full-Stack Developer with proven experience designing structured memory architectures, graph-based navigation engines, and production-ready AI tooling. Skilled in prompt engineering, AI API integration, PWA architecture, and scalable context modeling, with a track record of delivering working prototypes and reducing redundancy through novel abstraction systems.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Core Technologies</p>
                <div className="flex gap-2 md:gap-3 flex-wrap opacity-60">
                  {["Python", "JavaScript", "C++", "React", "PyTorch", "Prompt Engineering", "System Design"].map((tech) => (
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
        id="experience"
        label="03 / Journey"
        title="EXPERIENCE"
      >
        <div className="space-y-12 w-full">
          {[
            {
              role: "AI/ML Lead",
              company: "Campus Connect — GDG Hackathon Ranchi",
              desc: [
                "Delivered a fully functional offline indoor navigation engine within hackathon time constraints, enabling route computation across multi-floor buildings with zero GPS dependency.",
                "Reduced manual mapping effort by ~60% by designing an ML pipeline that automatically parsed floor plan images into navigable graph nodes.",
                "Implemented A* pathfinding on a graph-converted floor plan, achieving accurate multi-step route resolution across complex campus layouts.",
                "Shipped a full PWA prototype supporting low-connectivity environments in collaboration with a cross-functional team."
              ]
            },
            {
              role: "Solo Developer",
              company: "Supercharge — BYOK AI Web Application",
              desc: [
                "Designed PML (Personal Model Language), a custom context encoding system that reduced prompt redundancy by structuring AI memory into modular, reusable injection blocks.",
                "Built a React + Vite web interface enabling dynamic AI workflows via user-provided API keys, supporting full context customization without backend overhead.",
                "Architected a scalable context abstraction layer that improved AI response consistency and cut context rebuild time per session.",
                "Implemented a structured parsing engine for contextual retrieval, enabling deterministic memory injection across multi-turn AI conversations."
              ]
            },
            {
              role: "Solo Developer",
              company: "Custom CLI-Based AI Assistant",
              desc: [
                "Built a terminal-based AI assistant that unified developer command workflows into a single abstraction layer, reducing context-switching overhead for common tasks.",
                "Designed a structured I/O pipeline to minimize response latency and enforce execution clarity across multi-step AI interactions.",
                "Architected a modular command system enabling extensible AI capabilities without modifying the core execution engine."
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col border-l border-white/10 pl-8 py-2 relative">
              <div className="absolute w-2 h-2 rounded-full bg-white/20 -left-[5px] top-2"></div>
              <span className="text-xs font-mono text-white/40 mb-2 uppercase tracking-widest">{item.company}</span>
              <h4 className="text-xl font-medium text-white/80 mb-4">{item.role}</h4>
              <div className="space-y-2">
                {item.desc.map((line, i) => (
                  <p key={i} className="text-white/40 text-sm md:text-base leading-relaxed">• {line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassSection>

      <GlassSection
        id="connect"
        label="04 / Signal"
        title="CONNECT"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full">
          {/* Main CTA Card */}
          <a
            href="mailto:ayanmukherjee.official@gmail.com"
            className="md:col-span-8 group relative rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 md:min-h-[240px] flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex justify-between items-start mb-12 md:mb-0">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs md:text-sm font-medium text-white/60 group-hover:text-white transition-colors">Available for opportunities</span>
              </div>
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors hidden md:block">
                <ArrowUpRight size={20} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <ArrowUpRight size={20} className="md:hidden text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <div className="relative z-10 mt-8 md:mt-0">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 group-hover:text-white transition-colors mb-2 tracking-tight">
                Let's build together
              </h3>
              <p className="text-white/40 text-sm md:text-base font-medium">ayanmukherjee.official@gmail.com</p>
            </div>
          </a>

          {/* Location / Status Card */}
          <div className="md:col-span-4 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center relative justify-center overflow-hidden group min-h-[180px] md:min-h-[240px]">
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <Globe className="w-12 h-12 text-white/20 group-hover:text-white/40 group-hover:rotate-[15deg] transition-all duration-700 mb-4" strokeWidth={1.5} />
            <div className="text-center relative z-10 flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-white/80 tracking-wide">Ranchi, India</h4>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest">IST (UTC+5:30)</p>
            </div>
          </div>

          {/* Social Links Cards */}
          {[
            { label: "Twitter / X", handle: "@simply_ayann", href: "https://x.com/simply_ayann", icon: Twitter, span: "col-span-1 md:col-span-3" },
            { label: "GitHub", handle: "ayanmukherjee-collab", href: "https://github.com/ayanmukherjee-collab", icon: Github, span: "col-span-1 md:col-span-3" },
            { label: "LinkedIn", handle: "ayan-vfx", href: "https://www.linkedin.com/in/ayan-vfx", icon: Linkedin, span: "col-span-1 md:col-span-3" },
            { label: "Instagram", handle: "@simply.ayannn", href: "https://www.instagram.com/simply.ayannn", icon: Instagram, span: "col-span-1 md:col-span-3" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.span} group relative rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden min-h-[130px] md:min-h-[160px]`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex justify-between items-start mb-auto">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <item.icon size={20} className="text-white/50 group-hover:text-white transition-colors stroke-[1.5]" />
                </div>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className="relative z-10 mt-6 md:mt-8">
                <h4 className="text-sm md:text-base font-semibold text-white/80 group-hover:text-white transition-colors">{item.label}</h4>
                <p className="text-[10px] md:text-xs text-white/40 mt-1 truncate font-medium">{item.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </GlassSection>
    </main>
  );
}
