"use client";

import Image from "next/image";
import { Check, Github, Linkedin, Mail, MapPin, Phone, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EMAIL = "ayanmukherjee.official@gmail.com";
const PHONE = "+91 62061 15536";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default function ConnectSection() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlePhoneCopy = async () => {
    try {
      await copyText(PHONE);
      setCopied(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const actionButtonClass =
    "group relative flex items-center justify-center text-white/50 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.4] hover:text-white origin-bottom";

  return (
    <section
      id="connect"
      className="relative mx-auto mb-24 flex w-full justify-center px-6 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-[120px]" />

      <div className="relative z-10 flex w-full max-w-[1080px] flex-col items-center gap-12">
        <div className="flex flex-col gap-3 text-center">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-white/20"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              04 / Signal
            </span>
            <span className="h-[1px] w-8 bg-white/20"></span>
          </div>
          <h2 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-6xl">
            Connect
          </h2>
        </div>

        <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0d]/80 p-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/5 backdrop-blur-3xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-40" />

          <div className="relative flex w-full flex-col gap-3 sm:gap-4 md:grid md:grid-cols-[minmax(280px,0.9fr)_1.1fr] md:items-stretch">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-white/5">
              <Image
                src="/og-image.png"
                alt="Profile"
                fill
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1200px) 32vw, 420px"
                className="object-cover object-[56%_center]"
              />
            </div>

            <div className="relative flex min-w-0 flex-1 flex-col justify-start rounded-[1.5rem] bg-gradient-to-br from-transparent to-white/[0.02] p-5 sm:p-6 md:justify-center md:p-8 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />

              {/* Decorative Subtle Gear (Desktop only) */}
              <Settings
                className="pointer-events-none absolute -bottom-32 -right-32 hidden md:block text-white opacity-[0.03] animate-[spin_60s_linear_infinite]"
                size={420}
                strokeWidth={0.75}
              />

              <div className="relative z-10 flex h-full flex-col justify-start">
                <div className="space-y-3 md:max-w-[34rem] md:space-y-4">
                  <h3 className="bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-[clamp(1.9rem,4vw,3.6rem)] font-bold tracking-tight text-transparent leading-[0.95]">
                    Let&apos;s build together
                  </h3>
                  <p className="max-w-[34rem] text-[clamp(0.98rem,1.25vw,1.15rem)] leading-relaxed text-white/65">
                    Currently open for new opportunities, freelance projects, and exciting collaborations.
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex flex-col gap-4 border-t border-white/10 pt-4 md:mt-8 md:max-w-[34rem] md:gap-5 md:pt-5">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45 md:text-xs">
                    <MapPin size={13} className="shrink-0 md:h-3.5 md:w-3.5" />
                    <span className="truncate">Ranchi, India</span>
                    <span className="hidden text-white/25 sm:inline">IST (UTC+5:30)</span>
                  </div>

                  <div className="flex items-end gap-5 md:gap-7 h-10 mt-2">
                    <a
                      href={`mailto:${EMAIL}`}
                      aria-label="Email Ayan"
                      className={actionButtonClass}
                    >
                      <Mail size={24} strokeWidth={1.5} />
                      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-75 whitespace-nowrap rounded-full border border-white/10 bg-[#0b0b0d]/90 px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest text-white/90 opacity-0 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[0.7] group-hover:opacity-100">
                        Email
                      </span>
                    </a>

                    <button
                      type="button"
                      aria-label="Copy phone number"
                      onClick={handlePhoneCopy}
                      className={actionButtonClass}
                    >
                      {copied ? (
                        <Check size={24} strokeWidth={2} className="text-green-400" />
                      ) : (
                        <Phone size={24} strokeWidth={1.5} />
                      )}
                      <span className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-75 whitespace-nowrap rounded-full border border-white/10 ${copied ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-[#0b0b0d]/90 text-white/90'} px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest opacity-0 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[0.7] group-hover:opacity-100`}>
                        {copied ? "Copied" : "Phone"}
                      </span>
                    </button>

                    <a
                      href="https://github.com/ayanmukherjee-collab"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={actionButtonClass}
                    >
                      <Github size={24} strokeWidth={1.5} />
                      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-75 whitespace-nowrap rounded-full border border-white/10 bg-[#0b0b0d]/90 px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest text-white/90 opacity-0 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[0.7] group-hover:opacity-100">
                        GitHub
                      </span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ayan-vfx"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={actionButtonClass}
                    >
                      <Linkedin size={24} strokeWidth={1.5} />
                      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-75 whitespace-nowrap rounded-full border border-white/10 bg-[#0b0b0d]/90 px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest text-white/90 opacity-0 backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[0.7] group-hover:opacity-100">
                        LinkedIn
                      </span>
                    </a>
                  </div>

                  <span className="min-h-[1rem] text-[11px] font-medium uppercase tracking-[0.18em] text-white/35 md:text-xs">
                    {copied ? "Phone number copied" : " "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
