import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Woluwe-Saint-Lambert — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Woluwe-Saint-Lambert : copropriétés, zinc années 70, bâtiments mixtes. Entretien collectif. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/woluwe-saint-lambert" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "À Woluwe-Saint-Lambert, les gouttières communes des copropriétés nécessitent une attention particulière. Nous intervenons sur l'ensemble du système d'évacuation des immeubles résidentiels et mixtes.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "Dans les copropriétés, un débordement peut toucher plusieurs appartements simultanément. Nous intervenons en urgence 7j/7 pour déboucher rapidement les descentes obstruées avant que les dégâts ne s'étendent.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "Le zinc vieillissant des années 70 des immeubles woluweens est souvent criblé de micro-perforations. Nous établissons des devis clairs pour les syndics incluant remplacement partiel ou complet du système.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "Les toitures des immeubles à Woluwe-Saint-Lambert accumulent mousses et lichens sur leurs surfaces exposées. Notre démoussage préventif prolonge la durée de vie des matériaux de toiture.",
  },
]

const faqs = [
  {
    q: "Comment gérez-vous les interventions en copropriété à Woluwe-Saint-Lambert ?",
    a: "Pour les copropriétés, nous travaillons directement avec le syndic ou le gestionnaire de l'immeuble. Nous fournissons un devis détaillé par lot si nécessaire, planifions l'intervention pour minimiser les nuisances, et remettons un rapport complet d'intervention à destination du syndic et des copropriétaires.",
  },
  {
    q: "Les gouttières en zinc des années 70 peuvent-elles encore être entretenues ?",
    a: "Le zinc des années 70 a 50 ans ou plus. Dans la plupart des cas, il est en fin de vie et un remplacement progressif est plus judicieux qu'une réparation. Nous établissons un diagnostic complet et pouvons planifier le remplacement en phases pour étaler le coût sur plusieurs années.",
  },
  {
    q: "À quelle fréquence faut-il intervenir sur un immeuble mixte ?",
    a: "Pour les bâtiments mixtes résidentiel-commercial, nous recommandons minimum deux interventions par an. La partie commerciale génère souvent des conditions particulières (climatiseurs, extraction, trafic intense) qui nécessitent une attention accrue.",
  },
  {
    q: "Pouvez-vous établir un contrat d'entretien pluriannuel pour notre copropriété ?",
    a: "Oui, nous proposons des contrats d'entretien annuels ou pluriannuels spécialement adaptés aux copropriétés. Ces contrats garantissent un tarif fixe, deux visites annuelles programmées, et une intervention d'urgence prioritaire en cas de problème entre les visites.",
  },
]

export default function WoluweSaintLambertPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Woluwe-Saint-Lambert" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Woluwe-Saint-Lambert</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Devis gratuit</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Copropriétés</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Woluwe-Saint-Lambert</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Woluwe-Saint-Lambert. Copropriétés, bâtiments mixtes, zinc vieillissant des années 70 : nous intervenons pour les particuliers comme pour les syndics.
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

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Pourquoi Woluwe-Saint-Lambert est particulière</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Les spécificités des gouttières à Woluwe-Saint-Lambert
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Woluwe-Saint-Lambert présente un tissu urbain très mixte, mêlant copropriétés résidentielles des années 60-70, bâtiments commerciaux et rues résidentielles plus récentes. Cette diversité se traduit par une grande variété de systèmes de gouttières, dont de nombreuses installations en <strong>zinc vieillissant datant des années 70</strong>, époque à laquelle la construction était particulièrement active dans cette commune.
              </p>
              <p>
                Les <strong>copropriétés</strong> représentent une part importante du parc immobilier woluwéen. Dans ces bâtiments, les gouttières sont des équipements communs dont l'entretien incombe à la copropriété dans son ensemble. Malheureusement, l'entretien collectif est souvent en retard : les décisions nécessitent l'accord de plusieurs propriétaires et sont parfois reportées d'une assemblée générale à l'autre. Résultat : des systèmes d'évacuation qui n'ont pas été nettoyés depuis des années et qui présentent des dégradations avancées.
              </p>
              <p>
                Les <strong>bâtiments mixtes résidentiel-commercial</strong>, nombreux le long des axes commerciaux de Woluwe-Saint-Lambert, présentent des contraintes spécifiques : intervention à des heures adaptées aux commerces, respect des accès, coordination avec plusieurs occupants. Notre équipe est habituée à ces contextes et adapte son planning en conséquence.
              </p>
              <p>
                Nous proposons des solutions sur mesure pour les syndics et gestionnaires d'immeubles : devis détaillés par bâtiment ou par lot, contrats d'entretien pluriannuels et rapports d'intervention pour les assemblées générales de copropriétaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes spécifiques */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Problèmes fréquents à Woluwe-Saint-Lambert</h2>
            <p className="text-gray-600">Les situations que nous rencontrons le plus souvent dans cette commune</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <AlertTriangle size={28} className="text-[#F97316]" />,
                bg: "bg-orange-100",
                title: "Entretien collectif en retard",
                desc: "Les décisions de maintenance en copropriété prennent du temps. Il n'est pas rare d'intervenir sur des gouttières qui n'ont pas été nettoyées depuis 5 à 10 ans, avec des accumulations impressionnantes.",
              },
              {
                icon: <Wrench size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Zinc perforé des années 70",
                desc: "Le zinc des bâtiments des années 70 atteint sa limite de durée de vie. Micro-perforations, joints défaillants et gouttières désolidarisées de leur support sont les défauts les plus fréquents.",
              },
              {
                icon: <Droplets size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Descentes communes obstruées",
                desc: "Dans les immeubles, les descentes pluviales communes drainent plusieurs étages. Un bouchon crée des surchages importantes et peut provoquer des dégâts des eaux multiples simultanément.",
              },
              {
                icon: <MapPin size={28} className="text-red-600" />,
                bg: "bg-red-100",
                title: "Coordination multi-propriétaires",
                desc: "L'intervention sur une copropriété nécessite l'accord et la coordination de plusieurs parties. Nous gérons cette complexité logistique et communiquons directement avec le syndic.",
              },
              {
                icon: <Leaf size={28} className="text-yellow-700" />,
                bg: "bg-yellow-100",
                title: "Arbres de rue proches",
                desc: "Woluwe-Saint-Lambert est dense en arbres de rue dont les feuilles se retrouvent invariablement dans les gouttières des immeubles riverains. Un nettoyage annuel minimum est indispensable.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Rapports pour AG copropriété",
                desc: "Nous fournissons des rapports d'état complets utilisables lors des assemblées générales de copropriétaires pour justifier les travaux d'entretien et prévoir le budget nécessaire.",
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Woluwe-Saint-Lambert</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Woluwe-Saint-Lambert</h2>
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
                Devis gratuit — Woluwe-Saint-Lambert
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Particulier ou syndic de copropriété ? Contactez-nous pour un devis adapté à votre situation. Nous intervenons dans toute la commune avec réactivité et professionnalisme.
              </p>
              <div className="space-y-3 mb-8">
                {["Devis gratuit particuliers et syndics", "Rapports d'état pour AG copropriété", "Contrats d'entretien pluriannuels", "Intervention urgence 7j/7"].map((item) => (
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
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Woluwe-Saint-Lambert</h3>
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
              { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
              { name: "Schaerbeek", slug: "schaerbeek" },
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
