import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Schaerbeek — Maisons Belle Époque | 0477 23 41 87",
  description: "Nettoyage gouttières à Schaerbeek : maisons Belle Époque, zinc historique, tilleuls. Devis gratuit, intervention rapide. 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/schaerbeek" },
}

export default function SchaerbeekPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Schaerbeek" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Commune de Schaerbeek · Belle Époque</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Schaerbeek</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Schaerbeek concentre un patrimoine Belle Époque remarquable avec des façades
                ornementales et des gouttières en zinc historiques. Intervention soignée,
                respectueuse de l&apos;architecture ancienne.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Schaerbeek en chiffres</p>
              <div className="space-y-4">
                {[
                  { val: "1895–1914", label: "époque du bâti dense", detail: "zinc et ardoises d'origine" },
                  { val: "Tilleuls", label: "arbres des grandes avenues", detail: "graines collantes bouchent tout" },
                  { val: "2×/an", label: "nettoyages recommandés", detail: "printemps + automne" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Le défi Schaerbeek</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Belle Époque : un patrimoine à préserver</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Schaerbeek abrite certaines des plus belles avenues bruxelloises de style Belle Époque,
                  notamment l&apos;<strong>avenue Louis Bertrand</strong> et l&apos;avenue Rogier. Les maisons
                  construites entre 1895 et 1914 possèdent des détails architecturaux ornementaux —
                  y compris des gouttières et descentes en zinc travaillées — qui méritent un
                  traitement avec soin et expertise.
                </p>
                <p>
                  La commune est traversée par de grandes avenues bordées de <strong>tilleuls</strong>.
                  Ces arbres produisent au printemps des bourgeons collants et des graines ailées
                  qui forment des bouchons particulièrement tenaces dans les gouttières.
                  Un nettoyage de printemps est souvent aussi nécessaire que celui d&apos;automne.
                </p>
                <p>
                  La densité du bâti schaerbeekois — quasi 100% mitoyen — implique que les
                  gouttières de façade arrière sont souvent difficiles d&apos;accès. Notre équipe
                  est équipée pour intervenir en toute sécurité même dans les cours étroites.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                alt="Nettoyage gouttières Schaerbeek Belle Époque Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Graines tilleuls collantes", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Zinc Belle Époque ornemental", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Cours arrière étroites", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "2 nettoyages/an conseillés", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Schaerbeek</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage façades & cours arrière", desc: "Nettoyage complet façade avant et arrière. Matériel adapté aux cours étroites de Schaerbeek. Deux nettoyages annuels conseillés pour les avenues avec tilleuls.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Graines collantes de tilleuls, bouchons par fortes pluies ? On intervient en urgence le jour même lors des épisodes intenses à Schaerbeek.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Restauration zinc Belle Époque", desc: "Réparation délicate du zinc ornemental des maisons historiques. On préserve les détails architecturaux. Remplacement si nécessaire avec matériaux assortis.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage toitures ardoises", desc: "Toitures à forte pente avec ardoises : traitement anti-mousse préventif après nettoyage pour limiter la recolonisation.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Schaerbeek</h2>
          <div className="space-y-5">
            {[
              { q: "Les tilleuls de l'avenue Rogier bouchent vraiment les gouttières ?", a: "Oui, les tilleuls sont parmi les arbres les plus problématiques. Leurs bourgeons collants et petites fleurs forment des masses compactes qui obstruent rapidement au printemps. En automne, leurs feuilles s'accumulent. Deux nettoyages annuels (mai et novembre) sont recommandés." },
              { q: "Comment accédez-vous aux gouttières de façade arrière ?", a: "Via la cour intérieure. Nos échelles légères passent par la porte de cave ou le couloir latéral dans la plupart des maisons mitoyennes de Schaerbeek. Pour les cours vraiment exiguës, on utilise des perches télescopiques depuis le sol." },
              { q: "Le zinc de 1900 — est-ce encore récupérable ?", a: "Du zinc bien conservé de 1900 peut encore durer 10–20 ans. Si l'installation est étanche et bien fixée, une soudure et reprise des joints peut suffire. Un diagnostic gratuit permet de trancher sur la meilleure approche." },
              { q: "Êtes-vous habitués au bâti schaerbeekois ?", a: "Oui, on intervient régulièrement à Schaerbeek dans les grandes avenues et les rues résidentielles du quartier de la Maison des Arts. On connaît bien les contraintes d'accès et les spécificités architecturales locales." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Schaerbeek</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Etterbeek", slug: "etterbeek" }, { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" }, { name: "Forest", slug: "forest" }].map((c) => (
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
