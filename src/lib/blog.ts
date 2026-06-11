export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string        // format "2026-05-20"
  dateLabel: string   // format "20 mai 2026"
  category: string    // ex: "Conseils", "Entretien", "Saisonnier"
  readTime: string    // ex: "7 min"
  imageUrl: string
  imageAlt: string
  excerpt: string     // 2-3 phrases résumé
}

export const blogPosts: BlogPost[] = [
  {
    slug: "demoussage-toiture-bruxelles-quand-comment-prix",
    title: "Démoussage de toiture à Bruxelles : quand le faire, comment et à quel prix",
    description: "Mousses, lichens et algues sur votre toit ? Découvrez quand faire un démoussage à Bruxelles, les méthodes professionnelles, les prix 2026 et le lien direct avec vos gouttières.",
    date: "2026-06-09",
    dateLabel: "9 juin 2026",
    category: "Entretien",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80",
    imageAlt: "Démoussage de toiture sur une maison bruxelloise — traitement anti-mousse",
    excerpt: "Le climat humide de Bruxelles favorise les mousses et lichens sur les toitures. Au-delà de l'esthétique, ces végétaux bouchent vos gouttières et abîment vos tuiles. Voici quand intervenir, comment et à quel prix en 2026.",
  },
  {
    slug: "nettoyage-gouttieres-bruxelles-guide-complet",
    title: "Nettoyage Gouttières Bruxelles : Guide Complet 2026 — Prix, Fréquence & Conseils",
    description: "Tout savoir sur le nettoyage de gouttières à Bruxelles : fréquence recommandée, prix du marché, risques d'une gouttière bouchée, et comment trouver un professionnel fiable.",
    date: "2026-06-07",
    dateLabel: "7 juin 2026",
    category: "Conseils",
    readTime: "9 min",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Nettoyage complet de gouttières à Bruxelles — guide 2026",
    excerpt: "Le guide de référence sur le nettoyage de gouttières à Bruxelles : fréquence recommandée, prix réels du marché 2026, risques concrets d'une gouttière bouchée et critères pour choisir un professionnel fiable.",
  },
  {
    slug: "prix-remplacement-gouttieres-bruxelles-2026",
    title: "Prix Remplacement Gouttières Bruxelles 2026 : Tarifs Complets",
    description: "Combien coûte le remplacement de vos gouttières à Bruxelles en 2026 ? Tarifs détaillés par matériau (zinc, aluminium, PVC), longueur et type de maison. Devis sans surprise.",
    date: "2026-06-05",
    dateLabel: "5 juin 2026",
    category: "Tarifs",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    imageAlt: "Remplacement de gouttières sur maison bruxelloise — tarifs 2026",
    excerpt: "Quand le nettoyage ne suffit plus, le remplacement s'impose. Ce guide détaille les tarifs 2026 du remplacement de gouttières à Bruxelles selon le matériau (zinc, aluminium, PVC), la longueur et le type de maison.",
  },
  {
    slug: "produits-nettoyage-gouttieres-bruxelles",
    title: "Produits Nettoyage Gouttières Bruxelles : Lesquels Choisir et Éviter ?",
    description: "Guide complet sur les produits pour nettoyer vos gouttières à Bruxelles : démoussants, dégraissants, traitements anti-algues. Ce qui fonctionne vraiment et ce qui abîme vos gouttières.",
    date: "2026-06-05",
    dateLabel: "5 juin 2026",
    category: "Conseils",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    imageAlt: "Produits de nettoyage pour gouttières — démoussants et anti-algues",
    excerpt: "Démoussants, dégraissants, traitements anti-algues : tous les produits ne se valent pas, et certains abîment vos gouttières. Voici ce qui fonctionne vraiment et ce qu'il faut éviter pour vos gouttières à Bruxelles.",
  },
  {
    slug: "prix-nettoyage-gouttieres-bruxelles",
    title: "Prix nettoyage gouttières à Bruxelles : tarifs 2026 et ce qui influence le coût",
    description: "Combien coûte un nettoyage de gouttières à Bruxelles ? Tarifs détaillés 2026 selon le type de maison, comparaison DIY vs professionnel et ce qui est inclus dans une prestation.",
    date: "2026-05-29",
    dateLabel: "29 mai 2026",
    category: "Tarifs",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Nettoyage professionnel de gouttières — tarifs Bruxelles 2026",
    excerpt: "Vous souhaitez faire nettoyer vos gouttières mais vous ne savez pas combien cela coûte ? Ce guide détaille les tarifs réels pratiqués à Bruxelles en 2026 : de 80€ pour une maison mitoyenne à 220€ pour une villa 4 façades.",
  },
  {
    slug: "entretien-gouttieres-quand-faire",
    title: "Quand nettoyer ses gouttières ? Le calendrier d'entretien idéal à Bruxelles",
    description: "À quelle fréquence faut-il nettoyer ses gouttières à Bruxelles ? Découvrez le calendrier d'entretien recommandé, les signes d'alerte et les conséquences d'un entretien négligé.",
    date: "2026-05-29",
    dateLabel: "29 mai 2026",
    category: "Entretien",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "Calendrier entretien gouttières Bruxelles — nettoyage 2x par an",
    excerpt: "Beaucoup de propriétaires bruxellois ne savent pas à quelle fréquence entretenir leurs gouttières. La règle à Bruxelles : 2 nettoyages par an minimum — après l'automne et avant le printemps. Voici le calendrier complet.",
  },
  {
    slug: "gouttiere-qui-deborde-causes-solutions",
    title: "Gouttière qui déborde : causes, dangers et solutions immédiates",
    description: "Votre gouttière déborde lors des pluies ? Découvrez les 6 causes les plus fréquentes, les risques pour votre maison et ce qu'il faut faire immédiatement.",
    date: "2026-05-26",
    dateLabel: "26 mai 2026",
    category: "Urgence",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80",
    imageAlt: "Gouttière qui déborde sous la pluie — dégâts sur façade",
    excerpt: "Une gouttière qui déborde n'est jamais anodine. En quelques heures de pluie intense, l'eau peut infiltrer votre façade, saturer vos fondations ou endommager vos combles. Voici comment identifier la cause et réagir vite.",
  },
  {
    slug: "preparer-gouttieres-automne-bruxelles",
    title: "Comment Préparer ses Gouttières Avant l'Automne à Bruxelles",
    description: "Guide complet pour préparer vos gouttières avant l'automne à Bruxelles : checklist d'inspection, arbres à risque et quand appeler un professionnel.",
    date: "2026-05-20",
    dateLabel: "20 mai 2026",
    category: "Saisonnier",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    imageAlt: "Toiture et gouttières d'une maison bruxelloise en automne",
    excerpt: "L'automne bruxellois est la saison la plus critique pour vos gouttières. Feuilles de platanes, marrons et frênes obstruent les descentes en quelques semaines. Voici comment anticiper et éviter les dégâts des eaux.",
  },
  {
    slug: "materiaux-gouttieres-zinc-pvc-aluminium",
    title: "Zinc, PVC ou Aluminium : Quel Matériau Choisir pour ses Gouttières ?",
    description: "Comparatif complet des matériaux de gouttières disponibles à Bruxelles : durée de vie, entretien, coût et adaptation aux maisons belges. Faites le bon choix.",
    date: "2026-06-01",
    dateLabel: "1 juin 2026",
    category: "Conseils",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "Gouttières en zinc sur maison bruxelloise — matériaux comparatif",
    excerpt: "Zinc, PVC, aluminium, cuivre — chaque matériau de gouttière a ses avantages et ses inconvénients. Ce guide vous aide à choisir le bon matériau selon le type de votre maison bruxelloise et votre budget.",
  },
  {
    slug: "infiltration-eau-facade-gouttieres",
    title: "Infiltrations d'eau sur Façade : le Rôle Méconnu des Gouttières",
    description: "Taches d'humidité, moisissures, peinture qui s'écaille — les gouttières défectueuses sont souvent à l'origine des infiltrations de façade. Comment diagnostiquer et résoudre le problème.",
    date: "2026-06-02",
    dateLabel: "2 juin 2026",
    category: "Urgence",
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80",
    imageAlt: "Infiltration d'eau sur façade bruxelloise — rôle des gouttières",
    excerpt: "Si votre façade présente des traces d'humidité, des moisissures ou une peinture qui s'écaille, vos gouttières sont peut-être en cause. Voici comment identifier le problème et les solutions pour l'éliminer définitivement.",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}
