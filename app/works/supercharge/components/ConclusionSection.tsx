"use client";

import { motion } from "framer-motion";
import { Zap, ExternalLink } from "lucide-react";
import Link from "next/link";

export function ConclusionSection() {
    return (
        <section className="w-full pt-32 pb-16 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto space-y-32 relative z-10 w-full">

                <div className="space-y-6 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why This Matters</h2>
                    <div className="h-1 w-20 bg-violet-500/40 rounded-full mx-auto mt-4" />

                    <div className="text-xl md:text-2xl text-white/60 leading-relaxed font-light space-y-8 mt-12">
                        <p>
                            The tools we use to think shape how we think. Every professional who works with AI daily is currently operating with a fundamentally broken memory model — one where every session erases everything that came before.
                        </p>
                        <p>
                            Supercharge is a bet that memory isn't a nice-to-have feature. It's the difference between a powerful tool and a personal one. <strong className="text-white font-medium">Between an AI that assists you and an AI that knows you.</strong>
                        </p>
                        <p>
                            PML is how we encode that difference. And because it's plain text, because it's portable, because it's yours — it can follow you anywhere.
                        </p>
                    </div>
                </div>

                {/* Live Preview Image */}
                <div className="w-full mt-24 flex flex-col items-center gap-6 relative z-30">
                    <a href="https://ai-supercharge.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-[4/3] md:aspect-[21/11] rounded-[2rem] border border-violet-500/30 overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] group hover:shadow-[0_0_80px_rgba(139,92,246,0.3)] transition-all duration-500 bg-[#07070a] block">
                        <img
                            src="/supercharge-app-preview.png"
                            alt="Supercharge Live Preview"
                            className="w-full h-full object-cover absolute top-[32px] left-0 right-0 bottom-0 z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ height: 'calc(100% - 32px)' }}
                        />
                        {/* Top bar overlay for effect */}
                        <div className="absolute top-0 left-0 w-full h-[32px] bg-[#0a0a0f] border-b border-white/10 z-20 flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            <div className="flex-1" />
                            <div className="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors flex items-center gap-2 group-hover:text-white/80">
                                ai-supercharge.vercel.app <ExternalLink size={10} />
                            </div>
                        </div>
                    </a>
                </div>

                {/* Footer Notes */}
                <div className="text-center pt-24 border-t border-white/5 space-y-8 max-w-2xl mx-auto">
                    <p className="text-sm text-white/40 italic font-light">
                        Supercharge is powered by PML v2.0. Built with React, TypeScript, Supabase, and the conviction that your AI should know who you are.
                    </p>

                    <div className="flex justify-center gap-6 pt-8">
                        <Link href="/works" className="px-6 py-3 border border-white/10 hover:border-white/30 rounded-full transition-colors text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white bg-white/5">
                            View More Works
                        </Link>
                        <a href="https://github.com/ayanmukherjee-collab" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black rounded-full transition-colors text-sm font-bold uppercase tracking-widest hover:bg-white/90">
                            Back to Home
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
