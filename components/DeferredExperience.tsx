"use client";

import dynamic from "next/dynamic";
import { startTransition, useEffect, useRef, useState } from "react";

const Experience = dynamic(() => import("./Experience"), {
  ssr: false,
  loading: () => null,
});

export default function DeferredExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (shouldMount) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        startTransition(() => {
          setShouldMount(true);
        });
        observer.disconnect();
      },
      { rootMargin: "350px 0px" }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [shouldMount]);

  return (
    <section id="experience" ref={sectionRef} className="w-full min-h-[100vh] overflow-hidden">
      {shouldMount ? (
        <Experience />
      ) : (
        <div className="h-[100vh] w-full bg-[#0b0b0d]" aria-hidden="true" />
      )}
    </section>
  );
}
