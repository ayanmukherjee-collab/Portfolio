"use client";

import { motion } from "framer-motion";
import { Database, User, Activity, Zap, Folder, MapPin, Heart, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
    const [chatStep, setChatStep] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setChatStep((prev) => (prev < 4 ? prev + 1 : 0));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full py-32 flex flex-col items-center">

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl px-6 space-y-12 text-center relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <span className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs font-mono text-violet-400 uppercase tracking-widest">
                        Case Study • 02
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/40 leading-tight">
                        Supercharge
                    </h1>
                    <p className="text-xl md:text-3xl text-violet-100/60 font-light max-w-3xl mx-auto">
                        The AI That Actually Remembers You
                    </p>
                    <p className="text-sm md:text-base text-white/40 font-mono tracking-wide">
                        How we built a persistent memory layer — and the language we invented to power it.
                    </p>
                </motion.div>
            </div>


            <HeroGraphic />


            <div className="max-w-4xl mx-auto px-6 mt-32 space-y-6 w-full text-left">
                <h2 className="text-3xl md:text-4xl font-bold">The Problem Nobody Talks About</h2>
                <div className="h-1 w-20 bg-violet-500/40 rounded-full" />

                <div className="text-lg text-white/70 leading-relaxed font-light space-y-6 mt-8">
                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-violet-400 first-letter:float-left first-letter:mr-3">
                        Every single time you open a new AI chat, you start from zero.
                    </p>
                    <p>
                        The model doesn't know your name. It doesn't know you're a product designer working on a fintech startup. It doesn't know you've been tracking your fitness for three months, that you despise Comic Sans, or that you had a difficult meeting with a client last Tuesday. You've told various AI assistants all of this before — many times over — and it's all gone.
                    </p>
                    <p>
                        This isn't a minor inconvenience. It's a fundamental limitation that makes AI feel like a very impressive calculator: incredibly powerful, but utterly impersonal. You get a new one every time.
                    </p>
                    <p>
                        The more you rely on AI in your daily work and life, the more this friction compounds. Professionals who use AI every day — writers, designers, developers, researchers — spend a staggering portion of each session just rebuilding context. Re-explaining who they are. Re-establishing what matters. Re-stating preferences they've shared a hundred times.
                    </p>
                    <p className="font-medium text-white">
                        This is the problem Supercharge was built to solve.
                    </p>
                </div>
            </div>


            <AmnesiaGraphic step={chatStep} />


            <div className="max-w-4xl mx-auto px-6 mt-32 space-y-6 w-full text-left">
                <h2 className="text-3xl md:text-4xl font-bold">What Is Supercharge?</h2>
                <div className="h-1 w-20 bg-violet-500/40 rounded-full" />

                <div className="text-lg text-white/70 leading-relaxed font-light space-y-6 mt-8">
                    <p>
                        Supercharge is a BYOK (Bring Your Own Key) AI chat application with one defining feature: <span className="text-white font-medium">it remembers everything.</span>
                    </p>
                    <p>
                        Not in a vague, summarised way. Not by stuffing your entire conversation history into every API call and hoping the model picks out what's relevant. Supercharge builds a structured, compressed knowledge graph of you — your preferences, your plans, your relationships, your ongoing projects, your health data, your emotional state — and injects it intelligently into every single conversation you have.
                    </p>
                    <p>
                        The result is an AI that greets you knowing who you are. That references your ongoing projects without being told. That understands context you shared three months ago and applies it naturally to today's conversation.
                    </p>
                    <p>
                        This is powered by something we built from scratch: <strong className="text-violet-300">PML — Personal Memory Language</strong>.
                    </p>
                </div>
            </div>

        </section>
    );
}

function HeroGraphic() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-5xl mt-24 px-6 relative"
        >
            <div className="relative aspect-video rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center">

                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-violet-500" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="20s" repeatCount="indefinite" />
                    </line>
                    <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="currentColor" strokeWidth="1" className="text-violet-500" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="25s" repeatCount="indefinite" />
                    </line>
                    <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="currentColor" strokeWidth="1" className="text-violet-500" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="15s" repeatCount="indefinite" />
                    </line>
                    <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="currentColor" strokeWidth="1" className="text-violet-500" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="22s" repeatCount="indefinite" />
                    </line>
                    <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="currentColor" strokeWidth="1" className="text-violet-500" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="18s" repeatCount="indefinite" />
                    </line>
                </svg>


                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-violet-500/30 blur-xl rounded-full animate-pulse" />
                        <div className="relative px-8 py-4 bg-[#111116] border border-violet-500/30 rounded-2xl flex flex-col items-center gap-2">
                            <div className="flex items-center gap-2">
                                <Zap className="text-violet-400" size={24} />
                                <span className="text-xl font-bold text-white tracking-wide">Supercharge</span>
                            </div>
                            <span className="text-xs font-medium text-white/50">The AI that actually remembers you.</span>
                        </div>
                    </div>
                </div>


                <Node icon={<User size={18} />} label="Identity" x="20%" y="30%" delay={0} />
                <Node icon={<Folder size={18} />} label="Projects" x="80%" y="25%" delay={1} />
                <Node icon={<MapPin size={18} />} label="Locations" x="85%" y="70%" delay={2} />
                <Node icon={<Heart size={18} />} label="Preferences" x="15%" y="75%" delay={1.5} />
                <Node icon={<Activity size={18} />} label="Health" x="50%" y="15%" delay={0.5} />
            </div>
        </motion.div>
    );
}

function Node({ icon, label, x, y, delay }: { icon: React.ReactNode, label: string, x: string, y: string, delay: number }) {
    return (
        <motion.div
            className="absolute flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md"
            style={{ left: x, top: y, x: '-50%', y: '-50%' }}
            animate={{
                y: ['-50%', '-55%', '-50%'],
                boxShadow: ['0 0 0px rgba(139,92,246,0)', '0 0 20px rgba(139,92,246,0.2)', '0 0 0px rgba(139,92,246,0)']
            }}
            transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
        >
            <div className="text-violet-300">{icon}</div>
            <span className="text-sm font-medium text-white/80">{label}</span>
        </motion.div>
    );
}

function AmnesiaGraphic({ step }: { step: number }) {
    const isRemembered = step === 4;

    return (
        <div className="w-full max-w-4xl mx-auto px-6 mt-16">
            <div className={`relative w-full aspect-[21/9] rounded-2xl border ${isRemembered ? 'border-violet-500/50 bg-[#111118]' : 'border-white/10 bg-[#0a0a0c]'} overflow-hidden shadow-2xl flex flex-col justify-end p-6 transition-colors duration-1000`}>


                {isRemembered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 2 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent)] pointer-events-none"
                    />
                )}

                <div className="w-full max-w-2xl mx-auto space-y-4 relative z-10">

                    <div className="flex gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isRemembered ? 'bg-violet-500/20 text-violet-400' : 'bg-white/5 text-white/40'}`}>
                            <Zap size={16} />
                        </div>
                        <div className="flex-1">
                            {isRemembered ? (
                                <p className="text-white/80 mt-1">
                                    Welcome back, UX Designer working on <span className="text-white font-medium">Pulse</span> for <span className="text-white font-medium">NovaTech</span>. How can I help you today?
                                </p>
                            ) : (
                                <p className="text-white/40 mt-1 italic">
                                    {step === 0 ? "New Chat Started..." : "New Chat Started... (Memories cleared)"}
                                </p>
                            )}
                        </div>
                    </div>


                    <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                        <div className="w-2 h-4 bg-violet-400 animate-pulse" />
                        {!isRemembered ? (
                            <p className="text-white/60 font-mono text-sm">
                                <span className="opacity-50">You: </span>
                                "I'm a UX designer working on a fintech app called Pulse for my client NovaTech."
                            </p>
                        ) : (
                            <p className="text-white/60 font-mono text-sm">
                                <span className="opacity-50">You: </span>
                                <span className="italic">Waiting for input... (No re-introduction needed)</span>
                            </p>
                        )}
                    </div>
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === step ? 'bg-violet-400 scale-125' : 'bg-white/20'}`} />
                    ))}
                </div>
            </div>
            <p className="text-center text-xs font-mono text-white/30 uppercase tracking-widest mt-6">
                Simulation: The AI Amnesia Loop
            </p>
        </div>
    );
}

