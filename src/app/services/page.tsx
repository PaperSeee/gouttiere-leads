import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "Services gouttières à Bruxelles | Gouttières Bruxelles" },
  description:
    "Nettoyage dès 80 €, débouchage dès 120 €, réparation, démoussage 3–6 €/m², protection anti-feuilles et contrat d'entretien. Devis gratuit à Bruxelles.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/services" },
};

const services = [
  { href: "/services/nettoyage-gouttieres", title: "Nettoyage de gouttières", price: "dès 80 €", desc: "Feuilles, mousses et boues retirées, descentes pluviales comprises, écoulement testé avant de partir." },
  { href: "/services/debouchage-gouttieres", title: "Débouchage de gouttières et descentes", price: "120 – 200 €", desc: "Gouttière qui déborde ou descente bouchée : intervention 7j/7, test d'écoulement inclus." },
  { href: "/services/reparation-gouttieres", title: "Réparation et remplacement", price: "joint dès 40 €", desc: "Joints, soudures, crochets, tronçons en PVC, aluminium ou zinc, chéneaux de corniche." },
  { href: "/services/demoussage-toiture", title: "Démoussage de toiture", price: "3 – 6 €/m²", desc: "Brossage et traitement anti-mousse : moins de débris dans les gouttières." },
  { href: "/services/protection-gouttieres", title: "Protection anti-feuilles", price: "sur devis", desc: "Grilles et crapaudines pour espacer les nettoyages sous les grands arbres." },
  { href: "/services/contrat-entretien-gouttieres", title: "Contrat d'entretien annuel", price: "-10 % sur le tarif", desc: "Passages planifiés chaque année, idéal pour les copropriétés et les maisons sous les arbres." },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />
      <section className="bg-[#1A4731] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Nos services gouttières à Bruxelles</h1>
          <p className="text-green-100 text-lg max-w-3xl">
            Du nettoyage annuel au remplacement d&apos;un chéneau en zinc, tous nos services sont proposés sur devis gratuit,
            avec un prix fixé avant l&apos;intervention, dans les 19 communes de la Région bruxelloise.
          </p>
          <a href="tel:0451053370" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3.5 font-bold text-white hover:bg-orange-500">
            <Phone size={18} /> 0451 05 33 70
          </a>
        </div>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="group flex h-full flex-col rounded-2xl border border-gray-200 p-6 hover:border-[#1A4731] hover:bg-gray-50">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-lg font-bold text-gray-900 group-hover:text-[#1A4731]">{s.title}</span>
                    <span className="shrink-0 rounded-lg bg-orange-50 px-2 py-1 text-xs font-bold text-[#F97316]">{s.price}</span>
                  </span>
                  <span className="mt-2 text-sm text-gray-600">{s.desc}</span>
                  <ArrowRight size={16} className="mt-4 text-gray-300 group-hover:text-[#F97316]" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-gray-600">
            Toutes les fourchettes de prix sont détaillées sur la page{" "}
            <Link href="/tarifs" className="font-semibold text-[#1A4731] underline hover:text-[#F97316]">tarifs des gouttières à Bruxelles</Link>
            , et les matériaux sont comparés dans notre guide des{" "}
            <Link href="/types-gouttieres" className="font-semibold text-[#1A4731] underline hover:text-[#F97316]">types de gouttières</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
