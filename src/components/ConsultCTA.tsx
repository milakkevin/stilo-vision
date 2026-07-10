import { Link } from "@tanstack/react-router";

export function ConsultCTA({
  title = "Aveți un proiect în minte?",
  subtitle = "Discutăm împreună, fără obligații. Vă răspundem cu recomandări și o estimare clară.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto my-24 max-w-7xl px-6 md:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-[#0f0f10] px-8 py-16 text-background md:px-16 md:py-24">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_80%_20%,var(--gold),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Consultație gratuită
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-background/70">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-charcoal transition hover:bg-gold/90"
            >
              Programează o consultație
            </Link>
            <Link
              to="/portofoliu"
              className="rounded-full border border-background/30 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition hover:border-background hover:bg-background hover:text-charcoal"
            >
              Vezi portofoliul
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
