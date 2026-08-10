import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Droplets, AlertTriangle, Wrench, Leaf, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Services Gouttières Bruxelles — Nettoyage & Réparation",
  description:
    "Tous nos services gouttières à Bruxelles : nettoyage, débouchage d'urgence, réparation et démoussage toiture. Devis gratuit, intervention 48h.",
  keywords: [
    "services gouttières Bruxelles",
    "entretien gouttières Bruxelles",
    "nettoyage débouchage réparation gouttières",
  ],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services" },
  openGraph: {
    title: "Services Gouttières Bruxelles — Nettoyage, Débouchage, Réparation",
    description: "Nettoyage, débouchage d'urgence, réparation et démoussage de toiture à Bruxelles. Devis gratuit.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/services",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Services gouttières Bruxelles" }],
  },
};

const services = [
  {
    icon: <Droplets size={26} className="text-[#1A4731]" />,
    title: "Nettoyage de gouttières",
    href: "/services/nettoyage-gouttieres",
    desc: "Évacuation des feuilles, mousses et sédiments. Nettoyage des gouttières et des descentes pluviales inclus, une à deux fois par an selon votre environnement.",
    price: "dès 80€",
    tag: "Le plus demandé",
  },
  {
    icon: <AlertTriangle size={26} className="text-red-500" />,
    title: "Débouchage d'urgence",
    href: "/services/debouchage-gouttieres",
    desc: "Débordement actif lors d'une forte pluie ? Intervention haute pression disponible 7j/7, souvent le jour même en haute saison.",
    price: "dès 120€",
    tag: "Disponible 7j/7",
  },
  {
    icon: <Wrench size={26} className="text-blue-600" />,
    title: "Réparation et remplacement",
    href: "/services/reparation-gouttieres",
    desc: "Gouttière fissurée, décrochée ou corrodée ? Réparation ciblée ou remplacement complet en PVC, aluminium, zinc ou cuivre.",
    price: "devis gratuit",
    tag: null,
  },
  {
    icon: <Leaf size={26} className="text-yellow-600" />,
    title: "Démoussage de toiture",
    href: "/services/demoussage-toiture",
    desc: "Traitement mécanique anti-mousse pour prolonger la durée de vie de votre toiture et limiter l'encrassement de vos gouttières.",
    price: "devis gratuit",
    tag: null,
  },
];

export default function ServicesHub() {
  return (
    <>
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />

      <section className="bg-[#1A4731] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Nos Services d&apos;Entretien de Gouttières à Bruxelles
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Du nettoyage préventif à l&apos;intervention d&apos;urgence, nous couvrons l&apos;ensemble des
            besoins liés à l&apos;entretien de vos gouttières et de votre toiture, dans les 19
            communes de la région bruxelloise.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-gray-100 rounded-2xl p-6 hover:border-[#1A4731] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-100 group-hover:bg-green-50 p-3 rounded-xl transition-colors">
                    {s.icon}
                  </div>
                  {s.tag && (
                    <span className="text-xs font-semibold bg-orange-50 text-[#F97316] px-2.5 py-1 rounded-full">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1A4731] transition-colors mb-2">
                  {s.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#F97316]">{s.price}</span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-[#1A4731] group-hover:text-[#F97316] transition-colors">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-[#1A4731] mt-0.5 flex-shrink-0" />
              <p className="text-gray-600 text-sm">
                Besoin de plusieurs prestations à la fois ? Consultez aussi notre{" "}
                <Link href="/types-gouttieres" className="text-[#1A4731] font-semibold hover:text-[#F97316]">
                  guide des types de gouttières
                </Link>{" "}
                et nos{" "}
                <Link href="/tarifs" className="text-[#1A4731] font-semibold hover:text-[#F97316]">
                  tarifs détaillés
                </Link>
                .
              </p>
            </div>
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
