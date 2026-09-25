import { NextResponse } from "next/server";

// Demandes du site → scénario Make « Webhooks → Google Sheets » (le même pour
// tous les sites leadgen). Format commun : site | name | phone | commune |
// message | page | receivedAt. Accepte le JSON (formulaire React) ET un envoi
// de formulaire HTML classique (fonctionne même sans JavaScript).
const SITE = "nettoyage-gouttieres-bruxelles.be";
const MAKE_WEBHOOK = "https://hook.eu1.make.com/9rl39iles3anfazn0o322yorpku1wwwj";
const SUCCESS_PATH = "/";
const ERROR_PATH = "/";

export async function POST(req: Request) {
  const isJson = (req.headers.get("content-type") || "").includes("application/json");
  const reply = (ok: boolean, error: string | null, status: number) =>
    isJson
      ? NextResponse.json(ok ? { ok: true } : { ok: false, error }, { status })
      : NextResponse.redirect(new URL(ok ? SUCCESS_PATH : ERROR_PATH, req.url), 303);

  const d: Record<string, string> = {};
  try {
    if (isJson) {
      const j = (await req.json()) as Record<string, unknown>;
      for (const [k, v] of Object.entries(j ?? {})) d[k] = String(v ?? "").trim();
    } else {
      const fd = await req.formData();
      fd.forEach((v, k) => { if (typeof v === "string") d[k] = v.trim(); });
    }
  } catch {
    return reply(false, "invalid_body", 400);
  }

  // Anti-spam : champ caché « website » rempli = robot → on fait semblant.
  if (d.website) return reply(true, null, 200);

  const pick = (...keys: string[]) => keys.map((k) => d[k] || "").find(Boolean) || "";
  const name = pick("name") || [d.prenom, d.nom].filter(Boolean).join(" ");
  const phone = pick("phone", "telephone", "tel");
  const email = pick("email");
  if (!phone && !email) return reply(false, "missing_fields", 400);

  const service = pick("intervention", "service", "type");
  const extras = [service && `Demande : ${service}`, email && `E-mail : ${email}`, d.adresse && `Adresse : ${d.adresse}`].filter(Boolean).join(" · ");
  let page = d.page || "";
  if (!page) { try { page = new URL(req.headers.get("referer") || "").pathname; } catch { /* inconnu */ } }

  const payload = {
    site: SITE,
    name,
    phone,
    commune: pick("commune", "adresse"),
    message: [d.message, extras].filter(Boolean).join(" — "),
    page,
    receivedAt: new Date().toISOString(),
    email,
    service,
  };

  try {
    const res = await fetch(process.env.WEBHOOK_URL || MAKE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`webhook_status_${res.status}`);
    return reply(true, null, 200);
  } catch (err) {
    console.error("Lead webhook failed:", err, JSON.stringify(payload));
    return reply(false, "webhook_failed", 502);
  }
}
