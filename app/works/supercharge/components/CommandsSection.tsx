"use client";

import { motion } from "framer-motion";
import { Plus, RefreshCcw, Layers, Trash2, Search, Link2, GitMerge, Zap, SquareDashed } from "lucide-react";

export function CommandsSection() {
    return (
        <section className="w-full py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-16">

                <div className="space-y-6 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Command Set</h2>
                    <div className="h-1 w-20 bg-violet-500/40 rounded-full" />
                    <div className="text-lg text-white/70 leading-relaxed font-light space-y-6 mt-8">
                        <p>
                            PML isn't just a storage format — it's a full command language. Every interaction with your memory store goes through one of nine commands.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CommandCard
                        cmd="STORE"
                        desc="Creates a new node. Fails silently if node already exists."
                        icon={<Plus size={24} />}
                        color="border-teal-500/30 hover:border-teal-500/80 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
                        textColor="text-teal-400"
                    />
                    <CommandCard
                        cmd="UPDATE"
                        desc="Destructively overwrites. Use when absolute facts change."
                        icon={<RefreshCcw size={24} />}
                        color="border-yellow-500/30 hover:border-yellow-500/80 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]"
                        textColor="text-yellow-400"
                    />
                    <CommandCard
                        cmd="PATCH"
                        desc="Non-destructive append. Adds a timestamped version."
                        icon={<Layers size={24} />}
                        color="border-blue-500/30 hover:border-blue-500/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                        textColor="text-blue-400"
                    />
                    <CommandCard
                        cmd="DELETE"
                        desc="Permanently removes a node (or marks as stale)."
                        icon={<Trash2 size={24} />}
                        color="border-red-500/30 hover:border-red-500/80 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                        textColor="text-red-400"
                    />
                    <CommandCard
                        cmd="RECALL"
                        desc="Queries the memory store with full filtering."
                        icon={<Search size={24} />}
                        color="border-violet-500/30 hover:border-violet-500/80 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                        textColor="text-violet-400"
                    />
                    <CommandCard
                        cmd="LINK"
                        desc="Explicit bidirectional relationship between nodes."
                        icon={<Link2 size={24} />}
                        color="border-pink-500/30 hover:border-pink-500/80 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
                        textColor="text-pink-400"
                    />
                    <CommandCard
                        cmd="MERGE"
                        desc="Combines nodes describing the same entity."
                        icon={<GitMerge size={24} />}
                        color="border-orange-500/30 hover:border-orange-500/80 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
                        textColor="text-orange-400"
                    />
                    <CommandCard
                        cmd="ON"
                        desc="Registers a conditional trigger."
                        icon={<Zap size={24} />}
                        color="border-green-500/30 hover:border-green-500/80 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
                        textColor="text-green-400"
                    />
                    <CommandCard
                        cmd="CTX"
                        desc="Opens or closes a context scope to silo memories."
                        icon={<SquareDashed size={24} />}
                        color="border-slate-500/30 hover:border-slate-500/80 hover:shadow-[0_0_30px_rgba(100,116,139,0.15)]"
                        textColor="text-slate-400"
                    />
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group">

                    <pre className="absolute -inset-4 opacity-[0.03] font-mono text-xs pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                        {`RECALL #hl:fitness.weight SINCE 2026-01-01 LIMIT 5
ON #st:mood [val:b:low] => RECALL #pf:comfort.*
STORE #wk:project [feature_z]
PATCH #ac:habit [meditation|val:15m] <t:today>
RECALL #pf:design.* SORT t:desc`}
                    </pre>
                    <div className="relative z-10 space-y-4">
                        <h4 className="text-xl font-bold">Why the LLM Does the Heavy Lifting</h4>
                        <p className="text-white/70 font-light text-sm leading-relaxed">
                            When you tell Supercharge that your sister's husband is visiting next month, the system stores those two facts. But it doesn't need a rules engine to infer that her husband is your brother-in-law — a frontier LLM handles that naturally. It doesn't need contradiction detection logic when you say you're vegetarian in January and order steak in March.
                        </p>
                        <p className="text-white/70 font-light text-sm leading-relaxed">
                            PML's job is to give the LLM the raw material it needs to reason. The LLM's job is to do the reasoning. This is what makes PML surprisingly lean — it encodes facts, not inferences.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

function CommandCard({ cmd, desc, icon, color, textColor }: { cmd: string, desc: string, icon: React.ReactNode, color: string, textColor: string }) {
    return (
        <div className={`p-6 rounded-2xl bg-black/40 border backdrop-blur-md transition-all duration-300 ${color} flex flex-col items-center text-center gap-4 group cursor-default`}>
            <div className={`${textColor} opacity-60 group-hover:opacity-100 transition-opacity mb-2 group-hover:scale-110 duration-500`}>
                {icon}
            </div>
            <div className={`font-mono text-2xl font-bold tracking-widest ${textColor}`}>{cmd}</div>
            <p className="text-white/50 text-xs font-light leading-relaxed">{desc}</p>
        </div>
    );
}

