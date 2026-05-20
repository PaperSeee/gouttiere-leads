import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Saint-Josse-ten-Noode — Immeubles Denses | 0477 23 41 87",
  description: "Nettoyage gouttières à Saint-Josse-ten-Noode : immeubles denses, accès hauteur, toitures plates. Devis gratuit, intervention rapide. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/saint-josse-ten-noode" },
}

export default function SaintJossePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Saint-Josse-ten-Noode" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Saint-Josse-ten-Noode · Centre-ville dense</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Saint-Josse-ten-Noode</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                La commune la plus densément peuplée de Belgique. Son bâti urbain
                très compact — immeubles, maisons de rapport — présente des défis
                d&apos;accès uniques pour l&apos;entretien des gouttières.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:0477234187" className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-md shadow-orange-100">
                  <Phone size={18} />0477 23 41 87
                </a>
                <a href="#devis" className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#1A4731] text-gray-700 hover:text-[#1A4731] font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  Devis gratuit <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="lg:w-72 bg-[#1A4731] text-white rounded-2xl p-6 flex-shrink-0 w-full">
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Saint-Josse en chiffres</p>
              <div className="space-y-4">
                {[
                  { val: "R+4/R+5", label: "hauteur courante", detail: "accès toiture technique" },
                  { val: "Dense++", label: "la plus dense de Belgique", detail: "peu d'arbres mais beaucoup d'accès" },
                  { val: "1×/an", label: "nettoyage recommandé", detail: "moins de végétation, mais sédiments" },
                ].map((s) => (
                  <div key={s.label} className="border-b border-white/20 pb-4 last:border-0 last:pb-0">
                    <p className="text-2xl font-extrabold text-[#F97316]">{s.val}</p>
                    <p className="font-semibold text-sm">{s.label}</p>
                    <p className="text-green-300 text-xs mt-0.5">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Le défi saint-jossois</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Immeubles en hauteur, accès techniques</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Saint-Josse-ten-Noode est la commune la plus densément peuplée de Belgique.
                  Son bâti est quasi exclusivement constitué d&apos;<strong>immeubles de rapport</strong>
                  de 4 à 6 étages construits entre 1900 et 1970. Les espaces verts y sont rares,
                  et donc les gouttières accumulent surtout des sédiments urbains et de la poussière
                  plutôt que des feuilles.
                </p>
                <p>
                  La principale difficulté à Saint-Josse est l&apos;<strong>accès aux toitures</strong>.
                  Les immeubles n&apos;ont pas toujours de trappe d&apos;accès facile, et les gouttières
                  de façade à plusieurs mètres du sol nécessitent un équipement spécifique — échelles
                  professionnelles, perches télescopiques, ou dans certains cas une nacelle élévatrice.
                </p>
                <p>
                  Les <strong>toitures plates</strong> ou en terrasse de nombreux immeubles de
                  Saint-Josse ont des systèmes d&apos;évacuation internes (gargouilles) qui se bouchent
                  facilement avec les sédiments et peuvent provoquer des infiltrations importantes
                  si elles ne sont pas entretenues régulièrement.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-1cf5c04a39d4?w=700&q=80"
                alt="Nettoyage gouttières Saint-Josse-ten-Noode immeuble Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Toitures plates gargouilles", bg: "bg-red-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Accès hauteur R+4/R+5", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Sédiments urbains denses", bg: "bg-orange-50" },
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Immeubles rapport collectifs", bg: "bg-green-50" },
                ].map((p) => (
                  <div key={p.text} className={`${p.bg} rounded-xl p-3 flex items-center gap-2`}>
                    {p.icon}<span className="text-sm font-medium text-gray-800">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Saint-Josse-ten-Noode</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage immeubles en hauteur", desc: "Intervention adaptée aux immeubles R+4 et R+5. Rapport d'état complet pour le syndic ou propriétaire. Accès toiture évalué en amont.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage gargouilles urgence", desc: "Gargouille bouchée sur toiture plate ? L'eau s'accumule et infiltre en quelques heures. On intervient 7j/7 en urgence.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Réparation systèmes collectifs", desc: "Remplacement de sections de gouttières ou de descentes sur immeubles. Coordination avec le syndic et rapport pour la copropriété.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Entretien toitures terrasses", desc: "Nettoyage et traitement des toitures plates ou terrasses : évacuation des sédiments, démoussage des acrotères, test des gargouilles.", price: "devis gratuit", tag: null },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="flex items-start gap-5 p-5 hover:bg-gray-50 transition-colors group">
                <div className="bg-gray-100 group-hover:bg-white p-3 rounded-xl flex-shrink-0 transition-colors">{s.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#1A4731] transition-colors">{s.title}</h3>
                    {s.tag && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">{s.tag}</span>}
                  </div>
                  <p className="text-gray-500 text-sm leading-snug">{s.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-xs font-semibold text-[#F97316] bg-orange-50 px-2 py-1 rounded-lg">{s.price}</span>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-[#F97316] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Saint-Josse-ten-Noode</h2>
          <div className="space-y-5">
            {[
              { q: "Comment accédez-vous aux gouttières d'un immeuble de 5 étages ?", a: "Selon la configuration : trappe de toit interne (la plus simple), accès par l'immeuble voisin si accord possible, ou nacelle élévatrice pour les façades sans accès interne. On évalue l'accessibilité avant de donner un devis — l'accès est parfois le facteur de coût le plus important." },
              { q: "Notre gargouille de toiture plate est bouchée — est-ce urgent ?", a: "Très urgent, oui. Une gargouille bouchée sur toiture plate peut provoquer une accumulation d'eau qui infiltre l'étanchéité et cause des dégâts majeurs à l'immeuble sous-jacent en quelques heures. C'est une intervention d'urgence prioritaire." },
              { q: "Le syndic doit-il donner son accord avant votre intervention ?", a: "Pour les parties communes d'un immeuble, oui — il faut l'accord du syndic ou d'une assemblée générale pour les travaux importants. On peut vous fournir un devis formel et un rapport d'état préalable pour faciliter la prise de décision en AG." },
              { q: "Intervenez-vous chaussée de Haecht et rue Royale Sainte-Marie ?", a: "Oui, dans toute la commune de Saint-Josse, y compris les axes principaux et les rues intérieures. La densité du bâti demande parfois une logistique particulière pour le stationnement du matériel, mais on s'adapte." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <p className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  {faq.q}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="devis" className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Saint-Josse-ten-Noode</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Schaerbeek", slug: "schaerbeek" }, { name: "Etterbeek", slug: "etterbeek" }, { name: "Bruxelles-Ville", slug: "bruxelles" }].map((c) => (
              <Link key={c.slug} href={`/communes/${c.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#1A4731] hover:text-[#1A4731] text-gray-600 rounded-lg px-3 py-2 text-sm font-medium transition-colors">
                <MapPin size={12} className="text-[#F97316]" />{c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
