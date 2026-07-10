import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "./despre-noi";
import { Reveal } from "@/components/Reveal";
import { ConsultCTA } from "@/components/ConsultCTA";
import { REVIEWS } from "@/lib/reviews";
import hero from "@/assets/project-5.jpg";

export const Route = createFileRoute("/recenzii")({
  head: () => ({
    meta: [
      { title: "Recenzii clienți — Stilo Renovation | 5.0 pe Google" },
      {
        name: "description",
        content:
          "Ce spun clienții Stilo Renovation despre seriozitate, calitate și termene de execuție. Rating Google 5.0.",
      },
      { property: "og:title", content: "Recenzii — Stilo Renovation" },
      { property: "og:url", content: "/recenzii" },
    ],
    links: [{ rel: "canonical", href: "/recenzii" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Recenzii"
        title="Clienți care ne-au recomandat prietenilor lor."
        image={hero}
      />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex">
              {[0,1,2,3,4].map((i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <div className="font-display text-4xl text-foreground">5.0 din 5</div>
            <div className="text-sm text-muted-foreground">Rating Google Business</div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + i} delay={i * 80}>
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
      </section>

      <ConsultCTA />
    </>
  );
}
