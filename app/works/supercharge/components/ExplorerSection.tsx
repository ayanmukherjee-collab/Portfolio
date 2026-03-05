"use client";

import { motion } from "framer-motion";
import { Search, Heart, MapPin, Briefcase, Trash2, Edit2, Activity, ShieldCheck, Folder } from "lucide-react";

export function ExplorerSection() {
    return (
        <section className="w-full py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-24">

                <div className="space-y-6 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Memory Explorer</h2>
                    <div className="h-1 w-20 bg-violet-500/40 rounded-full mt-4" />
                    <div className="text-lg text-white/70 leading-relaxed font-light space-y-6 mt-8">
                        <p>
                            Every memory Supercharge builds about you is visible, editable, and deletable — always.
                        </p>
                        <p>
                            The Memory Explorer is a slide-in panel accessible at any time from the chat interface. It shows every node in your memory graph, organised by category. You can filter by keyword, edit any fact manually, delete any node with instant confirmation, and see exactly when each memory was created and last accessed.
                        </p>
                        <p>
                            If a memory feels wrong — or just feels like something you don't want stored — you remove it. <strong className="text-white">Not soft-removed. Gone.</strong>
                        </p>
                        <p>
                            For memories that carry emotional weight, we built a genuine hard delete flow: two-step confirmation, permanent removal from the database, and a clear message: <em>"This memory has been permanently deleted and will not appear in future conversations."</em> Because people deserve that.
                        </p>
                    </div>
                </div>

                {/* UI Preview */}
                <ExplorerUiPreview />

            </div>
        </section>
    );
}

function ExplorerUiPreview() {
    return (
        <div className="w-full mt-16 flex justify-center perspective-1000">
            <motion.div
                className="relative w-full max-w-[400px] h-[600px] bg-[#0d0d12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, rotateY: 15, x: 50 }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center bg-black/40 backdrop-blur-md">
                    <div>
                        <h3 className="text-lg font-bold text-white">Your Memory</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                            <span className="text-xs text-violet-400 font-mono">247 nodes active</span>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 px-6 py-3 border-b border-white/5 overflow-x-auto no-scrollbar text-xs font-medium text-white/50">
                    <span className="text-white border-b border-white pb-1 shrink-0">All</span>
                    <span className="shrink-0 hover:text-white transition-colors cursor-pointer">Preferences</span>
                    <span className="shrink-0 hover:text-white transition-colors cursor-pointer">Work</span>
                    <span className="shrink-0 hover:text-white transition-colors cursor-pointer">Health</span>
                    <span className="shrink-0 hover:text-white transition-colors cursor-pointer">Places</span>
                </div>

                {/* Search */}
                <div className="p-4">
                    <div className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-2">
                        <Search size={14} className="text-white/40" />
                        <span className="text-xs text-white/30 font-mono">Search nodes by value or key...</span>
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3 no-scrollbar">
                    <NodeCard
                        cat="#fc" color="bg-teal-500" icon={<Briefcase size={12} />}
                        path="identity.profession" val="UX Designer" date="Today"
                    />
                    <NodeCard
                        cat="#wk" color="bg-blue-500" icon={<Folder size={12} />}
                        path="project.pulse" val="Client: NovaTech" date="Yesterday"
                    />
                    <NodeCard
                        cat="#lc" color="bg-amber-500" icon={<MapPin size={12} />}
                        path="home.city" val="Mumbai, India" date="2 weeks ago"
                    />
                    <NodeCard
                        cat="#pf" color="bg-pink-500" icon={<Heart size={12} />}
                        path="design.meme" val="Loves Comic Sans ironically" date="1 month ago"
                    />
                    <NodeCard
                        cat="#hl" color="bg-green-500" icon={<Activity size={12} />}
                        path="fitness.weight" val="82 kg (trending down)" date="1 month ago"
                    />
                    <NodeCard
                        cat="#pf" color="bg-pink-500" icon={<Heart size={12} />}
                        path="design.font" val="Strictly no Comic Sans" date="2 months ago"
                    />
                </div>

                {/* Bottom overlay fade */}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0d0d12] to-transparent pointer-events-none" />
            </motion.div>
        </div>
    );
}

function NodeCard({ cat, color, icon, path, val, date }: { cat: string, color: string, icon: React.ReactNode, path: string, val: string, date: string }) {
    return (
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <div className={`p-1 rounded ${color}/20 text-white font-mono text-[9px] flex items-center gap-1`}>
                        {cat}
                    </div>
                    <span className="text-[10px] font-mono text-white/40">{path}</span>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white/40 hover:text-white transition-colors"><Edit2 size={12} /></button>
                    <button className="text-red-400/60 hover:text-red-400 transition-colors"><Trash2 size={12} /></button>
                </div>
            </div>
            <p className="text-sm text-white/90 font-medium mb-1">{val}</p>
            <p className="text-[9px] text-white/30 uppercase tracking-widest">{date}</p>
        </div>
    );
}

