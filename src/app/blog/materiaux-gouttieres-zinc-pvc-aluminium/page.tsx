import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Zinc, PVC ou Aluminium : Quel Matériau de Gouttière ?",
  description: "Comparatif complet zinc, PVC, aluminium et cuivre pour les gouttières à Bruxelles. Durée de vie, entretien, coût et compatibilité avec les maisons belges.",
  keywords: ["gouttières zinc bruxelles", "gouttières PVC", "gouttières aluminium", "quel matériau gouttière", "choisir gouttière belgique"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/materiaux-gouttieres-zinc-pvc-aluminium" },
  openGraph: {
    type: "article",
    title: "Zinc, PVC ou Aluminium : Comparatif Matériaux Gouttières",
    description: "Durée de vie, entretien, coût — le guide complet pour choisir le bon matériau de gouttière pour votre maison bruxelloise.",
    images: [{ url: "https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80", width: 1200, height: 630, alt: "Comparatif matériaux gouttières Bruxelles" }],
    publishedTime: "2026-06-01",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zinc, PVC ou Aluminium pour vos Gouttières ?",
    description: "Comparatif complet des matériaux de gouttières pour les maisons bruxelloises.",
    images: ["https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80"],
  },
}

export default function BlogMateriauxGouttieresPvcZincPage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/materiaux-gouttieres-zinc-pvc-aluminium`,
        headline: "Zinc, PVC ou Aluminium : Quel Matériau Choisir pour ses Gouttières ?",
        description: "Comparatif complet zinc, PVC, aluminium et cuivre pour les gouttières à Bruxelles.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-01",
        dateModified: "2026-06-01",
        image: "https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/materiaux-gouttieres-zinc-pvc-aluminium` },
        inLanguage: "fr-BE",
        keywords: "gouttières zinc, gouttières PVC, gouttières aluminium, choisir matériau gouttière",
        articleSection: "Conseils",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Matériaux gouttières", item: `${DOMAIN}/blog/materiaux-gouttieres-zinc-pvc-aluminium` },
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
              { label: "Matériaux gouttières" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-[#2D6A4F] text-green-100 text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Conseils
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 6 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Zinc, PVC ou Aluminium : Quel Matériau Choisir pour ses Gouttières à Bruxelles ?
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Chaque matériau a ses avantages et ses inconvénients. Ce guide vous aide à faire le bon choix selon votre maison, votre budget et les conditions climatiques bruxelloises.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <h2>Pourquoi le choix du matériau est-il important ?</h2>
            <p>
              Les gouttières gèrent l&apos;évacuation des eaux pluviales de votre toiture. Un mauvais choix de matériau peut conduire à des fissures prématurées, des déformations sous le poids des feuilles accumulées, ou une dégradation accélérée dans le climat bruxellois — qui combine pluies fréquentes, gels hivernaux et UV estivaux.
            </p>
            <p>
              À Bruxelles, les maisons Art Nouveau de Saint-Gilles et d&apos;Ixelles ont souvent des gouttières en zinc patinées qui font partie du cachet architectural. Les constructions récentes optent plutôt pour l&apos;aluminium ou le PVC. Voici un comparatif objectif.
            </p>

            <h2>Le Zinc : le matériau traditionnel des maisons bruxelloises</h2>
            <p>
              Le zinc est historiquement le matériau de référence pour les gouttières en Belgique. Il équipe la grande majorité des maisons construites avant les années 1980 à Bruxelles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-2">Avantages du zinc</h3>
                <ul className="space-y-1 text-sm text-green-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Durée de vie : 50 à 80 ans</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Aspect esthétique premium</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> 100% recyclable</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Résistant au gel et aux UV</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 mb-2">Inconvénients du zinc</h3>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>— Prix élevé (installation)</li>
                  <li>— Nécessite une main d&apos;œuvre qualifiée</li>
                  <li>— Peut se déformer si mal soudé</li>
                  <li>— Entretien régulier recommandé</li>
                </ul>
              </div>
            </div>
            <p><strong>Coût indicatif à Bruxelles :</strong> 40 à 80 € par mètre linéaire posé (fourniture + main d&apos;œuvre).</p>

            <h2>L&apos;Aluminium : le meilleur rapport qualité-prix</h2>
            <p>
              L&apos;aluminium est aujourd&apos;hui le matériau le plus utilisé pour les nouvelles installations et les remplacements à Bruxelles. Il offre un excellent équilibre entre durabilité, légèreté et coût.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-2">Avantages de l&apos;aluminium</h3>
                <ul className="space-y-1 text-sm text-green-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Durée de vie : 30 à 50 ans</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Léger et facile à poser</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Résistant à la corrosion</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Large choix de coloris RAL</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 mb-2">Inconvénients de l&apos;aluminium</h3>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>— Moins esthétique que le zinc</li>
                  <li>— Se dilate avec la chaleur</li>
                  <li>— Nécessite des joints de dilatation</li>
                </ul>
              </div>
            </div>
            <p><strong>Coût indicatif à Bruxelles :</strong> 25 à 55 € par mètre linéaire posé.</p>

            <h2>Le PVC : le choix économique</h2>
            <p>
              Le PVC est le matériau le moins cher à l&apos;achat. Il est idéal pour les petits budgets ou les constructions légères (garages, abris de jardin, vérandas).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-2">Avantages du PVC</h3>
                <ul className="space-y-1 text-sm text-green-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Prix très accessible</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Facile à installer</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Résistant à la corrosion</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Ne nécessite aucune peinture</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 mb-2">Inconvénients du PVC</h3>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>— Durée de vie : 15 à 25 ans</li>
                  <li>— Se dilate et se rétracte beaucoup</li>
                  <li>— Aspect moins noble</li>
                  <li>— Fragilité sous le gel intense</li>
                </ul>
              </div>
            </div>
            <p><strong>Coût indicatif à Bruxelles :</strong> 10 à 25 € par mètre linéaire posé.</p>

            <h2>Le Cuivre : le luxe architectural</h2>
            <p>
              Le cuivre est réservé aux projets haut de gamme et aux restaurations d&apos;immeubles classés. Sa patine verte caractéristique est très appréciée sur les bâtiments historiques bruxellois. Durée de vie : plus de 100 ans. Coût : 80 à 150 € par mètre linéaire.
            </p>

            <h2>Tableau comparatif récapitulatif</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#1A4731] text-white">
                    <th className="px-4 py-3 text-left">Matériau</th>
                    <th className="px-4 py-3 text-center">Durée de vie</th>
                    <th className="px-4 py-3 text-center">Coût (€/ml posé)</th>
                    <th className="px-4 py-3 text-center">Entretien</th>
                    <th className="px-4 py-3 text-center">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mat: "Zinc", duree: "50–80 ans", cout: "40–80 €", entretien: "Moyen", note: "★★★★★" },
                    { mat: "Aluminium", duree: "30–50 ans", cout: "25–55 €", entretien: "Faible", note: "★★★★☆" },
                    { mat: "PVC", duree: "15–25 ans", cout: "10–25 €", entretien: "Très faible", note: "★★★☆☆" },
                    { mat: "Cuivre", duree: "100+ ans", cout: "80–150 €", entretien: "Très faible", note: "★★★★★" },
                  ].map((row, i) => (
                    <tr key={row.mat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{row.mat}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.duree}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.cout}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.entretien}</td>
                      <td className="px-4 py-3 text-center">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Notre recommandation selon votre type de maison</h2>
            <ul>
              <li><strong>Maison Art Nouveau ou ancienne (avant 1970)</strong> : zinc, pour conserver le cachet architectural et la durabilité sur le long terme</li>
              <li><strong>Construction récente ou rénovation standard</strong> : aluminium, pour le meilleur rapport qualité-prix</li>
              <li><strong>Petit budget ou annexe (garage, abri)</strong> : PVC, économique et facile à poser</li>
              <li><strong>Immeuble classé ou projet premium</strong> : cuivre ou zinc, incontournables</li>
            </ul>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">Besoin d&apos;un devis ?</h3>
              <p className="text-green-100 text-sm mb-4">Remplacement ou installation de gouttières à Bruxelles — devis gratuit en 24h.</p>
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
              { label: "Prix nettoyage gouttières", href: "/blog/prix-nettoyage-gouttieres-bruxelles" },
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Gouttière qui déborde", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Types de gouttières", href: "/types-gouttieres" },
              { label: "Infiltrations et façade", href: "/blog/infiltration-eau-facade-gouttieres" },
              { label: "Corniche ou gouttière : la différence", href: "/blog/corniche-gouttiere-bruxelles-difference-prix" },
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
