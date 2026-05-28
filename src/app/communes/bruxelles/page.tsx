import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Bruxelles-Ville — Pentagone & Immeubles | 0477 23 41 87",
  description: "Nettoyage gouttières à Bruxelles-Ville : Pentagone, Laeken, Neder-Over-Heembeek, immeubles et maisons de maître. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/bruxelles" },
  keywords: ["nettoyage gouttières Bruxelles", "débouchage gouttières Bruxelles", "gouttières bouchées Bruxelles", "prix nettoyage gouttières Bruxelles"],
  openGraph: {
    title: "Nettoyage Gouttières Bruxelles — Devis Gratuit | 0477 23 41 87",
    description: "Expert nettoyage gouttières à Bruxelles. Débouchage urgent, réparation, démoussage. Devis gratuit, intervention rapide.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes/bruxelles",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Bruxelles" }],
  },
}

export default function BruxellesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Bruxelles-Ville" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Bruxelles-Ville · Pentagone, Laeken & extensions</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Bruxelles-Ville</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                La commune la plus étendue de la Région, avec des réalités très différentes :
                centre historique dense, quartier de Laeken résidentiel, et zones vertes
                vers Neder-Over-Heembeek et Haren.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Bruxelles-Ville en chiffres</p>
              <div className="space-y-4">
                {[
                  { val: "19 km²", label: "la plus grande commune", detail: "3 zones aux besoins distincts" },
                  { val: "Laeken", label: "villas & parcs royaux", detail: "grands arbres, feuilles abondantes" },
                  { val: "1–2×/an", label: "selon le quartier", detail: "centre vs zone verte" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Trois réalités, trois approches</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Centre, Laeken et zones vertes</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Le <strong>Pentagone</strong> — le centre historique de Bruxelles — concentre
                  un bâti dense et ancien avec des immeubles commerciaux et résidentiels.
                  Les gouttières y sont souvent collectives, peu accessibles, et parfois
                  les seules prises d&apos;eau de pluie de bâtiments entiers.
                </p>
                <p>
                  Le <strong>quartier de Laeken</strong> offre un tout autre visage : villas
                  résidentielles entourées de jardins, proximité des parcs royaux et du Laeken
                  arboré. Les érables et marronniers du quartier génèrent des volumes importants
                  de samares et de feuilles qui obstruent les gouttières en automne.
                </p>
                <p>
                  Les extensions nord — <strong>Neder-Over-Heembeek et Haren</strong> — sont
                  des zones plus semi-rurales avec des maisons quatre façades et des propriétés
                  entourées de verdure. Ces propriétés ont généralement des gouttières plus
                  accessibles mais sont exposées à une végétation abondante.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=700&q=80"
                alt="Nettoyage gouttières Bruxelles-Ville Laeken"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Érables & marronniers Laeken", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Immeubles centre collectifs", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Villas 4 façades au nord", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Accès toitures complexes", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Bruxelles-Ville</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage centre & Laeken", desc: "Intervention adaptée à chaque quartier : outils spéciaux pour les toits inaccessibles du centre, nettoyage complet pour les villas de Laeken.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Pour les bâtiments du centre où un débordement peut provoquer des dégâts sur plusieurs étages. Intervention le jour même 7j/7.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement & installation", desc: "Pour les immeubles du centre ou les villas de Laeken. Devis sur mesure selon le type de bâtiment, les matériaux et l'accessibilité.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage zones arborées", desc: "Particulièrement utile pour les propriétés de Laeken et Neder-Over-Heembeek entourées de végétation. Traitement préventif 3–5 ans.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Bruxelles-Ville</h2>
          <div className="space-y-5">
            {[
              { q: "Comment accédez-vous aux toits des immeubles du centre ?", a: "Selon la configuration : trappe de toit intérieure, accès par un immeuble voisin, ou nacelle pour les immeubles sans accès interne. On évalue gratuitement l'accessibilité avant toute intervention pour donner un devis précis." },
              { q: "Notre villa à Laeken est proche du parc royal — quelle fréquence ?", a: "Deux passages annuels sont recommandés pour les propriétés proches des grands espaces verts : novembre après la chute des feuilles et mai après la libération des samares d'érables et des pollens printaniers." },
              { q: "Intervenez-vous à Neder-Over-Heembeek et Haren ?", a: "Oui, dans toute la commune de Bruxelles-Ville, y compris les extensions nord. Ces zones ont moins de contraintes d'accès mais des propriétés souvent plus exposées à la végétation. Devis gratuit sur place." },
              { q: "L'immeuble de notre syndic n'a jamais eu de nettoyage de gouttières — par où commencer ?", a: "On commence par un diagnostic complet : état des gouttières, descentes, évacuations. Ensuite on propose un programme de mise à niveau puis un planning d'entretien annuel. On fournit un rapport formel pour le dossier de copropriété." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Bruxelles-Ville</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" }, { name: "Schaerbeek", slug: "schaerbeek" }, { name: "Anderlecht", slug: "anderlecht" }].map((c) => (
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
