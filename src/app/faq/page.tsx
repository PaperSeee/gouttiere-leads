import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ Nettoyage Gouttières Bruxelles — 15 Questions & Réponses",
  description:
    "Toutes les réponses à vos questions sur le nettoyage de gouttières à Bruxelles : prix, fréquence, risques, urgences, matériaux. Expert disponible au 0477 23 41 87.",
  keywords: ["FAQ gouttières Bruxelles", "questions nettoyage gouttières", "fréquence nettoyage gouttières", "gouttières bouchées risques", "prix gouttières Bruxelles"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/faq" },
  openGraph: {
    title: "FAQ Nettoyage Gouttières Bruxelles — 15 Questions & Réponses",
    description: "Prix, fréquence, risques, urgences, matériaux — toutes les réponses sur le nettoyage de gouttières à Bruxelles.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/faq",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FAQ nettoyage gouttières Bruxelles" }],
  },
};

const faqs = [
  {
    question: "Combien coûte le nettoyage de gouttières à Bruxelles ?",
    answer: "Le prix d'un nettoyage de gouttières à Bruxelles se situe généralement entre 80 et 150€ pour une maison standard, selon la longueur des gouttières, la hauteur du bâtiment et l'accessibilité. Le débouchage d'urgence est facturé entre 120 et 200€ selon l'horaire d'intervention. Nous établissons toujours un devis gratuit avant toute intervention.",
  },
  {
    question: "À quelle fréquence faut-il nettoyer ses gouttières ?",
    answer: "La fréquence recommandée est d'au moins une fois par an, de préférence en automne après la chute des feuilles (octobre-novembre). Dans les zones très boisées de Bruxelles comme Uccle, Watermael-Boitsfort ou Woluwe-Saint-Pierre, deux nettoyages annuels sont conseillés : un au printemps (pour les graines et pollens) et un en automne (pour les feuilles mortes).",
  },
  {
    question: "Quels sont les risques si je ne nettoie pas mes gouttières ?",
    answer: "Des gouttières bouchées provoquent des débordements qui endommagent progressivement votre habitation : infiltrations dans la toiture et les combles, dégradation de la façade par ruissellement, saturation du sol autour des fondations, et développement de moisissures à l'intérieur. Les coûts de réparation de ces dégâts dépassent souvent 10 à 20 fois le prix d'un simple nettoyage préventif.",
  },
  {
    question: "Intervenez-vous en urgence en cas de débordement ?",
    answer: "Oui, notre service de débouchage d'urgence est disponible 7 jours sur 7. En cas de débordement actif lors de fortes pluies, appelez-nous directement au 0477 23 41 87. Nous intervenons généralement dans les 24 heures, parfois le jour même en haute saison automnale. Le tarif urgence est de 120 à 200€ selon le jour et l'heure d'intervention.",
  },
  {
    question: "Quelle est la durée d'un nettoyage de gouttières ?",
    answer: "Pour une maison individuelle standard à Bruxelles, un nettoyage complet prend entre 1h30 et 3h selon la longueur des gouttières, le degré d'obstruction et l'accessibilité. Pour les immeubles et copropriétés, compter une journée complète. Nous vous donnons une estimation précise lors de la prise de rendez-vous.",
  },
  {
    question: "Faut-il être présent lors de l'intervention ?",
    answer: "La présence n'est pas indispensable si l'accès aux gouttières se fait par l'extérieur (façade, jardin). En revanche, si l'intervention nécessite un accès aux combles ou à l'intérieur du bâtiment, quelqu'un doit être présent. Nous vous précisons cela lors de la prise de rendez-vous selon la configuration de votre bien.",
  },
  {
    question: "Nettoyez-vous aussi les descentes pluviales ?",
    answer: "Absolument. Nos interventions incluent systématiquement le nettoyage des gouttières ET des descentes pluviales (tuyaux de chute). Une descente bouchée est souvent aussi problématique qu'une gouttière obstruée, voire plus dangereuse car le problème est moins visible. Nous vérifions également les collets de jonction, les coudes et raccords pour garantir un écoulement optimal sur toute la longueur.",
  },
  {
    question: "Quelle garantie sur le nettoyage ?",
    answer: "Nous garantissons le bon écoulement de vos gouttières à l'issue de notre intervention. Si un problème de débordement survient dans les 30 jours suivant notre nettoyage et est directement lié à notre intervention (et non à un événement climatique exceptionnel ou à une panne structurelle), nous revenons gratuitement. Nous sommes également couverts par une assurance RC Professionnelle.",
  },
  {
    question: "Intervenez-vous sur des toitures hautes ?",
    answer: "Oui, nos techniciens sont formés et équipés pour les travaux en hauteur : échelles professionnelles, nacelles (selon accessibilité) et équipements de sécurité certifiés. Nous intervenons sur des bâtiments jusqu'à R+3 standard. Au-delà ou pour des configurations très particulières (toitures mansardées, accès restreint), nous évaluons la situation lors de la visite de devis.",
  },
  {
    question: "Proposez-vous aussi le démoussage de toiture ?",
    answer: "Oui, le démoussage de toiture est l'un de nos services complémentaires. La mousse sur les tuiles retient l'humidité, dégrade les tuiles et alimente les gouttières en débris. Un démoussage associé à un traitement anti-mousse préventif protège votre toiture pendant 3 à 5 ans. Nous proposons un tarif avantageux lorsque le démoussage est combiné au nettoyage des gouttières lors d'une même visite.",
  },
  {
    question: "Mon assurance couvre-t-elle les dégâts dus aux gouttières bouchées ?",
    answer: "En Belgique, les dégâts des eaux couverts par une assurance habitation sont généralement ceux d'origine soudaine et accidentelle (rupture de canalisation, tempête). Les dommages liés à des gouttières bouchées par négligence sont souvent considérés comme un défaut d'entretien et peuvent ne pas être couverts. Consultez votre assureur. Si vous avez besoin d'un rapport technique suite à des dégâts, nous pouvons vous en fournir un.",
  },
  {
    question: "Quand est le meilleur moment pour nettoyer ses gouttières à Bruxelles ?",
    answer: "Le meilleur moment est en octobre ou début novembre, après la chute de la majeure partie des feuilles mais avant les grandes pluies d'automne. Planifier ce nettoyage dès septembre permet d'éviter les délais d'attente de la haute saison. Pour les propriétaires proches de grands arbres (platanes, tilleuls, hêtres...), un second passage au printemps (mars-avril) pour évacuer les graines et fleurs est également recommandé.",
  },
  {
    question: "Quelle est la différence entre les gouttières en PVC, zinc et aluminium ?",
    answer: "Le PVC est le moins cher (15–25€/ml posé) avec une durée de vie de 20–30 ans. L'aluminium offre un bon équilibre qualité/prix (25–40€/ml) avec 30–50 ans de durée de vie. Le zinc est le matériau traditionnel bruxellois (35–55€/ml) avec une durée de vie de 50–80 ans et un aspect patrimonial apprécié. Le cuivre est réservé aux bâtiments haut de gamme (80€+/ml) avec une durée de vie centenaire. Consultez notre guide complet des types de gouttières.",
  },
  {
    question: "Intervenez-vous en copropriété ?",
    answer: "Oui, nous intervenons régulièrement pour des syndics de copropriété, des sociétés immobilières et des gestionnaires de patrimoine. Pour les copropriétés, nous établissons un rapport détaillé de l'état des gouttières communes, utile pour la planification des travaux et pour l'assemblée générale des copropriétaires. Contactez-nous pour un devis adapté.",
  },
  {
    question: "Comment se passe le devis ?",
    answer: "Le processus est simple : vous nous contactez par téléphone (0477 23 41 87) ou via notre formulaire en ligne. Nous convenons d'un rendez-vous pour une visite gratuite de votre bien. Sur place, nos techniciens inspectent l'état de vos gouttières et vous remettent un devis écrit détaillé, fixant le prix exact avant toute intervention. Vous acceptez ou refusez librement. Si vous acceptez, l'intervention est planifiée selon vos disponibilités.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            FAQ — Nettoyage Gouttières Bruxelles
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            15 questions fréquentes sur le nettoyage, le débouchage et l&apos;entretien de vos gouttières à Bruxelles.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} />

          <div className="mt-12 bg-[#1A4731] text-white rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3">Vous n&apos;avez pas trouvé votre réponse ?</h2>
            <p className="text-gray-300 mb-6">
              Appelez-nous directement ou envoyez-nous un message. Nous répondons dans l&apos;heure
              en heures ouvrables.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-500 transition-colors">
                <Phone size={18} /> 0477 23 41 87
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-white text-[#1A4731] font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Nous écrire <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
