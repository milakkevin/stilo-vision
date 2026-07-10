import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

export function LoadingScreen() {
  const [gone, setGone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("stilo_loaded") === "1") {
      setGone(true);
      return;
    }
    const t1 = setTimeout(() => setFadeOut(true), 1800);
    const t2 = setTimeout(() => {
      sessionStorage.setItem("stilo_loaded", "1");
      setGone(true);
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={fadeOut}
    >
      <div className="relative overflow-hidden px-6 py-4">
        <div className="animate-logo-in flex flex-col items-center gap-6 text-white">
          <LogoMark className="h-14 w-14 text-white" />
          <div className="text-center">
            <div className="font-display text-3xl uppercase tracking-[0.42em] text-white md:text-4xl">
              Stilo
              <span className="mx-2 text-gold">·</span>
              Renovation
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-white/50">
              Interioare premium · Satu Mare
            </div>
          </div>
        </div>
        <div className="animate-sweep pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>
    </div>
  );
}
