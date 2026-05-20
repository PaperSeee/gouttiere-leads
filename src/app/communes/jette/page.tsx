import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Jette — Villas Résidentielles & Parc de Laeken | 0477 23 41 87",
  description: "Nettoyage gouttières à Jette : villas résidentielles, bouleau et charme, maisons des années 50–70. Devis gratuit, intervention rapide. 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/jette" },
}

export default function JettePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Jette" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Jette · Résidentiel calme, nord-ouest de Bruxelles</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Jette</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Commune résidentielle calme avec ses maisons quatre façades des années 50
                à 70. Les bouleaux et charmes des jardins jettoises génèrent des volumes
                importants de feuilles fines qui obstruent efficacement les gouttières.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Jette en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "1950–70", label: "bâti résidentiel dominant", detail: "aluminium en fin de vie" },
                  { val: "Bouleaux", label: "feuilles fines & chatons", detail: "bouchons compacts en descentes" },
                  { val: "1×/an", label: "nettoyage automnal", detail: "novembre idéal pour Jette" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Le profil jettois</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Maisons quatre façades et jardins arborés</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Jette est l&apos;une des communes résidentielles les plus typiques du nord-ouest
                  de Bruxelles. Ses <strong>maisons quatre façades des années 50 à 70</strong>
                  avec jardins devant et derrière ont des gouttières en aluminium anodisé
                  ou en PVC qui arrivent aujourd&apos;hui en fin de vie.
                </p>
                <p>
                  Les jardins jettoises sont souvent plantés de <strong>bouleaux, charmes et
                  aulnes</strong>. Ces arbres produisent des chatons au printemps et des feuilles
                  petites mais en grande quantité en automne. Les feuilles fines de bouleau
                  se tassent particulièrement bien dans les descentes et y forment des bouchons
                  denses et compacts.
                </p>
                <p>
                  La commune jouxte le domaine royal de <strong>Laeken</strong>, ce qui signifie
                  que les quartiers nord de Jette bénéficient d&apos;une végétation abondante mais
                  sont aussi exposés aux apports de feuilles des grands arbres du domaine lors
                  des vents d&apos;automne.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"
                alt="Nettoyage gouttières Jette maison résidentielle Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Bouleaux & chatons printaniers", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Aluminium années 50–70", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Villas 4 façades jardins", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Voisinage parc de Laeken", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Jette</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage villas quatre façades", desc: "Nettoyage complet des 4 façades, toutes descentes incluses. Rapport d'état pour identifier les sections à remplacer prochainement.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage chatons & urgence", desc: "Les chatons de bouleaux bouchent les descentes même en dehors de l'automne. Intervention 7j/7 pour les obstructions urgentes.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement aluminium vieillissant", desc: "Les gouttières en aluminium des années 60–70 de Jette arrivent en fin de vie. Remplacement complet ou par sections avec aluminium moderne laqué.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage toitures résidentielles", desc: "Traitement anti-mousse préventif après nettoyage pour protéger les tuiles et gouttières de votre villa jettoise.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Jette</h2>
          <div className="space-y-5">
            {[
              { q: "Les chatons de bouleaux sont-ils vraiment problématiques ?", a: "Oui, c'est l'une des surprises printanières pour les propriétaires de Jette. Les chatons tombent en avril-mai et sont suffisamment petits pour pénétrer dans les descentes, où ils se collent et forment des bouchons denses. Un nettoyage de mai complète utilement le nettoyage automnal pour les jardins avec bouleaux." },
              { q: "Nos gouttières en aluminium des années 60 tiennent-elles encore ?", a: "L'aluminium des années 60 est en fin de vie standard (25–30 ans) depuis longtemps. Si elles fuient ou si les crochets cèdent, un remplacement s'impose. Si elles sont simplement encrassées et bien fixées, un nettoyage + démoussage peut encore prolonger leur vie de 3–5 ans." },
              { q: "Le vent venant du parc de Laeken apporte-t-il des feuilles chez nous ?", a: "Oui, les vents d'ouest en automne transportent des feuilles des grands arbres du domaine royal vers les quartiers nord de Jette. Les propriétés les plus exposées peuvent recevoir des volumes bien supérieurs à ce que leurs propres jardins génèrent." },
              { q: "Intervenez-vous dans tous les quartiers de Jette ?", a: "Oui, dans toute la commune — quartier des Quatre-Vents, Miroir, Karreveld, et vers Ganshoren. On connaît bien les configurations des maisons quatre façades de Jette et leurs spécificités d'accès." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Jette</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Ganshoren", slug: "ganshoren" }, { name: "Koekelberg", slug: "koekelberg" }, { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" }].map((c) => (
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
