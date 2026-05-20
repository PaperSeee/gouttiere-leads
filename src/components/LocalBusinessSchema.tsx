export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.nettoyage-gouttieres-bruxelles.be/#business",
    name: "Nettoyage Gouttières Bruxelles",
    description:
      "Nettoyage de gouttières à Bruxelles. Débouchage, réparation, démoussage toiture. Devis gratuit, intervention sous 48h, garantie satisfaction.",
    url: "https://www.nettoyage-gouttieres-bruxelles.be",
    telephone: "0477234187",
    email: "contact@nettoyage-gouttieres-bruxelles.be",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bruxelles",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8503,
      longitude: 4.3517,
    },
    areaServed: [
      "Uccle",
      "Ixelles",
      "Woluwe-Saint-Pierre",
      "Woluwe-Saint-Lambert",
      "Auderghem",
      "Watermael-Boitsfort",
      "Etterbeek",
      "Forest",
      "Schaerbeek",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    priceRange: "€€",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
