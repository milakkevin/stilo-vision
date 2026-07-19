import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

export function LoadingScreen() {
  const [gone, setGone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("stilo_loaded") === "1") {
      setGone(true);
      return;
    }
    const start = performance.now();
    const duration = 2000;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setFadeOut(true), 2100);
    const t2 = setTimeout(() => {
      sessionStorage.setItem("stilo_loaded", "1");
      setGone(true);
    }, 2800);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0b0c] transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={fadeOut}
    >
      {/* Radial copper glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(50%_50%_at_50%_50%,var(--gold),transparent_65%)]" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_80%_at_50%_50%,transparent_60%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative flex flex-col items-center gap-8 px-8">
        <div className="animate-logo-in relative">
          <LogoMark className="h-28 w-auto md:h-36" />
          {/* Shimmer sweep */}
          <div className="animate-sweep pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 -inset-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
        </div>

        <div className="animate-fade-in-slow flex flex-col items-center gap-4">
          <div className="text-[10px] uppercase tracking-[0.5em] text-gold">
            Stilo Renovation
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-white/50">
            Interioare premium · Satu Mare
          </div>

          {/* Progress bar */}
          <div className="mt-2 h-px w-48 overflow-hidden bg-white/10">
            <div
              className="h-full bg-gold transition-[width] duration-100 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
