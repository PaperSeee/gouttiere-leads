import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

// Liens vers les 8 pages services + /services, posés dans le corps des pages déjà vues par Google
// (/tarifs, pages de communes) pour faire découvrir les pages services (25/11/2026, t0311ld1).
// Mêmes intitulés que le menu de l'en-tête.
export const servicesLiens = [
  { name: "Nettoyage gouttières", href: "/services/nettoyage-gouttieres" },
  { name: "Débouchage urgence", href: "/services/debouchage-gouttieres" },
  { name: "Réparation / remplacement", href: "/services/reparation-gouttieres" },
  { name: "Démoussage toiture", href: "/services/demoussage-toiture" },
  { name: "Nettoyage de corniche", href: "/services/nettoyage-corniche" },
  { name: "Nettoyage de toiture", href: "/services/nettoyage-toiture" },
  { name: "Protection anti-feuilles", href: "/services/protection-gouttieres" },
  { name: "Contrat d'entretien annuel", href: "/services/contrat-entretien-gouttieres" },
];

export function ServicesLinksRow({ titre = "Prestations" }: { titre?: string }) {
  return (
    <>
      <p className="text-sm font-semibold text-gray-500 mb-3">{titre}</p>
      <div className="flex flex-wrap gap-2">
        {servicesLiens.map((s) => (
          <Link key={s.href} href={s.href} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#1A4731] hover:text-[#1A4731] text-gray-600 rounded-lg px-3 py-2 text-sm font-medium transition-colors">
            <Wrench size={12} className="text-[#F97316]" />
            {s.name}
          </Link>
        ))}
        <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A4731] hover:text-[#F97316] px-3 py-2">
          Toutes les prestations <ArrowRight size={14} />
        </Link>
      </div>
    </>
  );
}

export default function ServicesLinks({ titre = "Prestations" }: { titre?: string }) {
  return (
    <section className="py-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesLinksRow titre={titre} />
      </div>
    </section>
  );
}
