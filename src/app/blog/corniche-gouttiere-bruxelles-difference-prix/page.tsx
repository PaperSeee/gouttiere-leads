// DRAFT — contenu rédigé pour combler un vrai manque de couverture (mot-clé "corniche"
// absent du site alors que des concurrents bruxellois le ciblent). À faire relire par le
// client avant publication définitive : vérifier la terminologie technique et les fourchettes
// de prix mentionnées face à la pratique réelle de l'entreprise.
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Corniche ou Gouttière à Bruxelles : Différence, Entretien, Prix",
  description: "Corniche et gouttière ne sont pas la même chose. Différences, signes d'usure sur le bâti bruxellois ancien, et prix d'un entretien de corniche.",
  keywords: ["nettoyage corniche Bruxelles", "corniche gouttière différence", "entretien corniche zinc", "corniche maison de maître Bruxelles", "réparation corniche toiture"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/corniche-gouttiere-bruxelles-difference-prix" },
  openGraph: {
    type: "article",
    title: "Corniche ou Gouttière : Différence, Entretien et Prix à Bruxelles",
    description: "Beaucoup de propriétaires bruxellois confondent corniche et gouttière. Voici la différence, les signes d'alerte et les prix d'entretien.",
    images: [{ url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80", width: 1200, height: 630, alt: "Corniche et gouttière en zinc sur façade Art nouveau à Bruxelles" }],
    publishedTime: "2026-07-13",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corniche ou Gouttière : la Différence à Bruxelles",
    description: "Différence, signes d'usure et prix d'entretien d'une corniche sur le bâti bruxellois ancien.",
    images: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"],
  },
}

export default function BlogCornicheGouttiereBruxelles() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const faqs = [
    {
      q: "Une corniche, est-ce la même chose qu'une gouttière ?",
      a: "Non. La gouttière est le canal qui recueille l'eau de pluie au bord du toit. La corniche est l'élément architectural en saillie qui couronne la façade — souvent en zinc, en bois ou en pierre — qui peut abriter un chéneau (une gouttière encaissée, intégrée dans la maçonnerie) plutôt qu'une gouttière pendante classique.",
    },
    {
      q: "Comment savoir si j'ai un chéneau plutôt qu'une gouttière pendante ?",
      a: "Si le canal d'évacuation est invisible depuis la rue et semble intégré dans la corniche ou la maçonnerie en haut de façade, il s'agit très probablement d'un chéneau. Les gouttières pendantes classiques, elles, sont visibles, fixées par des crochets sous le bord du toit.",
    },
    {
      q: "Le nettoyage d'une corniche coûte-t-il plus cher qu'une gouttière classique ?",
      a: "Cela dépend surtout de l'accessibilité. Si la corniche est accessible en même temps que la gouttière lors de la même intervention, le surcoût est souvent limité, voire inclus dans le forfait. Si un accès spécifique (échafaudage, nacelle) est nécessaire, ou si la sous-face en bois doit être inspectée, un devis distinct est établi.",
    },
    {
      q: "Une corniche en mauvais état est-elle dangereuse ?",
      a: "Oui, potentiellement. Une corniche dont la structure ou la fixation se dégrade peut se fissurer, se détacher partiellement ou laisser l'eau s'infiltrer dans la maçonnerie et les poutres en bois sous-jacentes. Un contrôle visuel régulier depuis le sol permet de repérer les signes avant-coureurs.",
    },
  ]

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/corniche-gouttiere-bruxelles-difference-prix`,
        headline: "Corniche ou gouttière à Bruxelles : différence, entretien et prix",
        description: "Différence entre corniche et gouttière, signes d'usure sur le bâti bruxellois ancien et prix d'un entretien de corniche.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-07-13",
        dateModified: "2026-07-13",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/corniche-gouttiere-bruxelles-difference-prix` },
        inLanguage: "fr-BE",
        keywords: "corniche gouttière Bruxelles, nettoyage corniche, chéneau, entretien corniche zinc",
        articleSection: "Conseils",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Corniche ou gouttière : la différence", item: `${DOMAIN}/blog/corniche-gouttiere-bruxelles-difference-prix` },
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
              { label: "Corniche ou gouttière : la différence" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4 flex-wrap">
            <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Conseils
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 7 min de lecture
            </span>
            <span className="bg-gray-500/30 text-gray-100 text-xs font-semibold px-3 py-1 rounded-full border border-gray-300/30">
              Brouillon — à valider
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Corniche ou Gouttière à Bruxelles : Différence, Entretien et Prix
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            « Corniche » et « gouttière » sont souvent confondues par les propriétaires bruxellois — à tort. Sur le bâti ancien de la capitale, la distinction change complètement la façon d&apos;entretenir et de réparer votre toiture.
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
                  Beaucoup de devis se limitent à « la gouttière » alors que le vrai point faible du bâti bruxellois ancien se trouve souvent dans la corniche elle-même — sa structure, son zinc et sa sous-face en bois.
                </p>
              </div>
            </div>

            <h2>Corniche, gouttière, chéneau : de quoi parle-t-on exactement ?</h2>
            <p>
              La <strong>gouttière</strong> est le canal qui recueille l&apos;eau de pluie au bord du toit et la dirige vers les descentes. C&apos;est l&apos;élément que l&apos;on associe spontanément à l&apos;entretien annuel.
            </p>
            <p>
              La <strong>corniche</strong> est différente : c&apos;est l&apos;élément architectural en saillie qui couronne le haut d&apos;une façade, entre le mur et le toit. À Bruxelles, sur les maisons de maître, les immeubles Art nouveau ou Belle Époque très présents à <Link href="/communes/ixelles">Ixelles</Link>, <Link href="/communes/saint-gilles">Saint-Gilles</Link> ou <Link href="/communes/schaerbeek">Schaerbeek</Link>, cette corniche est souvent construite en bois habillé de zinc, parfois en pierre moulurée. Beaucoup de ces corniches abritent en réalité un <strong>chéneau</strong> : une gouttière encaissée, intégrée dans la structure elle-même, invisible depuis la rue — par opposition à la gouttière pendante classique, suspendue sous le bord du toit par des crochets.
            </p>
            <p>
              Cette distinction n&apos;est pas qu&apos;un détail de vocabulaire : un chéneau logé dans une corniche se nettoie et se répare différemment d&apos;une gouttière pendante, et son état conditionne la solidité de toute la corniche.
            </p>

            <h2>Pourquoi les corniches bruxelloises se dégradent</h2>
            <p>
              Le parc immobilier bruxellois compte une proportion importante de bâtiments construits entre 1880 et 1930. Leurs corniches en bois-zinc ont largement dépassé leur durée de vie initiale dans bien des cas, et cumulent plusieurs facteurs de risque :
            </p>
            <ul>
              <li><strong>Zinc oxydé ou perforé</strong> : après plusieurs décennies, les jonctions et soudures du zinc de couverture se fragilisent, en particulier aux points bas où l&apos;eau stagne</li>
              <li><strong>Bois de sous-face pourri</strong> : une fois le zinc percé, l&apos;humidité atteint directement la structure en bois de la corniche, qui pourrit de l&apos;intérieur sans signe visible immédiat</li>
              <li><strong>Chéneau bouché invisible</strong> : contrairement à une gouttière pendante, un chéneau encaissé qui déborde n&apos;est pas toujours visible depuis la rue — le dégât se révèle souvent à l&apos;intérieur, en plafond du dernier étage</li>
              <li><strong>Mouvements de façade</strong> : tassements et dilatations thermiques fragilisent avec le temps les fixations et joints de la corniche</li>
            </ul>

            <h2>Les signes d&apos;alerte à repérer depuis le sol</h2>
            <div className="not-prose space-y-3 mb-6">
              {[
                { num: "1", titre: "Coulures verdâtres ou noires sous la corniche", desc: "Signe quasi certain d'un débordement répété du chéneau intégré, invisible autrement." },
                { num: "2", titre: "Zinc visiblement déformé, décollé ou percé", desc: "Un point de rouille ou une plaque qui se soulève annonce une infiltration à court terme." },
                { num: "3", titre: "Tache d'humidité en plafond du dernier étage", desc: "Le signe le plus fréquent d'un chéneau de corniche qui déborde ou fuit sans qu'on le voie de l'extérieur." },
                { num: "4", titre: "Corniche qui semble affaissée ou désolidarisée du mur", desc: "Indique une dégradation structurelle du bois sous-jacent — une inspection rapide s'impose." },
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

            <h2>Nettoyage, réparation : ce qui change par rapport à une gouttière classique</h2>
            <p>
              Le nettoyage d&apos;un chéneau encaissé dans une corniche demande souvent un accès différent de celui d&apos;une gouttière pendante — parfois par l&apos;intérieur des combles, parfois uniquement depuis l&apos;extérieur en hauteur. Le geste doit aussi être plus prudent : le zinc ancien se travaille sans outils abrasifs ni pression excessive, au risque de percer une tôle déjà fragilisée.
            </p>
            <p>
              Quand la sous-face en bois est touchée, on ne parle plus de simple entretien mais de <Link href="/services/reparation-gouttieres">réparation de gouttières et corniches</Link> : reprise de zinguerie, traitement ou remplacement partiel du bois, parfois en lien avec un <Link href="/blog/demoussage-toiture-bruxelles-quand-comment-prix">démoussage de toiture</Link> si des mousses accélèrent la rétention d&apos;humidité en toiture.
            </p>

            <h2>Combien coûte l&apos;entretien d&apos;une corniche à Bruxelles ?</h2>
            <p>
              Quand la corniche est accessible dans la continuité de la gouttière lors de la même intervention, son contrôle et son nettoyage sont généralement inclus dans le <Link href="/tarifs">forfait de nettoyage de gouttières</Link> (80 à 150 € pour une maison standard). En revanche, une intervention distincte devient nécessaire — et fait l&apos;objet d&apos;un devis sur mesure — dès que :
            </p>
            <ul>
              <li>Un accès spécifique est requis (échafaudage, nacelle, cour intérieure difficile d&apos;accès)</li>
              <li>La sous-face en bois doit être inspectée ou réparée</li>
              <li>Une reprise de zinguerie ou une soudure est nécessaire sur la corniche elle-même</li>
            </ul>
            <p>
              Dans tous les cas, le diagnostic sur place reste gratuit : c&apos;est la seule façon d&apos;évaluer sérieusement l&apos;état d&apos;une corniche ancienne avant de chiffrer une intervention.
            </p>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-green-800 mb-3 text-sm flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> À retenir</h3>
              <p className="text-green-700 text-sm">
                Une corniche qui semble « en bon état » depuis la rue peut cacher un chéneau bouché ou un bois en cours de dégradation. Sur du bâti bruxellois de plus de 60 ans, un contrôle régulier de la corniche est aussi utile qu&apos;un nettoyage de gouttière classique — et coûte souvent bien moins cher qu&apos;une reprise de zinguerie complète après coup.
              </p>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">Corniche ou gouttière douteuse ?</h3>
              <p className="text-green-100 text-sm mb-4">Diagnostic gratuit sur place, y compris pour les corniches en zinc du bâti ancien. Intervention dans toute la Région bruxelloise.</p>
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

      {/* FAQ */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  {faq.q}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Articles liés</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Zinc, PVC ou aluminium : quel matériau ?", href: "/blog/materiaux-gouttieres-zinc-pvc-aluminium" },
              { label: "Infiltrations d'eau sur façade", href: "/blog/infiltration-eau-facade-gouttieres" },
              { label: "Démoussage de toiture", href: "/blog/demoussage-toiture-bruxelles-quand-comment-prix" },
              { label: "Prix nettoyage gouttières", href: "/blog/prix-nettoyage-gouttieres-bruxelles" },
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
