import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Woluwe-Saint-Pierre — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Woluwe-Saint-Pierre : villas résidentielles, parc de Woluwe, aluminium années 80. Devis gratuit. Intervention rapide. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/woluwe-saint-pierre" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "Le parc de Woluwe génère des feuilles en continu d'octobre à décembre. Nos techniciens nettoient en profondeur vos gouttières en aluminium et vos descentes pluviales dans toute la commune.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "Débordement actif sur votre villa de Woluwe-Saint-Pierre ? Notre équipe intervient 7j/7 dans les 24h. Les mousses accumulées sur tuiles bloquent souvent les descentes lors des premières pluies d'automne.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "Les gouttières en aluminium des villas des années 80-90 de Woluwe arrivent souvent en fin de vie. Nous remplaçons les tronçons déformés ou l'intégralité du système par du matériau de qualité.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "L'ombrage des grands arbres du parc de Woluwe favorise les mousses sur les tuiles des villas environnantes. Notre démoussage mécanique et traitement préventif protège vos tuiles pour plusieurs années.",
  },
]

const faqs = [
  {
    q: "Le parc de Woluwe nécessite-t-il un nettoyage plus fréquent ?",
    a: "Oui. Les villas situées à proximité du parc de Woluwe reçoivent des apports massifs de feuilles, samares et débris végétaux sur plusieurs mois. Nous recommandons au minimum deux nettoyages annuels : un en mai-juin pour les floraisons et graines, et un en novembre après la chute des feuilles.",
  },
  {
    q: "Mes gouttières en aluminium des années 80 sont-elles encore réparables ?",
    a: "Les gouttières en aluminium ont une durée de vie de 30 à 40 ans. Si les vôtres datent des années 80-90, elles sont en fin de vie mais souvent encore réparables partiellement. Nous effectuons un diagnostic complet lors du devis et vous conseillons sur la meilleure solution : réparation partielle ou remplacement complet.",
  },
  {
    q: "Comment éviter les mousses qui se reforment rapidement ?",
    a: "La mousse se développe dans les zones ombragées et humides. Après un démoussage complet, nous appliquons un traitement biocide préventif qui empêche la repousse pendant 2 à 3 ans. Couper les branches d'arbres qui surplombent directement la toiture réduit également significativement la vitesse de reformation.",
  },
  {
    q: "Intervenez-vous aussi dans le quartier du Tomberg et de Montgomery ?",
    a: "Oui, nous intervenons dans l'ensemble de la commune de Woluwe-Saint-Pierre, incluant les quartiers Tomberg, Montgomery, Val des Seigneurs, La Chasse et toutes les rues résidentielles. L'accès facile dans cette commune calme nous permet de planifier les interventions rapidement.",
  },
]

export default function WoluweSaintPierrePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Woluwe-Saint-Pierre" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Woluwe-Saint-Pierre</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Devis gratuit</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Intervention 48h</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Woluwe-Saint-Pierre</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Woluwe-Saint-Pierre. Villas résidentielles, gouttières aluminium, toitures ombragées par le parc de Woluwe : nous intervenons rapidement et proprement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0477234187"
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-4 rounded-xl text-lg transition-colors"
              >
                <Phone size={20} />
                0477 23 41 87
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1A4731] font-bold px-6 py-4 rounded-xl text-lg transition-colors"
              >
                Devis gratuit en ligne
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro spécifique */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Pourquoi Woluwe-Saint-Pierre est particulière</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Les spécificités des gouttières à Woluwe-Saint-Pierre
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Woluwe-Saint-Pierre est l'une des communes les plus résidentielles et les plus agréables de la région bruxelloise. Ses larges rues arborées, ses villas cossues et la présence du <strong>parc de Woluwe</strong> — l'un des plus grands espaces verts de la capitale — en font un cadre de vie exceptionnel. Mais cette verdure abondante a un revers : les arbres du parc génèrent des quantités impressionnantes de feuilles et de débris qui viennent chaque automne obstruer les gouttières des propriétés voisines.
              </p>
              <p>
                Le patrimoine bâti de la commune est largement constitué de <strong>villas construites dans les années 80 et 90</strong>, équipées de gouttières en aluminium qui arrivent progressivement en fin de vie. Ce matériau, très répandu à cette époque, est sensible aux chocs et aux déformations sous le poids de la neige ou des feuilles accumulées. Passé 30-40 ans d'utilisation, les profils se déforment, les joints se dégradent et les clips de fixation lâchent.
              </p>
              <p>
                L'ombrage permanent des grands chênes, hêtres et marronniers qui entourent les propriétés woluwiennes favorise également la <strong>prolifération de mousses sur les tuiles</strong>. Ces mousses, lorsqu'elles se détachent lors des pluies, forment un bouchon naturel dans les gouttières et réduisent drastiquement la capacité d'évacuation. Un démoussage régulier est donc indispensable dans cette commune.
              </p>
              <p>
                Woluwe-Saint-Pierre présente l'avantage d'une topographie plane et d'un accès facile dans ses rues résidentielles calmes, ce qui facilite nos interventions. Nous pouvons nous garer et travailler dans de bonnes conditions dans l'ensemble de la commune.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes spécifiques */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Problèmes fréquents à Woluwe-Saint-Pierre
            </h2>
            <p className="text-gray-600">Les situations que nous rencontrons le plus souvent dans cette commune</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Feuilles du parc de Woluwe",
                desc: "Le parc de Woluwe abrite des chênes, hêtres et marronniers dont les feuilles envahissent les gouttières des propriétés riveraines chaque automne sur plusieurs semaines.",
              },
              {
                icon: <AlertTriangle size={28} className="text-[#F97316]" />,
                bg: "bg-orange-100",
                title: "Aluminium déformé",
                desc: "Les gouttières en aluminium des années 80-90 se déforment sous le poids des feuilles et de la neige. Les profils écrasés ne permettent plus un bon écoulement et retiennent l'eau.",
              },
              {
                icon: <Leaf size={28} className="text-yellow-700" />,
                bg: "bg-yellow-100",
                title: "Mousses sur tuiles",
                desc: "L'ombrage persistant des grands arbres crée des conditions idéales pour les mousses. Sans démoussage régulier, elles colonisent toute la surface de la toiture en 2-3 ans.",
              },
              {
                icon: <Droplets size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Descentes obstruées",
                desc: "Les descentes pluviales des villas woluwiennes se bouchent régulièrement avec les composts de feuilles. Un nettoyage de la gouttière sans contrôle des descentes ne résout que partiellement le problème.",
              },
              {
                icon: <Wrench size={28} className="text-purple-600" />,
                bg: "bg-purple-100",
                title: "Clips et crochets lâches",
                desc: "Les crochets de fixation des gouttières en aluminium se dessèchent et lâchent avec le temps. Une gouttière mal fixée s'affaisse et crée des zones de rétention d'eau problématiques.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Entretien préventif annuel",
                desc: "Pour les propriétés situées à proximité du parc, nous proposons des contrats d'entretien annuels incluant deux visites systématiques et une vérification complète du système d'évacuation.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`${item.bg} p-3 rounded-xl w-fit mb-4`}>{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Nos prestations</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Woluwe-Saint-Pierre</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Toutes nos interventions adaptées aux villas résidentielles de Woluwe-Saint-Pierre</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.href} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`${s.bg} p-3 rounded-xl w-fit mb-4`}>{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.href} className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1">
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Woluwe-Saint-Pierre</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-14 bg-[#1A4731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Devis gratuit pour votre villa à Woluwe-Saint-Pierre
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contactez-nous pour planifier le nettoyage de vos gouttières. Accès facile dans toute la commune, interventions soignées et rapport d'état fourni après chaque visite.
              </p>
              <div className="space-y-3 mb-8">
                {["Devis entièrement gratuit", "Intervention sous 48h", "Aluminium, zinc, PVC — tous matériaux", "Contrats d'entretien annuels disponibles"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#F97316]" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-white font-semibold mb-1">Appel direct</p>
                <a href="tel:0477234187" className="flex items-center gap-2 text-[#F97316] font-bold text-xl hover:text-orange-400 transition-colors">
                  <Phone size={24} />0477 23 41 87
                </a>
                <p className="text-gray-400 text-xs mt-1">Lun–Ven 7h30–18h | Sam 8h–14h | Urgences 7j/7</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Woluwe-Saint-Pierre</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Zones voisines */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Communes voisines desservies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
              { name: "Auderghem", slug: "auderghem" },
              { name: "Etterbeek", slug: "etterbeek" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/communes/${c.slug}`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-[#1A4731] hover:text-white text-gray-700 border border-gray-200 hover:border-[#1A4731] rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
              >
                <MapPin size={14} className="text-[#F97316]" />
                Gouttières {c.name}
                <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
