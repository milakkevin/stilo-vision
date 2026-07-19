import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = { src: string; alt: string; w?: number; h?: number };

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = index !== null;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const next = useCallback(() => {
    if (index === null) return;
    onIndex((index + 1) % images.length);
  }, [index, images.length, onIndex]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndex((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev, onClose]);

  // Preload neighbors
  useEffect(() => {
    if (index === null) return;
    [1, -1].forEach((d) => {
      const i = (index + d + images.length) % images.length;
      const img = new Image();
      img.src = images[i].src;
    });
  }, [index, images]);

  if (!open || index === null) return null;
  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in-slow"
      role="dialog"
      aria-modal="true"
      aria-label={`Imagine ${index + 1} din ${images.length}`}
      onClick={onClose}
      onTouchStart={(e) => {
        const t = e.touches[0];
        touchStart.current = { x: t.clientX, y: t.clientY };
      }}
      onTouchEnd={(e) => {
        if (!touchStart.current) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - touchStart.current.x;
        const dy = t.clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        }
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Închide"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Imaginea anterioară"
        className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6 md:h-14 md:w-14"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Imaginea următoare"
        className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6 md:h-14 md:w-14"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <figure
        className="relative flex max-h-[90svh] max-w-[92vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-[90svh] max-w-[92vw] object-contain shadow-2xl animate-fade-in-slow"
        />
        <figcaption className="absolute bottom-[-2.25rem] left-0 right-0 text-center text-xs uppercase tracking-[0.28em] text-white/70">
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
}
