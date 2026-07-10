import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Acasă" },
  { to: "/despre-noi", label: "Despre noi" },
  { to: "/servicii", label: "Servicii" },
  { to: "/portofoliu", label: "Portofoliu" },
  { to: "/proces", label: "Proces" },
  { to: "/recenzii", label: "Recenzii" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link to="/" className="flex items-center">
          <Logo tone="dark" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-foreground/20 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-foreground transition hover:border-foreground hover:bg-foreground hover:text-background"
          >
            {SITE.phone}
          </a>
        </div>
        <button
          className="rounded-full border border-foreground/20 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meniu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 text-sm uppercase tracking-[0.24em] text-foreground"
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
