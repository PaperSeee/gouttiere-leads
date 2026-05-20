import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tarifs Nettoyage Gouttières Bruxelles — Prix Indicatifs 2026",
  description:
    "Tarifs indicatifs nettoyage et entretien gouttières à Bruxelles. Nettoyage 80–150€, débouchage urgence 120–200€, démoussage 3–6€/m². Devis gratuit.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/tarifs" },
};

const tarifs = [
  {
    service: "Nettoyage gouttières (maison standard)",
    fourchette: "80 – 120€",
    detail: "Gouttières + descentes, maison 2 façades, accès normal",
    color: "border-green-300 bg-green-50",
  },
  {
    service: "Nettoyage gouttières (grande maison / villa)",
    fourchette: "120 – 150€",
    detail: "Grande surface, toiture complexe ou accès difficile",
    color: "border-green-300 bg-green-50",
  },
  {
    service: "Débouchage urgence (heures ouvrables)",
    fourchette: "120 – 160€",
    detail: "Débouchage haute pression, gouttières + descentes",
    color: "border-red-300 bg-red-50",
  },
  {
    service: "Débouchage urgence (weekend / jours fériés)",
    fourchette: "160 – 200€",
    detail: "Majoration weekend, disponibilité 7j/7",
    color: "border-red-300 bg-red-50",
  },
  {
    service: "Démoussage toiture",
    fourchette: "3 – 6€/m²",
    detail: "Démoussage mécanique + traitement anti-mousse inclus",
    color: "border-yellow-300 bg-yellow-50",
  },
  {
    service: "Remplacement gouttière PVC (posé)",
    fourchette: "15 – 25€/ml",
    detail: "Fourniture et pose, couleur standard",
    color: "border-blue-300 bg-blue-50",
  },
  {
    service: "Remplacement gouttière aluminium (posé)",
    fourchette: "25 – 40€/ml",
    detail: "Fourniture et pose, coloris au choix",
    color: "border-blue-300 bg-blue-50",
  },
  {
    service: "Remplacement gouttière zinc (posé)",
    fourchette: "35 – 55€/ml",
    detail: "Zinc naturel, soudure et finition incluses",
    color: "border-blue-300 bg-blue-50",
  },
  {
    service: "Remplacement descente pluviale",
    fourchette: "20 – 45€/ml",
    detail: "Selon matériau et accessibilité",
    color: "border-blue-300 bg-blue-50",
  },
  {
    service: "Réparation joint ou collet",
    fourchette: "40 – 80€",
    detail: "Réparation ponctuelle, étanchéification",
    color: "border-purple-300 bg-purple-50",
  },
];

export default function Tarifs() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Tarifs" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Tarifs Nettoyage Gouttières Bruxelles
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Les prix indiqués ci-dessous sont des fourchettes indicatives. Le tarif exact dépend
            de la surface, de l&apos;accessibilité et de l&apos;état de vos gouttières. Le devis est
            toujours gratuit et sans engagement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12">
            {tarifs.map((t) => (
              <div key={t.service} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl border ${t.color} gap-2`}>
                <div>
                  <p className="font-semibold text-gray-900">{t.service}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.detail}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-lg text-[#1A4731]">{t.fourchette}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F97316] text-white rounded-2xl p-6 mb-10">
            <h2 className="font-bold text-lg mb-2">Devis gratuit — toujours</h2>
            <p className="text-orange-100 text-sm mb-4">
              Tous nos tarifs sont indicatifs. Avant toute intervention, nous établissons gratuitement
              un devis écrit précis. Vous connaissez le prix exact avant de donner votre accord.
              Aucune mauvaise surprise sur la facture finale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-white text-[#F97316] font-bold px-5 py-2.5 rounded-lg hover:bg-orange-50 transition-colors">
                <Phone size={16} /> 0477 23 41 87
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-white/30 transition-colors">
                Formulaire de contact <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Facteurs influençant le prix</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Longueur totale des gouttières (linéaire)",
                "Hauteur du bâtiment (rez, 1er, 2ème étage...)",
                "Type de toiture (plate, en pente, mansardée)",
                "Accessibilité (jardin, mitoyenneté, espace restreint)",
                "Degré d'obstruction (feuilles légères vs bouchon compact)",
                "Type de matériau (PVC, zinc, alu...)",
                "Nombre de descentes pluviales",
                "Travaux de réparation associés",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Nos services associés</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Nettoyage complet", href: "/services/nettoyage-gouttieres" },
                { label: "Débouchage urgence", href: "/services/debouchage-gouttieres" },
                { label: "Réparation / remplacement", href: "/services/reparation-gouttieres" },
                { label: "Démoussage toiture", href: "/services/demoussage-toiture" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="flex items-center gap-2 text-[#1A4731] hover:text-[#F97316] font-medium text-sm">
                  <ArrowRight size={14} /> {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
