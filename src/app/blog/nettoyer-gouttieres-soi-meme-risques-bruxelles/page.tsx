import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, Calendar, Clock, Tag, AlertTriangle, XCircle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

// BROUILLON — article en attente de validation client avant publication.
// Volontairement exclu de blogPosts (donc du listing /blog, de la home et du sitemap.xml)
// et marqué noindex/nofollow tant qu'il n'a pas été relu et validé.
export const metadata: Metadata = {
  title: "Nettoyer ses Gouttières Soi-Même à Bruxelles : Bonne Idée ?",
  description: "Nettoyer ses gouttières soi-même à Bruxelles : dans quels cas c'est raisonnable, les vrais risques (chutes, assurance) et quand appeler un professionnel.",
  keywords: ["nettoyer gouttières soi-même", "danger nettoyage gouttières", "sécurité échelle toiture", "DIY gouttières Bruxelles"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/nettoyer-gouttieres-soi-meme-risques-bruxelles" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "article",
    title: "Nettoyer ses Gouttières Soi-Même : Bonne Idée ou Risque Inutile ?",
    description: "Dans quels cas le nettoyage de gouttières en DIY reste raisonnable à Bruxelles, et pourquoi ce n'est pas toujours une bonne idée.",
    images: [{ url: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80", width: 1200, height: 630, alt: "Nettoyage de gouttières sur échelle à Bruxelles" }],
    publishedTime: "2026-08-10",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyer ses Gouttières Soi-Même : Bonne Idée ?",
    description: "Risques réels, cas où le DIY est raisonnable et ce que couvre (ou non) votre assurance.",
    images: ["https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80"],
  },
}

export default function BlogNettoyerSoiMemePage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/nettoyer-gouttieres-soi-meme-risques-bruxelles`,
        headline: "Nettoyer ses gouttières soi-même à Bruxelles : bonne idée ou risque inutile ?",
        description: "Nettoyer ses gouttières soi-même à Bruxelles : dans quels cas c'est raisonnable, les vrais risques et quand appeler un professionnel.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-08-10",
        dateModified: "2026-08-10",
        image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/nettoyer-gouttieres-soi-meme-risques-bruxelles` },
        inLanguage: "fr-BE",
        keywords: "nettoyer gouttières soi-même, danger nettoyage gouttières, sécurité échelle toiture",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Nettoyer ses gouttières soi-même", item: `${DOMAIN}/blog/nettoyer-gouttieres-soi-meme-risques-bruxelles` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Est-ce dangereux de nettoyer ses gouttières soi-même ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui, le travail en hauteur sur échelle est l'une des premières causes d'accidents domestiques graves. Le risque augmente fortement sur sol humide, en pente, ou à partir du premier étage. Ce n'est pas interdit, mais cela demande du matériel adapté et de la prudence." },
          },
          {
            "@type": "Question",
            name: "Mon assurance familiale couvre-t-elle une chute depuis mon échelle ?",
            acceptedAnswer: { "@type": "Answer", text: "Cela dépend de votre contrat d'assurance familiale ou accidents de la vie privée — beaucoup excluent ou limitent les indemnisations pour des chutes lors de travaux en hauteur effectués soi-même. Vérifiez les conditions exactes auprès de votre assureur avant d'intervenir vous-même sur votre toiture." },
          },
          {
            "@type": "Question",
            name: "Dans quels cas puis-je nettoyer mes gouttières moi-même sans risque excessif ?",
            acceptedAnswer: { "@type": "Answer", text: "Pour une maison de plain-pied avec des gouttières accessibles depuis une échelle stable sur sol plat et sec, un nettoyage ponctuel et léger reste raisonnable avec le bon équipement. Au-delà d'un étage, sur toiture en pente ou en cas de doute, mieux vaut faire appel à un professionnel assuré." },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Breadcrumb items={[
        { label: "Accueil", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Nettoyer ses gouttières soi-même" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Tag size={12} />Conseils
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Calendar size={12} />10 août 2026
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Clock size={12} />6 min de lecture
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Nettoyer ses gouttières soi-même à Bruxelles : bonne idée ou risque inutile ?
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Sortir l&apos;échelle un samedi matin pour vider ses gouttières semble anodin. C&apos;est pourtant l&apos;une des tâches d&apos;entretien domestique les plus accidentogènes. Voici ce qu&apos;il faut vraiment savoir avant de grimper — et dans quels cas mieux vaut appeler un professionnel.
          </p>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">

            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
              Un risque sous-estimé par la plupart des propriétaires
            </h2>
            <p>
              Nettoyer une gouttière semble être une tâche simple : monter sur une échelle, retirer les feuilles à la main, redescendre. Dans les faits, les chutes depuis une échelle figurent parmi les accidents domestiques les plus fréquents chez les particuliers qui entretiennent eux-mêmes leur toiture, en Belgique comme ailleurs. Le danger n&apos;est pas la hauteur en elle-même, mais la combinaison de plusieurs facteurs qui se retrouvent presque systématiquement lors d&apos;un nettoyage de gouttières : sol parfois détrempé ou en pente, gouttière glissante à cause des feuilles et de l&apos;humidité, déséquilibre en tendant le bras pour atteindre un point éloigné, et fatigue après plusieurs déplacements d&apos;échelle.
            </p>
            <p>
              À Bruxelles, où les maisons mitoyennes ont souvent des jardins arrière étroits ou un accès limité à l&apos;avant, positionner correctement une échelle est déjà un défi en soi. Beaucoup de propriétaires improvisent un appui sur une fenêtre, une gouttière elle-même ou un rebord instable — ce qui multiplie le risque de basculement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Dans quels cas le nettoyage soi-même reste raisonnable
            </h2>
            <p>
              Le DIY n&apos;est pas à bannir dans tous les cas. Il existe des situations où nettoyer ses gouttières soi-même reste un risque maîtrisable, à condition de respecter quelques règles simples.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-800 text-sm mb-3 flex items-center gap-2">
                  <CheckCircle size={16} /> DIY raisonnable si...
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Maison de plain-pied ou rez-de-chaussée surélevé simple</li>
                  <li>Sol stable, plat et sec sous l&apos;échelle</li>
                  <li>Gouttières facilement accessibles sans se pencher</li>
                  <li>Vous avez une échelle adaptée, en bon état</li>
                  <li>Quelqu&apos;un est présent pour stabiliser / prévenir en cas de chute</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-700 text-sm mb-3 flex items-center gap-2">
                  <XCircle size={16} /> Mieux vaut un professionnel si...
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Bâtiment R+1 ou plus (cas fréquent à Bruxelles)</li>
                  <li>Toiture en pente ou accès uniquement par la toiture</li>
                  <li>Gouttières en zinc ancien, fragiles ou endommagées</li>
                  <li>Descente pluviale partagée ou copropriété</li>
                  <li>Vous n&apos;avez jamais manipulé d&apos;échelle télescopique</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Le matériel minimum si vous décidez de le faire
            </h2>
            <p>
              Si votre situation entre dans le premier cas de figure, quelques équipements réduisent significativement le risque :
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Une échelle stabilisatrice avec pieds anti-dérapants et barre de stabilisation en haut",
                "Des gants adaptés — les débris de gouttière cachent parfois du verre ou des objets coupants",
                "Un seau accroché à l'échelle plutôt qu'un sac qui déséquilibre",
                "Des chaussures à semelle antidérapante, jamais de sandales ou pieds nus",
                "Un smartphone sur soi et idéalement une personne informée de l'intervention",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle size={18} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Évitez absolument le nettoyage haute pression fait maison sur des gouttières en zinc ancien — la pression peut décoller des joints ou déformer le métal, transformant un entretien préventif en réparation coûteuse.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Ce qu&apos;un œil non averti risque de manquer
            </h2>
            <p>
              Au-delà du risque physique, le DIY a une autre limite : un particulier repère rarement les signes avant-coureurs d&apos;un problème structurel. Un crochet légèrement desserré, un joint qui commence à se fendre, une pente d&apos;écoulement qui s&apos;est affaissée de quelques millimètres — ces détails sont invisibles pour un œil non exercé, mais ce sont précisément les indices qui permettent d&apos;anticiper une réparation avant qu&apos;elle ne devienne urgente et coûteuse. Un technicien effectue systématiquement ce diagnostic pendant le nettoyage, sans surcoût.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Assurance : ce qui se passe réellement en cas de chute
            </h2>
            <p>
              C&apos;est le point le plus souvent ignoré. Lorsqu&apos;un professionnel intervient chez vous, son assurance RC professionnelle couvre les dommages causés dans le cadre de son travail, y compris ses propres accidents. Si <strong>vous</strong> tombez de votre échelle en nettoyant vos propres gouttières, la couverture dépend entièrement de votre contrat d&apos;assurance familiale ou « accidents de la vie privée » — et de nombreux contrats excluent ou plafonnent fortement les indemnisations liées à des travaux en hauteur effectués par le propriétaire lui-même. Avant de grimper, il est utile de vérifier concrètement ce que couvre votre police d&apos;assurance dans ce scénario précis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              DIY vs professionnel : le vrai calcul
            </h2>
            <p>
              Sur le papier, nettoyer soi-même ses gouttières semble économiser 80 à 150€. Dans les faits, le calcul est plus nuancé : temps passé (souvent 2 à 3 heures pour un non-initié, contre 1h30 pour un professionnel équipé), usure ou achat de matériel (échelle stabilisatrice, gants, seau), absence de garantie sur le résultat, et surtout absence totale de couverture en cas d&apos;accident ou de dommage à la gouttière elle-même. Pour une intervention ponctuelle sur une maison basse, le DIY reste défendable. Pour un entretien récurrent sur une maison à étage, l&apos;écart de coût avec un professionnel s&apos;amenuise vite une fois le risque pris en compte.
            </p>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Questions fréquentes</h2>
            <div className="space-y-4 not-prose">
              {[
                {
                  q: "Est-ce dangereux de nettoyer ses gouttières soi-même ?",
                  a: "Oui, le travail en hauteur sur échelle est l'une des premières causes d'accidents domestiques graves. Le risque augmente fortement sur sol humide, en pente, ou à partir du premier étage.",
                },
                {
                  q: "Mon assurance familiale couvre-t-elle une chute depuis mon échelle ?",
                  a: "Cela dépend de votre contrat — beaucoup excluent ou limitent les indemnisations pour des chutes lors de travaux en hauteur effectués soi-même. Vérifiez vos conditions avant d'intervenir.",
                },
                {
                  q: "Dans quels cas puis-je nettoyer mes gouttières moi-même sans risque excessif ?",
                  a: "Pour une maison de plain-pied avec des gouttières facilement accessibles sur sol stable, un nettoyage ponctuel reste raisonnable avec le bon équipement. Au-delà, mieux vaut un professionnel assuré.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-8 not-prose">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Pas sûr de votre situation ?</p>
                  <p className="text-gray-600 text-sm">Si vous hésitez entre le faire vous-même ou appeler un professionnel, décrivez-nous votre maison (hauteur, accès, état des gouttières) : nous vous donnons un avis honnête, même si cela signifie vous confirmer que le DIY est possible chez vous.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">En résumé</h2>
            <p>
              Le nettoyage de gouttières en DIY n&apos;est pas interdit, mais il n&apos;est raisonnable que dans un nombre limité de cas : maison basse, accès facile, bon équipement, personne prévenue. Dès que la hauteur, la pente du toit ou l&apos;état des gouttières entrent en jeu, le coût d&apos;un professionnel assuré devient largement justifié — non seulement pour le résultat, mais pour la sécurité et la tranquillité d&apos;esprit.
            </p>
          </div>

          {/* CTA inline */}
          <div className="mt-10 bg-[#1A4731] rounded-2xl p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Laissez-nous grimper à votre place</h3>
                <p className="text-gray-300 text-sm">Devis gratuit · Intervention sous 48h · Techniciens RC Pro à Bruxelles</p>
              </div>
              <a
                href="tel:0451053370"
                className="flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl whitespace-nowrap transition-colors"
              >
                <Phone size={18} />
                0451 05 33 70
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Formulaire contact */}
      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Demander un devis</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Décrivez votre situation, on vous dit franchement si un passage professionnel est nécessaire. Devis gratuit sous 2h en heures ouvrables.
              </p>
              <div className="space-y-3">
                {[
                  "Nettoyage complet gouttières + descentes",
                  "Techniciens équipés et assurés RC Pro",
                  "Intervention sous 48h garantie",
                  "Devis 100% gratuit et sans engagement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#F97316]" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#1A4731] rounded-xl">
                <p className="text-white font-semibold mb-1 text-sm">Appel direct</p>
                <a href="tel:0451053370" className="flex items-center gap-2 text-[#F97316] font-bold text-lg hover:text-orange-400 transition-colors">
                  <Phone size={20} />0451 05 33 70
                </a>
                <p className="text-gray-400 text-xs mt-1">Lun–Ven 7h30–18h | Sam 8h–14h | Urgences 7j/7</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-gray-900 font-bold text-lg mb-5">Formulaire de devis</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Articles et pages liés</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Nettoyage de gouttières", href: "/services/nettoyage-gouttieres" },
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Gouttière qui déborde", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Tarifs nettoyage gouttières", href: "/tarifs" },
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
