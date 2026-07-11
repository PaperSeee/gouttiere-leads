import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle, Euro } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Uccle — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage de gouttières à Uccle : villas, maisons 4 façades, zinc oxydé. Intervention rapide avenue Molière, Brugmann. Devis gratuit. 0451 05 33 70.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/communes/uccle" },
  keywords: ["nettoyage gouttières Uccle", "débouchage gouttières Uccle", "gouttières bouchées Uccle", "prix nettoyage gouttières Uccle"],
  openGraph: {
    title: "Nettoyage Gouttières Uccle — Devis Gratuit | 0451 05 33 70",
    description: "Expert nettoyage gouttières à Uccle. Débouchage urgent, réparation, démoussage. Devis gratuit, intervention rapide.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/communes/uccle",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage gouttières Uccle" }],
  },
}

export default function UcclePage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Uccle" },
      ]} />

      {/* Header — blanc avec accent latéral, pas de plein vert */}
      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Commune d&apos;Uccle · Région bruxelloise</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br />
                <span className="text-[#1A4731]">Uccle</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                Villas 4 façades, maisons de maître, zinc centenaire — Uccle est une
                commune à fort entretien pour les gouttières. On intervient dans tout Uccle
                avec dévis gratuit et délai d&apos;intervention sous 48h.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0451053370"
                  className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-md shadow-orange-100"
                >
                  <Phone size={18} />
                  0451 05 33 70
                </a>
                <a
                  href="#devis"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#1A4731] text-gray-700 hover:text-[#1A4731] font-semibold px-6 py-3.5 rounded-xl transition-colors"
                >
                  Devis gratuit <ArrowRight size={16} />
                </a>
              </div>
            </div>
            {/* Panneau stats */}
            <div className="lg:w-72 bg-[#1A4731] text-white rounded-2xl p-6 flex-shrink-0 w-full">
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Uccle en chiffres</p>
              <div className="space-y-4">
                {[
                  { val: "2×/an", label: "nettoyages recommandés", detail: "arbres denses = double fréquence" },
                  { val: "50–80m", label: "de gouttières", detail: "par villa 4 façades typique" },
                  { val: "40–60 ans", label: "d'âge moyen du zinc", detail: "souvent à remplacer" },
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

      {/* Intro spécifique — 2 colonnes texte + image */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Pourquoi Uccle est exigeante</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Les gouttières uccleoises demandent plus d&apos;attention
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Uccle concentre trois facteurs qui rendent l&apos;entretien des gouttières
                  particulièrement important : une <strong>densité arboricole élevée</strong> (platanes
                  centenaires, chênes, hêtres avenue Molière et Brugmann), un patrimoine bâti
                  avec des <strong>gouttières en zinc des années 30–60</strong> très oxydées, et une
                  topographie vallonnée qui amplifie les risques de débordement vers les fondations.
                </p>
                <p>
                  Les platanes génèrent des feuilles très larges qui obstruent rapidement les chenaux.
                  Combinés aux graines ailées des frênes et aux samares des érables, les gouttières
                  uccleoises peuvent se boucher en quelques semaines. Deux nettoyages annuels
                  (mai et novembre) sont souvent nécessaires dans les propriétés les plus exposées.
                </p>
                <p>
                  Le zinc, matériau noble mais sensible, réclame une attention régulière. Passé
                  40 ans, les perforations et la décollement des joints imposent soit une réparation
                  ciblée, soit un remplacement complet par aluminium laqué ou zinc neuf.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"
                alt="Nettoyage gouttières villa Uccle"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              {/* 4 problèmes fréquents */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Feuilles platanes & hêtres", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Zinc oxydé et perforé", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Débordements sur pente", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Mousses & lichens", bg: "bg-red-50" },
                ].map((p) => (
                  <div key={p.text} className={`${p.bg} rounded-xl p-3 flex items-center gap-2`}>
                    {p.icon}
                    <span className="text-sm font-medium text-gray-800">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — liste détaillée avec tarifs */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Nos services à Uccle
          </h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              {
                icon: <Droplets size={22} className="text-[#1A4731]" />,
                href: "/services/nettoyage-gouttieres",
                title: "Nettoyage complet",
                desc: "Evacuation des feuilles de platanes, chênes et hêtres. Nettoyage gouttières + descentes. Devis sur mesure pour villas avec grands linéaires.",
                price: "dès 80€",
                tag: "Le plus demandé",
              },
              {
                icon: <AlertTriangle size={22} className="text-red-500" />,
                href: "/services/debouchage-gouttieres",
                title: "Débouchage urgence",
                desc: "En cas de débordement actif sur votre propriété uccloise. Intervention haute pression 7j/7. Terrains en pente : on agit vite pour protéger les fondations.",
                price: "dès 120€",
                tag: "7j/7",
              },
              {
                icon: <Wrench size={22} className="text-blue-600" />,
                href: "/services/reparation-gouttieres",
                title: "Réparation zinc & remplacement",
                desc: "Soudure de perforations, reprise de joints, remplacement partiel ou total. Zinc neuf ou aluminium laqué — parfait pour les villas d'époque.",
                price: "devis gratuit",
                tag: null,
              },
              {
                icon: <Leaf size={22} className="text-yellow-600" />,
                href: "/services/demoussage-toiture",
                title: "Démoussage toiture",
                desc: "L'humidité des grands jardins d'Uccle favorise les mousses. Traitement mécanique + anti-mousse préventif. Protection 3–5 ans.",
                price: "devis gratuit",
                tag: null,
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-start gap-5 p-5 hover:bg-gray-50 transition-colors group"
              >
                <div className="bg-gray-100 group-hover:bg-white p-3 rounded-xl flex-shrink-0 transition-colors">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#1A4731] transition-colors">{s.title}</h3>
                    {s.tag && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">{s.tag}</span>
                    )}
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

      {/* FAQ — questions/réponses uccleoises inline */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Uccle</h2>
          <div className="space-y-5">
            {[
              {
                q: "À quelle fréquence faut-il nettoyer les gouttières à Uccle ?",
                a: "À Uccle, deux nettoyages par an sont souvent nécessaires — mai après les floraisons printanières, novembre après la chute des feuilles. Les propriétés avec de grands jardins arborés (platanes, chênes, hêtres) peuvent nécessiter trois passages.",
              },
              {
                q: "Intervenez-vous avenue Molière et avenue Brugmann ?",
                a: "Oui, nous intervenons régulièrement dans toutes les avenues d'Uccle — Molière, Brugmann, Winston Churchill, Delleur et le quartier du Bois. Notre matériel est adapté aux villas haut de gamme avec façades hautes.",
              },
              {
                q: "Mes gouttières en zinc d'époque peuvent-elles être réparées ?",
                a: "Les gouttières en zinc des villas des années 30–60 peuvent souvent être réparées par soudure ou reprise de joints si l'oxydation n'est pas trop avancée. Sinon, remplacement par zinc neuf ou aluminium laqué qui s'intègre parfaitement à l'architecture d'époque.",
              },
              {
                q: "La pente de mon jardin aggrave-t-elle les risques ?",
                a: "Oui. Les terrains en pente typiques d'Uccle concentrent les eaux pluviales vers les fondations en cas de débordement. C'est pourquoi l'entretien régulier est encore plus crucial ici — un bouchon peut causer des infiltrations de fondations en quelques heures.",
              },
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

      {/* Devis — centré, sobre */}
      <section id="devis" className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit pour Uccle</h2>
            <p className="text-gray-500 text-sm">
              Réponse sous 2h · ou appelez le{" "}
              <a href="tel:0451053370" className="font-bold text-[#1A4731] hover:text-[#F97316]">0451 05 33 70</a>
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Communes voisines */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Forest", slug: "forest" },
              { name: "Ixelles", slug: "ixelles" },
              { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/communes/${c.slug}`}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#1A4731] hover:text-[#1A4731] text-gray-600 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                <MapPin size={12} className="text-[#F97316]" />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
