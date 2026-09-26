import type { Metadata } from "next"
import Link from "next/link"
import GutterIllustration from "@/components/GutterIllustration"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"
import { CommuneConseils, NeighborCommunes } from "@/components/CommuneLocal"
import { localFaqs, localFaqSchema } from "@/lib/communes"

export const metadata: Metadata = {
  title: { absolute: "Nettoyage de gouttières à Jette | Gouttières Bruxelles" },
  description:
    "Nettoyage de gouttières à Jette dès 80 € : villas des années 50–70, bouleaux, bordure du Laerbeek. Devis gratuit, intervention sous 48h.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/jette" },
  keywords: ["nettoyage gouttières Jette", "débouchage gouttières Jette", "gouttières bouchées Jette", "prix nettoyage gouttières Jette"],
  openGraph: {
    title: "Nettoyage Gouttières Jette — Devis Gratuit",
    description: "Expert nettoyage gouttières à Jette. Débouchage urgent, réparation, démoussage. Devis gratuit, intervention rapide.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes/jette",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Jette" }],
  },
}

export default function JettePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Les chatons de bouleaux sont-ils vraiment problématiques ?", acceptedAnswer: { "@type": "Answer", text: "Oui, c'est l'une des surprises printanières pour les propriétaires de Jette. Les chatons tombent en avril-mai et sont suffisamment petits pour pénétrer dans les descentes, où ils se collent et forment des bouchons denses. Un nettoyage de mai complète utilement le nettoyage automnal pour les jardins avec bouleaux." } },
      { "@type": "Question", name: "Nos gouttières en aluminium des années 60 tiennent-elles encore ?", acceptedAnswer: { "@type": "Answer", text: "L'aluminium des années 60 est en fin de vie standard (25–30 ans) depuis longtemps. Si elles fuient ou si les crochets cèdent, un remplacement s'impose. Si elles sont simplement encrassées et bien fixées, un nettoyage + démoussage peut encore prolonger leur vie de 3–5 ans." } },
      { "@type": "Question", name: "Les grands espaces verts voisins apportent-ils des feuilles chez nous ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Les maisons en bordure du bois du Laerbeek ou du parc Roi Baudouin reçoivent, par coups de vent, des feuilles qui ne viennent pas de leur propre jardin. Ce sont elles qui justifient le plus souvent un second passage." } },
      { "@type": "Question", name: "Intervenez-vous dans tous les quartiers de Jette ?", acceptedAnswer: { "@type": "Answer", text: "Oui, dans toute la commune — autour de la place Cardinal Mercier, près du bois du Laerbeek et vers Ganshoren. On connaît bien les configurations des maisons quatre façades de Jette et leurs spécificités d'accès." } },
      ...localFaqSchema("jette"),
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/communes" }, { label: "Jette" }]} />

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
                <a href="tel:0451053370" className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-md shadow-orange-100">
                  <Phone size={18} />0451 05 33 70
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
                  Jette compte aussi de grands espaces verts, comme le <strong>bois du Laerbeek</strong>
                  et le parc Roi Baudouin : les maisons qui les bordent reçoivent, lors des coups
                  de vent d&apos;automne, bien plus de feuilles que leurs propres jardins n&apos;en
                  produisent.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-gradient-to-b from-sky-100 to-sky-50 p-3 ring-1 ring-sky-200/60">
                <GutterIllustration className="h-64 w-full" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Bouleaux & chatons printaniers", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Aluminium années 50–70", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Villas 4 façades jardins", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Bordure du Laerbeek", bg: "bg-red-50" },
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
              { q: "Les grands espaces verts voisins apportent-ils des feuilles chez nous ?", a: "Oui. Les maisons en bordure du bois du Laerbeek ou du parc Roi Baudouin reçoivent, par coups de vent, des feuilles qui ne viennent pas de leur propre jardin. Ce sont elles qui justifient le plus souvent un second passage." },
              { q: "Intervenez-vous dans tous les quartiers de Jette ?", a: "Oui, dans toute la commune — autour de la place Cardinal Mercier, près du bois du Laerbeek et vers Ganshoren. On connaît bien les configurations des maisons quatre façades de Jette et leurs spécificités d'accès." },
              ...localFaqs("jette"),
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

      <CommuneConseils slug="jette" />

      <section id="devis" className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Jette</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0451053370" className="font-bold text-[#1A4731] hover:text-[#F97316]">0451 05 33 70</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm defaultCommune="Jette" /></div>
        </div>
      </section>

      <section className="py-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Besoin d'un devis ailleurs à Bruxelles ? Retrouvez notre service de{" "}
            <Link href="/" className="font-semibold text-[#1A4731] hover:text-[#F97316]">nettoyage de gouttières à Bruxelles</Link>
            , toutes communes confondues.
          </p>
        </div>
      </section>
      <NeighborCommunes slug="jette" />
    </>
  )
}
