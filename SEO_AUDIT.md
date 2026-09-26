# Audit SEO — nettoyage-gouttieres-bruxelles.be

Date : 26 septembre 2026 · Base : commit `01741c0` · Méthode : lecture complète du code (routes,
composants, `sitemap.ts`, `robots.ts`, `next.config.ts`, `layout.tsx`, `lib/`), build de production
puis crawl de toutes les URL du sitemap avec `scripts/seo-check.py` (nouveau script, réutilisable).

Données disponibles : **aucun export Search Console dans le dépôt** (pas de `data/`, pas de `docs/`).
Les priorités ci-dessous reposent donc sur le code, le crawl et le métier, pas sur des requêtes réelles.

Contexte déduit du site (le brief n'était pas rempli) :

| Élément | Ce que dit le site | Utilisation dans ce travail |
|---|---|---|
| Métier | Nettoyage, débouchage, réparation de gouttières, démoussage, protection anti-feuilles, contrat d'entretien | Services existants conservés, aucun service ajouté |
| Zone | « 19 communes de Bruxelles » (+ « périphérie » citée sans liste) | Pages uniquement pour les 19 communes ; **aucune page périphérie** |
| Prix | Nettoyage 80–150 €, débouchage 120–200 €, démoussage 3–6 €/m², réparations au ml (page /tarifs) | Seuls ces prix sont repris |
| Langues | Site 100 % FR (`lang="fr"`), aucune version NL | Pas de version NL créée (voir « À confirmer ») |
| Téléphone | 0451 05 33 70 (WhatsApp : +32 477 23 41 87) | Inchangé |

---

## 1. Inventaire

44 URL dans le sitemap, toutes en 200, un seul H1 chacune, canonical correct partout.
Mots = texte du `<main>` hors formulaires, navigation, scripts.

| Type | Nb | Mots (min–max) | Remarque |
|---|---|---|---|
| Accueil | 1 | 984 | Bon contenu, prix visibles, FAQ |
| Services | 6 | 378–440 | Corrects mais courts ; aucun ne liste ses guides de blog |
| Communes | 19 | 477–571 | **87–92 % de texte propre** (shingles de 5 mots vs les 18 autres) : pas de pages satellites |
| Blog | 11 articles + index | 513–1 800 | 4 articles < 600 mots (gel 513, anti-feuilles 549, orages 623, remplacement 671) |
| Statiques | 7 | 106–1 066 | /contact 106 mots (normal pour un contact) |

Doublons / minces : aucun doublon de title ni de contenu. Les 3 articles qui doublaient une page ont déjà
été fusionnés en 301 (`next.config.ts`). Pas de page mince hors /contact.

**Faits locaux faux ou douteux relevés dans les pages communes existantes** (risque de crédibilité) :

| Page | Problème | Statut |
|---|---|---|
| Ganshoren | « la plus petite commune de Bruxelles » — faux (Saint-Josse et Koekelberg sont plus petites) | Corrigé |
| Bruxelles-Ville | « 19 km² » — la Ville de Bruxelles fait ≈ 33 km² | Corrigé |
| Jette | « Karreveld » (Molenbeek) et « Quatre-Vents » cités comme quartiers de Jette ; vents d'ouest venant de Laeken (Laeken est à l'est) | Corrigé |
| Evere | « parc Walckiers » (Schaerbeek) et « avenue de l'Héliport » (Bruxelles-Ville) placés à Evere | Corrigé |
| Woluwe-Saint-Pierre | « parc Malou » — il est à Woluwe-Saint-Lambert | Corrigé (parc de Woluwe) |
| Woluwe-Saint-Lambert | « Chant d'Oiseau » (Woluwe-Saint-Pierre) et « avenue de Tervueren » placés à WSL | Corrigé |
| Uccle | « avenue Delleur » (Watermael-Boitsfort) citée à Uccle | Corrigé |
| Saint-Josse | « rue Royale Sainte-Marie » (côté Schaerbeek) | Remplacé par place Madou |
| Anderlecht | Cureghem décrit comme « résidentiel calme » ; « Grand-Place d'Anderlecht » ; statistique « 300 mètres du canal » non sourcée | Corrigé |
| Molenbeek | Canal situé « au nord » de la commune (il la borde à l'est) | Corrigé |
| Saint-Gilles | Coquille « zinc à la place de zinc » | Corrigé |
| Forest, Koekelberg, Ganshoren | Rues citées non vérifiables (av. Besme, av. de la Basilique, rue Schmitz, av. de la Réforme) | Remplacées par des lieux sûrs ou signalées |
| À propos | « immeubles haussmanniens d'Etterbeek » (terme parisien, contredit la page Etterbeek) | Corrigé |

**Communes voisines** : 8 listes sur 19 contenaient une commune non limitrophe (ex. Saint-Josse → Etterbeek,
Ixelles → Forest, Watermael-Boitsfort ↔ Woluwe-Saint-Pierre, Berchem ↔ Jette, Molenbeek → Jette).

## 2. Technique

| Point | Constat | Gravité |
|---|---|---|
| robots.txt | `Disallow: /_next/` bloque CSS, JS et images optimisées : Google ne peut pas rendre les pages correctement | **Haute** |
| Sitemap | Complet (44 URL), `lastModified` réel pour le blog | OK |
| Canonical | Présent et correct sur les 44 pages | OK |
| hreflang | Site monolingue ; `fr-BE`/`fr`/`x-default` déclarés sur l'accueil seulement, inutiles | Basse |
| `lang` | `fr` | OK |
| Redirection `/` → langue | Sans objet (monolingue). www/non-www : géré par l'hébergeur, à vérifier dans Vercel | — |
| 404 personnalisée | **Absente** (page Next.js par défaut, en anglais, sans lien ni téléphone) | Moyenne |
| Titles | Tous ≤ 60 car., uniques | OK |
| Meta descriptions | Toutes ≤ 155 ; /contact contient « Téléphone : Réponse… » (numéro manquant) ; OG débouchage tronqué « Appelez le » | Basse |
| H1 | Exactement un par page | OK |
| LocalBusiness | `RoofingContractor` sans adresse/GPS inventés (champs vides tant que non fournis) | OK |
| Méta `geo.position` / `ICBM` | Coordonnées du centre de Bruxelles publiées comme position de l'entreprise : **coordonnées inventées** | Moyenne |
| WebSite | `SearchAction` vers `/?s=` alors qu'il n'y a pas de recherche sur le site | Basse |
| Service | Présent sur les 6 pages service | OK |
| BreadcrumbList | Les éléments « Communes » et « Services » pointent vers `/` (pas de page hub) ; les 11 articles publient **deux** BreadcrumbList | Moyenne |
| FAQPage | Accueil, /faq, /tarifs, 19 communes, 5 articles | OK |
| BlogPosting | 11/11 articles | OK |
| Open Graph | Image OG générée pour tout le site, images Unsplash sur le blog | OK |

## 3. Conversion

| Point | Constat |
|---|---|
| `tel:` | Présent : bandeau d'en-tête, hero, blocs CTA, footer, barre fixe mobile (Appeler / WhatsApp / Devis) | 
| Formulaire | 4 champs obligatoires (nom, tél., commune, intervention), envoi vers webhook Make, anti-spam | 
| **GA4** | **Non installé** : `gtag("event","form_submit")` est appelé mais aucun script GA4 n'est chargé → l'événement part dans le vide |
| **Suivi des appels** | **Aucun** suivi des clics `tel:` ni WhatsApp (ni GA4 ni Clarity) |
| Clarity | Installé, avec bandeau de consentement |
| Prix | Visibles : accueil, /tarifs, services, communes |
| Mentions légales | Présentes, mais **sans numéro d'entreprise (BCE/TVA) ni forme juridique** (obligatoires en Belgique) et la section cookies affirme « uniquement des cookies techniques » alors que Clarity est chargé |

## 4. Search Console

Aucune donnée fournie. Conséquences :
- Pas d'analyse de requêtes, positions, cannibalisation ni CTR possible.
- Pas de pages « service + commune » créées : les pages communes ciblent déjà « nettoyage gouttières + commune »
  (title « Nettoyage de gouttières à Ixelles ») ; une page `/communes/ixelles/nettoyage` la cannibaliserait.
  Sans requête GSC le justifiant, la règle « pas de pages satellites » l'emporte.

## 5. Manques de contenu

- Services : couverture complète du métier. Pas de service manquant évident.
- Questions clients sans réponse sur le site :
  - faire soi-même en sécurité (erreurs à éviter) ;
  - descente pluviale bouchée (où est le bouchon ?) ;
  - locataire ou propriétaire : qui paie ;
  - copropriété : syndic, AG, parties communes ;
  - chéneau de corniche (typique des maisons bruxelloises) ;
  - gouttière qui fuit ou goutte ;
  - gouttière décrochée ou qui penche ;
  - choisir une entreprise et éviter le démarchage abusif.
- Blog : 11 articles (au-dessus du seuil de 8–10), mais aucun sur ces 8 sujets.

## 6. Liens internes

- Pas de page orpheline (toutes les pages sont liées depuis le header/footer ou l'index du blog).
- Ancres génériques : « En savoir plus » sur les 6 cartes services de l'accueil (le titre de la carte est
  dans le lien, impact limité) ; « Planifier un nettoyage », « Appeler maintenant » : acceptables.
- Service → guides : **aucune page service ne liste les articles qui la concernent**.
- Commune → communes voisines : ancres = nom seul, listes partiellement fausses (voir §1).
- Commune → guides : aucun lien.

## 7. Plan priorisé

| # | Action | Impact | Effort | Priorité | Justification |
|---|---|---|---|---|---|
| 1 | Retirer `Disallow: /_next/` du robots.txt | Fort | Très faible | P0 | Google ne peut pas charger CSS/JS |
| 2 | Corriger les faits locaux faux et les communes voisines | Fort (confiance, E-E-A-T) | Faible | P0 | 13 erreurs factuelles, 8 listes de voisines fausses |
| 3 | Suivi GA4 (si ID fourni) + suivi des clics `tel:`/WhatsApp (GA4 + Clarity) | Fort (mesure des appels) | Faible | P0 | 0 mesure des appels aujourd'hui |
| 4 | Page 404 personnalisée avec téléphone et liens | Moyen | Faible | P1 | 404 par défaut en anglais |
| 5 | Pages hub /communes et /services + fil d'Ariane corrigé | Moyen | Faible | P1 | BreadcrumbList pointant vers `/` |
| 6 | Supprimer les coordonnées `geo.position` inventées, le `SearchAction` fictif, le hreflang inutile, le BreadcrumbList en double du blog | Moyen | Faible | P1 | Données structurées honnêtes et sans doublon |
| 7 | 8 guides (600–900 mots) sur les questions sans réponse | Fort (impressions longue traîne) | Élevé | P1 | 8 intentions non couvertes |
| 8 | Bloc « Guides » sur chaque page service, « À lire aussi » sur chaque guide | Moyen | Faible | P1 | 0 lien service → blog |
| 9 | Enrichir les 19 communes : conseils locaux, 2 FAQ locales (dans FAQPage), voisines réelles, liens vers les guides | Moyen–fort | Moyen | P1 | Pages de 477–571 mots, voisines fausses |
| 10 | Meta descriptions communes et services avec prix réels | Moyen (CTR) | Faible | P2 | Descriptions sans prix alors que « dès 80 € » est affiché |
| 11 | Mentions légales : section cookies exacte ; BCE/TVA à fournir | Moyen (conformité, confiance) | Faible | P2 | Mention obligatoire absente |

Non fait, faute d'information : pages périphérie, version NL, adresse/GPS/Google Business Profile
dans le balisage, pages « service + commune ».
