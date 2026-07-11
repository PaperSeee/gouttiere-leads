const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${DOMAIN}/#business`,
    name: "Nettoyage Gouttières Bruxelles",
    description:
      "Nettoyage de gouttières à Bruxelles. Débouchage, réparation, démoussage toiture. Devis gratuit, intervention sous 48h, garantie satisfaction.",
    url: DOMAIN,
    telephone: "+32451053370",
    email: "contact@nettoyage-gouttieres-bruxelles.be",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bruxelles",
      addressRegion: "Bruxelles-Capitale",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8503,
      longitude: 4.3517,
    },
    areaServed: [
      "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Bruxelles",
      "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette",
      "Koekelberg", "Molenbeek-Saint-Jean", "Saint-Gilles", "Saint-Josse-ten-Noode",
      "Schaerbeek", "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre",
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
    image: `${DOMAIN}/opengraph-image`,
    logo: {
      "@type": "ImageObject",
      url: `${DOMAIN}/logo.svg`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services nettoyage gouttières Bruxelles",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage gouttières", url: `${DOMAIN}/services/nettoyage-gouttieres` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débouchage gouttières", url: `${DOMAIN}/services/debouchage-gouttieres` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réparation gouttières", url: `${DOMAIN}/services/reparation-gouttieres` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Démoussage toiture", url: `${DOMAIN}/services/demoussage-toiture` } },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
