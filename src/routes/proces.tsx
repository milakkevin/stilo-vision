import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, FileText, Hammer, Key } from "lucide-react";
import { PageHero } from "./despre-noi";
import { Reveal } from "@/components/Reveal";
import { ConsultCTA } from "@/components/ConsultCTA";
import hero from "@/assets/project-2.jpg";

export const Route = createFileRoute("/proces")({
  head: () => ({
    meta: [
      { title: "Procesul nostru — Stilo Renovation" },
      {
        name: "description",
        content:
          "5 etape clare: consultație gratuită, vizită la locație, ofertă personalizată, execuție și predare la cheie.",
      },
      { property: "og:title", content: "Procesul nostru — Stilo Renovation" },
      { property: "og:description", content: "Cum lucrăm: consultație, vizită la locație, ofertă, execuție și predare la cheie — 5 etape clare, fără surprize." },
      { property: "og:url", content: "/proces" },
    ],
    links: [{ rel: "canonical", href: "/proces" }],
  }),
  component: Page,
});

const STEPS = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Consultație gratuită",
    d: "Discutăm despre ce vă doriți, despre buget și despre termene. Fără presiune, fără obligații.",
  },
  {
    n: "02",
    icon: MapPin,
    title: "Vizită la locație",
    d: "Venim la fața locului, măsurăm, notăm particularitățile și înțelegem contextul în detaliu.",
  },
  {
    n: "03",
    icon: FileText,
    title: "Ofertă personalizată",
    d: "Primiți o ofertă clară, etapizată, cu costuri și termene realiste — fără costuri ascunse.",
  },
  {
    n: "04",
    icon: Hammer,
    title: "Execuție",
    d: "Coordonăm toate meseriile, respectăm graficul și vă ținem la curent la fiecare etapă.",
  },
  {
    n: "05",
    icon: Key,
    title: "Predare la cheie",
    d: "Predare completă, curățenie finală și garanție pentru manopera executată.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Procesul nostru"
        title="Cinci etape clare, de la primul telefon până la predarea spațiului renovat."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-32">
        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 via-border to-transparent md:block" />
          <div className="space-y-10 md:space-y-20">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 60}>
                  <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-4">
                        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-background sm:h-12 sm:w-12">
                          <Icon className="h-5 w-5 text-gold" strokeWidth={1.4} />
                        </div>
                        <div className="font-display text-4xl text-foreground/20 sm:text-5xl">
                          {s.n}
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-7 md:col-start-6">
                      <h3 className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base md:mt-4">
                        {s.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultCTA
        title="Primul pas e o discuție."
        subtitle="Programăm consultația gratuită și pornim proiectul cu dreptul."
      />
    </>
  );
}
