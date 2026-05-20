import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Schaerbeek — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Schaerbeek : maisons Art Nouveau, ornements zinc, gouttières décoratives difficiles d'accès. Propriétaires soucieux du patrimoine. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/schaerbeek" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "Les façades Art Nouveau de Schaerbeek comptent des ornements et reliefs qui retiennent les débris. Nos techniciens nettoient méticuleusement ces gouttières décoratives en zinc avec le soin qu'exige ce patrimoine exceptionnel.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "Les ornements des façades schaerbeekeoises retiennent les feuilles et créent des bouchons spécifiques. Intervention 7j/7 avec techniciens formés à la manipulation des éléments décoratifs en zinc.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "Les gouttières décoratives en zinc Art Nouveau nécessitent une expertise particulière. Nous réparons les sections endommagées en respectant les profils et ornements d'origine, ou remplaçons à l'identique si nécessaire.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "La densité des arbres de rue à Schaerbeek favorise les mousses sur les toitures. Notre démoussage respecte les matériaux anciens et les tuiles d'époque tout en éliminant efficacement les mousses et lichens.",
  },
]

const faqs = [
  {
    q: "Comment nettoyez-vous les gouttières décoratives Art Nouveau sans les abîmer ?",
    a: "Les gouttières Art Nouveau en zinc sont à la fois décoratives et fonctionnelles. Nous utilisons des outils adaptés — brosses souples, rinçage à faible pression — pour nettoyer sans abîmer les profils ornementaux. Nos techniciens sont formés à la manipulation de ces éléments fragiles et précieux. Nous signalons systématiquement toute fragilité observée pour éviter les mauvaises surprises.",
  },
  {
    q: "Les ornements des façades de Schaerbeek aggravent-ils les problèmes de gouttières ?",
    a: "Oui. Les ornements en zinc — têtes de lions, mascarons, rinceaux — créent des recoins où s'accumulent feuilles, mousses et débris. Ces accumulations localisées créent des points de rétention d'eau qui accélèrent la corrosion du zinc. Un nettoyage annuel est encore plus important sur ces façades ornementées que sur des constructions ordinaires.",
  },
  {
    q: "Comment préserver l'esthétique des gouttières en zinc tout en les remplaçant ?",
    a: "Lorsqu'un remplacement est nécessaire, nous pouvons reproduire les profils d'origine en zinc neuf ou proposer des solutions en aluminium laqué qui imitent l'aspect du zinc patiné. Pour les éléments décoratifs particulièrement précieux, nous pouvons recommander des artisans spécialisés en restauration du patrimoine.",
  },
  {
    q: "Les arbres de rue à Schaerbeek nécessitent-ils un nettoyage plus fréquent ?",
    a: "Schaerbeek compte parmi les communes bruxelloises les plus denses en arbres de rue — tilleuls, marronniers et platanes bordent la quasi-totalité de ses avenues. Ces arbres génèrent d'importants volumes de feuilles, fleurs et graines. Un nettoyage annuel est indispensable, et les propriétés donnant directement sur une allée d'arbres bénéficient parfois d'un deuxième passage au printemps.",
  },
]

export default function SchaerbeekPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Schaerbeek" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Commune de Schaerbeek</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Art Nouveau</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Devis gratuit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Schaerbeek</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Schaerbeek. Maisons Art Nouveau avec ornements en zinc, gouttières décoratives difficiles à nettoyer, arbres de rue denses : nous intervenons avec le soin qu'exige ce patrimoine architectural exceptionnel.
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
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Un patrimoine exceptionnel qui demande une expertise particulière</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Les spécificités des gouttières à Schaerbeek
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Schaerbeek est l'une des communes bruxelloises les plus riches en <strong>architecture Art Nouveau et Art Déco</strong>. Ses avenues et rues abritent des centaines de façades ornementées datant du début du XXe siècle, avec leurs caractéristiques ferronneries, céramiques colorées, et — point crucial pour notre métier — leurs <strong>gouttières en zinc décoratives</strong> aux profils complexes et ornements sophistiqués.
              </p>
              <p>
                Ces gouttières décoratives constituent un défi spécifique : les reliefs, modénatures et ornements créent autant de recoins où <strong>s'accumulent les feuilles et débris</strong> qui ne peuvent pas être évacués naturellement par le vent ou la pluie. Une gouttière ornementée schaerbeeekoise retient davantage de matières organiques qu'une gouttière droite standard, et nécessite donc un nettoyage plus méticuleux et plus régulier.
              </p>
              <p>
                La communauté de propriétaires schaerbeekois est également particulièrement attachée à la préservation de son <strong>patrimoine architectural</strong>. Ils attendent de leurs prestataires une approche respectueuse et experte. C'est pourquoi nos techniciens sont formés à la manipulation des éléments en zinc ancien, fragile et irremplaçable. Nous utilisons des outils adaptés — brosses souples, rinçage à faible pression — pour nettoyer sans fragiliser ni abîmer.
              </p>
              <p>
                La densité des <strong>arbres de rue</strong> dans la plupart des avenues de Schaerbeek est également un facteur important : tilleuls, marronniers et platanes génèrent des volumes importants de feuilles et de fleurs qui viennent obstruer ces gouttières décoratives à chaque saison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Problèmes fréquents à Schaerbeek</h2>
            <p className="text-gray-600">Les situations que nous rencontrons le plus souvent dans cette commune</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wrench size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Ornements qui retiennent les débris",
                desc: "Les reliefs décoratifs des corniches Art Nouveau créent des zones de rétention où feuilles, mousses et débris s'accumulent. Un nettoyage manuel méticuleux est nécessaire dans ces zones.",
              },
              {
                icon: <AlertTriangle size={28} className="text-[#F97316]" />,
                bg: "bg-orange-100",
                title: "Zinc décoratif corrodé",
                desc: "Le zinc des façades Art Nouveau a parfois plus de 100 ans. Malgré sa durabilité légendaire, il montre des signes d'oxydation avancée et de micro-perforations à certains endroits.",
              },
              {
                icon: <MapPin size={28} className="text-red-600" />,
                bg: "bg-red-100",
                title: "Accès difficile en hauteur",
                desc: "Les immeubles de Schaerbeek atteignent souvent 4 à 5 étages. Les rues denses et les trottoirs étroits compliquent parfois le stationnement et l'installation du matériel de montée en hauteur.",
              },
              {
                icon: <Leaf size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Arbres de rue très présents",
                desc: "Tilleuls, marronniers et platanes bordent la majorité des avenues de Schaerbeek. Chaque saison, leurs feuilles et fleurs viennent s'accumuler dans les corniches ornementées des façades.",
              },
              {
                icon: <Droplets size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Infiltrations par les ornements",
                desc: "Les jonctions entre ornements décoratifs et le zinc de la gouttière principale sont des points de faiblesse. L'eau peut s'infiltrer dans ces joints et provoquer des dégâts invisibles à l'intérieur de la façade.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Approche patrimoniale",
                desc: "Pour les propriétaires attachés à la préservation de leur patrimoine Art Nouveau, nous proposons une inspection détaillée avec rapport photographique de l'état de chaque élément en zinc.",
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Schaerbeek</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Schaerbeek</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Devis gratuit — Schaerbeek</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Propriétaire d'une maison Art Nouveau à Schaerbeek ? Contactez-nous pour un devis tenant compte des spécificités de votre patrimoine architectural.
              </p>
              <div className="space-y-3 mb-8">
                {["Expertise zinc Art Nouveau", "Manipulation délicate des ornements", "Rapport photographique disponible", "Techniciens certifiés RC Pro"].map((item) => (
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
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Schaerbeek</h3>
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
              { name: "Etterbeek", slug: "etterbeek" },
              { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
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
