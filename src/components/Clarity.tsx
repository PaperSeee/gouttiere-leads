"use client";

/**
 * Microsoft Clarity + consentement (Consent API v2).
 * - Le tag est toujours chargé avec le signal « refusé » tant que le visiteur n'a pas accepté : sans accord, pas de cookie.
 * - storageKey : clé localStorage du bandeau cookies existant du site (s'il y en a un).
 *   Sinon (ownBanner), ce composant affiche un petit bandeau FR/NL non bloquant.
 */
import Script from "next/script";
import { useEffect, useState } from "react";

type Props = { id: string; storageKey?: string; ownBanner?: boolean };
type W = Window & { clarity?: (...a: unknown[]) => void };

const KEY_DEFAULT = "ck-consent";
export const CONSENT_EVENT = "ck-consent-change";

function apply(v: string | null) {
  const w = window as W;
  if (!w.clarity) return; // pas encore de choix (null) = refusé
  const granted = v === "granted" || v === "true" || v === "accepted" || v === "all";
  w.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: granted ? "granted" : "denied" });
}

function read(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

export default function Clarity({ id, storageKey, ownBanner = !storageKey }: Props) {
  const key = storageKey || KEY_DEFAULT;
  const [show, setShow] = useState(false);
  const [nl, setNl] = useState(false);

  useEffect(() => {
    setNl((document.documentElement.lang || "").toLowerCase().startsWith("nl"));
    const sync = () => apply(read(key));
    sync();
    if (ownBanner && read(key) === null) setShow(true);
    const t = window.setTimeout(sync, 1500);
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [key, ownBanner]);

  const choose = (v: "granted" | "denied") => {
    try { localStorage.setItem(key, v); } catch {}
    apply(v);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setShow(false);
  };

  return (
    <>
      <Script id="ms-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${id}");
try{var v=localStorage.getItem("${key}");clarity("consentv2",{ad_Storage:"denied",analytics_Storage:(v==="granted"||v==="true"||v==="accepted"||v==="all")?"granted":"denied"});}catch(e){}`}
      </Script>
      {show && (
        <div
          role="region"
          aria-label="Cookies"
          style={{
            position: "fixed", left: 8, right: 8, bottom: 88, zIndex: 60, maxWidth: 520, margin: "0 auto",
            background: "#fff", color: "#1f2937", border: "1px solid #e5e7eb", borderRadius: 14,
            boxShadow: "0 10px 30px rgba(0,0,0,.15)", padding: "12px 14px", fontSize: 13, lineHeight: 1.4,
          }}
        >
          <p style={{ margin: 0 }}>
            {nl
              ? "We meten hoe deze site wordt gebruikt (Microsoft Clarity) om hem te verbeteren. Accepteert u meetcookies?"
              : "Nous mesurons l'utilisation du site (Microsoft Clarity) pour l'améliorer. Acceptez-vous les cookies de mesure ?"}
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <button type="button" onClick={() => choose("denied")}
              style={{ flex: 1, padding: "8px 10px", borderRadius: 10, border: "1px solid #d1d5db", background: "#fff", color: "#374151", fontWeight: 600, cursor: "pointer" }}>
              {nl ? "Weigeren" : "Refuser"}
            </button>
            <button type="button" onClick={() => choose("granted")}
              style={{ flex: 1, padding: "8px 10px", borderRadius: 10, border: 0, background: "#111827", color: "#fff", fontWeight: 600, cursor: "pointer" }}>
              {nl ? "Accepteren" : "Accepter"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
