import Image from "next/image";
import { Github, Linkedin, Download, Mail, Phone } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="identity"
            className="relative z-10 w-full aspect-square md:aspect-auto md:h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[2.5rem] md:rounded-b-[8rem] bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]"
        >
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-70"
                style={{
                    background: "radial-gradient(circle, transparent 0%, black 100%)"
                }}
            />

            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <h1 className="text-[22vw] md:text-[14vw] font-bold text-black tracking-widest leading-none uppercase opacity-90">
                    <span className="sr-only">Ayan Mukherjee software developer portfolio</span>
                    <span aria-hidden="true">Ayan</span>
                </h1>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-center w-full h-full z-20 pointer-events-none">
                <Image
                    src="/ayan.png"
                    alt="Portrait of Ayan Mukherjee"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-bottom pointer-events-none"
                />
            </div>

            <div className="absolute left-[22%] lg:left-[27%] top-[62%] z-30 max-w-[280px] hidden md:block">
                <p className="text-sm text-black/60 font-medium leading-relaxed tracking-wide">
                    I&apos;m Ayan Mukherjee, a software developer building full-stack web apps, mobile apps, and AI tools.
                </p>
            </div>

            <div className="absolute right-[22%] lg:right-[29%] top-[62%] z-30 hidden md:flex flex-col items-end gap-5">
                <a
                    href="/ayan-resume.pdf"
                    download
                    className="text-sm text-black/60 font-semibold tracking-wide hover:text-black transition-colors duration-300 flex items-center gap-2.5"
                >
                    <Download size={16} strokeWidth={2} />
                    Download Resume
                </a>
                <div className="flex items-center gap-4">
                    {[
                        { icon: Mail, href: "mailto:ayanmukherjee.official@gmail.com", label: "Email" },
                        { icon: Phone, href: "tel:+916206115536", label: "Phone" },
                        { icon: Github, href: "https://github.com/ayanmukherjee-collab", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/ayan-vfx", label: "LinkedIn" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            aria-label={item.label}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-black/40 hover:text-black transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.4] origin-bottom inline-block"
                        >
                            <item.icon size={20} strokeWidth={2} />
                        </a>
                    ))}
                </div>
            </div>

            <div
                className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center gap-3 px-6 pb-6 pt-8 md:hidden"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}
            >
                <p className="text-[10px] text-white/80 font-medium leading-relaxed tracking-wide text-center max-w-[320px]">
                    I&apos;m Ayan Mukherjee, and I build web apps, mobile apps, and AI tools.
                </p>
                <div className="flex items-center gap-5 mt-1">
                    <a
                        href="/ayan-resume.pdf"
                        download
                        className="text-[10px] text-white/80 font-semibold tracking-wide hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                    >
                        <Download size={12} strokeWidth={2} />
                        Resume
                    </a>
                    <span className="w-px h-3 bg-white/30" />
                    {[
                        { icon: Mail, href: "mailto:ayanmukherjee.official@gmail.com", label: "Email" },
                        { icon: Phone, href: "tel:+916206115536", label: "Phone" },
                        { icon: Github, href: "https://github.com/ayanmukherjee-collab", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/ayan-vfx", label: "LinkedIn" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            aria-label={item.label}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-white/60 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.4] origin-bottom inline-block"
                        >
                            <item.icon size={16} strokeWidth={2} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
