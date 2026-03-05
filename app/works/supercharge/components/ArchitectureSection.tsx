"use client";

import { motion } from "framer-motion";
import { MessageSquare, Database, Filter, Cpu, GitBranch, Save } from "lucide-react";

export function ArchitectureSection() {
    return (
        <section className="w-full bg-white/[0.02] border-y border-white/5 py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-32">

                {/* How it Works */}
                <div className="space-y-16">
                    <div className="space-y-6 text-left">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How the Memory Engine Works</h2>
                        <div className="h-1 w-20 bg-violet-500/40 rounded-full" />
                        <p className="text-lg text-white/70 leading-relaxed font-light mt-8">
                            When you send a message in Supercharge, here's what happens behind the scenes — in under two seconds:
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1 w-full flex justify-center sticky top-24">
                            <LifecycleFlowGraphic />
                        </div>
                        <div className="flex-1 space-y-12 pb-12">
                            <Step
                                n={1} title="You send a message."
                                desc="Your input is captured."
                            />
                            <Step
                                n={2} title="Memory is fetched."
                                desc="Your PML memory store is retrieved from Supabase. This is the compressed graph of everything Supercharge knows about you."
                                isInvisible
                            />
                            <Step
                                n={3} title="Tiered injection."
                                desc="Not all memories are relevant to every message. Supercharge applies a three-tier relevance system: core identity nodes always go in (Tier 1), contextually relevant nodes for the current topic get added (Tier 2), and everything else is either summarised or omitted. This is how a full memory store gets compressed to 150–500 tokens per call."
                            />
                            <Step
                                n={4} title="The LLM call."
                                desc="Your message, your memory, and your conversation history are assembled into a system prompt and sent directly to your chosen provider using your own API key."
                            />
                            <Step
                                n={5} title="Response parsing."
                                desc="The model's response arrives in two parts: the visible RESPONSE block that you read, and a silent MEMORY_OP block that contains any new or updated memories. You see the first. The system processes the second."
                                isInvisible
                            />
                            <Step
                                n={6} title="Memory updated."
                                desc="The PML parser executes the MEMORY_OP commands against Supabase — silently, in the background. Your next message starts with an even richer context."
                                isInvisible
                            />
                        </div>
                    </div>
                </div>

                {/* Token Efficiency */}
                <div className="space-y-16">
                    <div className="space-y-6 text-left">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Token Efficiency Advantage</h2>
                        <div className="h-1 w-20 bg-violet-500/40 rounded-full" />
                        <div className="text-lg text-white/70 leading-relaxed font-light space-y-6 mt-8">
                            <p>
                                One of the most concrete wins Supercharge delivers is cost efficiency. Most AI applications handle persistent context by stuffing the last N messages into every API call. This works, but it's expensive — and it grows without bound as conversations get longer.
                            </p>
                        </div>
                    </div>

                    <TokenChart />

                    <div className="text-lg text-white/70 leading-relaxed font-light space-y-6">
                        <p>
                            The tiered injection system is the key. Because PML is structured and categorised, Supercharge can surgically select only the memories relevant to your current conversation — keeping the token budget lean regardless of how long you've been using the product.
                        </p>
                        <p className="border-l-4 border-white/20 pl-4 py-1 italic text-white/50 text-base">
                            A caveat worth being honest about: for brand-new users with fewer than five memories, vanilla history might actually be cheaper. The efficiency advantage grows as your memory graph grows, and fully materialises at around 20+ stored nodes.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

function Step({ n, title, desc, isInvisible }: { n: number, title: string, desc: string, isInvisible?: boolean }) {
    return (
        <div className="space-y-2 relative group">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-violet-500/50 bg-violet-500/10 flex items-center justify-center font-mono text-sm font-bold text-violet-400 shrink-0">
                    {n}
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">{title}</h4>
                {isInvisible && <span className="text-[10px] font-mono text-white/30 uppercase border border-white/10 px-2 py-0.5 rounded-full ml-auto">Invisible</span>}
            </div>
            <p className="text-white/70 font-light pl-12">{desc}</p>
        </div>
    );
}

function LifecycleFlowGraphic() {
    const nodes = [
        { Icon: MessageSquare, label: "Message Input", isVisible: true },
        { Icon: Database, label: "Fetch Memory", isVisible: false },
        { Icon: Filter, label: "Tiered Filtering", isVisible: true },
        { Icon: Cpu, label: "LLM Processing", isVisible: true },
        { Icon: GitBranch, label: "Parse Response", isVisible: false },
        { Icon: Save, label: "Commit to DB", isVisible: false }
    ];

    return (
        <div className="flex flex-col items-center gap-0 relative py-8">
            <div className="absolute top-12 bottom-12 left-1/2 w-0.5 bg-white/10 -translate-x-1/2 z-0" />
            <motion.div
                className="absolute top-12 left-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-violet-500 to-transparent -translate-x-1/2 z-0 blur-[2px]"
                animate={{ y: [0, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {nodes.map((n, i) => (
                <div key={i} className="flex flex-col items-center gap-0 z-10 w-full mb-6 relative">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ margin: "-50px" }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center border backdrop-blur-md shadow-2xl relative
                             ${n.isVisible ? 'bg-white/5 border-white/20' : 'bg-black/80 border-violet-500/30'}
                         `}
                    >
                        <n.Icon className={n.isVisible ? "text-white/80" : "text-violet-400/80"} size={28} />

                        {/* Labels on the left forming a step map */}
                        <div className="hidden md:block absolute right-[100%] top-1/2 -translate-y-1/2 pr-6 w-32 text-right">
                            <span className={`text-[10px] font-mono uppercase tracking-wider ${n.isVisible ? 'text-white/60' : 'text-violet-400/60'}`}>
                                {n.label}
                            </span>
                            {!n.isVisible && <span className="block text-[8px] text-white/30">(Silent)</span>}
                        </div>
                    </motion.div>

                    {i < nodes.length - 1 && (
                        <div className="h-8 flex justify-center">

                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function TokenChart() {
    return (
        <div className="w-full bg-[#08080a] border border-white/10 rounded-2xl p-6 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.05),transparent)] pointer-events-none" />

            {/* Chart grid */}
            <div className="absolute left-16 right-16 top-16 bottom-16 border-l border-b border-white/10 font-mono text-xs text-white/30">
                <div className="absolute -left-12 bottom-0">0T</div>
                <div className="absolute -left-16 bottom-1/3">1000T</div>
                <div className="absolute -left-16 bottom-2/3">2000T</div>
                <div className="absolute -left-16 top-0">3000T+</div>

                <div className="absolute left-0 -bottom-8 w-full text-center">Session Length (Messages) →</div>

                {/* Grid Lines */}
                <div className="w-full border-t border-white/5 absolute bottom-1/3" />
                <div className="w-full border-t border-white/5 absolute bottom-2/3" />
                <div className="w-full border-t border-white/5 absolute top-0" />

                {/* Lines */}
                {/* Vanilla */}
                <div className="absolute left-0 bottom-0 w-[120%] h-full">
                    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className="overflow-visible">
                        <path d="M0,100 Q10,95 20,80 T40,40 T60,-20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                    </svg>
                </div>

                {/* Full Dump */}
                <div className="absolute left-0 bottom-0 w-full h-full">
                    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className="overflow-visible">
                        <path d="M0,95 Q30,90 60,70 T100,60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    </svg>
                </div>

                {/* Tiered/Supercharge */}
                <div className="absolute left-0 bottom-0 w-[120%] h-full">
                    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className="overflow-visible">
                        <path d="M0,98 Q10,95 20,95 L100,95" fill="none" stroke="#8b5cf6" strokeWidth="3" />
                    </svg>
                </div>

                <div className="absolute top-[85%] right-10 bg-violet-600/20 text-violet-400 border border-violet-500/30 px-3 py-1.5 rounded-lg text-xs backdrop-blur-md whitespace-nowrap hidden md:block">
                    Tiered PML stays flat &lt; 500T
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col md:flex-row gap-6 mt-64 pt-8 md:mt-72">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 border-b-2 border-dashed border-white/30" />
                    <span className="text-xs text-white/50">Vanilla History</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-white/40" />
                    <span className="text-xs text-white/50">Full PML Dump</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                    <span className="text-xs font-bold text-violet-300">Tiered PML</span>
                </div>
            </div>
        </div>
    );
}

