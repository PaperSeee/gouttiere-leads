import Script from "next/script";

// Mesure d'audience Umami, sans cookie (pas de bandeau requis). Le script est servi par le site (/u/, réécrit
// vers l'instance Umami dans vercel.json) ; les mesures partent vers l'instance, sur un chemin renommé (/api/stats).
const HOTE = "https://umami-stats-tau.vercel.app";
// Événements : clic vers Amazon (avec le domaine Amazon), appel, WhatsApp, formulaire envoyé.
const EVENEMENTS = `(function(){
  function t(n,d){ if (window.umami) window.umami.track(n, Object.assign({ page: location.pathname }, d || {})); }
  document.addEventListener("click", function(e){
    var a = e.target && e.target.closest ? e.target.closest("a") : null; if (!a) return;
    var h = a.getAttribute("href") || "";
    if (/(^|\\.)amazon\\./.test(a.hostname)) t("amazon", { marche: a.hostname.replace(/^www\\./, "") });
    else if (h.indexOf("tel:") === 0) t("appel");
    else if (/wa\\.me|whatsapp/i.test(h)) t("whatsapp");
  }, true);
  document.addEventListener("submit", function(){ t("formulaire"); }, true);
})();`;

export default function Umami({ id }: { id: string }) {
  return (
    <>
      <Script src="/u/stats.js" data-website-id={id} data-host-url={HOTE} strategy="afterInteractive" />
      <Script id="umami-evenements" strategy="afterInteractive">
        {EVENEMENTS}
      </Script>
    </>
  );
}
