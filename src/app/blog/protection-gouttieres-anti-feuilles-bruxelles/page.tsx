import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Protections Anti-Feuilles pour Gouttières : Grilles, Brosses ou Filets ?",
  description: "Grilles, brosses, filets, mousses : comparatif des protections anti-feuilles pour gouttières à Bruxelles. Avantages, limites, prix et efficacité réelle pour espacer les nettoyages.",
  keywords: ["protection gouttière anti-feuilles", "grille gouttière Bruxelles", "brosse gouttière", "filet anti-feuilles gouttière", "système anti-feuilles gouttière prix"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/protection-gouttieres-anti-feuilles-bruxelles" },
  openGraph: {
    type: "article",
    title: "Anti-Feuilles pour Gouttières : Grilles, Brosses ou Filets ?",
    description: "Le comparatif complet des protections anti-feuilles pour gouttières à Bruxelles : efficacité, limites et prix.",
    images: [{ url: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80", width: 1200, height: 630, alt: "Protection anti-feuilles sur gouttière à Bruxelles" }],
    publishedTime: "2026-06-12",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protections Anti-Feuilles pour Gouttières",
    description: "Grilles, brosses, filets, mousses : que choisir à Bruxelles ?",
    images: ["https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80"],
  },
}

export default function BlogProtectionGouttieresAntiFeuilles() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/protection-gouttieres-anti-feuilles-bruxelles`,
        headline: "Protections anti-feuilles pour gouttières : grilles, brosses ou filets — que choisir ?",
        description: "Comparatif des systèmes anti-feuilles pour gouttières à Bruxelles : grilles, brosses, filets, mousses — efficacité, limites et prix.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-12",
        dateModified: "2026-06-12",
        image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/protection-gouttieres-anti-feuilles-bruxelles` },
        inLanguage: "fr-BE",
        keywords: "protection gouttière anti-feuilles, grille gouttière, filet gouttière Bruxelles",
        articleSection: "Conseils",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Protections anti-feuilles", item: `${DOMAIN}/blog/protection-gouttieres-anti-feuilles-bruxelles` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Les protections anti-feuilles suppriment-elles le nettoyage des gouttières ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Non. Aucun système n'est totalement autonettoyant. Les protections anti-feuilles espacent et facilitent les nettoyages, mais une inspection annuelle reste recommandée, car les fines particules et pollens finissent par s'accumuler.",
            },
          },
          {
            "@type": "Question",
            name: "Quel est le meilleur système anti-feuilles pour une maison à Bruxelles ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cela dépend de votre environnement. Les grilles métalliques offrent un bon compromis durabilité/prix. Les brosses conviennent aux gouttières peu exposées. Près de grands arbres, un système rigide de qualité posé par un professionnel est préférable.",
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
              { label: "Protections anti-feuilles" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Conseils
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 7 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Protections Anti-Feuilles pour Gouttières : Grilles, Brosses ou Filets ?
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Marre de nettoyer vos gouttières chaque automne ? On compare l&apos;efficacité réelle, les limites et le prix des principaux systèmes anti-feuilles pour les maisons bruxelloises.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <h2>Pourquoi envisager une protection anti-feuilles à Bruxelles ?</h2>
            <p>
              Bruxelles est une ville très arborée : platanes, marronniers, tilleuls et frênes bordent de nombreuses rues. Résultat, à chaque automne, les gouttières se remplissent de feuilles en quelques semaines. Les systèmes anti-feuilles promettent de réduire cette accumulation et donc d&apos;espacer les nettoyages. Mais tous ne se valent pas, et aucun n&apos;est miraculeux.
            </p>

            <div className="not-prose bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl mb-6">
              <div className="flex gap-2 items-start">
                <AlertTriangle size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="text-orange-800 text-sm font-medium">
                  À retenir : aucune protection anti-feuilles n&apos;est « 100 % autonettoyante ». Les feuilles sont retenues, mais les fines particules (pollen, poussières, débris) finissent par passer. Une inspection annuelle reste nécessaire.
                </p>
              </div>
            </div>

            <h2>Les grilles métalliques ou plastiques</h2>
            <p>
              Ce sont les systèmes les plus répandus : une grille posée sur le dessus de la gouttière qui laisse passer l&apos;eau mais bloque les feuilles.
            </p>
            <ul>
              <li><strong>Avantages</strong> : efficaces contre les grosses feuilles, durables (surtout en métal), bon rapport qualité-prix</li>
              <li><strong>Limites</strong> : les petits débris et aiguilles peuvent passer ou s&apos;accumuler sur la grille ; les grilles bas de gamme se déforment</li>
            </ul>

            <h2>Les brosses anti-feuilles</h2>
            <p>
              Il s&apos;agit de longues brosses cylindriques que l&apos;on glisse dans la gouttière. Les feuilles restent en surface tandis que l&apos;eau circule entre les poils.
            </p>
            <ul>
              <li><strong>Avantages</strong> : installation très simple, sans outil, adaptables à la plupart des gouttières</li>
              <li><strong>Limites</strong> : les feuilles s&apos;accrochent aux poils et doivent être retirées régulièrement ; efficacité moindre sous les grands arbres</li>
            </ul>

            <h2>Les filets anti-feuilles</h2>
            <p>
              Un filet tendu au-dessus de la gouttière retient les feuilles. C&apos;est la solution la plus économique.
            </p>
            <ul>
              <li><strong>Avantages</strong> : peu coûteux, facile à poser soi-même</li>
              <li><strong>Limites</strong> : durée de vie limitée, peut s&apos;affaisser ou se déchirer, les feuilles s&apos;accumulent dessus et doivent être balayées</li>
            </ul>

            <h2>Les mousses et inserts</h2>
            <p>
              Des boudins de mousse poreuse que l&apos;on insère dans la gouttière : l&apos;eau traverse, les feuilles restent dessus.
            </p>
            <ul>
              <li><strong>Avantages</strong> : pose immédiate, prix modéré</li>
              <li><strong>Limites</strong> : se colmatent avec le temps, retiennent l&apos;humidité et les débris fins, à remplacer régulièrement</li>
            </ul>

            <h2>Comparatif rapide</h2>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-sm">Les plus durables</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Grilles métalliques de qualité</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Systèmes rigides posés par un pro</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-3 text-sm">Les plus économiques</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Filets anti-feuilles</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Boudins en mousse</li>
                </ul>
              </div>
            </div>

            <h2>Faut-il poser soi-même ou faire appel à un professionnel ?</h2>
            <p>
              Les filets, brosses et mousses peuvent se poser soi-même, mais cela implique de monter sur une échelle ou sur le toit — la première cause d&apos;accidents domestiques graves. Les grilles rigides de qualité, elles, gagnent à être posées par un professionnel : la fixation et l&apos;ajustement conditionnent leur efficacité et leur durée de vie.
            </p>
            <p>
              Notre conseil pour une maison bruxelloise très exposée aux arbres : une <strong>grille de qualité bien posée</strong>, combinée à une <strong>inspection annuelle</strong>. Vous ne supprimez pas l&apos;entretien, mais vous le réduisez nettement et vous évitez les débordements.
            </p>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> En résumé</h3>
              <p className="text-green-700 text-sm">
                Une protection anti-feuilles est un bon investissement à Bruxelles si elle est bien choisie et bien posée. Mais considérez-la comme un moyen d&apos;<strong>espacer</strong> les nettoyages, pas de les supprimer.
              </p>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">Pose ou nettoyage ?</h3>
              <p className="text-green-100 text-sm mb-4">Pose de protections anti-feuilles et nettoyage de gouttières à Bruxelles — devis gratuit sous 24h.</p>
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
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Préparer l'automne", href: "/blog/preparer-gouttieres-automne-bruxelles" },
              { label: "Gouttière qui déborde", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Matériaux gouttières", href: "/blog/materiaux-gouttieres-zinc-pvc-aluminium" },
              { label: "Gouttières et gel en hiver", href: "/blog/gouttiere-gel-hiver-bruxelles-protection" },
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
