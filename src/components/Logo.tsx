import logoAsset from "@/assets/stilo-logo-v2.png.asset.json";

export function Logo({
  className = "",
  tone = "dark",
  size = "sm",
}: {
  className?: string;
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "lg" ? "h-14" : size === "md" ? "h-11" : "h-9";
  const label = tone === "dark" ? "text-charcoal" : "text-background";
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={logoAsset.url}
        alt="Stilo Renovation"
        className={`${h} w-auto shrink-0`}
        width={860}
        height={520}
      />
      <span className={`sr-only ${label}`}>Stilo Renovation</span>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Stilo Renovation"
      className={`${className} object-contain`}
    />
  );
}
