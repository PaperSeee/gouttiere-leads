import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Tag, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Démoussage de Toiture à Bruxelles : Quand, Comment, Prix",
  description: "Mousses et lichens sur le toit ? Quand faire un démoussage à Bruxelles, méthodes professionnelles, prix 2026 et lien avec vos gouttières.",
  keywords: ["démoussage toiture bruxelles", "nettoyage toiture bruxelles", "prix démoussage toiture", "traitement anti-mousse toiture", "démoussage tuiles bruxelles"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/demoussage-toiture-bruxelles-quand-comment-prix" },
  openGraph: {
    type: "article",
    title: "Démoussage de Toiture à Bruxelles : Guide Complet 2026",
    description: "Quand, comment et à quel prix faire démousser sa toiture à Bruxelles. Méthodes, tarifs et lien avec l'entretien des gouttières.",
    images: [{ url: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80", width: 1200, height: 630, alt: "Démoussage de toiture à Bruxelles" }],
    publishedTime: "2026-06-09",
  },
  twitter: {
    card: "summary_large_image",
    title: "Démoussage Toiture Bruxelles 2026",
    description: "Quand, comment et à quel prix démousser votre toiture à Bruxelles.",
    images: ["https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80"],
  },
}

export default function BlogDemoussageToitureBruxellesPage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"
  const SLUG = "demoussage-toiture-bruxelles-quand-comment-prix"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/${SLUG}`,
        headline: "Démoussage de Toiture à Bruxelles : Quand, Comment et à Quel Prix en 2026",
        description: "Mousses, lichens et algues sur votre toit ? Quand faire un démoussage à Bruxelles, les méthodes professionnelles, les prix 2026 et le lien direct avec vos gouttières.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-09",
        dateModified: "2026-06-09",
        image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/${SLUG}` },
        inLanguage: "fr-BE",
        keywords: "démoussage toiture bruxelles, nettoyage toiture, traitement anti-mousse, prix démoussage",
        articleSection: "Entretien",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Démoussage de toiture", item: `${DOMAIN}/blog/${SLUG}` },
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
              { label: "Démoussage de toiture" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-[#2D6A4F] text-green-100 text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Entretien
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 7 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Démoussage de Toiture à Bruxelles : Quand, Comment et à Quel Prix
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Le climat humide bruxellois fait proliférer mousses, lichens et algues sur les toitures. Au-delà de l&apos;aspect, ces végétaux abîment vos tuiles et finissent par boucher vos gouttières. Voici tout ce qu&apos;il faut savoir pour intervenir au bon moment et au bon prix.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <h2>Pourquoi les toitures bruxelloises se couvrent de mousse</h2>
            <p>
              Bruxelles connaît un climat océanique tempéré : pluies fréquentes, humidité élevée et faible ensoleillement une bonne partie de l&apos;année. Ce sont des conditions idéales pour le développement des mousses, lichens et algues, en particulier sur les <strong>versants de toiture orientés au nord</strong> et sur les zones ombragées par des arbres voisins.
            </p>
            <p>
              Une toiture envahie n&apos;est pas qu&apos;un problème esthétique. Les mousses retiennent l&apos;humidité contre les tuiles, accélèrent leur dégradation par cycles de gel/dégel, et — point souvent négligé — les fragments de mousse arrachés par la pluie viennent <strong>s&apos;accumuler dans vos gouttières</strong> et les boucher. Un toit non entretenu est l&apos;une des premières causes de gouttières obstruées à Bruxelles.
            </p>

            <h2>Quand faut-il faire un démoussage à Bruxelles ?</h2>
            <p>
              Il n&apos;existe pas de fréquence universelle : tout dépend de l&apos;exposition de votre toit, du matériau des tuiles et de la présence d&apos;arbres. En règle générale, à Bruxelles :
            </p>
            <ul>
              <li><strong>Inspection visuelle :</strong> une à deux fois par an, idéalement au printemps et à l&apos;automne.</li>
              <li><strong>Démoussage complet :</strong> tous les 3 à 5 ans pour une toiture standard, plus souvent (tous les 2-3 ans) si le toit est ombragé ou exposé au nord.</li>
              <li><strong>Saison idéale :</strong> le printemps (avril-juin) ou le début d&apos;automne, par temps sec, avec des températures comprises entre 5°C et 25°C.</li>
            </ul>
            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-4 my-4">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Signes qu&apos;il est temps d&apos;agir</h4>
              <ul className="space-y-1 text-sm text-green-700">
                <li>• Tapis de mousse vert ou noir visible sur les tuiles</li>
                <li>• Lichens jaunes/gris incrustés sur les versants</li>
                <li>• Gouttières qui se rebouchent rapidement après nettoyage</li>
                <li>• Tuiles qui se fissurent ou se déplacent</li>
              </ul>
            </div>

            <h2>Les méthodes de démoussage professionnel</h2>

            <h3>1. Le nettoyage mécanique (brossage / basse pression)</h3>
            <p>
              On retire d&apos;abord la mousse manuellement à la brosse ou au nettoyeur basse pression. La haute pression est <strong>déconseillée</strong> sur la plupart des tuiles bruxelloises (terre cuite, béton) car elle décape la couche de surface et favorise une repousse plus rapide. Cette étape ne suffit jamais seule : elle prépare le terrain pour le traitement.
            </p>

            <h3>2. Le traitement anti-mousse</h3>
            <p>
              Après le nettoyage, on applique un produit anti-mousse (à base de benzalkonium chloride en général) qui détruit les spores et ralentit la repousse. Le produit agit en 24 à 72h ; certaines mousses se détachent ensuite naturellement avec la pluie sur plusieurs semaines.
            </p>

            <h3>3. Le traitement hydrofuge (optionnel)</h3>
            <p>
              Pour prolonger le résultat, un hydrofuge crée un film protecteur qui empêche l&apos;eau de pénétrer la tuile et limite l&apos;accroche des mousses. Il se pose après séchage complet et offre une protection de 5 à 10 ans selon le produit.
            </p>
            <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 my-4">
              <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2"><AlertTriangle size={16} className="text-amber-500" /> Attention aux arnaques</h4>
              <p className="text-sm text-amber-700">
                Méfiez-vous des démarchages à domicile proposant un démoussage « immédiat » à prix cassé puis facturant des « réparations urgentes » imaginaires. Demandez toujours un devis écrit détaillé et vérifiez que l&apos;entreprise est bien enregistrée à la BCE.
              </p>
            </div>

            <h2>Prix du démoussage de toiture à Bruxelles en 2026</h2>
            <p>
              Les tarifs varient selon la surface, l&apos;accessibilité, la pente et les prestations incluses. Voici les fourchettes constatées sur le marché bruxellois :
            </p>
            <ul>
              <li><strong>Nettoyage + démoussage simple :</strong> 8 à 15 €/m²</li>
              <li><strong>Nettoyage + traitement anti-mousse :</strong> 12 à 20 €/m²</li>
              <li><strong>Nettoyage + anti-mousse + hydrofuge :</strong> 20 à 35 €/m²</li>
            </ul>
            <p>
              Pour une maison bruxelloise type (toiture de 60 à 90 m²), comptez généralement entre <strong>600 € et 1 500 €</strong> pour un traitement complet. L&apos;accès difficile (maison de ville étroite, toiture pentue) et la nécessité d&apos;un échafaudage peuvent faire grimper la facture.
            </p>

            <h2>Démoussage et gouttières : un entretien indissociable</h2>
            <p>
              C&apos;est le point le plus important pour préserver votre maison : un démoussage sans nettoyage des gouttières est inutile. Tous les résidus décrochés du toit finissent dans les gouttières. C&apos;est pourquoi nous recommandons toujours de <strong>coupler le démoussage avec un nettoyage de gouttières</strong>, réalisé juste après.
            </p>
            <p>
              Si vous avez fait démousser votre toit récemment, vérifiez vos gouttières dans les semaines qui suivent : elles ont presque certainement accumulé des débris. Pour aller plus loin, consultez notre <Link href="/blog/entretien-gouttieres-quand-faire">calendrier d&apos;entretien des gouttières</Link> et notre guide sur les <Link href="/blog/gouttiere-qui-deborde-causes-solutions">gouttières qui débordent</Link>.
            </p>

            <h2>Faut-il faire le démoussage soi-même ?</h2>
            <p>
              Le démoussage de toiture implique un travail en hauteur sur une surface glissante — c&apos;est l&apos;une des interventions domestiques les plus dangereuses. À moins d&apos;être correctement équipé et formé, il est fortement déconseillé de monter sur son toit. Une intervention professionnelle inclut l&apos;assurance, le matériel de sécurité et la garantie d&apos;un travail durable.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white sticky top-6">
              <h3 className="font-bold text-lg mb-2">Démoussage + gouttières</h3>
              <p className="text-green-200 text-sm mb-4">
                Nos équipes interviennent dans toute la Région bruxelloise sous 48h. Devis gratuit, sans engagement.
              </p>
              <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-white text-[#1A4731] font-bold py-3 px-4 rounded-xl text-sm hover:bg-green-50 transition mb-3">
                0451 05 33 70
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold py-3 px-4 rounded-xl text-sm hover:bg-white/10 transition">
                Devis gratuit <ArrowRight size={14} />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Articles connexes</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/entretien-gouttieres-quand-faire" className="text-sm text-[#1A4731] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Quand nettoyer ses gouttières ?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/produits-nettoyage-gouttieres-bruxelles" className="text-sm text-[#1A4731] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Quels produits de nettoyage ?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/gouttiere-qui-deborde-causes-solutions" className="text-sm text-[#1A4731] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Gouttière qui déborde : causes
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Besoin d&apos;un démoussage à Bruxelles ?</h2>
          <p className="text-gray-600 mb-6">Devis gratuit sous 24h, intervention garantie sous 48h dans toute la Région bruxelloise.</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
