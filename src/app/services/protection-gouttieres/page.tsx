import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Shield, Clock, Leaf } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Protection anti-feuilles à Bruxelles | Gouttières Bruxelles" },
  description:
    "Pose de protections anti-feuilles pour gouttières à Bruxelles : grilles, brosses, filets. Espacez vos nettoyages. Devis gratuit.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services/protection-gouttieres" },
  keywords: ["protection gouttière anti-feuilles Bruxelles", "pose grille gouttière Bruxelles", "installation brosse anti-feuilles gouttière", "filet anti-feuilles gouttière prix"],
  openGraph: {
    type: "website",
    title: "Protection Anti-Feuilles Gouttières Bruxelles",
    description: "Pose de grilles, brosses et filets anti-feuilles pour gouttières à Bruxelles. Devis gratuit, intervention 48h.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/services/protection-gouttieres",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Protection anti-feuilles gouttières Bruxelles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protection Anti-Feuilles Gouttières Bruxelles",
    description: "Pose de grilles, brosses et filets anti-feuilles. Devis gratuit, intervention 48h.",
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

export default function ProtectionGouttieres() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pose de protections anti-feuilles pour gouttières Bruxelles",
    provider: {
      "@id": "https://www.nettoyage-gouttieres-bruxelles.be/#business",
    },
    areaServed: "Bruxelles",
    description: "Installation de protections anti-feuilles pour gouttières à Bruxelles : grilles métalliques ou plastiques, brosses, filets. Solution pour espacer les nettoyages de gouttières.",
    offers: {
      "@type": "Offer",
      priceRange: "sur devis",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/" },
          { label: "Protection anti-feuilles" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield size={24} className="text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">Service protection anti-feuilles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Protection Anti-Feuilles pour Gouttières à Bruxelles
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Grilles, brosses ou filets : nous posons des protections anti-feuilles adaptées à votre
              habitation pour espacer nettement les nettoyages de gouttières, sans les supprimer
              complètement. Intervention dans les 19 communes de Bruxelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                <Phone size={18} /> 0451 05 33 70
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi poser une protection anti-feuilles ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bruxelles est une ville très arborée — platanes, marronniers, tilleuls et frênes bordent
                de nombreuses rues et jardins. À chaque automne, les gouttières se remplissent de feuilles
                en quelques semaines seulement. Une protection anti-feuilles bien choisie et bien posée
                réduit cette accumulation et permet d&apos;espacer nettement les nettoyages.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aucun système n&apos;est cependant totalement autonettoyant : les fines particules,
                pollens et poussières finissent toujours par s&apos;accumuler. Une inspection annuelle
                reste recommandée, même avec une protection installée.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Les systèmes que nous posons</h2>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-100 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-1">Grilles métalliques ou plastiques</h3>
                  <p className="text-gray-600 text-sm">
                    Le système le plus répandu : une grille posée sur le dessus de la gouttière qui laisse
                    passer l&apos;eau mais bloque les feuilles. Efficaces contre les grosses feuilles,
                    durables (surtout en métal), bon rapport qualité-prix. Les grilles rigides de qualité
                    gagnent à être posées par un professionnel pour garantir fixation et ajustement.
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-1">Brosses anti-feuilles</h3>
                  <p className="text-gray-600 text-sm">
                    De longues brosses cylindriques installées dans la gouttière : les feuilles restent en
                    surface tandis que l&apos;eau circule entre les poils. Installation simple, adaptable
                    à la plupart des gouttières, mais efficacité moindre sous les grands arbres.
                  </p>
                </div>
                <div className="border border-gray-100 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-1">Filets anti-feuilles</h3>
                  <p className="text-gray-600 text-sm">
                    Un filet tendu au-dessus de la gouttière qui retient les feuilles. Solution économique,
                    mais durée de vie plus limitée : le filet peut s&apos;affaisser ou se déchirer avec le
                    temps.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Notre recommandation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pour une maison bruxelloise très exposée aux arbres, nous recommandons généralement une
                grille de qualité bien posée, combinée à une inspection annuelle. Vous ne supprimez pas
                l&apos;entretien de vos gouttières, mais vous le réduisez nettement et vous évitez les
                débordements liés aux feuilles accumulées. Nous établissons un diagnostic gratuit de
                votre installation pour recommander le système le plus adapté à votre environnement
                (essences d&apos;arbres à proximité, exposition, type de gouttière).
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
                <h3 className="font-bold text-lg mb-4">Devis pose protection</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Le tarif dépend du système choisi et du linéaire de gouttières à équiper. Diagnostic et
                  devis gratuits, sans engagement.
                </p>
                <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-4 py-3 rounded-lg w-full hover:bg-orange-500 transition-colors">
                  <Phone size={16} /> 0451 05 33 70
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Clock size={16} className="text-[#F97316]" />, text: "Intervention sous 48h" },
                    { icon: <Shield size={16} className="text-[#F97316]" />, text: "Assurance RC Pro" },
                    { icon: <CheckCircle size={16} className="text-[#F97316]" />, text: "Devis gratuit" },
                    { icon: <Leaf size={16} className="text-[#F97316]" />, text: "Diagnostic personnalisé" },
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
                  <li><Link href="/services/nettoyage-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Nettoyage gouttières</Link></li>
                  <li><Link href="/services/debouchage-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Débouchage urgence</Link></li>
                  <li><Link href="/services/reparation-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Réparation gouttières</Link></li>
                  <li><Link href="/services/demoussage-toiture" className="text-sm text-gray-700 hover:text-[#F97316]">→ Démoussage toiture</Link></li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="font-semibold text-[#1A4731] mb-2">Pour bien choisir</h3>
                <p className="text-gray-600 text-sm mb-2">Grilles, brosses ou filets : notre comparatif détaillé pour choisir le bon système.</p>
                <Link href="/blog/protection-gouttieres-anti-feuilles-bruxelles" className="text-[#F97316] text-sm font-semibold flex items-center gap-1">
                  Grilles, brosses ou filets : que choisir ? <ArrowRight size={14} />
                </Link>
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
            <ContactForm defaultIntervention="Autre" />
          </div>
        </div>
      </section>
    </>
  );
}
