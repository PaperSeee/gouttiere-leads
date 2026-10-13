import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "Mentions légales | Gouttières Bruxelles" },
  description:
    "Mentions légales de nettoyage-gouttieres-bruxelles.be : éditeur HqDigital, hébergeur, nature du service de mise en relation et protection des données.",
  alternates: { canonical: "https://www.nettoyage-gouttieres-bruxelles.be/mentions-legales" },
  robots: { index: false, follow: true },
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
                <strong>Éditeur :</strong> Ilias Dorhmi, entreprise individuelle sous le nom commercial HqDigital, numéro d&apos;entreprise (BCE) BE 1043.624.483, Hof ter Lokerenstraat, 9320 Aalst (Belgique)<br />
                <strong>Responsable de la publication :</strong> Ilias Dorhmi<br />
                <strong>Zone d&apos;activité :</strong> Bruxelles, Belgique<br />
                <strong>Téléphone :</strong> 0451 05 33 70<br />
                <strong>Email :</strong> contact@nettoyage-gouttieres-bruxelles.be<br />
                <strong>Activité :</strong> Site d&apos;information et de mise en relation (nettoyage, débouchage, réparation et entretien de gouttières)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Hébergement du site</h2>
              <p className="text-gray-600 leading-relaxed">
                Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Nature du service</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Ce site est un service d&apos;information et de mise en relation. L&apos;éditeur n&apos;effectue
                lui-même aucune intervention : votre demande est transmise à un professionnel indépendant, seul
                responsable de son devis, de ses prix, de ses délais et des travaux qu&apos;il réalise. Le numéro
                affiché sur le site est un numéro de contact qui vous met en relation avec ce professionnel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les prix cités sur le site sont des prix indicatifs, pas un devis : le prix exact est fixé par le
                professionnel avant l&apos;intervention.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Propriété intellectuelle</h2>
              <p className="text-gray-600 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, logos, structure) est la propriété
                exclusive de l&apos;éditeur. Toute reproduction, même partielle,
                est interdite sans autorisation préalable et écrite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Protection des données personnelles (RGPD)</h2>
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
                Responsable du traitement : Ilias Dorhmi (HqDigital), à l&apos;adresse indiquée ci-dessus.
                Les données saisies dans le formulaire (nom, téléphone, e-mail, commune, type d&apos;intervention, message) servent uniquement
                à traiter votre demande de devis : elles sont transmises au professionnel indépendant qui
                intervient dans votre commune, et à personne d&apos;autre. Elles ne sont ni vendues ni
                utilisées à des fins publicitaires. Pour exercer vos droits, écrivez à :
                contact@nettoyage-gouttieres-bruxelles.be
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Mesure d&apos;audience et cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>Umami</strong> mesure la fréquentation (pages vues, clics sur les boutons d&apos;appel et
                de devis) sans cookie et sans vous identifier.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>Microsoft Clarity</strong> (Microsoft Ireland Operations Ltd) mesure les pages vues, les
                clics et le défilement, et peut relire des sessions de navigation, les saisies dans les formulaires
                étant masquées. Ses cookies ne sont déposés qu&apos;après votre accord dans le bandeau affiché lors de
                la première visite ; sans accord, Clarity fonctionne sans cookie.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Google Analytics 4</strong> (Google Ireland Ltd), lorsqu&apos;il est activé sur le site, ne
                dépose ses cookies qu&apos;après votre accord. Aucun cookie publicitaire n&apos;est utilisé. Vous
                pouvez changer d&apos;avis en effaçant les données du site dans votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Responsabilité</h2>
              <p className="text-gray-600 leading-relaxed">
                Les informations fournies sur ce site sont données à titre indicatif. Les tarifs
                mentionnés sont des fourchettes indicatives susceptibles de varier selon les
                conditions d&apos;intervention. Le devis précis est établi gratuitement par le professionnel
                indépendant, avant toute intervention.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Droit applicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes mentions légales sont régies par le droit belge. En cas de litige,
                les tribunaux compétents de l&apos;arrondissement judiciaire de Bruxelles seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h2>
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
