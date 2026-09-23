/** Pictogramme : bord de toit, gouttière demi-ronde, descente et goutte d'eau. */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <rect width="48" height="48" rx="13" fill="#133826" />
      <path d="M8 19.5 24 9l16 10.5" fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 23h29v2.2a5 5 0 0 1-5 5h-19a5 5 0 0 1-5-5Z" fill="#7fd8a4" />
      <path d="M31 30.2h4.4v5.6H31z" fill="#7fd8a4" />
      <path d="M33.2 37.6s-2.6 2.9-2.6 4.4a2.6 2.6 0 0 0 5.2 0c0-1.5-2.6-4.4-2.6-4.4Z" fill="#f97316" />
    </svg>
  );
}

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={40} className="shrink-0" />
      <span className="leading-none">
        <span className={`block whitespace-nowrap font-display text-[1rem] font-extrabold tracking-tight sm:text-[1.08rem] ${tone === "dark" ? "text-[#133826]" : "text-white"}`}>
          Nettoyage Gouttières
        </span>
        <span className="mt-1 block whitespace-nowrap text-[0.66rem] font-extrabold uppercase tracking-[0.2em] text-[#F97316]">
          Bruxelles
        </span>
      </span>
    </span>
  );
}
