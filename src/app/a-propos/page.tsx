import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Shield, Award, Users, Leaf } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "À Propos — Nettoyage Gouttières Bruxelles | Notre Équipe",
  description:
    "Découvrez Nettoyage Gouttières Bruxelles : notre mission, nos valeurs et notre engagement pour l'entretien de vos gouttières en région bruxelloise.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/a-propos" },
};

export default function APropos() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            À Propos de Nettoyage Gouttières Bruxelles
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Spécialiste de l&apos;entretien des gouttières en région bruxelloise, nous intervenons
            avec professionnalisme et rigueur pour protéger votre habitation des eaux pluviales.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nettoyage Gouttières Bruxelles est une entreprise spécialisée dans l&apos;entretien
                préventif et curatif des systèmes d&apos;évacuation des eaux pluviales en région
                bruxelloise. Notre cœur de métier est simple : garder vos gouttières propres,
                fonctionnelles et en bon état pour protéger votre habitation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bruxelles présente des défis particuliers pour les propriétaires. La densité des
                arbres dans des communes comme Uccle, Watermael-Boitsfort ou Woluwe-Saint-Pierre
                génère des quantités importantes de feuilles et de débris végétaux qui obstruent
                rapidement les gouttières en automne. Les immeubles haussmanniens d&apos;Etterbeek et
                les maisons Art Nouveau de Schaerbeek ont des gouttières en zinc qui nécessitent
                une attention et un savoir-faire particuliers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notre équipe de techniciens qualifiés intervient sur tous ces contextes avec le
                matériel adapté. Chaque intervention est précédée d&apos;une inspection complète et
                d&apos;un devis gratuit et transparent. Pas de frais cachés, pas de surprises sur la
                facture finale.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Nos engagements</h2>
              <ul className="space-y-3">
                {[
                  "Devis gratuit systématique avant toute intervention",
                  "Tarifs transparents fixés à l'avance",
                  "Techniciens formés et équipés pour le travail en hauteur",
                  "Assurance RC Professionnelle en ordre",
                  "Évacuation des déchets végétaux à notre charge",
                  "Disponibilité urgence 7j/7 pour les débouchages",
                  "Rapport d'état fourni après chaque intervention",
                  "Garantie satisfaction sur toutes nos prestations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield size={28} className="text-[#1A4731]" />, title: "Assurance RC Pro", desc: "Couverture complète pendant toute intervention" },
                  { icon: <Award size={28} className="text-[#F97316]" />, title: "Techniciens qualifiés", desc: "Formation et équipement travaux en hauteur" },
                  { icon: <Users size={28} className="text-blue-600" />, title: "Service complet", desc: "Nettoyage, débouchage, réparation, démoussage" },
                  { icon: <Leaf size={28} className="text-green-600" />, title: "Eco-responsable", desc: "Produits biodégradables, déchets recyclés" },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1A4731] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Nous contacter</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Des questions sur nos services ? Besoin d&apos;un devis pour votre
                  habitation bruxelloise ? Appelez-nous ou écrivez-nous.
                </p>
                <div className="space-y-2 mb-4 text-sm">
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-[#F97316]" />
                    <a href="tel:0477234187" className="text-[#F97316] font-bold">0477 23 41 87</a>
                  </p>
                  <p className="text-gray-400 text-xs">Lun–Ven 7h30–18h | Sam 8h–14h</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F97316] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-orange-500 transition-colors text-sm">
                  Formulaire de contact <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
