import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Building2,
  Home,
  Store,
  Paintbrush,
  Wrench,
  Sparkles,
  Gem,
  Check,
  ArrowRight,
  ArrowLeft,
  Zap,
  Droplets,
  Flame,
  Hammer,
  Wind,
  Lightbulb,
  Sofa,
  Clock,
  CalendarClock,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "./despre-noi";
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
          "Configurator premium: estimare rapidă pentru renovări în Satu Mare — apartament, casă sau spațiu comercial. Rezultat orientativ în câteva secunde.",
      },
      { property: "og:title", content: "Calculator preț renovare — Stilo" },
      {
        property: "og:description",
        content:
          "Configurați proiectul în 5 pași simpli și primiți instant un interval de buget premium.",
      },
      { property: "og:url", content: "/calculator" },
    ],
    links: [{ rel: "canonical", href: "/calculator" }],
  }),
  component: Page,
});

// ============ Data ============
type SpaceType = "apartament" | "casa" | "comercial";
type Tier = "cosmetic" | "standard" | "premium" | "lux";
type Timeline = "flexibil" | "3luni" | "urgent";

const SPACES: {
  id: SpaceType;
  label: string;
  desc: string;
  Icon: LucideIcon;
}[] = [
  { id: "apartament", label: "Apartament", desc: "Garsonieră până la penthouse", Icon: Building2 },
  { id: "casa", label: "Casă", desc: "Vilă sau casă individuală", Icon: Home },
  { id: "comercial", label: "Spațiu comercial", desc: "Birou, clinică, restaurant", Icon: Store },
];

const TIERS: {
  id: Tier;
  label: string;
  range: string;
  min: number;
  max: number;
  Icon: LucideIcon;
  includes: string[];
}[] = [
  {
    id: "cosmetic",
    label: "Refresh cosmetic",
    range: "180 – 300 €/mp",
    min: 180,
    max: 300,
    Icon: Paintbrush,
    includes: ["Zugrăveli", "Reparații minore", "Înlocuire pardoseli", "Uși interior"],
  },
  {
    id: "standard",
    label: "Renovare standard",
    range: "300 – 450 €/mp",
    min: 300,
    max: 450,
    Icon: Wrench,
    includes: ["Electrice noi", "Sanitare noi", "Pardoseli noi", "Băi", "Bucătărie", "Zugrăveli"],
  },
  {
    id: "premium",
    label: "Renovare premium",
    range: "450 – 700 €/mp",
    min: 450,
    max: 700,
    Icon: Sparkles,
    includes: [
      "Renovare completă",
      "Finisaje premium",
      "Iluminat custom",
      "Băi de lux",
      "Pereți decorativi",
      "Pardoseli high-end",
    ],
  },
  {
    id: "lux",
    label: "Renovare lux",
    range: "700 – 1000+ €/mp",
    min: 700,
    max: 1000,
    Icon: Gem,
    includes: [
      "Redesign complet",
      "Materiale premium",
      "Mobilier custom",
      "Iluminat arhitectural",
      "Pregătire Smart Home",
      "Finisaje semnătură",
    ],
  },
];

type Extra = {
  id: string;
  label: string;
  Icon: LucideIcon;
  perSqm?: number;
  flat?: number;
  note?: string;
  consult?: boolean;
};

const EXTRAS: Extra[] = [
  { id: "electric", label: "Înlocuire instalație electrică", Icon: Zap, perSqm: 25 },
  { id: "sanitare", label: "Înlocuire instalații sanitare", Icon: Droplets, perSqm: 20 },
  { id: "pardoseala", label: "Încălzire în pardoseală", Icon: Flame, perSqm: 45 },
  { id: "demolari", label: "Demolări și evacuare moloz", Icon: Hammer, perSqm: 15 },
  { id: "ac", label: "Instalare aer condiționat", Icon: Wind, flat: 600 },
  { id: "lighting", label: "Iluminat decorativ", Icon: Lightbulb, flat: 1200 },
  { id: "mobila", label: "Mobilier la comandă", Icon: Sofa, consult: true, note: "Estimare după consultanță" },
];

const TIMELINES: {
  id: Timeline;
  label: string;
  desc: string;
  Icon: LucideIcon;
  badge?: string;
}[] = [
  { id: "flexibil", label: "Flexibil", desc: "Fără urgență, planificare relaxată", Icon: Clock },
  { id: "3luni", label: "În 3 luni", desc: "Începere în următoarele săptămâni", Icon: CalendarClock },
  { id: "urgent", label: "Urgent", desc: "Sub 30 de zile", Icon: CalendarCheck, badge: "Priority Scheduling" },
];

// ============ Component ============
function Page() {
  const [step, setStep] = useState(1);
  const [space, setSpace] = useState<SpaceType | null>(null);
  const [sqm, setSqm] = useState<number>(85);
  const [tier, setTier] = useState<Tier | null>(null);
  const [extras, setExtras] = useState<Record<string, boolean>>({});
  const [timeline, setTimeline] = useState<Timeline | null>(null);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const price = useMemo(() => {
    if (!tier) return null;
    const t = TIERS.find((x) => x.id === tier)!;
    const size = Math.max(20, Math.min(600, sqm));
    let low = t.min * size;
    let high = t.max * size;

    for (const e of EXTRAS) {
      if (!extras[e.id] || e.consult) continue;
      if (e.perSqm) {
        low += e.perSqm * size * 0.9;
        high += e.perSqm * size * 1.1;
      } else if (e.flat) {
        low += e.flat;
        high += e.flat;
      }
    }
    const mid = (low + high) / 2;
    return {
      mid: Math.round(mid / 100) * 100,
      low: Math.round(low / 500) * 500,
      high: Math.round(high / 500) * 500,
      size,
    };
  }, [tier, sqm, extras]);

  const canNext =
    (step === 1 && !!space) ||
    (step === 2 && sqm >= 20) ||
    (step === 3 && !!tier) ||
    step === 4 ||
    (step === 5 && !!timeline);

  const isDone = (n: number) =>
    (n === 1 && !!space) ||
    (n === 2 && sqm >= 20 && step > 2) ||
    (n === 3 && !!tier) ||
    (n === 4 && step > 4) ||
    (n === 5 && !!timeline);

  const goNext = () => setStep((s) => Math.min(totalSteps, s + 1));
  const goPrev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <>
      <PageHero
        eyebrow="Configurator"
        title="Estimare premium pentru renovarea dumneavoastră."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-20">
        {/* Progress + step counter */}
        <div className="mb-10">
          <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.32em]">
            <span className="text-gold">Pasul {step} din {totalSteps}</span>
            <span className="text-muted-foreground">{Math.round(progress)}% complet</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold to-gold/70 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Step dots */}
          <div className="mt-5 grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((n) => {
              const done = isDone(n);
              const active = step === n;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setStep(n)}
                  className={`flex items-center justify-center gap-1.5 rounded-full border px-2 py-1.5 text-[10px] uppercase tracking-[0.2em] transition ${
                    active
                      ? "border-gold bg-gold/10 text-foreground"
                      : done
                      ? "border-gold/40 bg-background text-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-foreground/30"
                  }`}
                  aria-label={`Pasul ${n}`}
                >
                  {done && !active ? (
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  ) : (
                    <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-gold" : "bg-current opacity-40"}`} />
                  )}
                  <span className="hidden sm:inline">{n}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* STEPS */}
          <div className="min-w-0">
            <div
              key={step}
              className="rounded-3xl border border-border/70 bg-background/70 p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl animate-fade-in sm:p-8 md:p-10"
            >
              {step === 1 && (
                <Step
                  eyebrow="Pasul 1"
                  title="Ce tip de proprietate renovați?"
                  subtitle="Alegeți categoria care se potrivește cel mai bine."
                >
                  <div className="grid gap-4 sm:grid-cols-3">
                    {SPACES.map(({ id, label, desc, Icon }) => {
                      const active = space === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setSpace(id)}
                          className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                            active
                              ? "-translate-y-0.5 border-gold bg-gold/5 shadow-[0_20px_50px_-25px_rgba(201,168,76,0.6)]"
                              : "border-border bg-background hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg"
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${
                              active ? "bg-gold text-charcoal" : "bg-beige/60 text-foreground group-hover:bg-beige"
                            }`}
                          >
                            <Icon className="h-6 w-6" strokeWidth={1.5} />
                          </div>
                          <div className="mt-4 font-display text-xl text-foreground">{label}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
                          {active && (
                            <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-charcoal">
                              <Check className="h-3.5 w-3.5" strokeWidth={3} />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              {step === 2 && (
                <Step
                  eyebrow="Pasul 2"
                  title="Care este suprafața utilă?"
                  subtitle="Glisați pentru a seta suprafața aproximativă."
                >
                  <div className="rounded-2xl border border-border/70 bg-beige/30 p-6 sm:p-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl tabular-nums">
                        {sqm}
                      </span>
                      <span className="text-lg text-muted-foreground">m²</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={300}
                      step={5}
                      value={sqm}
                      onChange={(e) => setSqm(Number(e.target.value))}
                      className="mt-6 w-full accent-[color:var(--gold)]"
                    />
                    <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      <span>20 m²</span>
                      <span>300+ m²</span>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                      {[45, 65, 85, 120, 180, 250].map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setSqm(v)}
                          className={`rounded-full border px-4 py-1.5 text-xs transition ${
                            sqm === v
                              ? "border-gold bg-gold/10 text-foreground"
                              : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                          }`}
                        >
                          {v} m²
                        </button>
                      ))}
                    </div>
                  </div>
                </Step>
              )}

              {step === 3 && (
                <Step
                  eyebrow="Pasul 3"
                  title="Ce nivel de renovare doriți?"
                  subtitle="Fiecare pachet include manoperă și materiale la standardul indicat."
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {TIERS.map(({ id, label, range, Icon, includes }) => {
                      const active = tier === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setTier(id)}
                          className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                            active
                              ? "-translate-y-0.5 border-gold bg-gold/5 shadow-[0_20px_50px_-25px_rgba(201,168,76,0.6)]"
                              : "border-border bg-background hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
                                active ? "bg-gold text-charcoal" : "bg-beige/60 text-foreground group-hover:bg-beige"
                              }`}
                            >
                              <Icon className="h-5 w-5" strokeWidth={1.5} />
                            </div>
                            {active && (
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-charcoal">
                                <Check className="h-3.5 w-3.5" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          <div className="mt-4 font-display text-xl text-foreground">{label}</div>
                          <div className="mt-1 text-xs uppercase tracking-[0.22em] text-gold">{range}</div>
                          <ul className="mt-4 grid gap-1.5 text-sm text-muted-foreground">
                            {includes.map((i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2.5} />
                                <span>{i}</span>
                              </li>
                            ))}
                          </ul>
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              {step === 4 && (
                <Step
                  eyebrow="Pasul 4"
                  title="Lucrări adiționale"
                  subtitle="Opțional — selectați ce vă interesează. Puteți sări acest pas."
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    {EXTRAS.map(({ id, label, Icon, perSqm, flat, note, consult }) => {
                      const on = !!extras[id];
                      const priceLabel = consult
                        ? note!
                        : perSqm
                        ? `+${perSqm} €/m²`
                        : `+${flat} €`;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setExtras((x) => ({ ...x, [id]: !x[id] }))}
                          className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                            on
                              ? "border-gold bg-gold/5 shadow-[0_10px_30px_-20px_rgba(201,168,76,0.7)]"
                              : "border-border bg-background hover:border-foreground/30"
                          }`}
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                              on ? "bg-gold text-charcoal" : "bg-beige/60 text-foreground"
                            }`}
                          >
                            <Icon className="h-5 w-5" strokeWidth={1.5} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium text-foreground">{label}</div>
                            <div className="mt-0.5 text-xs text-muted-foreground">{priceLabel}</div>
                          </div>
                          <div
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                              on ? "border-gold bg-gold text-charcoal" : "border-border"
                            }`}
                          >
                            {on && <Check className="h-3 w-3" strokeWidth={3} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              {step === 5 && (
                <Step
                  eyebrow="Pasul 5"
                  title="Când doriți să începeți?"
                  subtitle="Ne ajută să planificăm resursele și echipa."
                >
                  <div className="grid gap-4 sm:grid-cols-3">
                    {TIMELINES.map(({ id, label, desc, Icon, badge }) => {
                      const active = timeline === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setTimeline(id)}
                          className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                            active
                              ? "-translate-y-0.5 border-gold bg-gold/5 shadow-[0_20px_50px_-25px_rgba(201,168,76,0.6)]"
                              : "border-border bg-background hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg"
                          }`}
                        >
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
                              active ? "bg-gold text-charcoal" : "bg-beige/60 text-foreground group-hover:bg-beige"
                            }`}
                          >
                            <Icon className="h-5 w-5" strokeWidth={1.5} />
                          </div>
                          <div className="mt-4 font-display text-xl text-foreground">{label}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
                          {badge && (
                            <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                              <Sparkles className="h-3 w-3" /> {badge}
                            </div>
                          )}
                          {active && (
                            <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-charcoal">
                              <Check className="h-3.5 w-3.5" strokeWidth={3} />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              {/* Nav */}
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={step === 1}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-foreground transition hover:border-foreground/40 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" /> Înapoi
                </button>
                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!canNext}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-background transition hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continuă <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold/80 px-7 py-3.5 text-[11px] uppercase tracking-[0.26em] text-charcoal shadow-[0_15px_40px_-15px_rgba(201,168,76,0.8)] transition hover:brightness-105"
                  >
                    Solicită oferta personalizată <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* LIVE ESTIMATE */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <EstimateCard
              space={space}
              sqm={sqm}
              tier={tier}
              timeline={timeline}
              price={price}
            />
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

// ============ Sub-components ============
function Step({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.4em] text-gold">{eyebrow}</div>
      <h2 className="mt-2 font-display text-2xl leading-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </div>
  );
}

function EstimateCard({
  space,
  sqm,
  tier,
  timeline,
  price,
}: {
  space: SpaceType | null;
  sqm: number;
  tier: Tier | null;
  timeline: Timeline | null;
  price: { mid: number; low: number; high: number; size: number } | null;
}) {
  const spaceLabel = SPACES.find((s) => s.id === space)?.label ?? "—";
  const tierLabel = TIERS.find((t) => t.id === tier)?.label ?? "—";
  const timelineLabel = TIMELINES.find((t) => t.id === timeline)?.label;

  const animatedMid = useAnimatedNumber(price?.mid ?? 0);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-[#141416] to-[#0a0a0b] p-6 text-background shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-8">
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-[0.32em] text-gold">Estimare live</div>
        {timeline === "urgent" && (
          <div className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-gold">
            <Sparkles className="h-3 w-3" /> Prioritar
          </div>
        )}
      </div>

      <div className="mt-6 space-y-2 border-b border-white/10 pb-6 text-sm">
        <SummaryRow label="Proprietate" value={spaceLabel} />
        <SummaryRow label="Suprafață" value={`${sqm} m²`} />
        <SummaryRow label="Renovare" value={tierLabel} />
        {timelineLabel && <SummaryRow label="Termen" value={timelineLabel} />}
      </div>

      <div className="mt-6">
        <div className="text-[10px] uppercase tracking-[0.28em] text-background/50">
          Buget estimat
        </div>
        <div className="mt-2 font-display text-4xl leading-none tabular-nums sm:text-5xl">
          {price ? `${animatedMid.toLocaleString("ro-RO")} €` : "— €"}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-[10px] uppercase tracking-[0.28em] text-background/50">
            Interval orientativ
          </div>
          <div className="mt-1.5 flex items-baseline gap-2 font-display text-lg tabular-nums">
            <span>{price ? `${price.low.toLocaleString("ro-RO")} €` : "—"}</span>
            <span className="text-background/40">—</span>
            <span>{price ? `${price.high.toLocaleString("ro-RO")} €` : "—"}</span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-[11px] leading-relaxed text-background/50">
        Estimare bazată pe medii de piață pentru renovări din România. Prețul
        final se stabilește după vizita la locație.
      </p>

      <a
        href={`https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(
          `Bună! Am folosit configuratorul: ${spaceLabel}, ${sqm} m², ${tierLabel}. Estimare: ${
            price ? `${price.low}–${price.high} €` : "—"
          }. Aș vrea o ofertă personalizată.`,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold/80 px-6 py-3.5 text-[11px] uppercase tracking-[0.26em] text-charcoal shadow-[0_15px_40px_-15px_rgba(201,168,76,0.8)] transition hover:brightness-105"
      >
        Solicită oferta personalizată
      </a>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[10px] uppercase tracking-[0.24em] text-background/50">{label}</span>
      <span className="truncate font-display text-base text-background">{value}</span>
    </div>
  );
}

// ============ Number animation ============
function useAnimatedNumber(target: number, duration = 500) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    const start = value;
    const delta = target - start;
    if (delta === 0) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(start + delta * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return value;
}
