import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Conseils Nettoyage Gouttières Bruxelles",
  description:
    "Articles et conseils pratiques sur l'entretien des gouttières à Bruxelles. Guides saisonniers, tutoriels et informations pour propriétaires bruxellois.",
  alternates: { canonical: "https://nettoyage-gouttieres-bruxelles.be/blog" },
};

export default function Blog() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="bg-[#1A4731] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Blog — Conseils & Actualités
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Guides pratiques, conseils saisonniers et informations utiles pour l&apos;entretien
            de vos gouttières et de votre toiture à Bruxelles.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <p className="text-gray-500 text-center py-12">Aucun article pour le moment. Revenez bientôt.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
