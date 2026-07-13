import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Infiltrations d'Eau sur Façade : le Rôle Méconnu des Gouttières",
  description: "Taches d'humidité, moisissures, peinture qui s'écaille : les gouttières défectueuses sont souvent en cause. Diagnostic et solutions.",
  keywords: ["infiltration eau façade", "gouttière qui déborde façade", "humidité mur extérieur", "moisissures façade causes", "gouttière endommagée infiltration"],
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/infiltration-eau-facade-gouttieres" },
  openGraph: {
    type: "article",
    title: "Infiltrations d'Eau sur Façade : le Rôle des Gouttières",
    description: "Comment diagnostiquer si vos gouttières sont à l'origine des infiltrations et des moisissures sur votre façade bruxelloise.",
    images: [{ url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80", width: 1200, height: 630, alt: "Infiltration eau façade — gouttières bruxelles" }],
    publishedTime: "2026-06-02",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infiltrations Façade et Gouttières Défectueuses",
    description: "Diagnostic et solutions pour les infiltrations causées par des gouttières défaillantes.",
    images: ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80"],
  },
}

export default function BlogInfiltrationEauFacadeGouttieres() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/infiltration-eau-facade-gouttieres`,
        headline: "Infiltrations d'eau sur façade : le rôle méconnu des gouttières",
        description: "Les gouttières défectueuses sont souvent à l'origine des infiltrations de façade. Guide de diagnostic et solutions.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-06-02",
        dateModified: "2026-06-02",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/infiltration-eau-facade-gouttieres` },
        inLanguage: "fr-BE",
        keywords: "infiltration eau façade, gouttière défectueuse, humidité façade bruxelles",
        articleSection: "Urgence",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Infiltrations façade", item: `${DOMAIN}/blog/infiltration-eau-facade-gouttieres` },
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
              { label: "Infiltrations façade" },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> Urgence
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> 5 min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Infiltrations d&apos;Eau sur Façade : le Rôle Méconnu des Gouttières
          </h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">
            Si votre façade présente des taches d&apos;humidité ou des moisissures, vos gouttières sont peut-être en cause. Voici comment diagnostiquer et résoudre le problème.
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
                  Une infiltration d&apos;eau dans une façade peut entraîner des dégâts structurels graves si elle n&apos;est pas traitée. Plus le diagnostic est tardif, plus les réparations sont coûteuses.
                </p>
              </div>
            </div>

            <h2>Gouttières et infiltrations : le lien souvent ignoré</h2>
            <p>
              Lorsque des taches d&apos;humidité apparaissent sur une façade, les propriétaires pensent immédiatement à un problème d&apos;étanchéité du mur ou d&apos;une fissure dans la maçonnerie. C&apos;est parfois le cas. Mais dans une proportion significative des cas — surtout à Bruxelles avec son parc immobilier souvent ancien — la cause est bien plus simple : une gouttière bouchée, percée ou mal positionnée.
            </p>
            <p>
              L&apos;eau qui ne s&apos;écoule pas correctement déborde sur le bord de la gouttière et ruisselle directement sur la façade. En quelques années, ce ruissellement récurrent sature les matériaux de construction, provoque des moisissures, fait s&apos;écailler la peinture et peut infiltrer les joints de la maçonnerie.
            </p>

            <h2>Les 5 signes que vos gouttières causent des infiltrations</h2>
            <div className="not-prose space-y-3 mb-6">
              {[
                { num: "1", titre: "Taches d'humidité en haut d'un mur intérieur", desc: "Surtout visibles dans les combles ou en haut des murs contre la toiture — souvent signe que la gouttière déborde à cet endroit précis." },
                { num: "2", titre: "Peinture extérieure qui s'écaille au niveau de la gouttière", desc: "L'eau qui coule en permanence sur la façade emporte la peinture et finit par attaquer le crépi." },
                { num: "3", titre: "Mousse verte sur la façade juste sous la gouttière", desc: "La végétation se développe là où l'humidité est constante — signe que l'eau ruisselle régulièrement à cet endroit." },
                { num: "4", titre: "Sol trempé ou érosion contre la fondation", desc: "Une descente d'eau bouchée renvoie l'eau directement contre les fondations, ce qui peut à terme causer des problèmes structurels." },
                { num: "5", titre: "Taches sombres sur le plafond d'une pièce en appentis ou en extension", desc: "Les structures annexes (garages, vérandas, extensions) ont souvent des gouttières moins entretenues qui peuvent causer des infiltrations dans le plafond." },
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

            <h2>Comment faire le diagnostic : test de la pluie</h2>
            <p>
              La meilleure façon de confirmer que la gouttière est en cause est d&apos;observer la façade <strong>pendant ou juste après une pluie</strong>. Si vous voyez de l&apos;eau déborder du bord de la gouttière et couler sur la façade, le diagnostic est fait.
            </p>
            <p>
              Vous pouvez aussi simuler la pluie avec un tuyau d&apos;arrosage positionné dans la gouttière et observer si l&apos;eau s&apos;écoule normalement par la descente ou si elle déborde. Attention à ne pas monter sur le toit sans équipement de sécurité adapté.
            </p>

            <h2>Les causes courantes de gouttières défaillantes à Bruxelles</h2>
            <ul>
              <li><strong>Obstruction par les feuilles</strong> : platanes, marronniers et tilleuls — les arbres bruxellois classiques — accumulent leurs feuilles dans les gouttières chaque automne</li>
              <li><strong>Accumulation de mousse et de terre</strong> : crée un fond imperméable qui empêche l&apos;eau de s&apos;écouler</li>
              <li><strong>Joints défaillants entre les éléments</strong> : les joints de dilatation se dégradent avec les cycles gel-dégel répétés</li>
              <li><strong>Descente d&apos;eau bouchée</strong> : feuilles, nids d&apos;oiseaux ou accumulation de dépôts obstruent le tuyau de descente</li>
              <li><strong>Mauvaise pente de la gouttière</strong> : avec le temps, les crochets de fixation cèdent et la gouttière perd sa pente, créant des zones de rétention d&apos;eau</li>
            </ul>

            <h2>Solutions : de l&apos;entretien préventif à la réparation</h2>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-sm">Actions préventives</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Nettoyage 2x/an (printemps + automne)</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Pose d&apos;un filet anti-feuilles</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Vérification des pentes annuellement</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> Inspection des joints tous les 5 ans</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-3 text-sm">Réparations nécessaires</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Remplacement des joints défaillants</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Repositionnement des crochets</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Remplacement de sections percées</li>
                  <li className="flex gap-2"><CheckCircle size={14} className="text-blue-500 mt-0.5 shrink-0" /> Débouchage des descentes d&apos;eau</li>
                </ul>
              </div>
            </div>

            <h2>Et si la façade est déjà endommagée ?</h2>
            <p>
              Une fois le problème de gouttière résolu, il faut traiter les dégâts sur la façade. Le délai de traitement dépend de l&apos;étendue des dommages :
            </p>
            <ul>
              <li>Taches légères de mousse : traitement anti-mousse + rinçage, 1-2 jours de travail</li>
              <li>Peinture écaillée : grattage, enduit de rebouchage, peinture extérieure, 2-4 jours</li>
              <li>Crépi décollé ou fissuré : réparation du crépi + peinture, 3-7 jours selon l&apos;étendue</li>
              <li>Infiltration dans les murs : traitement hydrofuge après séchage complet (plusieurs semaines minimum)</li>
            </ul>
            <p>
              La règle d&apos;or : ne jamais traiter la façade avant d&apos;avoir réparé la gouttière. Sinon, l&apos;eau continuera à infiltrer et les réparations ne tiendront pas.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A4731] rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">Urgence gouttière ?</h3>
              <p className="text-green-100 text-sm mb-4">Nettoyage et réparation rapide à Bruxelles — devis gratuit sous 24h.</p>
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
              { label: "Gouttière qui déborde", href: "/blog/gouttiere-qui-deborde-causes-solutions" },
              { label: "Quand nettoyer ses gouttières ?", href: "/blog/entretien-gouttieres-quand-faire" },
              { label: "Prix nettoyage gouttières", href: "/blog/prix-nettoyage-gouttieres-bruxelles" },
              { label: "Préparer l'automne", href: "/blog/preparer-gouttieres-automne-bruxelles" },
              { label: "Matériaux gouttières", href: "/blog/materiaux-gouttieres-zinc-pvc-aluminium" },
              { label: "Corniche ou gouttière : la différence", href: "/blog/corniche-gouttiere-bruxelles-difference-prix" },
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
