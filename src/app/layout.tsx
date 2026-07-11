import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Phone, MessageCircle } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be";

export const metadata: Metadata = {
  title: {
    default: "Nettoyage Gouttières Bruxelles | Devis Gratuit — Intervention 48h",
    template: "%s | Nettoyage Gouttières Bruxelles",
  },
  description:
    "Nettoyage de gouttières à Bruxelles. Prix dès 80 € — débouchage, réparation, démoussage toiture. Devis gratuit, intervention sous 48h. Appelez le 0451 05 33 70.",
  keywords: [
    "nettoyage gouttières Bruxelles", "débouchage gouttières Bruxelles", "réparation gouttières Bruxelles",
    "démoussage toiture Bruxelles", "gouttières bouchées Bruxelles", "nettoyage gouttières urgence",
    "prix nettoyage gouttières Bruxelles", "prix nettoyage gouttières", "prix nettoyage gouttière",
    "tarif nettoyage gouttières Bruxelles", "tarif nettoyage gouttières", "coût nettoyage gouttières",
    "gouttière bouchée prix", "entretien gouttières Bruxelles", "nettoyage gouttière prix",
    "nettoyage descentes pluviales Bruxelles",
  ],
  metadataBase: new URL(DOMAIN),
  alternates: {
    canonical: "/",
    languages: {
      "fr-BE": "/",
      "fr": "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Nettoyage Gouttières Bruxelles | Devis Gratuit",
    description:
      "Expert nettoyage gouttières à Bruxelles. Devis gratuit, intervention 48h, garantie satisfaction.",
    url: DOMAIN,
    siteName: "Nettoyage Gouttières Bruxelles",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nettoyage Gouttières Bruxelles — Devis Gratuit, Intervention 48h",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage Gouttières Bruxelles | Devis Gratuit",
    description: "Expert nettoyage gouttières à Bruxelles. Devis gratuit, intervention 48h.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "4c166d9c2126e736",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${DOMAIN}/#organization`,
  name: "Nettoyage Gouttières Bruxelles",
  url: DOMAIN,
  logo: {
    "@type": "ImageObject",
    url: `${DOMAIN}/favicon.svg`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+32451053370",
    contactType: "customer service",
    availableLanguage: "French",
    areaServed: "BE",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Bruxelles-Capitale" },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${DOMAIN}/#website`,
  url: DOMAIN,
  name: "Nettoyage Gouttières Bruxelles",
  description: "Nettoyage de gouttières à Bruxelles. Débouchage, réparation, démoussage toiture.",
  publisher: { "@id": `${DOMAIN}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${DOMAIN}/?s={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.className} h-full`}>
      <head>
        <meta name="theme-color" content="#1A4731" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Gouttières BXL" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="geo.region" content="BE-BRU" />
        <meta name="geo.placename" content="Bruxelles" />
        <meta name="geo.position" content="50.8503;4.3517" />
        <meta name="ICBM" content="50.8503, 4.3517" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1 pb-6 sm:pb-0">{children}</main>
        <Footer />
        {/* Floating action buttons - mobile only */}
        <div className="fixed bottom-6 right-4 z-40 sm:hidden flex flex-col gap-3">
          <a
            href="https://wa.me/32477234187"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-green-500 text-white rounded-full shadow-2xl transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={26} />
          </a>
          <a
            href="tel:0451053370"
            className="flex items-center justify-center w-14 h-14 bg-[#F97316] hover:bg-orange-500 text-white rounded-full shadow-2xl transition-colors"
            aria-label="Appeler"
          >
            <Phone size={26} />
          </a>
        </div>
      </body>
    </html>
  );
}
