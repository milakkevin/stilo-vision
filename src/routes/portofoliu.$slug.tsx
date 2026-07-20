import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ConsultCTA } from "@/components/ConsultCTA";
import { Lightbox } from "@/components/Lightbox";
import { projectBySlug, PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/portofoliu/$slug")({
  loader: ({ params }): Project => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Proiect indisponibil" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Stilo Renovation` },
        { name: "description", content: loaderData.description.slice(0, 155) },
        { property: "og:title", content: `${loaderData.title} — Stilo Renovation` },
        { property: "og:description", content: loaderData.description.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:image", content: loaderData.cover },
        { property: "og:url", content: `/portofoliu/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/portofoliu/${loaderData.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.description,
            image: loaderData.gallery,
            articleSection: loaderData.category,
            about: loaderData.category,
            locationCreated: loaderData.location,
            author: { "@type": "Organization", name: "Stilo Renovation SRL" },
            publisher: { "@type": "Organization", name: "Stilo Renovation SRL" },
          }),
        },
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display text-3xl">Proiect indisponibil</div>
        <Link to="/portofoliu" className="mt-6 inline-flex text-sm underline">
          Înapoi la portofoliu
        </Link>
      </div>
    </div>
  ),
});

// Custom masonry span pattern for variety
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "",
];

function Page() {
  const p = Route.useLoaderData() as Project;
  const others = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const lbImages = p.gallery.map((src, i) => ({
    src,
    alt: p.galleryAlts?.[i] ?? `${p.title} — imagine ${i + 1}`,
  }));

  return (
    <>
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden bg-charcoal text-background">
        <img
          src={p.cover}
          alt={p.title}
          className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              {p.category} · {p.location}
            </div>
            {p.badge && (
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {p.badge}
              </span>
            )}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl">
            {p.title}
          </h1>
          {p.client && (
            <div className="mt-4 text-sm uppercase tracking-[0.28em] text-background/75">
              Client: <span className="text-background">{p.client}</span>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Despre proiect</div>
          <h2 className="mt-4 font-display text-4xl text-foreground">
            Un spațiu regândit până la ultimul detaliu.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {p.description}
          </p>

          {p.chips && p.chips.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {p.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          {(!p.chips || p.chips.length === 0) && (
            <div className="mt-8">
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                Servicii incluse
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <Reveal>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Galerie</div>
              <div className="mt-2 font-display text-3xl md:text-4xl">
                {p.gallery.length} imagini din proiect
              </div>
            </div>
            <div className="hidden text-xs uppercase tracking-[0.28em] text-muted-foreground sm:block">
              Click pentru fullscreen
            </div>
          </div>
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4 md:auto-rows-[260px]">
          {p.gallery.map((g, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setLbIndex(i)}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${spans[i % spans.length]}`}
              aria-label={`Deschide imaginea ${i + 1}`}
            >
              <img
                src={g}
                alt={`${p.title} — imagine ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")} / {String(p.gallery.length).padStart(2, "0")}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <Reveal>
          <div className="mb-8 text-[10px] uppercase tracking-[0.4em] text-gold">
            Înainte / După
          </div>
          <BeforeAfter before={p.before} after={p.after} label={p.title} />
        </Reveal>
      </section>

      {/* Project CTAs */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-charcoal px-8 py-14 text-background md:px-14 md:py-20">
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_85%_15%,var(--gold),transparent_60%)]" />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                V-a plăcut acest proiect?
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl">
                Construim și pentru dumneavoastră un spațiu la același standard.
              </h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-charcoal transition hover:bg-gold/90"
              >
                Cere o ofertă <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition hover:border-background hover:bg-background hover:text-charcoal"
              >
                <Phone className="h-4 w-4" /> Sună acum
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="flex items-end justify-between">
          <div className="font-display text-3xl">Alte proiecte</div>
          <Link to="/portofoliu" className="text-[11px] uppercase tracking-[0.28em]">
            Toate proiectele →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/portofoliu/$slug"
              params={{ slug: o.slug }}
              className="group block overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={o.cover}
                  alt={o.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="mt-4 font-display text-xl">{o.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <ConsultCTA />

      <Lightbox
        images={lbImages}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onIndex={setLbIndex}
      />
    </>
  );
}
