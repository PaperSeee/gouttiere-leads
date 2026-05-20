import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://nettoyage-gouttieres-bruxelles.be${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Fil d'Ariane" className="bg-white border-b border-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <span className="text-gray-400 select-none" aria-hidden="true">›</span>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[#1A4731] hover:text-[#F97316] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-500" aria-current="page">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
