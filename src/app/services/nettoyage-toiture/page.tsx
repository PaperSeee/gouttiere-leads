import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Home, Clock, Shield, Leaf } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Nettoyage de toiture à Bruxelles — débris et mousses retirés" },
  description:
    "Nettoyage de toiture à Bruxelles : feuilles, mousses et débris dégagés des tuiles et ardoises, rives et solins contrôlés, gouttières nettoyées en même temps. Devis gratuit.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services/nettoyage-toiture" },
  keywords: ["nettoyage toiture Bruxelles", "nettoyage de toiture Bruxelles", "entretien toiture Bruxelles", "nettoyage toiture prix Bruxelles"],
  openGraph: {
    type: "website",
    title: "Nettoyage de toiture à Bruxelles — avec le nettoyage des gouttières",
    description: "Feuilles, mousses et débris dégagés des tuiles et ardoises, gouttières nettoyées en même temps. Devis gratuit, intervention sous 48h.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/services/nettoyage-toiture",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage toiture Bruxelles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage de toiture à Bruxelles — Devis Gratuit",
    description: "Feuilles, mousses et débris dégagés du toit, gouttières nettoyées en même temps. Devis gratuit.",
    images: ["/opengraph-image"],
  },
};

const communes = [
  { name: "Anderlecht", slug: "anderlecht" },
  { name: "Auderghem", slug: "auderghem" },
  { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" },
  { name: "Bruxelles", slug: "bruxelles" },
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

const toitureFaqs = [
  {
    question: "Le nettoyage de toiture abîme-t-il les tuiles ou l'ardoise ?",
    answer:
      "Non, quand il est fait sans nettoyeur haute pression sur les tuiles fragiles ou l'ardoise : les débris sont dégagés à la main ou au brossage doux, puis rincés à basse pression. La haute pression peut casser les tuiles et déplacer les solins.",
  },
  {
    question: "Combien coûte un nettoyage de toiture à Bruxelles ?",
    answer:
      "Le prix dépend de la surface à traiter, de la pente du toit et de l'accès. Il est chiffré dans un devis gratuit, prix fixé avant l'intervention.",
  },
  {
    question: "Faut-il nettoyer le toit et les gouttières lors de la même visite ?",
    answer:
      "C'est ce que nous recommandons : le toit alimente la gouttière. Nettoyer le toit en premier évite qu'une nouvelle chute de débris ne vienne reboucher une gouttière tout juste nettoyée.",
  },
];

export default function NettoyageToiture() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nettoyage de toiture Bruxelles",
    provider: {
      "@id": "https://www.nettoyage-gouttieres-bruxelles.be/#business",
    },
    areaServed: "Bruxelles",
    description: "Nettoyage de toiture à Bruxelles : dégagement des feuilles, mousses et débris des tuiles et ardoises, rinçage, contrôle des rives et des solins, gouttières nettoyées en même temps.",
    offers: {
      "@type": "Offer",
      priceRange: "sur devis",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: toitureFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Nettoyage toiture" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Home size={24} className="text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">Entretien toiture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Nettoyage de Toiture à Bruxelles
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Le nettoyage de toiture à Bruxelles consiste à dégager les feuilles, mousses et débris
              accumulés sur les tuiles ou ardoises, à rincer la couverture et à contrôler les rives et
              les solins, sans toucher à l&apos;étanchéité. Il se fait avec le nettoyage des gouttières,
              puisque le toit les alimente. Devis gratuit, prix fixé avant l&apos;intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                <Phone size={18} /> 0451 05 33 70
              </a>
              <a href="#devis" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                Devis gratuit <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">En quoi consiste le nettoyage d&apos;une toiture à Bruxelles ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Avec le temps, les toitures bruxelloises accumulent trois types de dépôts : les feuilles
                tombées des arbres, les mousses et lichens qui s&apos;accrochent aux tuiles, et les
                sédiments — poussières et graines — que le vent pousse dans les creux. Ces dépôts se
                logent dans les noues, derrière les cheminées et le long des rives, puis glissent vers la
                gouttière à la première pluie.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le nettoyage consiste à dégager ces débris à la main ou au brossage doux, à rincer la
                couverture à basse pression, puis à contrôler ce qui bouge : rives, solins de cheminée,
                faîtage et raccords. Sur les tuiles fragiles ou l&apos;ardoise, c&apos;est l&apos;inspection
                qui décide de ce qu&apos;on peut travailler — jamais le nettoyeur haute pression, qui peut
                casser les tuiles et déplacer les solins.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Nettoyage ou démoussage de toiture : quelle différence ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les deux prestations se répètent souvent, mais ne font pas la même chose. Le{" "}
                <strong>nettoyage</strong> retire les débris meubles : feuilles, boues, poussières et
                petites mousses détachées. Le{" "}
                <Link href="/services/demoussage-toiture" className="font-semibold text-[#1A4731] hover:text-[#F97316]">
                  démoussage
                </Link>{" "}
                traite la mousse et les lichens qui restent collés aux tuiles, au brossage, puis applique
                un traitement anti-mousse biodégradable qui protège la couverture plusieurs années.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                En pratique, un toit envahi de mousse demande un démoussage ; un toit surtout chargé de
                feuilles et de sédiments se contente d&apos;un nettoyage. Quand les deux sont nécessaires,
                ils se font lors de la même visite.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Faut-il nettoyer le toit avant les gouttières ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Oui, dans cet ordre. Le toit alimente la gouttière : tant que la couverture n&apos;est pas
                dégagée, chaque pluie pousse de nouveaux débris vers le chéneau. Nettoyer le toit d&apos;abord
                évite de reboucher une gouttière qui vient d&apos;être vidée. C&apos;est pourquoi notre{" "}
                <Link href="/services/nettoyage-gouttieres" className="font-semibold text-[#1A4731] hover:text-[#F97316]">
                  nettoyage de gouttières
                </Link>{" "}
                et le nettoyage de toiture se combinent souvent en une seule intervention.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Ce que comprend notre prestation</h2>
              <ul className="space-y-2 mb-6">
                {[
                  "Inspection de l'état des tuiles, ardoises, rives et solins",
                  "Dégagement manuel des feuilles, mousses et sédiments",
                  "Rinçage de la couverture à basse pression",
                  "Contrôle du faîtage et des raccords de cheminée",
                  "Nettoyage des gouttières et descentes le même jour",
                  "Évacuation des déchets végétaux",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Questions fréquentes sur le nettoyage de toiture</h2>
              <div className="not-prose space-y-4 mb-6">
                {toitureFaqs.map((f) => (
                  <div key={f.question} className="rounded-xl border border-gray-200 p-5">
                    <p className="font-semibold text-gray-900 mb-2">{f.question}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Nos communes d&apos;intervention</h2>
              <div className="grid grid-cols-3 gap-2">
                {communes.map((c) => (
                  <Link key={c.slug} href={`/communes/${c.slug}`} className="text-[#1A4731] hover:text-[#F97316] font-medium text-sm flex items-center gap-1">
                    <ArrowRight size={12} /> {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1A4731] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Devis nettoyage de toiture</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Le prix dépend de la surface, de la pente et de l&apos;accès au toit. Diagnostic et devis
                  gratuits, sans engagement.
                </p>
                <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-4 py-3 rounded-lg w-full hover:bg-orange-500 transition-colors">
                  <Phone size={16} /> Devis gratuit
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Clock size={16} className="text-[#F97316]" />, text: "Intervention sous 48h" },
                    { icon: <Shield size={16} className="text-[#F97316]" />, text: "Assurance RC Pro" },
                    { icon: <CheckCircle size={16} className="text-[#F97316]" />, text: "Devis gratuit" },
                    { icon: <Leaf size={16} className="text-[#F97316]" />, text: "Déchets évacués" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                      {item.icon} {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-bold text-[#F97316] mb-2">Services complémentaires</h3>
                <ul className="space-y-1.5">
                  <li><Link href="/services/nettoyage-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Nettoyage gouttières</Link></li>
                  <li><Link href="/services/demoussage-toiture" className="text-sm text-gray-700 hover:text-[#F97316]">→ Démoussage toiture</Link></li>
                  <li><Link href="/services/reparation-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Réparation gouttières</Link></li>
                  <li><Link href="/services/debouchage-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Débouchage urgence</Link></li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="font-semibold text-[#1A4731] mb-2">Pour aller plus loin</h3>
                <ul className="space-y-1.5">
                  <li><Link href="/tarifs" className="text-sm text-[#F97316] font-semibold flex items-center gap-1">→ Grille des tarifs gouttières</Link></li>
                  <li><Link href="/blog/demoussage-toiture-bruxelles-quand-comment-prix" className="text-sm text-[#F97316] font-semibold flex items-center gap-1">→ Démoussage : quand et comment ?</Link></li>
                  <li><Link href="/faq" className="text-sm text-[#F97316] font-semibold flex items-center gap-1">→ Toutes nos questions fréquentes</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="devis" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Demandez votre devis gratuit</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ContactForm defaultIntervention="Autre" />
          </div>
        </div>
      </section>
    </>
  );
}
