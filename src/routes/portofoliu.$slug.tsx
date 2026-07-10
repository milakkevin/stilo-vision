import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ConsultCTA } from "@/components/ConsultCTA";
import { projectBySlug, PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/portofoliu/$slug")({
  loader: ({ params }) => {
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

function Page() {
  const p = Route.useLoaderData() as Project;
  const others = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);

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
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
            {p.category} · {p.location}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl">
            {p.title}
          </h1>
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
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <Reveal>
          <div className="mb-8 text-[10px] uppercase tracking-[0.4em] text-gold">
            Înainte / După
          </div>
          <BeforeAfter before={p.before} after={p.after} label={p.title} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {p.gallery.map((g, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={g}
                  alt={`${p.title} — imagine ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
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
    </>
  );
}
