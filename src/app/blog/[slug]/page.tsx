import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Clock, Phone, Tag } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"
import ContactForm from "@/components/ContactForm"
import RichText from "@/components/RichText"
import { guides, getGuide } from "@/lib/guides"
import { blogPosts } from "@/lib/blog"

const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be"

const SERVICE_LABELS: Record<string, string> = {
  "nettoyage-gouttieres": "Nettoyage de gouttières à Bruxelles",
  "debouchage-gouttieres": "Débouchage de gouttières et descentes",
  "reparation-gouttieres": "Réparation de gouttières",
  "demoussage-toiture": "Démoussage de toiture",
  "protection-gouttieres": "Protection anti-feuilles",
  "contrat-entretien-gouttieres": "Contrat d'entretien annuel",
}

export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const g = getGuide(slug)
  if (!g) return {}
  const url = `${DOMAIN}/blog/${g.slug}`
  const image = g.imageUrl.replace("w=800", "w=1200")
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: g.h1,
      description: g.description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: g.imageAlt }],
      publishedTime: g.date,
    },
    twitter: { card: "summary_large_image", title: g.h1, description: g.description, images: [image] },
  }
}

export default async function GuidePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params
  const g = getGuide(slug)
  if (!g) notFound()

  const url = `${DOMAIN}/blog/${g.slug}`
  const related = g.related
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p))
  const service = g.services[0]

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": url,
        headline: g.h1,
        description: g.description,
        author: { "@type": "Organization", name: "Nettoyage Gouttières Bruxelles", url: DOMAIN },
        publisher: { "@id": `${DOMAIN}/#business` },
        datePublished: g.date,
        dateModified: g.date,
        image: g.imageUrl.replace("w=800", "w=1200"),
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        inLanguage: "fr-BE",
        articleSection: g.category,
      },
      {
        "@type": "FAQPage",
        mainEntity: g.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-[#1A4731] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog", href: "/blog" }, { label: g.title }]} />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <Tag size={11} /> {g.category}
            </span>
            <span className="flex items-center gap-1 text-green-200 text-xs">
              <Clock size={11} /> {g.readTime} de lecture · {g.dateLabel}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">{g.h1}</h1>
          <p className="text-green-200 text-base leading-relaxed max-w-2xl">{g.intro}</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 text-gray-700 leading-relaxed">
            {g.sections.map((s) => (
              <div key={s.h2} className="mb-9">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{s.h2}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="mb-4">
                    <RichText text={p} />
                  </p>
                ))}
                {s.list && (
                  <ul className="mb-4 space-y-2 list-disc pl-5 marker:text-[#F97316]">
                    {s.list.map((li, i) => (
                      <li key={i}>
                        <RichText text={li} />
                      </li>
                    ))}
                  </ul>
                )}
                {s.after?.map((p, i) => (
                  <p key={i} className="mb-4">
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            ))}

            <div className="mb-9">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
              <div className="space-y-4">
                {g.faqs.map((f) => (
                  <div key={f.q} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{f.q}</h3>
                    <p className="text-sm text-gray-600">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <p className="font-bold text-gray-900 mb-2">Besoin d&apos;un professionnel à Bruxelles ?</p>
              <p className="text-sm text-gray-600 mb-4">
                Devis gratuit, prix fixé avant l&apos;intervention, dans les 19 communes de la Région.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:0451053370" className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-5 py-3 font-bold text-white hover:bg-orange-500">
                  <Phone size={16} /> 0451 05 33 70
                </a>
                {service && (
                  <Link href={`/services/${service}`} className="inline-flex items-center gap-2 rounded-xl border-2 border-[#1A4731] px-5 py-3 font-bold text-[#1A4731] hover:bg-white">
                    {SERVICE_LABELS[service]} <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:sticky lg:top-32">
              <h2 className="text-gray-900 font-bold text-lg mb-5">Demander un devis gratuit</h2>
              <ContactForm compact />
            </div>
          </aside>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">À lire aussi</h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 hover:border-[#1A4731]">
                  <span className="text-xs font-semibold text-[#F97316] mb-1">{p.category}</span>
                  <span className="font-semibold text-gray-900 group-hover:text-[#1A4731]">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
