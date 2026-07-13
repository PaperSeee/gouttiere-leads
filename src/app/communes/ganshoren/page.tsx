import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Ganshoren — Petite Commune Résidentielle",
  description: "Nettoyage gouttières à Ganshoren : maisons des années 50–60, jardins arborés, commune résidentielle calme. Devis gratuit. 0451 05 33 70.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/ganshoren" },
  keywords: ["nettoyage gouttières Ganshoren", "débouchage gouttières Ganshoren", "gouttières bouchées Ganshoren", "prix nettoyage gouttières Ganshoren"],
  openGraph: {
    title: "Nettoyage Gouttières Ganshoren — Devis Gratuit | 0451 05 33 70",
    description: "Expert nettoyage gouttières à Ganshoren. Débouchage urgent, réparation, démoussage. Devis gratuit, intervention rapide.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes/ganshoren",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Ganshoren" }],
  },
}

const faqs: { q: string; a: string }[] = [
  { q: "Comment savoir si nos gouttières des années 60 doivent être remplacées ?", a: "Trois signes clairs : des fuites visibles lors des pluies, des fixations (crochets) qui se détachent du fascia, et des déformations ou affaissements du chenal. Si deux de ces trois signes sont présents, un remplacement est préférable à une réparation ponctuelle." },
  { q: "Un nettoyage par an est-il vraiment suffisant à Ganshoren ?", a: "Pour la plupart des propriétés de Ganshoren, oui. La commune n'est pas exposée aux grands arbres forestiers ni aux avenues de platanes. Un nettoyage automnal en novembre, après la chute des feuilles, suffit généralement à maintenir le système en bon état." },
  { q: "Intervenez-vous avenue du Château et avenue de la Réforme ?", a: "Oui, dans toutes les rues de Ganshoren. La petite taille de la commune nous permet d'intervenir rapidement — souvent sous 48 heures — sans frais de déplacement supplémentaires." },
  { q: "Peut-on avoir un devis sans s'engager ?", a: "Bien sûr, le devis est entièrement gratuit et sans engagement. On peut l'établir par téléphone ou lors d'un passage sur place. On vous présente les différentes options et vous décidez librement." },
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

export default function GanshorenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Ganshoren" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Ganshoren · Petite commune paisible du nord-ouest</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Ganshoren</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                La plus petite commune de Bruxelles, mais avec un caractère résidentiel
                très marqué. Ses maisons des années 50 et 60 ont des gouttières qui
                commencent à montrer leur âge et nécessitent une attention particulière.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Ganshoren en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "2,4 km²", label: "plus petite commune", detail: "entièrement résidentielle" },
                  { val: "60–70 ans", label: "âge moyen du bâti", detail: "gouttières en fin de vie" },
                  { val: "1×/an", label: "nettoyage suffisant", detail: "automne, après les feuilles" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Petit territoire, grande attention</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Résidentiel paisible aux gouttières vieillissantes</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ganshoren est un havre de tranquillité au nord-ouest de Bruxelles.
                  Ses rues calmes sont bordées de <strong>maisons quatre façades construites
                  dans les années 1950 et 1960</strong>, avec de petits jardins soigneusement
                  entretenus et des haies de charme ou de thuya.
                </p>
                <p>
                  Le bâti de Ganshoren, bien que résidentiel et bien entretenu, commence à
                  accuser son âge. Les <strong>gouttières en aluminium ou en PVC</strong>
                  installées à la construction de ces maisons atteignent ou dépassent leur
                  durée de vie standard de 25 à 35 ans. Des fuites discrètes ou des fixations
                  qui cèdent sont souvent les premiers signes.
                </p>
                <p>
                  Les jardins de Ganshoren sont plantés de <strong>bouleaux, prunus et
                  noisetiers</strong> qui génèrent des volumes modérés de feuilles en automne.
                  Un nettoyage annuel en novembre suffit généralement à maintenir les gouttières
                  en bon état de fonctionnement.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=700&q=80"
                alt="Nettoyage gouttières Ganshoren maison résidentielle"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Bouleaux & prunus jardins", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Alu/PVC années 50–60 vieillissant", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Maisons 4 façades calmes", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Fixations qui cèdent", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Ganshoren</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage villas résidentielles", desc: "Nettoyage annuel efficace pour les maisons quatre façades de Ganshoren. Toutes les descentes et tous les chenaux en une seule visite.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Débordement inattendu ? On intervient 7j/7 à Ganshoren pour stopper les dégâts et nettoyer le système en une seule intervention.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement vieilles gouttières", desc: "Diagnostic gratuit pour évaluer si vos gouttières des années 50–60 nécessitent un remplacement partiel ou complet.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage toitures résidentielles", desc: "Traitement anti-mousse préventif après nettoyage. Protège votre toiture et prolonge la vie des nouvelles gouttières.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Ganshoren</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Ganshoren</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0451053370" className="font-bold text-[#1A4731] hover:text-[#F97316]">0451 05 33 70</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Jette", slug: "jette" }, { name: "Koekelberg", slug: "koekelberg" }, { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" }].map((c) => (
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
