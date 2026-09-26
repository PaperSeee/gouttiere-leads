import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "Gouttières : les 19 communes de Bruxelles desservies" },
  description:
    "Nettoyage, débouchage et réparation de gouttières dans les 19 communes de la Région bruxelloise. Dès 80 €, devis gratuit, intervention sous 48h.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes" },
};

const zones: { title: string; intro: string; items: { slug: string; name: string; line: string }[] }[] = [
  {
    title: "Centre et première couronne",
    intro: "Bâti dense, maisons de maître divisées en appartements, chéneaux cachés derrière les corniches.",
    items: [
      { slug: "bruxelles", name: "Bruxelles-Ville", line: "Pentagone, Laeken, Neder-Over-Heembeek et Haren" },
      { slug: "saint-josse-ten-noode", name: "Saint-Josse-ten-Noode", line: "Immeubles hauts, toits plats et avaloirs" },
      { slug: "saint-gilles", name: "Saint-Gilles", line: "Corniches en bois et zinc Art nouveau" },
      { slug: "ixelles", name: "Ixelles", line: "Étangs, maisons de maître et copropriétés" },
      { slug: "etterbeek", name: "Etterbeek", line: "Maisons divisées et immeubles à toit plat" },
    ],
  },
  {
    title: "Nord et nord-est",
    intro: "Avenues arborées, maisons Belle Époque et quartiers résidentiels plus aérés.",
    items: [
      { slug: "schaerbeek", name: "Schaerbeek", line: "Parc Josaphat et chéneaux Belle Époque" },
      { slug: "evere", name: "Evere", line: "Moeraske, maisons semi-mitoyennes" },
      { slug: "woluwe-saint-lambert", name: "Woluwe-Saint-Lambert", line: "Parc Malou, Kapelleveld, immeubles" },
    ],
  },
  {
    title: "Ouest et nord-ouest",
    intro: "Maisons ouvrières le long du canal, lotissements et villas avec jardin.",
    items: [
      { slug: "anderlecht", name: "Anderlecht", line: "Cureghem, Neerpede, cité-jardin de La Roue" },
      { slug: "molenbeek-saint-jean", name: "Molenbeek-Saint-Jean", line: "Maisons de rapport, Scheutbos, Karreveld" },
      { slug: "koekelberg", name: "Koekelberg", line: "Basilique, parc Élisabeth, maisons étroites" },
      { slug: "berchem-sainte-agathe", name: "Berchem-Sainte-Agathe", line: "Lotissements et garages à toit plat" },
      { slug: "ganshoren", name: "Ganshoren", line: "Parc du château de Rivieren, jardins" },
      { slug: "jette", name: "Jette", line: "Bois du Laerbeek, bouleaux et villas" },
    ],
  },
  {
    title: "Sud et sud-est",
    intro: "Communes boisées en bordure de la Forêt de Soignes : feuilles tardives et mousses.",
    items: [
      { slug: "forest", name: "Forest", line: "Parc Duden, rangées de maisons ouvrières" },
      { slug: "uccle", name: "Uccle", line: "Villas sous les arbres, Saint-Job, Wolvendael" },
      { slug: "watermael-boitsfort", name: "Watermael-Boitsfort", line: "Cités-jardins du Logis et de Floréal" },
      { slug: "auderghem", name: "Auderghem", line: "Rouge-Cloître et vallée de la Woluwe" },
      { slug: "woluwe-saint-pierre", name: "Woluwe-Saint-Pierre", line: "Parc de Woluwe, Stockel, Chant d'Oiseau" },
    ],
  },
];

export default function CommunesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes" }]} />
      <section className="bg-[#1A4731] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Nettoyage de gouttières dans les 19 communes de Bruxelles</h1>
          <p className="text-green-100 text-lg max-w-3xl">
            Chaque commune a ses contraintes : chéneaux cachés dans le centre, feuilles de hêtres tardives au sud,
            maisons de rapport le long du canal. Choisissez la vôtre pour voir nos conseils locaux, les prix et les
            questions fréquentes. Déplacement inclus dans le devis, partout dans la Région.
          </p>
          <a href="tel:0451053370" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 font-bold text-white hover:bg-orange-500">
            <Phone size={18} /> 0451 05 33 70
          </a>
        </div>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {zones.map((z) => (
            <div key={z.title}>
              <h2 className="text-2xl font-bold text-gray-900">{z.title}</h2>
              <p className="mt-1 mb-5 text-gray-500">{z.intro}</p>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {z.items.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/communes/${c.slug}`} className="group flex h-full items-start gap-3 rounded-xl border border-gray-200 p-4 hover:border-[#1A4731] hover:bg-gray-50">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-[#F97316]" />
                      <span className="flex-1">
                        <span className="block font-semibold text-gray-900 group-hover:text-[#1A4731]">Nettoyage de gouttières à {c.name}</span>
                        <span className="block text-sm text-gray-500">{c.line}</span>
                      </span>
                      <ArrowRight size={16} className="mt-1 shrink-0 text-gray-300 group-hover:text-[#F97316]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-gray-600">
            Les prix sont les mêmes dans toute la Région : nettoyage dès 80 €, débouchage dès 120 €. Détail sur la page{" "}
            <Link href="/tarifs" className="font-semibold text-[#1A4731] underline hover:text-[#F97316]">tarifs du nettoyage de gouttières</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
