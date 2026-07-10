import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Star } from "lucide-react";
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
      { title: "Stilo Renovation | Renovări Interioare Premium în Satu Mare" },
      {
        name: "description",
        content:
          "Stilo Renovation — renovări interioare complete, amenajări moderne și finisaje premium în Satu Mare. Consultație gratuită pentru case, apartamente și spații comerciale.",
      },
      { property: "og:title", content: "Stilo Renovation | Renovări Premium în Satu Mare" },
      { property: "og:description", content: "Renovări la cheie, finisaje premium, execuție impecabilă." },
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
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal text-background">
        <img
          src={heroImg}
          alt="Interior renovat premium — living cu iluminat ambiental și marmură"
          className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-28">
          <div className="animate-fade-in-slow mx-auto w-full max-w-7xl">
            <div className="text-[10px] uppercase tracking-[0.42em] text-gold">
              Renovări interioare premium · Satu Mare
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-background md:text-7xl lg:text-[92px]">
              Interioare gândite până la ultimul detaliu.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-background/75 md:text-lg">
              Coordonăm renovarea completă a caselor, apartamentelor și
              spațiilor comerciale — de la primul desen până la predarea la
              cheie. Finisaje selectate, execuție impecabilă, termene
              respectate.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-charcoal transition hover:bg-gold/90"
              >
                Consultație gratuită
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/portofoliu"
                className="rounded-full border border-background/40 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition hover:bg-background hover:text-charcoal"
              >
                Vezi proiectele
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-background/60">
          scroll
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-12 md:px-10 md:py-36">
        <Reveal className="md:col-span-5">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Despre Stilo Renovation
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl">
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
          <div className="mt-10 grid grid-cols-3 gap-8">
            {[
              { k: "10+", v: "Ani experiență" },
              { k: "120+", v: "Proiecte finalizate" },
              { k: "5.0", v: "Rating Google" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl text-foreground">{s.k}</div>
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Servicii
              </div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-5xl">
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
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  to="/servicii"
                  key={s.slug}
                  className="group flex flex-col gap-5 bg-background p-8 transition hover:bg-background/60"
                >
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                  <div className="font-display text-2xl text-foreground">
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
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Transformări
            </div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Înainte și după. Diferența făcută de o echipă profesionistă.
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              Trageți de bară pentru a compara. Fiecare proiect trece prin
              aceleași etape riguroase, indiferent de dimensiune.
            </p>
            <Link
              to="/portofoliu"
              className="mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-foreground underline-offset-8 hover:underline"
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
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Proiecte recente
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              O selecție din munca noastră.
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
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
                <div className="flex items-end justify-between p-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      {p.category} · {p.location}
                    </div>
                    <div className="mt-2 font-display text-2xl text-foreground">
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              De ce Stilo
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-5xl">
              Seriozitate, organizare, calitate.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
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
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Recenzii Google
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
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
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {REVIEWS.slice(0, 2).map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-background p-8">
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-2xl leading-snug text-foreground">
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
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-10 rounded-3xl bg-beige/50 p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Zonă de acoperire
            </div>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
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
