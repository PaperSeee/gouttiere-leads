import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, Calendar, Clock, Tag, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Quand Nettoyer ses Gouttières ? Calendrier à Bruxelles",
  description: "Fréquence idéale de nettoyage des gouttières à Bruxelles : calendrier recommandé, signes d'alerte et conséquences d'un entretien négligé.",
  keywords: ["entretien gouttières bruxelles", "quand nettoyer gouttières", "fréquence nettoyage gouttières", "calendrier entretien gouttières"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/entretien-gouttieres-quand-faire" },
  openGraph: {
    type: "article",
    title: "Quand Nettoyer ses Gouttières ? Calendrier d'Entretien à Bruxelles",
    description: "Fréquence recommandée, meilleurs moments de l'année et signes d'alerte pour l'entretien de vos gouttières à Bruxelles.",
    images: [{ url: "https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80", width: 1200, height: 630, alt: "Calendrier entretien gouttières Bruxelles" }],
    publishedTime: "2026-05-29",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quand Nettoyer ses Gouttières ? Calendrier Bruxelles",
    description: "Fréquence, meilleurs moments, signes d'alerte — guide complet pour l'entretien de vos gouttières.",
    images: ["https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80"],
  },
}

export default function BlogEntretienGouttieresMomentPage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/entretien-gouttieres-quand-faire`,
        headline: "Quand nettoyer ses gouttières ? Le calendrier d'entretien idéal à Bruxelles",
        description: "À quelle fréquence faut-il nettoyer ses gouttières à Bruxelles ? Calendrier d'entretien recommandé, signes d'alerte et conséquences d'un entretien négligé.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-05-29",
        dateModified: "2026-05-29",
        image: "https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/entretien-gouttieres-quand-faire` },
        inLanguage: "fr-BE",
        keywords: "entretien gouttières bruxelles, quand nettoyer gouttières, fréquence nettoyage gouttières",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Quand nettoyer ses gouttières", item: `${DOMAIN}/blog/entretien-gouttieres-quand-faire` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "À quelle fréquence faut-il nettoyer ses gouttières à Bruxelles ?",
            acceptedAnswer: { "@type": "Answer", text: "La fréquence recommandée est de 2 fois par an à Bruxelles : une fois à la fin de l'automne (novembre–décembre) après la chute des feuilles, et une fois au printemps (mars–avril) pour éliminer les mousses et débris hivernaux. Les maisons proches d'arbres peuvent nécessiter 3 interventions par an." },
          },
          {
            "@type": "Question",
            name: "Quels sont les signes que mes gouttières doivent être nettoyées ?",
            acceptedAnswer: { "@type": "Answer", text: "Les principaux signes sont : de l'eau qui déborde pendant la pluie, des plantes ou de la végétation visible dans les gouttières, des taches d'humidité sur la façade, des moisissures dans les combles après une pluie, ou des gouttières n'ayant pas été nettoyées depuis plus d'un an." },
          },
          {
            "@type": "Question",
            name: "Que se passe-t-il si on ne nettoie jamais ses gouttières ?",
            acceptedAnswer: { "@type": "Answer", text: "Des gouttières jamais nettoyées finissent par s'obstruer complètement, causant des débordements permanents, des infiltrations en façade, des dégâts en combles et une dégradation accélérée du système de gouttières lui-même. Les réparations qui en résultent coûtent 10 à 30 fois plus cher qu'un simple entretien annuel." },
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
        { label: "Quand nettoyer ses gouttières ?" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Tag size={12} />Entretien
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Calendar size={12} />29 mai 2026
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Clock size={12} />7 min de lecture
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Quand nettoyer ses gouttières ? Le calendrier d&apos;entretien idéal à Bruxelles
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Beaucoup de propriétaires bruxellois ne savent pas à quelle fréquence entretenir leurs gouttières, ni quel est le meilleur moment pour le faire. Ce guide complet vous donne un calendrier clair, les signes d&apos;alerte à surveiller et les conséquences d&apos;un entretien trop tardif.
          </p>
        </div>
      </section>

      {/* Corps de l'article */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
              Pourquoi l&apos;entretien régulier des gouttières est crucial
            </h2>
            <p>
              Les gouttières sont le premier système de protection de votre maison contre les eaux de pluie. Elles collectent l&apos;eau de toiture et la dirigent loin des fondations, des façades et des murs. Lorsqu&apos;elles ne fonctionnent plus correctement, c&apos;est toute votre maison qui en subit les conséquences.
            </p>
            <p>
              À Bruxelles, les conditions climatiques sont particulièrement exigeantes pour les gouttières. La ville reçoit en moyenne 850 mm de pluie par an, avec des périodes de précipitations intenses en automne et au printemps. Combinées à la densité arborée exceptionnelle de la région bruxelloise — 3,8 millions d&apos;arbres pour 19 communes — ces conditions génèrent un encrassement rapide des systèmes d&apos;évacuation.
            </p>
            <p>
              Un entretien régulier et correctement planifié permet de maintenir vos gouttières en parfait état de fonctionnement à l&apos;année, d&apos;éviter les interventions d&apos;urgence coûteuses et de prolonger significativement la durée de vie de votre installation.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              La fréquence recommandée : 2 fois par an minimum
            </h2>
            <p>
              La règle générale pour Bruxelles est de nettoyer ses gouttières <strong>au moins 2 fois par an</strong>. Cette fréquence est la recommandation minimale pour la grande majorité des maisons bruxelloises. Elle peut augmenter selon votre situation spécifique.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-6 not-prose">
              {[
                {
                  freq: "1 fois par an",
                  profil: "Maison sans arbres proches, gouttières en excellent état, PVC récent",
                  color: "bg-green-50 border-green-200",
                  badge: "Minimum",
                  badgeColor: "bg-green-100 text-green-700",
                },
                {
                  freq: "2 fois par an",
                  profil: "Cas le plus courant à Bruxelles. Arbres à proximité modérée, maison standard",
                  color: "bg-[#1A4731]/5 border-[#1A4731]/20",
                  badge: "Recommandé",
                  badgeColor: "bg-[#1A4731] text-white",
                },
                {
                  freq: "3 fois par an",
                  profil: "Maison entourée de grands arbres (platanes, tilleuls), gouttières très sollicitées",
                  color: "bg-orange-50 border-orange-200",
                  badge: "Intensif",
                  badgeColor: "bg-orange-100 text-orange-700",
                },
              ].map((item) => (
                <div key={item.freq} className={`${item.color} border rounded-xl p-4`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                  <p className="text-2xl font-bold text-gray-900 mt-2 mb-1">{item.freq}</p>
                  <p className="text-gray-600 text-sm">{item.profil}</p>
                </div>
              ))}
            </div>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Le calendrier idéal : quand intervenir dans l&apos;année
            </h2>
            <p>
              Connaitre la fréquence ne suffit pas — le moment choisi dans l&apos;année est tout aussi important pour maximiser l&apos;efficacité de l&apos;entretien.
            </p>

            <div className="space-y-4 my-6 not-prose">
              {[
                {
                  period: "Novembre — Décembre",
                  label: "Nettoyage post-automne",
                  color: "border-[#1A4731]",
                  badge: "Priorité 1",
                  badgeColor: "bg-[#1A4731] text-white",
                  desc: "C'est le nettoyage le plus important de l'année. Après la chute des feuilles (qui se termine généralement mi-novembre à Bruxelles), vos gouttières sont au pic de leur encrassement. Ce nettoyage doit être fait avant les premières gelées et les pluies hivernales intenses. C'est le moment idéal pour inspecter également l'état général du système avant l'hiver.",
                  tip: "À Bruxelles, les feuilles des chênes et hêtres tombent parfois jusqu'en janvier. Dans les communes proches de la Forêt de Soignes (Auderghem, Watermael), attendez mi-décembre.",
                },
                {
                  period: "Mars — Avril",
                  label: "Nettoyage pré-printemps",
                  color: "border-[#F97316]",
                  badge: "Priorité 2",
                  badgeColor: "bg-[#F97316] text-white",
                  desc: "L'hiver laisse des dépôts dans les gouttières : mousses, sédiments, petits débris organiques et parfois des dégâts dus au gel. Ce nettoyage printanier prépare vos gouttières pour les pluies parfois intenses d'avril et mai, et permet de détecter les dommages causés par le gel avant qu'ils ne s'aggravent.",
                  tip: "C'est aussi le moment idéal pour coupler un démoussage de toiture, qui empêchera les mousses de migrer dans vos gouttières tout au long de l'été.",
                },
                {
                  period: "Juillet — Août (optionnel)",
                  label: "Inspection estivale",
                  color: "border-gray-200",
                  badge: "Optionnel",
                  badgeColor: "bg-gray-100 text-gray-700",
                  desc: "Si vos gouttières sont proches de grands arbres ou si vous avez des peupliers dont le coton printanier a pu colmater les descentes, une inspection légère en été permet de vérifier l'état avant l'automne. Ce n'est pas un nettoyage complet mais une vérification rapide.",
                  tip: "Si vous habitez près d'un peuplier, vérifiez impérativement vos descentes pluviales en mai-juin après la période de cotonnage.",
                },
              ].map((item) => (
                <div key={item.period} className={`border-l-4 ${item.color} bg-gray-50 rounded-r-xl p-5`}>
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                    <div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badgeColor} mr-2`}>{item.badge}</span>
                      <span className="font-bold text-gray-900">{item.period}</span>
                      <span className="text-gray-500 text-sm ml-2">— {item.label}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">{item.desc}</p>
                  <div className="flex items-start gap-2 bg-white rounded-lg p-3 border border-gray-100">
                    <CheckCircle size={14} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-xs"><strong>Conseil :</strong> {item.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              8 signes que vos gouttières ont besoin d&apos;être nettoyées maintenant
            </h2>
            <p>
              Même si vous n&apos;êtes pas certain de la date du dernier nettoyage, certains signes indiquent clairement que vos gouttières ont besoin d&apos;une attention immédiate.
            </p>

            <div className="space-y-3 my-6 not-prose">
              {[
                { sign: "L'eau déborde pendant la pluie", urgency: "Urgent", urgencyColor: "bg-red-100 text-red-700", detail: "Signe classique d'une gouttière bouchée. Agissez dans les 48h pour éviter des dégâts sur la façade." },
                { sign: "Plantes ou herbe qui poussent dans les gouttières", urgency: "Urgent", urgencyColor: "bg-red-100 text-red-700", detail: "Des graines ont germé dans les débris accumulés. La gouttière est bouchée depuis longtemps." },
                { sign: "Taches sombres ou traces d'humidité sur la façade", urgency: "Rapide", urgencyColor: "bg-orange-100 text-orange-700", detail: "L'eau a débordé ou fui à cet endroit. Cherchez d'où vient l'écoulement." },
                { sign: "Moisissures ou humidité dans les combles après la pluie", urgency: "Rapide", urgencyColor: "bg-orange-100 text-orange-700", detail: "Signe que l'eau remonte sous les tuiles ou infiltre la rive de toit." },
                { sign: "Son de gargouillis dans les descentes pendant la pluie", urgency: "Bientôt", urgencyColor: "bg-yellow-100 text-yellow-700", detail: "La descente pluviale est partiellement obstruée. Elle se bouchera complètement sous peu." },
                { sign: "Gouttières visiblement déformées ou affaissées", urgency: "Bientôt", urgencyColor: "bg-yellow-100 text-yellow-700", detail: "Des crochets ont lâché. La gouttière ne draine plus correctement vers la descente." },
                { sign: "Dernière inspection il y a plus d'un an", urgency: "Planifier", urgencyColor: "bg-blue-100 text-blue-700", detail: "Sans signe visible mais délai dépassé : planifiez un nettoyage préventif." },
                { sign: "Automne terminé et gouttières non nettoyées", urgency: "Planifier", urgencyColor: "bg-blue-100 text-blue-700", detail: "Toutes les feuilles sont tombées. C'est le moment optimal pour le nettoyage annuel principal." },
              ].map((item) => (
                <div key={item.sign} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full h-fit flex-shrink-0 whitespace-nowrap mt-0.5 ${item.urgencyColor}`}>{item.urgency}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{item.sign}</p>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Conséquences d&apos;un entretien trop tardif ou absent
            </h2>
            <p>
              Négliger l&apos;entretien de ses gouttières n&apos;est pas sans risque. Voici les conséquences concrètes d&apos;un entretien insuffisant, classées par ordre de gravité croissante.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
              {[
                {
                  level: "Court terme (1–6 mois)",
                  color: "bg-yellow-50 border-yellow-200",
                  items: [
                    "Débordements lors des pluies intenses",
                    "Taches d'humidité et salpêtres sur la façade",
                    "Accumulation de mousse dans les gouttières",
                    "Gargouillis et écoulements anormaux",
                  ],
                },
                {
                  level: "Moyen terme (6–18 mois)",
                  color: "bg-orange-50 border-orange-200",
                  items: [
                    "Infiltrations d'eau dans les combles",
                    "Développement de moisissures sous la toiture",
                    "Rouille et corrosion des gouttières en zinc",
                    "Détérioration des fixations et crochets",
                  ],
                },
                {
                  level: "Long terme (+18 mois)",
                  color: "bg-red-50 border-red-200",
                  items: [
                    "Dégâts des eaux structurels en façade ou combles",
                    "Humidité capillaire remontant dans les murs",
                    "Remplacement complet du système de gouttières",
                    "Rénovation façade (crépi, brique, peinture)",
                  ],
                },
                {
                  level: "Coût des réparations",
                  color: "bg-gray-50 border-gray-200",
                  items: [
                    "Réparation façade : 1.500 — 8.000€",
                    "Traitement moisissures combles : 2.000 — 6.000€",
                    "Remplacement gouttières : 800 — 3.000€",
                    "vs. Entretien annuel : 80 — 200€",
                  ],
                },
              ].map((item) => (
                <div key={item.level} className={`${item.color} border rounded-xl p-4`}>
                  <h3 className="font-bold text-gray-900 text-sm mb-3">{item.level}</h3>
                  <ul className="space-y-1.5">
                    {item.items.map((li) => (
                      <li key={li} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gray-400 mt-0.5">•</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Bruxelles : particularités à prendre en compte
            </h2>
            <p>
              La région bruxelloise présente des caractéristiques spécifiques qui influencent la fréquence d&apos;entretien recommandée. Voici ce qui distingue Bruxelles d&apos;autres villes belges.
            </p>
            <div className="space-y-3 my-5 not-prose">
              {[
                { title: "Densité arborée exceptionnelle", desc: "Avec 3,8 millions d'arbres pour 1,2 million d'habitants, Bruxelles est l'une des capitales les plus vertes d'Europe. Cette richesse végétale se traduit par un encrassement des gouttières 2 à 3 fois plus rapide qu'en zone peu boisée." },
                { title: "Végétation variée avec chutes étalées", desc: "Les différentes espèces d'arbres bruxellois ne perdent pas leurs feuilles en même temps. Les platanes tombent en octobre, les chênes en novembre, les hêtres parfois jusqu'en janvier. Dans certaines communes proches de la forêt, l'apport de feuilles s'étale sur 4 mois." },
                { title: "Pluviométrie importante en automne", desc: "Les mois d'octobre à décembre sont les plus pluvieux à Bruxelles, avec des précipitations 40% supérieures à la moyenne annuelle. C'est précisément la période où les gouttières sont le plus sollicitées — et le plus encrassées." },
                { title: "Bâti dense avec accès parfois difficile", desc: "Les maisons mitoyennes bruxelloises avec cours arrière étroites, impasses ou rues à circulation limitée nécessitent parfois du matériel spécialisé pour accéder aux gouttières. Cela plaide pour un entretien régulier plutôt que des interventions d'urgence sous la pluie." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <CheckCircle size={18} className="text-[#1A4731] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Questions fréquentes</h2>
            <div className="space-y-4 not-prose">
              {[
                {
                  q: "À quelle fréquence faut-il nettoyer ses gouttières à Bruxelles ?",
                  a: "La fréquence recommandée est de 2 fois par an : en novembre–décembre après la chute des feuilles, et en mars–avril avant les pluies de printemps. Les maisons proches de grands arbres peuvent nécessiter 3 interventions par an.",
                },
                {
                  q: "Quels sont les signes que mes gouttières doivent être nettoyées ?",
                  a: "Les principaux signes sont : eau qui déborde pendant la pluie, végétation visible dans les gouttières, taches d'humidité sur la façade, moisissures dans les combles, ou gouttières non entretenues depuis plus d'un an.",
                },
                {
                  q: "Que se passe-t-il si on ne nettoie jamais ses gouttières ?",
                  a: "Des gouttières jamais nettoyées s'obstruent progressivement, causant des débordements, infiltrations en façade, dégâts en combles et une dégradation du système. Les réparations coûtent 10 à 30 fois plus cher qu'un entretien annuel.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Alerte */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-8 not-prose">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Vous ne savez plus quand vos gouttières ont été nettoyées pour la dernière fois ?</p>
                  <p className="text-gray-600 text-sm">Si vous n&apos;êtes pas certain de la date du dernier entretien, considérez qu&apos;il est temps d&apos;agir. Appelez-nous pour une inspection gratuite : nous évaluons l&apos;état de vos gouttières et vous conseillons sur la fréquence adaptée à votre situation.</p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion : planifiez, n&apos;attendez pas</h2>
            <p>
              À Bruxelles, la règle est simple : <strong>2 nettoyages par an</strong>, l&apos;un en fin d&apos;automne (novembre–décembre) et l&apos;autre au printemps (mars–avril). Cette routine simple protège efficacement votre maison et vous évite les coûteuses interventions d&apos;urgence.
            </p>
            <p>
              Le meilleur moment pour planifier un nettoyage, c&apos;est avant d&apos;en avoir besoin. Un entretien préventif régulier coûte entre 80 et 200€ — contre plusieurs milliers d&apos;euros pour réparer les dégâts causés par des gouttières négligées. L&apos;investissement est évident.
            </p>
          </div>

          {/* CTA inline */}
          <div className="mt-10 bg-[#1A4731] rounded-2xl p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Planifiez votre entretien maintenant</h3>
                <p className="text-gray-300 text-sm">Devis gratuit · Intervention sous 48h · Techniciens RC Pro à Bruxelles</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Planifier un entretien</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Prêt à planifier l&apos;entretien de vos gouttières ? Remplissez le formulaire ou appelez-nous. Devis gratuit sous 2h en heures ouvrables.
              </p>
              <div className="space-y-3">
                {[
                  "Nettoyage complet gouttières + descentes",
                  "Rapport d'état inclus",
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
              { label: "Prix nettoyage gouttières", href: "/blog/prix-nettoyage-gouttieres-bruxelles" },
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
