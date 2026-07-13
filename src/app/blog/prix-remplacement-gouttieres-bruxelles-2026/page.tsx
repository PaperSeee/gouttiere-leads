import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Prix Remplacement Gouttières Bruxelles 2026 : Tarifs Complets",
  description: "Prix du remplacement de gouttières à Bruxelles en 2026 : tarifs par matériau (zinc, aluminium, PVC), longueur et type de maison.",
  keywords: ["prix remplacement gouttières bruxelles", "coût changement gouttière", "tarif pose gouttière belgique", "remplacement gouttière zinc prix", "devis gouttière bruxelles"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/prix-remplacement-gouttieres-bruxelles-2026" },
  openGraph: {
    type: "article",
    title: "Prix Remplacement Gouttières Bruxelles 2026 — Tarifs Détaillés",
    description: "Tarifs réels par matériau et type de maison pour le remplacement de gouttières à Bruxelles en 2026.",
    images: [{ url: "https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80", width: 1200, height: 630, alt: "Remplacement gouttières Bruxelles prix" }],
    publishedTime: "2026-06-05",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prix Remplacement Gouttières Bruxelles 2026",
    description: "Tarifs détaillés pour le remplacement de gouttières à Bruxelles selon le matériau.",
    images: ["https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80"],
  },
}

export default function BlogPrixRemplacementGouttieresBruxelles2026Page() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"
  const SLUG = "prix-remplacement-gouttieres-bruxelles-2026"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/${SLUG}`,
        headline: "Prix Remplacement Gouttières Bruxelles 2026 : Tarifs Complets",
        description: "Combien coûte le remplacement de vos gouttières à Bruxelles en 2026 ? Tarifs détaillés par matériau, longueur et type de maison.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-05",
        dateModified: "2026-06-05",
        image: "https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/${SLUG}` },
        inLanguage: "fr-BE",
        keywords: "prix remplacement gouttières bruxelles, coût changement gouttière, tarif pose gouttière belgique",
        articleSection: "Tarifs",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Prix remplacement gouttières 2026", item: `${DOMAIN}/blog/${SLUG}` },
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
              { label: "Prix remplacement gouttières 2026" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-[#2D6A4F] text-green-100 text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Tarifs
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 8 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Prix Remplacement Gouttières Bruxelles 2026 : Tarifs Complets par Matériau
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Zinc, aluminium, PVC — le coût de remplacement varie fortement selon le matériau et la configuration de votre maison. Voici les tarifs réels pratiqués à Bruxelles en 2026, sans surprise cachée.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <article className="lg:col-span-2 prose prose-gray max-w-none">

            <h2>Quand faut-il remplacer ses gouttières plutôt que les nettoyer ?</h2>
            <p>
              La plupart du temps, un nettoyage professionnel suffit pour restaurer le bon fonctionnement de vos gouttières. Mais certains signes indiquent qu&apos;un remplacement est inévitable :
            </p>
            <ul>
              <li><strong>Fissures ou perforations visibles</strong> — surtout sur gouttières en zinc vieillissant</li>
              <li><strong>Déformations importantes</strong> — gouttière qui s&apos;affaisse au centre ou se détache du fascia</li>
              <li><strong>Rouille généralisée</strong> — sur les crochets et supports en fer</li>
              <li><strong>Joints décollés en plusieurs endroits</strong> — inévitable sur les anciennes gouttières en PVC après 20 ans</li>
              <li><strong>Gouttière qui déborde systématiquement</strong> après nettoyage — pente inadaptée</li>
            </ul>
            <p>
              Si votre gouttière présente 2 ou plus de ces signes, le remplacement est plus économique sur le long terme qu&apos;une succession de réparations ponctuelles.
            </p>

            <h2>Prix de remplacement par matériau à Bruxelles (2026)</h2>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#1A4731] text-white">
                    <th className="px-4 py-3 text-left">Matériau</th>
                    <th className="px-4 py-3 text-center">Prix fourni posé (€/ml)</th>
                    <th className="px-4 py-3 text-center">Durée de vie</th>
                    <th className="px-4 py-3 text-center">Entretien</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">PVC</td>
                    <td className="px-4 py-3 text-center">10 – 25 €</td>
                    <td className="px-4 py-3 text-center">15–25 ans</td>
                    <td className="px-4 py-3 text-center">Faible</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Aluminium</td>
                    <td className="px-4 py-3 text-center">25 – 55 €</td>
                    <td className="px-4 py-3 text-center">30–50 ans</td>
                    <td className="px-4 py-3 text-center">Faible</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Zinc</td>
                    <td className="px-4 py-3 text-center">40 – 80 €</td>
                    <td className="px-4 py-3 text-center">50–80 ans</td>
                    <td className="px-4 py-3 text-center">Modéré</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Cuivre</td>
                    <td className="px-4 py-3 text-center">80 – 150 €</td>
                    <td className="px-4 py-3 text-center">100+ ans</td>
                    <td className="px-4 py-3 text-center">Très faible</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 italic">Prix TTC, main d&apos;œuvre et dépose des anciennes gouttières incluses. Hors travaux de réparation de fascia ou charpente.</p>

            <h2>Exemples de devis réels à Bruxelles</h2>

            <h3>Maison mitoyenne type à Ixelles (longueur totale : 25 ml)</h3>
            <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-5 my-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-gray-600">Dépose des anciennes gouttières</span>
                <span className="font-semibold text-right">150 €</span>
                <span className="text-gray-600">Fourniture gouttière alu (25 ml × 35 €)</span>
                <span className="font-semibold text-right">875 €</span>
                <span className="text-gray-600">Descentes d&apos;eaux pluviales (2 × 3 ml)</span>
                <span className="font-semibold text-right">160 €</span>
                <span className="text-gray-600">Main d&apos;œuvre et crochets</span>
                <span className="font-semibold text-right">320 €</span>
                <span className="text-gray-600">TVA 21%</span>
                <span className="font-semibold text-right">311 €</span>
                <span className="font-bold text-gray-900 border-t border-gray-300 pt-2">Total TTC</span>
                <span className="font-bold text-[#1A4731] border-t border-gray-300 pt-2 text-right">1.816 €</span>
              </div>
            </div>

            <h3>Villa 4 façades à Uccle (longueur totale : 60 ml)</h3>
            <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-5 my-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-gray-600">Dépose des anciennes gouttières</span>
                <span className="font-semibold text-right">280 €</span>
                <span className="text-gray-600">Fourniture gouttière zinc (60 ml × 60 €)</span>
                <span className="font-semibold text-right">3.600 €</span>
                <span className="text-gray-600">Descentes d&apos;eaux pluviales (4 × 4 ml)</span>
                <span className="font-semibold text-right">480 €</span>
                <span className="text-gray-600">Main d&apos;œuvre et supports</span>
                <span className="font-semibold text-right">850 €</span>
                <span className="text-gray-600">TVA 6% (travaux bâtiment &gt; 10 ans)</span>
                <span className="font-semibold text-right">313 €</span>
                <span className="font-bold text-gray-900 border-t border-gray-300 pt-2">Total TTC</span>
                <span className="font-bold text-[#1A4731] border-t border-gray-300 pt-2 text-right">5.523 €</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">* TVA à 6% applicable sur les travaux de rénovation dans les logements de plus de 10 ans en Belgique.</p>
            </div>

            <h2>La TVA à 6% : une économie importante pour les maisons anciennes</h2>
            <p>
              En Belgique, les travaux de rénovation dans les logements de plus de 10 ans bénéficient d&apos;un taux de TVA réduit à <strong>6% au lieu de 21%</strong>. Cela s&apos;applique au remplacement de gouttières sur les maisons construites avant 2016 à Bruxelles.
            </p>
            <p>
              Pour une villa de 5.000 € de travaux (hors TVA), cela représente une économie de <strong>750 € par rapport au taux plein</strong>. Assurez-vous que l&apos;entrepreneur indique le bon taux sur sa facture — c&apos;est votre droit.
            </p>
            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-4 my-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-green-800 text-sm">Condition TVA 6%</p>
                  <p className="text-green-700 text-sm">Le logement doit avoir au moins 10 ans et servir à l&apos;habitation. Une attestation du client est suffisante — aucune démarche administrative complexe n&apos;est requise.</p>
                </div>
              </div>
            </div>

            <h2>Comment obtenir le meilleur tarif ?</h2>
            <ol>
              <li><strong>Demandez 2 à 3 devis comparatifs</strong> — les prix varient de 20 à 30% entre entrepreneurs pour un même chantier</li>
              <li><strong>Vérifiez que le devis inclut la dépose des anciennes gouttières</strong> — souvent non incluse dans les devis &quot;entrée de gamme&quot;</li>
              <li><strong>Demandez la garantie décennale</strong> — obligatoire pour les travaux sur l&apos;enveloppe du bâtiment en Belgique</li>
              <li><strong>Combinez avec un nettoyage de toiture</strong> si celle-ci en a besoin — vous économisez sur le déplacement et l&apos;échafaudage</li>
              <li><strong>Planifiez hors automne</strong> — les prix augmentent de 10 à 15% en septembre-novembre, haute saison des chantiers gouttières</li>
            </ol>

            <h2>Remplacement partiel vs remplacement total</h2>
            <p>
              Si seulement un tronçon de 3 à 5 mètres est endommagé, un remplacement partiel est envisageable à condition que le reste des gouttières soit en bon état et du même matériau. Sur des gouttières en zinc ancien, il est parfois impossible de trouver un profil identique — dans ce cas, le remplacement total s&apos;impose pour maintenir l&apos;étanchéité des jonctions.
            </p>
            <p>
              Demandez à notre équipe une inspection visuelle gratuite avant de décider. Nous photographions l&apos;état de vos gouttières depuis le sol et en hauteur pour vous faire une recommandation honnête.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white sticky top-6">
              <h3 className="font-bold text-lg mb-2">Devis remplacement gratuit</h3>
              <p className="text-green-200 text-sm mb-4">
                Estimation sous 24h pour toute la Région bruxelloise. Sans engagement.
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
                  <Link href="/blog/prix-nettoyage-gouttieres-bruxelles" className="text-sm text-[#1A4731] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Prix nettoyage gouttières 2026
                  </Link>
                </li>
                <li>
                  <Link href="/blog/materiaux-gouttieres-zinc-pvc-aluminium" className="text-sm text-[#1A4731] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Zinc, PVC ou Aluminium ?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/infiltration-eau-facade-gouttieres" className="text-sm text-[#1A4731] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Infiltrations d&apos;eau et gouttières
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Demandez votre devis de remplacement</h2>
          <p className="text-gray-600 mb-6">Réponse sous 24h, intervention dans toute la Région bruxelloise.</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
