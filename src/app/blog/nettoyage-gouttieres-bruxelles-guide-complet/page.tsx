import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Tag, Phone } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Bruxelles : Guide Complet 2026 — Prix, Fréquence & Conseils",
  description: "Tout savoir sur le nettoyage de gouttières à Bruxelles : fréquence recommandée, prix du marché, risques d'une gouttière bouchée, et comment trouver un professionnel fiable.",
  keywords: ["nettoyage gouttières bruxelles", "nettoyer gouttières bruxelles", "prix nettoyage gouttières", "gouttières bouchées bruxelles", "entretien gouttières belgique"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/nettoyage-gouttieres-bruxelles-guide-complet" },
  openGraph: {
    type: "article",
    title: "Nettoyage Gouttières Bruxelles 2026 — Guide Complet",
    description: "Prix, fréquence, risques et conseils pour le nettoyage de gouttières à Bruxelles. Tout ce qu'il faut savoir.",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Nettoyage gouttières Bruxelles" }],
    publishedTime: "2026-06-07",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Gouttières Bruxelles 2026 — Guide Complet",
    description: "Prix, fréquence recommandée, risques d'une gouttière bouchée — tout ce qu'il faut savoir.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
}

export default function BlogNettoyageGouttieresBruxellesPage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"
  const SLUG = "nettoyage-gouttieres-bruxelles-guide-complet"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/${SLUG}`,
        headline: "Nettoyage Gouttières Bruxelles : Guide Complet 2026",
        description: "Guide complet sur le nettoyage de gouttières à Bruxelles : fréquence, prix, risques et comment trouver un professionnel fiable.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-07",
        dateModified: "2026-06-07",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/${SLUG}` },
        inLanguage: "fr-BE",
        keywords: "nettoyage gouttières bruxelles, entretien gouttières, gouttière bouchée, prix nettoyage gouttières",
        articleSection: "Entretien",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Nettoyage gouttières Bruxelles", item: `${DOMAIN}/blog/${SLUG}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Combien coûte le nettoyage de gouttières à Bruxelles ?",
            acceptedAnswer: { "@type": "Answer", text: "Le nettoyage de gouttières à Bruxelles coûte entre 150 et 350 € pour une maison individuelle standard, selon la longueur des gouttières et l'accessibilité du toit." },
          },
          {
            "@type": "Question",
            name: "À quelle fréquence faut-il nettoyer ses gouttières à Bruxelles ?",
            acceptedAnswer: { "@type": "Answer", text: "À Bruxelles, la fréquence recommandée est de 2 fois par an : une fois en automne (après la chute des feuilles) et une fois au printemps. Pour les maisons entourées d'arbres, 3 nettoyages par an peuvent être nécessaires." },
          },
          {
            "@type": "Question",
            name: "Que se passe-t-il si on ne nettoie pas ses gouttières ?",
            acceptedAnswer: { "@type": "Answer", text: "Des gouttières bouchées provoquent des débordements d'eau sur la façade, des infiltrations dans les murs et les fondations, la formation de mousse sur le toit, et à terme des dégâts structurels coûteux." },
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
              { label: "Nettoyage gouttières Bruxelles" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-[#2D6A4F] text-green-100 text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Entretien
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 8 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Nettoyage Gouttières à Bruxelles : Guide Complet 2026
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Fréquence, prix, risques d&apos;une gouttière bouchée et comment trouver un professionnel fiable à Bruxelles — tout ce qu&apos;il faut savoir sur l&apos;entretien de vos gouttières en 2026.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <h2>Pourquoi le nettoyage des gouttières est indispensable à Bruxelles</h2>
            <p>
              Bruxelles reçoit en moyenne 800 mm de pluie par an — nettement plus que Paris ou Barcelone. Ce climat humide, combiné aux nombreux arbres qui bordent les avenues bruxelloises (la Capitale est l&apos;une des villes les plus arborées d&apos;Europe), crée des conditions idéales pour l&apos;accumulation de feuilles, de mousse et de dépôts dans les gouttières.
            </p>
            <p>
              Une gouttière propre achemine correctement les eaux de pluie depuis votre toit vers les descentes d&apos;évacuation. Une gouttière bouchée, c&apos;est de l&apos;eau qui déborde, qui ruisselle sur la façade, et qui, à terme, s&apos;infiltre dans les murs, les fondations et les caves.
            </p>

            <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 my-6">
              <h3 className="font-bold text-amber-800 mb-2">⚠️ Les conséquences d&apos;une gouttière négligée</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li>• Façade tachée et dégradée par les débordements répétés</li>
                <li>• Infiltrations d&apos;eau dans les murs ou la charpente</li>
                <li>• Développement de mousse sur le toit (accélère la dégradation des tuiles)</li>
                <li>• Fondations fragilisées par l&apos;eau qui stagne en pied de mur</li>
                <li>• Risque de décrochage des gouttières sous le poids des dépôts humides</li>
              </ul>
              <p className="text-xs text-amber-600 mt-3">
                Le coût d&apos;une réparation de façade ou de fondations commence à 2.000 €. Le nettoyage préventif est 10× moins cher.
              </p>
            </div>

            <h2>À quelle fréquence nettoyer ses gouttières à Bruxelles ?</h2>
            <p>
              La fréquence recommandée dépend principalement de l&apos;environnement de votre maison :
            </p>

            <h3>Maison standard (peu d&apos;arbres proches) : 2× par an</h3>
            <p>
              <strong>Nettoyage d&apos;automne (octobre-novembre) :</strong> après la chute des feuilles, c&apos;est le nettoyage le plus important. Les gouttières bruxelloises accumulent des volumes importants de feuilles en quelques semaines. Un nettoyage avant les pluies hivernales intenses évite les débordements pendant la saison froide.
            </p>
            <p>
              <strong>Nettoyage de printemps (mars-avril) :</strong> les mousses et débris hivernaux qui se sont accumulés depuis l&apos;automne sont éliminés avant les pluies printanières.
            </p>

            <h3>Maison entourée d&apos;arbres ou à risque : 3× par an</h3>
            <p>
              Si votre maison est entourée de grands arbres (tilleuls, marronniers, peupliers) ou si vos gouttières se bouchent rapidement, un troisième nettoyage en été (juillet) est recommandé. Certains arbres produisent des graines, des fleurs et des petites branches en continu.
            </p>

            <h3>Appartement en copropriété</h3>
            <p>
              L&apos;entretien des gouttières est généralement à la charge de la copropriété et doit être prévu dans le plan d&apos;entretien du bâtiment. Si vous êtes propriétaire, assurez-vous que cela figure au budget de l&apos;assemblée générale.
            </p>

            <h2>Prix du nettoyage de gouttières à Bruxelles en 2026</h2>
            <p>
              Les tarifs pratiqués par les professionnels sérieux du nettoyage de gouttières à Bruxelles varient selon plusieurs facteurs :
            </p>

            <h3>Facteurs qui influencent le prix</h3>
            <ul>
              <li><strong>La longueur de gouttière à nettoyer</strong> : une maison 2 façades a environ 15-20 mètres de gouttières, une 4 façades peut en avoir 40-60 mètres.</li>
              <li><strong>La hauteur du toit et l&apos;accessibilité</strong> : un rez+1 est plus simple à traiter qu&apos;un rez+3 ou un immeuble de rapport.</li>
              <li><strong>Le degré d&apos;encrassement</strong> : si les gouttières n&apos;ont pas été nettoyées depuis 3 ans, l&apos;intervention est plus longue.</li>
              <li><strong>Le type de service</strong> : nettoyage seul, ou nettoyage + traitement anti-mousse, ou nettoyage + inspection de l&apos;état des gouttières.</li>
            </ul>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-4 my-6">
              <h3 className="font-bold text-green-800 mb-3">💰 Tarifs indicatifs — Bruxelles 2026</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span className="text-green-700">Maison 2 façades (15-20m linéaires)</span>
                  <span className="font-bold text-green-900">150 à 220 €</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span className="text-green-700">Maison 3-4 façades (30-50m linéaires)</span>
                  <span className="font-bold text-green-900">220 à 350 €</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                  <span className="text-green-700">Immeuble de rapport (60-100m linéaires)</span>
                  <span className="font-bold text-green-900">350 à 600 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Traitement anti-mousse inclus</span>
                  <span className="font-bold text-green-900">+50 à 80 €</span>
                </div>
              </div>
              <p className="text-xs text-green-600 mt-3">Prix TVA 21% incluse. Déplacement inclus dans la zone de Bruxelles-19 communes.</p>
            </div>

            <h2>Ce qui est inclus dans un nettoyage professionnel de gouttières</h2>
            <p>
              Un nettoyage professionnel sérieux comprend généralement :
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              {[
                { title: "Retrait des dépôts solides", desc: "Feuilles, branches, débris, nids d'oiseaux — tout ce qui obstrue le fond de la gouttière est retiré à la main ou au souffleur." },
                { title: "Rinçage à pression", desc: "Un nettoyage au jet d'eau élimine les résidus fins et vérifie l'écoulement vers la descente." },
                { title: "Vérification des descentes", desc: "Les tubes de descente sont vérifiés et débouchés si nécessaire." },
                { title: "Rapport d'état visuel", desc: "Le professionnel signale les gouttières déformées, les joints défaillants ou les fixations lâches qui nécessitent une intervention." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Peut-on nettoyer ses gouttières soi-même à Bruxelles ?</h2>
            <p>
              Techniquement, oui — si votre maison n&apos;a qu&apos;un niveau et que votre toit est facilement accessible depuis une échelle stable. Mais à Bruxelles, la plupart des maisons de rangée ont des toits relativement hauts et des façades étroites qui compliquent l&apos;accès en sécurité.
            </p>
            <p>
              <strong>Les risques du nettoyage en autonomie :</strong>
            </p>
            <ul>
              <li>Chute d&apos;échelle (principale cause d&apos;accident domestique grave en Belgique)</li>
              <li>Endommagement des gouttières en zinc si on marche dessus</li>
              <li>Nettoyage incomplet qui laisse des bouchons dans les descentes</li>
              <li>Manque de diagnostic sur l&apos;état général des gouttières</li>
            </ul>
            <p>
              Pour un immeuble de 2 étages ou plus, faites <strong>toujours</strong> appel à un professionnel équipé d&apos;une nacelle ou de l&apos;équipement d&apos;accès approprié.
            </p>

            <h2>Communes de Bruxelles couvertes par notre service</h2>
            <p>
              Notre équipe intervient dans toutes les communes de Bruxelles-Capitale pour le nettoyage de gouttières :
            </p>
            <p className="text-sm text-gray-600">
              Anderlecht · Auderghem · Berchem-Sainte-Agathe · Bruxelles-Ville · Etterbeek · Evere · Forest · Ganshoren · Ixelles · Jette · Koekelberg · Molenbeek-Saint-Jean · Saint-Gilles · Saint-Josse-ten-Noode · Schaerbeek · Uccle · Watermael-Boitsfort · Woluwe-Saint-Lambert · Woluwe-Saint-Pierre
            </p>
            <p>
              Nous intervenons également dans la périphérie proche : Rhode-Saint-Genèse, Uccle, Linkebeek, Beersel, Grimbergen, Meise, Kraainem.
            </p>

            <h2>Comment obtenir un devis nettoyage gouttières à Bruxelles ?</h2>
            <p>
              Remplissez notre formulaire de contact ci-dessous avec votre adresse, le nombre de façades et la hauteur approximative de votre maison. Nous vous rappelons sous 24h avec un devis précis et sans engagement.
            </p>
            <p>
              Vous pouvez aussi nous appeler directement — nous donnons toujours un tarif indicatif par téléphone avant de nous déplacer.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* CTA */}
            <div className="bg-[#1A4731] rounded-2xl p-5 text-white">
              <p className="text-xs font-bold text-green-300 uppercase tracking-widest mb-3">Devis gratuit</p>
              <p className="font-bold text-lg mb-1">Nettoyage de gouttières à Bruxelles</p>
              <p className="text-green-200 text-sm mb-4">Réponse sous 24h, tarif transparent, intervention dans les 7 jours.</p>
              <a href="tel:+32451053370" className="flex items-center gap-2 bg-white text-[#1A4731] font-bold rounded-xl px-4 py-2.5 text-sm hover:bg-green-50 transition-colors">
                <Phone size={14} /> Appeler maintenant
              </a>
            </div>

            {/* Related articles */}
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Articles liés</p>
              <div className="space-y-3">
                {[
                  { href: "/blog/prix-nettoyage-gouttieres-bruxelles", label: "Prix nettoyage gouttières Bruxelles 2026" },
                  { href: "/blog/entretien-gouttieres-quand-faire", label: "Quand faire entretenir ses gouttières ?" },
                  { href: "/blog/gouttiere-qui-deborde-causes-solutions", label: "Gouttière qui déborde : causes et solutions" },
                  { href: "/blog/preparer-gouttieres-automne-bruxelles", label: "Préparer ses gouttières pour l'automne" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-start gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors group">
                    <ArrowRight size={14} className="mt-0.5 flex-shrink-0 text-green-500 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ quick */}
            <div className="border border-gray-200 rounded-2xl p-5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Questions fréquentes</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm text-gray-800">Combien ça coûte ?</p>
                  <p className="text-sm text-gray-600 mt-1">150 à 350 € selon la taille et le nombre de façades.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">Quelle fréquence ?</p>
                  <p className="text-sm text-gray-600 mt-1">2 fois par an (automne + printemps) pour la plupart des maisons bruxelloises.</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">Couvrez-vous toute la Belgique ?</p>
                  <p className="text-sm text-gray-600 mt-1">Nous couvrons les 19 communes de Bruxelles-Capitale et la périphérie proche.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Demander un devis gratuit</h2>
          <p className="text-gray-500 text-center mb-8">Réponse sous 24h · Tarif transparent · Sans engagement</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
