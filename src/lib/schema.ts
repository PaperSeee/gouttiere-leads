/**
 * Entités Schema.org partagées, reliées par @id (voir layout.tsx où elles sont
 * déclarées en entier) : les articles et services y renvoient au lieu de
 * redéclarer un auteur ou un éditeur différent sur chaque page.
 */
export const SITE_URL = "https://www.nettoyage-gouttieres-bruxelles.be";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const EDITOR_ID = `${SITE_URL}/#editeur`;

/** Auteur des guides : l'éditeur du site (prénom seul hors pages légales). */
export const EDITOR_REF = { "@type": "Person", "@id": EDITOR_ID, name: "Ilias" } as const;

/** Éditeur (publisher) des pages : l'Organization déclarée dans le layout. */
export const PUBLISHER_REF = { "@id": ORGANIZATION_ID } as const;

/** Personne déclarée une seule fois dans le layout. */
export const editorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": EDITOR_ID,
  name: "Ilias",
  jobTitle: "Éditeur du site",
  url: `${SITE_URL}/a-propos`,
  worksFor: { "@type": "Organization", name: "HqDigital" },
};
