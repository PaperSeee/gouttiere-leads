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

export const metadata: Metadata = {
  title: "Nettoyage Gouttières Bruxelles | Devis Gratuit — Intervention 48h",
  description:
    "Nettoyage de gouttières à Bruxelles. Débouchage, réparation, démoussage toiture. Devis gratuit, intervention sous 48h. Appelez le 0477 23 41 87.",
  metadataBase: new URL("https://nettoyage-gouttieres-bruxelles.be"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nettoyage Gouttières Bruxelles | Devis Gratuit",
    description:
      "Expert nettoyage gouttières à Bruxelles. Devis gratuit, intervention 48h, garantie satisfaction.",
    url: "https://nettoyage-gouttieres-bruxelles.be",
    siteName: "Nettoyage Gouttières Bruxelles",
    locale: "fr_BE",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <LocalBusinessSchema />
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
            href="tel:0477234187"
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
