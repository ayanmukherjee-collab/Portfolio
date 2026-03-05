"use client";

import { motion } from "framer-motion";
import { User, Key, Lock, Database, ArrowRight } from "lucide-react";

export function ByokSection() {
    return (
        <section className="w-full bg-white/[0.02] border-y border-white/5 py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-16">

                <div className="space-y-6 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">BYOK: Your Model, Your Keys, Your Data</h2>
                    <div className="h-1 w-20 bg-violet-500/40 rounded-full" />
                    <div className="text-lg text-white/70 leading-relaxed font-light space-y-6 mt-8">
                        <p>
                            Before we get into the memory system, there's a fundamental choice Supercharge makes about how it operates — and it's worth explaining, because it shapes everything.
                        </p>
                        <p>
                            Supercharge doesn't run its own AI model. You bring your own API key from whichever provider you prefer: OpenAI, Anthropic, or Google. GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro — your call.
                        </p>
                        <p>
                            Your API key is encrypted client-side before it ever touches any database. It's derived from your own authentication token, which means Supercharge's infrastructure literally cannot read it. All LLM calls are made directly from your browser to your chosen provider. <strong className="text-white">We are not a middleman. We never see your conversations.</strong>
                        </p>
                        <p>
                            Your memory — the knowledge graph we build about you — is stored in your own Supabase database. You can export it as plain text at any time. You can delete it instantly. You own it.
                        </p>
                        <p className="font-medium text-violet-300 italic">
                            This is not a marketing claim. It's an architectural constraint we built into the foundation of the product.
                        </p>
                    </div>
                </div>

                <ByokGraphic />

            </div>
        </section>
    );
}

function ByokGraphic() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full mt-16"
        >
            <div className="relative w-full rounded-3xl border border-white/10 bg-black/40 overflow-hidden shadow-2xl p-8 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center relative z-10">


                    <div className="flex flex-col items-center gap-6">
                        <div className="w-24 h-24 rounded-full border border-violet-500/30 bg-violet-500/10 flex items-center justify-center relative shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                            <User className="text-violet-400" size={40} />
                            <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center">
                                <Key className="text-white/80" size={18} />
                            </div>
                        </div>
                        <span className="font-mono text-sm tracking-widest uppercase text-white/50">You</span>
                    </div>


                    <div className="flex flex-col items-center gap-6 relative">


                        <div className="w-32 h-32 rounded-2xl border border-white/20 bg-white/5 flex flex-col items-center justify-center backdrop-blur-md">
                            <Lock className="text-white/60 mb-2" size={24} />
                            <span className="font-bold text-lg tracking-wide">Supercharge</span>
                            <span className="text-[10px] text-white/40 font-mono mt-1 text-center leading-tight">Key Encrypted<br />Locally</span>
                        </div>

                        <div className="flex flex-col items-center mt-4">
                            <ArrowRight className="md:hidden text-white/20 mb-4" />
                            <div className="flex items-center gap-2">
                                <Database className="text-violet-400" size={20} />
                                <span className="text-xs font-mono text-violet-300">Supabase</span>
                            </div>
                            <span className="text-[10px] text-white/40 mt-1 uppercase">Your Memory Graph</span>
                        </div>
                    </div>


                    <div className="flex flex-col items-center gap-6">
                        <div className="p-6 rounded-2xl border border-violet-500/30 bg-violet-500/10 w-full max-w-[200px] flex flex-col gap-4">
                            <div className="text-xs font-mono text-center text-white/50 pb-2 border-b border-white/10">LLM Providers</div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold w-full">OAI</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold w-full">Google</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold w-full">Anthropic</div>
                            </div>
                        </div>
                        <span className="text-[10px] text-violet-400/80 font-mono text-center uppercase">Direct API Calls<br />(We never see this)</span>
                    </div>

                </div>



            </div>
        </motion.div>
    );
}

