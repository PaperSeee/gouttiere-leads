import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Etterbeek — Immeubles & Maisons | 0477 23 41 87",
  description: "Nettoyage gouttières à Etterbeek : immeubles à appartements, maisons mitoyennes, toitures plates. Devis gratuit, intervention rapide. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/etterbeek" },
}

export default function EtterbeekPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Etterbeek" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Commune d&apos;Etterbeek · Centre-Bruxelles</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Etterbeek</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Commune dense et urbaine dominée par les immeubles à appartements
                et les maisons mitoyennes des années 50–70. Gouttières souvent négligées
                et accessibles uniquement en hauteur — notre spécialité.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Etterbeek en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "1×/an", label: "fréquence conseillée", detail: "peu d'arbres en centre-ville" },
                  { val: "R+3/R+4", label: "immeubles typiques", detail: "matériel hauteur requis" },
                  { val: "PVC", label: "matériau dominant", detail: "facile à nettoyer et remplacer" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Spécificités d&apos;Etterbeek</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Bâti dense, accès en hauteur</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Etterbeek est une commune urbaine dense. Les problèmes de gouttières y sont
                  moins liés aux feuilles d&apos;arbres qu&apos;à <strong>l&apos;accumulation de poussières,
                  sédiments et mousses</strong> issues de la pollution atmosphérique et de l&apos;humidité.
                </p>
                <p>
                  Les <strong>immeubles à appartements des années 50–70</strong> qui dominent à Etterbeek
                  ont souvent des gouttières en PVC ou zinc vieillissant, mal entretenues car
                  l&apos;accès est difficile sans matériel adapté (R+3 ou R+4 standard).
                </p>
                <p>
                  La question des <strong>toitures plates</strong> est aussi récurrente à Etterbeek.
                  Les évacuations engorgées créent des flaques d&apos;eau stagnante, source de fuites
                  et de dégradation des membranes d&apos;étanchéité.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-1cf5c04a39d4?w=700&q=80"
                alt="Nettoyage gouttières immeuble Etterbeek Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Sédiments & pollution", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "PVC & zinc vieillissant", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Toitures plates bouchées", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Accès R+3/R+4", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Etterbeek</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage immeubles & maisons", desc: "Evacuation des dépôts sédimentaires et mousses. Matériel adapté aux hauteurs R+3/R+4 sans échafaudage pour les configurations standard à Etterbeek.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Gouttière qui déborde sur le trottoir ou sur le voisin ? On intervient en urgence à Etterbeek pour stopper les dégâts rapidement.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement PVC & zinc", desc: "Gouttières fissurées ou décrochées ? On remplace les tronçons défaillants ou l'intégralité. Devis copropriété sur demande.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Toitures plates & terrasses", desc: "Nettoyage des évacuations de toitures plates, débouchage des siphons de sol, élimination des dépôts et mousses sur membrane.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Etterbeek</h2>
          <div className="space-y-5">
            {[
              { q: "Pouvez-vous intervenir dans un immeuble de 4 étages sans échafaudage ?", a: "Oui, pour la grande majorité des immeubles d'Etterbeek (R+3 ou R+4). Notre matériel comprend des échelles professionnelles homologuées et des perches télescopiques. Au-delà de 15m, une nacelle peut être nécessaire — on vous prévient à l'avance." },
              { q: "La copropriété doit-elle donner son accord ?", a: "Pour les parties communes, l'accord du syndic ou d'une majorité de copropriétaires est requis. On fournit un devis formel pour l'AG. Pour les terrasses privatives, seul le propriétaire doit valider." },
              { q: "Ma toiture plate déborde lors de fortes pluies. Que faire ?", a: "C'est typiquement un siphon bouché ou une évacuation obstruée. On le débouche en urgence et vérifie que la pente de la membrane est correcte. Si l'eau stagne régulièrement, c'est souvent un problème de pente à corriger." },
              { q: "Un nettoyage par an suffit-il à Etterbeek ?", a: "En général oui. Le centre d'Etterbeek a peu d'arbres. Un nettoyage en octobre-novembre suffit. Si votre rue est bordée de tilleuls ou platanes, un second passage au printemps peut être utile." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Etterbeek</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Ixelles", slug: "ixelles" }, { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" }, { name: "Schaerbeek", slug: "schaerbeek" }].map((c) => (
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
