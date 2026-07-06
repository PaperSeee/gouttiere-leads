import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, AlertTriangle, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Débouchage Gouttières Urgence Bruxelles — 7j/7",
  description:
    "Débouchage urgent de gouttières et descentes pluviales à Bruxelles. Intervention 7j/7, haute pression. Débordement actif ? Appelez le 0477 23 41 87.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services/debouchage-gouttieres" },
  keywords: ["débouchage gouttières urgence Bruxelles", "gouttières bouchées Bruxelles", "débouchage descentes pluviales", "urgence gouttières 7j/7 Bruxelles"],
  openGraph: {
    type: "website",
    title: "Débouchage Gouttières Bruxelles — Urgence 7j/7",
    description: "Débouchage urgent gouttières et descentes pluviales à Bruxelles. Intervention haute pression 7j/7. Appelez le 0477 23 41 87.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Débouchage gouttières urgence Bruxelles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Débouchage Gouttières Bruxelles — Urgence 7j/7",
    description: "Débouchage urgent gouttières Bruxelles. Intervention 7j/7. 0477 23 41 87.",
    images: ["/opengraph-image"],
  },
};

export default function DebouchageGouttieres() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Débouchage gouttières urgence Bruxelles",
    provider: {
      "@type": "LocalBusiness",
      name: "Nettoyage Gouttières Bruxelles",
      telephone: "0477234187",
    },
    areaServed: "Bruxelles",
    description: "Service de débouchage d'urgence de gouttières et descentes pluviales à Bruxelles. Disponible 7j/7.",
    offers: {
      "@type": "Offer",
      priceRange: "120-200€",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/" },
          { label: "Débouchage urgence" },
        ]}
      />

      <section className="bg-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={24} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Urgence débouchage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Débouchage Gouttières en Urgence à Bruxelles
            </h1>
            <p className="text-red-100 text-lg mb-6 leading-relaxed">
              Vos gouttières débordent lors de fortes pluies ? L&apos;eau ruisselle le long de votre
              façade ? Nos techniciens interviennent en urgence 7j/7 pour déboucher vos gouttières
              et descentes pluviales avant que les dégâts ne s&apos;aggravent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-6 py-4 rounded-xl text-lg transition-colors">
                <Phone size={20} /> Urgence : 0477 23 41 87
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4 text-red-200 text-sm">
              <Clock size={16} />
              <span>Disponible 7j/7 — Intervention généralement le jour même en haute saison</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quand parle-t-on d&apos;urgence ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un débouchage en urgence s&apos;impose dès qu&apos;une gouttière déborde activement lors
                d&apos;une pluie. Ce débordement n&apos;est pas anodin : l&apos;eau qui ruisselle directement
                contre la façade peut s&apos;infiltrer dans les joints de maçonnerie, pénétrer sous
                les fenêtres ou saturer le sol autour des fondations. À Bruxelles, où les pluies
                automnales peuvent être intenses, chaque heure compte.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les descentes pluviales (ou tuyaux de chute) bouchées sont souvent plus problématiques
                que les gouttières elles-mêmes, car le problème est moins visible. Une descente obstruée
                peut provoquer un refoulement d&apos;eau vers la toiture, créant des zones de stagnation
                particulièrement néfastes en hiver lorsque l&apos;eau gèle et dilate.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Notre méthode d&apos;intervention urgence</h2>
              <div className="space-y-4">
                {[
                  { n: "01", title: "Diagnostic sur place", desc: "Localisation précise de l'obstruction : gouttière, collet, coude ou descente." },
                  { n: "02", title: "Débouchage manuel", desc: "Extraction des bouchons compacts à la main ou à l'aide d'outils spécialisés." },
                  { n: "03", title: "Rinçage haute pression", desc: "Nettoyage des résidus et vérification du débit dans toute la descente." },
                  { n: "04", title: "Test d'écoulement", desc: "Vérification finale par aspersion : l'eau doit s'écouler librement et sans retenue." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-red-100 text-red-700 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{step.n}</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Prévenir plutôt que guérir</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le meilleur moyen d&apos;éviter un débouchage d&apos;urgence est d&apos;entretenir ses gouttières
                régulièrement. Un nettoyage annuel en octobre, avant les grandes pluies d&apos;automne,
                suffit dans la plupart des cas. Dans les zones boisées de Bruxelles — Uccle, Watermael,
                Woluwe-Saint-Pierre — deux passages par an sont recommandés.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="font-semibold text-[#F97316] mb-1">Conseil pratique</p>
                <p className="text-gray-600 text-sm">
                  Après chaque grande tempête automnale, vérifiez visuellement que l&apos;eau s&apos;écoule
                  normalement par les descentes. Un filet d&apos;eau irrégulier ou l&apos;absence d&apos;écoulement
                  sont les premiers signes d&apos;une obstruction.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-700 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Urgence débouchage</h3>
                <p className="text-red-200 text-sm mb-4">Disponible 7j/7 — Intervention rapide</p>
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-sm text-red-200">Débouchage standard</span>
                    <span className="font-bold">120–160€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-red-200">Urgence weekend</span>
                    <span className="font-bold">160–200€</span>
                  </div>
                </div>
                <a href="tel:0477234187" className="flex items-center justify-center gap-2 bg-yellow-400 text-red-900 font-bold px-4 py-3 rounded-lg w-full hover:bg-yellow-300 transition-colors">
                  <Phone size={16} /> Appeler maintenant
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Ce qui est inclus</h3>
                <ul className="space-y-2">
                  {[
                    "Diagnostic de l'obstruction",
                    "Débouchage gouttières",
                    "Débouchage descentes pluviales",
                    "Rinçage et test écoulement",
                    "Rapport d'intervention",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-600 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-semibold text-[#1A4731] mb-2">Après l&apos;urgence</p>
                <p className="text-gray-600 text-sm mb-2">Évitez la prochaine urgence avec un entretien régulier :</p>
                <Link href="/services/nettoyage-gouttieres" className="text-[#F97316] text-sm font-semibold flex items-center gap-1">
                  Planifier un nettoyage <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Conseils & guides</h3>
                <ul className="space-y-1.5">
                  <li><Link href="/blog/gouttiere-qui-deborde-causes-solutions" className="text-sm text-gray-700 hover:text-[#F97316]">→ Gouttière qui déborde : causes</Link></li>
                  <li><Link href="/blog/orages-ete-gouttieres-bruxelles-checklist" className="text-sm text-gray-700 hover:text-[#F97316]">→ Orages d&apos;été : la checklist</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="devis" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Signaler un débordement</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ContactForm defaultIntervention="Débouchage urgent" />
          </div>
        </div>
      </section>
    </>
  );
}
