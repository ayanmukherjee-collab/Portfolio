"use client";

import SelectedWorks from "@/components/SelectedWorks";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, Mail, Globe, ExternalLink, MapPin, Download } from "lucide-react";
import { SiPython, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiNodedotjs } from "react-icons/si";
import { useState, useEffect, useRef } from "react";


export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">

      {/* --- HERO / IDENTITY SECTION --- */}
      <Hero />

      {/* --- SKILLS / TECH STACK MARQUEE --- */}
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
                  <SiVite size={24} />
                  <span className="text-lg md:text-xl font-bold tracking-tight">Vite</span>
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

      {/* --- SELECTED WORKS SECTION --- */}
      <section id="work" className="w-full">
        <SelectedWorks />
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="w-full overflow-hidden">
        <Experience />
      </section>

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
