import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/services/nettoyage-gouttieres", label: "Nettoyage de gouttières" },
  { href: "/services/debouchage-gouttieres", label: "Débouchage en urgence" },
  { href: "/tarifs", label: "Nos tarifs" },
  { href: "/communes", label: "Communes desservies" },
  { href: "/blog", label: "Conseils et guides" },
  { href: "/contact", label: "Contact et devis" },
];

export default function NotFound() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-[#F97316]">Erreur 404</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#133826]">Cette page n&apos;existe pas ou a été déplacée</h1>
        <p className="mt-4 text-gray-600">
          Vos gouttières, elles, n&apos;attendent pas. Appelez-nous directement ou reprenez depuis l&apos;une de ces pages.
        </p>
        <a href="tel:0451053370" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 font-extrabold text-white hover:bg-[#EA580C]">
          <Phone size={18} /> 0451 05 33 70
        </a>
        <ul className="mt-10 grid gap-2 sm:grid-cols-2 text-left">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-800 hover:border-[#1A4731] hover:text-[#1A4731]">
                {l.label} <ArrowRight size={15} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
