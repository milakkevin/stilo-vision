import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/project-3.jpg";
import { Reveal } from "@/components/Reveal";
import { ConsultCTA } from "@/components/ConsultCTA";

export const Route = createFileRoute("/despre-noi")({
  head: () => ({
    meta: [
      { title: "Despre noi — Stilo Renovation Satu Mare" },
      {
        name: "description",
        content:
          "Echipa Stilo Renovation execută renovări interioare complete în Satu Mare, cu accent pe seriozitate, calitate și finisaje premium.",
      },
      { property: "og:title", content: "Despre noi — Stilo Renovation" },
      { property: "og:description", content: "Echipă din Satu Mare specializată în renovări interioare complete și amenajări la cheie, cu accent pe seriozitate și calitate." },
      { property: "og:url", content: "/despre-noi" },
    ],
    links: [{ rel: "canonical", href: "/despre-noi" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Despre noi"
        title="O echipă construită în jurul unei singure idei: să lăsăm în urmă lucrări de care suntem mândri."
        image={hero}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-12 md:gap-16 md:px-10 md:py-24">
        <Reveal className="md:col-span-5">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Povestea noastră</div>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
            Din Satu Mare, cu mâinile pe fiecare detaliu.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Stilo Renovation SRL este o firmă din Satu Mare specializată în
            renovări interioare complete și amenajări la cheie. Am pornit
            din dorința de a schimba modul în care se lucrează pe șantierele
            de la noi — cu mai multă seriozitate, mai multă comunicare și cu
            respect real pentru banii și timpul clientului.
          </p>
          <p>
            Astăzi coordonăm proiecte de la apartamente și case, până la
            restaurante și spații comerciale. Fiecare proiect este tratat cu
            aceeași atenție, indiferent de dimensiune.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border/60 bg-beige/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 md:grid-cols-3 md:gap-10 md:px-10 md:py-24">
          {[
            {
              t: "Misiune",
              d: "Să transformăm spații obișnuite în interioare care aduc bucurie în fiecare zi.",
            },
            {
              t: "Valori",
              d: "Seriozitate, sinceritate, atenție la detaliu și respect pentru meserie.",
            },
            {
              t: "Cum lucrăm",
              d: "Cu o echipă coordonată, un singur punct de contact și etape clare, comunicate din start.",
            },
          ].map((v) => (
            <Reveal key={v.t}>
              <div className="border-l border-gold/60 pl-6">
                <div className="text-[10px] uppercase tracking-[0.36em] text-gold">
                  {v.t}
                </div>
                <p className="mt-4 font-display text-2xl leading-snug text-foreground">
                  {v.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-16 sm:px-6 md:grid-cols-4 md:gap-14 md:px-10 md:py-24">
        {[
          { k: "10+", v: "Ani experiență" },
          { k: "120+", v: "Proiecte finalizate" },
          { k: "5.0", v: "Rating Google" },
          { k: "100%", v: "Predare la cheie" },
        ].map((s) => (
          <Reveal key={s.v}>
            <div>
              <div className="font-display text-4xl text-foreground sm:text-5xl md:text-6xl">{s.k}</div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <ConsultCTA
        title="Hai să discutăm proiectul dumneavoastră."
        subtitle="Ne deplasăm la locație, evaluăm situația și revenim cu recomandări concrete."
      />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative h-[60svh] min-h-[420px] w-full overflow-hidden bg-charcoal text-background md:h-[70svh] md:min-h-[520px]">
      <img
        src={image}
        alt=""
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-12 sm:px-6 md:px-10 md:pb-24">
        <div className="text-[10px] uppercase tracking-[0.42em] text-gold">{eyebrow}</div>
        <h1 className="mt-4 max-w-4xl font-display text-[2rem] leading-[1.08] sm:text-4xl md:mt-6 md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
