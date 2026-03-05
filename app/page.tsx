"use client";

import { ProjectCarousel, SteganographyCarouselAnimation, TerminalCarouselAnimation } from "@/components/ProjectCarousel";
import SplineScene from "@/components/SplineScene";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, Mail, Globe, ExternalLink, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const works = [
  {
    id: 1,
    title: "CLI-AI",
    category: "API Design • DevX",
    href: "/works/cli-ai",
    image: "/cli-ai.png",
    problem: "Most AI tools require complex setup (installing CLIs, runtimes, configuring API keys) before generating code.",
    tech: ["Python", "API Design", "Bash"],
    bullets: [
      "Turns AI code generation into a single curl download command.",
      "Eliminates client-side setup by handling language inference and prompt execution entirely on the server.",
      "Ensures universal accessibility across fresh laptops, shared lab computers, or remote SSH environments."
    ],
    links: { demo: "https://cli-ayan-ai.vercel.app/api/ask?q=hello+world&filename=hello.py", repo: "https://github.com/ayanmukherjee-collab/CLI-AI" }
  },
  {
    id: 2,
    title: "Supercharge",
    category: "AI Web Application",
    href: "/works/supercharge",
    image: "/supercharge-app-preview.png",
    problem: "Standard AI prompts are redundant and difficult to manage across multi-turn sessions.",
    tech: ["React", "Vite", "PML", "AI APIs"],
    bullets: [
      "Designed Personal Model Language (PML) to structure AI memory into modular, reusable injection blocks.",
      "Built a web interface enabling dynamic AI workflows via BYOK (Bring Your Own Key) without backend overhead.",
      "Architected a scalable context abstraction layer improving consistency and rebuild time."
    ],
    links: { demo: "https://ai-supercharge.vercel.app/", repo: "https://github.com/ayanmukherjee-collab/Supercharge" }
  },
  {
    id: 3,
    title: "Campus Connect",
    category: "Navigation Engine",
    href: "/works/campus-connect",
    image: "/campus-connect-thumb.jpg", // placeholder
    problem: "GPS fails indoors, making campus navigation difficult without manual mapping and constant connectivity.",
    tech: ["Python", "A* Pathfinding", "PWA", "ML"],
    bullets: [
      "Delivered a fully functional offline indoor navigation engine reducing manual mapping effort by ~60%.",
      "Designed an ML pipeline to automatically parse floor plan images into navigable graph nodes.",
      "Shipped a PWA prototype supporting low-connectivity environments during a GDG Hackathon."
    ],
    links: { demo: "#", repo: "https://github.com/ayanmukherjee-collab/Code-Reapers" }
  },
  {
    id: 4,
    title: "Steganography",
    category: "Cryptography • Security",
    href: "/works/stenography",
    customThumbnail: "steganography",
    problem: "Secure communication flags itself as encrypted data; steganography hides the existence of the message.",
    tech: ["Cryptography", "Steganography", "Security"],
    bullets: [
      "Developed a system to securely embed encrypted messages within standard image files.",
      "Ensured zero visual degradation to the host images, escaping standard detection methods.",
      "Implemented multi-layered security protocols combining encryption and steganography."
    ],
    links: { demo: "https://stenograph-ayan.vercel.app/", repo: "https://github.com/ayanmukherjee-collab/stenograph" }
  },
];

function ProjectCard({ project }: { project: typeof works[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual / Thumbnail Side */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20">
          {project.customThumbnail === "steganography" && (
            <SteganographyCarouselAnimation isPaused={isHovered} />
          )}
          {project.customThumbnail === "terminal" && (
            <TerminalCarouselAnimation isPaused={isHovered} />
          )}
          {project.image && !project.customThumbnail && (
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231a1a1a"/><text x="50%" y="50%" font-family="monospace" font-size="24" fill="%23444" text-anchor="middle" dy=".3em">Project Preview Missing</text></svg>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>
          )}
        </div>
      </div>

      {/* Details Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-white/40 group-hover:bg-white group-hover:w-12 transition-all duration-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-white/60">
            {project.category}
          </span>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          {project.title}
        </h3>

        <p className="text-lg text-white/80 font-light mb-6 border-l-2 border-white/10 pl-4 italic">
          "{project.problem}"
        </p>

        <div className="flex gap-2 flex-wrap mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] md:text-xs font-mono border border-white/10 bg-white/[0.03] text-white/70 px-3 py-1.5 rounded-md">
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-3 mb-8">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-white/40 mt-1">▹</span>
              <span className="text-sm md:text-base text-white/60 leading-relaxed font-light">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 mt-auto">
          {project.links.demo !== "#" && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 text-sm font-semibold tracking-wide flex items-center gap-2">
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-sm font-semibold tracking-wide flex items-center gap-2">
            GitHub Repo <Github size={16} />
          </a>
          {project.href && (
            <a href={project.href} className="ml-auto text-sm font-medium text-white/40 hover:text-white transition-colors flex items-center gap-1 group/link">
              Read Case Study <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">

      {/* --- HERO / IDENTITY SECTION --- */}
      <section
        id="identity"
        className="w-full min-h-fit md:min-h-screen flex flex-col justify-center px-6 pt-48 pb-16 md:py-24 relative overflow-hidden bg-[#0b0b0d] md:bg-black"
      >

        {/* Spline Background — lazy-loaded so it never blocks the initial render */}
        <div className="absolute inset-0 z-0 hidden md:flex items-end justify-center overflow-hidden pointer-events-none">
          <div className="w-full h-[60vh] md:h-[80vh] flex justify-center pointer-events-auto transform translate-y-24 md:translate-y-32 max-w-[1000px] mx-auto">
            <SplineScene url="https://my.spline.design/aidatamodelinteraction-6mFgVxlzDoGpqy1DeeTB41XT/" />
          </div>
          {/* Overlays to blend edge */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10 opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_100%)] pointer-events-none z-10 opacity-90" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-start text-left pt-0 md:pt-16 pb-0 md:pb-32 px-0 md:px-6 pointer-events-none">

          <div className="flex flex-col max-w-4xl items-start pointer-events-auto">
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
              <span className="text-white block">Hi, I'm Ayan.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-8 max-w-3xl border-l-0 md:border-l-2 border-transparent md:border-white/10 pl-0 md:pl-6">
              A Full-Stack Developer originating structured memory architectures, graph-based navigation engines, and production-ready AI tooling. Reducing friction through novel abstraction systems.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-row flex-wrap items-center justify-start gap-4 ml-0 md:ml-6 mb-0 md:mb-10 w-full sm:w-auto">
              <a href="#work" className="px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
                View My Work <ArrowUpRight size={16} />
              </a>
              <a href="/ayan-resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
                Download Resume <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS / TECH STACK MARQUEE --- */}
      <section
        id="skills"
        className="w-full flex flex-col items-center py-16 border-t border-white/[0.05]"
      >
        <div className="w-full max-w-[1200px] px-6 flex flex-col gap-2 mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">01 / Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Tech Stack</h2>
        </div>

        {/* Marquee container with faded edges restricted to content width */}
        <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0b0b0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0b0b0d] to-transparent z-10 pointer-events-none" />

          {/* Row 1 — scrolls left */}
          <div className="marquee-row-left flex mb-4">
            {[...Array(3)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex gap-4 shrink-0 pr-4">
                {["Python", "TypeScript", "JavaScript", "C/C++", "Java", "PyTorch", "Prompt Engineering", "Context Modeling", "NumPy"].map((tech) => (
                  <span key={`${dupeIdx}-${tech}`} className="text-sm border border-white/[0.08] bg-white/[0.03] text-white/50 px-5 py-2.5 rounded-full whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="marquee-row-right flex">
            {[...Array(3)].map((_, dupeIdx) => (
              <div key={dupeIdx} className="flex gap-4 shrink-0 pr-4">
                {["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "System Design", "Git", "REST APIs", "PWA Architecture", "Custom Language Design"].map((tech) => (
                  <span key={`${dupeIdx}-${tech}`} className="text-sm border border-white/[0.08] bg-white/[0.03] text-white/50 px-5 py-2.5 rounded-full whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SELECTED WORKS SECTION --- */}
      <section
        id="work"
        className="w-full flex justify-center px-6 py-24 mx-auto border-t border-white/[0.05]"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-start gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">02 / Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Selected Works</h2>
          </div>

          <div className="w-full flex flex-col gap-24 mt-8">
            {[works[1], works[0], works[3]].map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="w-full flex justify-center mt-12 border-t border-white/[0.05] pt-12">
            <a href="/works" className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
              More Works <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section
        id="experience"
        className="w-full flex justify-center px-6 py-24 mx-auto border-t border-white/[0.05]"
      >
        <div className="w-full max-w-[800px] flex flex-col gap-12">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">03 / Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Experience</h2>
          </div>
          <div className="space-y-16 w-full">
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
              <div key={idx} className="flex flex-col border-l border-white/20 pl-8 relative ml-2 lg:ml-0 group">
                <div className="absolute w-3 h-3 rounded-full border-2 border-[#0b0b0d] bg-white/40 -left-[1.5px] top-1.5 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>

                <span className="text-xs font-mono text-white/40 mb-2 uppercase tracking-widest block">{item.company}</span>
                <h4 className="text-xl md:text-2xl font-bold text-white/90 mb-4">{item.role}</h4>
                <div className="space-y-4">
                  {item.desc.map((line, i) => (
                    <p key={i} className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* --- CONNECT SECTION (Minimal) --- */}
      <section
        id="connect"
        className="w-full flex justify-center px-6 py-24 mx-auto border-t border-white/[0.05] mb-24"
      >
        <div className="w-full max-w-[1000px] flex flex-col items-center gap-12">
          <div className="flex flex-col gap-2 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">04 / Signal</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Connect</h2>
          </div>

          {/* Contact Card with Map & Image */}
          <div className="w-full rounded-3xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] ring-1 ring-inset ring-white/10 p-2 md:p-2 relative overflow-hidden flex flex-col md:flex-row items-stretch">

            {/* Left Image Side */}
            <div className="w-full md:w-[45%] relative min-h-[350px] rounded-2xl md:rounded-l-2xl md:rounded-r-none overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/my pfp.jpg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Status Indicator inside Image */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-medium text-white/50 tracking-wider">AVAILABLE</span>
              </div>
            </div>

            {/* Right Form/Details Side */}
            <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center relative">
              <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col items-start gap-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight mb-2">
                    Let&apos;s build together
                  </h3>
                  <p className="text-white/50 text-base mt-2">
                    Currently open for new opportunities and collaborations.
                  </p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  {/* Email */}
                  <a href="mailto:ayanmukherjee.official@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-all group/mail w-full">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/mail:bg-white/10 transition-colors">
                      <Mail size={18} className="text-white/60 group-hover/mail:text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Email directly</span>
                      <span className="text-white/80 group-hover/mail:text-white font-medium text-sm md:text-base">ayanmukherjee.official@gmail.com</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] w-full">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <MapPin size={18} className="text-white/60" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Location</span>
                      <span className="text-white/80 font-medium text-sm md:text-base">Ranchi, India <span className="text-white/40 ml-1 font-normal font-mono">IST (UTC+5:30)</span></span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-4 pt-4 border-t border-white/[0.05]">
                  <span className="text-xs text-white/40 uppercase tracking-wider">Social Presence</span>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: Github, href: "https://github.com/ayanmukherjee-collab", label: "GitHub" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/ayan-vfx", label: "LinkedIn" },
                      { icon: Twitter, href: "https://x.com/simply_ayann", label: "Twitter" },
                      { icon: Instagram, href: "https://www.instagram.com/simply.ayannn", label: "Instagram" },
                    ].map((item) => (
                      <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                        <item.icon size={20} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
