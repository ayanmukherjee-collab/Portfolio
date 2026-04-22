"use client";

import dynamic from "next/dynamic";
import { startTransition, useEffect, useRef, useState } from "react";

const SelectedWorks = dynamic(() => import("./SelectedWorks"), {
  ssr: false,
  loading: () => null,
});

export default function DeferredSelectedWorks() {
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
      { rootMargin: "450px 0px" }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [shouldMount]);

  return (
    <section id="work" ref={sectionRef} className="w-full min-h-[100dvh]">
      {shouldMount ? (
        <SelectedWorks />
      ) : (
        <div className="h-[100dvh] w-full bg-[#0b0b0d]" aria-hidden="true" />
      )}
    </section>
  );
}
