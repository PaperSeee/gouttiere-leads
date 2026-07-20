import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Koekelberg — Basilique & Habitat Compact | 0451 05 33 70",
  description: "Nettoyage gouttières à Koekelberg : habitat compact, Basilique du Sacré-Cœur, maisons mitoyennes zinc. Devis gratuit. 0451 05 33 70.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/koekelberg" },
  keywords: ["nettoyage gouttières Koekelberg", "débouchage gouttières Koekelberg", "gouttières bouchées Koekelberg", "prix nettoyage gouttières Koekelberg"],
  openGraph: {
    title: "Nettoyage Gouttières Koekelberg — Devis Gratuit | 0451 05 33 70",
    description: "Expert nettoyage gouttières à Koekelberg. Débouchage urgent, réparation, démoussage. Devis gratuit, intervention rapide.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes/koekelberg",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Koekelberg" }],
  },
}

const communeFaqs: { q: string; a: string }[] = [
              { q: "Le zinc de nos maisons des années 20 mérite-t-il encore d'être réparé ?", a: "Un zinc des années 20 bien conservé peut encore durer 10 à 15 ans. Si les soudures tiennent et que les profils sont rectilignes, une réparation ponctuelle des zones défaillantes est économiquement pertinente. On fait un diagnostic gratuit pour évaluer la situation." },
              { q: "Comment accédez-vous aux gouttières arrière à Koekelberg ?", a: "Généralement par la cour intérieure avec des échelles légères ou des perches télescopiques. Dans les cours particulièrement étroites, on utilise exclusivement des perches depuis le sol pour ne pas risquer d'abîmer les façades voisines." },
              { q: "Faut-il prévenir les voisins pour l'accès aux cours partagées ?", a: "C'est recommandé. Dans les maisons mitoyennes de Koekelberg avec cours partagées, on vous conseille de prévenir les voisins au moins 24h à l'avance. Si plusieurs voisins souhaitent un nettoyage le même jour, on propose un tarif groupé avantageux." },
              { q: "Intervenez-vous avenue de la Basilique et rue Schmitz ?", a: "Oui, dans toutes les rues de Koekelberg. La commune est petite et bien connue de notre équipe. Délai d'intervention habituel : 48 à 72 heures après contact." },
            ]

export default function KoekelbergPage() {
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
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Koekelberg" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Koekelberg · Basilique & habitat populaire</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Koekelberg</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Koekelberg, dominée par la Basilique du Sacré-Cœur, est une commune au
                bâti compact et populaire. Ses maisons mitoyennes des années 1910–1930
                ont des gouttières en zinc historique qui méritent un entretien régulier.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Koekelberg en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "1910–30", label: "bâti typique", detail: "zinc d'époque à surveiller" },
                  { val: "Mitoyen", label: "habitat très dense", detail: "cours arrière techniques" },
                  { val: "1×/an", label: "nettoyage automnal", detail: "novembre, après feuilles" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Le profil koekelbergeois</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Compact, historique et à entretenir</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Koekelberg est l&apos;une des communes les plus denses de Bruxelles malgré sa
                  petite taille. Son bâti, principalement constitué de <strong>maisons mitoyennes
                  construites entre 1910 et 1935</strong>, offre peu d&apos;espace entre les bâtiments
                  et des cours arrière souvent étroites.
                </p>
                <p>
                  Ces maisons de style art-déco ou éclectique tardif possèdent des <strong>gouttières
                  en zinc</strong> qui, pour les mieux conservées, peuvent encore durer plusieurs
                  décennies. Mais leur âge signifie aussi que les soudures lâchent et les profils
                  se déforment. Un diagnostic régulier permet d&apos;éviter les remplacements d&apos;urgence.
                </p>
                <p>
                  Les rues de Koekelberg sont bordées de <strong>tilleuls et d&apos;érables champêtres</strong>
                  qui génèrent des débris saisonniers. L&apos;absence de grands espaces verts dans la
                  commune signifie néanmoins que les volumes sont plus modérés que dans les communes
                  boisées — un nettoyage annuel automnal suffit dans la plupart des cas.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"
                alt="Nettoyage gouttières Koekelberg Bruxelles Basilique"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Zinc 1910–1935 historique", bg: "bg-blue-50" },
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Tilleuls & érables rues", bg: "bg-green-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Cours arrière étroites", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Soudures zinc à vérifier", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Koekelberg</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage maisons mitoyennes", desc: "Nettoyage façades avant et arrière. Accès cours étroites avec matériel adapté. On nettoie les chenaux et teste chaque descente.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Débordement en cours ? On intervient 7j/7 à Koekelberg pour stopper rapidement les dégâts sur vos façades et votre intérieur.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Réparation zinc historique", desc: "Soudure et réparation des gouttières en zinc d'époque. Si l'état est trop dégradé, remplacement par zinc neuf ou aluminium assorti.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage toitures ardoises", desc: "Traitement préventif anti-mousse sur les toits en ardoises des maisons de Koekelberg. Prolonge la durée de vie de votre couverture.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Koekelberg</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Koekelberg</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0451053370" className="font-bold text-[#1A4731] hover:text-[#F97316]">0451 05 33 70</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Ganshoren", slug: "ganshoren" }, { name: "Jette", slug: "jette" }, { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" }].map((c) => (
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
