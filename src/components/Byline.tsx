import Link from "next/link";

/** « Mis à jour le … · par Ilias, éditeur du site » — même date que dateModified du schema. */
export default function Byline({ date, className = "" }: { date: string; className?: string }) {
  const label = new Date(`${date}T12:00:00Z`).toLocaleDateString("fr-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return (
    <p className={`text-xs text-green-200 ${className}`}>
      Mis à jour le <time dateTime={date}>{label}</time> · par{" "}
      <Link href="/a-propos" className="font-semibold text-white underline decoration-[#F97316]">
        Ilias
      </Link>
      , éditeur du site
    </p>
  );
}
