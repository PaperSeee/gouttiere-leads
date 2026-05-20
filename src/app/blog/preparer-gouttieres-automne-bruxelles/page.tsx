import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, Calendar, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Comment Préparer ses Gouttières Avant l'Automne à Bruxelles | Blog",
  description: "Guide complet pour préparer vos gouttières avant l'automne à Bruxelles : checklist d'inspection, 5 arbres à risque et quand appeler un professionnel.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/blog/preparer-gouttieres-automne-bruxelles" },
}

export default function BlogAutomneGouttieresBruxellesPage() {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Comment Préparer ses Gouttières Avant l'Automne à Bruxelles",
    description: "Guide complet pour préparer vos gouttières avant l'automne à Bruxelles : checklist d'inspection, arbres à risque et quand appeler un professionnel.",
    author: {
      "@type": "Organization",
      name: "Nettoyage Gouttières Bruxelles",
      url: "https://nettoyage-gouttieres-bruxelles.be",
    },
    publisher: {
      "@type": "Organization",
      name: "Nettoyage Gouttières Bruxelles",
      url: "https://nettoyage-gouttieres-bruxelles.be",
    },
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    url: "https://nettoyage-gouttieres-bruxelles.be/blog/preparer-gouttieres-automne-bruxelles",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://nettoyage-gouttieres-bruxelles.be/blog/preparer-gouttieres-automne-bruxelles",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Préparer gouttières automne Bruxelles" },
      ]} />

      {/* Hero article */}
      <section className="bg-[#1A4731] text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Tag size={12} />Saisonnier
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Calendar size={12} />20 mai 2026
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Clock size={12} />7 min de lecture
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Comment Préparer ses Gouttières Avant l'Automne à Bruxelles
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            L'automne bruxellois est la saison la plus critique pour vos gouttières. Feuilles de platanes, marrons et frênes obstruent les descentes en quelques semaines. Voici comment anticiper et éviter les dégâts des eaux.
          </p>
        </div>
      </section>

      {/* Corps de l'article */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Pourquoi l'automne est critique pour les gouttières à Bruxelles
            </h2>
            <p>
              Bruxelles est une ville exceptionnellement arborée pour une capitale européenne. Ses 3,8 millions d'arbres — dont une grande partie dans ses 19 communes — font la fierté des Bruxellois. Mais chaque automne, ces mêmes arbres transforment les gouttières de la ville en véritable piège à feuilles.
            </p>
            <p>
              Entre mi-septembre et fin novembre, c'est une véritable avalanche végétale qui s'abat sur les toitures bruxelloises. Les feuilles mortes, mais aussi les samares, les bogues de châtaigniers, les graines ailées d'érables et les inflorescences séchées viennent obstruer les gouttières en quelques semaines seulement. Une gouttière non entretenue peut être complètement bouchée en moins d'un mois pendant cette période.
            </p>
            <p>
              Le problème ne se limite pas à l'obstruction visible. L'eau qui stagne dans une gouttière bouchée exerce une pression sur les fixations, surcharge le système et peut remonter sous les tuiles. Lors des premières pluies intenses d'automne — fréquentes à Bruxelles où les précipitations augmentent significativement en septembre-octobre — une gouttière bouchée peut causer des dégâts des eaux importants en quelques heures seulement.
            </p>
            <p>
              <strong>La solution ? Anticiper.</strong> Plutôt que d'attendre le premier débordement pour agir, une inspection et un nettoyage préventif à la fin de l'été constituent le meilleur investissement pour protéger votre habitation.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Les 5 arbres bruxellois qui bouchent le plus les gouttières
            </h2>
            <p>
              Tous les arbres ne sont pas égaux face aux gouttières. Certaines espèces génèrent plus de problèmes que d'autres, en raison de la taille de leurs feuilles, de leur morphologie ou de la période à laquelle elles perdent leur feuillage. Voici les cinq grands coupables à surveiller dans les rues bruxelloises.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 not-prose">
              {[
                {
                  num: "01",
                  name: "Le platane",
                  desc: "L'arbre roi des avenues bruxelloises. Ses grandes feuilles palmées et ses boules de platane séchées bouchent spectaculairement les gouttières. Les communes comme Uccle, Etterbeek et Schaerbeek, bordées de platanes centenaires, sont particulièrement touchées.",
                },
                {
                  num: "02",
                  name: "Le tilleul",
                  desc: "Présent dans la quasi-totalité des avenues résidentielles bruxelloises, le tilleul perd ses feuilles en même temps que ses bractées et ses petites noix, formant une masse compacte dans les gouttières. Ses petites feuilles passent facilement dans les descentes et provoquent des bouchons profonds.",
                },
                {
                  num: "03",
                  name: "Le marronnier",
                  desc: "Le marronnier bruxellois est à double peine : ses bogues épineuses et ses feuilles découpées s'accumulent dans les gouttières, mais ses grands marronniers génèrent aussi de l'ombrage qui favorise le développement de mousses sur les toitures. Particulièrement fréquent dans les communes résidentielles.",
                },
                {
                  num: "04",
                  name: "Le chêne",
                  desc: "L'un des arbres les plus fréquents dans les parcs et grandes propriétés des communes comme Uccle, Woluwe et Auderghem. Ses feuilles persistantes tombent tardivement — parfois jusqu'en janvier — et ses glands s'accumulent dans les gouttières, créant des bouchons denses et difficiles à évacuer.",
                },
                {
                  num: "05",
                  name: "Le peuplier",
                  desc: "Le peuplier pose un problème particulier au printemps avec son coton blanc et abondant qui colle aux surfaces mouillées et colmate les gouttières avec une efficacité redoutable. En automne, ses feuilles légères s'accumulent également en grandes quantités. Fréquent dans les zones humides de Bruxelles.",
                },
              ].map((tree) => (
                <div key={tree.num} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-[#F97316] mb-1">{tree.num}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{tree.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tree.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Checklist inspection gouttières avant automne : 8 points à vérifier
            </h2>
            <p>
              Avant l'arrivée des premières feuilles d'automne — idéalement en août ou début septembre — voici les 8 points essentiels à inspecter pour vous assurer que votre système d'évacuation des eaux pluviales est en parfait état de marche.
            </p>

            <div className="space-y-4 my-6 not-prose">
              {[
                {
                  num: 1,
                  title: "État général des gouttières",
                  desc: "Depuis le sol, observez vos gouttières avec des jumelles si nécessaire. Vérifiez qu'elles ne penchent pas d'un côté (pente incorrecte) et qu'aucun tronçon n'est désolidarisé de son support. Une gouttière qui penche vers l'intérieur du bâtiment plutôt que vers la descente crée une rétention d'eau permanente.",
                },
                {
                  num: 2,
                  title: "Présence de végétation dans les gouttières",
                  desc: "Si vous apercevez de l'herbe, de la mousse ou des petites plantes qui poussent dans vos gouttières, c'est un signe que des débris s'y sont accumulés depuis longtemps et que des graines ont germé. Un nettoyage d'urgence s'impose avant toute pluie importante.",
                },
                {
                  num: 3,
                  title: "État des descentes pluviales",
                  desc: "Lors d'une pluie modérée, observez vos descentes pluviales : l'eau doit s'écouler régulièrement et sans surpression. Si vous entendez des clapotements, si l'eau déborde par les jonctions ou si elle sort avec intermittence, votre descente est partiellement obstruée.",
                },
                {
                  num: 4,
                  title: "Taches sur les façades",
                  desc: "Des traînées sombres ou des traces de mousse sur la façade, particulièrement sous les descentes pluviales, indiquent que l'eau a débordé ou fui à cet endroit. Ces traces sont un indicateur visuel précieux de l'histoire de vos gouttières.",
                },
                {
                  num: 5,
                  title: "Joints et raccords",
                  desc: "Les joints entre éléments de gouttière se dégradent avec le temps et les variations thermiques. Passez un doigt sur les raccords lors d'une journée de pluie pour détecter les fuites. Un joint défaillant laisse s'échapper l'eau directement sur la façade.",
                },
                {
                  num: 6,
                  title: "Crochets et fixations",
                  desc: "Vérifiez que les crochets qui supportent vos gouttières sont solidaires de la façade. Un crochet lâche crée un affaissement local de la gouttière qui retient l'eau au lieu de la drainer vers les descentes. Des crochets corrodés peuvent lâcher brusquement sous le poids des feuilles et de l'eau.",
                },
                {
                  num: 7,
                  title: "Caves et combles",
                  desc: "Montez dans vos combles après une pluie importante et vérifiez l'absence de traces d'humidité sur les chevrons et les pannes. Dans votre cave, contrôlez les murs mitoyens à l'extérieur pour détecter d'éventuelles traces d'infiltration. Ces signes intérieurs révèlent souvent des problèmes de gouttières non détectés de l'extérieur.",
                },
                {
                  num: 8,
                  title: "Mousses sur la toiture",
                  desc: "Les mousses sur vos tuiles sont le premier pas vers des gouttières bouchées. Lorsqu'il pleut, les mousses se détachent progressivement et migrent vers les gouttières qu'elles finissent par colmater. Un démoussage préventif de toiture avant l'automne réduit significativement les apports de matières organiques dans vos gouttières.",
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

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Quand faire appel à un professionnel
            </h2>
            <p>
              Si vous avez coché un ou plusieurs des problèmes de la checklist ci-dessus, il est temps de contacter un professionnel. Voici les situations qui nécessitent une intervention experte plutôt qu'un bricolage maison :
            </p>
            <ul className="list-none space-y-3 my-4 not-prose">
              {[
                "Vos gouttières sont situées à plus d'un étage et l'accès nécessite une échelle professionnelle ou un équipement de sécurité",
                "Vous constatez des perforations, des fissures ou des déformations importantes dans vos gouttières",
                "Des traces d'infiltration sont visibles dans vos combles ou cave après les pluies",
                "Vos gouttières n'ont pas été nettoyées depuis plus de 2 ans",
                "Des plantes ou une végétation visible poussent dans vos gouttières",
                "Vous avez des gouttières en zinc ancien qui nécessitent une manipulation experte",
                "Votre toiture présente des mousses importantes qui migrent vers les gouttières",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Un professionnel dispose du matériel adapté (échelles, équipement de sécurité, outils spécialisés), de l'expertise pour diagnostiquer les problèmes cachés, et de l'assurance RC professionnelle qui vous protège en cas d'incident. Investir dans un nettoyage professionnel une fois par an coûte généralement 10 à 20 fois moins cher que les réparations de dégâts des eaux causés par des gouttières négligées.
            </p>
            <p>
              Pour faciliter votre démarche, notre article sur le{" "}
              <Link href="/services/nettoyage-gouttieres" className="text-[#1A4731] font-semibold hover:text-[#F97316] transition-colors">
                nettoyage professionnel de gouttières
              </Link>{" "}
              et sur le{" "}
              <Link href="/services/demoussage-toiture" className="text-[#1A4731] font-semibold hover:text-[#F97316] transition-colors">
                démoussage de toiture
              </Link>{" "}
              vous donnent un aperçu complet de ce que comprennent ces prestations.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Tarifs indicatifs nettoyage automnal à Bruxelles
            </h2>
            <p>
              Le coût d'un nettoyage de gouttières à Bruxelles varie selon plusieurs paramètres : la longueur totale de gouttières à nettoyer, la hauteur du bâtiment, l'accessibilité et l'état général du système. Voici les fourchettes de tarifs que vous pouvez espérer pour différents types de bâtiments bruxellois.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
              {[
                {
                  type: "Maison mitoyenne (1-2 étages)",
                  price: "80 — 130 €",
                  detail: "Gouttières + descentes, accès facile, 20-30 m linéaires",
                },
                {
                  type: "Villa 4 façades",
                  price: "120 — 200 €",
                  detail: "Gouttières + descentes 4 façades, 40-80 m linéaires",
                },
                {
                  type: "Immeuble 3-5 étages",
                  price: "180 — 350 €",
                  detail: "Intervention en hauteur, coordination copropriété",
                },
                {
                  type: "Débouchage urgence",
                  price: "120 — 220 €",
                  detail: "Intervention prioritaire 7j/7, descentes haute pression",
                },
              ].map((item) => (
                <div key={item.type} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">{item.type}</h3>
                  <p className="text-2xl font-bold text-[#F97316] mb-1">{item.price}</p>
                  <p className="text-gray-500 text-xs">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic">
              Ces tarifs sont indicatifs. Un devis précis et gratuit est systématiquement établi avant toute intervention.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Les communes bruxelloises les plus touchées par les feuilles d'automne
            </h2>
            <p>
              Toutes les communes bruxelloises ne sont pas égales face aux problèmes de gouttières en automne. La densité végétale, la nature des arbres présents et la topographie locales créent des situations très différentes d'un quartier à l'autre. Voici les communes où nous intervenons le plus en période automnale.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
              {[
                {
                  commune: "Uccle",
                  desc: "Les grandes avenues plantées de platanes centenaires (Molière, Brugmann) et les vastes propriétés boisées font d'Uccle la commune où nos interventions automnales sont les plus nombreuses. Les villas des années 30-60 avec leurs gouttières en zinc exigent une expertise particulière.",
                  link: "/communes/uccle",
                },
                {
                  commune: "Watermael-Boitsfort",
                  desc: "La commune la plus boisée de Bruxelles. Avec des feuilles qui tombent de septembre à janvier, deux nettoyages annuels minimum sont indispensables. La rapidité de développement des mousses y est également exceptionnelle.",
                  link: "/communes/watermael-boitsfort",
                },
                {
                  commune: "Woluwe-Saint-Pierre",
                  desc: "Le parc de Woluwe génère des apports continus de feuilles dans les gouttières des propriétés riveraines. Les villas équipées de gouttières en aluminium des années 80 arrivent en fin de vie dans cette commune.",
                  link: "/communes/woluwe-saint-pierre",
                },
                {
                  commune: "Auderghem",
                  desc: "La proximité de la Forêt de Soignes — principalement des hêtres à feuilles persistantes — impose un nettoyage post-automne en décembre-janvier. La commune reçoit des apports de feuilles plus tardivement que la moyenne bruxelloise.",
                  link: "/communes/auderghem",
                },
              ].map((item) => (
                <div key={item.commune} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{item.commune}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <Link href={item.link} className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1">
                    En savoir plus sur {item.commune} <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Conclusion : anticipez avant le mois de septembre
            </h2>
            <p>
              La règle d'or pour protéger vos gouttières en automne bruxellois est simple : <strong>n'attendez pas que le problème se manifeste</strong>. Un nettoyage préventif réalisé fin août ou début septembre vous assure d'aborder l'automne avec un système d'évacuation en parfait état, capable de gérer les volumes importants de feuilles et les pluies intenses de la saison.
            </p>
            <p>
              Le coût d'un nettoyage préventif — entre 80 et 200€ selon le type de bâtiment — est sans commune mesure avec celui d'une intervention d'urgence suite à des dégâts des eaux, qui peut rapidement atteindre plusieurs milliers d'euros (réparation de plafond, traitement contre les moisissures, séchage des murs, etc.).
            </p>
            <p>
              Vous souhaitez planifier un nettoyage avant l'automne ? Contactez-nous dès maintenant pour un devis gratuit. Notre équipe intervient dans les 19 communes de la région bruxelloise et peut planifier votre intervention dans les 48 heures.
            </p>
          </div>

          {/* CTA inline */}
          <div className="mt-10 bg-[#1A4731] rounded-2xl p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Planifiez votre nettoyage avant l'automne</h3>
                <p className="text-gray-300 text-sm">Devis gratuit — intervention dans les 48h — techniciens certifiés RC Pro</p>
              </div>
              <a
                href="tel:0477234187"
                className="flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl whitespace-nowrap transition-colors"
              >
                <Phone size={18} />
                0477 23 41 87
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
                Prêt à préparer vos gouttières avant l'automne ? Remplissez le formulaire ou appelez-nous directement. Un expert vous répond sous 2h en heures ouvrables.
              </p>
              <div className="space-y-3">
                {[
                  "Nettoyage complet gouttières + descentes",
                  "Inspection et rapport d'état inclus",
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
                <a href="tel:0477234187" className="flex items-center gap-2 text-[#F97316] font-bold text-lg hover:text-orange-400 transition-colors">
                  <Phone size={20} />0477 23 41 87
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
              { label: "Démoussage de toiture", href: "/services/demoussage-toiture" },
              { label: "Gouttières à Uccle", href: "/communes/uccle" },
              { label: "Gouttières à Watermael-Boitsfort", href: "/communes/watermael-boitsfort" },
              { label: "Gouttières à Woluwe-Saint-Pierre", href: "/communes/woluwe-saint-pierre" },
              { label: "Gouttières à Auderghem", href: "/communes/auderghem" },
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
