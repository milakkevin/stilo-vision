import { Link } from "@tanstack/react-router";

export function ConsultCTA({
  title = "Aveți un proiect în minte?",
  subtitle = "Discutăm împreună, fără obligații. Vă răspundem cu recomandări și o estimare clară.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto my-16 max-w-7xl px-5 sm:px-6 md:my-24 md:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-[#0f0f10] px-6 py-14 text-background sm:px-8 md:px-16 md:py-24">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_80%_20%,var(--gold),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Consultație gratuită
          </div>
          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl md:mt-6 md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-background/70 sm:text-base md:mt-6">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-10">
            <Link
              to="/contact"
              className="rounded-full bg-gold px-6 py-3.5 text-center text-[11px] uppercase tracking-[0.22em] text-charcoal transition hover:bg-gold/90 sm:px-8 sm:py-4 sm:tracking-[0.28em]"
            >
              Programează consultație
            </Link>
            <Link
              to="/portofoliu"
              className="rounded-full border border-background/30 px-6 py-3.5 text-center text-[11px] uppercase tracking-[0.22em] text-background transition hover:border-background hover:bg-background hover:text-charcoal sm:px-8 sm:py-4 sm:tracking-[0.28em]"
            >
              Vezi portofoliul
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
