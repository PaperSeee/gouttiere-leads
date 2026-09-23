import { NextResponse } from "next/server";

interface LeadPayload {
  prenom?: unknown;
  nom?: unknown;
  telephone?: unknown;
  email?: unknown;
  commune?: unknown;
  intervention?: unknown;
  message?: unknown;
}

export async function POST(req: Request) {
  let data: LeadPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const prenom = String(data.prenom ?? "").trim();
  const nom = String(data.nom ?? "").trim();
  const telephone = String(data.telephone ?? "").trim();
  const commune = String(data.commune ?? "").trim();
  const intervention = String(data.intervention ?? "").trim();

  // Un seul champ « nom » dans le formulaire depuis la refonte : prénom facultatif.
  if (!(prenom || nom) || !telephone || !commune || !intervention) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const payload = {
    site: "nettoyage-gouttieres-bruxelles.be",
    prenom,
    nom,
    telephone,
    email: String(data.email ?? "").trim(),
    commune,
    intervention,
    message: String(data.message ?? "").trim(),
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.WEBHOOK_URL;
  if (!webhook) {
    console.error("WEBHOOK_URL is not configured; lead lost:", JSON.stringify(payload));
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`webhook_status_${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead webhook failed:", err, JSON.stringify(payload));
    return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
  }
}
