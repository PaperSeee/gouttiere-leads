import ClarityTag from "@/components/Clarity";
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Phone, MessageCircle } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

const DOMAIN = "https://www.nettoyage-gouttieres-bruxelles.be";

export const metadata: Metadata = {
  title: {
    default: "Nettoyage de gouttières à Bruxelles | Gouttières Bruxelles",
    template: "%s | Gouttières Bruxelles",
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
    <html lang="fr" className={`${inter.variable} ${sora.variable} ${inter.className} h-full`}>
      <head>
        <meta name="theme-color" content="#133826" />
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
        <main className="flex-1 pb-20 sm:pb-0">{children}</main>
        <Footer />
        {/* Barre d'action mobile : appel, WhatsApp, devis */}
        <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto_1fr] gap-2 border-t border-gray-200 bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-6px_18px_rgba(19,56,38,0.12)] backdrop-blur sm:hidden">
          <a href="tel:0451053370" className="flex items-center justify-center gap-1.5 rounded-xl bg-[#F97316] py-3 text-[13px] font-extrabold text-white">
            <Phone size={16} />
            Appeler
          </a>
          <a
            href="https://wa.me/32477234187"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-12 items-center justify-center rounded-xl bg-[#25D366] text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
          <a href="/contact" className="flex items-center justify-center rounded-xl border-2 border-[#133826] py-3 text-[13px] font-extrabold text-[#133826]">
            Devis gratuit
          </a>
        </div>
      <ClarityTag id="yntj10qd01" /></body>
    </html>
  );
}
