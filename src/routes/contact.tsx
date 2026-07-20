import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { PageHero } from "./despre-noi";
import { Reveal } from "@/components/Reveal";
import { SITE, whatsappUrl } from "@/lib/site";
import hero from "@/assets/project-6.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Consultație gratuită | Stilo Renovation" },
      {
        name: "description",
        content:
          "Solicitați o consultație gratuită. Telefon, WhatsApp și formular de contact pentru renovări în Satu Mare.",
      },
      { property: "og:title", content: "Contact — Stilo Renovation" },
      { property: "og:description", content: "Contactați echipa Stilo Renovation din Satu Mare pentru o consultație gratuită — telefon, WhatsApp sau formular." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Solicitați o consultație gratuită."
        image={hero}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-12 md:gap-14 md:px-10 md:py-24">
        <Reveal className="md:col-span-5">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Informații</div>
          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
            Suntem aici pentru dumneavoastră.
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Completați formularul sau ne puteți contacta direct. Vă răspundem în cel mai scurt timp și pornim discuția despre proiect.
          </p>

          <div className="mt-10 space-y-6">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-start gap-4 group">
              <Phone className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Telefon</div>
                <div className="font-display text-2xl text-foreground group-hover:underline underline-offset-4">{SITE.phone}</div>
              </div>
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
              <MessageCircle className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">WhatsApp</div>
                <div className="font-display text-2xl text-foreground group-hover:underline underline-offset-4">Scrieți-ne pe WhatsApp</div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
              <Mail className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Email</div>
                <div className="font-display text-2xl text-foreground group-hover:underline underline-offset-4 break-all">{SITE.email}</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Zonă</div>
                <div className="font-display text-2xl text-foreground">Satu Mare și împrejurimi</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Program</div>
                <div className="font-display text-2xl text-foreground">{SITE.hours}</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-7 md:col-start-6">
          <ContactForm />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:px-10 md:pb-24">
        <div className="overflow-hidden rounded-3xl border border-border">
          <div className="flex flex-col items-start justify-between gap-3 bg-beige/50 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
            <div className="font-display text-base text-foreground sm:text-lg">
              Ne găsiți în Satu Mare
            </div>
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-background"
            >
              Deschide în Google Maps
            </a>
          </div>
          <div className="aspect-[4/3] sm:aspect-[16/8]">
            <iframe
              title="Locație Stilo Renovation"
              src={SITE.mapsEmbed}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nume: "",
    telefon: "",
    email: "",
    tip: "Renovare apartament",
    mesaj: "",
  });

  const on = (k: keyof typeof form) => (e: any) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nume.trim() || !form.telefon.trim()) return;

    const subject = `Cerere consultație — ${form.tip} (${form.nume})`;
    const body = [
      `Nume: ${form.nume}`,
      `Telefon: ${form.telefon}`,
      `Email: ${form.email || "—"}`,
      `Tip proiect: ${form.tip}`,
      "",
      "Mesaj:",
      form.mesaj || "—",
    ].join("\n");

    // Trimite email către Stilo Renovation
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const whatsappHref = () => {
    const text = `Bună! Sunt ${form.nume || "[nume]"}. Tip proiect: ${form.tip}. Telefon: ${form.telefon || "[telefon]"}. ${form.mesaj}`;
    return `https://wa.me/40742914164?text=${encodeURIComponent(text)}`;
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-border bg-background p-6 sm:p-8 md:p-10"
    >
      <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
        Formular
      </div>
      <h3 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
        Solicitați o consultație gratuită
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">
        Completați formularul și vă vom contacta în cel mai scurt timp.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Nume" required>
          <input
            required
            maxLength={80}
            value={form.nume}
            onChange={on("nume")}
            className={inputCls}
            placeholder="Numele dumneavoastră"
          />
        </Field>
        <Field label="Telefon" required>
          <input
            required
            maxLength={20}
            value={form.telefon}
            onChange={on("telefon")}
            className={inputCls}
            placeholder="07xx xxx xxx"
            inputMode="tel"
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            maxLength={120}
            value={form.email}
            onChange={on("email")}
            className={inputCls}
            placeholder="nume@exemplu.ro"
          />
        </Field>
        <Field label="Tip proiect">
          <select value={form.tip} onChange={on("tip")} className={inputCls}>
            {[
              "Renovare apartament",
              "Renovare casă",
              "Amenajare interioară",
              "Spațiu comercial",
              "Design interior",
              "Consultanță",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="Mesaj" className="md:col-span-2">
          <textarea
            rows={5}
            maxLength={1000}
            value={form.mesaj}
            onChange={on("mesaj")}
            className={`${inputCls} resize-none`}
            placeholder="Câteva detalii despre proiect..."
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="w-full rounded-full bg-foreground px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-background transition hover:bg-foreground/90 sm:w-auto sm:px-8 sm:tracking-[0.28em]"
        >
          Trimite pe email
        </button>
        <button
          type="button"
          onClick={openWhatsApp}
          className="w-full rounded-full border border-foreground/20 bg-[#25D366] px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-[#20c15c] sm:w-auto sm:px-8 sm:tracking-[0.28em]"
        >
          Trimite pe WhatsApp
        </button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Fără obligații. Discutăm proiectul dumneavoastră și vă oferim recomandări gratuite.
      </p>
      {sent && (
        <p className="mt-4 rounded-lg bg-gold/20 px-4 py-3 text-sm text-foreground">
          Mulțumim! Am deschis aplicația de email cu detaliile completate — apăsați trimite pentru a finaliza. Vă răspundem cât mai curând.
        </p>
      )}
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none";

function Field({
  label,
  children,
  required,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
