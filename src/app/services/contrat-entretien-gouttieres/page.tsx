import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, CalendarCheck, Clock, Shield, Percent } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contrat d'entretien de gouttières à Bruxelles" },
  description:
    "Contrat d'entretien annuel pour vos gouttières à Bruxelles : passages programmés en octobre et mars, -10% sur le tarif standard, priorité de planning.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services/contrat-entretien-gouttieres" },
  keywords: ["contrat entretien gouttières Bruxelles", "abonnement nettoyage gouttières", "entretien annuel gouttières prix", "forfait entretien gouttières Bruxelles"],
  openGraph: {
    type: "website",
    title: "Contrat d'Entretien Annuel Gouttières Bruxelles",
    description: "Passages programmés en octobre et mars, -10% sur le tarif standard, priorité de planning. Devis gratuit.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/services/contrat-entretien-gouttieres",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contrat d'entretien annuel gouttières Bruxelles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrat d'Entretien Annuel Gouttières Bruxelles",
    description: "Passages programmés en octobre et mars, -10% sur le tarif standard. Devis gratuit.",
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

export default function ContratEntretienGouttieres() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Contrat d'entretien annuel de gouttières Bruxelles",
    provider: {
      "@id": "https://www.nettoyage-gouttieres-bruxelles.be/#business",
    },
    areaServed: "Bruxelles",
    description: "Contrat d'entretien annuel des gouttières à Bruxelles : passages programmés, remise de 10% sur le tarif standard, priorité de planning en haute saison.",
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
          { label: "Contrat d'entretien annuel" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <CalendarCheck size={24} className="text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">Contrat d&apos;entretien annuel</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Contrat d&apos;Entretien Annuel pour Gouttières à Bruxelles
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Plutôt qu&apos;une intervention ponctuelle à chaque fois que vous y pensez, confiez-nous
              l&apos;entretien régulier de vos gouttières : passages programmés à l&apos;avance, tarif
              préférentiel et priorité de planning en haute saison. Vous n&apos;avez plus à surveiller
              vos gouttières — on s&apos;en occupe.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi un contrat plutôt qu&apos;une intervention ponctuelle ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beaucoup de propriétaires bruxellois ne font appel à un professionnel qu&apos;une fois le
                débordement constaté — souvent en pleine saison des pluies, quand les délais s&apos;allongent
                et que le bouchon est déjà bien installé. Un contrat d&apos;entretien annuel inverse cette
                logique : le passage est planifié à l&apos;avance, avant que le problème n&apos;apparaisse,
                et le tarif est fixé une fois pour toutes pour l&apos;année.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un entretien régulier est aussi généralement plus rapide et moins coûteux qu&apos;une
                intervention ponctuelle sur des gouttières très encrassées : l&apos;état moyen de
                l&apos;installation reste bon d&apos;un passage à l&apos;autre, ce qui réduit le temps de
                travail nécessaire à chaque visite.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Ce que comprend le contrat</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Passage programmé en octobre (avant l'hiver)",
                  "Passage optionnel en mars (avant le printemps)",
                  "Remise de 10% sur le tarif standard",
                  "Priorité de planning en haute saison",
                  "Nettoyage gouttières + descentes pluviales",
                  "Rapport d'état à chaque passage",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle size={16} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Le rythme exact (un ou deux passages par an) est adapté à votre environnement : une
                commune très arborée comme Uccle, Watermael-Boitsfort ou Woluwe-Saint-Pierre justifie
                souvent deux passages, tandis qu&apos;un passage annuel suffit généralement en zone
                urbaine plus dense.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Pour qui ce contrat est-il adapté ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le contrat d&apos;entretien s&apos;adresse en priorité aux propriétaires de maisons proches
                de grands arbres, aux copropriétés et syndics qui souhaitent planifier l&apos;entretien
                des parties communes sans y repenser chaque année, ainsi qu&apos;aux gestionnaires de
                biens qui préfèrent un partenaire unique et un tarif prévisible sur la durée.
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
                <h3 className="font-bold text-lg mb-4">Devis contrat d&apos;entretien</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Le tarif du contrat dépend de la fréquence choisie et se calcule sur la base de votre
                  tarif de nettoyage habituel, avec 10% de remise. Devis gratuit, sans engagement.
                </p>
                <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-4 py-3 rounded-lg w-full hover:bg-orange-500 transition-colors">
                  <Phone size={16} /> 0451 05 33 70
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Avantages du contrat</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Percent size={16} className="text-[#F97316]" />, text: "-10% sur le tarif standard" },
                    { icon: <Clock size={16} className="text-[#F97316]" />, text: "Priorité de planning" },
                    { icon: <Shield size={16} className="text-[#F97316]" />, text: "Assurance RC Pro" },
                    { icon: <CalendarCheck size={16} className="text-[#F97316]" />, text: "Passages programmés à l'avance" },
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
                  <li><Link href="/services/protection-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Protection anti-feuilles</Link></li>
                  <li><Link href="/services/demoussage-toiture" className="text-sm text-gray-700 hover:text-[#F97316]">→ Démoussage toiture</Link></li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="font-semibold text-[#1A4731] mb-2">Pour bien choisir</h3>
                <p className="text-gray-600 text-sm mb-2">À quelle fréquence entretenir ses gouttières à Bruxelles ? Notre calendrier complet.</p>
                <Link href="/blog/entretien-gouttieres-quand-faire" className="text-[#F97316] text-sm font-semibold flex items-center gap-1">
                  Le calendrier d&apos;entretien idéal <ArrowRight size={14} />
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
            <ContactForm defaultIntervention="Contrat d'entretien annuel" />
          </div>
        </div>
      </section>
    </>
  );
}
