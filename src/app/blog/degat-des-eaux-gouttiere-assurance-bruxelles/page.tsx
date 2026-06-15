import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Dégât des Eaux dû à une Gouttière : Êtes-vous Couvert par l'Assurance ?",
  description: "Une gouttière bouchée a causé un dégât des eaux à Bruxelles ? Découvrez si votre assurance habitation couvre les dommages et comment éviter un refus pour défaut d'entretien.",
  keywords: ["dégât des eaux gouttière assurance", "gouttière bouchée assurance habitation", "défaut entretien gouttière", "infiltration assurance Bruxelles", "indemnisation dégât des eaux toiture"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/degat-des-eaux-gouttiere-assurance-bruxelles" },
  openGraph: {
    type: "article",
    title: "Dégât des Eaux et Gouttière : l'Assurance Couvre-t-elle ?",
    description: "Ce que prévoit votre assurance habitation à Bruxelles en cas de dégât des eaux causé par une gouttière, et comment éviter un refus d'indemnisation.",
    images: [{ url: "https://images.unsplash.com/photo-1517490232338-06b912a786b5?w=1200&q=80", width: 1200, height: 630, alt: "Dégât des eaux causé par une gouttière à Bruxelles" }],
    publishedTime: "2026-06-14",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dégât des Eaux dû à une Gouttière et Assurance",
    description: "Couverture, défaut d'entretien et indemnisation : ce qu'il faut savoir à Bruxelles.",
    images: ["https://images.unsplash.com/photo-1517490232338-06b912a786b5?w=1200&q=80"],
  },
}

export default function BlogDegatDesEauxGouttiereAssurance() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/degat-des-eaux-gouttiere-assurance-bruxelles`,
        headline: "Dégât des eaux dû à une gouttière : êtes-vous couvert par votre assurance ?",
        description: "Si votre assurance habitation couvre un dégât des eaux causé par une gouttière à Bruxelles, et comment éviter un refus pour défaut d'entretien.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-14",
        dateModified: "2026-06-14",
        image: "https://images.unsplash.com/photo-1517490232338-06b912a786b5?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/degat-des-eaux-gouttiere-assurance-bruxelles` },
        inLanguage: "fr-BE",
        keywords: "dégât des eaux gouttière, assurance habitation Bruxelles, défaut d'entretien gouttière",
        articleSection: "Conseils",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Dégât des eaux et assurance", item: `${DOMAIN}/blog/degat-des-eaux-gouttiere-assurance-bruxelles` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "L'assurance habitation couvre-t-elle un dégât des eaux causé par une gouttière bouchée ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cela dépend des circonstances. Un dégât accidentel et soudain est généralement couvert, mais si l'assureur prouve que la gouttière n'avait jamais été entretenue, il peut réduire ou refuser l'indemnisation pour défaut d'entretien. Conserver les preuves d'un entretien régulier est essentiel.",
            },
          },
          {
            "@type": "Question",
            name: "Comment éviter un refus d'indemnisation pour défaut d'entretien à Bruxelles ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Faites nettoyer vos gouttières au moins deux fois par an et conservez les factures. Ces documents prouvent que vous avez entretenu votre installation et facilitent l'indemnisation en cas de sinistre.",
            },
          },
          {
            "@type": "Question",
            name: "Que faire immédiatement après un dégât des eaux dû à une gouttière ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Stoppez la source si possible, prenez des photos des dégâts, déclarez le sinistre à votre assureur dans les délais prévus au contrat, et faites réparer la gouttière par un professionnel en gardant la facture.",
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
              { label: "Dégât des eaux et assurance" },
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
            Dégât des Eaux dû à une Gouttière : Êtes-vous Couvert par votre Assurance ?
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Une gouttière négligée peut coûter cher — et l&apos;assurance ne couvre pas toujours. Voici ce que prévoit l&apos;assurance habitation à Bruxelles et comment éviter un refus d&apos;indemnisation.
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
                <AlertTriangle size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="text-orange-800 text-sm font-medium">
                  Le défaut d&apos;entretien est l&apos;une des premières causes de refus d&apos;indemnisation. Un nettoyage régulier de vos gouttières n&apos;est pas seulement préventif : c&apos;est aussi votre meilleure protection face à l&apos;assureur.
                </p>
              </div>
            </div>

            <h2>Gouttière, infiltration et assurance : comprendre le mécanisme</h2>
            <p>
              Une gouttière bouchée ou percée laisse l&apos;eau ruisseler là où elle ne devrait pas : sur la façade, dans les combles, le long des fondations. Quand cette eau finit par pénétrer dans l&apos;habitation, on parle de dégât des eaux. La question qui suit, immanquablement : <strong>qui paie ?</strong>
            </p>
            <p>
              La réponse dépend d&apos;un critère central que tous les assureurs examinent : le sinistre était-il <strong>accidentel et soudain</strong>, ou résulte-t-il d&apos;un <strong>défaut d&apos;entretien</strong> de votre part ? C&apos;est cette distinction qui détermine, en grande partie, si vous serez indemnisé.
            </p>

            <h2>Ce que couvre généralement l&apos;assurance habitation</h2>
            <p>
              La plupart des contrats d&apos;assurance habitation en Belgique comportent une garantie « dégâts des eaux » qui couvre les dommages causés par une infiltration soudaine. Sont souvent pris en charge :
            </p>
            <ul>
              <li>Les dommages aux plafonds, murs et sols touchés par l&apos;eau</li>
              <li>Les dégâts au mobilier et aux biens endommagés</li>
              <li>Parfois les frais de recherche de la fuite</li>
            </ul>
            <p>
              Attention : les conditions, plafonds et exclusions varient fortement d&apos;un contrat à l&apos;autre. Seule la lecture de vos conditions générales fait foi.
            </p>

            <h2>Le piège : le défaut d&apos;entretien</h2>
            <p>
              C&apos;est ici que beaucoup de propriétaires bruxellois sont surpris. Si l&apos;expert mandaté par l&apos;assureur constate que la gouttière était <strong>manifestement bouchée depuis longtemps</strong>, encombrée de feuilles, de mousse et de terre, il peut conclure à un défaut d&apos;entretien. Dans ce cas, l&apos;assureur est en droit de <strong>réduire l&apos;indemnisation, voire de la refuser</strong>.
            </p>
            <p>
              La logique de l&apos;assurance est simple : elle couvre l&apos;imprévu, pas la négligence. Une gouttière qu&apos;on n&apos;a jamais nettoyée et qui finit par déborder n&apos;est pas un « accident » aux yeux de l&apos;assureur — c&apos;est une conséquence prévisible.
            </p>

            <h2>Les 5 signes que vos gouttières causent des infiltrations</h2>
            <div className="not-prose space-y-3 mb-6">
              {[
                { num: "1", titre: "Conservez vos factures de nettoyage", desc: "Une facture d'un professionnel datée prouve que vous avez entretenu vos gouttières. C'est votre meilleure pièce justificative en cas de litige." },
                { num: "2", titre: "Faites nettoyer 2 fois par an", desc: "À Bruxelles, le rythme recommandé est de deux nettoyages annuels (après l'automne et avant le printemps), compte tenu des nombreux arbres en ville." },
                { num: "3", titre: "Photographiez l'état de vos gouttières", desc: "Quelques photos régulières montrant des gouttières propres constituent une preuve d'entretien complémentaire." },
                { num: "4", titre: "Déclarez vite le sinistre", desc: "Respectez les délais de déclaration prévus à votre contrat. Un retard peut être un motif de réduction d'indemnité." },
                { num: "5", titre: "Réparez sans tarder", desc: "Une fois la cause identifiée, faites réparer la gouttière rapidement pour éviter l'aggravation — un dommage qui s'aggrave faute de réparation peut être exclu." },
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

            <h2>Que faire immédiatement après un dégât des eaux ?</h2>
            <ul>
              <li><strong>Stoppez ou limitez l&apos;arrivée d&apos;eau</strong> si c&apos;est possible sans danger (bâcher, dégager une descente accessible depuis le sol)</li>
              <li><strong>Photographiez tout</strong> : les dégâts intérieurs, la gouttière en cause, les biens touchés</li>
              <li><strong>Déclarez le sinistre</strong> à votre assureur dans les délais du contrat</li>
              <li><strong>Faites intervenir un professionnel</strong> pour réparer la gouttière et conservez la facture</li>
              <li><strong>Ne jetez pas</strong> les biens endommagés avant le passage éventuel de l&apos;expert</li>
            </ul>

            <h2>Propriétaire, locataire ou copropriété : qui est responsable ?</h2>
            <p>
              La répartition des responsabilités dépend de votre situation. En location, l&apos;entretien courant incombe souvent au locataire tandis que les grosses réparations relèvent du propriétaire. En copropriété, les gouttières des parties communes relèvent généralement de la copropriété. En cas de doute, référez-vous au bail ou au règlement de copropriété, et faites établir un constat précis de la cause par un professionnel.
            </p>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> Le réflexe gagnant</h3>
              <p className="text-green-700 text-sm">
                Un entretien régulier documenté coûte quelques dizaines d&apos;euros par an. Un dégât des eaux non indemnisé pour défaut d&apos;entretien peut coûter des milliers d&apos;euros. Le calcul est vite fait.
              </p>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">Protégez-vous</h3>
              <p className="text-green-100 text-sm mb-4">Nettoyage de gouttières avec facture à l&apos;appui — votre preuve d&apos;entretien. Devis gratuit sous 24h.</p>
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
              { label: "Infiltrations façade et gouttières", href: "/blog/infiltration-eau-facade-gouttieres" },
              { label: "Gouttière qui déborde", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Prix nettoyage gouttières", href: "/blog/prix-nettoyage-gouttieres-bruxelles" },
              { label: "Protections anti-feuilles", href: "/blog/protection-gouttieres-anti-feuilles-bruxelles" },
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
