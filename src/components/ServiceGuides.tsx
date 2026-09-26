import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getPostsForService } from "@/lib/blog";

/** Liste des guides du blog liés à une page service. */
export default function ServiceGuides({ service, title }: { service: string; title: string }) {
  const posts = getPostsForService(service);
  if (posts.length === 0) return null;
  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wide mb-2">Guides pratiques</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full items-start gap-3 rounded-xl border border-gray-200 p-4 transition-colors hover:border-[#1A4731] hover:bg-gray-50">
                <BookOpen size={18} className="mt-0.5 shrink-0 text-[#1A4731]" />
                <span className="flex-1">
                  <span className="block font-semibold text-gray-900 group-hover:text-[#1A4731]">{p.title}</span>
                  <span className="mt-1 block text-sm text-gray-500 line-clamp-2">{p.description}</span>
                </span>
                <ArrowRight size={16} className="mt-1 shrink-0 text-gray-300 group-hover:text-[#F97316]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
