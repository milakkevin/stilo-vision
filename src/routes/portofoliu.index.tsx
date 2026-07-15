import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "./despre-noi";
import { Reveal } from "@/components/Reveal";
import { ConsultCTA } from "@/components/ConsultCTA";
import { PROJECTS } from "@/lib/projects";
import hero from "@/assets/project-4.jpg";

export const Route = createFileRoute("/portofoliu/")({
  head: () => ({
    meta: [
      { title: "Portofoliu — Proiecte de renovare | Stilo" },
      {
        name: "description",
        content:
          "Selecție de proiecte executate de Stilo Renovation în Satu Mare: renovări case, apartamente, restaurante și spații comerciale, cu finisaje premium.",
      },
      { property: "og:title", content: "Portofoliu — Stilo Renovation" },
      { property: "og:description", content: "Renovări case, apartamente, restaurante și spații comerciale în Satu Mare — proiecte executate la cheie cu finisaje premium." },
      { property: "og:url", content: "/portofoliu" },
    ],
    links: [{ rel: "canonical", href: "/portofoliu" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Portofoliu"
        title="Proiecte premium, executate cu răbdare, în Satu Mare și împrejurimi."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 60} className="mb-6 inline-block w-full">
              <Link
                to="/portofoliu/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden rounded-2xl bg-muted"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className={`w-full object-cover transition duration-[1400ms] group-hover:scale-105 ${
                      i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 flex translate-y-2 items-end justify-between text-background opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-background/70">
                        {p.category} · {p.location}
                      </div>
                      <div className="mt-1 font-display text-2xl">{p.title}</div>
                    </div>
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-5 group-hover:opacity-0">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {p.category}
                    </div>
                    <div className="mt-1 font-display text-lg text-foreground">
                      {p.title}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ConsultCTA />
    </>
  );
}
