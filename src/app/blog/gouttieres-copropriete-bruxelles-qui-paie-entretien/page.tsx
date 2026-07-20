import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle, Clock, Phone, Tag, Users } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Gouttières Copropriété Bruxelles : Qui Paie l'Entretien ?",
  description: "Qui paie l'entretien des gouttières en copropriété à Bruxelles : syndic, charges communes, vote en assemblée générale. Guide pratique pour syndics.",
  keywords: ["gouttières copropriété Bruxelles", "entretien gouttières immeuble Bruxelles", "qui paie nettoyage gouttières copropriété", "syndic gouttières Bruxelles", "charges communes gouttières"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/gouttieres-copropriete-bruxelles-qui-paie-entretien" },
  openGraph: {
    type: "article",
    title: "Gouttières Copropriété Bruxelles : Qui Paie l'Entretien ?",
    description: "Syndic, charges communes, assemblée générale : tout ce qu'il faut savoir sur l'entretien des gouttières d'un immeuble à appartements à Bruxelles.",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Immeuble à appartements à Bruxelles — entretien des gouttières en copropriété" }],
    publishedTime: "2026-07-20",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gouttières Copropriété Bruxelles : Qui Paie l'Entretien ?",
    description: "Syndic, charges communes, assemblée générale : ce qu'il faut savoir sur l'entretien des gouttières d'un immeuble à Bruxelles.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
}

const faqs = [
  {
    q: "Qui est responsable du nettoyage des gouttières dans un immeuble à appartements à Bruxelles ?",
    a: "Les gouttières font partie des parties communes de l'immeuble. C'est le syndic qui organise leur entretien, sur le budget de fonctionnement de la copropriété. Il n'a pas besoin de convoquer une assemblée générale pour faire réaliser un nettoyage courant : c'est un acte de gestion normale, au même titre que l'entretien des communs ou de la chaudière collective.",
  },
  {
    q: "Comment se répartissent les frais d'entretien des gouttières entre copropriétaires ?",
    a: "Sauf clause contraire dans le règlement de copropriété, les frais sont répartis selon les quotités de chaque lot — c'est-à-dire la valeur relative de chaque appartement dans l'immeuble, fixée dans l'acte de base. Un appartement plus grand ou à un étage supérieur peut donc contribuer davantage qu'un studio, même si l'intervention profite à tout le bâtiment.",
  },
  {
    q: "Faut-il un vote en assemblée générale pour nettoyer les gouttières de l'immeuble ?",
    a: "Non, pas pour un entretien courant et périodique — nettoyage annuel, débouchage, petites réparations. Le syndic peut engager la dépense directement, dans les limites de son budget. Un vote devient nécessaire uniquement pour un remplacement complet des gouttières ou des travaux exceptionnels représentant une dépense importante non prévue au budget.",
  },
  {
    q: "Que se passe-t-il si une gouttière ne dessert qu'une terrasse privative ?",
    a: "Si une gouttière évacue exclusivement les eaux d'une terrasse à jouissance privative, l'entretien courant peut incomber au copropriétaire qui en a l'usage exclusif. Le remplacement, en revanche, reste généralement intégré aux charges communes, sauf disposition contraire du règlement de copropriété. En cas de doute, mieux vaut vérifier l'acte de base avant de facturer un copropriétaire individuellement.",
  },
  {
    q: "À quelle fréquence un immeuble bruxellois doit-il faire nettoyer ses gouttières ?",
    a: "Comme pour une maison individuelle, une fois par an minimum, en automne, et deux fois dans les copropriétés entourées d'arbres. Pour un immeuble à appartements, comptez généralement une journée complète d'intervention selon le nombre de façades, d'étages et de descentes pluviales à traiter.",
  },
]

export default function BlogGouttieresCoproprieteBruxelles() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/gouttieres-copropriete-bruxelles-qui-paie-entretien`,
        headline: "Gouttières en copropriété à Bruxelles : qui paie l'entretien et comment l'organiser",
        description: "Qui paie le nettoyage des gouttières dans un immeuble à Bruxelles, faut-il un vote en assemblée générale, et comment le syndic peut organiser l'intervention efficacement.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-07-20",
        dateModified: "2026-07-20",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/gouttieres-copropriete-bruxelles-qui-paie-entretien` },
        inLanguage: "fr-BE",
        keywords: "gouttières copropriété Bruxelles, entretien gouttières immeuble, syndic gouttières, charges communes gouttières",
        articleSection: "Copropriété",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Gouttières en copropriété : qui paie l'entretien", item: `${DOMAIN}/blog/gouttieres-copropriete-bruxelles-qui-paie-entretien` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
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
              { label: "Gouttières en copropriété : qui paie l'entretien" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Copropriété
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 7 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Gouttières en Copropriété à Bruxelles : Qui Paie l&apos;Entretien et Comment l&apos;Organiser ?
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Bruxelles compte une majorité de logements en immeubles à appartements. Contrairement à une maison individuelle, l&apos;entretien des gouttières y implique un syndic, des charges communes et parfois une assemblée générale. Voici comment ça fonctionne réellement.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <div className="not-prose bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl mb-6">
              <div className="flex gap-2 items-start">
                <Users size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="text-orange-800 text-sm font-medium">
                  Dans un immeuble, une gouttière bouchée ne concerne jamais un seul propriétaire : c&apos;est toute la toiture, et souvent plusieurs appartements en cas d&apos;infiltration, qui sont exposés.
                </p>
              </div>
            </div>

            <h2>Les gouttières, une partie commune de l&apos;immeuble</h2>
            <p>
              Dans un immeuble à appartements, les gouttières font partie des <strong>parties communes</strong>, au même titre que la toiture, la cage d&apos;escalier ou les façades. Leur entretien ne repose donc jamais sur un seul copropriétaire, mais sur l&apos;ensemble de la copropriété, représentée par le syndic.
            </p>
            <p>
              C&apos;est le syndic qui planifie et fait réaliser le nettoyage, généralement dans le cadre de sa mission de gestion courante. Pour un <Link href="/blog/entretien-gouttieres-quand-faire">entretien régulier</Link> — nettoyage annuel, débouchage, petite réparation — aucune convocation d&apos;assemblée générale n&apos;est nécessaire : il s&apos;agit d&apos;un acte de gestion normale, financé directement sur le budget de fonctionnement de l&apos;immeuble.
            </p>

            <h2>Comment se répartissent les frais entre copropriétaires</h2>
            <p>
              La répartition des frais suit en principe les <strong>quotités</strong> définies dans l&apos;acte de base — la valeur relative de chaque lot au sein de la copropriété. Un appartement plus grand, ou disposant d&apos;une quotité plus élevée, contribue donc davantage qu&apos;un petit studio, même si l&apos;intervention bénéficie à tout le bâtiment de la même façon.
            </p>
            <p>
              Cette règle générale peut être adaptée par le règlement de copropriété, qui prévaut sur le principe par défaut. En cas de doute sur la clé de répartition applicable à votre immeuble, le document de référence reste l&apos;acte de base et le règlement de copropriété — pas une estimation approximative faite en assemblée.
            </p>

            <h2>Faut-il un vote en assemblée générale ?</h2>
            <p>
              Tout dépend de la nature de l&apos;intervention :
            </p>
            <ul>
              <li><strong>Entretien courant et périodique</strong> (nettoyage annuel, débouchage, petite réparation de joint) : le syndic peut l&apos;engager directement, sans vote, dans la limite de son budget de fonctionnement.</li>
              <li><strong>Remplacement complet des gouttières ou travaux importants imprévus</strong> : un accord de l&apos;assemblée générale est nécessaire, en général à la majorité requise pour les travaux de conservation de l&apos;immeuble.</li>
            </ul>
            <p>
              Dans la pratique, beaucoup de syndics profitent de l&apos;assemblée générale annuelle pour présenter un rapport d&apos;état des gouttières — utile pour anticiper un remplacement avant qu&apos;il ne devienne urgent, et pour budgétiser la dépense sur l&apos;exercice suivant plutôt que de la subir en urgence.
            </p>

            <h2>Cas particulier : les terrasses privatives</h2>
            <p>
              Certains immeubles bruxellois disposent de terrasses à jouissance privative reliées à une gouttière qui n&apos;évacue que les eaux de cette terrasse. Dans ce cas précis, l&apos;entretien courant peut incomber au copropriétaire qui en a l&apos;usage exclusif, tandis que le <Link href="/blog/prix-remplacement-gouttieres-bruxelles-2026">remplacement</Link> reste souvent une charge commune, sauf disposition contraire explicite du règlement de copropriété. Cette distinction génère régulièrement des désaccords entre voisins — un règlement clair et un syndic qui applique le texte à la lettre évitent bien des tensions.
            </p>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> Bon réflexe pour les syndics</h3>
              <p className="text-green-700 text-sm">
                Demandez systématiquement un rapport écrit après chaque intervention. En cas de litige entre copropriétaires ou de sinistre couvert par l&apos;assurance de l&apos;immeuble, ce document prouve que l&apos;entretien a bien été réalisé et évite un refus d&apos;indemnisation pour défaut d&apos;entretien.
              </p>
            </div>

            <h2>Organiser l&apos;intervention pour un immeuble</h2>
            <p>
              Un immeuble à appartements présente des contraintes différentes d&apos;une maison individuelle : hauteur plus importante, plusieurs façades, davantage de descentes pluviales, et parfois un accès aux toitures-terrasses ou aux corniches qui nécessite du matériel adapté. Comptez généralement <strong>une journée complète d&apos;intervention</strong> pour un immeuble bruxellois standard, contre 1h30 à 3h pour une maison.
            </p>
            <p>
              Comme pour une maison, la fréquence recommandée est d&apos;au moins un nettoyage par an, idéalement en automne. Dans les communes plus arborées de la deuxième couronne, deux passages annuels limitent le risque de <Link href="/blog/gouttiere-qui-deborde-causes-solutions">débordement</Link> qui, dans un immeuble à plusieurs étages, peut endommager plusieurs appartements simultanément en cas d&apos;infiltration par la toiture.
            </p>
            <p>
              Pour le syndic, l&apos;idéal est de demander un devis détaillé mentionnant clairement ce qui relève de l&apos;entretien courant (facturable sans vote) et ce qui relèverait d&apos;un remplacement (à soumettre en assemblée générale). Cette distinction, présentée noir sur blanc, facilite grandement la gestion administrative de la copropriété.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={20} className="text-[#F97316]" />
                <h3 className="font-bold text-lg">Vous êtes syndic ?</h3>
              </div>
              <p className="text-green-100 text-sm mb-4">Devis détaillé pour votre copropriété, rapport d&apos;état écrit pour l&apos;assemblée générale. Intervention dans toute la Région bruxelloise.</p>
              <Link href="/contact" className="w-full bg-white text-[#1A4731] font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-50 transition-colors">
                Demander un devis <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-gray-900 font-bold text-lg mb-5">Formulaire de devis</h3>
              <ContactForm />
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes des syndics et copropriétaires</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-10 bg-[#F97316]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Syndic ou gestionnaire ? Obtenez un devis adapté à votre copropriété.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0451053370"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F97316] font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
            >
              <Phone size={18} />
              0451 05 33 70
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Formulaire de devis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Articles liés</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Nettoyage de gouttières", href: "/services/nettoyage-gouttieres" },
              { label: "Prix nettoyage gouttières à Bruxelles", href: "/blog/prix-nettoyage-gouttieres-bruxelles" },
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Gouttière qui déborde : causes et solutions", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Prix remplacement gouttières 2026", href: "/blog/prix-remplacement-gouttieres-bruxelles-2026" },
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
