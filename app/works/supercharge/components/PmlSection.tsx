"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function PmlSection() {
    return (
        <section className="w-full py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-24">


                <div className="space-y-6 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Introducing PML: Personal Memory Language</h2>
                    <div className="h-1 w-20 bg-violet-500/40 rounded-full" />
                    <div className="text-lg text-white/70 leading-relaxed font-light space-y-6 mt-8">
                        <p>
                            The core innovation in Supercharge isn't the chat UI. It's the protocol we invented to represent human memory in a format that language models can efficiently consume.
                        </p>
                        <p>
                            We call it <strong className="text-white text-xl">PML — Personal Memory Language.</strong>
                        </p>
                        <p>
                            PML is a compressed, structured syntax for encoding everything you are into as few tokens as possible, then injecting it into the system prompt of any LLM call. The model reads it, understands it, and uses it to hydrate every response with contextual awareness — without ever exposing the syntax to you.
                        </p>
                        <p>
                            You never write PML. You never see PML. You just talk naturally, and Supercharge handles the rest.
                        </p>
                    </div>
                </div>


                <div className="space-y-8">
                    <h3 className="text-2xl font-bold">The Structure of a Memory</h3>
                    <p className="text-white/70 font-light text-lg">Every memory in PML is called a node. A node looks like this:</p>

                    <PmlNodeGraphic />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm font-mono text-white/70">
                        <div><span className="text-violet-400 mr-2">COMMAND</span>what to do with this memory</div>
                        <div><span className="text-teal-400 mr-2">#CAT</span>two-letter category hash</div>
                        <div><span className="text-amber-400 mr-2">:Root.Sub</span>dot-notation path</div>
                        <div><span className="text-white mr-2">[Item]</span>actual memory content</div>
                        <div><span className="text-green-400 mr-2">|key:val</span>inline metadata (sentiment, etc)</div>
                        <div><span className="text-blue-400 mr-2">&lt;key:val&gt;</span>global context (timestamp)</div>
                        <div><span className="text-pink-400 mr-2">@LINK</span>relationship link</div>
                        <div><span className="text-orange-400 mr-2">^INHERIT</span>inherited schema</div>
                    </div>
                    <p className="text-white/70 font-light text-lg">
                        This is maximally information-dense. A complete picture of a person — their life, preferences, relationships, and ongoing work — can be encoded in 800 to 2,000 tokens. That's less than a single page of plain text.
                    </p>
                </div>


                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-6">
                        <h3 className="text-2xl font-bold">The Ten Categories</h3>
                        <p className="text-white/70 font-light text-lg">
                            PML organises memories into ten categories. These aren't arbitrary buckets. They map directly to how a human being would reason about another person if they were trying to remember everything important about them.
                        </p>
                        <CategoryTable />
                    </div>
                    <div className="flex-1 w-full flex justify-center">
                        <MemoryWheelGraphic />
                    </div>
                </div>


                <div className="space-y-8">
                    <h3 className="text-2xl font-bold">A Real Conversation, in PML</h3>
                    <p className="text-white/70 font-light text-lg">
                        Here's what PML output looks like for a simple conversation. This is what runs silently behind the scenes as you chat.
                    </p>

                    <LiveGenerationGraphic />
                </div>

            </div>
        </section>
    );
}

function PmlNodeGraphic() {
    return (
        <div className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl p-6 overflow-x-auto shadow-2xl">
            <div className="font-mono text-sm md:text-base whitespace-nowrap flex gap-2">
                <span className="text-violet-400 font-bold">COMMAND</span>
                <span className="text-teal-400">#CAT</span>
                <span className="text-amber-400">:Root.Sub</span>
                <span className="text-white">[Item|</span>
                <span className="text-green-400">key:val|key:val</span>
                <span className="text-white">]</span>
                <span className="text-blue-400">&lt;GlobalKey:val&gt;</span>
                <span className="text-pink-400">@LINK</span>
                <span className="text-orange-400">^INHERIT</span>
            </div>
        </div>
    );
}

function CategoryTable() {
    const cats = [
        { h: '#pf', n: 'Preference', d: 'Likes, dislikes, UI' },
        { h: '#ac', n: 'Action', d: 'Past events, completed tasks' },
        { h: '#fc', n: 'Fact', d: 'Data, specs' },
        { h: '#en', n: 'Entity', d: 'People, objects, relations' },
        { h: '#lc', n: 'Location', d: 'Addresses, places' },
        { h: '#pl', n: 'Plan', d: 'Goals, intent, scheduled' },
        { h: '#wk', n: 'Work', d: 'Projects, clients' },
        { h: '#hl', n: 'Health', d: 'Medical, fitness' },
        { h: '#st', n: 'State', d: 'Mood, energy, status' },
        { h: '#ep', n: 'Episode', d: 'Timestamped log' },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cats.map((c, i) => (
                <div key={i} className="flex flex-col p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-1">
                        <code className="text-xs text-teal-400 bg-teal-400/10 px-1 rounded">{c.h}</code>
                        <span className="font-bold text-sm text-white">{c.n}</span>
                    </div>
                    <span className="text-xs text-white/50">{c.d}</span>
                </div>
            ))}
        </div>
    );
}

function MemoryWheelGraphic() {
    const colors = [
        'bg-[#8b5cf6]', 'bg-[#7c3aed]', 'bg-[#6d28d9]', 'bg-[#5b21b6]', 'bg-[#4c1d95]',
        'bg-[#2dd4bf]', 'bg-[#14b8a6]', 'bg-[#0f766e]', 'bg-[#0d9488]', 'bg-[#115e59]'
    ];
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center p-8">
            <div className="absolute inset-0 rounded-full bg-violet-900/10 blur-xl" />


            <div className="absolute inset-0">
                {colors.map((c, i) => (
                    <div key={i} className="absolute inset-0 origin-center" style={{ transform: `rotate(${i * 36}deg)` }}>
                        <div className={`w-2 h-full ${c} mx-auto opacity-20`} />
                    </div>
                ))}
            </div>

            <div className="w-full h-full rounded-full border-2 border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />

            <div className="absolute w-32 h-32 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 shadow-2xl backdrop-blur-md">
                <div className="text-center">
                    <span className="block text-sm font-bold text-white">Your</span>
                    <span className="block text-sm font-bold text-violet-400">Memory Graph</span>
                </div>
            </div>

            <motion.div
                className="absolute inset-0 rounded-full border border-violet-500/50"
                animate={{ scale: [1, 1.1, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    );
}

function LiveGenerationGraphic() {
    const [step, setStep] = useState(0);

    const inputs = [
        "I'm Arjun, based in Mumbai. I'm a UX designer working on an app called Pulse for client NovaTech.",
        "I hate Comic Sans but I actually love it ironically on memes.",
        "My weight was 87kg last month, now I'm down to 82kg."
    ];

    const outputs = [
        `STORE #en:person [arjun|rel:self] <src:user>\nSTORE #lc:home [mumbai] @en:person.arjun\nSTORE #fc:identity [profession|val:ux_designer] @en:person.arjun\nSTORE #wk:project [pulse] @en:client.novatech <p:H|ctx:work>\nSTORE #en:client [novatech] @wk:project.pulse`,
        `STORE #pf:design [!comic_sans|s:--]\nSTORE #pf:design.meme [comic_sans|c:ironic|s:++]`,
        `PATCH #hl:fitness [weight|val:n:87|unit:kg] <t:2026-01-22>\nPATCH #hl:fitness [weight|val:n:82|unit:kg] <t:2026-02-22>`
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((s) => (s < 2 ? s + 1 : 0));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full mt-12 rounded-2xl border border-white/10 overflow-hidden bg-black/50 shadow-2xl flex flex-col md:flex-row">

            <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center min-h-[200px] relative">
                <div className="absolute inset-0 bg-violet-500/5" />
                <div className="relative z-10 w-fit ml-auto bg-violet-600 text-white p-4 rounded-2xl rounded-tr-sm text-sm">
                    {inputs[step]}
                </div>
            </div>

            <div className="flex-[1.5] bg-[#050505] p-6 font-mono text-xs md:text-sm text-white/80 overflow-x-auto min-h-[200px] flex items-center">
                <pre className="text-left w-full">
                    {outputs[step].split('\n').map((line, i) => {

                        const highlighted = line
                            .replace(/(STORE|PATCH)/g, '<span class="text-violet-400 font-bold">$1</span>')
                            .replace(/(#[a-z]+:[a-z.]+)/g, '<span class="text-teal-400">$1</span>')
                            .replace(/(\[.*?\])/g, '<span class="text-white">$1</span>')
                            .replace(/(@[a-z]+:[a-z.]+)/g, '<span class="text-pink-400">$1</span>')
                            .replace(/(<.*?>)/g, '<span class="text-blue-400">$1</span>');

                        return (
                            <motion.div
                                key={`${step}-${i}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                dangerouslySetInnerHTML={{ __html: highlighted }}
                                className="mb-1"
                            />
                        );
                    })}
                </pre>
            </div>
        </div>
    );
}

