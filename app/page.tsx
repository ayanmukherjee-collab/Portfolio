"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const SelectedWorks = dynamic(() => import("@/components/SelectedWorks"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
import { Github, Linkedin, ArrowUpRight, Mail, Globe, ExternalLink, MapPin, Download, Phone } from "lucide-react";
import { SiPython, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiSupabase, SiFlutter, SiNodedotjs } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { preload } from "react-dom";

export default function Home() {
  // Emit resource hints during SSR & initial render for basic visuals
  for (let i = 1; i <= 5; i++) {
    const indexStr = i.toString().padStart(4, "0");
    preload(`/gear/${indexStr}.webp`, { as: 'image', fetchPriority: 'high' });
  }

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
      <section id="work" className="w-full">
        <SelectedWorks />
      </section>

      <section id="experience" className="w-full overflow-hidden">
        <Experience />
      </section>

      <section
        id="connect"
        className="w-full flex justify-center px-6 py-24 mx-auto mb-24 relative"
      >
        {/* Background glow for the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-[1000px] flex flex-col items-center gap-12 relative z-10">
          <div className="flex flex-col gap-3 text-center">
            <div className="inline-flex items-center gap-2 justify-center">
              <span className="h-[1px] w-8 bg-white/20"></span>
              <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">04 / Signal</span>
              <span className="h-[1px] w-8 bg-white/20"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent tracking-tighter">
              Connect
            </h2>
          </div>

          {/* Contact Card with Map & Image */}
          <div className="w-full rounded-[2rem] bg-[#0b0b0d]/80 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/5 p-3 relative overflow-hidden flex flex-col md:flex-row items-stretch group/card">

            {/* Subtle animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Left Image Side */}
            <div className="w-full md:w-[45%] relative min-h-[400px] rounded-[1.5rem] md:rounded-l-[1.5rem] md:rounded-r-2xl overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/og-image.png"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
              />


              {/* Status Indicator inside Image */}
              <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 bg-[#0b0b0d]/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/15 shadow-xl">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                </span>
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">AVAILABLE FOR WORK</span>
              </div>
            </div>

            {/* Right Form/Details Side */}
            <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center relative bg-gradient-to-br from-transparent to-white/[0.02]">
              <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col items-start gap-10">
                <div className="space-y-3">
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent tracking-tight">
                    Let&apos;s build together
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
                    Currently open for new opportunities, freelance projects, and exciting collaborations.
                  </p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  {/* Email */}
                  <a href="mailto:ayanmukherjee.official@gmail.com" className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-all duration-300 group/mail w-full">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/mail:bg-white/20 group-hover/mail:scale-110 transition-all duration-300 shadow-inner">
                      <Mail size={20} className="text-white/60 group-hover/mail:text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Email directly</span>
                      <span className="text-white/80 group-hover/mail:text-white font-medium text-sm md:text-base">ayanmukherjee.official@gmail.com</span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+916206115536" className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-all duration-300 group/phone w-full">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/phone:bg-white/20 group-hover/phone:scale-110 transition-all duration-300 shadow-inner">
                      <Phone size={20} className="text-white/60 group-hover/phone:text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Call directly</span>
                      <span className="text-white/80 group-hover/phone:text-white font-medium text-sm md:text-base">+91 62061 15536</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 w-full">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shadow-inner">
                      <MapPin size={20} className="text-white/60" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Location</span>
                      <span className="text-white/80 font-medium text-sm md:text-base">Ranchi, India <span className="text-white/40 ml-1 font-normal font-mono">IST (UTC+5:30)</span></span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-5 pt-6 border-t border-white/10">
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">Social Presence</span>
                  <div className="flex items-center gap-4">
                    {[
                      { icon: Github, href: "https://github.com/ayanmukherjee-collab", label: "GitHub" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/ayan-vfx", label: "LinkedIn" },
                    ].map((item) => (
                      <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden relative group/social">
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                        <item.icon size={22} strokeWidth={1.5} className="relative z-10 group-hover/social:scale-110 transition-transform duration-300" />
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
