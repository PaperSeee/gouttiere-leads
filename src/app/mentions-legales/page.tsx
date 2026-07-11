import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions Légales — Nettoyage Gouttières Bruxelles",
  description: "Mentions légales de Nettoyage Gouttières Bruxelles conformément à la législation belge.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Identification de l&apos;entreprise</h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>Dénomination :</strong> Nettoyage Gouttières Bruxelles<br />
                <strong>Domaine :</strong> nettoyage-gouttieres-bruxelles.be<br />
                <strong>Adresse :</strong> Bruxelles, Belgique<br />
                <strong>Téléphone :</strong> 0451 05 33 70<br />
                <strong>Email :</strong> contact@nettoyage-gouttieres-bruxelles.be<br />
                <strong>Activité :</strong> Nettoyage, débouchage, réparation et entretien de gouttières
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Hébergement du site</h2>
              <p className="text-gray-600 leading-relaxed">
                Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Propriété intellectuelle</h2>
              <p className="text-gray-600 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, logos, structure) est la propriété
                exclusive de Nettoyage Gouttières Bruxelles. Toute reproduction, même partielle,
                est interdite sans autorisation préalable et écrite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Protection des données personnelles (RGPD)</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                belge du 30 juillet 2018, vous disposez des droits suivants sur vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Les données collectées via notre formulaire de contact (nom, prénom, téléphone, email)
                sont utilisées uniquement pour répondre à votre demande de devis. Elles ne sont jamais
                cédées à des tiers. Pour exercer vos droits, contactez-nous à :
                contact@nettoyage-gouttieres-bruxelles.be
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Ce site utilise uniquement des cookies techniques essentiels au fonctionnement du site.
                Aucun cookie de traçage ou de publicité n&apos;est utilisé sans votre consentement explicite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Responsabilité</h2>
              <p className="text-gray-600 leading-relaxed">
                Les informations fournies sur ce site sont données à titre indicatif. Les tarifs
                mentionnés sont des fourchettes indicatives susceptibles de varier selon les
                conditions d&apos;intervention. Nettoyage Gouttières Bruxelles s&apos;engage à fournir un
                devis précis et gratuit avant toute intervention.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Droit applicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes mentions légales sont régies par le droit belge. En cas de litige,
                les tribunaux compétents de l&apos;arrondissement judiciaire de Bruxelles seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour toute question relative à ces mentions légales ou à la protection de vos
                données personnelles :<br />
                Email : contact@nettoyage-gouttieres-bruxelles.be<br />
                Téléphone : 0451 05 33 70
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
