import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, AlertTriangle, Info } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Tarifs Nettoyage Gouttières Bruxelles — Prix 2026 & Devis Gratuit",
  description:
    "Prix détaillés pour le nettoyage, débouchage et réparation de gouttières à Bruxelles en 2026. Nettoyage dès 80€, débouchage dès 120€, démoussage 3–6€/m². Devis gratuit 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/tarifs" },
};

const tarifsNettoyage = [
  {
    service: "Maison 2 façades — accès normal",
    fourchette: "80 – 100€",
    detail: "Gouttières + descentes pluviales, longueur standard 15–20 ml",
    color: "border-green-200 bg-green-50",
    badge: null,
  },
  {
    service: "Maison 3–4 façades / villa",
    fourchette: "100 – 150€",
    detail: "Grande surface, accès toutes façades, descentes multiples",
    color: "border-green-200 bg-green-50",
    badge: "Le plus courant",
  },
  {
    service: "Immeuble à appartements",
    fourchette: "Sur devis",
    detail: "Selon le nombre d'étages, de façades et de descentes pluviales",
    color: "border-gray-200 bg-gray-50",
    badge: null,
  },
  {
    service: "Maison mitoyenne — accès difficile",
    fourchette: "90 – 130€",
    detail: "Accès restreint, jardin exigu, mitoyenneté sans passage",
    color: "border-orange-200 bg-orange-50",
    badge: null,
  },
];

const tarifsDebouchage = [
  {
    service: "Débouchage urgent — heures ouvrables",
    fourchette: "120 – 160€",
    detail: "Lun–Ven 7h30–18h, haute pression + test écoulement",
    color: "border-red-200 bg-red-50",
    badge: null,
  },
  {
    service: "Débouchage urgent — weekend / férié",
    fourchette: "160 – 200€",
    detail: "Disponible 7j/7 — majoration hors heures ouvrables",
    color: "border-red-200 bg-red-50",
    badge: null,
  },
];

const tarifsReparation = [
  {
    service: "Réparation joint / collet",
    fourchette: "40 – 80€",
    detail: "Remplacement joint dilatation ou collet de jonction",
    color: "border-blue-200 bg-blue-50",
    badge: null,
  },
  {
    service: "Remplacement tronçon PVC (posé)",
    fourchette: "15 – 25€/ml",
    detail: "Fourniture et pose, couleur standard, toutes dimensions",
    color: "border-blue-200 bg-blue-50",
    badge: null,
  },
  {
    service: "Remplacement tronçon aluminium (posé)",
    fourchette: "25 – 40€/ml",
    detail: "Fourniture et pose, coloris au choix, qualité supérieure",
    color: "border-blue-200 bg-blue-50",
    badge: null,
  },
  {
    service: "Remplacement tronçon zinc (posé)",
    fourchette: "35 – 55€/ml",
    detail: "Zinc naturel ou prélaqué, soudure et finition incluses",
    color: "border-blue-200 bg-blue-50",
    badge: "Matériau traditionnel BXL",
  },
  {
    service: "Remplacement descente pluviale",
    fourchette: "20 – 45€/ml",
    detail: "Selon matériau (PVC, alu, zinc) et accessibilité",
    color: "border-blue-200 bg-blue-50",
    badge: null,
  },
  {
    service: "Remplacement crochet cassé",
    fourchette: "8 – 15€/pièce",
    detail: "Remplacement ponctuel, repositionnement inclus",
    color: "border-blue-200 bg-blue-50",
    badge: null,
  },
];

const tarifsDemoussage = [
  {
    service: "Démoussage mécanique toiture",
    fourchette: "3 – 6€/m²",
    detail: "Brossage + traitement anti-mousse biodégradable inclus",
    color: "border-yellow-200 bg-yellow-50",
    badge: null,
  },
  {
    service: "Combo démoussage + nettoyage gouttières",
    fourchette: "Tarif préférentiel",
    detail: "Remise sur la combinaison des deux prestations en une visite",
    color: "border-yellow-200 bg-yellow-50",
    badge: "Économique",
  },
];

const faqTarifs = [
  {
    q: "Le déplacement est-il facturé en plus ?",
    a: "Non. Chez nous, le déplacement pour établir le devis est toujours gratuit, sans engagement. Si vous acceptez le devis, le déplacement d'intervention est inclus dans le tarif pour toutes les communes de Bruxelles-Capitale.",
  },
  {
    q: "Y a-t-il des frais cachés après l'intervention ?",
    a: "Aucun. Le devis signé est le prix final. Si nous découvrons un problème non prévu lors de l'intervention (ex : crochet cassé caché sous les feuilles), nous vous informons sur place avant d'effectuer un quelconque travail supplémentaire.",
  },
  {
    q: "Pourquoi les prix varient-ils autant selon les maisons ?",
    a: "Trois facteurs font principalement varier le prix : la longueur totale des gouttières (en mètre linéaire), la hauteur du bâtiment (R+0, R+1, R+2...) et l'accessibilité du chantier (espace pour positionner les échelles, présence d'un jardin, mitoyenneté). Une villa d'Uccle avec 4 façades et 40 ml de gouttières à R+2 coûtera nécessairement plus qu'une maison mitoyenne de Molenbeek avec 10 ml à rez.",
  },
  {
    q: "Le nettoyage des descentes pluviales est-il inclus dans le prix ?",
    a: "Oui, systématiquement. Nos tarifs nettoyage incluent toujours les gouttières ET les descentes pluviales. Une descente pluviale bouchée est aussi problématique qu'une gouttière obstruée — nous ne nettoyons jamais l'une sans l'autre.",
  },
  {
    q: "Proposez-vous un abonnement entretien annuel ?",
    a: "Oui. Pour les clients qui souhaitent un entretien régulier, nous proposons un contrat annuel avec passage programmé en octobre et (optionnellement) en mars. Ce contrat donne droit à une remise de 10% sur le tarif standard et priorité de planning en haute saison.",
  },
  {
    q: "Le paiement s'effectue comment ?",
    a: "Paiement à l'issue de l'intervention, par virement bancaire ou en espèces. Une facture TVA est systématiquement fournie. Pour les copropriétés et syndics, nous acceptons le paiement à 30 jours sur facture.",
  },
];

const facteursPrice = [
  { label: "Longueur totale des gouttières", detail: "Prix calculé au mètre linéaire (ml). Une maison standard à Bruxelles fait 15 à 25 ml." },
  { label: "Hauteur du bâtiment", detail: "Rez-de-chaussée, 1er ou 2ème étage. Plus c'est haut, plus l'équipement (échelle, nacelle) est conséquent." },
  { label: "Accessibilité du chantier", detail: "Un jardin sans obstacle = accès facile. Mitoyenneté totale sans passage latéral = surcoût." },
  { label: "Degré d'obstruction", detail: "Feuilles légères évacuées en 30 min. Bouchon compact compressé depuis 3 ans = travail plus long." },
  { label: "Type de matériau", detail: "PVC, aluminium, zinc ou cuivre. Les matériaux et outils diffèrent, surtout pour la réparation." },
  { label: "Nombre de descentes pluviales", detail: "Une maison bruxelloise standard a 1 à 3 descentes. Une villa 4 façades peut en avoir 6 à 8." },
  { label: "Travaux de réparation associés", detail: "Un joint à refaire ou un crochet à changer détecté lors du nettoyage est facturé séparément et à l'avance." },
  { label: "Urgence ou intervention planifiée", detail: "Une intervention urgence weekend est majorée par rapport à un nettoyage planifié en semaine." },
];

const comparatifMateriau = [
  { mat: "PVC", prix: "15–25€/ml posé", duree: "20–30 ans", avantages: "Économique, léger, large choix de couleurs, facile à poser", inconvenients: "Se fragilise avec le temps, peut se déformer en été", recommande: "Rénovation budget serré, maison récente" },
  { mat: "Aluminium", prix: "25–40€/ml posé", duree: "30–50 ans", avantages: "Durable, recyclable, bonne résistance thermique, aspect soigné", inconvenients: "Un peu plus cher que le PVC", recommande: "Rapport qualité/prix optimal, construction neuve" },
  { mat: "Zinc", prix: "35–55€/ml posé", duree: "50–80 ans", avantages: "Matériau traditionnel bruxellois, très longue durée de vie, esthétique patrimoniale", inconvenients: "Pose plus technique, prix élevé", recommande: "Maisons de maître, biens classés, investissement long terme" },
  { mat: "Cuivre", prix: "80€+/ml posé", duree: "100 ans+", avantages: "Durée de vie exceptionnelle, patine naturelle, standing très haut de gamme", inconvenients: "Prix très élevé, usage rare", recommande: "Bâtiments patrimoniaux, villas haut de gamme" },
];

export default function Tarifs() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqTarifs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Tarifs" }]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Tarifs Nettoyage Gouttières Bruxelles — Prix 2026
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Tous nos tarifs sont transparents et fixés avant intervention. Devis gratuit
              sur place — vous connaissez le prix exact avant de donner votre accord.
              Aucune mauvaise surprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                <Phone size={18} /> 0477 23 41 87 — Devis gratuit
              </a>
              <a href="#devis" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Formulaire de devis <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Avertissement */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-start gap-2 text-sm text-blue-700">
            <Info size={16} className="flex-shrink-0 mt-0.5" />
            <span>Les prix ci-dessous sont des fourchettes indicatives pour Bruxelles-Capitale. Le tarif exact est fixé après visite gratuite selon la longueur, la hauteur et l&apos;accessibilité.</span>
          </div>
        </div>
      </div>

      {/* Tarifs nettoyage */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Nettoyage de gouttières</h2>
          <p className="text-gray-500 text-sm mb-6">Gouttières + descentes pluviales incluses. Évacuation des déchets végétaux incluse.</p>
          <div className="space-y-3 mb-4">
            {tarifsNettoyage.map((t) => (
              <div key={t.service} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl border ${t.color} gap-2`}>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-gray-900">{t.service}</p>
                    {t.badge && <span className="text-xs bg-[#1A4731] text-white px-2 py-0.5 rounded-full">{t.badge}</span>}
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{t.detail}</p>
                </div>
                <p className="font-bold text-lg text-[#1A4731] flex-shrink-0">{t.fourchette}</p>
              </div>
            ))}
          </div>
          <Link href="/services/nettoyage-gouttieres" className="text-sm text-[#1A4731] hover:text-[#F97316] flex items-center gap-1 font-medium">
            <ArrowRight size={14} /> En savoir plus sur notre service nettoyage
          </Link>
        </div>
      </section>

      {/* Tarifs débouchage */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-6">
            <AlertTriangle size={22} className="text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Débouchage d&apos;urgence</h2>
              <p className="text-gray-500 text-sm">Disponible 7j/7 — Intervention souvent le jour même. Haute pression + test écoulement inclus.</p>
            </div>
          </div>
          <div className="space-y-3 mb-4">
            {tarifsDebouchage.map((t) => (
              <div key={t.service} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl border ${t.color} gap-2`}>
                <div>
                  <p className="font-semibold text-gray-900">{t.service}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.detail}</p>
                </div>
                <p className="font-bold text-lg text-red-600 flex-shrink-0">{t.fourchette}</p>
              </div>
            ))}
          </div>
          <Link href="/services/debouchage-gouttieres" className="text-sm text-[#1A4731] hover:text-[#F97316] flex items-center gap-1 font-medium">
            <ArrowRight size={14} /> Signaler un débordement urgent
          </Link>
        </div>
      </section>

      {/* Tarifs réparation */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Réparation et remplacement</h2>
          <p className="text-gray-500 text-sm mb-6">Prix fourniture + pose. Matériaux disponibles : PVC, aluminium, zinc, cuivre.</p>
          <div className="space-y-3 mb-4">
            {tarifsReparation.map((t) => (
              <div key={t.service} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl border ${t.color} gap-2`}>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-gray-900">{t.service}</p>
                    {t.badge && <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">{t.badge}</span>}
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{t.detail}</p>
                </div>
                <p className="font-bold text-lg text-[#1A4731] flex-shrink-0">{t.fourchette}</p>
              </div>
            ))}
          </div>
          <Link href="/services/reparation-gouttieres" className="text-sm text-[#1A4731] hover:text-[#F97316] flex items-center gap-1 font-medium">
            <ArrowRight size={14} /> Voir notre service réparation
          </Link>
        </div>
      </section>

      {/* Tarifs démoussage */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Démoussage toiture</h2>
          <p className="text-gray-500 text-sm mb-6">Traitement anti-mousse biodégradable inclus. Efficace 3 à 5 ans. Combo avantageux avec nettoyage gouttières.</p>
          <div className="space-y-3 mb-4">
            {tarifsDemoussage.map((t) => (
              <div key={t.service} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl border ${t.color} gap-2`}>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-gray-900">{t.service}</p>
                    {t.badge && <span className="text-xs bg-[#F97316] text-white px-2 py-0.5 rounded-full">{t.badge}</span>}
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{t.detail}</p>
                </div>
                <p className="font-bold text-lg text-[#1A4731] flex-shrink-0">{t.fourchette}</p>
              </div>
            ))}
          </div>
          <Link href="/services/demoussage-toiture" className="text-sm text-[#1A4731] hover:text-[#F97316] flex items-center gap-1 font-medium">
            <ArrowRight size={14} /> En savoir plus sur le démoussage
          </Link>
        </div>
      </section>

      {/* Comparatif matériaux */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Comparatif des matériaux — quel prix pour quel choix ?</h2>
          <p className="text-gray-500 text-sm mb-8">À Bruxelles, le matériau de vos gouttières influe directement sur le coût de remplacement et la fréquence d&apos;entretien. Voici ce que chaque option apporte.</p>
          <div className="space-y-4">
            {comparatifMateriau.map((m) => (
              <div key={m.mat} className="border border-gray-200 rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{m.mat}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Durée de vie estimée : {m.duree}</p>
                  </div>
                  <span className="text-[#F97316] font-bold text-lg flex-shrink-0">{m.prix}</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1 uppercase tracking-wide">Avantages</p>
                    <p className="text-gray-600">{m.avantages}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 mb-1 uppercase tracking-wide">Limites</p>
                    <p className="text-gray-600">{m.inconvenients}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-700 mb-1 uppercase tracking-wide">Recommandé pour</p>
                    <p className="text-gray-600">{m.recommande}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facteurs influençant le prix */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pourquoi le prix varie d&apos;une maison à l&apos;autre ?</h2>
          <p className="text-gray-500 text-sm mb-8">8 facteurs déterminent le prix final de votre intervention à Bruxelles.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {facteursPrice.map((f) => (
              <div key={f.label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle size={16} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{f.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ tarifs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes sur les tarifs</h2>
          <div className="space-y-4">
            {faqTarifs.map((f) => (
              <details key={f.q} className="bg-gray-50 rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 list-none">
                  {f.q}
                  <span className="text-[#F97316] font-bold text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA devis */}
      <section className="py-14 bg-[#1A4731]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Votre devis en 2h — toujours gratuit</h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">
            Appelez-nous ou remplissez le formulaire. On revient vers vous sous 2h en heures ouvrables avec un prix précis, adapté à votre maison.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              <Phone size={18} /> 0477 23 41 87
            </a>
            <a href="#devis" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Formulaire de devis <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="devis" className="py-14 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Demandez votre devis gratuit</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Réponse sous 2h · Aucun engagement</p>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
