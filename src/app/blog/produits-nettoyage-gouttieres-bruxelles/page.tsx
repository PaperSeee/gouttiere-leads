import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Tag, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Produits Nettoyage Gouttières Bruxelles : Lesquels Choisir et Éviter ?",
  description: "Guide complet sur les produits pour nettoyer vos gouttières à Bruxelles : démoussants, dégraissants, traitements anti-algues. Ce qui fonctionne vraiment et ce qui abîme vos gouttières.",
  keywords: ["produits nettoyage gouttières", "démoussant gouttière bruxelles", "nettoyer gouttières soi-même", "entretien gouttières belgique", "traitement anti-algues gouttière"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/produits-nettoyage-gouttieres-bruxelles" },
  openGraph: {
    type: "article",
    title: "Produits Nettoyage Gouttières à Bruxelles : Guide Complet 2026",
    description: "Quels produits utiliser pour nettoyer vos gouttières ? Comparatif complet et conseils de professionnels bruxellois.",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Produits nettoyage gouttières Bruxelles" }],
    publishedTime: "2026-06-05",
  },
  twitter: {
    card: "summary_large_image",
    title: "Produits Nettoyage Gouttières Bruxelles 2026",
    description: "Démoussants, dégraissants, anti-algues — le guide complet pour choisir les bons produits.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
}

export default function BlogProduitsNettoyageGouttieresBruxellesPage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"
  const SLUG = "produits-nettoyage-gouttieres-bruxelles"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/${SLUG}`,
        headline: "Produits Nettoyage Gouttières Bruxelles : Lesquels Choisir et Éviter ?",
        description: "Guide complet sur les produits pour nettoyer vos gouttières à Bruxelles : démoussants, dégraissants, traitements anti-algues.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-05",
        dateModified: "2026-06-05",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/${SLUG}` },
        inLanguage: "fr-BE",
        keywords: "produits nettoyage gouttières, démoussant gouttière bruxelles, traitement anti-algues gouttière",
        articleSection: "Conseils",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Produits nettoyage gouttières", item: `${DOMAIN}/blog/${SLUG}` },
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
              { label: "Produits nettoyage gouttières" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-[#2D6A4F] text-green-100 text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Conseils
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 7 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Produits Nettoyage Gouttières à Bruxelles : Lesquels Choisir et Éviter ?
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Démoussants, anti-algues, dégraissants — le marché regorge de produits pour gouttières. Ce guide vous explique ce qui fonctionne vraiment, ce qui est inutile, et ce qui peut endommager vos gouttières bruxelloises.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <h2>Pourquoi le choix du produit est important pour vos gouttières</h2>
            <p>
              À Bruxelles, le climat humide favorise le développement de mousses, lichens et algues vertes dans les gouttières. En quelques mois, une gouttière non traitée peut se boucher partiellement et provoquer des débordements sur les façades. Mais tous les produits de nettoyage ne se valent pas — et certains peuvent attaquer le zinc ou abîmer les joints de vos gouttières en PVC ou aluminium.
            </p>
            <p>
              Avant de choisir un produit, identifiez le matériau de vos gouttières (zinc, aluminium, PVC, cuivre) et le type de dépôt à traiter (feuilles, mousse, dépôts calcaires, algues noires).
            </p>

            <h2>Les 4 types de produits pour gouttières</h2>

            <h3>1. Les démoussants (anti-mousse)</h3>
            <p>
              Les démoussants sont les produits les plus utilisés pour les gouttières bruxelloises. Ils éliminent les mousses et lichens qui prolifèrent sous notre climat atlantique. Les formulations à base de <strong>benzalkonium chloride</strong> ou d&apos;hypochlorite de sodium sont les plus efficaces.
            </p>
            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-4 my-4">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Produits recommandés</h4>
              <ul className="space-y-1 text-sm text-green-700">
                <li>• <strong>Algimousse Pro</strong> — efficace, respectueux du zinc, disponible en GSB belges</li>
                <li>• <strong>Bayer Garden Démoussant</strong> — solution concentrée, diluer à 5% pour gouttières</li>
                <li>• <strong>Rubson Traitement Anti-mousse</strong> — formule liquide prête à l&apos;emploi</li>
              </ul>
              <p className="text-xs text-green-600 mt-2">Temps d&apos;action : 24 à 72h. Appliquer par temps sec, température entre 5°C et 25°C.</p>
            </div>

            <h3>2. Les nettoyants dégraissants</h3>
            <p>
              Les dépôts noirs gras sur vos gouttières sont souvent dus à des particules de pollution (Bruxelles est une ville dense) combinées à l&apos;humidité. Un dégraissant alcalin dilué dans l&apos;eau (1%) permet de les dissoudre sans frotter excessivement.
            </p>
            <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 my-4">
              <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2"><AlertTriangle size={16} className="text-amber-500" /> Précaution</h4>
              <p className="text-sm text-amber-700">
                N&apos;utilisez jamais de dégraissant pur non dilué sur du zinc — cela peut attaquer la couche protectrice et accélérer la corrosion. Toujours tester sur une petite zone avant application complète.
              </p>
            </div>

            <h3>3. Les traitements anti-calcaire</h3>
            <p>
              En Région bruxelloise, l&apos;eau est modérément calcaire (entre 20 et 30°F). Les dépôts blancs dans le fond des gouttières et sur les descentes d&apos;eaux pluviales sont fréquents, notamment près des sorties de toiture avec ardoise naturelle.
            </p>
            <p>
              Un traitement à l&apos;acide citrique dilué (1 cuillère à soupe par litre d&apos;eau) dissout efficacement le calcaire sans risque pour les matériaux. C&apos;est une alternative naturelle aux produits détartrants chimiques.
            </p>
            <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-4 my-4">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2"><AlertTriangle size={16} className="text-red-500" /> À éviter absolument</h4>
              <ul className="space-y-1 text-sm text-red-700">
                <li>• Acide chlorhydrique (HCl) — corrosif pour le zinc et dangereux</li>
                <li>• Vinaigre blanc pur — trop acide, attaque la patine du zinc</li>
                <li>• Javel concentrée non diluée — peut blanchir les gouttières colorées</li>
              </ul>
            </div>

            <h3>4. Les traitements préventifs longue durée</h3>
            <p>
              Après un nettoyage en profondeur, un traitement préventif repousse pendant 2 à 3 ans la repousse des mousses et algues. Ces produits forment un film hydrophobe sur la surface de la gouttière.
            </p>
            <p>
              Les formulations à base de <strong>silicone en phase aqueuse</strong> sont les plus adaptées — elles s&apos;appliquent au pinceau ou au rouleau et sont compatibles avec le zinc, l&apos;aluminium et le PVC.
            </p>

            <h2>Ce que les professionnels utilisent à Bruxelles</h2>
            <p>
              Dans notre équipe, nous utilisons systématiquement une approche en deux temps pour les gouttières bruxelloises :
            </p>
            <ol>
              <li><strong>Nettoyage mécanique</strong> — évacuation manuelle des feuilles et débris accumulés. Aucun produit chimique n&apos;est efficace si la gouttière est physiquement bouchée.</li>
              <li><strong>Traitement anti-mousse dilué</strong> — application d&apos;un démoussant à 3% laissé agir 48h, puis rinçage au jet haute pression (basse pression pour le zinc).</li>
            </ol>
            <p>
              Cette combinaison prend entre 1h et 3h selon la superficie et l&apos;état des gouttières. Le résultat est visible immédiatement et dure 18 à 24 mois selon l&apos;exposition (gouttières sous des arbres se rebouchent plus vite).
            </p>

            <h2>Puis-je nettoyer mes gouttières moi-même avec ces produits ?</h2>
            <p>
              Techniquement, oui — si vous avez le bon équipement (échelle sécurisée, équipement de protection individuelle) et si votre maison est de plain-pied ou deux niveaux maximum. Au-delà, l&apos;intervention en hauteur devient dangereuse sans équipement professionnel.
            </p>
            <p>
              Les risques d&apos;une intervention DIY mal sécurisée à Bruxelles : chute (première cause d&apos;accidents domestiques graves en Belgique), endommagement du zinc avec un jet haute pression mal réglé, ou traitement inefficace faute d&apos;accès complet à toute la longueur des gouttières.
            </p>
            <p>
              Si vous avez un doute sur l&apos;état de vos gouttières ou si votre maison dépasse le rez+1, une intervention professionnelle est plus sûre et souvent plus économique sur le long terme.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white sticky top-6">
              <h3 className="font-bold text-lg mb-2">Nettoyage par un professionnel</h3>
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
                  <Link href="/blog/materiaux-gouttieres-zinc-pvc-aluminium" className="text-sm text-[#1A4731] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Zinc, PVC ou Aluminium ?
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Besoin d&apos;un nettoyage professionnel à Bruxelles ?</h2>
          <p className="text-gray-600 mb-6">Devis gratuit sous 24h, intervention garantie sous 48h dans toute la Région bruxelloise.</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
