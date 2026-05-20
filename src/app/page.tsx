import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Droplets,
  AlertTriangle,
  Wrench,
  Leaf,
  Clock,
  Shield,
  CheckCircle,
  MapPin,
  ArrowRight,
  Euro,
  ThumbsUp,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import { getRecentPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Nettoyage de Gouttières à Bruxelles — Intervention Rapide | Devis Gratuit",
  description:
    "Expert nettoyage de gouttières à Bruxelles. Débouchage urgent, réparation, démoussage toiture. Devis gratuit, intervention sous 48h. Appelez le 0477 23 41 87.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/" },
};

const communes = [
  { name: "Anderlecht", slug: "anderlecht" },
  { name: "Auderghem", slug: "auderghem" },
  { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" },
  { name: "Bruxelles-Ville", slug: "bruxelles" },
  { name: "Etterbeek", slug: "etterbeek" },
  { name: "Evere", slug: "evere" },
  { name: "Forest", slug: "forest" },
  { name: "Ganshoren", slug: "ganshoren" },
  { name: "Ixelles", slug: "ixelles" },
  { name: "Jette", slug: "jette" },
  { name: "Koekelberg", slug: "koekelberg" },
  { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" },
  { name: "Saint-Gilles", slug: "saint-gilles" },
  { name: "Saint-Josse-ten-Noode", slug: "saint-josse-ten-noode" },
  { name: "Schaerbeek", slug: "schaerbeek" },
  { name: "Uccle", slug: "uccle" },
  { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
  { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
  { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
];

const homeFaqs = [
  {
    question: "Combien coûte le nettoyage de gouttières à Bruxelles ?",
    answer:
      "Le prix d'un nettoyage de gouttières à Bruxelles varie entre 80 et 150€ selon la longueur des gouttières, la hauteur du bâtiment et l'accessibilité. Nous établissons toujours un devis gratuit avant toute intervention. Le débouchage d'urgence est facturé entre 120 et 200€.",
  },
  {
    question: "À quelle fréquence faut-il nettoyer ses gouttières ?",
    answer:
      "À Bruxelles, nous recommandons un nettoyage minimum une fois par an, idéalement en automne après la chute des feuilles. Dans les zones très boisées comme Uccle, Watermael-Boitsfort ou Woluwe-Saint-Pierre, deux nettoyages par an sont souvent nécessaires — printemps et automne — pour éviter tout débordement.",
  },
  {
    question: "Quels sont les risques si je ne nettoie pas mes gouttières ?",
    answer:
      "Des gouttières bouchées peuvent causer des dégâts considérables : infiltrations d'eau dans la toiture, dégradation de la façade par ruissellement, détérioration des fondations par saturation du sol, et développement de moisissures à l'intérieur du bâtiment. Les coûts de réparation dépassent souvent 10 fois le prix d'un nettoyage préventif.",
  },
  {
    question: "Intervenez-vous en urgence en cas de débordement ?",
    answer:
      "Oui, notre service de débouchage d'urgence est disponible 7j/7. En cas de débordement actif lors de fortes pluies, appelez-nous directement au 0477 23 41 87. Nous intervenons généralement dans les 24 heures, souvent le jour même en haute saison automnale.",
  },
  {
    question: "Nettoyez-vous aussi les descentes pluviales ?",
    answer:
      "Absolument. Nos interventions incluent systématiquement le nettoyage des gouttières ET des descentes pluviales (ou tuyaux de chute). Une descente bouchée est aussi problématique qu'une gouttière obstruée. Nous vérifions également les collets de jonction et les raccords pour garantir un écoulement optimal.",
  },
];

function RecentPostsSection() {
  const recentPosts = getRecentPosts(2);
  if (recentPosts.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">
              Blog & Conseils
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Nos derniers conseils
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1 text-[#1A4731] font-semibold hover:text-[#F97316] transition-colors text-sm"
          >
            Voir tous les articles <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} featured />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-[#1A4731] font-semibold hover:text-[#F97316] transition-colors"
          >
            Voir tous les articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO — split layout, texte gauche / image droite */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[580px] items-center">
            {/* Colonne texte */}
            <div className="py-14 lg:py-20 lg:pr-12">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#F97316] text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                <Leaf size={12} />
                Saison automne — Réservez avant septembre
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Nettoyage Gouttières{" "}
                <span className="text-[#1A4731]">Bruxelles</span>
                <br />
                <span className="text-[#F97316]">Devis gratuit sous 2h</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Gouttières bouchées, qui débordent, fissurées ? On intervient
                dans les 48h dans toute la région bruxelloise. Nettoyage,
                débouchage, réparation PVC/zinc — on s&apos;occupe de tout.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="tel:0477234187"
                  className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-orange-200"
                >
                  <Phone size={20} />
                  0477 23 41 87
                </a>
                <a
                  href="#devis"
                  className="flex items-center justify-center gap-2 border-2 border-[#1A4731] text-[#1A4731] hover:bg-[#1A4731] hover:text-white font-bold px-7 py-4 rounded-xl text-lg transition-colors"
                >
                  Formulaire de devis
                  <ArrowRight size={20} />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-green-500" />
                  Intervention sous 48h
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-green-500" />
                  Assuré RC Pro
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-green-500" />
                  Urgences 7j/7
                </span>
              </div>
            </div>

            {/* Colonne image */}
            <div className="relative h-64 lg:h-full lg:min-h-[580px] -mx-4 sm:mx-0 lg:rounded-none">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=85"
                alt="Nettoyage professionnel gouttières Bruxelles"
                fill
                className="object-cover lg:rounded-l-3xl"
                priority
              />
              {/* Badge flottant */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-3xl font-extrabold text-[#1A4731]">300+</p>
                <p className="text-sm text-gray-500 font-medium">interventions / an</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST — votre gouttière est-elle prête ? */}
      <section className="bg-[#1A4731] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Votre gouttière est-elle prête pour les pluies ?
            </h2>
            <p className="text-green-200 text-sm">
              Si vous cochez un de ces points, appelez-nous avant que les dégâts ne s&apos;aggravent.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Leaf size={22} className="text-[#F97316]" />,
                text: "Des feuilles ou mousse débordent de la gouttière",
              },
              {
                icon: <Droplets size={22} className="text-[#F97316]" />,
                text: "L'eau déborde lors de fortes pluies",
              },
              {
                icon: <AlertTriangle size={22} className="text-[#F97316]" />,
                text: "La gouttière est décrochée ou pend d'un côté",
              },
              {
                icon: <Wrench size={22} className="text-[#F97316]" />,
                text: "Vous n'avez pas fait nettoyer depuis +12 mois",
              },
              {
                icon: <Droplets size={22} className="text-[#F97316]" />,
                text: "Des taches d'humidité apparaissent sur la façade",
              },
              {
                icon: <Clock size={22} className="text-[#F97316]" />,
                text: "L'automne approche et les arbres sont proches",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-4 transition-colors cursor-default"
              >
                <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                <p className="text-white text-sm leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="tel:0477234187"
              className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              <Phone size={20} />
              Appelez-nous — 0477 23 41 87
            </a>
          </div>
        </div>
      </section>

      {/* CHIFFRES CHOCS + RISQUES — 2 colonnes, stat à gauche, liste à droite */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <div>
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">
                Pourquoi ne pas attendre ?
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
                Le coût de l&apos;inaction
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "×10",
                    label: "plus cher",
                    detail: "une réparation de toiture vs un nettoyage préventif",
                    color: "text-red-500",
                    bg: "bg-red-50",
                  },
                  {
                    value: "3 ans",
                    label: "de vie en moins",
                    detail: "pour une toiture mal entretenue à cause des gouttières",
                    color: "text-orange-500",
                    bg: "bg-orange-50",
                  },
                  {
                    value: "80%",
                    label: "des infiltrations",
                    detail: "proviennent de gouttières mal entretenues ou bouchées",
                    color: "text-[#1A4731]",
                    bg: "bg-green-50",
                  },
                  {
                    value: "48h",
                    label: "notre délai",
                    detail: "pour intervenir chez vous, urgences le jour même",
                    color: "text-blue-500",
                    bg: "bg-blue-50",
                  },
                ].map((stat) => (
                  <div key={stat.label} className={`${stat.bg} rounded-2xl p-5`}>
                    <p className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</p>
                    <p className="font-bold text-gray-900 text-sm mb-1">{stat.label}</p>
                    <p className="text-gray-500 text-xs leading-snug">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image + risques */}
            <div>
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80"
                  alt="Gouttière bouchée dégâts Bruxelles"
                  width={600}
                  height={340}
                  className="object-cover w-full h-56 lg:h-72"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3">
                {[
                  "Infiltrations dans les combles et plafonds",
                  "Ruissellement sur la façade — salpêtre, taches",
                  "Saturation du sol autour des fondations",
                  "Développement de moisissures intérieures",
                ].map((risk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle size={13} className="text-red-600" />
                    </div>
                    <p className="text-gray-700 text-sm">{risk}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — EN MILIEU DE PAGE (différence clé vs humidité) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">
              Questions fréquentes
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Ce que nos clients demandent avant de nous appeler
            </h2>
          </div>
          <FAQAccordion items={homeFaqs} />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-[#1A4731] font-semibold hover:text-[#F97316] transition-colors inline-flex items-center gap-1"
            >
              Voir toutes nos FAQ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* NOS SERVICES — liste horizontale avec liens, pas de cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            <div className="lg:w-1/3 flex-shrink-0">
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">
                Nos prestations
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Tous nos services gouttières
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Du nettoyage annuel à l&apos;intervention d&apos;urgence, nous couvrons
                l&apos;ensemble des besoins liés à l&apos;entretien de vos gouttières et
                de votre toiture en région bruxelloise.
              </p>
              <a
                href="tel:0477234187"
                className="inline-flex items-center gap-2 bg-[#1A4731] text-white font-semibold px-5 py-3 rounded-xl hover:bg-green-800 transition-colors text-sm"
              >
                <Phone size={16} />
                Appeler pour un devis
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="divide-y divide-gray-100">
                {[
                  {
                    icon: <Droplets size={24} className="text-[#1A4731]" />,
                    title: "Nettoyage complet gouttières",
                    desc: "Evacuation des feuilles, mousses, sédiments. Nettoyage gouttières + descentes pluviales inclus.",
                    href: "/services/nettoyage-gouttieres",
                    price: "dès 80€",
                  },
                  {
                    icon: <AlertTriangle size={24} className="text-red-500" />,
                    title: "Débouchage urgence 7j/7",
                    desc: "Débordement actif ? Intervention haute pression en urgence, souvent le jour même.",
                    href: "/services/debouchage-gouttieres",
                    price: "dès 120€",
                  },
                  {
                    icon: <Wrench size={24} className="text-blue-500" />,
                    title: "Réparation & remplacement",
                    desc: "Gouttière fissurée, décalée ou à remplacer. PVC, zinc, aluminium — tous matériaux.",
                    href: "/services/reparation-gouttieres",
                    price: "devis gratuit",
                  },
                  {
                    icon: <Leaf size={24} className="text-yellow-600" />,
                    title: "Démoussage toiture",
                    desc: "Traitement anti-mousse mécanique. Prolonge la durée de vie de votre toiture.",
                    href: "/services/demoussage-toiture",
                    price: "devis gratuit",
                  },
                ].map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-start gap-5 py-5 group hover:bg-gray-50 -mx-4 px-4 transition-colors rounded-xl"
                  >
                    <div className="bg-gray-100 group-hover:bg-white p-3 rounded-xl flex-shrink-0 transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-gray-900 group-hover:text-[#1A4731] transition-colors">
                          {service.title}
                        </h3>
                        <span className="text-xs font-semibold text-[#F97316] bg-orange-50 px-2 py-1 rounded-lg whitespace-nowrap flex-shrink-0">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1 leading-snug">{service.desc}</p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-gray-300 group-hover:text-[#F97316] transition-colors flex-shrink-0 mt-1"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNES — fond vert, liste compacte avec tags */}
      <section className="py-16 bg-[#1A4731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-2/5 text-white">
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">
                Zone d&apos;intervention
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Gouttières Bruxelles — 19 communes couvertes
              </h2>
              <p className="text-green-200 leading-relaxed mb-6">
                Nous intervenons dans toutes les communes de la région bruxelloise.
                Déplacement inclus dans le devis. Priorité aux urgences.
              </p>
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                <MapPin size={20} className="text-[#F97316] flex-shrink-0" />
                <p className="text-white text-sm">
                  <strong>Votre commune n&apos;est pas listée ?</strong>{" "}
                  <a href="tel:0477234187" className="text-[#F97316] underline hover:text-orange-400">
                    Appelez-nous
                  </a>{" "}
                  — on couvre aussi la périphérie.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {communes.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/communes/${c.slug}`}
                    className="flex items-center justify-between bg-white/10 hover:bg-white hover:text-[#1A4731] text-white border border-white/20 hover:border-white rounded-xl px-4 py-3.5 text-sm font-semibold transition-all group"
                  >
                    <span>Gouttières {c.name}</span>
                    <ArrowRight
                      size={15}
                      className="text-white/40 group-hover:text-[#F97316] transition-colors"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANCE — horizontal, icônes + texte inline, pas de cards */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-gray-200">
            {[
              {
                icon: <Shield size={28} className="text-[#1A4731]" />,
                title: "Assuré RC Pro",
                desc: "Couverture complète pendant l'intervention",
              },
              {
                icon: <Euro size={28} className="text-[#F97316]" />,
                title: "Devis gratuit",
                desc: "Sans engagement, prix fixé à l'avance",
              },
              {
                icon: <Clock size={28} className="text-blue-600" />,
                title: "48h max",
                desc: "Urgences traitées le jour même, 7j/7",
              },
              {
                icon: <ThumbsUp size={28} className="text-green-600" />,
                title: "Garantie résultat",
                desc: "Écoulement vérifié avant de partir",
              },
            ].map((item) => (
              <div key={item.title} className="lg:px-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-3">{item.icon}</div>
                <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES RÉCENTS */}
      <RecentPostsSection />

      {/* FORMULAIRE DEVIS — centré, sans double colonne */}
      <section id="devis" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">
              Devis gratuit
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Recevez votre prix en 2h
            </h2>
            <p className="text-gray-500">
              Remplissez le formulaire ou appelez directement le{" "}
              <a href="tel:0477234187" className="text-[#1A4731] font-bold hover:text-[#F97316] transition-colors">
                0477 23 41 87
              </a>
              . Rappel sous 2h en heures ouvrables.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA FINAL — bande orange, minimaliste */}
      <section className="bg-[#F97316] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Gouttières bouchées ? On intervient sous 48h dans toute la région bruxelloise.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0477234187"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F97316] font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
            >
              <Phone size={18} />
              0477 23 41 87
            </a>
            <a
              href="#devis"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Formulaire de devis
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
