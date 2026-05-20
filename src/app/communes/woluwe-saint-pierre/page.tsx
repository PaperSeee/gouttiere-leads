import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Woluwe-Saint-Pierre — Grandes Villas & Parcs | 0477 23 41 87",
  description: "Nettoyage gouttières à Woluwe-Saint-Pierre : grandes villas, parcs Malou & Parmentier, érables et marronniers. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/woluwe-saint-pierre" },
}

export default function WoluweStPierrePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Woluwe-Saint-Pierre" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Woluwe-Saint-Pierre · Parcs Malou & Parmentier</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Woluwe-Saint-Pierre</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                L&apos;une des communes les plus résidentielles de Bruxelles avec de grandes villas.
                Les chênes du parc Malou et les érables du parc Parmentier imposent un entretien
                régulier des gouttières.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">WSP en chiffres</p>
              <div className="space-y-4">
                {[
                  { val: "Parcs Malou", label: "& Parmentier", detail: "chênes, érables, marronniers" },
                  { val: "60–100m", label: "de gouttières", detail: "sur les plus grandes villas" },
                  { val: "2×/an", label: "minimum conseillé", detail: "printemps + automne" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Pourquoi WSP est exigeante</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Grandes villas, grands linéaires</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Woluwe-Saint-Pierre est caractérisée par de <strong>grandes villas avec jardins</strong>
                  construites dans les années 50 à 80. Ces propriétés ont des linéaires de gouttières
                  importants — parfois 60 à 100 mètres — et leurs jardins arborés génèrent des
                  volumes considérables de déchets végétaux.
                </p>
                <p>
                  La proximité du <strong>parc Malou et du parc Parmentier</strong>, avec leurs
                  chênes centenaires, érables et marronniers, génère des apports de feuilles et
                  de graines ailées en automne. Les samares d&apos;érables sont particulièrement
                  problématiques car elles forment des bouchons compacts dans les descentes.
                </p>
                <p>
                  Le <strong>bois de Woluwe</strong> qui prolonge la Forêt de Soignes impose,
                  comme à Auderghem, un nettoyage post-hivernal pour les propriétés les plus
                  exposées aux hêtres tardifs.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                alt="Nettoyage gouttières grande villa Woluwe-Saint-Pierre"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Samares d'érables", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Grands linéaires 60–100m", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Bois Woluwe & hêtres", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Marronniers parc Malou", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Woluwe-Saint-Pierre</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage grandes villas", desc: "Devis sur mesure pour grands linéaires. Equipe de 2 techniciens si nécessaire. Nettoyage gouttières + descentes + rapport d'état complet inclus.", price: "dès 80€", tag: "Sur mesure" },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage samares & urgence", desc: "Les samares d'érables bouchent les descentes même hors saison automnale. On intervient 7j/7 pour désobstruer rapidement.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement grandes propriétés", desc: "Devis détaillé par section pour les grandes villas. Zinc, aluminium ou PVC selon les matériaux existants et l'architecture de la propriété.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage grandes toitures", desc: "Les grandes toitures des villas de WSP accumulent les mousses. Démoussage mécanique et traitement préventif longue durée (3–5 ans).", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Woluwe-Saint-Pierre</h2>
          <div className="space-y-5">
            {[
              { q: "Les samares d'érables causent-elles vraiment des bouchons ?", a: "Oui, c'est l'un des débris végétaux les plus problématiques. Les samares sont assez petites pour pénétrer dans les descentes et y former des bouchons compacts. Elles tombent au printemps puis en automne — deux passages annuels sont recommandés pour les propriétés proches des parcs." },
              { q: "Notre villa a plus de 80 mètres de gouttières. Quel tarif ?", a: "Pour les grandes propriétés, on établit un devis sur mesure tenant compte du linéaire exact, de la hauteur, des matériaux et de l'accessibilité. Deux techniciens pour les grandes interventions. Appelez pour un diagnostic gratuit." },
              { q: "Intervenez-vous avenue de Tervueren et avenue de Broqueville ?", a: "Oui, dans toute Woluwe-Saint-Pierre, y compris les grandes avenues résidentielles. On connaît bien les propriétés de cette commune et leurs spécificités d'accès." },
              { q: "Faut-il aussi nettoyer au printemps à WSP ?", a: "Pour les propriétés proches des parcs, oui. Les marronniers du parc Malou et les érables libèrent des pollens, bourgeons et graines en mai qui s'accumulent dans les gouttières. Un passage de printemps complète utilement le nettoyage automnal." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Woluwe-Saint-Pierre</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Auderghem", slug: "auderghem" }, { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" }, { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" }].map((c) => (
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
