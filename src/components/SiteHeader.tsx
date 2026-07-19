import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Acasă" },
  { to: "/despre-noi", label: "Despre" },
  { to: "/servicii", label: "Servicii" },
  { to: "/portofoliu", label: "Portofoliu" },
  { to: "/calculator", label: "Calculator" },
  { to: "/proces", label: "Proces" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyLoaded = sessionStorage.getItem("stilo_loaded") === "1";
    if (alreadyLoaded) {
      setRevealed(true);
      return;
    }
    const timer = setTimeout(() => setRevealed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Solid background: readable everywhere (over dark heroes, on light bodies).
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/90 backdrop-blur-xl"
          : "border-transparent bg-[#0f0f10]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 md:py-4 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Stilo Renovation — acasă">
          <Logo tone={scrolled ? "dark" : "light"} size="sm" />
        </Link>
        <nav className="hidden justify-center gap-6 xl:gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-[11px] uppercase tracking-[0.24em] transition ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/75 hover:text-background"
              }`}
              activeProps={{
                className: scrolled ? "text-foreground" : "text-background",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition sm:inline-flex ${
              scrolled
                ? "border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
                : "border-background/30 text-background hover:bg-background hover:text-charcoal"
            }`}
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{SITE.phone}</span>
          </a>
          <button
            className={`rounded-full border p-2 lg:hidden ${
              scrolled ? "border-foreground/20 text-foreground" : "border-background/30 text-background"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3.5 text-sm uppercase tracking-[0.24em] text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="mt-4 rounded-full bg-foreground px-5 py-3 text-center text-xs uppercase tracking-[0.22em] text-background"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
