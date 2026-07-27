import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Tag, Users, FileText } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Gouttières en Copropriété à Bruxelles : Qui Paie, Qui Décide ?",
  description:
    "Immeuble en copropriété à Bruxelles : qui paie et qui décide l'entretien des gouttières communes ? Rôle du syndic, répartition des frais, bonnes pratiques.",
  keywords: [
    "entretien gouttières copropriété Bruxelles",
    "qui paie entretien gouttières immeuble",
    "syndic gouttières Bruxelles",
    "gouttières parties communes copropriété",
    "nettoyage gouttières immeuble appartements Bruxelles",
  ],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/entretien-gouttieres-copropriete-bruxelles-qui-paie" },
  openGraph: {
    type: "article",
    title: "Gouttières en Copropriété à Bruxelles : Qui Paie, Qui Décide ?",
    description: "Rôle du syndic et de l'assemblée générale, répartition des frais entre copropriétaires et bonnes pratiques pour l'entretien des gouttières communes.",
    images: [{ url: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1200&q=80", width: 1200, height: 630, alt: "Immeuble à appartements en copropriété à Bruxelles" }],
    publishedTime: "2026-07-15",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gouttières en Copropriété à Bruxelles : Qui Paie ?",
    description: "Rôle du syndic, répartition des frais et bonnes pratiques pour l'entretien des gouttières communes à Bruxelles.",
    images: ["https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1200&q=80"],
  },
}

export default function BlogEntretienGouttieresCoproprietePage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"
  const SLUG = "entretien-gouttieres-copropriete-bruxelles-qui-paie"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/${SLUG}`,
        headline: "Entretien des gouttières en copropriété à Bruxelles : qui paie, qui décide ?",
        description: "Qui paie et qui décide l'entretien des gouttières communes d'un immeuble à appartements à Bruxelles ? Rôle du syndic, répartition des frais et bonnes pratiques.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-07-15",
        dateModified: "2026-07-15",
        image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/${SLUG}` },
        inLanguage: "fr-BE",
        keywords: "entretien gouttières copropriété, syndic gouttières Bruxelles, gouttières parties communes",
        articleSection: "Conseils",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Gouttières en copropriété", item: `${DOMAIN}/blog/${SLUG}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Qui paie l'entretien des gouttières dans un immeuble à appartements ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Les gouttières font en principe partie des éléments communs de l'immeuble : leur entretien est donc à charge de la copropriété dans son ensemble, et non d'un seul occupant. Les frais sont répartis entre tous les copropriétaires selon les quotités indiquées dans l'acte de base, sauf clause contraire du règlement de copropriété.",
            },
          },
          {
            "@type": "Question",
            name: "Le syndic peut-il faire nettoyer les gouttières sans passer par l'assemblée générale ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pour un entretien courant et récurrent (nettoyage annuel, petite réparation), le syndic agit souvent dans le cadre de sa mission de gestion journalière, surtout si un budget a déjà été voté. Pour des travaux plus importants ou un nouveau contrat d'entretien, un vote en assemblée générale est généralement requis. Le règlement de copropriété précise les seuils applicables.",
            },
          },
          {
            "@type": "Question",
            name: "Un copropriétaire du rez-de-chaussée doit-il payer l'entretien des gouttières du toit ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En général, oui : les gouttières et la toiture protègent l'ensemble du bâtiment, y compris les fondations et les murs porteurs communs à tous les étages. Elles sont donc considérées comme un élément commun à l'ensemble de l'immeuble, même si l'appartement du rez-de-chaussée n'y est pas directement exposé.",
            },
          },
          {
            "@type": "Question",
            name: "Comment prouver l'entretien des gouttières en cas de dégât des eaux dans l'immeuble ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le syndic doit pouvoir présenter les factures d'entretien et, idéalement, un rapport d'état daté de l'installation. Ces documents sont essentiels en cas de sinistre : ils permettent de démontrer à l'assureur de l'immeuble qu'un entretien régulier a bien été assuré, ce qui facilite l'indemnisation.",
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
              { label: "Gouttières en copropriété" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Conseils
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 8 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Entretien des Gouttières en Copropriété à Bruxelles : Qui Paie, Qui Décide ?
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Dans un immeuble à appartements, l&apos;entretien des gouttières soulève des questions
            propres à la copropriété : qui est responsable, qui décide et comment se répartissent
            les frais entre copropriétaires ? Voici ce qu&apos;il faut savoir à Bruxelles.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <h2>Pourquoi la copropriété change la donne pour l&apos;entretien des gouttières</h2>
            <p>
              Dans une maison individuelle, la décision est simple : le propriétaire constate que
              ses gouttières sont encombrées et appelle un professionnel. Dans un immeuble à
              appartements — très courant dans des communes denses comme Ixelles, Saint-Gilles,
              Etterbeek ou Schaerbeek — la situation est différente. Personne n&apos;habite « sous »
              les gouttières au sens propre, et pourtant tout le monde est concerné : ce sont elles
              qui protègent la toiture, les façades et, indirectement, les fondations de l&apos;ensemble
              du bâtiment.
            </p>
            <p>
              Cette dimension collective explique pourquoi les gouttières d&apos;un immeuble sont
              souvent moins bien suivies que celles d&apos;une maison : personne ne les voit au
              quotidien, et leur entretien dépend d&apos;une décision collective plutôt que d&apos;un
              seul propriétaire vigilant. Résultat : elles sont parfois nettoyées trop rarement,
              jusqu&apos;à ce qu&apos;un débordement ou une infiltration révèle le problème — souvent
              dans l&apos;appartement du dernier étage.
            </p>

            <h2>Les gouttières sont-elles une « partie commune » de l&apos;immeuble ?</h2>
            <p>
              En Belgique, la réglementation sur la copropriété distingue les <strong>parties
              privatives</strong> (l&apos;intérieur de chaque appartement) des <strong>parties
              communes</strong> (tout ce qui sert à l&apos;ensemble des copropriétaires ou à la
              solidité du bâtiment). Les gouttières, comme la toiture, la charpente et les descentes
              pluviales, relèvent en principe des parties communes, car elles protègent l&apos;ensemble
              de l&apos;immeuble et pas un seul lot.
            </p>
            <p>
              Cette règle générale peut toutefois être précisée — voire nuancée — par l&apos;acte de
              base et le règlement de copropriété de votre immeuble, qui définissent exactement ce
              qui est commun et comment les charges sont réparties. En cas de doute sur votre
              situation, ces deux documents restent la référence à consulter en priorité, avec
              l&apos;aide du syndic.
            </p>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-5 my-6">
              <div className="flex gap-3 items-start">
                <Users size={20} className="text-[#1A4731] shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <strong>À retenir :</strong> même un copropriétaire du rez-de-chaussée, jamais
                  directement exposé à un débordement de gouttière, participe généralement aux frais
                  d&apos;entretien — car la toiture et les gouttières protègent la structure de tout
                  l&apos;immeuble, y compris les murs porteurs et les fondations communes.
                </p>
              </div>
            </div>

            <h2>Qui décide : le rôle du syndic et de l&apos;assemblée générale</h2>
            <p>
              Concrètement, deux niveaux de décision coexistent dans la plupart des copropriétés
              bruxelloises :
            </p>
            <ul>
              <li>
                <strong>La gestion journalière</strong>, confiée au syndic : un nettoyage annuel
                récurrent, déjà budgétisé et voté les années précédentes, peut généralement être
                reconduit par le syndic sans nouveau vote formel.
              </li>
              <li>
                <strong>Les décisions plus importantes</strong> — signer un nouveau contrat
                d&apos;entretien, faire réparer une section de gouttière endommagée, remplacer un
                tronçon en zinc vétuste — sont en principe soumises à l&apos;assemblée générale des
                copropriétaires, à la majorité prévue par le règlement pour ce type d&apos;acte.
              </li>
            </ul>
            <p>
              Dans les deux cas, un syndic bien organisé anticipe : il inscrit l&apos;entretien des
              gouttières à l&apos;ordre du jour de l&apos;assemblée générale annuelle, présente un état
              des lieux et propose un budget, plutôt que de découvrir le problème après un sinistre.
            </p>

            <h2>Qui paie : la répartition des frais entre copropriétaires</h2>
            <p>
              Une fois la décision prise, le coût de l&apos;intervention est facturé à la copropriété —
              et non à un copropriétaire en particulier — puis réparti entre tous les lots selon les
              <strong> quotités</strong> définies dans l&apos;acte de base (souvent exprimées en
              millièmes). Ces quotités reflètent généralement la taille relative de chaque
              appartement, indépendamment de son étage ou de sa proximité avec la toiture.
            </p>
            <p>
              Pour ce type de dépense, nous facturons directement la copropriété ou le syndic, avec
              une facture TVA détaillée et un paiement à 30 jours — un mode de fonctionnement adapté
              à la comptabilité des immeubles, différent du paiement comptant pratiqué pour les
              particuliers.
            </p>

            <h2>Le processus concret, du diagnostic à la facture</h2>
            <p>
              Pour une copropriété, l&apos;intervention suit généralement ces étapes :
            </p>
            <div className="not-prose space-y-3 my-6">
              {[
                { num: "1", titre: "Demande du syndic ou d'un copropriétaire", desc: "Le syndic (ou un copropriétaire qui l'alerte) sollicite un devis pour l'entretien des gouttières communes." },
                { num: "2", titre: "Visite et devis gratuit", desc: "Nos techniciens évaluent le linéaire, l'accessibilité et l'état général — toiture, zinc, descentes — pour établir un devis précis." },
                { num: "3", titre: "Validation (syndic ou assemblée générale)", desc: "Selon le montant et le règlement de copropriété, le syndic valide directement ou soumet le devis au vote de l'assemblée générale." },
                { num: "4", titre: "Intervention et rapport d'état", desc: "Nettoyage, débouchage ou réparation. Nous fournissons un rapport détaillé, utile pour la comptabilité de la copropriété et pour informer les copropriétaires en assemblée générale." },
                { num: "5", titre: "Facturation à la copropriété", desc: "Facture TVA adressée au syndic, payable à 30 jours, puis répartie entre copropriétaires selon les quotités." },
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

            <h2>Pourquoi un contrat d&apos;entretien annuel a du sens en copropriété</h2>
            <p>
              Pour une maison individuelle, un rappel annuel suffit généralement à ne pas oublier
              l&apos;entretien. Pour une copropriété, où la décision passe par plusieurs personnes et
              parfois par un vote, l&apos;oubli est beaucoup plus fréquent — jusqu&apos;au jour où un
              débordement révèle des mois, voire des années, de négligence.
            </p>
            <p>
              C&apos;est pour cette raison que nous proposons un <strong>contrat annuel avec passage
              programmé</strong> (en octobre, et en option en mars), assorti d&apos;une remise de 10 %
              et d&apos;une priorité de planning en haute saison. Pour un syndic, cela présente un
              double avantage : plus besoin de relancer une décision chaque année, et un
              <Link href="/blog/entretien-gouttieres-quand-faire"> calendrier d&apos;entretien</Link>{" "}
              fixe à présenter en assemblée générale.
            </p>

            <h2>Que faire en cas de litige ou de copropriétaire récalcitrant ?</h2>
            <p>
              Il arrive qu&apos;un copropriétaire conteste sa participation aux frais d&apos;entretien des
              gouttières, en particulier s&apos;il occupe un étage bas ou un lot commercial. Le
              règlement de copropriété et l&apos;acte de base font foi : dans l&apos;immense majorité des
              cas, les gouttières étant classées parties communes affectées à l&apos;ensemble de
              l&apos;immeuble, la contribution reste due selon les quotités, même sans lien direct
              apparent avec le lot concerné. En cas de désaccord persistant, il revient au syndic —
              et le cas échéant au conseil de copropriété — de trancher, sur base des documents de
              base de la copropriété.
            </p>
            <p>
              Un <Link href="/blog/degat-des-eaux-gouttiere-assurance-bruxelles">dégât des eaux mal
              anticipé</Link> coûte presque toujours plus cher qu&apos;un entretien préventif partagé
              entre tous les copropriétaires — un argument qui facilite souvent le vote en assemblée
              générale.
            </p>

            <div className="not-prose bg-orange-50 border border-orange-200 rounded-xl p-5 my-6">
              <div className="flex gap-3 items-start">
                <FileText size={20} className="text-[#F97316] shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <strong>Vous êtes syndic ou membre d&apos;un conseil de copropriété ?</strong> Nous
                  établissons un rapport d&apos;état détaillé des gouttières communes, directement
                  exploitable pour votre prochaine assemblée générale.
                </p>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">Vous gérez une copropriété ?</h3>
              <p className="text-green-100 text-sm mb-4">
                Devis gratuit pour l&apos;entretien des gouttières communes, facturation syndic à
                30 jours. Nous intervenons dans toutes les communes de Bruxelles.
              </p>
              <Link href="/contact" className="w-full bg-white text-[#1A4731] font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-50 transition-colors">
                Devis gratuit <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-gray-900 font-bold text-lg mb-5">Formulaire de devis</h3>
              <ContactForm defaultIntervention="Nettoyage gouttières" />
            </div>
          </aside>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Articles et pages liés</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Nettoyage de gouttières", href: "/services/nettoyage-gouttieres" },
              { label: "Tarifs et abonnement entretien annuel", href: "/tarifs" },
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Dégât des eaux et assurance", href: "/blog/degat-des-eaux-gouttiere-assurance-bruxelles" },
              { label: "FAQ nettoyage gouttières", href: "/faq" },
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
