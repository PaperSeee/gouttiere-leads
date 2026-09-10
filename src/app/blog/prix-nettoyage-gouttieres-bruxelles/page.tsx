import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, Calendar, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Prix Nettoyage Gouttières à Bruxelles : Tarifs 2026 et Ce Qui Influence le Coût",
  description: "Combien coûte un nettoyage de gouttières à Bruxelles ? Tarifs détaillés 2026 selon le type de maison, comparaison DIY vs professionnel et ce qui est inclus dans une prestation. Devis gratuit.",
  keywords: ["prix nettoyage gouttières", "tarif nettoyage gouttières bruxelles", "coût nettoyage gouttières", "prix nettoyage gouttière", "tarif gouttières bruxelles"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/prix-nettoyage-gouttieres-bruxelles" },
  openGraph: {
    type: "article",
    title: "Prix Nettoyage Gouttières à Bruxelles : Tarifs 2026",
    description: "Tarifs détaillés par type de maison, facteurs qui influencent le prix et comparaison DIY vs professionnel.",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Prix nettoyage gouttières Bruxelles" }],
    publishedTime: "2026-05-29",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prix Nettoyage Gouttières à Bruxelles — Tarifs 2026",
    description: "Tarifs par type de maison, facteurs de coût, DIY vs pro. Devis gratuit.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
}

export default function BlogPrixNettoyageGouttieresBruxellesPage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/prix-nettoyage-gouttieres-bruxelles`,
        headline: "Prix nettoyage gouttières à Bruxelles : tarifs 2026 et ce qui influence le coût",
        description: "Combien coûte un nettoyage de gouttières à Bruxelles ? Tarifs 2026 selon le type de maison, facteurs de coût, comparaison DIY vs professionnel.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-05-29",
        dateModified: "2026-05-29",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/prix-nettoyage-gouttieres-bruxelles` },
        inLanguage: "fr-BE",
        keywords: "prix nettoyage gouttières, tarif nettoyage gouttières bruxelles, coût nettoyage gouttières",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Prix nettoyage gouttières Bruxelles", item: `${DOMAIN}/blog/prix-nettoyage-gouttieres-bruxelles` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quel est le prix d'un nettoyage de gouttières à Bruxelles ?",
            acceptedAnswer: { "@type": "Answer", text: "Le prix d'un nettoyage de gouttières à Bruxelles varie entre 80 et 200€ selon le type de maison, la hauteur du bâtiment et l'état des gouttières. Une maison mitoyenne 2 façades coûte en moyenne 80–130€. Un devis gratuit vous donnera un prix précis." },
          },
          {
            "@type": "Question",
            name: "Quels facteurs font varier le prix du nettoyage de gouttières ?",
            acceptedAnswer: { "@type": "Answer", text: "Les principaux facteurs sont : la longueur totale de gouttières, la hauteur du bâtiment (nombre d'étages), l'accessibilité, l'état d'encrassement, le nombre de descentes pluviales et la présence de mousses sur la toiture." },
          },
          {
            "@type": "Question",
            name: "Est-ce moins cher de nettoyer ses gouttières soi-même ?",
            acceptedAnswer: { "@type": "Answer", text: "Le DIY semble moins cher en apparence, mais implique l'achat ou la location d'une échelle sécurisée, d'équipements EPI et prend 2 à 4 heures. Pour une maison à l'étage, le risque de chute est réel. Le recours à un professionnel offre une prestation complète avec garantie dès 80€." },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Prix nettoyage gouttières Bruxelles" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Tag size={12} />Tarifs
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Calendar size={12} />29 mai 2026
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Clock size={12} />8 min de lecture
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Prix nettoyage gouttières à Bruxelles : tarifs 2026 et ce qui influence le coût
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Vous souhaitez faire nettoyer vos gouttières mais vous ne savez pas combien cela coûte ? Ce guide détaille les tarifs réels pratiqués à Bruxelles en 2026, les facteurs qui font varier le prix, et vous aide à comparer le DIY avec le recours à un professionnel.
          </p>
        </div>
      </section>

      {/* Corps de l'article */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
              Tarifs nettoyage gouttières à Bruxelles en 2026
            </h2>
            <p>
              Le prix d&apos;un nettoyage de gouttières à Bruxelles dépend principalement du type de bâtiment, de sa hauteur et de la longueur totale de gouttières à traiter. Voici les fourchettes de prix pratiquées en 2026 pour les principaux types de maisons bruxelloises.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
              {[
                {
                  type: "Maison 2 façades (mitoyenne)",
                  price: "80 — 130 €",
                  detail: "20 à 35 m linéaires, 1–2 étages, accès normal",
                  note: "Le cas le plus courant à Bruxelles (rangées de maisons de 1900–1970)",
                },
                {
                  type: "Maison 3 façades",
                  price: "110 — 160 €",
                  detail: "35 à 55 m linéaires, 1–2 étages, accès 3 côtés",
                  note: "Fréquent dans les communes de la deuxième couronne (Uccle, Auderghem)",
                },
                {
                  type: "Villa 4 façades",
                  price: "140 — 220 €",
                  detail: "55 à 90 m linéaires, accès 4 façades, souvent 2 étages",
                  note: "Bâtiments avec davantage de descentes pluviales et de surfaces",
                },
                {
                  type: "Immeuble / appartement",
                  price: "200 — 400 €",
                  detail: "Intervention en hauteur, coordination copropriété",
                  note: "Prix variable selon le nombre d'étages et les accès disponibles",
                },
              ].map((item) => (
                <div key={item.type} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">{item.type}</h3>
                  <p className="text-2xl font-bold text-[#F97316] mb-1">{item.price}</p>
                  <p className="text-gray-500 text-xs mb-2">{item.detail}</p>
                  <p className="text-gray-400 text-xs italic">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic">
              Ces tarifs sont indicatifs et valables pour 2026. Un devis précis et gratuit est établi avant toute intervention sur votre habitation.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Les 6 facteurs qui influencent le prix
            </h2>
            <p>
              Deux maisons voisines peuvent avoir des tarifs très différents pour le même type de prestation. Voici les six critères que nous prenons en compte lors de l&apos;établissement d&apos;un devis.
            </p>

            <div className="space-y-4 my-6 not-prose">
              {[
                {
                  num: 1,
                  title: "La hauteur du bâtiment",
                  desc: "C'est le facteur le plus important. Une maison de plain-pied ou un seul étage se nettoie avec une échelle simple. Dès le deuxième étage, du matériel spécialisé est nécessaire (échelle de toit, nacelle, équipements EPI). La hauteur augmente le temps de travail et le risque, ce qui se reflète dans le tarif.",
                },
                {
                  num: 2,
                  title: "La longueur totale de gouttières",
                  desc: "Logiquement, plus votre maison a de gouttières à nettoyer, plus le prix augmente. Une maison mitoyenne bruxelloise typique dispose de 20 à 35 mètres linéaires. Une villa 4 façades peut en avoir jusqu'à 80 à 100 mètres. Chaque façade, chaque descente pluviale supplémentaire s'ajoute à la prestation.",
                },
                {
                  num: 3,
                  title: "L'état d'encrassement",
                  desc: "Des gouttières entretenues régulièrement (nettoyage annuel) se nettoient rapidement. Si vos gouttières n'ont pas été nettoyées depuis 3 à 5 ans, les débris sont compactés, les mousses ont colonisé les parois et le travail est nettement plus long. Un mauvais état peut majorer le tarif de 20 à 40%.",
                },
                {
                  num: 4,
                  title: "L'accessibilité",
                  desc: "Une maison accessible des quatre côtés avec un jardin dégagé est facile à traiter. En revanche, si votre maison est implantée sur une parcelle étroite, dans une impasse ou avec une façade donnant directement sur la rue (difficile à approcher avec une échelle), le temps de mise en place du matériel augmente.",
                },
                {
                  num: 5,
                  title: "La présence de mousses sur la toiture",
                  desc: "Si votre toiture présente des mousses importantes, celles-ci migrent en permanence vers les gouttières. Dans ce cas, un simple nettoyage de gouttières sans démoussage de toiture sera moins durable. Il peut être intéressant de coupler les deux prestations, ce qui influence le devis global mais améliore le rapport qualité/prix.",
                },
                {
                  num: 6,
                  title: "Le type et l'état des gouttières",
                  desc: "Des gouttières en PVC récentes (moins de 15 ans) se nettoient facilement. Les gouttières en zinc ancien peuvent être plus fragiles et nécessitent une manipulation soigneuse. Si des réparations s'avèrent nécessaires (joints, crochets, tronçons endommagés), ces travaux supplémentaires sont facturés en plus du nettoyage.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="w-8 h-8 bg-[#1A4731] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Ce qui est inclus dans une prestation de nettoyage professionnelle
            </h2>
            <p>
              Quand vous faites appel à un professionnel, le tarif annoncé inclut généralement un ensemble de prestations bien défini. Voici ce que comprend notre prestation standard de nettoyage de gouttières à Bruxelles.
            </p>

            <ul className="list-none space-y-3 my-5 not-prose">
              {[
                "Inspection préalable de l'état des gouttières et des descentes pluviales",
                "Dépose à la main des feuilles, mousses, sédiments et débris accumulés",
                "Nettoyage complet des gouttières sur toute la longueur",
                "Débouchage et rinçage haute pression des descentes pluviales",
                "Vérification du bon écoulement après nettoyage",
                "Rapport verbal sur l'état général des gouttières (fuites, joints, crochets)",
                "Évacuation et élimination des déchets végétaux collectés",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Ce qui n&apos;est <strong>pas inclus</strong> dans le tarif standard : les réparations de joints, le remplacement de crochets ou de tronçons endommagés, et le démoussage de toiture. Ces prestations supplémentaires font l&apos;objet d&apos;un devis séparé si elles s&apos;avèrent nécessaires.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              DIY vs professionnel : comparaison honnête
            </h2>
            <p>
              Nettoyer ses gouttières soi-même est techniquement possible pour une maison de plain-pied ou d&apos;un seul étage, à condition d&apos;avoir le matériel adéquat et d&apos;être à l&apos;aise en hauteur. Voici une comparaison objective.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 font-bold text-gray-900">DIY — Faire soi-même</div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Coût apparent</p>
                    <p className="text-gray-600 text-sm">Location d&apos;échelle : 20–40€/jour. EPI (gants, lunettes) : 15–25€. Votre temps : 2 à 4h.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Avantages</p>
                    <p className="text-gray-600 text-sm">Économie possible sur un seul étage bien accessible. Intervention quand vous voulez.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Inconvénients</p>
                    <p className="text-gray-600 text-sm">Risque de chute élevé dès le 1er étage. Pas de garantie sur le résultat. Descentes pluviales difficiles à déboucher sans équipement haute pression. Évacuation des déchets à gérer.</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#1A4731] rounded-xl overflow-hidden">
                <div className="bg-[#1A4731] px-4 py-3 font-bold text-white">Professionnel — Notre service</div>
                <div className="p-4 space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Coût réel</p>
                    <p className="text-gray-600 text-sm">Dès 80€ pour une maison mitoyenne. Tarif fixe, devis gratuit avant intervention.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Avantages</p>
                    <p className="text-gray-600 text-sm">Sécurité totale (matériel professionnel, assurance RC Pro). Résultat garanti. Débouchage haute pression inclus. Rapport d&apos;état et conseils. Déchets évacués. Intervention sous 48h.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Inconvénients</p>
                    <p className="text-gray-600 text-sm">Coût plus élevé que le DIY en théorie — mais plus avantageux dès qu&apos;il y a un étage ou que les gouttières sont encrassées.</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Notre recommandation : le DIY peut être envisagé uniquement pour un rez-de-chaussée ou un seul étage avec une toiture accessible, de bonne gouttières en bon état et un propriétaire sans vertige ni problème de dos. Dans tous les autres cas, le rapport coût/risque/qualité plaide clairement pour le professionnel.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Économiser sur le prix : nos conseils
            </h2>
            <p>
              Il existe quelques stratégies légitimes pour optimiser le coût de l&apos;entretien de vos gouttières sans compromettre la qualité du service.
            </p>
            <div className="space-y-3 my-5 not-prose">
              {[
                { title: "Planifiez à l'avance, pas en urgence", desc: "Une intervention planifiée en période creuse (hiver, printemps) est souvent moins chère qu'une urgence. Évitez d'attendre que votre gouttière déborde pour agir." },
                { title: "Combinez nettoyage de gouttières et démoussage", desc: "Si votre toiture présente des mousses, coupler les deux prestations en une seule intervention réduit le coût global par rapport à deux interventions séparées." },
                { title: "Optez pour l'entretien annuel", desc: "Un contrat d'entretien annuel est généralement moins cher qu'une intervention ponctuelle sur des gouttières très encrassées. L'état moyen des gouttières est maintenu, le travail est plus rapide." },
                { title: "Mutualisez avec vos voisins", desc: "Si vous habitez une rue de maisons mitoyennes, proposer à 2 ou 3 voisins de faire intervenir le même professionnel le même jour permet parfois d'obtenir un tarif préférentiel." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <CheckCircle size={18} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 6 — FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Questions fréquentes sur les tarifs</h2>
            <div className="space-y-4 not-prose">
              {[
                {
                  q: "Quel est le prix d'un nettoyage de gouttières à Bruxelles ?",
                  a: "Le prix varie entre 80 et 220€ pour une maison individuelle à Bruxelles en 2026. Une maison mitoyenne 2 façades coûte en moyenne 80–130€. Une villa 4 façades se situe entre 140 et 220€. Le devis gratuit vous donnera le tarif exact pour votre habitation.",
                },
                {
                  q: "Le prix inclut-il les réparations éventuelles ?",
                  a: "Non. Le prix du nettoyage couvre exclusivement le nettoyage des gouttières et le débouchage des descentes. Si des réparations s'avèrent nécessaires (joint, crochet, tronçon), un devis séparé vous est soumis. Rien n'est réparé sans votre accord préalable.",
                },
                {
                  q: "Faut-il payer un supplément pour les descentes pluviales ?",
                  a: "Non. Le débouchage et rinçage des descentes pluviales est inclus dans nos tarifs standard. Il n'y a pas de supplément pour ce poste.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
            <p>
              Le prix d&apos;un nettoyage de gouttières à Bruxelles en 2026 se situe entre <strong>80 et 220€</strong> pour une maison individuelle. Ce tarif est largement justifié par la sécurité de l&apos;intervention, la qualité du résultat et les dégâts que des gouttières négligées peuvent causer — souvent 10 à 20 fois plus coûteux.
            </p>
            <p>
              Pour connaître le prix exact pour votre habitation, demandez un devis gratuit. Notre équipe se déplace gratuitement pour évaluer votre situation et vous proposer un tarif transparent, sans mauvaise surprise.
            </p>
          </div>

          {/* CTA inline */}
          <div className="mt-10 bg-[#1A4731] rounded-2xl p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Obtenez votre tarif exact — devis gratuit</h3>
                <p className="text-gray-300 text-sm">Intervention sous 48h · Prix fixé à l&apos;avance · Techniciens RC Pro</p>
              </div>
              <a
                href="tel:0451053370"
                className="flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl whitespace-nowrap transition-colors"
              >
                <Phone size={18} />
                0451 05 33 70
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Formulaire contact */}
      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Demander un devis gratuit</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vous voulez connaître le prix exact pour votre maison ? Remplissez le formulaire ou appelez-nous. Devis gratuit sous 2h en heures ouvrables.
              </p>
              <div className="space-y-3">
                {[
                  "Nettoyage complet gouttières + descentes",
                  "Tarif fixé avant l'intervention, sans surprise",
                  "Intervention sous 48h garantie",
                  "Devis 100% gratuit et sans engagement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#F97316]" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#1A4731] rounded-xl">
                <p className="text-white font-semibold mb-1 text-sm">Appel direct</p>
                <a href="tel:0451053370" className="flex items-center gap-2 text-[#F97316] font-bold text-lg hover:text-orange-400 transition-colors">
                  <Phone size={20} />0451 05 33 70
                </a>
                <p className="text-gray-400 text-xs mt-1">Lun–Ven 7h30–18h | Sam 8h–14h | Urgences 7j/7</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-gray-900 font-bold text-lg mb-5">Formulaire de devis</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Articles et pages liés</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Nettoyage de gouttières", href: "/services/nettoyage-gouttieres" },
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Préparer ses gouttières pour l'automne", href: "/blog/preparer-gouttieres-automne-bruxelles" },
              { label: "Gouttière qui déborde", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Démoussage de toiture", href: "/services/demoussage-toiture" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 bg-gray-50 hover:bg-[#1A4731] hover:text-white text-gray-700 border border-gray-200 hover:border-[#1A4731] rounded-lg px-3 py-2 text-sm font-medium transition-all"
              >
                {link.label} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
