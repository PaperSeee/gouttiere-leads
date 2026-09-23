/** Façade bruxelloise : gouttière bouchée qui déborde (avant) / gouttière dégagée (après). Illustration, pas une photo de chantier. */
export default function GutterIllustration({ className = "" }: { className?: string }) {
  const leaves = [
    { x: 58, y: 121, r: -20, c: "#b45309" },
    { x: 74, y: 118, r: 30, c: "#65a30d" },
    { x: 90, y: 122, r: -40, c: "#ca8a04" },
    { x: 106, y: 117, r: 15, c: "#b45309" },
    { x: 124, y: 121, r: -10, c: "#4d7c0f" },
    { x: 140, y: 118, r: 40, c: "#ca8a04" },
    { x: 158, y: 122, r: -30, c: "#b45309" },
    { x: 176, y: 117, r: 20, c: "#65a30d" },
    { x: 194, y: 121, r: -15, c: "#ca8a04" },
    { x: 212, y: 118, r: 35, c: "#b45309" },
    { x: 232, y: 122, r: -25, c: "#4d7c0f" },
  ];
  const windows = [
    [92, 170], [188, 170], [292, 170], [384, 170],
    [92, 258], [188, 258], [292, 258], [384, 258],
  ];
  return (
    <svg viewBox="0 0 520 440" role="img" aria-label="Gouttière bouchée qui déborde, puis gouttière nettoyée" className={className}>
      {/* toit */}
      <path d="M44 118h432l-38-58H82z" fill="#475569" />
      {[74, 86, 98, 110].map((y) => (
        <path key={y} d={`M${82 - (y - 60) * 0.65} ${y}h${356 + (y - 60) * 1.3}`} stroke="#64748b" strokeWidth="2" />
      ))}

      {/* façade en briques */}
      <rect x="56" y="136" width="408" height="284" fill="#b9694b" />
      {Array.from({ length: 13 }).map((_, i) => (
        <path key={i} d={`M56 ${148 + i * 21}h408`} stroke="#a55a3e" strokeWidth="1.5" />
      ))}
      <rect x="56" y="136" width="408" height="10" fill="#e7e2d8" />

      {/* fenêtres */}
      {windows.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 4} y={y - 4} width="56" height="74" rx="3" fill="#e7e2d8" />
          <rect x={x} y={y} width="48" height="66" fill="#1e3a4c" />
          <path d={`M${x + 24} ${y}v66M${x} ${y + 30}h48`} stroke="#e7e2d8" strokeWidth="3" />
        </g>
      ))}
      <rect x="236" y="348" width="48" height="72" rx="3" fill="#3f2a1e" />

      {/* taches d'humidité sous le débordement */}
      <path d="M92 146c10 40 4 80 16 120 8 26 2 50 6 80h-40c6-40-6-70 2-110 6-30 4-60 16-90z" fill="#7c3f2a" opacity=".45" />
      <path d="M170 146c8 30 2 60 10 90 6 20 0 40 4 60h-30c4-30-4-50 2-80 4-24 4-46 14-70z" fill="#7c3f2a" opacity=".35" />

      {/* gouttière */}
      <path d="M36 118h448v10a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12z" fill="#94a3b8" />
      <path d="M36 118h448" stroke="#cbd5e1" strokeWidth="3" />

      {/* descente (côté propre) */}
      <rect x="451" y="138" width="14" height="282" rx="4" fill="#94a3b8" />
      <path d="M451 400h14" stroke="#cbd5e1" strokeWidth="3" />

      {/* feuilles côté « avant » */}
      {leaves.map((l, i) => (
        <ellipse key={i} cx={l.x} cy={l.y} rx="9" ry="4.5" fill={l.c} transform={`rotate(${l.r} ${l.x} ${l.y})`} />
      ))}

      {/* débordement */}
      {[100, 178].map((x) => (
        <g key={x}>
          <path d={`M${x} 140c-4 30 4 60 0 96`} stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".9" />
          <path d={`M${x - 3} 252s-5 6-5 9a5 5 0 0 0 10 0c0-3-5-9-5-9z`} fill="#38bdf8" />
          <path d={`M${x + 2} 276s-4 5-4 7.5a4 4 0 0 0 8 0c0-2.5-4-7.5-4-7.5z`} fill="#38bdf8" opacity=".8" />
        </g>
      ))}

      {/* séparation avant / après */}
      <path d="M260 26v404" stroke="#ffffff" strokeWidth="3" strokeDasharray="8 8" opacity=".9" />

      {/* étiquettes */}
      <g fontFamily="Arial, sans-serif" fontWeight="800" fontSize="15">
        <rect x="92" y="14" width="96" height="32" rx="16" fill="#dc2626" />
        <text x="140" y="35" textAnchor="middle" fill="#ffffff">Avant</text>
        <rect x="332" y="14" width="96" height="32" rx="16" fill="#16a34a" />
        <text x="380" y="35" textAnchor="middle" fill="#ffffff">Après</text>
      </g>

      {/* eau évacuée par la descente */}
      <path d="M458 424s-6 7-6 10.5a6 6 0 0 0 12 0c0-3.5-6-10.5-6-10.5z" fill="#38bdf8" />
    </svg>
  );
}
