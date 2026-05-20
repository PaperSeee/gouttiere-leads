import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Wrench } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Réparation Gouttières Bruxelles — Remplacement PVC, Zinc, Alu | Devis Gratuit",
  description:
    "Réparation et remplacement de gouttières à Bruxelles. PVC, zinc, aluminium, cuivre. Fissures, joints, fixations. Devis gratuit. Appelez le 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services/reparation-gouttieres" },
};

export default function ReparationGouttieres() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/" },
          { label: "Réparation gouttières" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={24} className="text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">Réparation & remplacement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Réparation et Remplacement de Gouttières à Bruxelles
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Une gouttière fissurée, déboîtée ou rouillée ne se contente pas de mal fonctionner :
              elle endommage progressivement votre façade et vos fondations. Nos techniciens évaluent
              l&apos;état de vos gouttières et vous proposent la solution la plus adaptée, de la simple
              réparation au remplacement complet.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Réparer ou remplacer ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La décision entre réparation et remplacement dépend de l&apos;état général de vos gouttières
                et de leur ancienneté. Une gouttière en PVC de moins de 10 ans avec une simple fissure
                ou un joint décollé peut généralement être réparée à moindre coût. En revanche, une
                gouttière en zinc des années 1970-1980, comme on en trouve fréquemment à Woluwe-Saint-Lambert
                ou Etterbeek, peut être trop corrodée pour mériter une réparation partielle.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dans les maisons ouvrières de Forest ou les immeubles Art Nouveau de Schaerbeek, les
                gouttières en PVC posées lors de rénovations des années 1990 sont souvent fragilisées
                par les variations thermiques et présentent des fissures longitudinales typiques.
                Nos techniciens évaluent chaque situation individuellement pour vous conseiller
                objectivement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Types de réparations réalisées</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Colmatage de fissures et fentes",
                  "Remplacement de joints de dilatation",
                  "Réfection des collets de jonction",
                  "Remplacement de crochets cassés",
                  "Repositionnement de gouttières affaissées",
                  "Remplacement de tronçons endommagés",
                  "Réparation de coudes et raccords",
                  "Étanchéification de joints fuyants",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle size={16} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Matériaux de remplacement disponibles</h2>
              <div className="space-y-4">
                {[
                  {
                    mat: "PVC",
                    pros: "Économique, léger, résistant à la corrosion, large choix de couleurs",
                    prix: "15–25€/ml posé",
                  },
                  {
                    mat: "Aluminium",
                    pros: "Durable, recyclable, bonne résistance thermique, aspect moderne",
                    prix: "25–40€/ml posé",
                  },
                  {
                    mat: "Zinc",
                    pros: "Très longue durée de vie (50+ ans), esthétique traditionnel bruxellois",
                    prix: "35–55€/ml posé",
                  },
                  {
                    mat: "Cuivre",
                    pros: "Très haut de gamme, durée de vie exceptionnelle, patine naturelle",
                    prix: "Sur devis",
                  },
                ].map((m) => (
                  <div key={m.mat} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{m.mat}</h3>
                      <span className="text-[#F97316] font-semibold text-sm">{m.prix}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{m.pros}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">Prix indicatifs. Devis gratuit sur place selon accessibilité et linéaire.</p>

              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-semibold text-[#1A4731] mb-2">Pour aller plus loin</h3>
                <p className="text-gray-600 text-sm mb-2">Découvrez notre guide sur les différents types de gouttières pour faire le bon choix :</p>
                <Link href="/types-gouttieres" className="text-[#F97316] text-sm font-semibold flex items-center gap-1">
                  Guide complet types de gouttières <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1A4731] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Tarifs réparation</h3>
                <div className="space-y-3 text-sm mb-5">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-gray-300">Réparation joint</span>
                    <span className="font-bold">40–80€</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-gray-300">Remplacement tronçon PVC</span>
                    <span className="font-bold">15–25€/ml</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-gray-300">Remplacement tronçon zinc</span>
                    <span className="font-bold">35–55€/ml</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Descente pluviale</span>
                    <span className="font-bold">20–45€/ml</span>
                  </div>
                </div>
                <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-4 py-3 rounded-lg w-full hover:bg-orange-500 transition-colors">
                  <Phone size={16} /> Devis gratuit
                </a>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h3 className="font-semibold text-[#F97316] mb-2">Services associés</h3>
                <ul className="space-y-1.5 text-sm">
                  <li><Link href="/services/nettoyage-gouttieres" className="text-gray-700 hover:text-[#F97316]">→ Nettoyage gouttières</Link></li>
                  <li><Link href="/services/debouchage-gouttieres" className="text-gray-700 hover:text-[#F97316]">→ Débouchage urgence</Link></li>
                  <li><Link href="/services/demoussage-toiture" className="text-gray-700 hover:text-[#F97316]">→ Démoussage toiture</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Demander un devis réparation</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ContactForm defaultIntervention="Réparation gouttières" />
          </div>
        </div>
      </section>
    </>
  );
}
