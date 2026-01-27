"use client";

import { GlassSection } from "@/components/GlassSection";
import Link from "next/link";
import { ArrowLeft, Lock, Eye, FileJson, Layers, Cpu, ShieldCheck, Ghost, ExternalLink, Zap, AlertTriangle, Search, Activity, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function StenographyPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0d] text-white selection:bg-white/20">

            {/* Navigation */}
            <Link href="/labs" className="fixed bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-6 md:left-6 z-50 flex items-center gap-2 text-white/40 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-wider">Back to Labs</span>
            </Link>

            {/* Hero Section */}
            <section className="relative w-full py-32 px-4 flex flex-col items-center text-center">
                <div className="max-w-4xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/50 uppercase tracking-widest">
                            Case Study • 01
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-tight">
                            The Hidden Art of Steganography
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto">
                            Hiding Information in Plain Sight in the Age of Digital Surveillance
                        </p>
                    </motion.div>
                </div>

                {/* Live Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-6xl mt-16 px-6"
                >
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl border border-white/10 bg-black/50 overflow-hidden shadow-2xl group">

                        {/* Status Dot */}
                        <div className="absolute top-4 left-4 z-10 pointer-events-none">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 duration-1000"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        </div>

                        <iframe
                            src="https://stenograph-ayan.vercel.app/"
                            className="w-[calc(100%+18px)] h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0 no-scrollbar relative -left-[1px]"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            title="Stenograph Live Preview"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col md:flex-row gap-6 items-start md:items-end pointer-events-none">
                            <div className="pointer-events-auto">
                                <a
                                    href="https://stenograph-ayan.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                                >
                                    <span>Launch Live Site</span>
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Introduction */}
            <section className="w-full max-w-5xl mx-auto px-6 py-12 md:py-24">
                <div className="space-y-12">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Introduction: The Invisible Secrets in Our Digital World</h2>
                        <div className="h-1 w-20 bg-white/20 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:bg-clip-text first-letter:float-left first-letter:mr-3">
                                Every day, we scroll through a torrent of digital content—images, audio clips, videos, and documents. These files are the fabric of our online lives, shared and consumed so casually that we rarely give them a second thought.
                            </p>
                            <p>
                                But what if some of these seemingly innocent files were carrying secrets? Not secrets that are locked away in a scrambled, unreadable format, but secrets hidden in plain sight, their very existence unknown to anyone but the intended recipient.
                            </p>
                            <p>
                                This is the world of <span className="text-white font-medium italic">steganography</span>, a practice far more subtle than its cousin, cryptography. While cryptography scrambles a message to make it unreadable, steganography conceals the fact that a message even exists.
                            </p>
                        </div>
                        <div className="relative aspect-square md:aspect-auto h-full min-h-[400px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 gap-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                            <div className="relative w-full max-w-[280px] space-y-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                                    <div className="p-2 bg-red-500/20 rounded-lg">
                                        <Lock className="text-red-400" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Cryptography</p>
                                        <p className="text-xs text-white/40">"I have a secret."</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 flex items-center gap-4 translate-x-4">
                                    <div className="p-2 bg-green-500/20 rounded-lg">
                                        <Ghost className="text-green-400" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Steganography</p>
                                        <p className="text-xs text-white/40">"What secret?"</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm font-mono text-white/40 text-center max-w-xs uppercase tracking-widest leading-relaxed">
                                Encryption is locking a letter in a box. Steganography is hiding that letter inside a hollowed-out book.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Takeaway 1: Visibility vs Invisibility */}
            <section className="w-full bg-white/[0.02] border-y border-white/5 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-white/10 font-mono">01</span>
                                <h2 className="text-3xl md:text-4xl font-bold">It’s Not Encryption—It’s About Making Secrets Invisible</h2>
                            </div>
                            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                                <p>
                                    The fundamental goal of steganography is to conceal the existence of secret data within a cover media. This core difference in purpose separates it entirely from cryptography.
                                </p>
                                <p>
                                    An encrypted file is, by its nature, suspicious. Steganography, on the other hand, aims to produce a file that is perfectly ordinary and unremarkable.
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 w-full overflow-hidden">
                            <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm">
                                <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
                                    <div className="py-4 px-6 text-xs font-mono text-white/40 uppercase">Feature</div>
                                    <div className="py-4 px-6 text-xs font-mono text-white/40 uppercase">Steganography</div>
                                    <div className="py-4 px-6 text-xs font-mono text-white/40 uppercase">Cryptography</div>
                                </div>
                                <div className="divide-y divide-white/5">
                                    <div className="grid grid-cols-3 items-center">
                                        <div className="py-4 px-6 text-sm font-bold">Goal</div>
                                        <div className="py-4 px-6 text-xs text-white/70">Conceal existence</div>
                                        <div className="py-4 px-6 text-xs text-white/70">Ensure unreadability</div>
                                    </div>
                                    <div className="grid grid-cols-3 items-center">
                                        <div className="py-4 px-6 text-sm font-bold">Method</div>
                                        <div className="py-4 px-6 text-xs text-white/70">Media modification</div>
                                        <div className="py-4 px-6 text-xs text-white/70">Math & Keys</div>
                                    </div>
                                    <div className="grid grid-cols-3 items-center">
                                        <div className="py-4 px-6 text-sm font-bold">Vulnerability</div>
                                        <div className="py-4 px-6 text-xs text-white/70">Detection</div>
                                        <div className="py-4 px-6 text-xs text-white/70">Compromised Key</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Takeaway 2: AI & GANs */}
            <section className="w-full py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-white/10 font-mono">02</span>
                                <h2 className="text-3xl md:text-4xl font-bold">AI Is Generating Perfect Hiding Places</h2>
                            </div>
                            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                                <p>
                                    Steganography has evolved beyond modifying "Least Significant Bits." The cutting edge now involves **Generative Adversarial Networks (GANs)** to create perfect hiding places.
                                </p>
                                <p>
                                    An encoder network embeds the message, while a decoder retrieves it. A third "critic" network attempts to distinguish these from original images, forcing the encoder to generate untraceable results.
                                </p>
                                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl italic text-sm text-blue-100/80">
                                    "The security lies not in a short, guessable password but in the immense complexity of a neural network with millions of parameters."
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="relative aspect-video rounded-3xl border border-white/10 bg-black overflow-hidden group">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5),transparent)] animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center relative group-hover:border-blue-400/50 transition-colors">
                                            <Cpu className="text-white/40 group-hover:text-blue-400" size={32} />
                                            <div className="absolute -top-2 px-2 py-0.5 bg-blue-500 rounded text-[8px] font-bold uppercase">Encoder</div>
                                        </div>
                                        <div className="h-12 w-px bg-gradient-to-b from-blue-500 to-transparent" />
                                        <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center relative group-hover:border-purple-400/50 transition-colors">
                                            <Activity className="text-white/20 group-hover:text-purple-400" size={24} />
                                            <div className="absolute -bottom-8 text-[10px] font-mono text-white/30 uppercase text-center w-24">Latent Space</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-8">
                                        <div className="w-24 h-24 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] flex items-center justify-center group-hover:border-white/40 transition-colors">
                                            <Search className="text-white/10" size={40} />
                                            <div className="absolute -top-3 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase backdrop-blur-md">Critic</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center relative group-hover:border-green-400/50 transition-colors">
                                            <Zap className="text-white/40 group-hover:text-green-400" size={32} />
                                            <div className="absolute -top-2 px-2 py-0.5 bg-green-500 rounded text-[8px] font-bold uppercase">Decoder</div>
                                        </div>
                                        <div className="h-12 w-px bg-gradient-to-t from-green-500 to-transparent" />
                                        <div className="text-[10px] font-mono text-white/40 uppercase">Secret Extracted</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Takeaway 3: Weaponization */}
            <section className="w-full bg-white/[0.02] border-y border-white/5 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-white/10 font-mono">03</span>
                                <h2 className="text-3xl md:text-4xl font-bold">Your Everyday Digital Files Can Be Weaponized</h2>
                            </div>
                            <p className="text-lg text-white/70 leading-relaxed font-light">
                                Steganography is an active tool for cybercriminals. Attackers use it to deliver malware and establish command-and-control (C2) while evading detection by exploiting our trust in everyday content.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 hover:bg-white/[0.07] transition-all group">
                                <div className="p-3 bg-red-500/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                    <AlertTriangle className="text-red-400" size={24} />
                                </div>
                                <h3 className="text-xl font-bold">Stegano Exploit Kit</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Hid malicious JavaScript within banner ad pixels on high-traffic sites. Invisible payload delivered through ubiquitous online advertising.
                                </p>
                                <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] font-mono text-red-300">2016 Attack</span>
                            </div>

                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 hover:bg-white/[0.07] transition-all group">
                                <div className="p-3 bg-orange-500/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="text-orange-400" size={24} />
                                </div>
                                <h3 className="text-xl font-bold">Operation ShadowHammer</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Embedded malware within legitimate software updates. Bypassed traditional security by hiding inside trusted, signed files.
                                </p>
                                <span className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-[10px] font-mono text-orange-300">Supply Chain Attack</span>
                            </div>

                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6 hover:bg-white/[0.07] transition-all group">
                                <div className="p-3 bg-purple-500/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                    <Share2 className="text-purple-400" size={24} />
                                </div>
                                <h3 className="text-xl font-bold">Poison Ivy RAT</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Deployed through "malvertising" where hidden steganographic code in images allowed attackers remote control over victim systems.
                                </p>
                                <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-[10px] font-mono text-purple-300">Remote Access</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Takeaway 4: Steganalysis */}
            <section className="w-full py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="relative aspect-square rounded-3xl border border-white/10 bg-black/40 overflow-hidden p-12 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10" />
                                <div className="relative w-full h-full flex flex-col gap-6">
                                    <div className="flex-1 flex gap-2 items-end">
                                        {[60, 40, 70, 50, 80, 45, 90, 30, 65, 55, 75, 40].map((h, i) => (
                                            <div key={i} className="flex-1 bg-white/10 hover:bg-white/40 transition-all rounded-t-sm" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                    <div className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md">
                                        <div className="flex justify-between items-center text-[10px] font-mono mb-2">
                                            <span className="text-white/40">ANOMALY_INDEX</span>
                                            <span className="text-red-400">92% MATCH</span>
                                        </div>
                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-red-400"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '92%' }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                                            <Eye size={16} className="text-white/40" />
                                            <span className="text-[10px] font-mono text-white/60">Visual Scan</span>
                                        </div>
                                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                                            <Activity size={16} className="text-white/40" />
                                            <span className="text-[10px] font-mono text-white/60">Stat Analysis</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-white/10 font-mono">04</span>
                                <h2 className="text-3xl md:text-4xl font-bold">Detecting These Messages Is a Digital Arms Race</h2>
                            </div>
                            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                                <p>
                                    As steganography becomes more advanced, so does **steganalysis**—the art of discovering hidden messages. It’s no longer just about visual inspection; it’s about uncovering subtle statistical traces.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="mt-1 h-5 w-5 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                                            <div className="h-1.5 w-1.5 bg-white/60 rounded-full" />
                                        </div>
                                        <span className="text-sm">**File Structure Analysis:** Examining metadata and headers for anomalies.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 h-5 w-5 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                                            <div className="h-1.5 w-1.5 bg-white/60 rounded-full" />
                                        </div>
                                        <span className="text-sm">**Statistical Analysis:** Using histogram analysis to look for unnatural color distributions.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 h-5 w-5 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                                            <div className="h-1.5 w-1.5 bg-white/60 rounded-full" />
                                        </div>
                                        <span className="text-sm">**Noise Detection:** Identifying abnormal digital "noise" levels across a file.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="w-full py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent)]" />
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Conclusion: More Than Meets the Eye</h2>
                        <div className="h-1 w-24 bg-white/20 mx-auto rounded-full" />
                        <p className="text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
                            Steganography has quietly transformed from a historical curiosity into a sophisticated, AI-driven technique at the forefront of digital security and cybercrime. It serves as a stark reminder that the digital files we interact with daily are not always what they seem.
                        </p>
                    </div>

                    <div className="p-12 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="text-2xl md:text-3xl font-light italic text-white/90 leading-relaxed">
                            "While encryption builds walls, steganography creates trapdoors, challenging our fundamental assumptions about what is and isn't a threat."
                        </div>
                    </div>

                    <p className="text-lg text-white/40 font-medium uppercase tracking-[0.2em]">
                        One alters reality. The other alters belief.
                    </p>
                </div>
            </section>

        </main>
    );
}
