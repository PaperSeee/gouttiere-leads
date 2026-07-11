import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Saint-Gilles — Art Nouveau & Maisons de Maître | 0451 05 33 70",
  description: "Nettoyage gouttières à Saint-Gilles : maisons de maître Art nouveau, zinc ornemental, parvis. Devis gratuit, intervention rapide. 0451 05 33 70.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/saint-gilles" },
  keywords: ["nettoyage gouttières Saint-Gilles", "débouchage gouttières Saint-Gilles", "gouttières bouchées Saint-Gilles", "prix nettoyage gouttières Saint-Gilles"],
  openGraph: {
    title: "Nettoyage Gouttières Saint-Gilles — Devis Gratuit | 0451 05 33 70",
    description: "Expert nettoyage gouttières à Saint-Gilles. Débouchage urgent, réparation, démoussage. Devis gratuit, intervention rapide.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes/saint-gilles",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Saint-Gilles" }],
  },
}

export default function SaintGillesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Saint-Gilles" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Saint-Gilles · Art nouveau & parvis</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Saint-Gilles</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Saint-Gilles abrite un patrimoine Art nouveau exceptionnel avec ses maisons
                de maître et son architecture ornementale. Intervenir sur ces façades
                classées demande une expertise et une délicatesse particulières.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Saint-Gilles en pratique</p>
              <div className="space-y-4">
                {[
                  { val: "Art 1900", label: "zinc ornemental rare", detail: "intervention avec soin extrême" },
                  { val: "Mitoyen", label: "bâti très dense", detail: "accès cours arrière technique" },
                  { val: "2×/an", label: "nettoyages conseillés", detail: "tilleuls + acacia en saison" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Le défi saint-gillois</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Zinc ornemental et patrimoine classé</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Saint-Gilles concentre certains des plus beaux exemples d&apos;architecture
                  <strong> Art nouveau et éclectique de Bruxelles</strong>. Les rues autour du Parvis
                  de Saint-Gilles et la chaussée de Waterloo regorgent de maisons de maître
                  construites entre 1895 et 1910 avec des façades ornementales.
                </p>
                <p>
                  Ces propriétés possèdent souvent des <strong>gouttières et descentes en zinc
                  travaillé</strong> avec des détails décoratifs — têtes de lions, profils en
                  quart-de-rond ouvragés, descentes à section ovale. Nettoyer ces éléments
                  sans les endommager exige des outils adaptés et une expertise spécifique.
                </p>
                <p>
                  La commune accueille également de nombreux <strong>acacias et tilleuls</strong>
                  dans ses rues résidentielles. Ces arbres génèrent des fleurs et graines collantes
                  au printemps qui s&apos;accumulent dans les gouttières et bouchent rapidement les
                  systèmes les plus fins du zinc ornemental.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                alt="Nettoyage gouttières Saint-Gilles Art nouveau Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Zinc Art nouveau 1895–1910", bg: "bg-blue-50" },
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Acacias & tilleuls", bg: "bg-green-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Façades classées patrimoine", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Cours arrière étroites", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Saint-Gilles</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage façades patrimoine", desc: "Nettoyage soigneux des gouttières ornementales. Outils non-abrasifs, accès cours arrière étroites, aucun risque pour les façades classées.", price: "dès 80€", tag: null },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "En cas de débordement menaçant les façades Art nouveau, on intervient le jour même. Chaque minute compte pour protéger le zinc ornemental.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Restauration zinc Art nouveau", desc: "Soudure à l'étain, réparation des joints, remplacement de sections avec profils assortis. On préserve l'authenticité architecturale de votre bien.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage toitures ardoises", desc: "Traitement préventif sur les toits en ardoises des maisons de maître. Protège la couverture et les gouttières ornementales en zinc.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Saint-Gilles</h2>
          <div className="space-y-5">
            {[
              { q: "Comment nettoyer le zinc ornemental sans l'endommager ?", a: "On utilise exclusivement des outils en plastique souple ou des brosses non-abrasives. Aucun métal sur le zinc — les rayures accélèrent la corrosion. Pour les profils complexes, un nettoyage à la main avec des chiffons humides et un aspirateur industriel." },
              { q: "Nos gouttières en zinc de 1905 sont-elles classées ?", a: "Les façades peuvent être classées, mais les gouttières elles-mêmes rarement. Cependant, pour les biens à valeur patrimoniale, on recommande de consulter le permis d'urbanisme avant tout remplacement et de privilégier les matériaux d'origine (zinc à la place de zinc)." },
              { q: "Intervenez-vous au Parvis de Saint-Gilles et chaussée de Waterloo ?", a: "Oui, dans toute la commune. On connaît bien les contraintes du bâti saint-gillois — ruelles étroites, cours intérieures partagées, accès en étage depuis l'intérieur. On s'adapte à chaque configuration." },
              { q: "Les acacias de nos rues bouchent-ils vraiment les gouttières au printemps ?", a: "Oui, leurs petites fleurs blanches tombent en masse en mai et forment des bouchons compacts. Combiné aux bourgeons collants des tilleuls voisins, un nettoyage de mai après la floraison est souvent aussi important que celui de novembre." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Saint-Gilles</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0451053370" className="font-bold text-[#1A4731] hover:text-[#F97316]">0451 05 33 70</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Ixelles", slug: "ixelles" }, { name: "Forest", slug: "forest" }, { name: "Anderlecht", slug: "anderlecht" }].map((c) => (
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
