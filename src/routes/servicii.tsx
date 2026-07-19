import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./despre-noi";
import { ConsultCTA } from "@/components/ConsultCTA";
import { SERVICES } from "@/lib/services";
import hero from "@/assets/project-1.jpg";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii — Renovări și finisaje premium | Stilo" },
      {
        name: "description",
        content:
          "Renovări la cheie coordonate de o singură echipă: finisaje premium, rigips, iluminat, gresie, parchet și instalații în Satu Mare.",
      },
      { property: "og:title", content: "Servicii — Stilo Renovation" },
      { property: "og:description", content: "Toate meseriile pe același șantier: renovări complete, finisaje premium, iluminat, instalații și design interior în Satu Mare." },
      { property: "og:url", content: "/servicii" },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Servicii Stilo Renovation",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.short,
              areaServed: "Satu Mare",
              provider: {
                "@type": "LocalBusiness",
                name: "Stilo Renovation SRL",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Servicii"
        title="Renovări la cheie, executate cu răbdare și cu atenție la fiecare detaliu."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Ce facem</div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Toate meseriile pe același șantier.
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              Prin coordonarea integrală a lucrării, evităm decalajele între
              echipe și greșelile costisitoare care apar când sunt implicați
              mai mulți furnizori.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.slug} className="group flex flex-col gap-4 bg-background p-6 transition hover:bg-beige/40 sm:gap-5 sm:p-8">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <div className="font-display text-xl text-foreground sm:text-2xl">{s.title}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <ul className="mt-2 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="text-xs text-muted-foreground">
                      · {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-beige/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Beneficii</div>
              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
                De ce să alegeți o echipă completă.
              </h2>
              <ul className="mt-8 space-y-4 text-base text-muted-foreground">
                <li>· Un singur contract, un singur punct de contact.</li>
                <li>· Etape corelate — fără timp mort între meserii.</li>
                <li>· Comunicare directă cu coordonatorul de proiect.</li>
                <li>· Materiale verificate, alese împreună cu dumneavoastră.</li>
                <li>· Garanție pentru manopera executată.</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Cum decurge</div>
              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
                Procesul, pe scurt.
              </h2>
              <ol className="mt-8 space-y-4 text-base text-muted-foreground">
                <li><span className="mr-3 font-display text-gold">01.</span> Consultație gratuită.</li>
                <li><span className="mr-3 font-display text-gold">02.</span> Vizită la locație.</li>
                <li><span className="mr-3 font-display text-gold">03.</span> Ofertă personalizată.</li>
                <li><span className="mr-3 font-display text-gold">04.</span> Execuție.</li>
                <li><span className="mr-3 font-display text-gold">05.</span> Predare la cheie.</li>
              </ol>
              <Link
                to="/proces"
                className="mt-8 inline-flex text-[11px] uppercase tracking-[0.28em] text-foreground underline-offset-8 hover:underline"
              >
                Vezi procesul detaliat →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <ConsultCTA
        title="Aveți nevoie de o estimare?"
        subtitle="Ne spuneți despre proiect, revenim cu o propunere clară, fără costuri ascunse."
      />
    </>
  );
}
