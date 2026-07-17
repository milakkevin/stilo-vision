import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator as CalcIcon, ArrowUpRight } from "lucide-react";
import { PageHero } from "./despre-noi";
import { Reveal } from "@/components/Reveal";
import { ConsultCTA } from "@/components/ConsultCTA";
import { SITE } from "@/lib/site";
import hero from "@/assets/project-2.jpg";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Calculator preț renovare — Stilo Renovation" },
      {
        name: "description",
        content:
          "Estimare rapidă a costului unei renovări în Satu Mare: apartament, casă sau spațiu comercial. Rezultat orientativ în câteva secunde.",
      },
      { property: "og:title", content: "Calculator preț renovare — Stilo" },
      {
        property: "og:description",
        content:
          "Aflați într-un minut un preț orientativ pentru renovarea dumneavoastră. Standard, premium sau lux — cu opțiuni personalizabile.",
      },
      { property: "og:url", content: "/calculator" },
    ],
    links: [{ rel: "canonical", href: "/calculator" }],
  }),
  component: Page,
});

type Tier = "standard" | "premium" | "lux";
type SpaceType = "apartament" | "casa" | "comercial";

const BASE: Record<SpaceType, Record<Tier, number>> = {
  // €/mp — renovare completă la cheie (manoperă + materiale de bază)
  apartament: { standard: 260, premium: 380, lux: 560 },
  casa:       { standard: 300, premium: 430, lux: 620 },
  comercial:  { standard: 240, premium: 360, lux: 540 },
};

const EXTRAS = [
  { id: "electric", label: "Instalație electrică nouă", perSqm: 22 },
  { id: "sanitare", label: "Instalații sanitare noi", perSqm: 20 },
  { id: "rigips",   label: "Plafoane rigips + iluminat", perSqm: 28 },
  { id: "parchet",  label: "Parchet stratificat premium", perSqm: 35 },
  { id: "gresie",   label: "Gresie / faianță (băi, bucătărie)", perSqm: 18 },
  { id: "usi",      label: "Uși interior noi (set)", flat: 1800 },
  { id: "demolari", label: "Demolări și evacuare moloz", perSqm: 25 },
] as const;

function Page() {
  const [space, setSpace] = useState<SpaceType>("apartament");
  const [tier, setTier] = useState<Tier>("premium");
  const [sqm, setSqm] = useState<number>(70);
  const [bai, setBai] = useState<number>(1);
  const [extras, setExtras] = useState<Record<string, boolean>>({
    electric: true,
    rigips: true,
    parchet: true,
    gresie: true,
  });

  const price = useMemo(() => {
    const size = Math.max(15, Math.min(1000, Number(sqm) || 0));
    let total = BASE[space][tier] * size;

    for (const e of EXTRAS) {
      if (!extras[e.id]) continue;
      if ("perSqm" in e) total += e.perSqm * size;
      else total += e.flat;
    }
    // Băi suplimentare: cost fix per baie
    total += Math.max(0, bai - 1) * 2400;

    // ± 15% interval orientativ
    const low = Math.round((total * 0.9) / 100) * 100;
    const high = Math.round((total * 1.15) / 100) * 100;
    return { total: Math.round(total), low, high, size };
  }, [space, tier, sqm, bai, extras]);

  const toggle = (id: string) =>
    setExtras((x) => ({ ...x, [id]: !x[id] }));

  const wa = `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(
    `Bună! Am folosit calculatorul: ${space}, ${tier}, ${price.size} mp, ${bai} băi. Estimare: ${price.low}–${price.high} €. Aș vrea o ofertă detaliată.`,
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Calculator"
        title="Estimare rapidă pentru renovarea dumneavoastră."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Preț orientativ
            </div>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Câteva alegeri simple și obțineți un interval de preț.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Rezultatul este orientativ, bazat pe medii de piață din Satu Mare
              pentru renovări complete la cheie. Prețul final se stabilește
              după vizita la locație și alegerea materialelor.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* FORM */}
          <div className="rounded-3xl border border-border bg-background p-5 sm:p-8">
            <FieldGroup label="Tip spațiu">
              <div className="grid grid-cols-3 gap-2">
                {(["apartament","casa","comercial"] as SpaceType[]).map((s) => (
                  <Chip key={s} active={space===s} onClick={() => setSpace(s)}>
                    {s === "apartament" ? "Apartament" : s === "casa" ? "Casă" : "Comercial"}
                  </Chip>
                ))}
              </div>
            </FieldGroup>

            <FieldGroup label="Nivel finisaje">
              <div className="grid grid-cols-3 gap-2">
                {(["standard","premium","lux"] as Tier[]).map((t) => (
                  <Chip key={t} active={tier===t} onClick={() => setTier(t)}>
                    <span className="capitalize">{t}</span>
                  </Chip>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Standard – materiale bune, execuție curată. Premium – finisaje
                selectate, detalii îngrijite. Lux – marmură, lemn masiv,
                iluminat scenografic.
              </p>
            </FieldGroup>

            <FieldGroup label={`Suprafață utilă: ${price.size} mp`}>
              <input
                type="range"
                min={20}
                max={300}
                step={5}
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full accent-[color:var(--gold)]"
              />
              <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                <span>20 mp</span><span>300 mp</span>
              </div>
              <input
                type="number"
                min={15}
                max={1000}
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                inputMode="numeric"
              />
            </FieldGroup>

            <FieldGroup label="Număr de băi">
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((n) => (
                  <Chip key={n} active={bai===n} onClick={() => setBai(n)}>
                    {n}
                  </Chip>
                ))}
              </div>
            </FieldGroup>

            <FieldGroup label="Lucrări incluse">
              <div className="grid gap-2 sm:grid-cols-2">
                {EXTRAS.map((e) => {
                  const on = !!extras[e.id];
                  return (
                    <button
                      type="button"
                      key={e.id}
                      onClick={() => toggle(e.id)}
                      className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                        on
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-foreground/40"
                      }`}
                    >
                      <span>{e.label}</span>
                      <span
                        className={`h-4 w-4 shrink-0 rounded-full border ${
                          on ? "border-gold bg-gold" : "border-border"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </FieldGroup>
          </div>

          {/* RESULT */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-[#0f0f10] p-6 text-background sm:p-8">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-gold">
                <CalcIcon className="h-4 w-4" /> Estimare
              </div>
              <div className="mt-6 text-[11px] uppercase tracking-[0.24em] text-background/60">
                Interval orientativ
              </div>
              <div className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
                {price.low.toLocaleString("ro-RO")} – {price.high.toLocaleString("ro-RO")} €
              </div>
              <div className="mt-2 text-xs text-background/60">
                ≈ {Math.round(price.total / price.size).toLocaleString("ro-RO")} €/mp · {price.size} mp
              </div>

              <ul className="mt-6 space-y-2 text-sm text-background/70">
                <li>· Include manoperă și materiale de bază</li>
                <li>· Nu include mobilier sau electrocasnice</li>
                <li>· Prețul final se confirmă după vizită</li>
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[11px] uppercase tracking-[0.28em] text-charcoal transition hover:bg-gold/90"
                >
                  Trimite pe WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3.5 text-[11px] uppercase tracking-[0.28em] text-background transition hover:bg-background hover:text-charcoal"
                >
                  Cere ofertă detaliată
                </Link>
              </div>
              <p className="mt-6 text-[11px] leading-relaxed text-background/50">
                * Estimare bazată pe medii de piață pentru Satu Mare, 2025.
                Valoarea reală poate varia în funcție de starea inițială,
                materialele alese și complexitatea proiectului.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <ConsultCTA
        title="Vreți o ofertă exactă?"
        subtitle="Venim la fața locului, măsurăm și revenim cu o ofertă etapizată, fără costuri ascunse."
      />
    </>
  );
}

function FieldGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-3 py-3 text-sm transition ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-foreground hover:border-foreground/40"
      }`}
    >
      {children}
    </button>
  );
}
