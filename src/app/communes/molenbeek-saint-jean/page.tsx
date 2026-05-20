import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Molenbeek-Saint-Jean — Canal & Rénovation | 0477 23 41 87",
  description: "Nettoyage gouttières à Molenbeek-Saint-Jean : habitat dense, canal, rénovation bâti ancien. Devis gratuit, intervention rapide. 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/molenbeek-saint-jean" },
}

export default function MolenbeekSaintJeanPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Molenbeek-Saint-Jean" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Molenbeek-Saint-Jean · Canal & habitat populaire</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Molenbeek-Saint-Jean</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Commune en pleine transformation avec un bâti ancien souvent négligé.
                Les gouttières dégradées sont une source majeure de dommages dans les
                maisons de rapport en cours de rénovation à Molenbeek.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Molenbeek en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "Canal", label: "humidité côté nord", detail: "mousses renforcées" },
                  { val: "Rénov.", label: "bâti ancien prioritaire", detail: "gouttières souvent à remplacer" },
                  { val: "1×/an", label: "minimum conseillé", detail: "nettoyage automnal systématique" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Le défi molenbeekois</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Bâti dense et rénovation en cours</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Molenbeek-Saint-Jean est une commune en pleine transformation. Son bâti
                  populaire dense, construit entre 1880 et 1940, fait l&apos;objet d&apos;une vague
                  de rénovations. Dans ce contexte, les <strong>gouttières défectueuses</strong>
                  sont souvent l&apos;une des premières causes de dommages à traiter.
                </p>
                <p>
                  La partie nord de la commune, longeant le <strong>canal de Bruxelles-Charleroi</strong>,
                  cumule les effets de l&apos;humidité ambiante et d&apos;un entretien parfois
                  longtemps différé. Les gouttières y sont fréquemment obstruées, avec des
                  mousses épaisses et des dépôts de sédiments accumulés sur plusieurs années.
                </p>
                <p>
                  Les <strong>maisons de rapport</strong> à plusieurs logements sont nombreuses
                  à Molenbeek. Leurs systèmes de gouttières collectifs — souvent un seul chenal
                  pour tout le bâtiment — nécessitent un entretien rigoureux pour éviter les
                  débordements qui touchent tous les locataires simultanément.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"
                alt="Nettoyage gouttières Molenbeek-Saint-Jean Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Droplets size={18} className="text-[#1A4731]" />, text: "Canal & humidité nord", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Maisons de rapport", bg: "bg-blue-50" },
                  { icon: <Leaf size={18} className="text-[#F97316]" />, text: "Bâti 1880–1940 à rénover", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Sédiments accumulés", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Molenbeek-Saint-Jean</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage maisons de rapport", desc: "Intervention complète sur les systèmes collectifs des immeubles de rapport. Rapport d'état inclus pour le propriétaire ou gestionnaire.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Débordements actifs sur bâti ancien ? On intervient 7j/7 pour stopper rapidement les dégâts sur les façades et les intérieurs.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement bâti ancien", desc: "Pour les projets de rénovation, on intègre le remplacement des gouttières en coordination avec les autres corps de métier.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage canal & humidité", desc: "Traitement préventif adapté aux zones à forte humidité ambiante près du canal. Efficace 3 à 5 ans selon l'exposition.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Molenbeek-Saint-Jean</h2>
          <div className="space-y-5">
            {[
              { q: "On rénove notre immeuble de rapport — quand faut-il s'occuper des gouttières ?", a: "Idéalement avant les travaux de façade et de toiture. Des gouttières défectueuses peuvent ruiner une réfection de façade en quelques mois. On s'intègre dans le planning de rénovation pour coordonner avec les autres corps de métier." },
              { q: "Les gouttières de notre maison canal n'ont pas été nettoyées depuis 5 ans — que faire ?", a: "Pas de panique, mais il faut agir vite. Après 5 ans sans entretien, on trouve généralement des mousses épaisses, des dépôts de sédiments compactés et parfois des plantes installées. On peut tout traiter en une intervention avec du matériel adapté." },
              { q: "Comment s'organise le paiement pour une maison de rapport avec plusieurs propriétaires ?", a: "On établit une facture unique au nom du gestionnaire ou de la copropriété. Si nécessaire, on peut diviser la facture par unité pour faciliter la répartition des charges entre copropriétaires." },
              { q: "Intervenez-vous rue de Birmingham et rue Ransfort ?", a: "Oui, dans toute Molenbeek-Saint-Jean. On connaît bien la configuration des rues étroites et des cours intérieures de la commune. On s'adapte à chaque situation d'accès." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Molenbeek-Saint-Jean</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Anderlecht", slug: "anderlecht" }, { name: "Koekelberg", slug: "koekelberg" }, { name: "Jette", slug: "jette" }].map((c) => (
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
