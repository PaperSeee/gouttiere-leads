import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Droplets, Clock, Shield } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Bruxelles — Service Complet | Devis Gratuit",
  description:
    "Service de nettoyage de gouttières à Bruxelles. Évacuation feuilles, mousses, sédiments. Nettoyage gouttières + descentes pluviales. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services/nettoyage-gouttieres" },
  keywords: ["nettoyage gouttières Bruxelles professionnel", "nettoyage gouttières prix Bruxelles", "entretien gouttières maison Bruxelles", "nettoyage haute pression gouttières"],
  openGraph: {
    type: "website",
    title: "Nettoyage Gouttières Bruxelles — Service Complet",
    description: "Évacuation feuilles, mousses, sédiments. Nettoyage gouttières + descentes pluviales. Devis gratuit, intervention 48h.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Bruxelles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Gouttières Bruxelles — Devis Gratuit",
    description: "Nettoyage professionnel gouttières + descentes pluviales à Bruxelles. Intervention 48h.",
    images: ["/opengraph-image"],
  },
};

const communes = [
  { name: "Anderlecht", slug: "anderlecht" },
  { name: "Auderghem", slug: "auderghem" },
  { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" },
  { name: "Bruxelles", slug: "bruxelles" },
  { name: "Etterbeek", slug: "etterbeek" },
  { name: "Evere", slug: "evere" },
  { name: "Forest", slug: "forest" },
  { name: "Ganshoren", slug: "ganshoren" },
  { name: "Ixelles", slug: "ixelles" },
  { name: "Jette", slug: "jette" },
  { name: "Koekelberg", slug: "koekelberg" },
  { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" },
  { name: "Saint-Gilles", slug: "saint-gilles" },
  { name: "Saint-Josse-ten-Noode", slug: "saint-josse-ten-noode" },
  { name: "Schaerbeek", slug: "schaerbeek" },
  { name: "Uccle", slug: "uccle" },
  { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
  { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
  { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
];

export default function NettoyageGouttieres() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nettoyage de gouttières Bruxelles",
    provider: {
      "@type": "LocalBusiness",
      name: "Nettoyage Gouttières Bruxelles",
      telephone: "0477234187",
    },
    areaServed: "Bruxelles",
    description: "Service de nettoyage complet de gouttières à Bruxelles. Évacuation des feuilles, mousses et sédiments. Nettoyage des descentes pluviales inclus.",
    offers: {
      "@type": "Offer",
      priceRange: "80-150€",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/" },
          { label: "Nettoyage gouttières" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Droplets size={24} className="text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">Service nettoyage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Nettoyage de Gouttières à Bruxelles
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Un nettoyage professionnel de vos gouttières une à deux fois par an suffit à prévenir
              la grande majorité des problèmes liés aux eaux pluviales. Nos techniciens interviennent
              sur tous types de toitures et de gouttières dans les 19 communes de Bruxelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                <Phone size={18} /> 0477 23 41 87
              </a>
              <a href="#devis" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                Devis gratuit <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">En quoi consiste un nettoyage complet de gouttières ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un nettoyage professionnel de gouttières à Bruxelles comprend plusieurs étapes distinctes.
                Nos techniciens commencent par inspecter visuellement l&apos;ensemble de votre installation :
                gouttières, crochets de fixation, joints, collets de jonction et descentes pluviales.
                Cette inspection permet d&apos;identifier non seulement les obstructions, mais aussi les
                défauts structurels qui pourraient causer des problèmes à moyen terme.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                L&apos;étape centrale consiste à extraire manuellement l&apos;ensemble des dépôts accumulés :
                feuilles mortes, mousses, sédiments terreux, gravillons transportés par le vent et
                tout autre déchet végétal. Les feuilles de platanes, très présentes dans les communes
                d&apos;Uccle, de Watermael-Boitsfort et d&apos;Ixelles, forment des bouchons particulièrement
                compacts qui nécessitent parfois un travail minutieux.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Une fois les gouttières vidées, nous rinçons à l&apos;eau claire pour vérifier l&apos;écoulement
                et détecter les points de stagnation. Les descentes pluviales sont également débouchées
                et rincées. En fin d&apos;intervention, nous contrôlons le débit à la base de chaque descente
                pour nous assurer que l&apos;évacuation est parfaitement fonctionnelle.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Que comprend notre prestation de nettoyage ?</h2>
              <ul className="space-y-2 mb-6">
                {[
                  "Inspection complète de l'installation",
                  "Extraction manuelle de tous les dépôts",
                  "Rinçage des gouttières à l'eau claire",
                  "Débouchage des descentes pluviales",
                  "Vérification des joints et fixations",
                  "Test d'écoulement final",
                  "Évacuation des déchets végétaux",
                  "Rapport d'état de l'installation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Quelle fréquence de nettoyage à Bruxelles ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La fréquence recommandée dépend principalement de l&apos;environnement immédiat de votre
                habitation. Dans les zones urbaines denses comme Etterbeek ou Schaerbeek, un nettoyage
                annuel en automne (octobre-novembre) est généralement suffisant. En revanche, dans les
                communes boisées telles que Watermael-Boitsfort, Woluwe-Saint-Pierre ou Uccle, la
                présence d&apos;arbres matures — hêtres, chênes, frênes, tilleuls — justifie deux
                interventions par an : une au printemps pour évacuer les pollens et graines, et une
                en automne pour les feuilles mortes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pour les copropriétés et immeubles à appartements, nous recommandons également un
                contrôle annuel systématique, car les gouttières communes sont souvent moins bien
                entretenues que celles des maisons individuelles.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Nos communes d&apos;intervention</h2>
              <div className="grid grid-cols-3 gap-2">
                {communes.map((c) => (
                  <Link key={c.slug} href={`/communes/${c.slug}`} className="text-[#1A4731] hover:text-[#F97316] font-medium text-sm flex items-center gap-1">
                    <ArrowRight size={12} /> {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1A4731] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Tarifs nettoyage</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-sm text-gray-300">Maison standard</span>
                    <span className="font-bold">80–120€</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-sm text-gray-300">Grande maison / villa</span>
                    <span className="font-bold">120–150€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-300">Immeuble (devis)</span>
                    <span className="font-bold">Sur mesure</span>
                  </div>
                </div>
                <a href="tel:0477234187" className="mt-5 flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-4 py-3 rounded-lg w-full hover:bg-orange-500 transition-colors">
                  <Phone size={16} /> 0477 23 41 87
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Clock size={16} className="text-[#F97316]" />, text: "Intervention sous 48h" },
                    { icon: <Shield size={16} className="text-[#F97316]" />, text: "Assurance RC Pro" },
                    { icon: <CheckCircle size={16} className="text-[#F97316]" />, text: "Devis gratuit" },
                    { icon: <Droplets size={16} className="text-[#F97316]" />, text: "Déchets évacués" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                      {item.icon} {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-bold text-[#F97316] mb-2">Services complémentaires</h3>
                <ul className="space-y-1.5">
                  <li><Link href="/services/debouchage-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Débouchage urgence</Link></li>
                  <li><Link href="/services/reparation-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Réparation gouttières</Link></li>
                  <li><Link href="/services/demoussage-toiture" className="text-sm text-gray-700 hover:text-[#F97316]">→ Démoussage toiture</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devis */}
      <section id="devis" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Demandez votre devis gratuit</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ContactForm defaultIntervention="Nettoyage gouttières" />
          </div>
        </div>
      </section>
    </>
  );
}
