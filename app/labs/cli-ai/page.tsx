"use client";

import Link from "next/link";
import { ArrowLeft, Terminal, Download, Zap, Globe, Server, Code, FileCode, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CliAiPage() {
    return (
        <main className="min-h-screen bg-[#0b0b0d] text-white selection:bg-cyan-500/20">

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
                            Case Study • 02
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            CLI-AI
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
                            Zero-Setup Terminal Code Generator
                        </p>
                    </motion.div>
                </div>

                {/* Main Terminal Visualizer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl mt-16 px-6"
                >
                    <div className="relative w-full rounded-2xl md:rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-cyan-500/5">
                        {/* Terminal Header */}
                        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-3 bg-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                            </div>
                            <span className="text-xs font-mono text-white/40 ml-2">terminal — zsh</span>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 md:p-8 font-mono text-sm md:text-base">
                            <div className="flex items-start gap-2 text-white/60">
                                <span className="text-cyan-400">$</span>
                                <div className="flex-1 break-all">
                                    <span className="text-green-400">curl</span>
                                    <span className="text-white/80"> -OJ </span>
                                    <span className="text-yellow-300">&quot;https://cli-ayan-ai.vercel.app/api/ask?q=hello+world&filename=hello.py&quot;</span>
                                </div>
                            </div>

                            <div className="mt-4 text-white/40 text-sm">
                                <p>  % Total    % Received    Time        Speed</p>
                                <p className="text-cyan-400/60">  100   89    100   89      0:00:01     89B/s</p>
                            </div>

                            <div className="mt-4 flex items-center gap-2">
                                <Download size={14} className="text-green-400" />
                                <span className="text-green-400">hello.py</span>
                                <span className="text-white/40">saved</span>
                            </div>

                            <div className="mt-6 flex items-start gap-2">
                                <span className="text-cyan-400">$</span>
                                <span className="text-white/80 animate-pulse">▋</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Overview Section */}
            <section className="w-full max-w-5xl mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-3">
                            Most AI coding tools come with friction. Install a CLI, set up a runtime, configure API keys, or install editor extensions before generating a single line of code.
                        </p>
                        <p>
                            CLI-AI was built to remove all of that.
                        </p>
                        <p className="border-l-2 border-cyan-500/40 pl-6 italic text-white/90">
                            If a system has curl, it should be able to generate code using AI.
                        </p>
                        <p>
                            With CLI-AI, code generation becomes a single terminal command — and nothing more.
                        </p>
                    </div>
                    <div className="relative aspect-square md:aspect-auto h-full min-h-[400px] bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.1)_0%,_transparent_70%)]" />
                        <div className="flex flex-col gap-6 text-center z-10">
                            <Terminal size={64} className="text-cyan-400/40 mx-auto" />
                            <div className="space-y-2">
                                <p className="text-3xl font-bold text-white">One Command</p>
                                <p className="text-sm font-mono text-white/40">No installation. No configuration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Core Idea */}
            <section className="w-full bg-white/[0.02] border-y border-white/5 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-cyan-500/20 rounded-xl">
                                    <Zap className="text-cyan-400" size={32} />
                                </div>
                                <h2 className="text-4xl font-bold">The Core Idea</h2>
                            </div>
                            <h3 className="text-xl text-cyan-300/80 font-mono uppercase tracking-widest">Turning AI Into a File Download</h3>

                            <div className="space-y-6 text-white/70 leading-relaxed">
                                <p>
                                    CLI-AI turns AI code generation into a <span className="text-white font-semibold">file download problem</span>.
                                </p>
                                <p>
                                    Instead of returning JSON or requiring a custom client, the server behaves like a file host. You send a prompt and a filename, and the response is a downloadable source file.
                                </p>
                                <div className="bg-black/40 p-6 rounded-lg border border-white/10 my-4">
                                    <p className="font-mono text-sm text-cyan-400/80 mb-2">The Paradigm Shift:</p>
                                    <p className="italic text-white/80">&quot;The entire experience works using plain curl, with zero setup on the client side.&quot;</p>
                                </div>
                                <p>
                                    After running the command, the file appears in your current directory — ready to use. No parsing. No post-processing. Just a file.
                                </p>
                            </div>
                        </div>

                        {/* Request/Response Flow */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-full max-w-sm space-y-4">
                                {/* Request */}
                                <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group hover:border-cyan-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                                            <Code size={16} className="text-cyan-400" />
                                        </div>
                                        <span className="text-sm font-mono text-white/60">REQUEST</span>
                                    </div>
                                    <div className="font-mono text-xs text-white/80 space-y-1">
                                        <p><span className="text-cyan-400">q:</span> hello world</p>
                                        <p><span className="text-cyan-400">filename:</span> hello.py</p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center text-white/20">
                                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                                        <path d="M12 0 L12 32 M4 24 L12 32 L20 24" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>

                                {/* Response */}
                                <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 group hover:border-green-500/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-green-500/20 rounded-lg">
                                            <FileCode size={16} className="text-green-400" />
                                        </div>
                                        <span className="text-sm font-mono text-white/60">RESPONSE</span>
                                    </div>
                                    <div className="font-mono text-xs text-white/80">
                                        <p className="text-green-400"># hello.py</p>
                                        <p className="text-white/60 mt-2">print(&quot;Hello, World!&quot;)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How the Experience Feels */}
            <section className="w-full py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How the Experience Feels</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            From the user&apos;s perspective, CLI-AI doesn&apos;t feel like calling an API. It feels like downloading a file that just happens to be generated on the fly.
                        </p>
                    </div>

                    {/* Platform Compatibility Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Globe, label: "Brand-new Laptops", desc: "Fresh out of the box" },
                            { icon: Code, label: "Fresh VS Code", desc: "No extensions needed" },
                            { icon: Server, label: "Shared Lab Computers", desc: "No admin rights required" },
                            { icon: Terminal, label: "Remote Servers", desc: "SSH & CI environments" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/[0.03] rounded-2xl border border-white/10 p-6 text-center hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all group"
                            >
                                <item.icon size={32} className="text-white/30 mx-auto mb-4 group-hover:text-cyan-400 transition-colors" />
                                <p className="font-semibold text-white mb-1">{item.label}</p>
                                <p className="text-xs text-white/40">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-white/60 mt-12 font-mono">
                        If <span className="text-cyan-400">curl</span> works, <span className="text-white">CLI-AI</span> works.
                    </p>
                </div>
            </section>

            {/* Behind the Scenes */}
            <section className="w-full bg-white/[0.02] border-y border-white/5 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row-reverse gap-16">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-teal-500/20 rounded-xl">
                                    <Sparkles className="text-teal-400" size={32} />
                                </div>
                                <h2 className="text-4xl font-bold">Behind the Scenes</h2>
                            </div>
                            <h3 className="text-xl text-teal-300/80 font-mono uppercase tracking-widest">Intelligent Language Detection</h3>

                            <div className="space-y-6 text-white/70 leading-relaxed">
                                <p>
                                    The request contains two key pieces of information: the <span className="text-white font-semibold">prompt</span> and the <span className="text-white font-semibold">output filename</span>.
                                </p>
                                <p>
                                    The filename isn&apos;t just for naming — its extension is used to infer the programming language automatically.
                                </p>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 font-mono text-sm overflow-x-auto">
                                    <div className="flex items-center gap-4">
                                        <span className="text-yellow-300">fib.py</span>
                                        <span className="text-white/40">→</span>
                                        <span className="text-cyan-400">Python</span>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-yellow-300">Button.tsx</span>
                                        <span className="text-white/40">→</span>
                                        <span className="text-cyan-400">React Component</span>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-yellow-300">server.go</span>
                                        <span className="text-white/40">→</span>
                                        <span className="text-cyan-400">Go</span>
                                    </div>
                                </div>
                                <p>
                                    Once the prompt is received, the server uses <span className="text-white font-semibold">Grok via OpenRouter</span> to generate clean, ready-to-use code.
                                </p>
                                <p>
                                    The response is sent back as raw source code with proper <span className="font-mono text-teal-400">Content-Disposition</span> headers so <span className="font-mono text-white">curl -OJ</span> can automatically save it using the correct filename.
                                </p>
                                <p className="text-white/50">
                                    There&apos;s no state, no sessions, and no client logic. Each request stands alone.
                                </p>
                            </div>
                        </div>

                        {/* Architecture Diagram */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-full max-w-sm">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
                                <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 space-y-6">
                                    {/* Flow Steps */}
                                    {[
                                        { num: "01", text: "User sends curl request", color: "cyan" },
                                        { num: "02", text: "Server parses prompt + filename", color: "teal" },
                                        { num: "03", text: "Extension → language inference", color: "green" },
                                        { num: "04", text: "Grok generates code", color: "yellow" },
                                        { num: "05", text: "Raw file returned with headers", color: "cyan" },
                                    ].map((step, i) => (
                                        <div key={step.num} className="flex items-start gap-4">
                                            <span className={`text-xs font-mono text-${step.color}-400 bg-${step.color}-500/10 px-2 py-1 rounded`} style={{ color: step.color === 'cyan' ? '#22d3ee' : step.color === 'teal' ? '#2dd4bf' : step.color === 'green' ? '#4ade80' : '#facc15' }}>
                                                {step.num}
                                            </span>
                                            <span className="text-sm text-white/70">{step.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Approach Works */}
            <section className="w-full max-w-4xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold mb-8">Why This Approach Works</h2>
                <div className="prose prose-invert prose-lg max-w-none text-white/70">
                    <p>
                        By pushing all complexity to the server, CLI-AI avoids the usual trade-offs of AI developer tools.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
                        {[
                            { text: "Nothing to install", subtext: "Just use curl" },
                            { text: "Nothing to update", subtext: "Server handles versioning" },
                            { text: "Nothing to configure", subtext: "Zero API keys on client" },
                        ].map((item) => (
                            <div key={item.text} className="bg-white/5 rounded-xl border border-white/10 p-6 text-center">
                                <p className="font-bold text-white mb-1">{item.text}</p>
                                <p className="text-xs text-white/40">{item.subtext}</p>
                            </div>
                        ))}
                    </div>
                    <p>
                        The terminal remains the interface, and existing tools do all the heavy lifting.
                    </p>
                    <p>
                        CLI-AI isn&apos;t trying to replace an IDE or become a conversational assistant. It&apos;s designed to be <span className="text-white font-semibold">fast</span>, <span className="text-white font-semibold">disposable</span>, and <span className="text-white font-semibold">universally accessible</span>.
                    </p>
                </div>
            </section>

            {/* Closing Thought */}
            <section className="w-full py-32 text-center px-6 bg-gradient-to-t from-white/[0.02] to-transparent">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-2xl font-mono uppercase tracking-widest text-white/40">Final Takeaway</h2>
                    <div className="text-3xl md:text-4xl font-light leading-tight text-white/90">
                        AI-powered developer tools don&apos;t need to be heavy or complicated to be <span className="text-white font-bold border-b border-cyan-500/40">useful</span>.
                    </div>
                    <p className="text-lg text-white/60">
                        Sometimes, the best experience comes from removing everything unnecessary and meeting developers where they already are — <span className="text-cyan-400">in the terminal</span>.
                    </p>
                    <div className="pt-8 flex flex-col items-center gap-2">
                        <p className="font-mono text-xl text-white/80">One command. One file. No setup.</p>
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                    </div>
                </div>
            </section>

        </main>
    );
}
