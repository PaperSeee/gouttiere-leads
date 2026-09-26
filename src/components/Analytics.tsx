"use client";

/**
 * Mesure des conversions : GA4 (si NEXT_PUBLIC_GA_ID est défini) + suivi des clics
 * sur les liens tel: et WhatsApp, envoyés à GA4 et à Microsoft Clarity.
 * GA4 démarre en Consent Mode v2 « denied » et suit le choix du bandeau cookies
 * (même clé localStorage que le composant Clarity).
 */
import Script from "next/script";
import { useEffect } from "react";
import { CONSENT_EVENT } from "./Clarity";

type W = Window & {
  gtag?: (...a: unknown[]) => void;
  clarity?: (...a: unknown[]) => void;
};

const CONSENT_KEY = "ck-consent";

function consentState(): "granted" | "denied" {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "true" || v === "accepted" || v === "all" ? "granted" : "denied";
  } catch {
    return "denied";
  }
}

export default function Analytics({ gaId }: { gaId?: string }) {
  useEffect(() => {
    const w = window as W;

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const kind = href.startsWith("tel:") ? "phone_click" : /wa\.me|whatsapp/i.test(href) ? "whatsapp_click" : null;
      if (!kind) return;
      const params = { link_url: href, page_path: window.location.pathname, link_text: (link.textContent || "").trim().slice(0, 60) };
      w.gtag?.("event", kind, params);
      w.clarity?.("event", kind);
    };

    const syncConsent = () => w.gtag?.("consent", "update", { analytics_storage: consentState() });

    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener(CONSENT_EVENT, syncConsent);
    window.addEventListener("storage", syncConsent);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener(CONSENT_EVENT, syncConsent);
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
var s="denied";try{var v=localStorage.getItem("${CONSENT_KEY}");if(v==="granted"||v==="true"||v==="accepted"||v==="all")s="granted";}catch(e){}
gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:s});
gtag("js",new Date());gtag("config","${gaId}");`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
    </>
  );
}
