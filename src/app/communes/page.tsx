import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Communes Desservies — Gouttières Bruxelles (19 Communes)",
  description:
    "Nettoyage, débouchage et réparation de gouttières dans les 19 communes de la région bruxelloise. Trouvez votre commune et découvrez nos interventions locales.",
  keywords: [
    "gouttières Bruxelles communes",
    "nettoyage gouttières zone intervention Bruxelles",
    "gouttières 19 communes bruxelloises",
  ],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes" },
  openGraph: {
    title: "Communes Desservies — Gouttières Bruxelles",
    description: "Nettoyage et réparation de gouttières dans les 19 communes de la région bruxelloise.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Communes desservies gouttières Bruxelles" }],
  },
};

const communes = [
  { name: "Anderlecht", slug: "anderlecht", tag: "Maisons ouvrières & canal" },
  { name: "Auderghem", slug: "auderghem", tag: "Forêt de Soignes" },
  { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe", tag: "Villas & lotissements" },
  { name: "Bruxelles-Ville", slug: "bruxelles", tag: "Pentagone & immeubles" },
  { name: "Etterbeek", slug: "etterbeek", tag: "Immeubles & maisons" },
  { name: "Evere", slug: "evere", tag: "Quartiers résidentiels" },
  { name: "Forest", slug: "forest", tag: "Maisons mitoyennes" },
  { name: "Ganshoren", slug: "ganshoren", tag: "Commune résidentielle" },
  { name: "Ixelles", slug: "ixelles", tag: "Art nouveau & étangs" },
  { name: "Jette", slug: "jette", tag: "Villas & parc de Laeken" },
  { name: "Koekelberg", slug: "koekelberg", tag: "Basilique & habitat compact" },
  { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean", tag: "Canal & rénovation" },
  { name: "Saint-Gilles", slug: "saint-gilles", tag: "Art nouveau" },
  { name: "Saint-Josse-ten-Noode", slug: "saint-josse-ten-noode", tag: "Immeubles denses" },
  { name: "Schaerbeek", slug: "schaerbeek", tag: "Maisons Belle Époque" },
  { name: "Uccle", slug: "uccle", tag: "Villas & zinc oxydé" },
  { name: "Watermael-Boitsfort", slug: "watermael-boitsfort", tag: "Forêt & cités-jardins" },
  { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert", tag: "Villas & appartements" },
  { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre", tag: "Grandes villas & parcs" },
];

export default function CommunesHub() {
  return (
    <>
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes" }]} />

      <section className="bg-[#1A4731] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Nettoyage de Gouttières — Zone d&apos;Intervention à Bruxelles
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Nous intervenons dans les 19 communes de la région bruxelloise. Sélectionnez votre
            commune pour découvrir nos interventions locales, les spécificités architecturales
            du quartier et notre tarification.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {communes.map((c) => (
              <Link
                key={c.slug}
                href={`/communes/${c.slug}`}
                className="group flex items-start justify-between gap-3 border border-gray-100 hover:border-[#1A4731] hover:shadow-md rounded-xl px-5 py-4 transition-all"
              >
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-[#1A4731] transition-colors flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#F97316]" />
                    Gouttières {c.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{c.tag}</p>
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-[#F97316] transition-colors flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-gray-600 text-sm">
              <strong>Votre commune n&apos;est pas listée ?</strong> Nous couvrons aussi la
              périphérie bruxelloise — appelez-nous pour vérifier la disponibilité.
            </p>
            <a
              href="tel:0451053370"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              <Phone size={16} /> 0451 05 33 70
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
