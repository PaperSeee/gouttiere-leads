import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Evere — OTAN & Quartiers Résidentiels | 0477 23 41 87",
  description: "Nettoyage gouttières à Evere : quartiers résidentiels OTAN, maisons des années 60, peupliers. Devis gratuit, intervention rapide. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/evere" },
}

export default function EverePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Evere" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Evere · Nord-est, quartiers résidentiels & OTAN</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Evere</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Evere mélange des quartiers résidentiels tranquilles et des zones d&apos;activité
                importantes. Ses maisons des années 50 à 70 ont des gouttières en aluminium
                qui nécessitent un contrôle régulier.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Evere en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "1950–70", label: "bâti résidentiel", detail: "aluminium en fin de vie" },
                  { val: "Peupliers", label: "cotonneux au printemps", detail: "bouchons dans les descentes" },
                  { val: "1×/an", label: "nettoyage automnal", detail: "aussi contrôle printemps si peupliers" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Ce qui distingue Evere</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Peupliers cotonneux et aluminium vieillissant</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Evere est une commune du nord-est de Bruxelles qui associe des <strong>quartiers
                  résidentiels calmes</strong> — notamment autour du parc Walckiers — et des zones
                  d&apos;activité importantes avec la présence de l&apos;OTAN et du Ring.
                </p>
                <p>
                  Une spécificité locale : les <strong>peupliers</strong> plantés le long de
                  certaines rues d&apos;Evere. En mai-juin, ces arbres libèrent une quantité
                  impressionnante de coton (les aigrettes de leurs graines) qui pénètre dans les
                  gouttières et les descentes où il s&apos;agglomère en bouchons extrêmement denses.
                  Un nettoyage de juin peut s&apos;avérer indispensable pour les propriétés exposées.
                </p>
                <p>
                  Le bâti résidentiel d&apos;Evere, principalement des <strong>maisons semi-détachées
                  des années 50 à 70</strong>, présente des gouttières en aluminium ou en PVC
                  qui arrivent souvent en bout de course. Les crochets de fixation sont les premiers
                  éléments à défaillir sur ce type d&apos;installation vieillissante.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1509516370-b196ff45bfa1?w=700&q=80"
                alt="Nettoyage gouttières Evere Bruxelles quartier résidentiel"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Peupliers cotonneux juin", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Aluminium 50–70 vieillissant", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Semi-détachés avec jardins", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Crochets fixation défaillants", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Evere</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage maisons résidentielles", desc: "Nettoyage automnal complet pour les maisons d'Evere. Pour les propriétés avec peupliers, on recommande aussi un passage en juin.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage coton peupliers", desc: "Le coton de peupliers bouche en quelques jours les descentes en plein été. On intervient 7j/7 pour déboucher rapidement.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement crochets & gouttières", desc: "Remplacement des crochets défaillants ou des gouttières en fin de vie. Devis détaillé par section pour maîtriser votre budget.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage après intervention", desc: "Traitement préventif pour protéger la couverture et les nouvelles gouttières. Efficace 3 à 5 ans selon l'exposition.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Evere</h2>
          <div className="space-y-5">
            {[
              { q: "Le coton de peupliers est-il vraiment problématique pour les gouttières ?", a: "C'est l'un des phénomènes les plus surprenants. En mai-juin, les peupliers libèrent leurs aigrettes cotonneuses qui s'accumulent dans les gouttières et descentes en quelques jours. Humidifiées par la pluie, elles se compactent et bloquent complètement l'écoulement. Un nettoyage de juin est indispensable pour les propriétés exposées." },
              { q: "Comment savoir si mon crochet de fixation est défaillant ?", a: "Le signe le plus visible est une gouttière qui 'penche' ou s'éloigne de la façade. Vous pouvez aussi vérifier en regardant si l'eau s'accumule dans un recoin plutôt que de s'écouler vers la descente. Un crochet qui cède peut provoquer l'arrachage d'une section entière lors d'une forte pluie." },
              { q: "Intervenez-vous avenue de l'Héliport et chaussée de Louvain ?", a: "Oui, dans toute la commune d'Evere, y compris les axes principaux et les rues résidentielles calmes autour du parc Walckiers. Délai habituel : 48 à 72 heures après contact." },
              { q: "Peut-on remplacer seulement les crochets sans changer toute la gouttière ?", a: "Oui, si la gouttière est en bon état, on peut remplacer uniquement les crochets défaillants. C'est bien moins coûteux qu'un remplacement complet. On évalue ce qui peut être conservé lors du diagnostic gratuit." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Evere</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Schaerbeek", slug: "schaerbeek" }, { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" }, { name: "Bruxelles-Ville", slug: "bruxelles" }].map((c) => (
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
