import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Berchem-Sainte-Agathe — Villas & Lotissements | 0451 05 33 70",
  description: "Nettoyage gouttières à Berchem-Sainte-Agathe : villas lotissements années 60–70, aluminium vieillissant, jardins arborés. Devis gratuit. 0451 05 33 70.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/berchem-sainte-agathe" },
  keywords: ["nettoyage gouttières Berchem-Sainte-Agathe", "débouchage gouttières Berchem-Sainte-Agathe", "gouttières bouchées Berchem-Sainte-Agathe", "prix nettoyage gouttières Berchem-Sainte-Agathe"],
  openGraph: {
    title: "Nettoyage Gouttières Berchem-Sainte-Agathe — Devis Gratuit | 0451 05 33 70",
    description: "Expert nettoyage gouttières à Berchem-Sainte-Agathe. Débouchage urgent, réparation, démoussage. Devis gratuit, intervention rapide.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes/berchem-sainte-agathe",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Berchem-Sainte-Agathe" }],
  },
}

const communeFaqs: { q: string; a: string }[] = [
              { q: "Notre villa des années 70 a des gouttières d'origine — faut-il tout changer ?", a: "Pas forcément tout. On inspecte d'abord : si les crochets tiennent, les joints sont étanches et le profil est droit, une réparation ciblée et un nettoyage peuvent suffire. Si plus de 40% du linéaire présente des problèmes, un remplacement complet est plus économique sur le long terme." },
              { q: "Peut-on choisir la couleur des nouvelles gouttières ?", a: "Oui, l'aluminium laqué est disponible dans de nombreuses teintes RAL. On s'assure que la nouvelle couleur s'harmonise avec votre façade et vos menuiseries. La teinte gris anthracite (RAL 7016) et le blanc cassé (RAL 9010) sont les plus demandées à Berchem." },
              { q: "Combien de temps dure une intervention à Berchem-Sainte-Agathe ?", a: "Pour une villa quatre façades standard, le nettoyage dure environ 2 à 3 heures. Un remplacement complet de gouttières prend généralement une journée complète. On vous donne une estimation précise lors du devis." },
              { q: "Intervenez-vous dans les lotissements de la chaussée de Gand ?", a: "Oui, dans tout Berchem-Sainte-Agathe, y compris les lotissements le long de la chaussée de Gand et les rues résidentielles plus calmes. Délai habituel : 48 à 72 heures après contact." },
            ]

export default function BerchemSainteAgathePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: communeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Berchem-Sainte-Agathe" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Berchem-Sainte-Agathe · Lotissements résidentiels nord-ouest</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Berchem-Sainte-Agathe</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Commune résidentielle du nord-ouest avec ses lotissements des années 60 et 70.
                Les villas à quatre façades avec jardins sont le type dominant — des propriétés
                dont les gouttières en aluminium arrivent aujourd&apos;hui en fin de vie.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:0451053370" className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-md shadow-orange-100">
                  <Phone size={18} />0451 05 33 70
                </a>
                <a href="#devis" className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#1A4731] text-gray-700 hover:text-[#1A4731] font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  Devis gratuit <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="lg:w-72 bg-[#1A4731] text-white rounded-2xl p-6 flex-shrink-0 w-full">
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Berchem-Ste-Agathe</p>
              <div className="space-y-4">
                {[
                  { val: "1960–70", label: "lotissements dominants", detail: "aluminium en fin de vie" },
                  { val: "4 façades", label: "villas avec jardins", detail: "accès facile, devis rapide" },
                  { val: "1×/an", label: "automne recommandé", detail: "nov. après la chute des feuilles" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Le profil berchemois</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Lotissements des Trente Glorieuses</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Berchem-Sainte-Agathe a été largement construite pendant les Trente Glorieuses,
                  avec une vague de <strong>lotissements pavillonnaires dans les années 60 et 70</strong>.
                  Ces villas à quatre façades, avec garage intégré et jardin, représentent l&apos;essentiel
                  du bâti résidentiel de la commune.
                </p>
                <p>
                  Les gouttières installées à l&apos;époque — principalement en <strong>aluminium anodisé
                  ou en PVC</strong> — atteignent aujourd&apos;hui leur fin de vie standard. Des crochets
                  qui cèdent, des joints qui fuient ou des profils qui s&apos;affaissent sont des signes
                  typiques de ces installations vieillissantes. Un remplacement préventif évite les
                  dégâts sur les façades.
                </p>
                <p>
                  Les jardins berchemois sont plantés de <strong>noisetiers, pruniers et cerisiers</strong>
                  qui génèrent des fleurs, des fruits et des feuilles saisonniers. Moins exposés aux
                  grands arbres forestiers, les propriétés nécessitent néanmoins un nettoyage annuel
                  pour maintenir le système en état.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=700&q=80"
                alt="Nettoyage gouttières Berchem-Sainte-Agathe villa résidentielle"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Noisetiers & pruniers jardins", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Aluminium 60–70 vieillissant", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Villas 4 façades accessibles", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Crochets & joints défaillants", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Berchem-Sainte-Agathe</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage villas 4 façades", desc: "Nettoyage complet des 4 côtés de la villa, toutes descentes incluses. Rapport d'état pour identifier les sections en fin de vie.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Intervention rapide 7j/7 pour les débordements actifs à Berchem-Sainte-Agathe. On protège vos façades et fondations contre les dégâts des eaux.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement aluminium vieillissant", desc: "Remplacement complet ou par sections de vos anciennes gouttières en aluminium. Aluminium moderne laqué, garantie 20 ans.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage après nettoyage", desc: "Traitement anti-mousse préventif après nettoyage. Idéal pour les nouvelles gouttières posées — protège l'investissement 3 à 5 ans.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Berchem-Sainte-Agathe</h2>
          <div className="space-y-5">
            {communeFaqs.map((faq, i) => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Berchem-Sainte-Agathe</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0451053370" className="font-bold text-[#1A4731] hover:text-[#F97316]">0451 05 33 70</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Jette", slug: "jette" }, { name: "Ganshoren", slug: "ganshoren" }, { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" }].map((c) => (
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
