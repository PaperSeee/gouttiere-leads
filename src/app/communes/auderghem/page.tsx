import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Auderghem — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Auderghem : maisons 4 façades, Forêt de Soignes, aluminium à remplacer. Rouge-Cloître. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/auderghem" },
}

export default function AuderghemPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Auderghem" },
      ]} />

      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin size={14} className="text-[#F97316]" />
                <span>Commune d&apos;Auderghem · Forêt de Soignes</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières<br />
                <span className="text-[#1A4731]">Auderghem</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-7 max-w-xl">
                À la lisière de la Forêt de Soignes, Auderghem cumule feuilles tardives de hêtres
                et grands linéaires de gouttières sur maisons 4 façades. Intervention sous 48h,
                devis gratuit.
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
              <p className="text-green-300 text-xs font-semibold uppercase tracking-wide mb-4">Auderghem en chiffres</p>
              <div className="space-y-4">
                {[
                  { val: "Janv.–fév.", label: "meilleure période", detail: "hêtres tardifs du Soignes" },
                  { val: "35–45 ans", label: "aluminium des années 80", detail: "souvent en fin de vie" },
                  { val: "Humidité++", label: "taux élevé toute l'année", detail: "mousses particulièrement tenaces" },
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
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">Particularités d&apos;Auderghem</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">La Forêt de Soignes change tout</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Auderghem est l&apos;une des communes bruxelloises les plus directement influencées par
                  la <strong>Forêt de Soignes</strong>. Composée majoritairement de hêtres, cette forêt
                  impose un calendrier atypique : les feuilles tombent tardivement, certaines persistant
                  jusqu&apos;en janvier-février. Le nettoyage automnale classique (octobre-novembre) ne suffit
                  donc pas — un second passage post-hivernal s&apos;impose pour les propriétés exposées.
                </p>
                <p>
                  Les <strong>maisons 4 façades</strong> construites dans les années 80 sont très répandues
                  à Auderghem. Leurs gouttières en aluminium, installées à l&apos;origine, atteignent aujourd&apos;hui
                  35 à 45 ans d&apos;âge — bien au-delà de leur durée de vie théorique de 30-40 ans. Clips
                  lâches, profils déformés, joints secs : un diagnostic s&apos;impose avant chaque hiver.
                </p>
                <p>
                  La forte humidité ambiante liée à la forêt et aux ruisseaux de la commune favorise
                  les <strong>mousses tenaces</strong> sur les toitures. Sans traitement préventif, elles
                  migrent vers les gouttières et réduisent leur capacité d&apos;écoulement de 30 à 50%.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=700&q=80"
                alt="Gouttière entretien Auderghem Bruxelles"
                width={600}
                height={380}
                className="rounded-2xl object-cover w-full h-64"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Leaf size={18} className="text-[#1A4731]" />, text: "Hêtres tardifs du Soignes", bg: "bg-green-50" },
                  { icon: <Wrench size={18} className="text-blue-600" />, text: "Aluminium des années 80", bg: "bg-blue-50" },
                  { icon: <Droplets size={18} className="text-[#F97316]" />, text: "Humidité ambiante élevée", bg: "bg-orange-50" },
                  { icon: <AlertTriangle size={18} className="text-red-500" />, text: "Grands linéaires 50–80m", bg: "bg-red-50" },
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

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Nos services à Auderghem</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { icon: <Droplets size={22} className="text-[#1A4731]" />, href: "/services/nettoyage-gouttieres", title: "Nettoyage complet", desc: "Feuilles de hêtres tardives et débris végétaux évacués. Nettoyage post-hivernal recommandé à Auderghem pour traiter les apports de janvier-février.", price: "dès 80€", tag: "Le plus demandé" },
              { icon: <AlertTriangle size={22} className="text-red-500" />, href: "/services/debouchage-gouttieres", title: "Débouchage urgence 7j/7", desc: "Débordement actif ? On intervient rapidement. Les jardins plats d'Auderghem retiennent l'eau près des fondations en cas d'obstruction.", price: "dès 120€", tag: "Urgence" },
              { icon: <Wrench size={22} className="text-blue-600" />, href: "/services/reparation-gouttieres", title: "Remplacement aluminium", desc: "Diagnostic et remplacement des gouttières en aluminium des années 80 arrivées en fin de vie. Devis sur mesure selon les linéaires.", price: "devis gratuit", tag: null },
              { icon: <Leaf size={22} className="text-yellow-600" />, href: "/services/demoussage-toiture", title: "Démoussage toiture", desc: "Particulièrement recommandé à Auderghem. Le traitement anti-mousse préventif après démoussage limite la recolonisation à 3–5 ans.", price: "devis gratuit", tag: null },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — Auderghem</h2>
          <div className="space-y-5">
            {[
              { q: "La Forêt de Soignes impacte-t-elle vraiment les gouttières à Auderghem ?", a: "Oui, très significativement. Composée majoritairement de hêtres à feuilles caduques tardives, la forêt génère des apports de feuilles jusqu'en janvier-février. Un nettoyage en novembre ne suffit pas — un passage hivernal ou en début d'année est souvent nécessaire pour les propriétés proches du Soignes." },
              { q: "Mes gouttières en aluminium des années 80 sont-elles à remplacer ?", a: "À 35–45 ans, les gouttières en aluminium des années 80 dépassent leur durée de vie théorique. Si les profils se déforment, si les clips se décrochent ou si les joints sèchent, un remplacement s'impose. Un diagnostic gratuit permet de trancher entre réparation ciblée ou remplacement complet." },
              { q: "Intervenez-vous dans le quartier Rouge-Cloître ?", a: "Oui, nous intervenons dans tout Auderghem, y compris Rouge-Cloître, un quartier particulièrement boisé et humide. L'accès est facile et les propriétés y ont généralement des jardins arborés qui nécessitent un entretien régulier des gouttières." },
              { q: "Proposez-vous des devis pour les grandes propriétés ?", a: "Absolument. Les maisons 4 façades d'Auderghem peuvent avoir 50 à 80 mètres de gouttières. Nous établissons systématiquement un devis sur mesure tenant compte du linéaire total, de l'accessibilité et de l'état général de l'installation." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Devis gratuit — Auderghem</h2>
            <p className="text-gray-500 text-sm">Réponse sous 2h · ou appelez le <a href="tel:0477234187" className="font-bold text-[#1A4731] hover:text-[#F97316]">0477 23 41 87</a></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines desservies</p>
          <div className="flex flex-wrap gap-2">
            {[{ name: "Watermael-Boitsfort", slug: "watermael-boitsfort" }, { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" }, { name: "Ixelles", slug: "ixelles" }].map((c) => (
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
