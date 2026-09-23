/**
 * Données d'entreprise pour le balisage LocalBusiness (Schema.org).
 * Ne remplir qu'avec des informations RÉELLES et vérifiables : adresse
 * d'activité, coordonnées GPS de cette adresse, URL de la fiche Google
 * Business Profile et des annuaires où l'entreprise est inscrite.
 * Tant qu'un champ est vide, il n'est pas publié.
 */
export const BUSINESS: {
  streetAddress: string;
  postalCode: string;
  geo: { latitude: number; longitude: number } | null;
  sameAs: string[];
} = {
  streetAddress: "",
  postalCode: "",
  geo: null,
  sameAs: [],
};
