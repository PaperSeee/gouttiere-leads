import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Orages d'Été à Bruxelles : la Checklist Gouttières Avant les Intempéries",
  description: "Les orages d'été déversent en 20 minutes l'équivalent de plusieurs jours de pluie. Gouttière bouchée = débordement garanti. La checklist complète pour préparer vos gouttières avant l'orage à Bruxelles.",
  keywords: ["orage gouttière bruxelles", "gouttière déborde orage", "pluie intense gouttière bouchée", "préparer gouttières été", "intempéries toiture Bruxelles"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/orages-ete-gouttieres-bruxelles-checklist" },
  openGraph: {
    type: "article",
    title: "Orages d'été : vos gouttières sont-elles prêtes ?",
    description: "Un orage d'été déverse des trombes d'eau en quelques minutes. Checklist complète pour éviter débordements et infiltrations à Bruxelles.",
    images: [{ url: "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=1200&q=80", width: 1200, height: 630, alt: "Orage d'été sur des toitures bruxelloises" }],
    publishedTime: "2026-07-03",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orages d'été à Bruxelles : la checklist gouttières",
    description: "Préparez vos gouttières avant les intempéries : la checklist en 7 points.",
    images: ["https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=1200&q=80"],
  },
}

export default function BlogOragesEteGouttieres() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/orages-ete-gouttieres-bruxelles-checklist`,
        headline: "Orages d'été à Bruxelles : la checklist gouttières avant les intempéries",
        description: "Pourquoi les orages d'été sont le pire scénario pour une gouttière encrassée, et la checklist en 7 points pour préparer votre toiture à Bruxelles.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-07-03",
        dateModified: "2026-07-03",
        image: "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/orages-ete-gouttieres-bruxelles-checklist` },
        inLanguage: "fr-BE",
        keywords: "orage gouttière Bruxelles, pluie intense gouttière, débordement gouttière été",
        articleSection: "Saisonnier",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Orages d'été : checklist gouttières", item: `${DOMAIN}/blog/orages-ete-gouttieres-bruxelles-checklist` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Pourquoi ma gouttière déborde-t-elle uniquement pendant les orages ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Une gouttière partiellement encrassée évacue encore une pluie fine, mais pas les 20 à 40 litres par m² qu'un orage d'été peut déverser en moins d'une heure. Le débit dépasse la capacité restante et l'eau passe par-dessus bord, le long de la façade.",
            },
          },
          {
            "@type": "Question",
            name: "Faut-il nettoyer ses gouttières en été à Bruxelles ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui si elles n'ont pas été vérifiées depuis le printemps : fleurs, graines, mousses de toiture et nids d'oiseaux s'y accumulent dès mai-juin. Un contrôle avant la saison des orages (juillet-août) évite les débordements au pire moment.",
            },
          },
          {
            "@type": "Question",
            name: "Que faire si un orage est annoncé et que mes gouttières sont bouchées ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ne montez jamais sur un toit avant ou pendant un orage. Dégagez uniquement ce qui est accessible depuis le sol (crapaudine de descente, regard d'égout), écartez les biens sensibles des murs concernés, et faites intervenir un professionnel dès l'accalmie — idéalement en entretien préventif avant l'épisode suivant.",
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
              { label: "Orages d'été : checklist gouttières" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Saisonnier
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 6 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Orages d&apos;Été à Bruxelles : la Checklist Gouttières Avant les Intempéries
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Un orage d&apos;été peut déverser en vingt minutes l&apos;équivalent de plusieurs jours de pluie. Si vos gouttières sont encrassées, c&apos;est le débordement assuré — au pire moment. Voici comment vous y préparer.
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
                  Les dégâts des eaux liés aux orages se concentrent sur quelques jours par an — mais ils se préparent des semaines à l&apos;avance. Une gouttière contrôlée en début d&apos;été traverse la saison des orages sans incident.
                </p>
              </div>
            </div>

            <h2>Pourquoi l&apos;orage d&apos;été est le pire scénario pour vos gouttières</h2>
            <p>
              Une pluie d&apos;automne tombe de façon régulière : même une gouttière à moitié encrassée arrive souvent à suivre. Un orage d&apos;été, c&apos;est l&apos;inverse : <strong>20 à 40 litres par mètre carré peuvent tomber en moins d&apos;une heure</strong>. Pour une toiture bruxelloise de 80 m², cela représente plusieurs milliers de litres à évacuer par deux ou trois descentes.
            </p>
            <p>
              Si le chéneau est tapissé de mousses, de graines ou d&apos;un nid abandonné, sa capacité d&apos;évacuation est réduite de moitié — et l&apos;eau passe par-dessus bord. Elle ruisselle alors sur la façade, s&apos;infiltre aux jonctions, sature les fondations. Les <Link href="/blog/infiltration-eau-facade-gouttieres">infiltrations par la façade</Link> constatées en été proviennent presque toujours de ce mécanisme.
            </p>

            <h2>Ce qui s&apos;accumule dans vos gouttières entre mai et juillet</h2>
            <ul>
              <li><strong>Fleurs et graines</strong> : peupliers, platanes et tilleuls — omniprésents à Bruxelles — relâchent leurs graines de mai à juin</li>
              <li><strong>Mousses de toiture</strong> : desséchées par la chaleur, elles se détachent des tuiles et glissent dans le chéneau</li>
              <li><strong>Nids d&apos;oiseaux</strong> : la saison de nidification laisse des amas de brindilles, souvent au débouché des descentes</li>
              <li><strong>Poussières et pollens</strong> : mélangés à quelques pluies fines, ils forment un sédiment compact au fond du chéneau</li>
            </ul>

            <h2>La checklist en 7 points avant la saison des orages</h2>
            <ul>
              <li><strong>1. Inspectez depuis le sol</strong> : traces de débordement (coulures vertes ou noires sous la gouttière), végétation qui dépasse, joints qui gouttent</li>
              <li><strong>2. Testez les descentes</strong> : lors d&apos;une pluie normale, l&apos;eau doit s&apos;écouler franchement au pied de chaque descente</li>
              <li><strong>3. Vérifiez les crapaudines</strong> : ces grilles au sommet des descentes se bouchent en premier</li>
              <li><strong>4. Contrôlez les regards d&apos;égout</strong> au pied des descentes : un regard obstrué fait refouler l&apos;eau même si la gouttière est propre</li>
              <li><strong>5. Faites nettoyer le chéneau complet</strong> si le dernier entretien date de plus de 6 mois</li>
              <li><strong>6. Faites vérifier pentes et fixations</strong> : un orage accompagné de rafales teste chaque crochet</li>
              <li><strong>7. Conservez la facture d&apos;entretien</strong> : en cas de sinistre, c&apos;est votre preuve face à l&apos;assureur — voir notre article sur <Link href="/blog/degat-des-eaux-gouttiere-assurance-bruxelles">l&apos;assurance et les dégâts des eaux</Link></li>
            </ul>

            <h2>Orage annoncé, gouttières douteuses : les bons réflexes</h2>
            <p>
              Si l&apos;IRM annonce un épisode orageux et que vous savez vos gouttières encrassées, <strong>ne montez pas sur le toit</strong> — ni avant, ni pendant. Limitez les risques autrement : dégagez ce qui est accessible depuis le sol, éloignez meubles et biens sensibles des murs exposés, et surveillez les plafonds des pièces sous toiture pendant l&apos;épisode. Dès l&apos;accalmie, faites intervenir un professionnel équipé.
            </p>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> Le bon timing</h3>
              <p className="text-green-700 text-sm">
                À Bruxelles, la fenêtre idéale pour le contrôle d&apos;été se situe fin juin – mi-juillet : après la chute des graines, avant le cœur de la saison orageuse. Un nettoyage à ce moment protège jusqu&apos;à l&apos;entretien d&apos;automne.
              </p>
            </div>

            <h2>Combien ça coûte — et combien ça évite</h2>
            <p>
              Un nettoyage professionnel de gouttières à Bruxelles coûte généralement <strong>entre 80 et 200 €</strong> selon la longueur et l&apos;accessibilité (détail dans notre <Link href="/blog/prix-nettoyage-gouttieres-bruxelles">guide des prix</Link>). Un dégât des eaux après débordement — plafonds, peintures, parquet — se chiffre vite en milliers d&apos;euros, avec le risque d&apos;un refus d&apos;indemnisation pour défaut d&apos;entretien. L&apos;arbitrage est vite fait.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">Avant le prochain orage</h3>
              <p className="text-green-100 text-sm mb-4">Contrôle + nettoyage complet avec facture d&apos;entretien. Intervention dans toute la Région bruxelloise. Devis gratuit sous 24h.</p>
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
              { label: "Gouttière qui déborde : causes et solutions", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Dégât des eaux et assurance", href: "/blog/degat-des-eaux-gouttiere-assurance-bruxelles" },
              { label: "Infiltrations façade et gouttières", href: "/blog/infiltration-eau-facade-gouttieres" },
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
