import type { Metadata } from "next";
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
  ArrowRight,
  Euro,
  ThumbsUp,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import { getRecentPosts } from "@/lib/blog";
import GutterIllustration from "@/components/GutterIllustration";

export const metadata: Metadata = {
  title: { absolute: "Nettoyage gouttières Bruxelles dès 80€ | Devis gratuit" },
  description:
    "Nettoyage de gouttières à Bruxelles dès 80€ : feuilles, mousse et descentes pluviales. Intervention sous 48h, urgences 7j/7. Devis gratuit.",
  keywords: ["nettoyage gouttières Bruxelles", "débouchage gouttières urgence Bruxelles", "réparation gouttières Bruxelles", "démoussage toiture Bruxelles", "gouttières bouchées intervention rapide"],
  alternates: {
    canonical: "https://www.nettoyage-gouttieres-bruxelles.be/",
    languages: { "fr-BE": "/", "fr": "/", "x-default": "/" },
  },
  openGraph: {
    title: "Nettoyage gouttières Bruxelles dès 80€ | Devis gratuit",
    description: "Nettoyage de gouttières à Bruxelles dès 80€ : feuilles, mousse, descentes pluviales. Devis gratuit, intervention sous 48h.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be/",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage Gouttières Bruxelles" }],
  },
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
      "Des gouttières bouchées peuvent causer des dégâts considérables : infiltrations d'eau dans la toiture, dégradation de la façade par ruissellement, détérioration des fondations par saturation du sol, et développement de moisissures à l'intérieur du bâtiment. Réparer ces dégâts coûte bien plus cher qu'un nettoyage préventif.",
  },
  {
    question: "Intervenez-vous en urgence en cas de débordement ?",
    answer:
      "Oui, notre service de débouchage d'urgence est disponible 7j/7. En cas de débordement actif lors de fortes pluies, appelez-nous directement au 0451 05 33 70. Nous intervenons généralement dans les 24 heures, souvent le jour même en haute saison automnale.",
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

const services = [
  { icon: Droplets, title: "Nettoyage de gouttières", desc: "Feuilles, mousses et sédiments évacués, descentes pluviales comprises.", href: "/services/nettoyage-gouttieres", price: "dès 80€" },
  { icon: AlertTriangle, title: "Débouchage en urgence", desc: "Débordement pendant la pluie ? Intervention 7j/7, souvent le jour même.", href: "/services/debouchage-gouttieres", price: "dès 120€" },
  { icon: Wrench, title: "Réparation & remplacement", desc: "Gouttière fissurée, décrochée ou à remplacer : zinc, PVC, aluminium.", href: "/services/reparation-gouttieres", price: "devis gratuit" },
  { icon: Leaf, title: "Démoussage de toiture", desc: "Brossage et traitement anti-mousse : moins de débris dans les gouttières.", href: "/services/demoussage-toiture", price: "3–6€/m²" },
  { icon: ShieldCheck, title: "Protection anti-feuilles", desc: "Grilles et crapaudines pour espacer les nettoyages sous les grands arbres.", href: "/services/protection-gouttieres", price: "devis gratuit" },
  { icon: CalendarCheck, title: "Contrat d'entretien", desc: "Un passage planifié chaque année, sans avoir à y penser.", href: "/services/contrat-entretien-gouttieres", price: "sur mesure" },
];

const checklist = [
  "Des feuilles ou de la mousse dépassent de la gouttière",
  "L'eau déborde lors de fortes pluies",
  "La gouttière est décrochée ou pend d'un côté",
  "Pas de nettoyage depuis plus de 12 mois",
  "Des taches d'humidité apparaissent sur la façade",
  "Des arbres surplombent le toit",
];

const risks = [
  { t: "Infiltrations", d: "L'eau qui déborde s'infiltre dans les combles, les plafonds et les châssis." },
  { t: "Façade abîmée", d: "Le ruissellement laisse salpêtre et taches sur la brique et l'enduit." },
  { t: "Fondations saturées", d: "L'eau rejetée au pied du mur sature le sol autour des fondations." },
  { t: "Moisissures", d: "L'humidité qui entre finit en moisissures à l'intérieur du logement." },
];

const steps = [
  { t: "Vous nous contactez", d: "Par téléphone ou via le formulaire : longueur approximative, hauteur, urgence." },
  { t: "Devis gratuit, prix fixé", d: "Le prix est fixé à l'avance, sans engagement. Rappel sous 2h en heures ouvrables." },
  { t: "Intervention sous 48h", d: "Gouttières et descentes nettoyées, écoulement vérifié avant de partir." },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0f2e1f] text-white">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#1F7A55]/35 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#F97316]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-[#a7e8c3]">
              <Leaf size={13} />
              Saison automne — réservez avant les grandes pluies
            </p>
            <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Nettoyage de gouttières à <span className="text-[#7fd8a4]">Bruxelles</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-green-50/80">
              Gouttières bouchées, qui débordent ou fissurées ? Nous intervenons sous 48h dans les 19 communes :
              nettoyage, débouchage, réparation zinc et PVC, démoussage. Prix fixé avant l&apos;intervention.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {["Devis gratuit, prix fixé à l'avance", "Intervention sous 48h", "Urgences 7j/7", "Assuré RC Pro"].map((c) => (
                <li key={c} className="flex items-center gap-2.5 font-semibold">
                  <CheckCircle size={18} className="shrink-0 text-[#7fd8a4]" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:0451053370" className="flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-7 py-4 text-lg font-extrabold text-white shadow-[0_12px_30px_-10px_rgba(249,115,22,0.9)] transition-colors hover:bg-[#EA580C]">
                <Phone size={20} />
                0451 05 33 70
              </a>
              <a href="#devis-rapide" className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-7 py-4 text-lg font-bold text-white transition-colors hover:border-white/60 lg:hidden">
                Devis en ligne
                <ArrowRight size={20} />
              </a>
            </div>
            <p className="mt-3 text-sm text-green-50/60">Lun–ven 7h30–18h · sam 8h–14h · urgences 7j/7</p>
          </div>

          <div id="devis-rapide" className="scroll-mt-32 rounded-3xl bg-white p-6 text-gray-800 shadow-2xl shadow-black/30 sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1F7A55]">Devis gratuit</p>
            <h2 className="mt-1 text-2xl font-extrabold text-[#133826]">Recevez votre prix</h2>
            <p className="mt-1 text-sm text-gray-500">Rappel sous 2h en heures ouvrables.</p>
            <div className="mt-5">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Shield, t: "Assuré RC Pro", d: "Couverture complète pendant l'intervention" },
            { icon: Euro, t: "Devis gratuit", d: "Sans engagement, prix fixé à l'avance" },
            { icon: Clock, t: "48h maximum", d: "Urgences traitées le jour même, 7j/7" },
            { icon: ThumbsUp, t: "Écoulement vérifié", d: "Test d'écoulement avant de partir" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F6F3] text-[#1F7A55]">
                <Icon size={20} />
              </span>
              <div>
                <p className="font-extrabold text-[#133826]">{t}</p>
                <p className="text-sm leading-snug text-gray-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKLIST + ILLUSTRATION */}
      <section className="bg-[#F1F6F3]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1F7A55]">Autodiagnostic</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#133826] md:text-4xl">Votre gouttière est-elle prête pour les pluies ?</h2>
            <p className="mt-3 text-lg text-gray-600">Si vous cochez un seul de ces points, un nettoyage s&apos;impose avant que l&apos;eau ne fasse des dégâts.</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200/70">
                  <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#F97316]" />
                  {c}
                </li>
              ))}
            </ul>
            <a href="tel:0451053370" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#133826] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#1F7A55]">
              <Phone size={18} />
              Un doute ? Appelez-nous
            </a>
          </div>
          <div className="rounded-3xl bg-gradient-to-b from-sky-100 to-sky-50 p-4 shadow-inner ring-1 ring-sky-200/60 sm:p-6">
            <GutterIllustration className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* RISQUES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#F97316]">Pourquoi ne pas attendre</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#133826] md:text-4xl">Ce qu&apos;une gouttière bouchée provoque</h2>
          <p className="mt-3 text-lg text-gray-600">Une gouttière qui déborde ne se voit qu&apos;en pleine averse, mais ses dégâts s&apos;installent toute l&apos;année.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((r, i) => (
            <div key={r.t} className="rounded-2xl border border-gray-200 p-6">
              <span className="font-display text-sm font-extrabold text-[#F97316]">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-extrabold text-[#133826]">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0f2e1f] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#7fd8a4]">Nos prestations</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Tous nos services gouttières</h2>
            </div>
            <Link href="/tarifs" className="inline-flex items-center gap-2 font-bold text-[#7fd8a4] hover:text-white">
              Voir tous les tarifs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, href, price }) => (
              <Link key={href} href={href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#7fd8a4]/50 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7fd8a4]/15 text-[#7fd8a4]">
                    <Icon size={24} />
                  </span>
                  <span className="rounded-lg bg-[#F97316]/15 px-2.5 py-1 text-xs font-bold text-[#fdba74]">{price}</span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-green-50/70">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#7fd8a4]">
                  En savoir plus <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRIX */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#1F7A55]">Tarifs transparents</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#133826] md:text-4xl">Prix du nettoyage de gouttières à Bruxelles</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Le prix d&apos;un nettoyage de gouttières dépend de la longueur à nettoyer, de la hauteur du bâtiment
              et de l&apos;accès aux façades. Pour une maison bruxelloise, comptez en moyenne entre 80 et 150€,
              descentes pluviales comprises. Le prix exact est fixé dans un devis gratuit, avant toute intervention.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm">
              <Link href="/tarifs" className="inline-flex items-center gap-1.5 font-bold text-[#1F7A55] hover:text-[#F97316]">
                Grille complète des tarifs gouttières <ArrowRight size={16} />
              </Link>
              <Link href="/services/nettoyage-gouttieres" className="inline-flex items-center gap-1.5 font-bold text-[#1F7A55] hover:text-[#F97316]">
                Ce qui est inclus dans un nettoyage <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Maison 2 façades", price: "80 – 100€", detail: "Gouttières + descentes, 15–20 ml" },
              { label: "Maison 3–4 façades / villa", price: "100 – 150€", detail: "Toutes façades, descentes multiples", highlight: true },
              { label: "Débouchage urgent", price: "120 – 200€", detail: "Selon jour et heure d'intervention" },
            ].map((row) => (
              <div key={row.label} className={`rounded-2xl p-6 text-center ${row.highlight ? "bg-[#133826] text-white shadow-xl" : "border border-gray-200 bg-white"}`}>
                <p className={`text-sm font-bold ${row.highlight ? "text-[#a7e8c3]" : "text-gray-700"}`}>{row.label}</p>
                <p className={`mt-3 font-display text-3xl font-extrabold ${row.highlight ? "text-white" : "text-[#133826]"}`}>{row.price}</p>
                <p className={`mt-2 text-xs ${row.highlight ? "text-green-50/70" : "text-gray-500"}`}>{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="bg-[#F1F6F3]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#133826] md:text-4xl">Comment ça se passe</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.t} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200/70">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316] font-display text-lg font-extrabold text-white">{i + 1}</span>
                <h3 className="mt-5 text-lg font-extrabold text-[#133826]">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.14em] text-[#F97316]">Questions fréquentes</p>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-[#133826] md:text-4xl">Ce que nos clients demandent avant de nous appeler</h2>
        <div className="mt-10">
          <FAQAccordion items={homeFaqs} />
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="inline-flex items-center gap-1.5 font-bold text-[#1F7A55] hover:text-[#F97316]">
            Voir toutes nos FAQ <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* COMMUNES */}
      <section className="bg-[#0f2e1f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#7fd8a4]">Zone d&apos;intervention</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Gouttières Bruxelles — 19 communes couvertes</h2>
            <p className="mt-4 text-green-50/75">
              Nous intervenons dans toutes les communes de la région bruxelloise, déplacement inclus dans le devis.
              Votre commune n&apos;est pas listée ? Nous couvrons aussi la périphérie.
            </p>
            <a href="tel:0451053370" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 font-extrabold text-white hover:bg-[#EA580C]">
              <Phone size={18} />
              0451 05 33 70
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {communes.map((c) => (
              <Link key={c.slug} href={`/communes/${c.slug}`} className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold transition hover:border-[#7fd8a4]/50 hover:bg-white/[0.08]">
                <span>Gouttières {c.name}</span>
                <ArrowRight size={14} className="shrink-0 text-white/30 group-hover:text-[#7fd8a4]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RecentPostsSection />

      {/* DEVIS */}
      <section id="devis" className="scroll-mt-32 bg-[#F1F6F3]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#F97316]">Devis gratuit</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#133826] md:text-4xl">Recevez votre prix en 2h</h2>
            <p className="mt-4 text-lg text-gray-600">
              Remplissez le formulaire ou appelez directement le{" "}
              <a href="tel:0451053370" className="font-bold text-[#133826] underline decoration-[#F97316]">0451 05 33 70</a>.
              Rappel sous 2h en heures ouvrables.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Prix fixé avant l'intervention", "Aucun engagement", "Intervention sous 48h"].map((c) => (
                <li key={c} className="flex items-center gap-2.5 font-semibold text-gray-800">
                  <CheckCircle size={18} className="text-[#1F7A55]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-200/70 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
