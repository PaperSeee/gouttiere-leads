import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Auderghem — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Auderghem : maisons 4 façades, Forêt de Soignes, aluminium à remplacer. Rouge-Cloître. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/auderghem" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "À Auderghem, la proximité de la Forêt de Soignes génère des feuilles persistantes tout l'automne et l'hiver. Nos techniciens nettoient en profondeur gouttières et descentes pour garantir un drainage parfait.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "Les feuilles persistantes du Soignes bouchent les gouttières des propriétés d'Auderghem même en décembre-janvier. Intervention d'urgence 7j/7 pour déboucher rapidement votre système d'évacuation.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "Les gouttières en aluminium des maisons d'Auderghem des années 80-90 arrivent en fin de vie. Remplacement par des matériaux durables, adapté aux maisons 4 façades et aux grandes propriétés.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "L'humidité permanente liée à la Forêt de Soignes et au quartier Rouge-Cloître favorise des mousses tenaces sur les toitures d'Auderghem. Notre démoussage avec traitement préventif est particulièrement recommandé ici.",
  },
]

const faqs = [
  {
    q: "La Forêt de Soignes impacte-t-elle vraiment les gouttières à Auderghem ?",
    a: "Oui, très significativement. La Forêt de Soignes est principalement composée de hêtres — une espèce à feuilles caduques tardives qui continuent de tomber jusqu'en janvier. Les propriétés situées à proximité reçoivent des apports de feuilles sur une période de 3 à 4 mois, ce qui impose un nettoyage post-automne plutôt qu'en novembre comme ailleurs.",
  },
  {
    q: "Mes gouttières en aluminium des années 80 sont-elles à remplacer ?",
    a: "Les gouttières en aluminium installées dans les années 80 ont entre 35 et 45 ans. Leur durée de vie théorique est de 30-40 ans. Un diagnostic complet s'impose : si les profils sont encore rectilignes et les clips solides, une réparation ciblée peut suffire. Dans le cas contraire, un remplacement progressif par sections est la solution la plus économique.",
  },
  {
    q: "Intervenez-vous dans le quartier Rouge-Cloître ?",
    a: "Oui, nous intervenons régulièrement dans le quartier Rouge-Cloître et ses environs, zone particulièrement boisée et humide d'Auderghem. L'accès dans ce quartier résidentiel calme est facile, et les propriétés y ont généralement des jardins arborés qui demandent un entretien régulier des gouttières.",
  },
  {
    q: "Proposez-vous des devis pour les grandes propriétés d'Auderghem ?",
    a: "Absolument. Les maisons 4 façades d'Auderghem ont souvent des linéaires de gouttières importants (50 à 80 mètres sur certaines propriétés). Nous établissons systématiquement un devis sur mesure qui tient compte de la longueur totale, de l'accessibilité et de l'état général du système.",
  },
]

export default function AuderghemPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Auderghem" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Commune d'Auderghem</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Devis gratuit</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Forêt de Soignes</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Auderghem</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Auderghem. Maisons 4 façades, Forêt de Soignes, aluminium des années 80 : nous connaissons les spécificités de cette commune résidentielle et boisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0477234187"
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-4 rounded-xl text-lg transition-colors"
              >
                <Phone size={20} />
                0477 23 41 87
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#1A4731] font-bold px-6 py-4 rounded-xl text-lg transition-colors"
              >
                Devis gratuit en ligne
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Pourquoi Auderghem est particulière</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Les spécificités des gouttières à Auderghem
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Auderghem bénéficie d'une situation géographique unique à Bruxelles : <strong>à la lisière de la Forêt de Soignes</strong>, la plus grande forêt urbaine de Belgique. Cette proximité fait d'Auderghem une commune verdoyante et calme, particulièrement prisée des familles. Mais elle implique également des contraintes spécifiques pour l'entretien des gouttières.
              </p>
              <p>
                La Forêt de Soignes est principalement composée de <strong>hêtres</strong>, une essence forestière dont les feuilles tombent tardivement et persistant parfois jusqu'en janvier. Les propriétés du quartier Rouge-Cloître et des rues adjacentes à la forêt reçoivent des apports de feuilles sur une période nettement plus longue que dans le reste de Bruxelles. Ce calendrier décalé impose un nettoyage hivernal plutôt qu'automnale, idéalement en décembre-janvier.
              </p>
              <p>
                Les <strong>maisons 4 façades</strong> avec grands jardins sont très répandues à Auderghem. Ces propriétés ont des linéaires de gouttières importants et leurs jardins arborés génèrent des volumes de déchets végétaux considérables. Les gouttières en <strong>aluminium installées dans les années 80 et 90</strong> lors de la construction de ces maisons arrivent progressivement à leur limite de durée de vie.
              </p>
              <p>
                L'humidité ambiante élevée liée à la forêt et aux nombreux ruisseaux de la commune favorise également la prolifération de <strong>mousses tenaces</strong> sur les toitures. Sans démoussage régulier, ces mousses migrent vers les gouttières et en réduisent drastiquement la capacité d'écoulement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Problèmes fréquents à Auderghem</h2>
            <p className="text-gray-600">Les situations que nous rencontrons le plus souvent dans cette commune</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Feuilles de hêtres persistantes",
                desc: "Les hêtres de la Forêt de Soignes perdent leurs feuilles tardivement. Des propriétés à Auderghem reçoivent encore des apports massifs de feuilles en décembre et janvier.",
              },
              {
                icon: <Wrench size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Aluminium des années 80",
                desc: "Les maisons d'Auderghem construites dans les années 80 ont souvent des gouttières en aluminium de 35-45 ans. Déformations, clips lâches et joints dégradés sont les signes d'un remplacement nécessaire.",
              },
              {
                icon: <Leaf size={28} className="text-yellow-700" />,
                bg: "bg-yellow-100",
                title: "Mousses et lichens tenaces",
                desc: "L'humidité permanente liée à la forêt et aux ruisseaux d'Auderghem crée des conditions idéales pour les mousses. Sans traitement préventif, elles recolonisent la toiture en 2-3 ans.",
              },
              {
                icon: <MapPin size={28} className="text-red-600" />,
                bg: "bg-red-100",
                title: "Grands linéaires à nettoyer",
                desc: "Les maisons 4 façades d'Auderghem ont souvent 50 à 80 mètres de gouttières. Un nettoyage complet nécessite une équipe expérimentée et du matériel adapté aux grandes propriétés.",
              },
              {
                icon: <Droplets size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Jardins plats à risque d'accumulation",
                desc: "Les terrains plats d'Auderghem ne bénéficient pas d'une pente naturelle pour évacuer les eaux de débordement. Toute obstruction crée une accumulation d'eau autour des fondations.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Nettoyage post-automne recommandé",
                desc: "Compte tenu des apports tardifs de feuilles à Auderghem, nous recommandons un nettoyage en janvier plutôt qu'en novembre pour traiter l'intégralité des chutes de feuilles de la saison.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`${item.bg} p-3 rounded-xl w-fit mb-4`}>{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Nos prestations</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Auderghem</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.href} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`${s.bg} p-3 rounded-xl w-fit mb-4`}>{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.href} className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1">
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Auderghem</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed ml-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-14 bg-[#1A4731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Devis gratuit — Auderghem</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contactez-nous pour planifier le nettoyage de vos gouttières à Auderghem. Devis rapide et intervention soignée sur toutes les propriétés de la commune.
              </p>
              <div className="space-y-3 mb-8">
                {["Devis entièrement gratuit", "Expertise Forêt de Soignes", "Remplacement aluminium sur devis", "Techniciens certifiés RC Pro"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#F97316]" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-white font-semibold mb-1">Appel direct</p>
                <a href="tel:0477234187" className="flex items-center gap-2 text-[#F97316] font-bold text-xl hover:text-orange-400 transition-colors">
                  <Phone size={24} />0477 23 41 87
                </a>
                <p className="text-gray-400 text-xs mt-1">Lun–Ven 7h30–18h | Sam 8h–14h | Urgences 7j/7</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Auderghem</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Zones voisines */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Communes voisines desservies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
              { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
              { name: "Ixelles", slug: "ixelles" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/communes/${c.slug}`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-[#1A4731] hover:text-white text-gray-700 border border-gray-200 hover:border-[#1A4731] rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
              >
                <MapPin size={14} className="text-[#F97316]" />
                Gouttières {c.name}
                <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
