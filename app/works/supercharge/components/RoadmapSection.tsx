"use client";

import { motion } from "framer-motion";

export function RoadmapSection() {
    return (
        <section className="w-full bg-white/[0.02] border-y border-white/5 py-32 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-24">

                <div className="space-y-6 text-left max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Roadmap</h2>
                    <div className="h-1 w-20 bg-violet-500/40 rounded-full mt-4" />
                    <p className="text-lg text-white/70 leading-relaxed font-light mt-8">
                        Supercharge launched with PML v2.0 — the most complete version of the protocol to date. Here's where it goes next.
                    </p>
                </div>

                <div className="w-full overflow-x-auto pb-12 pt-16 no-scrollbar">
                    <div className="min-w-[800px] relative px-8">

                        <div className="absolute top-[80px] left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full" />

                        <motion.div
                            className="absolute top-[80px] left-0 w-1/2 h-1 bg-violet-500 -translate-y-1/2 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        <div className="grid grid-cols-4 gap-8 relative z-10 w-full pt-[72px]">

                            <Milestone
                                phase="Phase 1" title="MVP"
                                items={["Auth & Onboarding", "BYOK Key Setup", "Supabase Read/Write"]}
                                isDone={true}
                            />

                            <Milestone
                                phase="Phase 2" title="Polish"
                                items={["Memory Explorer", "Streaming Responses", "Mobile Optimisation"]}
                                isDone={true}
                            />

                            <Milestone
                                phase="Phase 3" title="Power"
                                items={["Memory Health Metrics", "Export/Import Tools", "PWA Offline Mode"]}
                                isDone={false}
                            />

                            <Milestone
                                phase="Phase 4" title="Scale"
                                items={["Team/Shared Contexts", "Analytics Dashboard", "Plugin API"]}
                                isDone={false}
                            />
                        </div>

                    </div>
                </div>


                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold flex items-center gap-3">
                            <span className="text-violet-400 font-mono text-sm leading-none border border-violet-500/30 px-2 py-1 rounded bg-violet-500/10">v2.5</span>
                            Q2 2026
                        </h4>
                        <p className="text-white/60 font-light text-sm leading-relaxed">
                            The <code>MERGE</code> command ships, allowing the system to automatically consolidate duplicate or redundant nodes. Multi-agent shared context support arrives — multiple AI agents sharing the same memory graph. Bulk memory import from plain text, notes, or resumes. A memory health score surfaces in the Explorer.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold flex items-center gap-3 opacity-60">
                            <span className="text-white/40 font-mono text-sm leading-none border border-white/20 px-2 py-1 rounded">v3.0</span>
                            Q4 2026
                        </h4>
                        <p className="text-white/50 font-light text-sm leading-relaxed">
                            An optional inference rules engine for non-LLM backends. Memory graph visualisation — a live, interactive view of your entire knowledge graph as a visual network. Semantic search over your entire memory store using vector embeddings. Inter-user memory sharing with a full permission model.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

function Milestone({ phase, title, items, isDone }: { phase: string, title: string, items: string[], isDone: boolean }) {
    return (
        <div className="flex flex-col items-center group">

            <div className={`w-4 h-4 rounded-full border-2 bg-[#0a0a0c] relative z-20 
                  ${isDone ? 'border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]' : 'border-white/20'}
              `} />


            <div className={`w-full max-w-[200px] p-4 rounded-xl border transition-all duration-300 relative mt-8
                  ${isDone ? 'bg-violet-900/10 border-violet-500/30 group-hover:bg-violet-900/20' : 'bg-white/5 border-white/10 opacity-60 group-hover:opacity-100'}
             `}>
                <div className="absolute -top-3 left-4 px-2 py-0.5 rounded bg-black border border-white/10 text-[10px] uppercase tracking-widest text-white/50 z-30">
                    {phase}
                </div>
                <h3 className="text-lg font-bold mt-2 text-white">{title}</h3>
                <ul className="mt-3 space-y-2">
                    {items.map((item, i) => (
                        <li key={i} className="text-xs text-white/50 flex items-start gap-2">
                            <span className={`w-1 h-1 rounded-full shrink-0 mt-1.5 ${isDone ? 'bg-violet-400' : 'bg-white/20'}`} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

