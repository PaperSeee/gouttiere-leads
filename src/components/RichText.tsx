import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/** Rend un texte avec des liens [texte](/chemin) et du **gras**. */
export default function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      parts.push(
        <Link key={m.index} href={m[2]} className="font-semibold text-[#1A4731] underline decoration-[#F97316]/50 underline-offset-2 hover:text-[#F97316]">
          {m[1]}
        </Link>,
      );
    } else {
      parts.push(<strong key={m.index}>{m[3]}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}
