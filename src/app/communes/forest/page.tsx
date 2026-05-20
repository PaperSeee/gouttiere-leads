import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Forest — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Forest : maisons ouvrières, PVC fissuré, salpêtre, tarifs accessibles. Forte demande locataires. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/forest" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "Les maisons ouvrières en brique de Forest ont souvent des gouttières en PVC qui accumulent feuilles et sédiments. Nettoyage complet gouttières + descentes avec rapport d'état inclus, à des tarifs accessibles.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "Les gouttières en PVC fissurées de Forest laissent ruisseler l'eau sur les façades en brique et aggravent le salpêtre. Intervention rapide pour déboucher et évaluer l'état de vos descentes pluviales.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "Le PVC fissuré par le gel hivernal est le problème n°1 à Forest. Nous réparons les sections endommagées ou procédons au remplacement complet par du PVC renforcé, à des prix adaptés au contexte de la commune.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "Les toitures des maisons de Forest accumulent mousses et lichens qui aggravent les problèmes d'étanchéité. Notre démoussage avec traitement préventif protège vos tuiles et réduit les coûts d'entretien à long terme.",
  },
]

const faqs = [
  {
    q: "Pourquoi le salpêtre apparaît-il sur les façades de Forest ?",
    a: "Le salpêtre est le signe visible d'une humidité chronique dans les murs. À Forest, il est très souvent causé par des gouttières bouchées ou des descentes pluviales fissurées qui laissent l'eau ruisseler le long des façades en brique. Une fois les gouttières entretenues, le salpêtre cesse généralement de progresser. Un nettoyage de façade peut ensuite traiter les traces existantes.",
  },
  {
    q: "Le PVC est-il un bon matériau pour les gouttières à Forest ?",
    a: "Le PVC est le matériau le plus répandu dans les maisons ouvrières de Forest. Il est économique et facile à entretenir, mais sensible aux chocs et aux cycles gel-dégel répétés. Après 20-25 ans, des fissures apparaissent aux jonctions. Le remplacement par du PVC renforcé ou de l'aluminium est alors la solution la plus durable.",
  },
  {
    q: "Intervenez-vous aussi pour les locataires ou seulement les propriétaires ?",
    a: "Nous intervenons à la demande des propriétaires, des locataires ou des agences immobilières. Pour les locataires, nous pouvons fournir un rapport d'état détaillé qui permet de clarifier la responsabilité de l'entretien entre bailleur et locataire selon les termes du bail.",
  },
  {
    q: "Quels sont les tarifs à Forest ? Sont-ils vraiment accessibles ?",
    a: "Forest est l'une des communes où nos tarifs sont les plus accessibles, en raison de la typologie des bâtiments (maisons à un ou deux étages, gouttières en PVC simples). Un nettoyage complet d'une maison ouvrière se situe généralement entre 80 et 130€. Nous établissons toujours un devis gratuit avant toute intervention.",
  },
]

export default function ForestPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Forest" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Commune de Forest</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Tarifs accessibles</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Devis gratuit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Forest</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Forest. Maisons ouvrières en brique, PVC fissuré par le gel, salpêtre sur façades : des solutions efficaces à des tarifs adaptés à cette commune populaire.
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
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Pourquoi Forest est particulière</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Les spécificités des gouttières à Forest
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Forest est une commune au tissu urbain dense, caractérisé par un <strong>bâti ouvrier en brique rouge</strong> typique de l'expansion bruxelloise du début du XXe siècle. Ces maisons mitoyennes à un ou deux étages sont robustes, mais leurs gouttières — majoritairement en <strong>PVC installé dans les années 80 et 90</strong> — souffrent des effets du temps et des cycles gel-dégel répétés.
              </p>
              <p>
                Le <strong>PVC fissuré par le gel</strong> est le problème n°1 à Forest. Contrairement au zinc ou à l'aluminium, le PVC se fragilise avec l'âge et devient cassant aux basses températures. Les jonctions entre éléments sont les points les plus vulnérables : elles se décollent ou se fissure et laissent l'eau s'écouler directement contre les façades en brique plutôt que vers les descentes pluviales.
              </p>
              <p>
                Ce ruissellement chronique a une conséquence visible caractéristique des façades forestoises : le <strong>salpêtre</strong>. Ces dépôts blanchâtres qui apparaissent sur les façades en brique sont le signe d'une humidité récurrente dans les murs, directement liée aux débordements de gouttières non entretenus ou endommagés. Sans traitement de la cause — les gouttières défaillantes — le salpêtre réapparaît systématiquement après chaque traitement de façade.
              </p>
              <p>
                Forest accueille une forte proportion de <strong>locataires</strong>, ce qui crée parfois des situations ambiguës sur la responsabilité de l'entretien des gouttières. Nous intervenons aussi bien à la demande des propriétaires-bailleurs que des locataires, et pouvons fournir des rapports d'état utiles pour clarifier les responsabilités contractuelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Problèmes fréquents à Forest</h2>
            <p className="text-gray-600">Les situations que nous rencontrons le plus souvent dans cette commune</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wrench size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "PVC fissuré par le gel",
                desc: "Les gouttières en PVC vieillissant se fissurent aux jonctions lors des cycles gel-dégel hivernaux. Ces fissures laissent l'eau s'écouler contre la façade plutôt que vers les descentes.",
              },
              {
                icon: <AlertTriangle size={28} className="text-[#F97316]" />,
                bg: "bg-orange-100",
                title: "Salpêtre sur façades",
                desc: "Le salpêtre est le symptôme visible des débordements chroniques. Il indique que l'eau ruisselle régulièrement sur la façade en brique, dégradant les joints et pénétrant dans les murs.",
              },
              {
                icon: <Droplets size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Descentes obstruées",
                desc: "Les descentes pluviales des maisons de Forest s'obstruent régulièrement avec les feuilles des arbres de rue. Un nettoyage annuel prévient les débordements et les dégâts associés.",
              },
              {
                icon: <MapPin size={28} className="text-red-600" />,
                bg: "bg-red-100",
                title: "Question locataire/propriétaire",
                desc: "L'entretien des gouttières est souvent au coeur des litiges entre bailleurs et locataires. Nous fournissons des rapports clairs permettant d'identifier les défaillances et leurs causes.",
              },
              {
                icon: <Leaf size={28} className="text-yellow-700" />,
                bg: "bg-yellow-100",
                title: "Mousses sur toitures",
                desc: "Les toitures des maisons ouvrières de Forest s'ennoussent progressivement. Sans traitement, les mousses migrent dans les gouttières et accélèrent leur colmatage.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Tarifs adaptés",
                desc: "Conscients du contexte socio-économique de Forest, nous proposons des tarifs compétitifs et transparents. Devis gratuit, facturation claire, pas de frais cachés.",
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Forest</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Forest</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Devis gratuit — Forest</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Propriétaire ou locataire à Forest ? Contactez-nous pour un devis transparent et accessible. Nous intervenons dans toute la commune avec réactivité.
              </p>
              <div className="space-y-3 mb-8">
                {["Devis gratuit sans engagement", "Tarifs accessibles et transparents", "Rapports pour bailleurs et locataires", "PVC, aluminium, zinc — tous matériaux"].map((item) => (
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
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Forest</h3>
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
              { name: "Uccle", slug: "uccle" },
              { name: "Ixelles", slug: "ixelles" },
              { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
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
