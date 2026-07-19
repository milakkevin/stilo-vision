import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactează-ne pe WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.6)] transition hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.36c-.28-.14-1.66-.82-1.92-.91-.26-.09-.44-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.44.12-.58.13-.13.28-.34.42-.51.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.51-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49h-.54c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4 0 1.42 1.03 2.79 1.17 2.98.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.23.16-1.34-.06-.11-.25-.18-.53-.32zM16 3C8.82 3 3 8.82 3 16c0 2.28.6 4.42 1.65 6.29L3 29l6.9-1.6A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" />
      </svg>
    </a>
  );
}
