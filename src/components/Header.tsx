"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Clock, MapPin } from "lucide-react";
import Logo from "./Logo";

const communes = [
  { name: "Anderlecht", slug: "anderlecht" },
  { name: "Auderghem", slug: "auderghem" },
  { name: "Berchem-Sainte-Agathe", slug: "berchem-sainte-agathe" },
  { name: "Bruxelles-Ville", slug: "bruxelles" },
  { name: "Etterbeek", slug: "etterbeek" },
  { name: "Evere", slug: "evere" },
  { name: "Forest", slug: "forest" },
  { name: "Ganshoren", slug: "ganshoren" },
  { name: "Ixelles", slug: "ixelles" },
  { name: "Jette", slug: "jette" },
  { name: "Koekelberg", slug: "koekelberg" },
  { name: "Molenbeek-Saint-Jean", slug: "molenbeek-saint-jean" },
  { name: "Saint-Gilles", slug: "saint-gilles" },
  { name: "Saint-Josse-ten-Noode", slug: "saint-josse-ten-noode" },
  { name: "Schaerbeek", slug: "schaerbeek" },
  { name: "Uccle", slug: "uccle" },
  { name: "Watermael-Boitsfort", slug: "watermael-boitsfort" },
  { name: "Woluwe-Saint-Lambert", slug: "woluwe-saint-lambert" },
  { name: "Woluwe-Saint-Pierre", slug: "woluwe-saint-pierre" },
];

const servicesNav = [
  { name: "Nettoyage gouttières", href: "/services/nettoyage-gouttieres" },
  { name: "Débouchage urgence", href: "/services/debouchage-gouttieres" },
  { name: "Réparation / remplacement", href: "/services/reparation-gouttieres" },
  { name: "Démoussage toiture", href: "/services/demoussage-toiture" },
  { name: "Protection anti-feuilles", href: "/services/protection-gouttieres" },
  { name: "Contrat d'entretien annuel", href: "/services/contrat-entretien-gouttieres" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [communesOpen, setCommunesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLink = "rounded-lg px-3 py-2 font-semibold text-gray-600 transition-colors hover:bg-[#F1F6F3] hover:text-[#133826]";
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#133826] text-[0.78rem] font-semibold text-green-100">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-2 sm:px-6 md:justify-between lg:px-8">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" aria-hidden />
            Devis gratuit · intervention sous 48h · urgences 7j/7
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#7fd8a4]" />Lun–ven 7h30–18h · sam 8h–14h</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#7fd8a4]" />19 communes de Bruxelles</span>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0" aria-label="Nettoyage Gouttières Bruxelles — Accueil">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 text-sm lg:flex" aria-label="Navigation principale">
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={`${navLink} flex items-center gap-1`} aria-expanded={servicesOpen}>
                Services <ChevronDown size={14} />
              </button>
              <div className={`absolute left-0 top-full w-64 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl transition-all duration-150 ${servicesOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                {servicesNav.map((s) => (
                  <Link key={s.href} href={s.href} className="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#F1F6F3] hover:text-[#133826]">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative" onMouseEnter={() => setCommunesOpen(true)} onMouseLeave={() => setCommunesOpen(false)}>
              <button className={`${navLink} flex items-center gap-1`} aria-expanded={communesOpen}>
                Communes <ChevronDown size={14} />
              </button>
              <div className={`absolute left-1/2 top-full grid w-[520px] -translate-x-1/2 grid-cols-2 gap-x-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl transition-all duration-150 ${communesOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                {communes.map((c) => (
                  <Link key={c.slug} href={`/communes/${c.slug}`} className="block rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#F1F6F3] hover:text-[#133826]">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/tarifs" className={navLink}>Tarifs</Link>
            <Link href="/blog" className={navLink}>Conseils</Link>
            <Link href="/contact" className={navLink}>Contact</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:0451053370"
              className="flex h-10 w-10 items-center justify-center gap-2 rounded-xl bg-[#F97316] text-sm font-extrabold text-white shadow-[0_8px_20px_-8px_rgba(249,115,22,0.8)] transition-colors hover:bg-[#EA580C] sm:h-auto sm:w-auto sm:px-4 sm:py-2.5"
              aria-label="Appeler le 0451 05 33 70"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">0451 05 33 70</span>
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 text-[#133826] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-110px)] overflow-y-auto border-b border-gray-200 bg-white px-4 py-4 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Menu mobile">
            <div>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-gray-400">Services</p>
              <div className="grid gap-1">
                {servicesNav.map((s) => (
                  <Link key={s.href} href={s.href} className="rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-[#F1F6F3]" onClick={() => setMobileOpen(false)}>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-gray-400">Communes</p>
              <div className="grid grid-cols-2 gap-1">
                {communes.map((c) => (
                  <Link key={c.slug} href={`/communes/${c.slug}`} className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#F1F6F3]" onClick={() => setMobileOpen(false)}>
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-4">
              <Link href="/tarifs" className="rounded-xl bg-[#F1F6F3] py-2.5 text-center text-sm font-bold text-[#133826]" onClick={() => setMobileOpen(false)}>Tarifs</Link>
              <Link href="/blog" className="rounded-xl bg-[#F1F6F3] py-2.5 text-center text-sm font-bold text-[#133826]" onClick={() => setMobileOpen(false)}>Conseils</Link>
              <Link href="/contact" className="rounded-xl bg-[#F1F6F3] py-2.5 text-center text-sm font-bold text-[#133826]" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
