import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Gouttières et Gel en Hiver à Bruxelles : Protection",
  description: "Gel et glace endommagent les gouttières en hiver à Bruxelles. Découvrez les risques (fissures, descentes bouchées) et comment les protéger du froid.",
  keywords: ["gouttière gel hiver", "gouttière gelée Bruxelles", "barrière de glace toiture", "descente gouttière bouchée glace", "protéger gouttière froid"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/gouttiere-gel-hiver-bruxelles-protection" },
  openGraph: {
    type: "article",
    title: "Gouttières et Gel en Hiver à Bruxelles : Risques et Protection",
    description: "Les risques du gel pour vos gouttières et les bons gestes pour les protéger du froid à Bruxelles.",
    images: [{ url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=1200&q=80", width: 1200, height: 630, alt: "Gouttière gelée en hiver à Bruxelles" }],
    publishedTime: "2026-06-10",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gouttières et Gel en Hiver à Bruxelles",
    description: "Risques du gel et protection de vos gouttières en hiver.",
    images: ["https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=1200&q=80"],
  },
}

export default function BlogGouttiereGelHiver() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/gouttiere-gel-hiver-bruxelles-protection`,
        headline: "Gouttières et gel en hiver à Bruxelles : risques et comment les protéger",
        description: "Les risques du gel pour les gouttières en hiver à Bruxelles et les bons gestes pour les protéger du froid.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-10",
        dateModified: "2026-06-10",
        image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/gouttiere-gel-hiver-bruxelles-protection` },
        inLanguage: "fr-BE",
        keywords: "gouttière gel hiver, barrière de glace, descente bouchée glace Bruxelles",
        articleSection: "Saisonnier",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Gouttières et gel", item: `${DOMAIN}/blog/gouttiere-gel-hiver-bruxelles-protection` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Le gel peut-il vraiment endommager une gouttière ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui. L'eau stagnante qui gèle augmente de volume et exerce une pression sur les parois et les joints. Des cycles gel-dégel répétés peuvent fissurer les gouttières, déformer les fixations et faire éclater les descentes obstruées.",
            },
          },
          {
            "@type": "Question",
            name: "Comment éviter que mes gouttières gèlent à Bruxelles ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La meilleure protection est un nettoyage complet avant l'hiver : une gouttière propre et bien pentée évacue l'eau au lieu de la laisser stagner et geler. Vérifiez aussi que les descentes ne sont pas obstruées.",
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="bg-[#1A4731] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Gouttières et gel" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Saisonnier
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 6 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Gouttières et Gel en Hiver à Bruxelles : Risques et Comment les Protéger
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            L&apos;hiver bruxellois met les gouttières à rude épreuve : eau qui gèle, fissures, descentes bouchées par la glace. Voici les risques réels et comment préparer vos gouttières au froid.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <h2>Pourquoi le gel est l&apos;ennemi de vos gouttières</h2>
            <p>
              Le climat bruxellois alterne, en hiver, des périodes de pluie, de gel et de redoux. Cette succession de cycles <strong>gel-dégel</strong> est particulièrement agressive pour les gouttières. L&apos;eau qui stagne dans une gouttière mal entretenue gèle, augmente de volume, puis fond — et le cycle recommence. À chaque fois, les matériaux et les joints subissent une contrainte.
            </p>

            <div className="not-prose bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl mb-6">
              <div className="flex gap-2 items-start">
                <AlertTriangle size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="text-orange-800 text-sm font-medium">
                  Une gouttière encombrée en hiver est bien plus vulnérable : les débris retiennent l&apos;eau, qui gèle et exerce une pression destructrice. Le nettoyage d&apos;automne est votre meilleure assurance contre les dégâts du gel.
                </p>
              </div>
            </div>

            <h2>Les principaux risques du gel pour vos gouttières</h2>
            <div className="not-prose space-y-3 mb-6">
              {[
                { num: "1", titre: "Fissures et déformations", desc: "L'eau gelée qui se dilate exerce une pression sur les parois. À répétition, elle fissure les gouttières (surtout en PVC fragilisé) et déforme les fixations." },
                { num: "2", titre: "Descentes d'eau bouchées par la glace", desc: "Une descente partiellement obstruée gèle plus facilement. Le bouchon de glace empêche tout écoulement et peut faire éclater le tuyau." },
                { num: "3", titre: "Barrières de glace en bord de toit", desc: "La neige fondue qui regèle au bord du toit forme des amas de glace. L'eau s'accumule derrière et peut s'infiltrer sous les tuiles." },
                { num: "4", titre: "Chutes de glace dangereuses", desc: "Des stalactites de glace accrochées aux gouttières peuvent se détacher et présenter un danger pour les passants en dessous." },
                { num: "5", titre: "Arrachement sous le poids", desc: "Glace et neige accumulées alourdissent la gouttière. Des fixations déjà fatiguées peuvent céder." },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-[#1A4731] text-white font-bold text-sm flex items-center justify-center shrink-0">{item.num}</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.titre}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Comment protéger vos gouttières avant l&apos;hiver</h2>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-sm">À faire avant les gelées</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Nettoyer entièrement gouttières et descentes</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Vérifier la pente d&apos;écoulement</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Contrôler les fixations et les joints</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Dégager les descentes au niveau du sol</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-3 text-sm">À éviter en hiver</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Casser la glace avec un outil métallique</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Monter sur un toit verglacé</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Verser de l&apos;eau bouillante (chocs thermiques)</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Ignorer une descente déjà bouchée</li>
                </ul>
              </div>
            </div>

            <h2>Que faire si une gouttière est déjà gelée ?</h2>
            <p>
              Ne tentez jamais de briser la glace avec un outil dur : vous risquez d&apos;endommager la gouttière. Laissez la glace fondre naturellement au redoux, et profitez-en pour vérifier ensuite l&apos;écoulement. Si vous constatez une descente obstruée ou une fissure après le dégel, faites intervenir un professionnel avant la prochaine vague de froid pour éviter l&apos;aggravation.
            </p>

            <h2>Le bon réflexe à Bruxelles</h2>
            <p>
              La meilleure protection contre le gel n&apos;est pas un gadget mais un <strong>nettoyage complet à l&apos;automne</strong>. Une gouttière propre, bien pentée et avec des descentes dégagées évacue l&apos;eau au lieu de la laisser stagner et geler. C&apos;est le geste le plus efficace — et le moins cher — pour traverser l&apos;hiver bruxellois sans dégâts.
            </p>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> En résumé</h3>
              <p className="text-green-700 text-sm">
                Le gel ne pardonne pas une gouttière encombrée. Anticipez : un nettoyage avant l&apos;hiver évite fissures, descentes éclatées et infiltrations coûteuses.
              </p>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">Avant l&apos;hiver</h3>
              <p className="text-green-100 text-sm mb-4">Nettoyage complet de gouttières avant les gelées à Bruxelles — devis gratuit sous 24h.</p>
              <Link href="/contact" className="w-full bg-white text-[#1A4731] font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-50 transition-colors">
                Devis gratuit <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-gray-900 font-bold text-lg mb-5">Formulaire de devis</h3>
              <ContactForm />
            </div>
          </aside>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Articles liés</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Préparer l'automne", href: "/blog/preparer-gouttieres-automne-bruxelles" },
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Gouttière qui déborde", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Protections anti-feuilles", href: "/blog/protection-gouttieres-anti-feuilles-bruxelles" },
              { label: "Infiltrations façade", href: "/blog/infiltration-eau-facade-gouttieres" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 bg-gray-50 hover:bg-[#1A4731] hover:text-white text-gray-700 border border-gray-200 hover:border-[#1A4731] rounded-lg px-3 py-2 text-sm font-medium transition-all"
              >
                {link.label} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
