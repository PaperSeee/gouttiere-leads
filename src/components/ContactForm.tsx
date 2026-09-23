"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Phone } from "lucide-react";

const communes = [
  "Anderlecht",
  "Auderghem",
  "Berchem-Sainte-Agathe",
  "Bruxelles-Ville",
  "Etterbeek",
  "Evere",
  "Forest",
  "Ganshoren",
  "Ixelles",
  "Jette",
  "Koekelberg",
  "Molenbeek-Saint-Jean",
  "Saint-Gilles",
  "Saint-Josse-ten-Noode",
  "Schaerbeek",
  "Uccle",
  "Watermael-Boitsfort",
  "Woluwe-Saint-Lambert",
  "Woluwe-Saint-Pierre",
  "Périphérie de Bruxelles",
];

const interventionTypes = [
  "Nettoyage gouttières",
  "Débouchage urgent",
  "Réparation gouttières",
  "Démoussage toiture",
  "Protection anti-feuilles",
  "Contrat d'entretien annuel",
  "Autre",
];

interface ContactFormProps {
  defaultCommune?: string;
  defaultIntervention?: string;
  /** Version courte (accueil, encarts) : message masqué, champs sur une colonne. */
  compact?: boolean;
}

const field =
  "w-full rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#1F7A55] focus:outline-none focus:ring-4 focus:ring-[#1F7A55]/15";
const label = "mb-1.5 block text-sm font-bold text-gray-800";

export default function ContactForm({ defaultCommune, defaultIntervention, compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    commune: defaultCommune && communes.includes(defaultCommune) ? defaultCommune : defaultCommune === "Bruxelles" ? "Bruxelles-Ville" : "",
    intervention: defaultIntervention || "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // prenom reste envoyé (vide) pour garder le même format côté webhook.
        body: JSON.stringify({ prenom: "", ...form }),
      });
      if (!res.ok) throw new Error("request_failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-7 text-center">
        <CheckCircle size={44} className="mx-auto mb-3 text-green-600" />
        <h3 className="mb-2 text-xl font-bold text-green-900">Demande envoyée !</h3>
        <p className="text-green-800">
          Nous avons bien reçu votre demande. Un technicien vous rappelle pour fixer l&apos;intervention.
        </p>
        <p className="mt-3 text-sm text-green-700">
          Besoin urgent ?{" "}
          <a href="tel:0451053370" className="font-semibold underline">
            Appelez le 0451 05 33 70
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid grid-cols-1 gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="cf-nom" className={label}>Votre nom *</label>
          <input id="cf-nom" type="text" name="nom" required autoComplete="name" value={form.nom} onChange={handleChange} className={field} placeholder="Jean Dupont" />
        </div>
        <div>
          <label htmlFor="cf-tel" className={label}>Téléphone *</label>
          <input id="cf-tel" type="tel" name="telephone" required autoComplete="tel" value={form.telephone} onChange={handleChange} className={field} placeholder="04xx xx xx xx" />
        </div>
        <div>
          <label htmlFor="cf-commune" className={label}>Commune *</label>
          <select id="cf-commune" name="commune" required value={form.commune} onChange={handleChange} className={field}>
            <option value="" disabled>Sélectionnez votre commune</option>
            {communes.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-type" className={label}>Intervention *</label>
          <select id="cf-type" name="intervention" required value={form.intervention} onChange={handleChange} className={field}>
            <option value="" disabled>Type d&apos;intervention</option>
            {interventionTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        {!compact && (
          <div>
            <label htmlFor="cf-email" className={label}>E-mail <span className="font-normal text-gray-500">(facultatif)</span></label>
            <input id="cf-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} className={field} placeholder="jean@exemple.be" />
          </div>
        )}
      </div>

      {!compact && (
        <div>
          <label htmlFor="cf-msg" className={label}>Message <span className="font-normal text-gray-500">(facultatif)</span></label>
          <textarea
            id="cf-msg"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            className={field}
            placeholder="Longueur approximative des gouttières, hauteur du bâtiment, urgence…"
          />
        </div>
      )}

      {error && (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <span>
            L&apos;envoi a échoué. Appelez-nous directement au{" "}
            <a href="tel:0451053370" className="font-semibold underline">0451 05 33 70</a>.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-4 text-base font-extrabold text-white shadow-[0_10px_24px_-10px_rgba(249,115,22,0.8)] transition hover:bg-[#EA580C] disabled:opacity-60"
      >
        <Send size={18} />
        {loading ? "Envoi en cours…" : "Recevoir mon devis gratuit"}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-gray-500">
        Gratuit et sans engagement · ou appelez le
        <a href="tel:0451053370" className="inline-flex items-center gap-1 text-[#1F7A55] underline">
          <Phone size={12} />
          0451 05 33 70
        </a>
      </p>
    </form>
  );
}
