import { ImageResponse } from "next/og";

export const alt = "Nettoyage Gouttières Bruxelles — devis gratuit, intervention sous 48h";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f2e1f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-160px",
            top: "-160px",
            width: "620px",
            height: "620px",
            borderRadius: "620px",
            background: "radial-gradient(circle, rgba(31,122,85,0.55) 0%, rgba(31,122,85,0) 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <svg width="96" height="96" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="13" fill="#133826" />
            <path d="M8 19.5 24 9l16 10.5" fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 23h29v2.2a5 5 0 0 1-5 5h-19a5 5 0 0 1-5-5Z" fill="#7fd8a4" />
            <path d="M31 30.2h4.4v5.6H31z" fill="#7fd8a4" />
            <path d="M33.2 37.6s-2.6 2.9-2.6 4.4a2.6 2.6 0 0 0 5.2 0c0-1.5-2.6-4.4-2.6-4.4Z" fill="#f97316" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "46px", fontWeight: 800, color: "white" }}>Nettoyage Gouttières</span>
            <span style={{ fontSize: "22px", fontWeight: 700, color: "#f97316", letterSpacing: "6px" }}>BRUXELLES</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "62px", fontWeight: 800, color: "white", lineHeight: 1.1 }}>Des gouttières qui</span>
          <span style={{ fontSize: "62px", fontWeight: 800, color: "#7fd8a4", lineHeight: 1.1 }}>ne débordent plus.</span>
          <span style={{ fontSize: "28px", color: "#d1fae5", marginTop: "22px" }}>
            Nettoyage · débouchage · réparation · démoussage — 19 communes
          </span>
        </div>

        <div style={{ display: "flex", gap: "18px" }}>
          <div style={{ display: "flex", background: "#f97316", color: "white", borderRadius: "18px", padding: "16px 30px", fontSize: "30px", fontWeight: 800 }}>
            Devis gratuit
          </div>
          <div style={{ display: "flex", border: "2px solid rgba(255,255,255,0.3)", color: "white", borderRadius: "18px", padding: "16px 30px", fontSize: "30px", fontWeight: 700 }}>
            Intervention sous 48h
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
