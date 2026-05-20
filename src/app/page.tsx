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
  Award,
  CheckCircle,
  MapPin,
  ArrowRight,
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
  { name: "Uccle", slug: "uccle" },
  { name: "Ixelles", slug: "ixelles" },
  { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
  { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
  { name: "Auderghem", slug: "auderghem" },
  { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
  { name: "Etterbeek", slug: "etterbeek" },
  { name: "Forest", slug: "forest" },
  { name: "Schaerbeek", slug: "schaerbeek" },
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
    <section className="py-16 bg-white">
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

      {/* HERO */}
      <section className="relative bg-[#1A4731] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
            alt="Nettoyage gouttières Bruxelles"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Devis GRATUIT
              </span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Intervention sous 48h
              </span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Garantie satisfaction
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nettoyage de Gouttières à Bruxelles{" "}
              <span className="text-[#F97316]">— Intervention Rapide</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Vos gouttières bouchées par les feuilles, la mousse ou les débris ?
              Nettoyage Gouttières Bruxelles intervient rapidement pour nettoyer,
              déboucher et réparer vos gouttières. Avant l&apos;automne, agissez maintenant
              pour protéger votre habitation.
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
                Devis en ligne gratuit
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-green-400" />
                Certifié & assuré RC Pro
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-green-400" />
                Nettoyage gouttières + descentes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-green-400" />
                Devis gratuit sans engagement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCE SAISONNIERE */}
      <section className="bg-[#F97316] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                <Leaf size={28} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Automne approche — Préparez vos gouttières maintenant</p>
                <p className="text-orange-100 text-sm mt-0.5">
                  Les feuilles de platanes, marrons et tilleuls vont obstruer vos gouttières dès septembre.
                  Anticipez avant les premières pluies d&apos;automne.
                </p>
              </div>
            </div>
            <a
              href="tel:0477234187"
              className="flex items-center gap-2 bg-white text-[#F97316] font-bold px-5 py-3 rounded-xl whitespace-nowrap hover:bg-orange-50 transition-colors flex-shrink-0"
            >
              <Phone size={18} />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* 4 SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">
              Nos prestations
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Tous nos services gouttières à Bruxelles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Du nettoyage préventif au remplacement complet, nous prenons en charge
              l&apos;ensemble de vos besoins liés aux gouttières et à la toiture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
                <Droplets size={28} className="text-[#1A4731]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Nettoyage complet</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Evacuation des feuilles, mousses, sédiments et débris accumulés dans
                vos gouttières et descentes pluviales.
              </p>
              <Link
                href="/services/nettoyage-gouttieres"
                className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-red-100 p-3 rounded-xl w-fit mb-4">
                <AlertTriangle size={28} className="text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Débouchage urgence</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Intervention d&apos;urgence 7j/7 en cas de débordement actif. Débouchage
                haute pression des descentes pluviales.
              </p>
              <Link
                href="/services/debouchage-gouttieres"
                className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                <Wrench size={28} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Réparation / remplacement</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Réparation de gouttières fissurées, remplacement de tronçons endommagés
                en PVC, zinc ou aluminium.
              </p>
              <Link
                href="/services/reparation-gouttieres"
                className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-yellow-100 p-3 rounded-xl w-fit mb-4">
                <Leaf size={28} className="text-yellow-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Démoussage toiture</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Traitement anti-mousse et démoussage mécanique de votre toiture pour
                prolonger la durée de vie des tuiles.
              </p>
              <Link
                href="/services/demoussage-toiture"
                className="text-[#F97316] text-sm font-semibold hover:underline flex items-center gap-1"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NETTOYER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-1cf5c04a39d4?w=800&q=80"
                alt="Professionnel nettoyage gouttières Bruxelles"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#1A4731] text-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-[#F97316]">300+</p>
                <p className="text-sm">interventions/an</p>
                <p className="text-xs text-gray-300">en région bruxelloise</p>
              </div>
            </div>
            <div>
              <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">
                Pourquoi agir maintenant ?
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                4 risques majeurs si vous négligez vos gouttières
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2.5 rounded-xl flex-shrink-0 mt-0.5">
                    <AlertTriangle size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Infiltrations dans la toiture</h3>
                    <p className="text-gray-600 text-sm">
                      L&apos;eau stagnante dans une gouttière bouchée remonte sous les tuiles et provoque
                      des infiltrations coûteuses dans les combles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2.5 rounded-xl flex-shrink-0 mt-0.5">
                    <Droplets size={20} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Dégâts sur la façade</h3>
                    <p className="text-gray-600 text-sm">
                      Le ruissellement d&apos;eau le long de la façade dégrade les joints, le
                      crépi et favorise l&apos;apparition de salpêtre et de taches noires.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2.5 rounded-xl flex-shrink-0 mt-0.5">
                    <Wrench size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Détérioration des fondations</h3>
                    <p className="text-gray-600 text-sm">
                      L&apos;eau qui déborde au pied du mur sature le sol autour des fondations,
                      provoquant tassements et fissures sur le long terme.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2.5 rounded-xl flex-shrink-0 mt-0.5">
                    <Leaf size={20} className="text-[#1A4731]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Moisissures intérieures</h3>
                    <p className="text-gray-600 text-sm">
                      L&apos;humidité pénétrante favorise le développement de moisissures dans les
                      murs et les plafonds, nuisibles à la santé des occupants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Notre processus en 4 étapes
            </h2>
            <p className="text-gray-600">
              Simple, rapide et transparent — du premier contact à la fin de l&apos;intervention
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Appel ou formulaire",
                desc: "Contactez-nous par téléphone ou via le formulaire. Nous répondons dans l'heure en heures ouvrables pour convenir d'un rendez-vous.",
              },
              {
                step: "02",
                title: "Visite & devis gratuit",
                desc: "Nos techniciens inspectent vos gouttières sur place et vous remettent un devis détaillé, sans engagement ni surprise.",
              },
              {
                step: "03",
                title: "Intervention rapide",
                desc: "Nettoyage, débouchage ou réparation selon vos besoins. Intervention propre et soignée, déchets évacués à notre charge.",
              },
              {
                step: "04",
                title: "Contrôle & garantie",
                desc: "Vérification du bon écoulement en fin d'intervention. Rapport d'état fourni et garantie satisfaction sur nos prestations.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[#1A4731] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Zone d&apos;intervention à Bruxelles
            </h2>
            <p className="text-gray-600">
              Nous intervenons dans 9 communes de la région bruxelloise
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {communes.map((c) => (
              <Link
                key={c.slug}
                href={`/communes/${c.slug}`}
                className="bg-gray-50 hover:bg-[#1A4731] text-gray-800 hover:text-white border border-gray-200 hover:border-[#1A4731] rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2 transition-all group"
              >
                <MapPin size={16} className="text-[#F97316] flex-shrink-0" />
                Gouttières {c.name}
                <ArrowRight
                  size={14}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Nos garanties
            </h2>
            <p className="text-gray-600">Des engagements concrets pour votre tranquillité</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield size={32} className="text-[#1A4731]" />,
                title: "Certifié & Assuré",
                desc: "Assurance RC Professionnelle en ordre. Techniciens qualifiés et formés aux techniques de nettoyage en hauteur.",
              },
              {
                icon: <Award size={32} className="text-[#F97316]" />,
                title: "Assurance RC Pro",
                desc: "Vous êtes protégés en cas d'incident. Notre couverture RC Pro garantit votre bien pendant toute l'intervention.",
              },
              {
                icon: <CheckCircle size={32} className="text-green-600" />,
                title: "Devis gratuit",
                desc: "Devis 100% gratuit et sans engagement. Tarif fixé à l'avance, aucune mauvaise surprise sur la facture finale.",
              },
              {
                icon: <Clock size={32} className="text-blue-600" />,
                title: "Intervention 48h",
                desc: "Disponibilité rapide pour les nettoyages planifiés. Interventions d'urgence disponibles 7j/7 pour les débouchages.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#1A4731] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Questions fréquentes
            </h2>
            <p className="text-gray-600">
              Tout ce que vous devez savoir avant de nous contacter
            </p>
          </div>
          <FAQAccordion items={homeFaqs} />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-[#1A4731] font-semibold hover:text-[#F97316] transition-colors flex items-center gap-1 justify-center"
            >
              Voir toutes nos FAQ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLES RÉCENTS */}
      <RecentPostsSection />

      {/* CTA CONTACT */}
      <section id="contact" className="py-16 bg-[#1A4731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Demandez votre devis gratuit
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Remplissez le formulaire ci-contre ou appelez-nous directement.
                Un expert vous rappelle sous 2h en heures ouvrables pour
                planifier l&apos;intervention.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#F97316]" />
                  <span className="text-gray-300 text-sm">Devis entièrement gratuit</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#F97316]" />
                  <span className="text-gray-300 text-sm">Intervention possible sous 48h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#F97316]" />
                  <span className="text-gray-300 text-sm">Techniciens certifiés et assurés</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#F97316]" />
                  <span className="text-gray-300 text-sm">Débouchage urgence 7j/7</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <p className="text-white font-semibold mb-1">Préférez-vous appeler ?</p>
                <a
                  href="tel:0477234187"
                  className="flex items-center gap-2 text-[#F97316] font-bold text-xl hover:text-orange-400 transition-colors"
                >
                  <Phone size={24} />
                  0477 23 41 87
                </a>
                <p className="text-gray-400 text-xs mt-1">
                  Lun–Ven 7h30–18h | Sam 8h–14h | Urgences 7j/7
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-gray-900 font-bold text-lg mb-6">
                Formulaire de devis gratuit
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
