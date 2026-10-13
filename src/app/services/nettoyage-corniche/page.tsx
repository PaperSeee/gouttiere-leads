import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Landmark, Euro, Shield, Leaf } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import TrustNote from "@/components/TrustNote";

const URL = "https://www.nettoyage-gouttieres-bruxelles.be/services/nettoyage-corniche";
const HOMEGRADE = "https://homegrade.brussels/conseils/patrimoine/corniche-entretien-preservation/";

export const metadata: Metadata = {
  title: { absolute: "Nettoyage de corniche à Bruxelles — chéneau vidé, dès 80 €" },
  description:
    "Nettoyage de corniche à Bruxelles : chéneau en zinc vidé par le haut, descente débouchée, pente et soudures contrôlées. Dès 80 €, devis gratuit.",
  alternates: { canonical: URL },
  keywords: ["nettoyage corniche Bruxelles", "nettoyage de corniche", "nettoyage corniche prix", "nettoyage chéneau Bruxelles", "corniche bouchée"],
  openGraph: {
    type: "website",
    title: "Nettoyage de corniche à Bruxelles — chéneau vidé, dès 80 €",
    description: "Chéneau en zinc vidé par le haut, naissance et descente débouchées, pente et soudures contrôlées. Devis gratuit, prix fixé à l'avance.",
    url: URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage de corniche à Bruxelles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage de corniche à Bruxelles — dès 80 €",
    description: "Chéneau vidé, descente débouchée, pente et soudures contrôlées. Devis gratuit.",
    images: ["/opengraph-image"],
  },
};

const communesCorniche = [
  { name: "Bruxelles-Ville", slug: "bruxelles" },
  { name: "Saint-Gilles", slug: "saint-gilles" },
  { name: "Ixelles", slug: "ixelles" },
  { name: "Schaerbeek", slug: "schaerbeek" },
  { name: "Forest", slug: "forest" },
  { name: "Etterbeek", slug: "etterbeek" },
  { name: "Saint-Josse-ten-Noode", slug: "saint-josse-ten-noode" },
  { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" },
  { name: "Koekelberg", slug: "koekelberg" },
];

const corniceFaqs = [
  {
    question: "Peut-on nettoyer sa corniche soi-même ?",
    answer:
      "C'est déconseillé dès le premier étage. Homegrade, le centre régional de conseil en rénovation, rappelle que s'aventurer sur une toiture ou sur une corniche demande un équipement de sécurité approprié. Le chéneau se vide par le haut : depuis le toit, une lucarne ou une nacelle, pas depuis une échelle posée contre la moulure.",
  },
  {
    question: "Quelle différence entre une corniche, un chéneau et une gouttière ?",
    answer:
      "La corniche est l'ouvrage en bois qui termine la façade ; elle porte le chéneau, un canal habillé de zinc qui recueille l'eau du toit et l'envoie vers la descente. La gouttière pendante, elle, est accrochée sous le bord du toit et se voit depuis la rue. Les trois se nettoient de la même façon : on vide, on débouche, on teste l'écoulement.",
  },
  {
    question: "Le nettoyage comprend-il la peinture de la corniche ?",
    answer:
      "Non. Le nettoyage vide le chéneau et contrôle son état ; l'état du bois est noté au passage. Repeindre une corniche demande un échafaudage complet, selon Homegrade, et se planifie en général avec d'autres travaux de façade, par un peintre ou un menuisier.",
  },
  {
    question: "Faut-il un permis pour nettoyer ou réparer une corniche à Bruxelles ?",
    answer:
      "Pas pour le nettoyage. Les travaux qui modifient l'aspect architectural (couleur, matériau, épaisseur) demandent un permis d'urbanisme : le service de l'urbanisme de la commune vous renseigne. Sur un bien classé ou inscrit sur la liste de sauvegarde, même un remplacement à l'identique est soumis à permis ; l'entretien, en principe, ne l'est pas.",
  },
];

export default function NettoyageCorniche() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${URL}#service`,
    name: "Nettoyage de corniche à Bruxelles",
    serviceType: "Nettoyage de corniche et de chéneau",
    url: URL,
    provider: { "@id": "https://www.nettoyage-gouttieres-bruxelles.be/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "Région de Bruxelles-Capitale" },
    description:
      "Nettoyage de corniche à Bruxelles : vidage du chéneau en zinc par le haut, dégagement de la naissance, débouchage de la descente, test d'écoulement, contrôle de la pente, des soudures et de l'état du bois.",
    offers: { "@type": "Offer", priceCurrency: "EUR", price: "80", description: "À partir de 80 € pour une maison, prix fixé dans un devis gratuit" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: corniceFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const link = "font-semibold text-[#1A4731] hover:text-[#F97316]";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Nettoyage de corniche" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Landmark size={24} className="text-[#F97316]" />
              <span className="text-[#F97316] font-semibold">Corniches et chéneaux</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Nettoyage de corniche à Bruxelles</h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Nettoyer une corniche, c&apos;est vider par le haut le chéneau en zinc qu&apos;elle porte, déboucher la
              naissance et la descente, puis contrôler la pente et les soudures. À faire une fois par an, à la fin
              de l&apos;automne. Dès 80 € pour une maison, prix fixé dans un devis gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                <Phone size={18} /> 0451 05 33 70
              </a>
              <a href="#devis" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                Devis gratuit <ArrowRight size={18} />
              </a>
            </div>
            <TrustNote className="mt-5" tone="dark" />
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Que comprend le nettoyage d&apos;une corniche ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sur la plupart des maisons de ville bruxelloises du XIXe et du début du XXe siècle, la gouttière ne
                se voit pas : c&apos;est un chéneau en zinc posé sur la corniche en bois, caché derrière la moulure.
                On ne le voit donc pas se remplir. Son nettoyage se fait par le haut et suit toujours les mêmes étapes :
              </p>
              <ul className="space-y-2 mb-6 not-prose">
                {[
                  "Retrait des feuilles, mousses, boues et graviers sur toute la longueur du chéneau",
                  "Dégagement de la naissance (l'entrée de la descente), souvent couverte d'une crapaudine",
                  "Débouchage de la descente pluviale et test d'écoulement jusqu'au pied du mur",
                  "Contrôle de la pente : une flaque qui stagne signale un affaissement",
                  "Contrôle des soudures et des joints de dilatation du zinc",
                  "Coup d'œil à l'état du bois de la corniche et des ardoises ou tuiles de rive",
                  "Évacuation des déchets végétaux",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le chéneau et la gouttière pendante se nettoient de la même manière ; seule la façon d&apos;y accéder
                change. Pour les maisons à gouttière visible, voyez notre page{" "}
                <Link href="/services/nettoyage-gouttieres" className={link}>nettoyage de gouttières</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Quand faire nettoyer sa corniche à Bruxelles ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Une fois par an, à la fin de l&apos;automne, quand les arbres ont perdu leurs feuilles : c&apos;est le
                rythme que conseille{" "}
                <a href={HOMEGRADE} target="_blank" rel="noopener" className={link}>Homegrade</a>, le centre
                régional de conseil en rénovation, pour débarrasser le chéneau de ses débris et vérifier son
                étanchéité et sa pente. Sous de grands arbres, un second passage au printemps enlève graines et fleurs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sans attendre la date, plusieurs signes montrent qu&apos;un chéneau est plein ou fuit :
              </p>
              <ul className="space-y-2 mb-6 not-prose">
                {[
                  "Taches d'humidité ou coulures sur la façade, juste sous la corniche",
                  "Peinture de la corniche qui cloque, bois qui noircit ou s'effrite",
                  "Mousse ou petites plantes qui dépassent du bord du toit",
                  "Eau qui tombe en rideau devant la façade pendant une averse, alors que la descente débite peu",
                  "Tache au plafond de la pièce située sous la toiture, côté rue",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un chéneau qui déborde mouille le haut du mur et les enduits ; si la situation dure, les pièces de
                bois en contact avec le mur (base de la charpente, plancher des combles) risquent de pourrir. Notre
                guide{" "}
                <Link href="/blog/chenau-corniche-entretien" className={link}>chéneau et corniche : signes, entretien et réparation</Link>{" "}
                détaille ces symptômes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Combien coûte le nettoyage d&apos;une corniche ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le nettoyage d&apos;un chéneau de corniche se chiffre comme celui d&apos;une gouttière, descente comprise.
                Prix indicatifs publiés sur notre page{" "}
                <Link href="/tarifs" className={link}>tarifs</Link> ; le prix exact est fixé dans le devis gratuit.
              </p>
              <div className="not-prose overflow-x-auto mb-4">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="text-left p-3">Situation</th>
                      <th className="text-left p-3">Prix indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    <tr><td className="p-3">Maison 2 façades, accès normal</td><td className="p-3 font-semibold">80 – 100€</td></tr>
                    <tr><td className="p-3">Maison mitoyenne, accès difficile</td><td className="p-3 font-semibold">90 – 130€</td></tr>
                    <tr><td className="p-3">Maison 3–4 façades</td><td className="p-3 font-semibold">100 – 150€</td></tr>
                    <tr><td className="p-3">Réparation d&apos;un joint ou d&apos;un collet</td><td className="p-3 font-semibold">40 – 80€</td></tr>
                    <tr><td className="p-3">Chéneau en zinc à remplacer (posé)</td><td className="p-3 font-semibold">35 – 55€/ml</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ce qui fait varier le prix : la hauteur de la façade, la longueur du chéneau et l&apos;accès. Si une
                nacelle doit stationner sur la chaussée ou le trottoir, son coût et l&apos;autorisation d&apos;occupation
                de la voie publique demandée à la commune sont indiqués dans le devis.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Comment accède-t-on à une corniche haute ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le plus souvent par le toit : une lucarne ou une tabatière donne accès au versant, et le chéneau se
                vide depuis la couverture, avec un équipement de sécurité. Sur une toiture fragile ou trop pentue, une nacelle
                permet de travailler depuis la rue. L&apos;échelle posée contre la corniche est à éviter : la moulure
                n&apos;est pas faite pour porter un appui. Le mode d&apos;accès est choisi lors du devis, après avoir vu
                la façade.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Corniche abîmée : faut-il réparer, remplacer ou demander un permis ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le nettoyage révèle souvent l&apos;état du zinc. Une soudure qui a lâché se reprend ; quand le zinc
                fuit à plusieurs endroits ou que le fond est déformé, il se remplace, après correction de la pente.
                Côté bois, Homegrade note que le remplacement complet d&apos;une corniche s&apos;impose rarement : le
                renouvellement de certaines pièces suffit souvent. Ces travaux relèvent de notre service de{" "}
                <Link href="/services/reparation-gouttieres" className={link}>réparation de gouttières et chéneaux</Link>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                À éviter : recouvrir la corniche de lattes en PVC au lieu de la repeindre. Un défaut d&apos;étanchéité
                n&apos;est alors repéré qu&apos;avec retard, et le bois mal ventilé pourrit plus vite.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tout travail qui modifie l&apos;aspect de la corniche (couleur, matériau, épaisseur) demande un permis
                d&apos;urbanisme ; le service de l&apos;urbanisme de votre commune vous dit quoi demander. Sur un bien
                classé ou inscrit sur la liste de sauvegarde, même un remplacement à l&apos;identique est soumis à
                permis, mais pas l&apos;entretien en principe. Les corniches remarquables visibles depuis la rue
                peuvent bénéficier de la prime petit patrimoine.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Source : Homegrade, «{" "}
                <a href={HOMEGRADE} target="_blank" rel="noopener" className="underline">Corniche – Entretien et préservation</a>{" "}
                », mis à jour le 17 novembre 2025, consulté le 13 octobre 2026.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Questions fréquentes sur le nettoyage de corniche</h2>
              <div className="not-prose space-y-4 mb-6">
                {corniceFaqs.map((f) => (
                  <div key={f.question} className="rounded-xl border border-gray-200 p-5">
                    <p className="font-semibold text-gray-900 mb-2">{f.question}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Où trouve-t-on le plus de corniches à Bruxelles ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dans les quartiers de maisons de ville du XIXe et du début du XXe siècle : le Pentagone, Saint-Gilles,
                Ixelles, Schaerbeek, les rangées de Forest ou d&apos;Etterbeek. Chaque page commune décrit le bâti et
                l&apos;accès propres au quartier :
              </p>
              <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-2">
                {communesCorniche.map((c) => (
                  <Link key={c.slug} href={`/communes/${c.slug}`} className="text-[#1A4731] hover:text-[#F97316] font-medium text-sm flex items-center gap-1">
                    <ArrowRight size={12} /> Gouttières {c.name}
                  </Link>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mt-6">
                Pour toutes les autres communes, voir notre service de{" "}
                <Link href="/" className={link}>nettoyage de gouttières à Bruxelles</Link>.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1A4731] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Devis nettoyage de corniche</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Le prix dépend de la hauteur, de la longueur du chéneau et de l&apos;accès. Devis gratuit, sans
                  engagement, prix fixé avant l&apos;intervention.
                </p>
                <a href="tel:0451053370" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-4 py-3 rounded-lg w-full hover:bg-orange-500 transition-colors">
                  <Phone size={16} /> 0451 05 33 70
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">En résumé</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Euro size={16} className="text-[#F97316]" />, text: "Dès 80 € pour une maison" },
                    { icon: <CheckCircle size={16} className="text-[#F97316]" />, text: "Descente et test d'écoulement compris" },
                    { icon: <Shield size={16} className="text-[#F97316]" />, text: "Prix fixé à l'avance" },
                    { icon: <Leaf size={16} className="text-[#F97316]" />, text: "Déchets évacués" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                      {item.icon} {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-bold text-[#F97316] mb-2">Services liés</h3>
                <ul className="space-y-1.5">
                  <li><Link href="/services/nettoyage-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Nettoyage de gouttières</Link></li>
                  <li><Link href="/services/debouchage-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Débouchage de descente</Link></li>
                  <li><Link href="/services/reparation-gouttieres" className="text-sm text-gray-700 hover:text-[#F97316]">→ Réparation du zinc</Link></li>
                  <li><Link href="/services/nettoyage-toiture" className="text-sm text-gray-700 hover:text-[#F97316]">→ Nettoyage de toiture</Link></li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="font-semibold text-[#1A4731] mb-2">Pour aller plus loin</h3>
                <ul className="space-y-1.5">
                  <li><Link href="/blog/chenau-corniche-entretien" className="text-sm text-[#F97316] font-semibold">→ Chéneau et corniche : le guide</Link></li>
                  <li><Link href="/blog/infiltration-eau-facade-gouttieres" className="text-sm text-[#F97316] font-semibold">→ Infiltration d&apos;eau par la façade</Link></li>
                  <li><Link href="/blog/gouttieres-copropriete-bruxelles" className="text-sm text-[#F97316] font-semibold">→ Gouttières en copropriété : qui paie ?</Link></li>
                  <li><Link href="/tarifs" className="text-sm text-[#F97316] font-semibold">→ Tous les tarifs</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="devis" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Demandez votre devis gratuit</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ContactForm defaultIntervention="Nettoyage gouttières" />
          </div>
        </div>
      </section>
    </>
  );
}
