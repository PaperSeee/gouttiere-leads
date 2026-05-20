import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Award, Clock, Droplets } from "lucide-react";

const communes = [
  { name: "Uccle", slug: "uccle" },
  { name: "Ixelles", slug: "ixelles" },
  { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
  { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
  { name: "Auderghem", slug: "auderghem" },
  { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
  { name: "Etterbeek", slug: "etterbeek" },
  { name: "Forest", slug: "forest" },
  { name: "Schaerbeek", slug: "schaerbeek" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A4731] text-gray-300">
      {/* Trust badges */}
      <div className="border-b border-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield size={24} className="text-[#F97316]" />
              <span className="text-sm font-semibold text-white">Certifié</span>
              <span className="text-xs">Nettoyage gouttières</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award size={24} className="text-[#F97316]" />
              <span className="text-sm font-semibold text-white">Assurance RC Pro</span>
              <span className="text-xs">Couverture complète</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock size={24} className="text-[#F97316]" />
              <span className="text-sm font-semibold text-white">Intervention 48h</span>
              <span className="text-xs">Réponse rapide</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Droplets size={24} className="text-[#F97316]" />
              <span className="text-sm font-semibold text-white">Devis gratuit</span>
              <span className="text-xs">Sans engagement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* NAP */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Nettoyage Gouttières{" "}
              <span className="text-[#F97316]">Bruxelles</span>
            </h3>
            <p className="text-sm mb-4 text-gray-400">
              Vos gouttières nettoyées avant l&apos;automne — Devis gratuit, intervention
              rapide, garantie satisfaction.
            </p>
            <address className="not-italic space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span>Bruxelles, Belgique</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#F97316] flex-shrink-0" />
                <a href="tel:0477234187" className="hover:text-white transition-colors">
                  0477 23 41 87
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#F97316] flex-shrink-0" />
                <a
                  href="mailto:contact@nettoyage-gouttieres-bruxelles.be"
                  className="hover:text-white transition-colors text-xs"
                >
                  contact@nettoyage-gouttieres-bruxelles.be
                </a>
              </div>
            </address>
          </div>

          {/* Communes */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos communes</h3>
            <ul className="space-y-1.5 text-sm">
              {communes.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/communes/${c.slug}`}
                    className="hover:text-[#F97316] transition-colors py-1 block"
                  >
                    Gouttières {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos services</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/services/nettoyage-gouttieres" className="hover:text-[#F97316] transition-colors">
                  Nettoyage gouttières
                </Link>
              </li>
              <li>
                <Link href="/services/debouchage-gouttieres" className="hover:text-[#F97316] transition-colors">
                  Débouchage urgence
                </Link>
              </li>
              <li>
                <Link href="/services/reparation-gouttieres" className="hover:text-[#F97316] transition-colors">
                  Réparation / remplacement
                </Link>
              </li>
              <li>
                <Link href="/services/demoussage-toiture" className="hover:text-[#F97316] transition-colors">
                  Démoussage toiture
                </Link>
              </li>
              <li>
                <Link href="/types-gouttieres" className="hover:text-[#F97316] transition-colors">
                  Types de gouttières
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-[#F97316] transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F97316] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/a-propos" className="hover:text-[#F97316] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F97316] transition-colors">
                  Blog & Conseils
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F97316] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-[#F97316] transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-[#133826] rounded-lg text-sm">
              <p className="text-white font-semibold">Horaires</p>
              <p className="text-xs mt-1">Lun–Ven : 7h30–18h</p>
              <p className="text-xs">Sam : 8h–14h</p>
              <p className="text-xs text-[#F97316] font-medium mt-1">
                Urgences débouchage 7j/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Nettoyage Gouttières Bruxelles. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
