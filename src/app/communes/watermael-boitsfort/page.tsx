import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Watermael-Boitsfort — Forêt & Cités-Jardins | 0477 23 41 87",
  description: "Nettoyage gouttières à Watermael-Boitsfort : cités-jardins Le Logis & Floréal, Forêt de Soignes, mousses tenaces. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/watermael-boitsfort" },
}

export default function WatermealBoitsfortPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Communes", href: "/" }, { label: "Watermael-Boitsfort" }]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Watermael-Boitsfort · Cités-jardins & forêt</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br /><span className="text-[#1A4731]">Watermael-Boitsfort</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                La commune la plus boisée de Bruxelles. Hêtres du Soignes, bouleaux des cités-jardins,
                mousses omniprésentes — Watermael-Boitsfort réclame le plus d&apos;attention
                pour l&apos;entretien des gouttières.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Watermael-Boitsfort</p>
              <div className="space-y-4">
                {[
                  { val: "2–3×/an", label: "fréquence recommandée", detail: "la plus élevée de la région" },
                  { val: "Hêtres", label: "feuilles jusqu'en février", detail: "nettoyage hivernal indispensable" },
                  { val: "Mousses++", label: "très tenaces", detail: "humidité quasi permanente" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">La commune la plus exigeante</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Forêt, cités-jardins et humidité permanente</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Watermael-Boitsfort est enclavée dans et autour de la <strong>Forêt de Soignes</strong>.
                  C&apos;est la commune où l&apos;entretien des gouttières est le plus critique de toute la
                  région bruxelloise. Les propriétés sont entourées d&apos;arbres générant des déchets
                  végétaux pratiquement toute l&apos;année.
                </p>
                <p>
                  Les <strong>cités-jardins Le Logis et Floréal</strong>, construites dans les années
                  1920–1930, sont des ensembles remarquables avec des maisons basses et des jardins
                  densément plantés. Ces habitations ont souvent des gouttières en zinc ou cuivre
                  d&apos;époque qui demandent une expertise particulière.
                </p>
                <p>
                  Le <strong>taux d&apos;humidité</strong> quasi permanent dans cette commune boisée
                  crée des conditions idéales pour les mousses. Sans démoussage régulier, une
                  gouttière peut être réduite à la moitié de sa capacité en deux à trois ans.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"
                alt="Nettoyage gouttières Watermael-Boitsfort cités-jardins"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Hêtres jusqu'en février", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Zinc & cuivre cités-jardins", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Mousses très envahissantes", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "3 nettoyages/an parfois", bg: "bg-red-50" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Watermael-Boitsfort</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage intensif cités-jardins", desc: "2 à 3 passages annuels recommandés pour les propriétés des cités Le Logis et Floréal. Abonnement annuel disponible — on s'occupe du planning, vous n'avez plus à y penser.", price: "dès 80€", tag: "Abonnement dispo" },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "En cas de débordement actif dans cette commune où les pluies s'accumulent rapidement. On intervient 7j/7 pour protéger votre propriété.", price: "dès 120€", tag: "7j/7" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Réparation zinc & cuivre rare", desc: "Les cités-jardins possèdent parfois des gouttières en cuivre. Intervention experte pour préserver ces matériaux nobles et leur patine naturelle.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage — priorité absolue ici", desc: "Watermael-Boitsfort est la commune où le démoussage est le plus critique. Sans traitement régulier, les mousses colonisent toiture et gouttières en 18 mois.", price: "devis gratuit", tag: "Prioritaire" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Watermael-Boitsfort</h2>
          <div className="space-y-5">
            {[
              { q: "Combien de nettoyages par an à Watermael-Boitsfort ?", a: "2 à 3 selon votre exposition. Les cités Le Logis et Floréal entourées d'arbres bénéficient d'un passage en mai, novembre et janvier-février (hêtres tardifs). On propose des abonnements annuels avec planning préétabli." },
              { q: "Nos gouttières en cuivre des cités-jardins — comment les entretenir ?", a: "Le cuivre se nettoie avec des outils non-abrasifs pour ne pas rayer la surface et préserver la patine naturelle. Si des fissures apparaissent, on répare par soudure à l'étain. Un cuivre bien entretenu peut durer 80 à 100 ans." },
              { q: "Les mousses dans nos gouttières sont particulièrement épaisses — pourquoi ?", a: "L'humidité permanente et l'ombrage des grands arbres créent les conditions idéales. À Watermael-Boitsfort, sans traitement préventif, les mousses peuvent atteindre 5 à 10 cm d'épaisseur en 2–3 ans, réduisant la capacité d'écoulement de plus de 50%." },
              { q: "Proposez-vous des contrats d'entretien annuels ?", a: "Oui, particulièrement recommandé ici. On établit un planning annuel de 2 à 3 visites avec tarif préférentiel. Vous n'avez plus à y penser — on vous contacte avant chaque intervention selon le calendrier convenu." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Watermael-Boitsfort</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8"><ContactForm /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Auderghem", slug: "auderghem" }, { name: "Uccle", slug: "uccle" }, { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" }].map((c) => (
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
