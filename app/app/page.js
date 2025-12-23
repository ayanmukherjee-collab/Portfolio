import HeroSection from "@/components/HeroSection";
import ScrollTapes from "@/components/ScrollTapes";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollTapes />
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-bg px-5 py-20 relative z-10">
        <h2 className="font-grotesk font-bold text-4xl md:text-6xl text-text mb-6">Projects</h2>
        <p className="text-lg text-white/60">Coming soon...</p>
      </section>

      <section id="blog" className="min-h-screen flex flex-col justify-center items-center bg-bg px-5 py-20 relative z-10">
        <h2 className="font-grotesk font-bold text-4xl md:text-6xl text-text mb-6">Blog</h2>
        <p className="text-lg text-white/60">Coming soon...</p>
      </section>

      <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-bg px-5 py-20 relative z-10">
        <h2 className="font-grotesk font-bold text-4xl md:text-6xl text-text mb-6">Contact</h2>
        <p className="text-lg text-white/60">Coming soon...</p>
      </section>
    </main>
  );
}
