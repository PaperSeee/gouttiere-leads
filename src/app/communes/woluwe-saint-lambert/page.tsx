import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Woluwe-Saint-Lambert — Villas & Appartements | 0477 23 41 87",
  description: "Nettoyage gouttières à Woluwe-Saint-Lambert : villas résidentielles, immeubles, platanes des avenues. Devis gratuit, intervention 48h. 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/woluwe-saint-lambert" },
}

export default function WoluweStLambertPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Woluwe-Saint-Lambert" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Woluwe-Saint-Lambert · Résidentiel & commerces</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Woluwe-Saint-Lambert</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Commune mixte entre quartiers résidentiels avec villas et zones commerciales.
                Les platanes des grandes avenues génèrent des obstructions saisonnières
                importantes dans les gouttières.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">WSL en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "Mixte", label: "villas + immeubles", detail: "deux types d'interventions distincts" },
                  { val: "Platanes", label: "grandes avenues", detail: "feuilles larges = bouchons rapides" },
                  { val: "1–2×/an", label: "selon exposition", detail: "villas arborées vs centre-ville" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Ce qui distingue WSL</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Une commune aux deux visages</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Woluwe-Saint-Lambert présente deux réalités bien distinctes : les
                  <strong> quartiers résidentiels calmes</strong> avec villas des années 60–70 —
                  notamment autour du Chant d&apos;Oiseau — et les zones plus urbaines et
                  commerciales autour de l&apos;avenue de Tervueren.
                </p>
                <p>
                  Les <strong>grandes avenues bordées de platanes</strong> génèrent des volumes
                  importants de feuilles en automne. Les platanes sont particulièrement
                  problématiques car leurs feuilles grandes et larges forment des bouchons
                  compacts qui obstruent rapidement même les chenaux de grande section.
                </p>
                <p>
                  La commune accueille également de nombreux <strong>immeubles à appartements</strong>
                  dans sa partie commerciale. Ces bâtiments ont souvent des systèmes d&apos;évacuation
                  pluviale complexes, avec plusieurs descentes et des gouttières de toiture
                  collective peu entretenues.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"
                alt="Nettoyage gouttières Woluwe-Saint-Lambert Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Platanes & grandes feuilles", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Villas & immeubles mixtes", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Descentes collectives", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Obstructions saisonnières", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Woluwe-Saint-Lambert</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage villas & immeubles", desc: "Nettoyage adapté à chaque type de bien : villa individuelle avec devis standard ou immeuble collectif avec rapport pour le syndic.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage platanes urgence", desc: "Les feuilles de platanes forment des bouchons tenaces. Intervention 7j/7 pour les débordements actifs à Woluwe-Saint-Lambert.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Réparation & remplacement", desc: "Gouttières vieillissantes des villas des années 60–70 ou systèmes collectifs d'immeubles. Devis sur mesure selon l'état et les matériaux.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage toitures", desc: "Traitement anti-mousse préventif après nettoyage. Protège votre toiture et prolonge la durée de vie des gouttières.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Woluwe-Saint-Lambert</h2>
          <div className="space-y-5">
            {[
              { q: "Intervenez-vous aussi pour les immeubles à appartements ?", a: "Oui, avec un devis formel pour le syndic ou les copropriétaires. On établit un rapport d'état complet et peut revenir annuellement selon un planning préétabli pour assurer la continuité de l'entretien." },
              { q: "Les platanes de l'avenue de Tervueren — quelle fréquence de nettoyage ?", a: "Pour les propriétés directement bordées de platanes, deux nettoyages annuels sont recommandés : novembre (chute des grandes feuilles) et mai (débris printaniers). Hors alignement de platanes, un passage automnal suffit généralement." },
              { q: "Quelle est la différence entre un nettoyage villa et un nettoyage immeuble ?", a: "Pour une villa, on intervient depuis l'extérieur avec des échelles et on nettoie l'ensemble du système. Pour un immeuble, on accède souvent à la toiture et on nettoie les gouttières communes. La facturation immeuble inclut un rapport d'état pour le dossier de copropriété." },
              { q: "Nos gouttières en PVC des années 70 sont-elles à remplacer ?", a: "Le PVC des années 70 a 50 ans — au-delà de la durée de vie standard de 25–30 ans. Si elles sont cassantes, fissurées ou si les fixations cèdent, un remplacement s'impose. On peut aussi remplacer uniquement les tronçons défaillants pour réduire le coût." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Woluwe-Saint-Lambert</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" }, { name: "Etterbeek", slug: "etterbeek" }, { name: "Schaerbeek", slug: "schaerbeek" }].map((c) => (
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
