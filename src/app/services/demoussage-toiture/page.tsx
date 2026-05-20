import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Leaf } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Démoussage Toiture Bruxelles — Traitement Anti-Mousse | Devis Gratuit",
  description:
    "Démoussage et traitement anti-mousse de toiture à Bruxelles. Prolongez la vie de vos tuiles. Devis gratuit. Appelez le 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services/demoussage-toiture" },
};

export default function DemoussageToiture() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/" },
          { label: "Démoussage toiture" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={24} className="text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">Entretien toiture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Démoussage de Toiture à Bruxelles
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              La mousse qui colonise vos tuiles n&apos;est pas qu&apos;inesthétique : elle retient l&apos;humidité,
              dégrade les tuiles et alimente directement vos gouttières en débris. Un démoussage
              professionnel associé à un traitement préventif protège votre toiture pendant plusieurs années.
            </p>
            <a href="tel:0477234187" className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              <Phone size={18} /> 0477 23 41 87
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi traiter la mousse sur votre toiture ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le climat bruxellois, caractérisé par des pluies fréquentes et un ensoleillement modéré,
                crée des conditions idéales pour le développement des mousses et lichens sur les toitures.
                Ce phénomène est particulièrement marqué dans les communes boisées comme Watermael-Boitsfort,
                Woluwe-Saint-Pierre et Uccle, où l&apos;ombre des grands arbres maintient une humidité
                favorable à la prolifération végétale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Une mousse non traitée s&apos;infiltre progressivement sous les tuiles, soulevant celles-ci
                et créant des voies d&apos;infiltration pour l&apos;eau de pluie. De plus, les mousses libèrent
                continuellement des spores, feuilles et débris qui obstruent rapidement les gouttières.
                Le démoussage de la toiture et le nettoyage des gouttières sont donc deux interventions
                complémentaires qu&apos;il est judicieux de réaliser ensemble.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Notre processus de démoussage</h2>
              <div className="space-y-4 mb-6">
                {[
                  {
                    n: "01",
                    title: "Inspection de la toiture",
                    desc: "Évaluation de l'état des tuiles, identification des zones les plus touchées et détection d'éventuels problèmes structurels.",
                  },
                  {
                    n: "02",
                    title: "Démoussage mécanique",
                    desc: "Brossage manuel ou mécanique des tuiles pour décrocher les mousses et lichens sans abîmer les tuiles.",
                  },
                  {
                    n: "03",
                    title: "Application de traitement",
                    desc: "Pulvérisation d'un traitement anti-mousse et anti-lichen biodégradable pour prévenir la repousse pendant 3 à 5 ans.",
                  },
                  {
                    n: "04",
                    title: "Nettoyage des gouttières",
                    desc: "Évacuation des débris tombés dans les gouttières lors du démoussage. Service souvent combiné pour une intervention complète.",
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 items-start border border-gray-200 rounded-xl p-4">
                    <div className="w-8 h-8 bg-[#1A4731] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{step.n}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{step.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Ce que comprend notre prestation</h2>
              <ul className="space-y-2 mb-6">
                {[
                  "Inspection complète de la toiture",
                  "Démoussage mécanique des tuiles",
                  "Traitement anti-mousse préventif",
                  "Nettoyage des gouttières (optionnel ou inclus selon formule)",
                  "Évacuation des déchets végétaux",
                  "Rapport d'état de la toiture",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle size={16} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-6">
                <h3 className="font-semibold text-[#1A4731] mb-2">Offre combinée recommandée</h3>
                <p className="text-gray-600 text-sm">
                  Nous proposons un tarif avantageux lorsque le démoussage toiture est combiné au
                  nettoyage des gouttières lors d&apos;une même intervention. Contactez-nous pour un devis personnalisé.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1A4731] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Tarifs démoussage</h3>
                <div className="space-y-3 text-sm mb-5">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-gray-300">Démoussage (par m²)</span>
                    <span className="font-bold">3–6€/m²</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-gray-300">Traitement anti-mousse inclus</span>
                    <span className="font-bold text-green-400">Inclus</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Combo + nettoyage gouttières</span>
                    <span className="font-bold text-[#F97316]">Remise</span>
                  </div>
                </div>
                <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-4 py-3 rounded-lg w-full hover:bg-orange-500 transition-colors">
                  <Phone size={16} /> Devis gratuit
                </a>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h3 className="font-semibold text-[#F97316] mb-2">Services complémentaires</h3>
                <ul className="space-y-1.5 text-sm">
                  <li><Link href="/services/nettoyage-gouttieres" className="text-gray-700 hover:text-[#F97316]">→ Nettoyage gouttières</Link></li>
                  <li><Link href="/services/debouchage-gouttieres" className="text-gray-700 hover:text-[#F97316]">→ Débouchage urgence</Link></li>
                  <li><Link href="/services/reparation-gouttieres" className="text-gray-700 hover:text-[#F97316]">→ Réparation gouttières</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Devis démoussage gratuit</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ContactForm defaultIntervention="Démoussage toiture" />
          </div>
        </div>
      </section>
    </>
  );
}
