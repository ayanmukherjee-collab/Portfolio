"use client";

import { GlassSection } from "@/components/GlassSection";
import Link from "next/link";
import { ArrowLeft, Lock, Eye, FileJson, Layers, Cpu, ShieldCheck, Ghost, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function StenographyPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0d] text-white selection:bg-white/20">

            {/* Navigation */}
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
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            Steganography as<br />Quiet Architecture
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
                            Hiding Information in Plain Sight in the Age of Surveillance
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

            {/* Intro Philosophy */}
            <section className="w-full max-w-5xl mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:bg-clip-text first-letter:float-left first-letter:mr-3">
                            In a world obsessed with visibility, steganography is the art of silence.
                        </p>
                        <p>
                            Cryptography shouts that a secret exists but locks it. <br />
                            Steganography pretends there is no secret at all.
                        </p>
                        <p className="border-l-2 border-white/20 pl-6 italic text-white/90">
                            If cryptography is a sealed vault in the middle of a room, steganography is a hidden door inside the wall itself.
                        </p>
                        <p>
                            This project, <strong className="text-white">Stenograph</strong>, explores both philosophies through two modes: one that hides by bending the fabric of pixels, and one that hides by exploiting the blindness of file formats. Together they form a study of how information can disappear not by being erased, but by becoming indistinguishable from its surroundings.
                        </p>
                    </div>
                    <div className="relative aspect-square md:aspect-auto h-full min-h-[400px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 animate-pulse duration-[5000ms]" />
                        <div className="flex flex-col gap-8 text-center">
                            <div className="flex items-center gap-4 text-white/30">
                                <Lock size={40} />
                                <span className="text-2xl font-mono">VS</span>
                                <Ghost size={40} />
                            </div>
                            <p className="text-sm font-mono text-white/40 max-w-[200px]">
                                Where Cryptography protects content, Steganography protects intent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mode 1: Stealth */}
            <section className="w-full bg-white/[0.02] border-y border-white/5 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <Cpu className="text-blue-400" size={32} />
                                </div>
                                <h2 className="text-4xl font-bold">1. Stealth Mode</h2>
                            </div>
                            <h3 className="text-xl text-blue-300/80 font-mono uppercase tracking-widest">Writing Between the Atoms of an Image</h3>

                            <div className="space-y-6 text-white/70 leading-relaxed">
                                <p>
                                    A digital image is not a picture. It is a field of numbers pretending to be light.
                                </p>
                                <p>
                                    Each pixel is a tiny container of red, green, and blue values. Changing the last bit of those values is like shaving a single atom from a mountain: the shape remains the same, but a message can be carved into its structure.
                                </p>
                                <p>
                                    Stealth Mode uses <span className="text-white font-semibold">Least Significant Bit (LSB) embedding</span> — a technique that hides information in the smallest possible fluctuations of color, below the threshold of human vision.
                                </p>
                                <div className="bg-black/40 p-6 rounded-lg border border-white/10 my-4">
                                    <p className="font-mono text-sm text-green-400/80 mb-2">Metaphor:</p>
                                    <p className="italic text-white/80">"This is whispering in the noise of the universe."</p>
                                </div>
                                <p>
                                    The image remains visually identical, yet it carries a second reality beneath its surface, like ink written with invisible light. Only those who know where to look — and how — can read it.
                                </p>

                                <h4 className="text-lg text-white font-semibold mt-8 mb-4">The Cost of Subtlety</h4>
                                <ul className="space-y-3 list-disc pl-5 text-white/60">
                                    <li>It favors <strong className="text-white">text, small documents, cryptographic keys, and minimal binaries</strong>.</li>
                                    <li>PDFs with heavy imagery or compressed video streams become fragile.</li>
                                    <li>The hidden file cannot be revealed by renaming; it does not exist as a file anymore, only as altered physics.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Visualizer for LSB (Abstract) */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-full aspect-square bg-black rounded-3xl border border-white/10 overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#00ff00_2px,#00ff00_4px)] opacity-[0.03] pointer-events-none mix-blend-overlay" />
                                <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <div className="flex justify-between items-center text-xs font-mono text-white/60 mb-2">
                                        <span>PX: 1024, 768</span>
                                        <span className="text-green-400">OFFSET: 0x4F</span>
                                    </div>
                                    <div className="flex gap-1 h-8 items-end">
                                        {[40, 60, 30, 80, 50, 90, 20, 45, 75, 55].map((h, i) => (
                                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-white/20 hover:bg-green-500 transition-colors" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mode 2: Disguise */}
            <section className="w-full py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row-reverse gap-16">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-orange-500/20 rounded-xl">
                                    <Layers className="text-orange-400" size={32} />
                                </div>
                                <h2 className="text-4xl font-bold">2. Disguise Mode</h2>
                            </div>
                            <h3 className="text-xl text-orange-300/80 font-mono uppercase tracking-widest">Wearing Another File’s Skin</h3>

                            <div className="space-y-6 text-white/70 leading-relaxed">
                                <p>
                                    Disguise Mode abandons subtlety and embraces illusion.
                                </p>
                                <p>
                                    Most file formats are polite. They read what they need and ignore the rest. Anything beyond the end of a valid structure is treated like silence.
                                </p>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 font-mono text-sm overflow-x-auto">
                                    <span className="text-blue-400">[Carrier]</span>
                                    <span className="text-green-400">[Secret]</span>
                                    <span className="text-purple-400">[Signature]</span>
                                    <span className="text-gray-400">[Metadata]</span>
                                </div>
                                <p>
                                    To the operating system, it is still the carrier. <br />
                                    To a media player, it still plays. <br />
                                    But when the extension is changed, the mask falls, and the second identity emerges.
                                </p>
                                <p>
                                    This is not invisibility. This is <span className="text-white font-semibold">camouflage</span>.
                                </p>
                                <ul className="space-y-3 list-disc pl-5 text-white/60">
                                    <li>It supports <strong className="text-white">large videos, archives, datasets</strong>.</li>
                                    <li>It enables the “rename and reveal” phenomenon.</li>
                                    <li>It sacrifices secrecy for capacity and simplicity.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-full max-w-sm aspect-[3/4] bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col items-center justify-center gap-6 group">
                                <FileJson size={80} className="text-white/20 group-hover:text-orange-400 transition-colors duration-500" />
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white mb-2">video.mp4</p>
                                    <p className="text-sm font-mono text-white/40">1.4 GB • MPEG-4</p>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <p className="text-lg font-bold text-orange-400 mb-1">Actually: backup.zip</p>
                                    <p className="text-xs font-mono text-white/40">Rename to access</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="w-full bg-white/[0.02] border-y border-white/5 py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">3. Two Philosophies of Hiding</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-6 px-4 text-sm font-mono text-white/40 uppercase tracking-widest">Feature</th>
                                    <th className="text-left py-6 px-4 text-blue-400 font-mono uppercase tracking-widest">Stealth Mode</th>
                                    <th className="text-left py-6 px-4 text-orange-400 font-mono uppercase tracking-widest">Disguise Mode</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="py-6 px-4 text-white/60 font-medium">Mechanism</td>
                                    <td className="py-6 px-4 text-white/80">Changes reality at the smallest scale</td>
                                    <td className="py-6 px-4 text-white/80">Leaves reality untouched, changes interpretation</td>
                                </tr>
                                <tr>
                                    <td className="py-6 px-4 text-white/60 font-medium">Visibility</td>
                                    <td className="py-6 px-4 text-white/80">Invisible, but small</td>
                                    <td className="py-6 px-4 text-white/80">Obvious to tools, but unlimited</td>
                                </tr>
                                <tr>
                                    <td className="py-6 px-4 text-white/60 font-medium">Revelation</td>
                                    <td className="py-6 px-4 text-white/80">Cannot be revealed by renaming</td>
                                    <td className="py-6 px-4 text-white/80">Reveals itself by renaming</td>
                                </tr>
                                <tr>
                                    <td className="py-6 px-4 text-white/60 font-medium">Mindset</td>
                                    <td className="py-6 px-4 text-white/80">Cryptographic mindset (Quantum)</td>
                                    <td className="py-6 px-4 text-white/80">Illusionist mindset (Theatrical)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="w-full max-w-4xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold mb-8">4. Why This Matters</h2>
                <div className="prose prose-invert prose-lg max-w-none text-white/70">
                    <p>
                        Modern surveillance is not only about watching — it is about classification.
                    </p>
                    <p>
                        Firewalls, scanners, content filters, and AI moderation systems do not “see” in a human sense. They recognize patterns, headers, and structures. They believe what file formats tell them.
                    </p>
                    <p className="font-bold text-white">Steganography attacks that trust.</p>
                    <ul className="border-l-2 border-red-500/50 pl-6 space-y-2 italic text-white/80 my-8">
                        <li>What if the picture is not just a picture?</li>
                        <li>What if the video is also a document?</li>
                        <li>What if the noise itself carries language?</li>
                    </ul>
                    <p>
                        This project is not about secrecy alone. It is about questioning the assumptions built into digital perception. Just as optical illusions reveal how the human eye can be fooled, steganography reveals how software vision can be misled.
                    </p>
                </div>
            </section>

            {/* Design Philosophy */}
            <section className="w-full py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">5. Design as Psychological Framing</h2>
                        <p className="text-white/70 mb-6 leading-relaxed">
                            The glassmorphic, forensic-suite interface is not decoration. It communicates:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {['Precision', 'Restraint', 'Clinical Clarity', 'Quiet Power'].map((item) => (
                                <div key={item} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center text-sm font-mono uppercase tracking-widest text-white/60">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-white/70 mt-8 leading-relaxed">
                            The UI does not look playful because the subject is not playful. It deals with trust, misdirection, and invisibility. Like a laboratory instrument, it does not seek attention — it seeks confidence.
                        </p>
                    </div>
                    <div className="h-[400px] w-full rounded-2xl bg-[#0F1115] border border-white/10 relative overflow-hidden flex flex-col shadow-2xl">
                        {/* Mock UI */}
                        <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 flex">
                            <div className="w-16 border-r border-white/10 flex flex-col items-center py-4 gap-4">
                                <div className="w-8 h-8 rounded bg-white/10" />
                                <div className="w-8 h-8 rounded bg-white/5" />
                                <div className="w-8 h-8 rounded bg-white/5" />
                            </div>
                            <div className="flex-1 p-6 flex items-center justify-center">
                                <div className="w-full h-full border border-dashed border-white/20 rounded-xl flex items-center justify-center text-white/20 font-mono text-xs">
                                    DROP ZONE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Thought */}
            <section className="w-full py-32 text-center px-6">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-2xl font-mono uppercase tracking-widest text-white/40">Closing Thought</h2>
                    <div className="text-3xl md:text-4xl font-light leading-tight text-white/90">
                        "Steganography is not about hiding data. It is about hiding <span className="text-white font-bold border-b border-white/20">existence</span>."
                    </div>
                    <p className="text-lg text-white/60">
                        One alters reality. The other alters belief. <br />
                        And in the space between those two lies the true art of hiding.
                    </p>
                </div>
            </section>

        </main>
    );
}
