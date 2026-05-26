import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nettoyage Gouttières Bruxelles — Devis Gratuit, Intervention 48h";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f2419 0%, #1A4731 55%, #0f2419 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 20% 80%, rgba(249,115,22,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.1) 0%, transparent 50%)",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              background: "#F97316",
              borderRadius: "16px",
              width: "72px",
              height: "72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
            }}
          >
            🏠
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "42px", fontWeight: 900, color: "white", lineHeight: 1 }}>
              NETTOYAGE
            </span>
            <span style={{ fontSize: "42px", fontWeight: 900, color: "#F97316", lineHeight: 1 }}>
              GOUTTIÈRES
            </span>
          </div>
        </div>

        {/* Main tagline */}
        <div
          style={{
            fontSize: "34px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: "28px",
          }}
        >
          Expert gouttières à{" "}
          <span style={{ color: "#F97316" }}>Bruxelles</span>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["Devis gratuit", "Intervention 48h", "Urgences 7j/7"].map((text) => (
            <div
              key={text}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50px",
                padding: "10px 24px",
                fontSize: "20px",
                color: "white",
                fontWeight: 600,
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Phone */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "26px",
            fontWeight: 800,
            color: "#F97316",
          }}
        >
          📞 0477 23 41 87
        </div>
      </div>
    ),
    { ...size }
  );
}
