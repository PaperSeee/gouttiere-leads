import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Types de Gouttières : Zinc, PVC, Aluminium, Cuivre — Guide Complet",
  description:
    "Guide complet des types de gouttières : zinc, PVC, aluminium et cuivre. Avantages, inconvénients, prix et durée de vie. Choisissez le bon matériau pour votre habitation bruxelloise.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/types-gouttieres" },
};

const types = [
  {
    id: "pvc",
    name: "Gouttières en PVC",
    color: "bg-blue-50 border-blue-200",
    badge: "Le plus répandu",
    badgeColor: "bg-blue-100 text-blue-700",
    pros: [
      "Prix d'achat le plus bas (15–25€/ml posé)",
      "Léger et facile à poser",
      "Résistant à la corrosion",
      "Large choix de couleurs",
      "Entretien minimal",
    ],
    cons: [
      "Durée de vie 20–30 ans",
      "Sensible aux chocs et au gel intense",
      "Peut se déformer avec la chaleur",
      "Aspect moins noble que le zinc",
    ],
    desc: "Le PVC est de loin le matériau le plus utilisé en Belgique depuis les années 1980. On le retrouve dans la grande majorité des maisons ouvrières de Forest, des copropriétés d'Etterbeek et des habitations standard de Schaerbeek. Sa facilité d'installation et son faible coût en font le choix par défaut lors des rénovations. Les gouttières PVC posées dans les années 1990 arrivent aujourd'hui en fin de vie et doivent souvent être remplacées.",
    price: "15–25€/ml",
    durée: "20–30 ans",
  },
  {
    id: "zinc",
    name: "Gouttières en zinc",
    color: "bg-gray-50 border-gray-200",
    badge: "Traditionnel bruxellois",
    badgeColor: "bg-gray-200 text-gray-700",
    pros: [
      "Durée de vie exceptionnelle (50–80 ans)",
      "Aspect traditionnel typique de Bruxelles",
      "Résistant aux variations thermiques",
      "Se patine naturellement",
      "100% recyclable",
    ],
    cons: [
      "Prix élevé (35–55€/ml posé)",
      "Plus lourd que le PVC",
      "Sensible aux eaux acides (conifères)",
      "Pose plus complexe",
    ],
    desc: "Le zinc est le matériau historique des toitures bruxelloises. Les maisons Art Nouveau de Schaerbeek, les villas haussmanniennes d'Etterbeek et les maisons de maître d'Ixelles arborent souvent des gouttières et des cornières en zinc patinées. Ce matériau, lorsqu'il est bien entretenu, peut durer plusieurs générations. À Woluwe-Saint-Lambert, de nombreuses copropriétés construites dans les années 1960-1970 ont encore leurs gouttières en zinc d'origine, mais qui nécessitent maintenant inspection et souvent remplacement.",
    price: "35–55€/ml",
    durée: "50–80 ans",
  },
  {
    id: "aluminium",
    name: "Gouttières en aluminium",
    color: "bg-orange-50 border-orange-200",
    badge: "Bon rapport qualité/prix",
    badgeColor: "bg-orange-100 text-orange-700",
    pros: [
      "Durée de vie 30–50 ans",
      "Léger et recyclable",
      "Résistant à la corrosion",
      "Aspect moderne et soigné",
      "Disponible en plusieurs teintes",
    ],
    cons: [
      "Prix intermédiaire (25–40€/ml posé)",
      "Moins traditionnel que le zinc",
      "Peut se déformer sous impact",
    ],
    desc: "L'aluminium représente une bonne alternative entre le PVC économique et le zinc haut de gamme. On le retrouve fréquemment dans les maisons quatre façades d'Auderghem et d'Uccle construites dans les années 1980-1990. L'aluminium laqué permet d'obtenir un rendu esthétique proche du zinc pour un budget nettement inférieur. C'est le matériau que nous recommandons le plus souvent pour les rénovations sur des habitations de standing intermédiaire.",
    price: "25–40€/ml",
    durée: "30–50 ans",
  },
  {
    id: "cuivre",
    name: "Gouttières en cuivre",
    color: "bg-yellow-50 border-yellow-200",
    badge: "Haut de gamme",
    badgeColor: "bg-yellow-100 text-yellow-700",
    pros: [
      "Durée de vie 80–100 ans",
      "Aspect exceptionnel et naturel",
      "Patine verte (vert-de-gris) caractéristique",
      "Très résistant aux intempéries",
      "Valeur patrimoniale",
    ],
    cons: [
      "Prix très élevé (à partir de 80€/ml posé)",
      "Réservé aux bâtiments de standing",
      "Coloration possible des façades claires",
    ],
    desc: "Le cuivre est le matériau de prestige par excellence. On le retrouve sur les bâtiments institutionnels, les châteaux et les grandes villas bruxelloises. Sa patine vert-de-gris, qui se développe progressivement au fil des années, est une signature esthétique immédiatement reconnaissable. Dans le contexte résidentiel bruxellois, le cuivre est réservé aux restaurations patrimoniales et aux constructions neuves haut de gamme. Son coût très élevé est compensé par une durée de vie qui dépasse souvent un siècle.",
    price: "80€+/ml",
    durée: "80–100 ans",
  },
];

export default function TypesGouttieres() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Types de gouttières" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Guide Complet des Types de Gouttières
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Zinc, PVC, aluminium ou cuivre : chaque matériau a ses avantages, ses inconvénients
              et sa durée de vie propre. Ce guide vous aide à choisir le bon type de gouttière
              selon votre habitation, votre budget et votre environnement bruxellois.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {types.map((type) => (
              <div key={type.id} id={type.id} className={`border rounded-2xl p-8 ${type.color}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${type.badgeColor}`}>
                      {type.badge}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">{type.name}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Prix indicatif</p>
                    <p className="text-xl font-bold text-[#F97316]">{type.price}</p>
                    <p className="text-sm text-gray-500">Durée de vie : {type.durée}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{type.desc}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Avantages</h3>
                    <ul className="space-y-1.5">
                      {type.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Points d&apos;attention</h3>
                    <ul className="space-y-1.5">
                      {type.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-3.5 h-3.5 border-2 border-orange-400 rounded-full flex-shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#1A4731] text-white rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-3">Besoin d&apos;un conseil personnalisé ?</h2>
            <p className="text-gray-300 mb-4">
              Nos techniciens évaluent gratuitement l&apos;état de vos gouttières actuelles et vous recommandent
              le matériau le plus adapté à votre situation. Chaque habitation est différente : type de toiture,
              environnement, budget et esthétique souhaitée.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Demander un conseil gratuit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
