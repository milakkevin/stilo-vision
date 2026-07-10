export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const fg = tone === "dark" ? "text-charcoal" : "text-background";
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-7 w-7" />
      <span className={`font-display text-lg tracking-[0.32em] uppercase ${fg}`}>
        Stilo
        <span className="text-gold">·</span>
        Renovation
      </span>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 34 L24 10 L34 34"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M18 26 H30" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
