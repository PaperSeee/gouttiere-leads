import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, Calendar, Clock, Tag, AlertTriangle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Gouttière qui Déborde : Causes, Dangers et Solutions | Nettoyage Gouttières Bruxelles",
  description: "Votre gouttière déborde sous la pluie ? Découvrez les 6 causes les plus fréquentes, les risques pour votre maison et ce qu'il faut faire immédiatement. Intervention urgence 7j/7.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/blog/gouttiere-qui-deborde-causes-solutions" },
  openGraph: {
    type: "article",
    title: "Gouttière qui Déborde : Causes, Dangers et Solutions",
    description: "Les 6 causes d'une gouttière qui déborde, les risques pour votre maison et comment réagir immédiatement.",
    images: [{ url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80", width: 1200, height: 630, alt: "Gouttière qui déborde sous la pluie" }],
    publishedTime: "2026-05-26",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gouttière qui Déborde : Causes et Solutions",
    description: "Les 6 causes + les risques + quoi faire maintenant. Intervention urgence 7j/7 à Bruxelles.",
    images: ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80"],
  },
}

export default function BlogDebordementPage() {
  const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${DOMAIN}/blog/gouttiere-qui-deborde-causes-solutions`,
        headline: "Gouttière qui déborde : causes, dangers et solutions immédiates",
        description: "Votre gouttière déborde lors des pluies ? Découvrez les 6 causes les plus fréquentes, les risques pour votre maison et ce qu'il faut faire immédiatement.",
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: {
          "@type": "Organization",
          name: "Nettoyage Gouttières Bruxelles",
          url: DOMAIN,
          logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.svg` },
        },
        datePublished: "2026-05-26",
        dateModified: "2026-05-26",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80",
        mainEntityOfPage: { "@type": "WebPage", "@id": `${DOMAIN}/blog/gouttiere-qui-deborde-causes-solutions` },
        inLanguage: "fr-BE",
        keywords: "gouttière qui déborde, gouttière débordement, gouttière bouchée Bruxelles, débouchage urgence",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: DOMAIN },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Gouttière qui déborde", item: `${DOMAIN}/blog/gouttiere-qui-deborde-causes-solutions` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Pourquoi ma gouttière déborde-t-elle seulement par endroits ?",
            acceptedAnswer: { "@type": "Answer", text: "Un débordement localisé indique généralement un bouchon dans la descente pluviale proche de ce point, ou un affaissement local de la gouttière qui crée une cuvette. L'eau s'accumule jusqu'à déborder plutôt que de s'écouler vers la descente." },
          },
          {
            "@type": "Question",
            name: "Une gouttière qui déborde peut-elle causer des dégâts des eaux ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui. En quelques heures de pluie intense, une gouttière débordante peut infiltrer la façade, saturer les fondations ou remonter sous les tuiles. Les dégâts des eaux qui en résultent coûtent en moyenne 10 à 20 fois plus cher qu'un débouchage préventif." },
          },
          {
            "@type": "Question",
            name: "Combien coûte un débouchage d'urgence à Bruxelles ?",
            acceptedAnswer: { "@type": "Answer", text: "Le débouchage d'urgence est facturé entre 120 et 200€ selon l'accessibilité et la nature du bouchon. Nous intervenons 7j/7 à Bruxelles, souvent le jour même. Devis gratuit au 0477 23 41 87." },
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
        { label: "Gouttière qui déborde" },
      ]} />

      {/* Hero */}
      <section className="bg-[#1A4731] text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Tag size={12} />Urgence
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Calendar size={12} />26 mai 2026
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Clock size={12} />6 min de lecture
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Gouttière qui déborde : causes, dangers et solutions immédiates
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Une gouttière qui déborde n&apos;est jamais anodine. En quelques heures de pluie intense, l&apos;eau peut infiltrer votre façade, saturer vos fondations ou endommager vos combles. Voici comment identifier la cause et réagir vite.
          </p>
          <div className="mt-6">
            <a
              href="tel:0477234187"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone size={18} />
              Urgence — 0477 23 41 87
            </a>
          </div>
        </div>
      </section>

      {/* Alerte visuelle */}
      <div className="bg-red-50 border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm">
              <strong>Débordement actif en ce moment ?</strong> N&apos;attendez pas — chaque heure de pluie aggrave les dégâts. Appelez le{" "}
              <a href="tel:0477234187" className="font-bold underline">0477 23 41 87</a>
              {" "}— intervention 7j/7, souvent le jour même.
            </p>
          </div>
        </div>
      </div>

      {/* Corps de l'article */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">

            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
              Pourquoi c&apos;est urgent — les risques concrets
            </h2>
            <p>
              Une gouttière qui déborde pendant une pluie peut sembler un problème esthétique mineur. C&apos;est une erreur fréquente et coûteuse. L&apos;eau qui s&apos;écoule le long de votre façade plutôt que vers les descentes pluviales déclenche une cascade de dégradations en chaîne.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { color: "bg-red-50 border-red-100", title: "Façade", desc: "Le ruissellement continu crée des salpêtres, taches noires et efflorescence sur la brique ou le crépi. Une façade dégradée coûte 1.500 à 5.000€ à rénover." },
                { color: "bg-orange-50 border-orange-100", title: "Fondations", desc: "L'eau qui tombe en pied de mur sature le sol. Sur le long terme, l'humidité remonte dans les murs par capillarité et fragilise les fondations." },
                { color: "bg-yellow-50 border-yellow-100", title: "Combles & toiture", desc: "Si l'eau remonte sous les tuiles ou infiltre la rive de toit, des moisissures apparaissent dans les combles. Le traitement coûte 2.000 à 8.000€." },
                { color: "bg-blue-50 border-blue-100", title: "Cave & sous-sol", desc: "Un débordement persistant côté jardin peut saturer le drain périphérique et provoquer des infiltrations en cave par la nappe phréatique haute." },
              ].map((r) => (
                <div key={r.title} className={`${r.color} border rounded-xl p-4`}>
                  <h3 className="font-bold text-gray-900 mb-1 text-base">{r.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Les 6 causes d&apos;une gouttière qui déborde
            </h2>
            <p>
              Avant d&apos;appeler un professionnel, il est utile de comprendre pourquoi votre gouttière déborde. Cela permet de communiquer le problème précisément et de choisir la bonne intervention.
            </p>

            <div className="space-y-5 my-6 not-prose">
              {[
                {
                  num: "01",
                  title: "Gouttière bouchée par des feuilles ou débris",
                  urgency: "Très fréquent",
                  urgencyColor: "bg-red-100 text-red-700",
                  desc: "C'est de loin la cause la plus courante. Les feuilles, mousses, graines et sédiments s'accumulent progressivement jusqu'à former un bouchon qui empêche l'écoulement. La gouttière se transforme en bassin : elle se remplit à chaque pluie et déborde par-dessus bord.",
                  solution: "Nettoyage complet gouttières + descentes pluviales. Dès 80€.",
                },
                {
                  num: "02",
                  title: "Descente pluviale obstruée",
                  urgency: "Très fréquent",
                  urgencyColor: "bg-red-100 text-red-700",
                  desc: "La gouttière elle-même peut être dégagée, mais si la descente (le tuyau vertical) est bouchée, l'eau n'a nulle part où aller. Le signe révélateur : l'eau déborde à l'endroit exact où se trouve la descente, ou vous entendez un gargouillis puis un débordement.",
                  solution: "Débouchage haute pression descente pluviale. Intervention urgence 7j/7.",
                },
                {
                  num: "03",
                  title: "Pente incorrecte ou gouttière affaissée",
                  urgency: "Fréquent",
                  urgencyColor: "bg-orange-100 text-orange-700",
                  desc: "Une gouttière doit être légèrement inclinée vers la descente (environ 3mm par mètre). Si des crochets ont lâché ou si la gouttière s'est déformée sous le poids de la neige ou des feuilles, elle peut former une cuvette où l'eau stagne puis déborde.",
                  solution: "Réglage de la pente par repositionnement des crochets. Parfois remplacement partiel.",
                },
                {
                  num: "04",
                  title: "Gouttière sous-dimensionnée",
                  urgency: "Moins fréquent",
                  urgencyColor: "bg-yellow-100 text-yellow-700",
                  desc: "Sur les maisons avec de grandes surfaces de toiture ou des toits à forte pente, la quantité d'eau collectée peut dépasser la capacité de la gouttière lors de pluies intenses. Ce problème est fréquent lors de rénovations où une toiture plus grande a été posée sans agrandir les gouttières.",
                  solution: "Remplacement par un profil plus large ou ajout d'une descente supplémentaire.",
                },
                {
                  num: "05",
                  title: "Joint défaillant ou raccord mal posé",
                  urgency: "Fréquent",
                  urgencyColor: "bg-orange-100 text-orange-700",
                  desc: "Les joints entre les tronçons de gouttière se dégradent avec le temps. Un joint qui cède fait fuir l'eau directement sur la façade, ce qui ressemble à un débordement mais est en réalité une fuite. Le signe : l'eau coule toujours au même endroit précis, même par petite pluie.",
                  solution: "Remplacement du joint ou du raccord. Intervention rapide et peu coûteuse.",
                },
                {
                  num: "06",
                  title: "Gouttière décrochée ou déformée",
                  urgency: "Visible",
                  urgencyColor: "bg-blue-100 text-blue-700",
                  desc: "Une gouttière qui se détache du mur ou qui s'est déformée suite à un choc (branche, échelle) ou à la corrosion perd son alignement. L'eau ne s'écoule plus vers la descente mais coule directement sur la façade. Ce problème est souvent visible de la rue.",
                  solution: "Réparation ou remplacement du tronçon endommagé.",
                },
              ].map((cause) => (
                <div key={cause.num} className="border border-gray-100 rounded-xl overflow-hidden">
                  <div className="flex items-start gap-4 p-5">
                    <div className="text-2xl font-bold text-[#F97316] w-10 flex-shrink-0">{cause.num}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-bold text-gray-900">{cause.title}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cause.urgencyColor}`}>
                          {cause.urgency}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{cause.desc}</p>
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <CheckCircle size={14} className="text-[#1A4731] flex-shrink-0" />
                        <span className="text-sm text-gray-700"><strong>Solution :</strong> {cause.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Comment diagnostiquer la cause depuis le sol
            </h2>
            <p>
              Avant d&apos;appeler, vous pouvez souvent identifier la cause depuis le sol lors d&apos;une pluie. Voici comment :
            </p>
            <div className="space-y-3 my-5 not-prose">
              {[
                { q: "L'eau déborde sur toute la longueur de la gouttière", r: "→ Gouttière bouchée sur une grande portion ou pente incorrecte" },
                { q: "L'eau déborde uniquement à un endroit précis", r: "→ Bouchon localisé ou joint défaillant à cet endroit" },
                { q: "L'eau déborde juste au niveau de la descente", r: "→ Descente pluviale bouchée" },
                { q: "L'eau coule entre la gouttière et le mur", r: "→ Gouttière décrochée ou déformée vers l'arrière" },
                { q: "L'eau coule au même endroit même par petite pluie", r: "→ Joint ou raccord défaillant" },
                { q: "La gouttière penche visiblement d'un côté", r: "→ Crochet(s) lâché(s), pente à corriger" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-3 bg-gray-50 rounded-lg p-3 text-sm">
                  <span className="text-gray-700 font-medium sm:w-1/2">{item.q}</span>
                  <span className="text-[#1A4731] font-semibold sm:w-1/2">{item.r}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Ce qu&apos;il ne faut pas faire
            </h2>
            <p>
              Face à une gouttière qui déborde, certains réflexes peuvent aggraver la situation ou créer de nouveaux problèmes.
            </p>
            <div className="space-y-3 my-5 not-prose">
              {[
                { action: "Monter sur une échelle pendant la pluie", risk: "Risque de chute élevé. La toiture et l'échelle sont glissantes. Attendez que la pluie s'arrête." },
                { action: "Utiliser un tuyau d'arrosage pour déboucher", risk: "L'eau supplémentaire peut aggraver le débordement et pousser les débris dans la descente, créant un bouchon plus profond." },
                { action: "Attendre \"la prochaine pluie pour vérifier\"", risk: "Chaque épisode pluvieux aggrave les dégâts sur la façade. L'humidité s'accumule dans les matériaux." },
                { action: "Coller un joint avec du mastic depuis l'intérieur", risk: "Sans nettoyage préalable, le mastic ne tient pas. Et si la cause est un bouchon, le problème n'est pas résolu." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 border border-red-100 bg-red-50 rounded-xl p-4">
                  <div className="text-red-500 font-bold text-sm flex-shrink-0 mt-0.5">✕</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{item.action}</p>
                    <p className="text-gray-600 text-sm">{item.risk}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Tarifs d&apos;intervention à Bruxelles
            </h2>
            <p>
              Le coût dépend de la cause identifiée et de l&apos;accessibilité du bâtiment.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-5 not-prose">
              {[
                { service: "Nettoyage gouttières + descentes", price: "dès 80€", detail: "Maison mitoyenne 1–2 étages, accès normal" },
                { service: "Débouchage urgence 7j/7", price: "dès 120€", detail: "Intervention haute pression, prioritaire" },
                { service: "Remplacement joint ou raccord", price: "dès 60€", detail: "Par tronçon, hors remplacement gouttière" },
                { service: "Réparation crochet + reprise pente", price: "dès 80€", detail: "Par tronçon, inclut matériel et pose" },
              ].map((item) => (
                <div key={item.service} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.service}</p>
                  <p className="text-2xl font-extrabold text-[#F97316] mb-1">{item.price}</p>
                  <p className="text-gray-500 text-xs">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 italic not-prose">
              Devis gratuit avant toute intervention. Prix fixés à l&apos;avance, sans surprise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Les communes bruxelloises les plus touchées par les débordements
            </h2>
            <p>
              Les débordements ne sont pas uniformément répartis sur Bruxelles. Certaines communes cumulent plusieurs facteurs de risque.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 my-5 not-prose">
              {[
                { commune: "Uccle & Watermael", reason: "Arbres centenaires, feuilles abondantes d'octobre à janvier", href: "/communes/uccle" },
                { commune: "Anderlecht & Molenbeek", reason: "Humidité du canal, mousse rapide, bâti ouvrier dense", href: "/communes/anderlecht" },
                { commune: "Schaerbeek & Etterbeek", reason: "Maisons de rangée avec cours arrière étroites, accès difficile", href: "/communes/schaerbeek" },
              ].map((item) => (
                <div key={item.commune} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.commune}</h3>
                  <p className="text-gray-500 text-xs mb-3">{item.reason}</p>
                  <Link href={item.href} className="text-[#F97316] text-xs font-semibold hover:underline flex items-center gap-1">
                    Voir interventions <ArrowRight size={11} />
                  </Link>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Questions fréquentes</h2>
            <div className="space-y-4 not-prose">
              {[
                {
                  q: "Pourquoi ma gouttière déborde-t-elle seulement par endroits ?",
                  a: "Un débordement localisé indique généralement un bouchon dans la descente pluviale proche de ce point, ou un affaissement local de la gouttière qui crée une cuvette. L'eau s'accumule jusqu'à déborder plutôt que de s'écouler vers la descente.",
                },
                {
                  q: "Une gouttière qui déborde peut-elle causer des dégâts des eaux ?",
                  a: "Oui. En quelques heures de pluie intense, une gouttière débordante peut infiltrer la façade, saturer les fondations ou remonter sous les tuiles. Les dégâts des eaux qui en résultent coûtent en moyenne 10 à 20 fois plus cher qu'un débouchage préventif.",
                },
                {
                  q: "Combien coûte un débouchage d'urgence à Bruxelles ?",
                  a: "Le débouchage d'urgence est facturé entre 120 et 200€ selon l'accessibilité et la nature du bouchon. Nous intervenons 7j/7 à Bruxelles, souvent le jour même. Devis gratuit au 0477 23 41 87.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion : n&apos;attendez pas</h2>
            <p>
              Une gouttière qui déborde est un signal d&apos;alarme, pas un désagrément à tolérer. Dans la grande majorité des cas, la cause est simple et l&apos;intervention rapide — un nettoyage ou un débouchage suffit. Le coût est modeste comparé aux dégâts qu&apos;un débordement non traité peut causer sur votre façade, vos fondations ou vos combles.
            </p>
            <p>
              Si vous observez un débordement, faites intervenir un professionnel dans les 48 heures. Pas besoin d&apos;attendre un autre épisode pluvieux pour confirmer le problème.
            </p>
          </div>

          {/* CTA inline */}
          <div className="mt-10 bg-[#1A4731] rounded-2xl p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Gouttière qui déborde ? On intervient sous 48h</h3>
                <p className="text-gray-300 text-sm">Urgences 7j/7 · Devis gratuit · Intervention haute pression</p>
              </div>
              <a
                href="tel:0477234187"
                className="flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl whitespace-nowrap transition-colors"
              >
                <Phone size={18} />
                0477 23 41 87
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Demander une intervention rapide</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gouttière qui déborde ? Remplissez le formulaire ou appelez directement. Un technicien vous rappelle sous 2h.
              </p>
              <div className="space-y-3">
                {[
                  "Diagnostic gratuit sur place",
                  "Intervention sous 48h garantie",
                  "Urgences traitées le jour même",
                  "Devis 100% gratuit et sans engagement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#F97316]" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#1A4731] rounded-xl">
                <p className="text-white font-semibold mb-1 text-sm">Appel direct — urgence 7j/7</p>
                <a href="tel:0477234187" className="flex items-center gap-2 text-[#F97316] font-bold text-lg hover:text-orange-400 transition-colors">
                  <Phone size={20} />0477 23 41 87
                </a>
                <p className="text-gray-400 text-xs mt-1">Lun–Ven 7h30–18h | Sam 8h–14h | Urgences 7j/7</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-gray-900 font-bold text-lg mb-5">Formulaire de contact</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Pages liées</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Débouchage gouttières urgence", href: "/services/debouchage-gouttieres" },
              { label: "Nettoyage de gouttières", href: "/services/nettoyage-gouttieres" },
              { label: "Réparation gouttières", href: "/services/reparation-gouttieres" },
              { label: "Préparer ses gouttières pour l'automne", href: "/blog/preparer-gouttieres-automne-bruxelles" },
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
