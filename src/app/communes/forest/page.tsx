import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Forest — Maisons Mitoyennes & Cottages",
  description: "Nettoyage gouttières à Forest : maisons mitoyennes brique rouge, zinc d'époque, parc de Forest. Devis gratuit, intervention 48h. 0451 05 33 70.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/forest" },
  keywords: ["nettoyage gouttières Forest", "débouchage gouttières Forest", "gouttières bouchées Forest", "prix nettoyage gouttières Forest"],
  openGraph: {
    title: "Nettoyage Gouttières Forest — Devis Gratuit | 0451 05 33 70",
    description: "Expert nettoyage gouttières à Forest. Débouchage urgent, réparation, démoussage. Devis gratuit, intervention rapide.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes/forest",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Forest" }],
  },
}

const faqs: { q: string; a: string }[] = [
  { q: "Peut-on coordonner le nettoyage avec notre voisin mitoyen ?", a: "Oui, et c'est même conseillé ! Pour les maisons mitoyennes, on propose un tarif légèrement réduit quand on fait deux maisons le même jour. Cela permet aussi de traiter les descentes partagées en une seule intervention efficace." },
  { q: "Nos gouttières en zinc des années 30 valent-elles encore la peine ?", a: "Ça dépend de l'état. Le zinc des années 30 peut encore durer 10–20 ans si l'oxydation est légère et les profils rectilignes. Un diagnostic gratuit permet de trancher — si 60% du linéaire est en bon état, une réparation ciblée reste économique." },
  { q: "Les ardoises du toit causent-elles des problèmes de gouttières ?", a: "Les mousses sur ardoises migrent vers les gouttières et forment des bouchons compacts. Les ardoises brisées créent aussi des points d'infiltration. Un démoussage préventif protège les deux à la fois." },
  { q: "Intervenez-vous avenue Van Volxem et avenue Besme ?", a: "Oui, dans toutes les rues de Forest, y compris les avenues bordées d'arbres qui génèrent le plus de feuilles. On connaît bien ces zones et leurs spécificités d'accès." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function ForestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Forest" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Commune de Forest · Parc et cottages</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Forest</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Forest allie des rangées de maisons mitoyennes en brique rouge et des cottages
                avec jardins proches du Parc de Forest. Zinc d&apos;époque, ardoises anciennes —
                expertise locale garantie.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Forest en chiffres</p>
              <div className="space-y-4">
                {[
                  { val: "Brique 1930", label: "habitat typique", detail: "zinc souvent d'origine" },
                  { val: "Nov.–déc.", label: "période critique", detail: "tilleuls & marronniers du parc" },
                  { val: "Mitoyen", label: "bâti compact", detail: "tarifs groupés disponibles" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Ce qui distingue Forest</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Habitat ouvrier et zinc de tradition</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Forest est une commune au charme populaire avec ses longues rangées de
                  <strong> maisons ouvrières en brique rouge</strong> construites entre 1900 et 1940.
                  Ces maisons possèdent souvent des gouttières en zinc d&apos;origine — une partie
                  peut encore être sauvée par réparation, l&apos;autre nécessite un remplacement.
                </p>
                <p>
                  Le <strong>Parc de Forest</strong> et ses grands arbres — tilleuls, marronniers,
                  frênes — génèrent d&apos;importants volumes de feuilles en automne. Les propriétés
                  des rues adjacentes (avenue Van Volxem, avenue Besme) sont particulièrement
                  exposées et nécessitent un nettoyage annuel systématique.
                </p>
                <p>
                  Le bâti mitoyen de Forest signifie que les gouttières d&apos;un côté du toit
                  sont souvent à la limite de propriété. Une coordination avec les voisins permet
                  de traiter les deux côtés simultanément pour des économies substantielles.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"
                alt="Nettoyage gouttières maison Forest Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Tilleuls & marronniers", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Zinc d'époque 1900–1940", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Descentes mitoyennes", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Ardoises & mousses", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Forest</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage maisons mitoyennes", desc: "Nettoyage complet gouttières et descentes. Tarif groupé disponible si vous vous coordonnez avec votre voisin — idéal pour les maisons mitoyennes.", price: "dès 80€", tag: "Tarif groupé dispo" },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Intervention rapide pour protéger les façades en brique rouge, particulièrement sensibles aux taches d'humidité en cas de débordement.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Réparation zinc 1900–1940", desc: "Soudure et réparation du zinc historique. Si l'oxydation est trop avancée, remplacement par aluminium laqué assorti à l'esthétique originale.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage toitures ardoises", desc: "Les toitures en ardoises de Forest accumulent les mousses qui migrent vers les gouttières. Démoussage mécanique doux + traitement préventif.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Forest</h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Forest</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0451053370" className="font-bold text-[#1A4731] hover:text-[#F97316]">0451 05 33 70</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Uccle", slug: "uccle" }, { name: "Ixelles", slug: "ixelles" }, { name: "Schaerbeek", slug: "schaerbeek" }].map((c) => (
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
