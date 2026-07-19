import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Star, Calculator } from "lucide-react";
import heroImg from "@/assets/hero-1.jpg";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ConsultCTA } from "@/components/ConsultCTA";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";
import { REVIEWS } from "@/lib/reviews";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renovări interioare premium în Satu Mare — Stilo" },
      {
        name: "description",
        content:
          "Renovări la cheie pentru case, apartamente și spații comerciale în Satu Mare. Finisaje premium, echipă coordonată, consultație gratuită.",
      },
      { property: "og:title", content: "Renovări interioare premium în Satu Mare — Stilo" },
      { property: "og:description", content: "Renovări la cheie, finisaje premium și execuție impecabilă în Satu Mare. Solicitați o consultație gratuită." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = PROJECTS.slice(0, 4);
  const featuredServices = SERVICES.slice(0, 8);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92svh] w-full overflow-hidden bg-charcoal text-background md:min-h-[100svh]">
        <img
          src={heroImg}
          alt="Interior renovat premium — living cu iluminat ambiental și marmură"
          className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        <div className="relative z-10 flex min-h-[92svh] flex-col justify-end px-5 pb-12 pt-28 sm:px-6 md:min-h-[100svh] md:px-16 md:pb-28 md:pt-32">
          <div className="animate-fade-in-slow mx-auto w-full max-w-7xl">
            <div className="text-[10px] uppercase tracking-[0.42em] text-gold sm:text-xs">
              Renovări premium · Satu Mare
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-[2.1rem] leading-[1.05] text-background sm:text-5xl md:mt-5 md:text-7xl lg:text-[88px]">
              Renovări la cheie.<br />Privește-ți noua casă.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-background/80 sm:text-base md:mt-6 md:text-lg">
              Case, apartamente și spații comerciale — coordonate integral,
              cu finisaje selectate și termene respectate.
            </p>
            <ul className="mt-6 grid max-w-xl gap-2 text-sm text-background/85 sm:grid-cols-2">
              {[
                "O singură echipă coordonată",
                "Termene ferme, respectate",
                "Materiale verificate",
                "Garanție pe manoperă",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/calculator"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] text-charcoal transition hover:bg-gold/90 sm:px-8 sm:py-4 sm:text-xs"
              >
                <Calculator className="h-4 w-4" />
                Calculează prețul
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-background/40 px-6 py-3.5 text-[11px] uppercase tracking-[0.24em] text-background transition hover:bg-background hover:text-charcoal sm:px-8 sm:py-4 sm:text-xs"
              >
                Consultație gratuită
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-12 md:gap-12 md:px-10 md:py-36">
        <Reveal className="md:col-span-5">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Despre Stilo Renovation
          </div>
          <h2 className="mt-6 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Renovări executate cu răbdare, cu atenție și cu respect pentru fiecare metru pătrat.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Suntem o echipă din Satu Mare specializată în renovări interioare
            complete și finisaje premium. Lucrăm pentru clienți exigenți,
            pentru care contează nu doar rezultatul final, ci și modul în
            care se desfășoară șantierul: comunicare clară, curățenie,
            termene realiste și o singură echipă responsabilă pentru
            întregul proiect.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 md:mt-10 md:gap-8">
            {[
              { k: "10+", v: "Ani experiență" },
              { k: "120+", v: "Proiecte finalizate" },
              { k: "5.0", v: "Rating Google" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-foreground sm:text-4xl">{s.k}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border/60 bg-beige/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Servicii
              </div>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
                Tot ce aveți nevoie pentru o renovare completă.
              </h2>
            </Reveal>
            <Link
              to="/servicii"
              className="text-[11px] uppercase tracking-[0.28em] text-foreground underline-offset-8 hover:underline"
            >
              Toate serviciile →
            </Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {featuredServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  to="/servicii"
                  key={s.slug}
                  className="group flex flex-col gap-4 bg-background p-6 transition hover:bg-background/60 sm:gap-5 sm:p-8"
                >
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                  <div className="font-display text-xl text-foreground sm:text-2xl">
                    {s.title}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <div className="mt-auto text-[10px] uppercase tracking-[0.28em] text-foreground/70 opacity-0 transition group-hover:opacity-100">
                    Află mai mult →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-36">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Transformări
            </div>
            <h2 className="mt-6 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Înainte și după. Diferența făcută de o echipă profesionistă.
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              Trageți de bară pentru a compara. Fiecare proiect trece prin
              aceleași etape riguroase, indiferent de dimensiune.
            </p>
            <Link
              to="/portofoliu"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-foreground underline-offset-8 hover:underline md:mt-10"
            >
              Vezi toate proiectele →
            </Link>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <BeforeAfter
              before={PROJECTS[0].before}
              after={PROJECTS[0].after}
              label={PROJECTS[0].title}
            />
          </Reveal>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:px-10 md:pb-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Proiecte recente
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              O selecție din munca noastră.
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-16 md:gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to="/portofoliu/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden rounded-2xl bg-muted"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex items-end justify-between p-5 sm:p-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      {p.category} · {p.location}
                    </div>
                    <div className="mt-2 font-display text-xl text-foreground sm:text-2xl">
                      {p.title}
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y border-border/60 bg-beige/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-32">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              De ce Stilo
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Seriozitate, organizare, calitate.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 md:grid-cols-3 md:gap-10">
            {[
              {
                t: "O singură echipă",
                d: "De la demolări la finisaje, coordonăm întreg procesul — fără intermediari, fără surprize.",
              },
              {
                t: "Termene respectate",
                d: "Planificare atentă și execuție riguroasă, cu etape clare comunicate în avans.",
              },
              {
                t: "Finisaje premium",
                d: "Lucrăm cu materiale de calitate și cu meșteri exigenți față de propria muncă.",
              },
              {
                t: "Șantier curat",
                d: "Respectăm locuința și vecinii — cu protecții, ordine și program predictibil.",
              },
              {
                t: "Comunicare clară",
                d: "Un singur punct de contact, decizii transparente și rapoarte periodice pentru dumneavoastră.",
              },
              {
                t: "Garanție",
                d: "Ne asumăm calitatea execuției și rămânem alături de dumneavoastră și după predare.",
              },
            ].map((it) => (
              <Reveal key={it.t}>
                <div className="flex items-start gap-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-xl text-foreground">{it.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {it.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-36">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Recenzii Google
              </div>
              <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
                Ce spun clienții noștri.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[0,1,2,3,4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">5.0 din 5</div>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {REVIEWS.slice(0, 2).map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-background p-6 sm:gap-6 sm:p-8">
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                  "{r.text}"
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
                  <div className="text-sm text-foreground">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {r.when}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/recenzii"
            className="text-[11px] uppercase tracking-[0.28em] text-foreground underline-offset-8 hover:underline"
          >
            Toate recenziile →
          </Link>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:px-10 md:pb-24">
        <div className="grid gap-8 rounded-3xl bg-beige/50 p-6 sm:p-8 md:grid-cols-2 md:gap-10 md:p-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Zonă de acoperire
            </div>
            <h2 className="mt-4 font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
              Satu Mare și împrejurimi
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Program: {SITE.hours}
            </p>
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-background"
            >
              Deschide în Google Maps
            </a>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Locație Stilo Renovation"
              src={SITE.mapsEmbed}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ConsultCTA />
    </>
  );
}
