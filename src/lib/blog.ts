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
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}
