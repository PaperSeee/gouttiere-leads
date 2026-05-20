import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, MapPin, Leaf, Droplets, Wrench, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Watermael-Boitsfort — Expert Local | Nettoyage Gouttières Bruxelles",
  description: "Nettoyage gouttières à Watermael-Boitsfort : commune la plus boisée de Bruxelles, démoussage intensif, 2 nettoyages/an recommandés. Devis gratuit. 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/communes/watermael-boitsfort" },
}

const services = [
  {
    href: "/services/nettoyage-gouttieres",
    icon: <Droplets size={24} className="text-[#1A4731]" />,
    bg: "bg-green-100",
    title: "Nettoyage complet",
    desc: "Watermael-Boitsfort est la commune la plus boisée de Bruxelles. Nos techniciens y interviennent régulièrement pour des nettoyages approfondis face aux apports constants de feuilles, samares et débris végétaux.",
  },
  {
    href: "/services/debouchage-gouttieres",
    icon: <AlertTriangle size={24} className="text-red-600" />,
    bg: "bg-red-100",
    title: "Débouchage urgence",
    desc: "Dans cette commune très boisée, les gouttières se bouchent rapidement et provoquent des débordements. Notre service d'urgence 7j/7 assure une intervention rapide pour protéger vos habitations.",
  },
  {
    href: "/services/reparation-gouttieres",
    icon: <Wrench size={24} className="text-blue-600" />,
    bg: "bg-blue-100",
    title: "Réparation / remplacement",
    desc: "L'environnement végétal intense de Watermael-Boitsfort accélère l'usure des gouttières. Nous réparons les systèmes existants ou les remplaçons par des matériaux résistants adaptés à cet environnement.",
  },
  {
    href: "/services/demoussage-toiture",
    icon: <Leaf size={24} className="text-yellow-700" />,
    bg: "bg-yellow-100",
    title: "Démoussage toiture",
    desc: "Watermael-Boitsfort est notre commune de référence pour le démoussage intensif. L'ombrage permanent et l'humidité élevée créent des conditions extrêmement favorables aux mousses. Traitement bi-annuel recommandé.",
  },
]

const faqs = [
  {
    q: "Combien de nettoyages faut-il par an à Watermael-Boitsfort ?",
    a: "Nous recommandons systématiquement deux nettoyages par an à Watermael-Boitsfort, voire trois pour les propriétés les plus boisées. Le premier en mai-juin pour les samares, graines et floraisons printanières ; le second en novembre après la chute des feuilles ; et optionnellement un troisième en janvier-février pour les apports tardifs des hêtres et chênes. C'est 2 à 3 fois plus que dans d'autres communes bruxelloises.",
  },
  {
    q: "Pourquoi Watermael-Boitsfort nécessite-t-elle un démoussage plus fréquent ?",
    a: "Watermael-Boitsfort est la commune la plus arborée de Bruxelles, avec une couverture végétale exceptionnelle. L'ombrage permanent réduit le séchage des toitures après les pluies, et l'humidité ambiante élevée liée aux nombreux arbres crée des conditions idéales pour le développement des mousses. Sans traitement préventif, une toiture peut être entièrement couverte de mousse en moins de deux ans.",
  },
  {
    q: "La végétation peut-elle endommager directement mes gouttières ?",
    a: "Oui, dans certains cas. Les racines de la végétation qui s'installe dans les gouttières mal entretenues peuvent fissurer les profils en PVC et forcer les jonctions. Les branches surplombant les toitures frottent sur les gouttières lors du vent et peuvent les désolidariser de leur support. Nous conseillons également un élagage préventif des branches les plus proches.",
  },
  {
    q: "Quel est le tarif pour un nettoyage à Watermael-Boitsfort ?",
    a: "Le tarif dépend de la longueur de gouttières, de l'accessibilité et de l'état de votre système. Pour une maison standard à Watermael-Boitsfort, un nettoyage complet (gouttières + descentes) se situe généralement entre 100 et 180€. Nous établissons un devis précis et gratuit avant toute intervention, sans surprise.",
  },
]

export default function WatermaeBoitsfortPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Communes", href: "/" },
        { label: "Watermael-Boitsfort" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">Watermael-Boitsfort</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Commune la plus boisée</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">2 nettoyages/an</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à <span className="text-[#F97316]">Watermael-Boitsfort</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Expert local en nettoyage de gouttières à Watermael-Boitsfort. La commune la plus boisée de Bruxelles exige un entretien renforcé : feuilles en continu, mousses tenaces, végétation envahissante. Deux nettoyages par an minimum.
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
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">La commune la plus exigeante de Bruxelles</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Pourquoi Watermael-Boitsfort demande un entretien renforcé
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Watermael-Boitsfort est, sans conteste, la commune bruxelloise où l'entretien des gouttières est le plus exigeant. Avec <strong>la plus haute densité végétale de la région bruxelloise</strong>, cette commune où les maisons semblent nichées dans la forêt offre un cadre de vie incomparable — mais impose des contraintes d'entretien très spécifiques à ses habitants.
              </p>
              <p>
                Ici, les <strong>feuilles tombent en continu</strong> de septembre à janvier. Platanes, chênes, hêtres, érables et châtaigniers se succèdent dans leur cycle de chute des feuilles, créant un apport quasi ininterrompu de débris végétaux dans les gouttières pendant plus de quatre mois. Dans certaines propriétés particulièrement boisées, des gouttières non entretenues peuvent se retrouver entièrement remplies de feuilles compactées en moins de six semaines.
              </p>
              <p>
                La <strong>prolifération de mousses</strong> est également exceptionnellement rapide à Watermael-Boitsfort. L'ombrage permanent des grands arbres empêche le séchage naturel des toitures après les pluies. Combiné à l'humidité ambiante élevée de cette commune très boisée, ce contexte crée des conditions idéales pour que les mousses et lichens colonisent toute la surface d'une toiture en moins de deux ans.
              </p>
              <p>
                Notre recommandation pour Watermael-Boitsfort est claire : <strong>deux nettoyages par an minimum</strong>, idéalement au printemps et en fin d'automne. Pour les propriétés les plus boisées, un troisième passage en janvier est souvent justifié. Un démoussage de toiture tous les deux à trois ans complète l'entretien préventif recommandé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Problèmes fréquents à Watermael-Boitsfort</h2>
            <p className="text-gray-600">La commune la plus boisée de Bruxelles génère des défis uniques pour vos gouttières</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf size={28} className="text-[#1A4731]" />,
                bg: "bg-green-100",
                title: "Feuilles en continu 4 mois",
                desc: "De septembre à janvier, les arbres de Watermael-Boitsfort produisent des feuilles sans interruption. Un nettoyage unique en novembre ne suffit pas à traiter l'intégralité de cette période.",
              },
              {
                icon: <Leaf size={28} className="text-yellow-700" />,
                bg: "bg-yellow-100",
                title: "Mousses ultra-rapides",
                desc: "Sans traitement préventif, une toiture à Watermael-Boitsfort peut être entièrement couverte de mousse en 18 à 24 mois. La vitesse de développement est 2 à 3 fois supérieure à celle des communes moins boisées.",
              },
              {
                icon: <AlertTriangle size={28} className="text-[#F97316]" />,
                bg: "bg-orange-100",
                title: "Végétation dans les gouttières",
                desc: "Dans les cas extrêmes d'absence d'entretien, des plantes entières poussent dans les gouttières de Watermael. Les racines fissurent le PVC et les jonctions doivent être entièrement remplacées.",
              },
              {
                icon: <Droplets size={28} className="text-blue-600" />,
                bg: "bg-blue-100",
                title: "Saturation rapide des descentes",
                desc: "Les volumes de feuilles et de mousses sont tels que même des descentes pluviales bien dimensionnées se bouchent rapidement. Nettoyage des descentes inclus systématiquement dans nos interventions.",
              },
              {
                icon: <Wrench size={28} className="text-purple-600" />,
                bg: "bg-purple-100",
                title: "Usure accélérée des gouttières",
                desc: "L'humidité permanente et les chocs mécaniques des branches accélèrent l'usure des gouttières à Watermael. Une inspection annuelle permet de détecter les fragilités avant qu'elles ne deviennent des problèmes.",
              },
              {
                icon: <CheckCircle size={28} className="text-green-600" />,
                bg: "bg-green-50",
                title: "Contrat bi-annuel recommandé",
                desc: "Pour Watermael-Boitsfort, nous recommandons systématiquement un contrat d'entretien bi-annuel. C'est la solution la plus économique pour maintenir vos gouttières en parfait état sur le long terme.",
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Nos services à Watermael-Boitsfort</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes — Watermael-Boitsfort</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Devis gratuit — Watermael-Boitsfort</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Votre propriété dans la commune la plus boisée de Bruxelles mérite un entretien renforcé. Contactez-nous pour un devis adapté à votre situation.
              </p>
              <div className="space-y-3 mb-8">
                {["Devis entièrement gratuit", "Contrats bi-annuels disponibles", "Démoussage intensif spécialisé", "Intervention urgence 7j/7"].map((item) => (
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
              <h3 className="text-gray-900 font-bold text-lg mb-6">Formulaire de devis — Watermael-Boitsfort</h3>
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
              { name: "Auderghem", slug: "auderghem" },
              { name: "Uccle", slug: "uccle" },
              { name: "Forest", slug: "forest" },
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
