import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Etterbeek — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Etterbeek : immeubles haussmanniens, corniches zinc, accès en hauteur. Cinquantenaire, débordements caves. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/etterbeek" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "Les immeubles haussmanniens d'Etterbeek ont des corniches en zinc classiques à fort volume. Nous nettoyons en profondeur ces gouttières souvent hautes perchées et les descentes pluviales encastrées.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "Dans les immeubles etterbeekois, un débordement peut rapidement atteindre les caves et rez-de-chaussée. Intervention d'urgence 7j/7 pour déboucher rapidement avant que les dégâts ne s'aggravent.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "Les corniches en zinc classique des façades haussmanniennes d'Etterbeek nécessitent un savoir-faire spécifique. Nous réparons ou remplaçons ces éléments en respectant l'architecture d'époque.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "Les arbres matures du quartier du Cinquantenaire génèrent de l'ombrage et de l'humidité favorables aux mousses. Notre démoussage traite l'ensemble de la toiture et prévient la repousse sur 2-3 ans.",
  },
]

const faqs = [
  {
    q: "Comment intervenez-vous sur les immeubles haussmanniens d'Etterbeek ?",
    a: "Les immeubles haussmanniens atteignent souvent 4 à 5 étages avec des corniches en zinc situées très haut. Nous utilisons des échelles professionnelles, des échafaudages légers ou des nacelles selon la configuration. La sécurité est notre priorité et nous n'intervenons jamais dans des conditions non sécurisées.",
  },
  {
    q: "Pourquoi mes caves sont-elles humides malgré l'absence de pluie apparente ?",
    a: "Les caves humides à Etterbeek sont souvent liées à des gouttières bouchées. L'eau qui déborde coule le long de la façade et s'infiltre autour des fondations, puis dans les caves. Ce problème récurrent disparaît généralement avec un entretien régulier des gouttières et des descentes pluviales.",
  },
  {
    q: "Les arbres du Cinquantenaire ont-ils un impact sur les gouttières ?",
    a: "Oui, les arbres matures du quartier du Cinquantenaire — tilleuls, platanes et marronniers centenaires — génèrent des volumes importants de feuilles, fleurs et graines. Les propriétés du quartier Ambiorix, Cortenbergh et alentours bénéficient d'un nettoyage annuel après la chute des feuilles en novembre.",
  },
  {
    q: "Quel est le risque lié à des gouttières bouchées dans un immeuble de plusieurs étages ?",
    a: "Dans un immeuble de 4-5 étages, l'eau qui déborde d'une gouttière en haut du bâtiment parcourt toute la façade avant d'atteindre le sol. Ce ruissellement continu dégrade les joints de façade, le crépi et les châssis de fenêtres sur tous les étages. Au sol, l'accumulation d'eau sature le sol autour des fondations et provoque des infiltrations en cave.",
  },
]

export default function EtterbeekPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Etterbeek" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Commune d'Etterbeek</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Immeubles haussmanniens</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Devis gratuit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Etterbeek</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Etterbeek. Immeubles haussmanniens, corniches en zinc classique, accès en hauteur difficile : notre équipe est équipée pour intervenir en toute sécurité.
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
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Pourquoi Etterbeek est particulière</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Les spécificités des gouttières à Etterbeek
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Etterbeek est une commune au caractère résolument <strong>haussmannien</strong>, avec ses belles façades en brique et pierre bleue du XIXe et début XXe siècle. Ces immeubles élégants sont équipés de <strong>corniches en zinc classique</strong> qui constituent à la fois un élément architectural précieux et un défi d'entretien : situées en hauteur et souvent difficiles d'accès, ces gouttières sont trop souvent négligées faute d'un équipement adapté.
              </p>
              <p>
                La hauteur des bâtiments — généralement 4 à 5 étages — complique considérablement les interventions. Notre équipe est équipée d'<strong>échelles professionnelles, d'échafaudages légers et de matériel de sécurité</strong> adaptés pour travailler en hauteur dans les rues parfois étroites d'Etterbeek. Nous respectons scrupuleusement les normes de sécurité et n'intervenons jamais dans des conditions non sécurisées.
              </p>
              <p>
                Les problèmes liés aux gouttières ont des conséquences particulièrement visibles dans cette commune : les <strong>caves et rez-de-chaussée</strong> des immeubles etterbeekois souffrent fréquemment d'humidité chronique directement liée au débordement des gouttières en hauteur. L'eau ruisselle le long de la façade sur plusieurs étages et s'infiltre progressivement dans les murs et fondations.
              </p>
              <p>
                La proximité du <strong>quartier du Cinquantenaire</strong>, avec ses grands arbres matures, apporte également son lot de feuilles dans les gouttières des immeubles riverains chaque automne. Un nettoyage annuel en novembre est indispensable pour ces propriétés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Problèmes fréquents à Etterbeek</h2>
            <p className="text-gray-600">Les situations que nous rencontrons le plus souvent dans cette commune</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin size={28} className="text-red-600" />,
                bg: "bg-red-100",
                title: "Accès en hauteur difficile",
                desc: "Les immeubles haussmanniens de 4-5 étages rendent l'accès aux gouttières délicat. Certaines rues étroites d'Etterbeek compliquent encore le stationnement et l'installation du matériel.",
              },
              {
                icon: <Wrench size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Zinc classique vieillissant",
                desc: "Les corniches en zinc des façades haussmanniennes ont souvent plus de 50 ans. Oxydation avancée, perforations et joints défaillants nécessitent des réparations régulières par des techniciens expérimentés.",
              },
              {
                icon: <Droplets size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Infiltrations en cave",
                desc: "Les caves humides à Etterbeek sont souvent le symptôme de gouttières bouchées. L'eau ruisselle sur 4-5 étages de façade avant d'atteindre les fondations et les caves.",
              },
              {
                icon: <AlertTriangle size={28} className="text-[#F97316]" />,
                bg: "bg-orange-100",
                title: "Dégradation des façades",
                desc: "Le ruissellement chronique d'eau sale sur les façades haussmanniennes dégrade les joints de maçonnerie et favorise l'apparition de taches noires et de salpêtre sur les étages inférieurs.",
              },
              {
                icon: <Leaf size={28} className="text-yellow-700" />,
                bg: "bg-yellow-100",
                title: "Arbres du Cinquantenaire",
                desc: "Les tilleuls, platanes et marronniers du quartier du Cinquantenaire génèrent des volumes importants de feuilles et de fleurs qui obstruent les gouttières des immeubles riverains chaque printemps et automne.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Coordination avec syndics",
                desc: "Pour les immeubles en copropriété, nous coordonnons directement avec le syndic. Devis détaillés, rapports d'intervention et contrats d'entretien adaptés aux exigences des assemblées générales.",
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Etterbeek</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Etterbeek</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Devis gratuit — Etterbeek</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Immeuble haussmannien ou maison de maître à Etterbeek ? Contactez-nous pour un devis adapté. Notre équipe est équipée pour les interventions en hauteur dans toute la commune.
              </p>
              <div className="space-y-3 mb-8">
                {["Matériel adapté aux grandes hauteurs", "Expertise zinc haussmannien", "Coordination avec syndics", "Intervention urgence 7j/7"].map((item) => (
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
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Etterbeek</h3>
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
              { name: "Ixelles", slug: "ixelles" },
              { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
              { name: "Schaerbeek", slug: "schaerbeek" },
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
