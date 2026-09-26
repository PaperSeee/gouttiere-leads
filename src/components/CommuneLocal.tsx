import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, MapPin } from "lucide-react";
import { communes, getCommune } from "@/lib/communes";
import { blogPosts } from "@/lib/blog";

/** Bloc « Nos conseils pour les habitants de … » + guides utiles, propre à chaque commune. */
export function CommuneConseils({ slug }: { slug: string }) {
  const c = getCommune(slug);
  const guides = c.guides
    .map((g) => blogPosts.find((p) => p.slug === g))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));
  return (
    <section className="py-14 bg-[#F1F6F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-3">
          <Lightbulb size={16} /> Conseils locaux
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Nos conseils pour les habitants {c.de}</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {c.conseils.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {guides.length > 0 && (
          <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-5">
            <p className="font-semibold text-gray-900 mb-3">Pour aller plus loin</p>
            <ul className="space-y-2">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/blog/${g.slug}`} className="inline-flex items-start gap-2 text-[#1A4731] hover:text-[#F97316] font-medium text-sm">
                    <BookOpen size={15} className="mt-0.5 shrink-0" />
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

/** Communes limitrophes réelles, avec ancres descriptives. */
export function NeighborCommunes({ slug }: { slug: string }) {
  const c = getCommune(slug);
  const neighbors = c.neighbors.map((n) => communes.find((x) => x.slug === n)!).filter(Boolean);
  return (
    <section className="py-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-gray-500 mb-3">Communes voisines {c.de}</p>
        <div className="flex flex-wrap gap-2">
          {neighbors.map((n) => (
            <Link key={n.slug} href={`/communes/${n.slug}`} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#1A4731] hover:text-[#1A4731] text-gray-600 rounded-lg px-3 py-2 text-sm font-medium transition-colors">
              <MapPin size={12} className="text-[#F97316]" />
              Nettoyage de gouttières à {n.name}
            </Link>
          ))}
          <Link href="/communes" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A4731] hover:text-[#F97316] px-3 py-2">
            Les 19 communes desservies <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
