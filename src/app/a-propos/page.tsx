import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_URL, ORGANIZATION_ID, EDITOR_ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "À propos : qui édite ce site et comment il fonctionne" },
  description:
    "Qui édite ce site (HqDigital), comment fonctionne la mise en relation gratuite avec un professionnel indépendant, et comment celui-ci est choisi.",
  alternates: { canonical: `${SITE_URL}/a-propos` },
};

const UPDATED = "2026-10-11";

const steps = [
  {
    t: "Vous décrivez votre besoin",
    d: "Par téléphone ou via le formulaire : commune, type de travaux (nettoyage, débouchage, réparation…), urgence éventuelle et un moyen de vous joindre.",
  },
  {
    t: "La demande est transmise",
    d: "Elle est envoyée à un professionnel indépendant qui intervient dans votre commune. Vos coordonnées servent uniquement à traiter cette demande.",
  },
  {
    t: "Il vous recontacte et établit le devis",
    d: "Le devis est gratuit et sans engagement. Vous restez libre de l'accepter ou non ; aucun frais ne vous est demandé pour la mise en relation.",
  },
];

const criteria = [
  "Un numéro d'entreprise actif à la Banque-Carrefour des Entreprises, vérifiable gratuitement en ligne",
  "Une assurance en responsabilité civile professionnelle pour le travail en hauteur",
  "Un prix annoncé avant l'intervention, sur la base d'un devis",
  "Une intervention possible dans les 19 communes de la Région bruxelloise",
];

export default function APropos() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/a-propos`,
    url: `${SITE_URL}/a-propos`,
    name: "À propos de Nettoyage Gouttières Bruxelles",
    inLanguage: "fr-BE",
    dateModified: UPDATED,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORGANIZATION_ID },
    author: { "@id": EDITOR_ID },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            À propos de Nettoyage Gouttières Bruxelles
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            Nettoyage Gouttières Bruxelles est un site d&apos;information et de mise en relation édité par
            HqDigital, une entreprise belge. Il explique l&apos;entretien des gouttières à Bruxelles et
            transmet votre demande de devis à un professionnel indépendant qui intervient dans votre
            commune. La demande est gratuite et sans engagement.
          </p>
          <p className="mt-4 text-xs text-green-200">
            Mis à jour le <time dateTime={UPDATED}>11 octobre 2026</time> · par Ilias, éditeur du site
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qui édite ce site ?</h2>
            <p className="mb-4">
              Le site est édité par Ilias, sous le nom commercial HqDigital (numéro d&apos;entreprise BCE
              BE 1043.624.483). Son rôle est double : rédiger et tenir à jour les guides d&apos;entretien
              publiés ici, et faire en sorte que chaque demande arrive rapidement chez un professionnel
              de la zone.
            </p>
            <p>
              HqDigital n&apos;intervient pas lui-même sur les toitures. Le professionnel qui vous
              recontacte est une entreprise indépendante : il est seul responsable de son devis, des
              travaux et de leur facturation. Les informations complètes sur l&apos;éditeur et
              l&apos;hébergeur figurent dans les{" "}
              <Link href="/mentions-legales" className="font-semibold text-[#1A4731] underline hover:text-[#F97316]">mentions légales</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment fonctionne la mise en relation ?</h2>
            <p className="mb-6">En trois étapes, sans inscription ni frais pour vous :</p>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F97316] font-bold text-white">{i + 1}</span>
                  <div>
                    <p className="font-bold text-gray-900">{s.t}</p>
                    <p className="text-sm mt-1">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment les professionnels sont-ils choisis ?</h2>
            <p className="mb-4">
              Il n&apos;existe pas d&apos;agrément officiel propre au nettoyage de gouttières. Les critères
              retenus sont donc des points que vous pouvez vérifier vous-même :
            </p>
            <ul className="space-y-3">
              {criteria.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#1A4731] flex-shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              Le numéro d&apos;entreprise de n&apos;importe quel artisan se vérifie sur le{" "}
              <a href="https://kbopub.economie.fgov.be/kbopub/zoeknummerform.html?lang=fr" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1A4731] underline hover:text-[#F97316]">site public de la Banque-Carrefour des Entreprises</a>{" "}
              (SPF Économie). Notre guide{" "}
              <Link href="/blog/choisir-entreprise-gouttieres-bruxelles" className="font-semibold text-[#1A4731] underline hover:text-[#F97316]">choisir une entreprise de gouttières à Bruxelles</Link>{" "}
              détaille les autres points à contrôler sur un devis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment les guides sont-ils rédigés ?</h2>
            <p className="mb-4">
              Les guides du{" "}
              <Link href="/blog" className="font-semibold text-[#1A4731] underline hover:text-[#F97316]">blog</Link>{" "}
              sont rédigés et relus par Ilias, et chaque page indique sa date de mise à jour. Les points
              juridiques (copropriété, bail, assurance) y sont présentés comme des principes généraux, à
              confirmer selon votre bail ou votre contrat ; les lieux cités dans les pages communes sont
              vérifiés un par un.
            </p>
            <p>
              Les prix affichés, sur la page{" "}
              <Link href="/tarifs" className="font-semibold text-[#1A4731] underline hover:text-[#F97316]">tarifs</Link>{" "}
              comme ailleurs, sont des fourchettes indicatives : le prix qui compte est celui du devis du
              professionnel. Une erreur ou une information dépassée ? Écrivez à
              contact@nettoyage-gouttieres-bruxelles.be.
            </p>
          </div>

          <div className="bg-[#1A4731] text-white rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-3">Faire une demande</h2>
            <p className="text-gray-200 text-sm mb-4">
              Gouttière qui déborde, nettoyage d&apos;automne ou réparation : décrivez votre besoin, un
              professionnel de votre commune vous recontacte avec un devis gratuit.
            </p>
            <div className="space-y-2 mb-4 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#F97316]" />
                <a href="tel:0451053370" className="text-[#F97316] font-bold">0451 05 33 70</a>
              </p>
              <p className="text-gray-300 text-xs">Lun–Ven 7h30–18h | Sam 8h–14h</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F97316] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-orange-500 transition-colors text-sm">
                Formulaire de demande <ArrowRight size={14} />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-4 py-2.5 rounded-lg hover:border-white text-sm">
                Voir les services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
