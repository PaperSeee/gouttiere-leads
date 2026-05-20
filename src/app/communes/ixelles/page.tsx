import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Ixelles — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Ixelles : toitures plates, évacuations intérieures, corniches zinc décoratifs. Intervention rapide. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/ixelles" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "À Ixelles, les immeubles avec toitures plates et gouttières intérieures nécessitent un nettoyage méticuleux des dalles et des évacuations centrales pour garantir un drainage parfait.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "Les évacuations intérieures des toitures plates ixelloises se bouchent facilement. En cas de stagnation d'eau sur dalle, notre équipe intervient en urgence 7j/7 pour déboucher haute pression.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "Les corniches en zinc décoratives des maisons de maître d'Ixelles exigent une expertise particulière. Nous réparons ou remplaçons ces éléments en respectant l'esthétique d'origine.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "La proximité des étangs d'Ixelles crée une humidité ambiante élevée qui favorise les mousses sur toitures. Notre traitement anti-mousse est particulièrement efficace dans ce contexte humide.",
  },
]

const faqs = [
  {
    q: "Comment fonctionne le nettoyage des toitures plates à Ixelles ?",
    a: "Les toitures plates avec évacuation centrale nécessitent une approche différente des gouttières traditionnelles. Nous nettoyons les dalles, débouchons les siphons de sol et vérifions le bon écoulement vers les descentes pluviales. Cette intervention est recommandée chaque année au printemps et à l'automne.",
  },
  {
    q: "Pourquoi l'humidité est-elle un problème particulier à Ixelles ?",
    a: "La proximité des étangs d'Ixelles génère un taux d'humidité ambiante supérieur à la moyenne bruxelloise. Cette humidité favorise la prolifération de mousses, lichens et algues sur les toitures et dans les gouttières. Un démoussage régulier est essentiel pour préserver vos équipements.",
  },
  {
    q: "Intervenez-vous dans les immeubles à appartements d'Ixelles ?",
    a: "Oui, nous travaillons en coordination avec les syndics et gestionnaires de copropriétés. Pour les immeubles, nous proposons des devis collectifs et pouvons planifier l'intervention en dehors des heures de pointe pour minimiser les nuisances aux résidents.",
  },
  {
    q: "Les corniches en zinc décoratif peuvent-elles être réparées ?",
    a: "Les corniches décoratives en zinc des maisons de maître ixelloises sont réparables dans la majorité des cas. Nos techniciens maîtrisent le travail du zinc et peuvent ressouder les jonctions, relifter les profils déformés ou remplacer les sections les plus endommagées en conservant l'aspect esthétique d'origine.",
  },
]

export default function IxellesPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Ixelles" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Commune d'Ixelles</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Devis gratuit</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Intervention 48h</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Ixelles</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Ixelles. Toitures plates, évacuations intérieures, corniches en zinc décoratives : nous maîtrisons toutes les spécificités architecturales de cette commune.
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

      {/* Intro spécifique */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Pourquoi Ixelles est particulière</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Les spécificités des gouttières ixelloises
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Ixelles se distingue des autres communes bruxelloises par son architecture très variée : <strong>immeubles haussmanniens avec toitures plates et évacuations centrales</strong>, maisons de maître ornées de corniches en zinc décoratives, et buildings modernes aux systèmes d'évacuation complexes. Chaque type de construction pose des défis spécifiques en matière d'entretien des gouttières et évacuations pluviales.
              </p>
              <p>
                Les immeubles à toiture plate représentent une part importante du parc immobilier ixellois. Contrairement aux gouttières traditionnelles, ces toitures utilisent des <strong>évacuations intérieures par siphons de sol</strong> qui drainent l'eau à travers la dalle vers les descentes pluviales internes à l'immeuble. Ces dispositifs se bouchent régulièrement avec les feuilles, les sédiments et les dépôts bitumineux qui migrent depuis l'étanchéité.
              </p>
              <p>
                Les maisons de maître d'Ixelles, nombreuses dans les quartiers Lepoutre, Saint-Boniface et Flagey, arborent de <strong>belles corniches en zinc décoratives</strong> qui font le charme de la commune. Ces éléments, souvent centenaires, nécessitent une expertise particulière : le zinc ancien est fragile et demande une manipulation prudente lors du nettoyage pour éviter de créer de nouvelles perforations.
              </p>
              <p>
                Enfin, la <strong>proximité des étangs d'Ixelles</strong> crée un microclimat particulièrement humide dans les quartiers environnants. Cette humidité ambiante élevée accélère considérablement la prolifération de mousses et lichens sur les toitures, qui finissent par migrer vers les gouttières et en réduire la capacité d'écoulement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes spécifiques */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Problèmes fréquents à Ixelles
            </h2>
            <p className="text-gray-600">Les situations que nous rencontrons le plus souvent dans cette commune</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Droplets size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Siphons de toiture bouchés",
                desc: "Les siphons des toitures plates accumulent feuilles, sédiments et dépôts bitumineux. Un siphon bouché crée une rétention d'eau dangereuse pour l'étanchéité de la dalle.",
              },
              {
                icon: <AlertTriangle size={28} className="text-[#F97316]" />,
                bg: "bg-orange-100",
                title: "Étanchéité fragilisée",
                desc: "L'eau stagnante sur une toiture plate dégrade progressivement les membranes d'étanchéité. Un nettoyage régulier des évacuations prévient ces dégradations coûteuses.",
              },
              {
                icon: <Wrench size={28} className="text-purple-600" />,
                bg: "bg-purple-100",
                title: "Zinc décoratif fissuré",
                desc: "Les corniches décoratives en zinc souffrent de la dilatation thermique et des intempéries. Les jonctions se fissure et l'eau s'infiltre derrière la façade.",
              },
              {
                icon: <Leaf size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Mousses liées à l'humidité",
                desc: "Le microclimat humide des abords des étangs d'Ixelles favorise une croissance rapide des mousses. Sans traitement, elles colmatent les gouttières en quelques saisons.",
              },
              {
                icon: <MapPin size={28} className="text-red-600" />,
                bg: "bg-red-100",
                title: "Accès en copropriété",
                desc: "Les immeubles ixellois nécessitent une coordination avec le syndic et les résidents. Nous gérons ces aspects logistiques pour une intervention fluide et respectueuse.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Descentes pluviales internes",
                desc: "Les descentes encastrées dans les murs des immeubles anciens sont souvent impossibles à inspecter visuellement. Nous utilisons des techniques de nettoyage haute pression adaptées.",
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Ixelles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Toutes nos interventions adaptées aux spécificités architecturales d'Ixelles</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Ixelles</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Devis gratuit pour votre bien à Ixelles
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contactez-nous pour planifier le nettoyage de vos gouttières ou évacuations. Nous intervenons dans toute la commune d'Ixelles, y compris les toitures plates et immeubles en copropriété.
              </p>
              <div className="space-y-3 mb-8">
                {["Devis entièrement gratuit", "Expertise toitures plates et gouttières", "Coordination syndics et copropriétés", "Techniciens certifiés RC Pro"].map((item) => (
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
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Ixelles</h3>
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
              { name: "Forest", slug: "forest" },
              { name: "Uccle", slug: "uccle" },
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
