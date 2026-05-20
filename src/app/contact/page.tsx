import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Nettoyage Gouttières Bruxelles — Devis Gratuit",
  description:
    "Contactez Nettoyage Gouttières Bruxelles pour votre devis gratuit. Téléphone : 0477 23 41 87. Réponse en moins de 2h en heures ouvrables.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/contact" },
};

export default function Contact() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Demandez votre devis gratuit ou posez-nous vos questions. Nous répondons dans les 2 heures
            en heures ouvrables.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Coordonnées */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                    <Phone size={22} className="text-[#1A4731]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <a href="tel:0477234187" className="text-[#F97316] font-bold text-xl hover:text-orange-500 transition-colors">
                      0477 23 41 87
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Lun–Ven 7h30–18h | Sam 8h–14h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                    <MessageCircle size={22} className="text-[#1A4731]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a
                      href="https://wa.me/32477234187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold text-lg hover:underline"
                    >
                      Écrire sur WhatsApp
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Réponse rapide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                    <Mail size={22} className="text-[#1A4731]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:contact@nettoyage-gouttieres-bruxelles.be"
                      className="text-[#1A4731] hover:text-[#F97316] transition-colors text-sm break-all"
                    >
                      contact@nettoyage-gouttieres-bruxelles.be
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin size={22} className="text-[#1A4731]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Zone d&apos;intervention</p>
                    <p className="text-gray-600 text-sm">
                      Bruxelles-Capitale — Uccle, Ixelles, Woluwe-Saint-Pierre,
                      Woluwe-Saint-Lambert, Auderghem, Watermael-Boitsfort,
                      Etterbeek, Forest, Schaerbeek
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                    <Clock size={22} className="text-[#1A4731]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Horaires</p>
                    <p className="text-gray-600 text-sm">Lundi – Vendredi : 7h30 – 18h00</p>
                    <p className="text-gray-600 text-sm">Samedi : 8h00 – 14h00</p>
                    <p className="text-[#F97316] text-sm font-semibold mt-1">Urgences débouchage : 7j/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-5">
                <p className="font-bold text-[#F97316] mb-1">Devis toujours gratuit</p>
                <p className="text-gray-600 text-sm">
                  Nous ne facturons jamais le déplacement pour établir un devis.
                  Votre visite d&apos;inspection est entièrement gratuite et sans engagement.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Formulaire de contact</h2>
              <div className="bg-gray-50 rounded-2xl p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
