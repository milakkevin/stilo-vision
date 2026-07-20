import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SITE, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-[#0f0f10] text-background/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="sm:col-span-2 md:col-span-2">
          <Logo tone="light" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/60">
            Renovări interioare premium în Satu Mare și împrejurimi. Echipă serioasă,
            execuție impecabilă, finisaje la standarde înalte — Scopul nostru e de a
            transforma dorinta in realitate
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
            Navigare
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/despre-noi" className="hover:text-background">Despre noi</Link></li>
            <li><Link to="/servicii" className="hover:text-background">Servicii</Link></li>
            <li><Link to="/portofoliu" className="hover:text-background">Portofoliu</Link></li>
            <li><Link to="/calculator" className="hover:text-background">Calculator preț</Link></li>
            <li><Link to="/proces" className="hover:text-background">Procesul nostru</Link></li>
            <li><Link to="/recenzii" className="hover:text-background">Recenzii</Link></li>
            <li><Link to="/contact" className="hover:text-background">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
            Contact
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-background">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-background">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-background break-all">
                {SITE.email}
              </a>
            </li>
              <a href={SITE.mapsLink} target="_blank" rel="noreferrer" className="hover:text-background">
                {SITE.city} și împrejurimi
              </a>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-background">
                Facebook
              </a>
            </li>
            <li className="pt-2 text-xs text-background/50">{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-background/50 sm:px-6 md:flex-row md:px-10">
          <div>© {new Date().getFullYear()} {SITE.legal}. Toate drepturile rezervate.</div>
          <div className="uppercase tracking-[0.28em]">Satu Mare · România</div>
        </div>
      </div>
    </footer>
  );
}
