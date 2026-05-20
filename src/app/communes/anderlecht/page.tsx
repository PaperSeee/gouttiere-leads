import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Anderlecht — Maisons Ouvrières & Canaux | 0477 23 41 87",
  description: "Nettoyage gouttières à Anderlecht : maisons ouvrières brique, canal de Charleroi, humidité canal. Devis gratuit, intervention rapide. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/anderlecht" },
}

export default function AnderlechtPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Anderlecht" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Anderlecht · Canal de Charleroi & brique rouge</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Anderlecht</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Anderlecht concentre un habitat ouvrier dense et des zones industrielles
                rénovées le long du canal. L&apos;humidité ambiante du canal de Charleroi
                accélère la formation de mousses et la dégradation des gouttières.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Anderlecht en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "Canal", label: "humidité ambiante élevée", detail: "mousses accélérées près de l'eau" },
                  { val: "1900–1950", label: "bâti ouvrier dominant", detail: "zinc et ardoises d'époque" },
                  { val: "1–2×/an", label: "selon proximité canal", detail: "plus fréquent en zone humide" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Le défi anderlechtois</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Canal, brique et mousses tenaces</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Anderlecht est une commune aux multiples visages : quartiers populaires denses
                  autour de la <strong>Grand-Place d&apos;Anderlecht</strong>, zones industrielles
                  en reconversion le long du canal, et poches résidentielles plus calmes vers
                  Cureghem et Neerpede.
                </p>
                <p>
                  La proximité du <strong>canal de Charleroi-Bruxelles</strong> crée une humidité
                  ambiante permanente dans les quartiers riverains. Cette humidité favorise le
                  développement accéléré des mousses dans les gouttières, qui peuvent réduire
                  leur capacité de moitié en moins de deux ans.
                </p>
                <p>
                  Le bâti typique d&apos;Anderlecht — <strong>maisons ouvrières en brique rouge</strong>
                  des années 1900 à 1950 — possède souvent des gouttières en zinc dont certaines
                  sections sont encore récupérables. Une inspection permet de cibler les remplacements
                  ponctuels et d&apos;éviter un remplacement complet coûteux.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1509516370-b196ff45bfa1?w=700&q=80"
                alt="Nettoyage gouttières Anderlecht Bruxelles canal"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Droplets size={18} className="text-[#1A4731]" />, text: "Humidité canal de Charleroi", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Zinc ouvrier 1900–1950", bg: "bg-blue-50" },
                  { icon: <Leaf size={18} className="text-[#F97316]" />, text: "Mousses accélérées", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Façades brique sensibles", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Anderlecht</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage maisons ouvrières", desc: "Nettoyage adapté aux maisons mitoyennes d'Anderlecht. Accès cours arrière, façade avant et arrière traitées en une intervention.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence canal", desc: "Les zones proches du canal accumulent rapidement les débris. Intervention 7j/7 pour protéger vos façades en brique des débordements.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Réparation zinc historique", desc: "Diagnostic et réparation ciblée du zinc d'époque. Si l'état le permet, on prolonge la vie des gouttières existantes par soudure.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage anti-humidité", desc: "En zone canal, le démoussage est particulièrement critique. Traitement préventif longue durée pour contrer l'humidité ambiante.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Anderlecht</h2>
          <div className="space-y-5">
            {[
              { q: "L'humidité du canal affecte-t-elle vraiment les gouttières ?", a: "Oui, significativement. Les propriétés dans un rayon de 300 mètres du canal de Charleroi connaissent une croissance des mousses 30 à 40% plus rapide. Un démoussage préventif annuel est recommandé plutôt qu'un nettoyage curatif tous les 3 ans." },
              { q: "Le zinc de nos maisons des années 40 est-il encore récupérable ?", a: "Dans la moitié des cas, oui. Un zinc des années 40 bien conservé peut encore durer 15 à 20 ans si les profils sont droits et les soudures tiennent. On fait un diagnostic gratuit avant toute décision de remplacement." },
              { q: "Intervenez-vous dans les quartiers Cureghem et Neerpede ?", a: "Oui, dans toute la commune d'Anderlecht sans exception. On connaît bien les particularités d'accès du bâti ouvrier local — cours étroites, passages latéraux, mitoyenneté complexe." },
              { q: "Peut-on coordonner le nettoyage avec les voisins mitoyens ?", a: "Absolument, c'est même conseillé. On propose un tarif réduit pour les interventions groupées sur deux maisons mitoyennes le même jour. Cela permet aussi de traiter les descentes partagées en une seule fois." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Anderlecht</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" }, { name: "Forest", slug: "forest" }, { name: "Saint-Gilles", slug: "saint-gilles" }].map((c) => (
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
