import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Uccle — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage de gouttières à Uccle : villas, maisons 4 façades, zinc oxydé. Intervention rapide avenue Molière, Brugmann. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/uccle" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "À Uccle, les platanes et chênes de l'avenue Molière génèrent des volumes de feuilles considérables. Nous évacuons chaque automne les dépôts accumulés dans vos gouttières et descentes pluviales.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "En cas de débordement actif sur votre villa uccloise, notre équipe intervient en urgence 7j/7. La pente des jardins d'Uccle accélère les risques d'infiltration vers les fondations.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "Les villas des années 30-60 d'Uccle possèdent souvent des gouttières en zinc très oxydées. Nous remplaçons les tronçons endommagés ou l'intégralité du système selon l'état constaté.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "L'humidité des grands jardins ucclois favorise la prolifération de mousses sur les tuiles. Notre traitement anti-mousse protège votre toiture et prolonge la durée de vie des tuiles.",
  },
]

const faqs = [
  {
    q: "À quelle fréquence faut-il nettoyer les gouttières à Uccle ?",
    a: "À Uccle, la densité d'arbres — platanes, chênes, hêtres — impose idéalement deux nettoyages par an : en mai-juin après les floraisons printanières, et en novembre après la chute des feuilles. Avec de grandes propriétés arborées, certains clients optent même pour trois passages annuels.",
  },
  {
    q: "Intervenez-vous avenue Molière et avenue Brugmann ?",
    a: "Oui, nous intervenons régulièrement dans toutes les avenues d'Uccle, incluant Molière, Brugmann, Winston Churchill, Delleur et le quartier du Bois. Accès par notre équipe équipée d'échelles sécurisées adaptées aux villas haut de gamme.",
  },
  {
    q: "Mes gouttières en zinc d'époque peuvent-elles être réparées ?",
    a: "Les gouttières en zinc des villas uccleoises des années 30-60 peuvent souvent être réparées par soudure ou reprise de joints. Si l'oxydation est trop avancée, nous conseillons un remplacement par du zinc neuf ou de l'aluminium laqué, qui s'intègre parfaitement à l'architecture d'époque.",
  },
  {
    q: "La pente de mon jardin aggrave-t-elle les risques ?",
    a: "Absolument. Les terrains en pente typiques d'Uccle concentrent les eaux pluviales vers les fondations en cas de débordement. C'est pourquoi l'entretien régulier des gouttières est encore plus crucial ici qu'ailleurs. Un débordement chronique peut causer des fissures de fondations en quelques saisons.",
  },
]

export default function UcclePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Uccle" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Commune d'Uccle</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Devis gratuit</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Intervention 48h</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Uccle</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Uccle. Villas 4 façades, maisons de maître, zinc d'époque : nous intervenons sur tous types de propriétés uccleoises avec soin et professionnalisme.
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
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Pourquoi Uccle est particulière</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Les spécificités des gouttières uccleoises
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Uccle est l'une des communes les plus arborées de la région bruxelloise. Ses grandes avenues bordées de <strong>platanes centenaires, chênes et hêtres</strong> constituent un cadre de vie exceptionnel — mais représentent un défi constant pour l'entretien des gouttières. Chaque automne, des tonnes de feuilles, de samares et de débris végétaux s'accumulent dans les chenaux et obstruent les descentes pluviales des villas et maisons de maître.
              </p>
              <p>
                Le patrimoine bâti d'Uccle est également spécifique : les <strong>villas des années 30 à 60</strong>, particulièrement nombreuses dans le quartier de l'avenue Molière, avenue Brugmann et le quartier du Bois, sont équipées de gouttières en zinc souvent très oxydées. Ce matériau noble mais sensible à la corrosion nécessite un entretien régulier et, passé un certain stade, un remplacement partiel ou total.
              </p>
              <p>
                La topographie d'Uccle constitue un facteur aggravant supplémentaire. Les propriétés en pente — fréquentes dans cette commune vallonnée — concentrent les eaux de ruissellement vers les fondations en cas de débordement. Un simple bouchon dans une descente pluviale peut, en quelques heures de pluies intenses, provoquer des infiltrations au niveau des caves et fragiliser les fondations sur le long terme.
              </p>
              <p>
                C'est pourquoi nos techniciens interviennent régulièrement à Uccle, notamment avenue Molière, avenue Brugmann, avenue Winston Churchill, et dans tous les quartiers résidentiels de la commune. Nous adaptons notre approche à chaque type de propriété et à l'état de vos équipements.
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
              Problèmes fréquents à Uccle
            </h2>
            <p className="text-gray-600">Les situations que nous rencontrons le plus souvent dans cette commune</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Accumulation massive de feuilles",
                desc: "Les platanes, chênes et hêtres génèrent des volumes de feuilles considérables. Une villa uccloise avec grand jardin peut accumuler plusieurs seaux de débris dans ses gouttières chaque automne.",
              },
              {
                icon: <AlertTriangle size={28} className="text-[#F97316]" />,
                bg: "bg-orange-100",
                title: "Zinc oxydé et perforé",
                desc: "Les gouttières en zinc des villas d'époque atteignent souvent 40-60 ans d'âge. La corrosion crée des perforations qui laissent l'eau s'écouler contre la façade, provoquant salpêtre et taches noires.",
              },
              {
                icon: <Droplets size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Débordements vers les fondations",
                desc: "Sur les propriétés en pente, les débordements de gouttières dirigent l'eau directement vers les fondations. Ce problème récurrent à Uccle nécessite une intervention rapide pour éviter les dégâts structurels.",
              },
              {
                icon: <Wrench size={28} className="text-purple-600" />,
                bg: "bg-purple-100",
                title: "Mousses et lichens",
                desc: "L'humidité des grands jardins ucclois et l'ombrage des arbres favorisent le développement de mousses sur les tuiles et dans les gouttières, réduisant l'écoulement et alourdissant le système.",
              },
              {
                icon: <MapPin size={28} className="text-red-600" />,
                bg: "bg-red-100",
                title: "Accès en hauteur",
                desc: "Certaines villas uccleoises atteignent 3 à 4 étages. Notre équipe est équipée d'échelles et de matériel sécurisé adapté pour travailler en toute sécurité sur ces hauteurs importantes.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Entretien préventif annuel",
                desc: "Nous proposons des contrats d'entretien annuels pour les propriétaires ucclois souhaitant garantir le bon état de leurs gouttières sans avoir à gérer les interventions au cas par cas.",
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Uccle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Toutes nos interventions adaptées aux spécificités des propriétés uccleoises</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Uccle</h2>
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
                Devis gratuit pour votre propriété à Uccle
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contactez-nous pour planifier le nettoyage de vos gouttières. Nous intervenons dans toute la commune d'Uccle, y compris les quartiers les plus résidentiels.
              </p>
              <div className="space-y-3 mb-8">
                {["Devis entièrement gratuit", "Intervention sous 48h", "Techniciens certifiés RC Pro", "Zinc, aluminium, PVC — tous matériaux"].map((item) => (
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
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Uccle</h3>
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
              { name: "Forest", slug: "forest" },
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
