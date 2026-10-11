import Link from "next/link";
import { CheckCircle } from "lucide-react";

/**
 * Bloc de confiance placé près des boutons d'appel et de devis.
 * Uniquement des faits déjà affichés sur le site (devis gratuit, prix annoncé
 * avant l'intervention, zone) + la nature du service, expliquée sur /a-propos.
 */
export default function TrustNote({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-green-50/75" : "text-gray-600";
  const icon = tone === "dark" ? "text-[#7fd8a4]" : "text-[#1F7A55]";
  const link = tone === "dark" ? "text-white underline decoration-[#F97316]" : "text-[#133826] underline decoration-[#F97316]";
  return (
    <div className={`text-sm ${text} ${className}`}>
      <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
        {["Devis gratuit et sans engagement", "Prix annoncé avant l'intervention", "19 communes de Bruxelles"].map((t) => (
          <li key={t} className="flex items-center gap-1.5 font-semibold">
            <CheckCircle size={15} className={`shrink-0 ${icon}`} />
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-2 leading-snug">
        Votre demande est transmise à un professionnel indépendant qui intervient dans votre commune.{" "}
        <Link href="/a-propos" className={`font-semibold ${link}`}>
          Comment fonctionne le service
        </Link>
      </p>
    </div>
  );
}
