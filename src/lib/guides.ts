/**
 * Guides pratiques rendus par src/app/blog/[slug]/page.tsx.
 * Syntaxe des paragraphes : [texte du lien](/chemin) et **gras**.
 * Prix cités : uniquement ceux de la page /tarifs.
 */
export interface GuideSection {
  h2: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
}

export interface Guide {
  slug: string;
  /** Title court (le gabarit ajoute « | Gouttières Bruxelles ») */
  title: string;
  h1: string;
  description: string;
  date: string;
  dateLabel: string;
  category: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  excerpt: string;
  services: string[];
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  related: string[];
}

const PUBLISHED = { date: "2026-09-26", dateLabel: "26 septembre 2026" };

export const guides: Guide[] = [
  {
    slug: "nettoyer-gouttieres-soi-meme",
    title: "Nettoyer ses gouttières soi-même",
    h1: "Nettoyer ses gouttières soi-même : méthode, sécurité et erreurs à éviter",
    description:
      "Nettoyer ses gouttières soi-même : quand c'est raisonnable, le matériel, la méthode pas à pas et les erreurs qui abîment la gouttière.",
    ...PUBLISHED,
    category: "Conseils",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    imageAlt: "Nettoyage d'une gouttière depuis une échelle",
    excerpt:
      "Sur une maison basse, nettoyer ses gouttières soi-même est tout à fait possible. À condition de choisir la bonne échelle, de suivre une méthode qui ne pousse pas les débris dans la descente et de savoir quand s'arrêter.",
    services: ["nettoyage-gouttieres"],
    intro:
      "Une gouttière accessible depuis une échelle posée sur un sol plat se nettoie sans matériel professionnel. Une gouttière au deuxième étage d'une maison mitoyenne bruxelloise, cachée derrière une corniche, c'est une autre affaire. Voici comment faire correctement, et où se situe la limite.",
    sections: [
      {
        h2: "Quand le faire soi-même est raisonnable",
        paragraphs: [
          "Le nettoyage maison se justifie si trois conditions sont réunies : la gouttière est à hauteur d'un rez-de-chaussée ou d'un premier étage, l'échelle peut reposer sur un sol stable et horizontal, et une deuxième personne est présente pour la tenir. C'est typiquement le cas d'une villa de plain-pied, d'un garage ou d'une annexe.",
          "Mieux vaut renoncer dans ces situations :",
        ],
        list: [
          "gouttière au deuxième étage ou plus, fréquente sur les maisons de ville bruxelloises ;",
          "chéneau caché derrière une corniche, qu'on ne peut atteindre qu'en passant par le toit ;",
          "sol en pente, escalier, véranda ou soupirail au pied du mur ;",
          "toiture glissante, mouillée ou couverte de mousse ;",
          "vous êtes seul, ou vous n'êtes pas à l'aise en hauteur.",
        ],
      },
      {
        h2: "Le matériel nécessaire",
        list: [
          "**Une échelle adaptée**, avec un écarteur qui l'appuie contre le mur et non contre la gouttière, inclinée à environ 75° (le pied éloigné du mur d'un quart de la hauteur) ;",
          "**des gants épais** : les débris cachent parfois des morceaux de verre, de métal ou de tuile ;",
          "**une écope ou une spatule en plastique** : jamais d'outil métallique sur du zinc, les rayures accélèrent la corrosion ;",
          "**un seau muni d'un crochet**, pour garder les deux mains libres ;",
          "**un tuyau d'arrosage** pour le rinçage et le test d'écoulement ;",
          "des lunettes de protection pour le rinçage.",
        ],
      },
      {
        h2: "La méthode pas à pas",
        list: [
          "**1. Protégez la descente.** Retirez la crapaudine (la grille au départ de la descente) et bouchez provisoirement l'entrée avec un chiffon, pour ne pas y pousser les débris.",
          "**2. Travaillez par tronçons.** Ramassez les débris à la main ou à l'écope sur la longueur que vous atteignez sans vous pencher : votre nombril doit rester entre les montants de l'échelle. Descendez, déplacez l'échelle, remontez.",
          "**3. Grattez le fond.** Sous les feuilles se trouve souvent une couche de boue et de mousse. C'est elle qui réduit le débit et qui retient l'humidité contre le métal.",
          "**4. Rincez vers la descente.** Retirez le chiffon, remettez la crapaudine et faites couler l'eau depuis l'extrémité opposée.",
          "**5. Vérifiez le débit en bas.** L'eau doit sortir franchement au pied de la descente. Si elle stagne dans la gouttière ou ressort au regard, le bouchon est plus bas : voyez notre guide sur la [descente pluviale bouchée](/blog/descente-pluviale-bouchee).",
          "**6. Profitez-en pour inspecter.** Crochets tordus, joints qui gouttent, zones où l'eau stagne : notez-les avant qu'ils ne deviennent une fuite.",
        ],
      },
      {
        h2: "Les erreurs qui abîment la gouttière, ou vous",
        list: [
          "**Appuyer l'échelle sur la gouttière** : le PVC se fend, l'aluminium et le zinc se déforment, et la pente est faussée.",
          "**Utiliser un nettoyeur haute pression** : il arrache les joints, projette de l'eau sous les tuiles et envoie les débris dans la descente.",
          "**Verser des produits chlorés ou acides** : ils attaquent le zinc et les joints. Notre article sur les [produits de nettoyage](/blog/produits-nettoyage-gouttieres-bruxelles) détaille ce qui est sans risque.",
          "**Marcher sur une toiture mouillée** ou couverte de mousse, même en pente douce.",
          "**Oublier la descente** : une gouttière propre raccordée à une descente bouchée déborde quand même.",
        ],
      },
      {
        h2: "Quand appeler un professionnel",
        paragraphs: [
          "Arrêtez-vous et faites appel à quelqu'un d'équipé si l'eau ne s'écoule pas après rinçage, si la gouttière penche ou se décroche (voir [gouttière décrochée ou qui penche](/blog/gouttiere-decrochee-qui-penche)), si un joint fuit, ou dès que la hauteur dépasse ce que vous faites en sécurité. Une chute d'échelle, même de trois mètres, peut avoir des conséquences graves.",
          "Pour une maison bruxelloise, un [nettoyage de gouttières par un professionnel](/services/nettoyage-gouttieres) coûte en général **80 à 150 €**, descentes pluviales comprises (détail sur la page [tarifs](/tarifs)). Et pour savoir à quel moment de l'année intervenir, consultez notre [calendrier d'entretien des gouttières](/blog/entretien-gouttieres-quand-faire).",
        ],
      },
    ],
    faqs: [
      {
        q: "Peut-on nettoyer une gouttière depuis le sol ?",
        a: "En partie : des perches télescopiques avec embout de ramassage ou d'aspiration permettent de retirer les feuilles sur un rez-de-chaussée ou un premier étage. Elles ne permettent pas de voir le fond de la gouttière ni de vérifier les joints et la pente.",
      },
      {
        q: "Faut-il un nettoyeur haute pression pour les gouttières ?",
        a: "Non. La haute pression abîme les joints, peut déformer le zinc et projette de l'eau sous les tuiles. Un ramassage manuel suivi d'un rinçage au tuyau d'arrosage suffit.",
      },
    ],
    related: ["entretien-gouttieres-quand-faire", "produits-nettoyage-gouttieres-bruxelles", "descente-pluviale-bouchee"],
  },
  {
    slug: "descente-pluviale-bouchee",
    title: "Descente pluviale bouchée : solutions",
    h1: "Descente pluviale bouchée : comment trouver le bouchon et la déboucher",
    description:
      "Descente pluviale bouchée : les signes, où se forme le bouchon, un test simple pour le localiser et ce qu'il ne faut jamais verser dedans.",
    ...PUBLISHED,
    category: "Urgence",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80",
    imageAlt: "Descente pluviale et gouttière sous la pluie",
    excerpt:
      "La gouttière est propre mais déborde quand même ? Le bouchon est dans la descente. Voici comment reconnaître le problème, localiser l'obstruction et la traiter sans abîmer vos tuyaux.",
    services: ["debouchage-gouttieres"],
    intro:
      "Une gouttière qui déborde n'est pas toujours sale. Très souvent, c'est la descente pluviale — le tuyau vertical qui conduit l'eau vers l'égout — qui ne laisse plus passer l'eau. Le problème est moins visible, mais ses conséquences sont les mêmes : eau le long de la façade, humidité dans les murs et, en hiver, glace dans le tuyau.",
    sections: [
      {
        h2: "Les signes d'une descente bouchée",
        list: [
          "la gouttière déborde surtout **près de la descente**, alors que le reste du chéneau est propre ;",
          "pendant une averse, **presque rien ne sort** au pied de la descente, ou seulement un filet irrégulier ;",
          "l'eau **ressort aux emboîtements** entre deux éléments du tuyau ;",
          "le **regard au pied du mur** déborde ou reste plein après la pluie ;",
          "une **tache d'humidité** apparaît sur le mur, à l'intérieur, derrière le tracé de la descente.",
        ],
      },
      {
        h2: "Où se forme le bouchon",
        paragraphs: [
          "Une descente se bouche rarement au milieu d'un tronçon droit. Les points critiques sont toujours les mêmes :",
        ],
        list: [
          "**l'entrée**, sous la crapaudine : feuilles, mousses, nids d'oiseaux ;",
          "**le premier coude**, sous la corniche, là où le tuyau rejoint le mur : les débris fins qui ont passé la grille s'y tassent ;",
          "**le pied de descente** (souvent une pièce en fonte appelée dauphin) et son raccord à l'égout ;",
          "**la partie enterrée** : conduite vers l'égout ou citerne, parfois envahie par des racines ou affaissée.",
        ],
      },
      {
        h2: "Un test simple pour localiser l'obstruction",
        paragraphs: [
          "Faites couler un tuyau d'arrosage dans la gouttière, juste au-dessus de la descente, et observez :",
        ],
        list: [
          "l'eau déborde immédiatement de la gouttière : le bouchon est à l'entrée ou dans le premier coude ;",
          "l'eau entre mais ressort à un emboîtement plus bas : le bouchon est juste sous ce point ;",
          "l'eau descend mais ressort par le regard ou par le pied de descente : l'obstruction est dans la partie enterrée ;",
          "en tapotant le tuyau, un son mat et plein signale la zone obstruée ; un son creux, une zone libre.",
        ],
      },
      {
        h2: "Ce que vous pouvez faire, et ce qu'il faut éviter",
        paragraphs: [
          "Si l'entrée est accessible sans risque, retirer la crapaudine et les débris visibles règle souvent le problème. Par le bas, un furet manuel introduit par le pied de descente ou par une trappe de visite peut déloger un bouchon de feuilles. Un rinçage au tuyau d'arrosage, à pression modérée, termine le travail.",
          "À éviter absolument :",
        ],
        list: [
          "**les déboucheurs chimiques** (soude caustique, acides) : ils attaquent le zinc et les joints et n'agissent pas sur un bouchon de feuilles ;",
          "**les tiges rigides** poussées au hasard, qui percent le PVC ou déboîtent les éléments ;",
          "**la haute pression depuis le haut** sans savoir où se trouve le bouchon : elle peut le compacter davantage.",
        ],
      },
      {
        h2: "Quand faire appel à un professionnel",
        paragraphs: [
          "Faites intervenir quelqu'un d'équipé si la descente est en hauteur, si elle passe dans le mur ou à l'intérieur du bâtiment, si le bouchon est dans la partie enterrée, ou si l'eau déborde pendant une pluie en cours. Notre service de [débouchage de gouttières et descentes](/services/debouchage-gouttieres) coûte **120 à 160 €** en semaine et **160 à 200 €** le week-end ou un jour férié, test d'écoulement compris ([voir les tarifs](/tarifs)).",
          "Pour comprendre les autres causes de débordement, lisez notre article [gouttière qui déborde : causes et solutions](/blog/gouttiere-qui-deborde-causes-solutions). Et si l'eau a déjà marqué le mur, notre guide sur les [infiltrations d'eau par la façade](/blog/infiltration-eau-facade-gouttieres) explique comment diagnostiquer les dégâts.",
        ],
      },
      {
        h2: "Éviter que cela recommence",
        paragraphs: [
          "Gardez une crapaudine en place au départ de chaque descente, faites nettoyer gouttières et descentes au moins une fois par an, idéalement après la chute des feuilles, et taillez les branches qui surplombent la toiture. Sous de grands arbres, des [protections anti-feuilles](/blog/protection-gouttieres-anti-feuilles-bruxelles) espacent les interventions. Avant l'été, un contrôle évite les mauvaises surprises lors des [orages](/blog/orages-ete-gouttieres-bruxelles-checklist).",
        ],
      },
    ],
    faqs: [
      {
        q: "Peut-on verser un déboucheur chimique dans une descente pluviale ?",
        a: "Non. Les déboucheurs à base de soude ou d'acide attaquent le zinc et les joints, et ils n'ont pas d'effet sur un bouchon de feuilles et de mousse. Un furet manuel et un rinçage à l'eau sont plus efficaces et sans risque pour le tuyau.",
      },
      {
        q: "L'eau ressort par le regard au pied du mur : est-ce la gouttière ?",
        a: "Non, le bouchon se trouve plus bas, dans la conduite enterrée ou au raccord à l'égout. Nettoyer la gouttière n'y changera rien : il faut déboucher la partie basse et vérifier l'écoulement jusqu'à l'égout.",
      },
    ],
    related: ["gouttiere-qui-deborde-causes-solutions", "infiltration-eau-facade-gouttieres", "nettoyer-gouttieres-soi-meme"],
  },
  {
    slug: "entretien-gouttieres-locataire-proprietaire",
    title: "Entretien des gouttières : qui paie ?",
    h1: "Locataire ou propriétaire : qui doit payer l'entretien des gouttières à Bruxelles ?",
    description:
      "Gouttières d'un logement loué à Bruxelles : ce qui revient au locataire, au propriétaire, le cas des appartements et comment éviter le conflit.",
    ...PUBLISHED,
    category: "Conseils",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=800&q=80",
    imageAlt: "Façade d'une maison louée avec gouttière et descente pluviale",
    excerpt:
      "Nettoyage, réparation, remplacement : entre locataire et propriétaire, la question revient chaque automne. Voici les principes qui s'appliquent à Bruxelles et les réflexes pour éviter un litige.",
    services: ["contrat-entretien-gouttieres", "nettoyage-gouttieres"],
    intro:
      "Une gouttière bouchée provoque un dégât des eaux et la question tombe aussitôt : à qui revenait l'entretien ? Il n'existe pas de réponse unique, mais des principes clairs. Ce guide les résume ; votre bail et la réglementation bruxelloise sur les réparations locatives restent les références.",
    sections: [
      {
        h2: "Le principe : menu entretien au locataire, grosses réparations au propriétaire",
        paragraphs: [
          "En bail d'habitation, le locataire prend en charge l'entretien courant et les petites réparations liées à l'usage du logement. Le propriétaire assume les grosses réparations, ainsi que celles dues à l'usure normale, à la vétusté ou à un cas de force majeure. La Région de Bruxelles-Capitale a précisé cette répartition dans une liste non limitative des réparations locatives, qui complète les règles du bail.",
          "Appliqué aux gouttières, cela donne en pratique :",
        ],
        list: [
          "**nettoyage périodique** des gouttières et descentes accessibles : généralement à charge du locataire ;",
          "**réparation ou remplacement** d'une gouttière usée, corrodée ou mal posée : à charge du propriétaire ;",
          "**dégâts causés par un défaut d'entretien** (gouttière jamais nettoyée qui déborde) : le locataire peut en être tenu responsable ;",
          "**dégâts dus à la vétusté** (zinc percé par l'âge, crochets rouillés) : responsabilité du propriétaire.",
        ],
        after: [
          "Lorsque l'entretien exige un travail en hauteur, une nacelle ou un professionnel, la situation est moins tranchée. C'est précisément le point à régler par écrit dans le bail.",
        ],
      },
      {
        h2: "Maison unifamiliale louée",
        paragraphs: [
          "Dans une maison louée entière, le locataire a l'usage de toute la toiture : c'est donc lui qui, en principe, fait nettoyer les gouttières. Il a intérêt à garder la facture : en cas de sinistre, elle prouve que l'entretien a été fait. Le propriétaire, lui, doit intervenir dès qu'on lui signale une gouttière qui fuit, se décroche ou arrive en fin de vie. Pour réparer une fuite, voyez notre guide [gouttière qui fuit ou qui goutte](/blog/gouttiere-qui-fuit).",
        ],
      },
      {
        h2: "Appartement : la gouttière est une partie commune",
        paragraphs: [
          "Dans un immeuble en copropriété, gouttières et descentes font en principe partie des parties communes. L'entretien est commandé par le syndic et payé par les copropriétaires selon leurs quotités. Le propriétaire bailleur peut ensuite répercuter la part d'entretien courant sur son locataire à travers les charges, si le bail le prévoit. Le fonctionnement complet est détaillé dans notre article sur les [gouttières en copropriété](/blog/gouttieres-copropriete-bruxelles).",
        ],
      },
      {
        h2: "Dégât des eaux : qui est responsable ?",
        paragraphs: [
          "Tout dépend de l'origine. Une gouttière bouchée faute de nettoyage met en cause celui qui devait l'entretenir. Une gouttière percée par l'âge met en cause le propriétaire. Dans les deux cas, les assureurs examinent l'état d'entretien, et une clause d'exclusion pour défaut d'entretien peut s'appliquer. Notre article [dégât des eaux et assurance](/blog/degat-des-eaux-gouttiere-assurance-bruxelles) explique les réflexes à avoir après un sinistre.",
        ],
      },
      {
        h2: "Cinq réflexes pour éviter le conflit",
        list: [
          "**Écrivez-le dans le bail** : qui fait nettoyer, à quelle fréquence, et qui paie si un professionnel est nécessaire.",
          "**Décrivez les gouttières dans l'état des lieux** d'entrée : matériau, état, fuites visibles.",
          "**Gardez les factures d'entretien**, datées et détaillées.",
          "**Signalez tout défaut par écrit** au propriétaire (e-mail ou courrier), avec photos.",
          "**Envisagez un contrat d'entretien** : un passage planifié chaque année règle la question pour les deux parties. Voir notre [contrat d'entretien annuel des gouttières](/services/contrat-entretien-gouttieres).",
        ],
        after: [
          "En cas de désaccord persistant, l'administration régionale Bruxelles Logement publie des informations sur les droits et obligations en bail d'habitation. Pour un nettoyage ponctuel, notre [service de nettoyage de gouttières](/services/nettoyage-gouttieres) fournit une facture détaillée utilisable par le locataire comme par le propriétaire.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le locataire doit-il nettoyer les gouttières d'une maison louée à Bruxelles ?",
        a: "En principe oui pour le nettoyage courant des gouttières et descentes accessibles, qui relève du menu entretien. Si l'intervention exige un professionnel ou du matériel de travail en hauteur, mieux vaut que le bail précise qui la paie.",
      },
      {
        q: "Qui paie le remplacement d'une gouttière usée ?",
        a: "Le propriétaire. Le remplacement d'une gouttière arrivée en fin de vie ou abîmée par la vétusté fait partie des grosses réparations, qui ne sont pas à charge du locataire.",
      },
    ],
    related: ["gouttieres-copropriete-bruxelles", "degat-des-eaux-gouttiere-assurance-bruxelles", "gouttiere-qui-fuit"],
  },
  {
    slug: "gouttieres-copropriete-bruxelles",
    title: "Gouttières et copropriété à Bruxelles",
    h1: "Gouttières en copropriété à Bruxelles : syndic, assemblée générale et répartition des frais",
    description:
      "Gouttières en copropriété : partie commune ou privative, rôle du syndic et de l'AG, répartition des frais et devis à présenter.",
    ...PUBLISHED,
    category: "Conseils",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1517490232338-06b912a786b5?w=800&q=80",
    imageAlt: "Immeuble à appartements et ses gouttières de toiture",
    excerpt:
      "Dans un immeuble, personne ne se sent responsable de la gouttière… jusqu'au dégât des eaux. Qui décide, qui paie, et comment faire voter un entretien régulier en assemblée générale.",
    services: ["contrat-entretien-gouttieres"],
    intro:
      "À Bruxelles, une grande partie des logements se trouve dans des immeubles en copropriété : immeubles à appartements, mais aussi maisons de maître divisées en plusieurs lots. Les gouttières y posent un problème classique : tout le monde en profite, personne ne s'en occupe. Voici comment la copropriété doit s'organiser.",
    sections: [
      {
        h2: "Gouttière : partie commune ou privative ?",
        paragraphs: [
          "Tout part de l'acte de base, qui définit ce qui est commun et ce qui est privatif. Dans la grande majorité des immeubles, la toiture, la façade, les gouttières et les descentes pluviales sont des parties communes, même lorsqu'elles ne desservent qu'un seul appartement.",
          "Il existe des exceptions à vérifier dans l'acte : la gouttière d'une terrasse privative, le toit plat d'une annexe dont un seul lot a l'usage, ou une toiture attribuée au lot du dernier étage. Dans ce cas, l'entretien revient au propriétaire du lot concerné.",
        ],
      },
      {
        h2: "Qui décide : le syndic ou l'assemblée générale ?",
        paragraphs: [
          "Le syndic gère l'entretien courant des parties communes et peut faire exécuter de sa propre initiative les mesures conservatoires urgentes. Un débouchage pendant une pluie, qui empêche un dégât des eaux, entre dans cette catégorie.",
          "Les travaux plus importants — remplacement des gouttières, réfection d'un chéneau, contrat d'entretien pluriannuel — sont décidés par l'assemblée générale, selon les règles de majorité prévues par la loi et par le règlement de copropriété. D'où l'intérêt d'arriver en AG avec un devis clair.",
        ],
      },
      {
        h2: "Comment les frais sont répartis",
        paragraphs: [
          "Les frais d'entretien et de réparation des parties communes sont répartis entre copropriétaires selon leurs quotités, sauf clause particulière du règlement. Un propriétaire qui loue son appartement peut répercuter la part d'entretien courant sur son locataire via les charges, si le bail le prévoit. Le détail entre locataire et bailleur est expliqué dans notre guide [locataire ou propriétaire : qui paie l'entretien](/blog/entretien-gouttieres-locataire-proprietaire).",
        ],
      },
      {
        h2: "Débordement en pleine nuit : que faire ?",
        list: [
          "prévenez immédiatement le syndic, par téléphone puis par écrit ;",
          "limitez les dégâts dans votre appartement : meubles éloignés du mur, récipients, coupure de l'électricité de la pièce si l'eau approche des prises ;",
          "prenez des photos et des vidéos : de la gouttière qui déborde, des traces à l'intérieur ;",
          "déclarez le sinistre à votre assureur et informez les voisins concernés.",
        ],
        after: [
          "Les suites côté assurance sont détaillées dans notre article [dégât des eaux dû à une gouttière](/blog/degat-des-eaux-gouttiere-assurance-bruxelles).",
        ],
      },
      {
        h2: "Préparer un devis qui passe en assemblée générale",
        paragraphs: [
          "Un devis vague (« nettoyage gouttières : forfait ») soulève des questions et fait reporter la décision. Pour être voté, un devis doit indiquer :",
        ],
        list: [
          "le linéaire de gouttières et le nombre de descentes traités ;",
          "le mode d'accès : échelle, accès par le toit ou nacelle, avec l'éventuelle autorisation d'occupation de la voie publique à demander à la commune ;",
          "ce qui est inclus : descentes, évacuation des déchets, test d'écoulement, rapport avec photos ;",
          "les travaux optionnels, chiffrés séparément : crochets, joints, tronçons à remplacer ;",
          "le prix TVA comprise et la périodicité proposée.",
        ],
        after: [
          "Nos fourchettes de prix sont publiques sur la page [tarifs](/tarifs) ; pour un immeuble, le prix dépend du nombre d'étages, de façades et de descentes.",
        ],
      },
      {
        h2: "La solution la plus simple : un contrat d'entretien",
        paragraphs: [
          "Plutôt que de revoter chaque année, l'assemblée peut approuver un [contrat d'entretien annuel des gouttières](/services/contrat-entretien-gouttieres) : passages planifiés, rapport pour le dossier de copropriété et remise sur le tarif standard. Pour les immeubles à corniche, notre guide sur le [chéneau de corniche](/blog/chenau-corniche-entretien) explique les points à faire vérifier en priorité.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le syndic peut-il faire déboucher une gouttière sans l'accord de l'assemblée générale ?",
        a: "Oui pour une intervention urgente destinée à éviter un dommage, qui relève des mesures conservatoires que le syndic peut prendre seul. Un remplacement ou un contrat d'entretien de longue durée doit en revanche être approuvé par l'assemblée générale.",
      },
      {
        q: "La gouttière qui dessert uniquement mon appartement est-elle à ma charge ?",
        a: "Pas forcément. Si l'acte de base la range dans les parties communes, son entretien est payé par tous les copropriétaires selon leurs quotités. Elle n'est à votre charge que si l'acte la rattache à votre lot, par exemple pour une terrasse privative.",
      },
    ],
    related: ["entretien-gouttieres-locataire-proprietaire", "degat-des-eaux-gouttiere-assurance-bruxelles", "chenau-corniche-entretien"],
  },
  {
    slug: "chenau-corniche-entretien",
    title: "Chéneau de corniche : l'entretien",
    h1: "Chéneau et corniche : entretenir la gouttière cachée des maisons bruxelloises",
    description:
      "Le chéneau en zinc caché derrière la corniche des maisons bruxelloises : signes d'alerte, entretien, réparation et façades protégées.",
    ...PUBLISHED,
    category: "Entretien",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80",
    imageAlt: "Toiture et corniche d'une maison de ville",
    excerpt:
      "Sur beaucoup de maisons de ville bruxelloises, la gouttière ne se voit pas : c'est un chéneau en zinc posé derrière la corniche. Quand il se bouche ou se perce, c'est la corniche et la façade qui trinquent.",
    services: ["reparation-gouttieres", "nettoyage-gouttieres"],
    intro:
      "Levez les yeux dans n'importe quelle rue de Saint-Gilles, d'Ixelles ou de Schaerbeek : la plupart des maisons de ville du XIXe et du début du XXe siècle se terminent par une corniche, souvent en bois peint, parfois ornée de consoles. Derrière elle, invisible de la rue, un chéneau en zinc recueille l'eau du toit. C'est l'élément le plus négligé de ces maisons, et l'un des plus coûteux quand il cède.",
    sections: [
      {
        h2: "Chéneau, corniche, gouttière : de quoi parle-t-on ?",
        paragraphs: [
          "La **gouttière pendante** est accrochée sous le bord du toit par des crochets : on la voit de la rue. Le **chéneau** est un canal posé sur la corniche ou intégré à celle-ci, habillé de zinc et souvent caché par la moulure. L'eau y est recueillie puis évacuée par une **naissance** vers la descente pluviale.",
          "Le chéneau a un avantage esthétique évident, mais il cumule les points faibles : on ne le voit pas se remplir, il est souvent d'origine, et une fuite s'y écoule directement dans le bois de la corniche ou dans la maçonnerie.",
        ],
      },
      {
        h2: "Les signes d'un chéneau bouché ou percé",
        list: [
          "**coulures noires ou vertes** sur la façade, sous la corniche ;",
          "**peinture de la corniche qui cloque** ou s'écaille, bois qui noircit ou s'effrite ;",
          "**mousse ou plantes** qui dépassent du bord du toit ;",
          "**tache d'humidité au plafond** de la pièce sous la toiture, côté rue ;",
          "**eau qui tombe en rideau** devant la façade pendant une averse, alors que la descente débite peu.",
        ],
        after: [
          "Ces signes recoupent ceux des [infiltrations d'eau par la façade](/blog/infiltration-eau-facade-gouttieres) : avant de refaire un enduit ou une peinture, faites toujours vérifier le chéneau.",
        ],
      },
      {
        h2: "L'entretien : plus technique qu'une gouttière pendante",
        paragraphs: [
          "Un chéneau se nettoie par le haut : depuis le toit, une lucarne ou une nacelle. Sur une maison de trois ou quatre niveaux, ce n'est pas un travail à faire soi-même. Un bon entretien comprend :",
        ],
        list: [
          "le retrait des feuilles, mousses et boues sur toute la longueur ;",
          "le dégagement de la naissance et le test d'écoulement jusqu'au pied de la descente ;",
          "le contrôle des soudures et des joints de dilatation du zinc ;",
          "la vérification de la pente : de l'eau qui stagne signale un affaissement ;",
          "un coup d'œil à l'état du bois de la corniche et des ardoises ou tuiles de rive.",
        ],
        after: [
          "Une fois par an suffit pour la plupart des maisons ; sous de grands arbres, prévoyez un passage à l'automne et un au printemps. Notre [nettoyage de gouttières](/services/nettoyage-gouttieres) inclut chéneaux et descentes.",
        ],
      },
      {
        h2: "Réparer ou remplacer le zinc",
        paragraphs: [
          "Une fissure ou une soudure qui a lâché se répare par ressoudure à l'étain, à condition que le zinc autour soit encore sain. Quand le métal est piqué sur une grande longueur ou que le fond est déformé, le remplacement du chéneau s'impose. À titre indicatif, un tronçon en zinc posé coûte **35 à 55 € le mètre linéaire**, et une réparation de joint ou de collet **40 à 80 €** (voir nos [tarifs](/tarifs) et le guide sur le [prix du remplacement de gouttières](/blog/prix-remplacement-gouttieres-bruxelles-2026)).",
          "Si le bois de la corniche est pourri, il faut le traiter ou le remplacer avant de reposer le zinc : un chéneau neuf sur un support affaibli ne tiendra pas sa pente. Pour les fuites ponctuelles, notre guide [gouttière qui fuit](/blog/gouttiere-qui-fuit) décrit les réparations possibles. Toutes ces interventions font partie de notre service de [réparation de gouttières](/services/reparation-gouttieres).",
        ],
      },
      {
        h2: "Façades protégées : se renseigner avant de changer",
        paragraphs: [
          "La corniche fait partie de la façade. Sur un bien classé, inscrit à l'inventaire du patrimoine ou situé dans une zone protégée, modifier son aspect — matériau, profil, couleur — peut nécessiter un permis d'urbanisme. En cas de doute, interrogez le service de l'urbanisme de votre commune avant les travaux. Remplacer le zinc par du zinc, à l'identique, reste la solution la plus simple et la plus durable.",
        ],
      },
    ],
    faqs: [
      {
        q: "Comment savoir si mon chéneau est plein sans monter sur le toit ?",
        a: "Observez la façade pendant une averse : de l'eau qui tombe devant la corniche ou coule sur la façade, alors que la descente débite peu, indique un chéneau bouché. Des coulures, de la mousse au bord du toit ou une peinture de corniche qui cloque sont d'autres signes.",
      },
      {
        q: "Peut-on remplacer un chéneau en zinc par du PVC ?",
        a: "Techniquement, des profils en PVC ou en aluminium existent, mais sur une corniche de maison de ville le zinc reste la référence : durabilité, soudure, aspect. Sur une façade protégée, changer de matériau peut en outre nécessiter un permis.",
      },
    ],
    related: ["infiltration-eau-facade-gouttieres", "gouttiere-qui-fuit", "prix-remplacement-gouttieres-bruxelles-2026"],
  },
  {
    slug: "gouttiere-qui-fuit",
    title: "Gouttière qui fuit : que faire ?",
    h1: "Gouttière qui fuit ou qui goutte : trouver l'origine de la fuite et la réparer",
    description:
      "Gouttière qui fuit ou qui goutte : localiser la fuite, ses causes (joint, soudure, corrosion, pente), les réparations et leur prix.",
    ...PUBLISHED,
    category: "Conseils",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80",
    imageAlt: "Gouttière qui goutte sous la pluie",
    excerpt:
      "Un goutte-à-goutte à un joint, un filet d'eau au milieu d'un tronçon : une gouttière qui fuit s'aggrave toujours. Voici comment trouver l'origine de la fuite et choisir la bonne réparation.",
    services: ["reparation-gouttieres"],
    intro:
      "Une gouttière qui goutte n'inonde pas la maison du jour au lendemain. Mais l'eau qui tombe toujours au même endroit finit par marquer la façade, saturer le pied du mur ou pourrir une planche de rive. Bonne nouvelle : la plupart des fuites se réparent localement, sans remplacer toute la gouttière.",
    sections: [
      {
        h2: "Localiser la fuite",
        paragraphs: [
          "La fuite se voit rarement par temps sec. Deux méthodes : observer la gouttière pendant une pluie, ou faire couler un tuyau d'arrosage depuis l'extrémité la plus éloignée de la descente et suivre l'eau. Notez l'endroit exact : un joint, une soudure, le milieu d'un tronçon, le fond de la gouttière ou sa naissance vers la descente. Chaque cas a sa cause.",
        ],
      },
      {
        h2: "Les causes les plus fréquentes",
        list: [
          "**Joint d'emboîtement usé** (PVC, aluminium) : le caoutchouc durcit et se rétracte avec les années ; la fuite apparaît à la jonction entre deux éléments.",
          "**Soudure fissurée** (zinc) : le zinc se dilate et se contracte avec les écarts de température ; une soudure ancienne finit par se fendre.",
          "**Corrosion ou perforation** : des feuilles humides qui stagnent contre le métal pendant des mois accélèrent la corrosion du zinc et de l'acier.",
          "**Fissure due au gel** : l'eau prise en glace dans une gouttière bouchée peut fendre le PVC ou ouvrir un joint (voir [gouttières et gel en hiver](/blog/gouttiere-gel-hiver-bruxelles-protection)).",
          "**Pente insuffisante ou inversée** : l'eau stagne et finit par passer au point faible le plus proche.",
          "**Naissance mal raccordée** : l'eau passe entre la gouttière et le départ de la descente.",
        ],
      },
      {
        h2: "Les réparations provisoires",
        paragraphs: [
          "En attendant une intervention, une bande d'étanchéité adhésive (type butyle) ou un mastic adapté aux gouttières peut arrêter un goutte-à-goutte sur une surface propre et sèche. C'est une solution de dépannage : ces produits vieillissent vite au soleil et au gel, et ils masquent parfois une corrosion qui continue dessous. Ne les appliquez jamais sur une surface mouillée ou encrassée, ils ne tiendraient pas.",
        ],
      },
      {
        h2: "Les réparations durables et leur prix",
        list: [
          "**Remplacement du joint ou du collet** : la réparation la plus courante, **40 à 80 €** selon l'accès.",
          "**Ressoudure du zinc** : si le métal autour de la fissure est sain, une soudure à l'étain rend l'étanchéité.",
          "**Remplacement d'un tronçon** : quand la zone est corrodée ou fendue. Comptez **15 à 25 €/ml** en PVC, **25 à 40 €/ml** en aluminium, **35 à 55 €/ml** en zinc, posé.",
          "**Reprise de la pente** : en repositionnant ou en remplaçant les crochets (**8 à 15 € pièce**).",
        ],
        after: [
          "Ces prix sont ceux de notre page [tarifs](/tarifs) ; le montant exact est fixé par un devis gratuit. Toutes ces interventions relèvent de notre service de [réparation de gouttières](/services/reparation-gouttieres).",
        ],
      },
      {
        h2: "Réparer ou tout remplacer ?",
        paragraphs: [
          "Une fuite isolée sur une gouttière saine se répare. En revanche, quand les fuites se multiplient, que le zinc est piqué sur plusieurs mètres ou que les crochets cèdent un peu partout, les réparations successives finissent par coûter plus cher qu'un remplacement. Notre article sur le [prix du remplacement des gouttières](/blog/prix-remplacement-gouttieres-bruxelles-2026) aide à comparer. Si la gouttière penche en plus de fuir, lisez aussi [gouttière décrochée ou qui penche](/blog/gouttiere-decrochee-qui-penche).",
          "Enfin, une fuite qui dure laisse des traces sur la façade. Si des taches apparaissent sur le mur ou à l'intérieur, notre guide sur les [infiltrations d'eau par la façade](/blog/infiltration-eau-facade-gouttieres) explique comment évaluer les dégâts.",
        ],
      },
    ],
    faqs: [
      {
        q: "Un mastic suffit-il pour réparer une gouttière qui fuit ?",
        a: "Comme dépannage, oui, sur une surface propre et sèche. À terme, le mastic vieillit avec le soleil et le gel et peut masquer une corrosion qui progresse. Une réparation durable passe par le remplacement du joint, une ressoudure ou le remplacement du tronçon.",
      },
      {
        q: "Combien coûte la réparation d'une gouttière qui fuit à un joint ?",
        a: "Sur notre grille, le remplacement d'un joint ou d'un collet de jonction coûte entre 40 et 80 € selon l'accessibilité. Le prix exact est fixé par un devis gratuit avant l'intervention.",
      },
    ],
    related: ["gouttiere-decrochee-qui-penche", "prix-remplacement-gouttieres-bruxelles-2026", "chenau-corniche-entretien"],
  },
  {
    slug: "gouttiere-decrochee-qui-penche",
    title: "Gouttière décrochée ou qui penche",
    h1: "Gouttière décrochée ou qui penche : causes, risques et que faire en attendant la réparation",
    description:
      "Gouttière qui penche ou se décroche : pourquoi, les risques pour la façade et les passants, les bons réflexes et le coût de la réparation.",
    ...PUBLISHED,
    category: "Urgence",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    imageAlt: "Gouttière de toiture à refixer",
    excerpt:
      "Une gouttière qui penche ne tombe pas tout de suite, mais elle ne se redresse jamais seule. Causes, risques, gestes à faire tout de suite et solutions de réparation.",
    services: ["reparation-gouttieres"],
    intro:
      "Une gouttière qui s'écarte du mur, qui fait un « ventre » ou dont une extrémité pend n'évacue plus correctement l'eau. Et au-dessus d'un trottoir, elle devient un danger pour les passants. La réparation est généralement simple si l'on n'attend pas.",
    sections: [
      {
        h2: "Pourquoi une gouttière se décroche",
        list: [
          "**Le poids** : une gouttière pleine de feuilles mouillées, de boue ou de glace pèse bien plus lourd que prévu, et les crochets finissent par plier.",
          "**Des crochets rouillés ou trop espacés** : sur les installations anciennes, la corrosion affaiblit les fixations une à une.",
          "**Un support abîmé** : si la planche de rive ou le bois de la corniche pourrit, les vis n'ont plus de prise.",
          "**Une échelle appuyée contre la gouttière**, lors d'un nettoyage ou de travaux de peinture.",
          "**Le vent** : une tempête peut soulever une gouttière déjà affaiblie, surtout en bout de façade.",
        ],
      },
      {
        h2: "Les risques si on attend",
        paragraphs: [
          "Une gouttière qui penche perd sa pente : l'eau s'accumule au point bas, déborde et ruisselle sur la façade. Le poids de cette eau tire encore davantage sur les crochets restants, et la déformation s'aggrave à chaque pluie. L'eau rejetée au pied du mur finit par saturer le sol, et les [infiltrations par la façade](/blog/infiltration-eau-facade-gouttieres) suivent.",
          "Il y a aussi un risque de chute. Sur une maison de ville dont la façade donne sur le trottoir, une section de gouttière qui tombe peut blesser quelqu'un, et le propriétaire est responsable des dommages causés par son bâtiment.",
        ],
      },
      {
        h2: "Que faire tout de suite",
        list: [
          "si la gouttière menace de tomber sur un passage, **balisez la zone** et écartez-en voitures et vélos ;",
          "**ne tirez pas dessus** et ne vous y accrochez pas pour la remettre en place ;",
          "si elle est accessible sans risque, **retirez les débris** qui l'alourdissent ;",
          "**prenez des photos** : elles serviront pour le devis et, après une tempête, pour votre assureur (voir notre article [dégât des eaux et assurance](/blog/degat-des-eaux-gouttiere-assurance-bruxelles)) ;",
          "faites intervenir un professionnel avant la prochaine grosse pluie.",
        ],
      },
      {
        h2: "La réparation : refixer, redresser, parfois remplacer",
        paragraphs: [
          "Dans la plupart des cas, il suffit de remplacer les crochets pliés ou rouillés et de rétablir la pente : quelques millimètres par mètre vers la descente, généralement de l'ordre de 3 à 5 mm. Sur notre grille, un crochet remplacé coûte **8 à 15 € pièce**, repositionnement compris ([voir les tarifs](/tarifs)).",
          "Si la planche de rive ou le bois de corniche est pourri, il faut le remplacer avant de refixer, sinon la gouttière se décrochera de nouveau. Et si la gouttière elle-même est déformée, fendue ou percée, le remplacement du tronçon est plus sûr qu'un redressement : comptez **15 à 25 €/ml** en PVC, **25 à 40 €/ml** en aluminium et **35 à 55 €/ml** en zinc, posé. Ces interventions font partie de notre service de [réparation de gouttières](/services/reparation-gouttieres).",
        ],
      },
      {
        h2: "Éviter que cela se reproduise",
        paragraphs: [
          "La meilleure prévention reste un nettoyage régulier : une gouttière vide pèse peu. Faites contrôler les crochets à chaque passage, surtout sur les installations de plus de vingt ou trente ans. Si la gouttière fuit en plus de pencher, lisez notre guide [gouttière qui fuit ou qui goutte](/blog/gouttiere-qui-fuit). Et si vos gouttières sont en fin de vie, comparez avec le [prix d'un remplacement complet](/blog/prix-remplacement-gouttieres-bruxelles-2026).",
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle pente doit avoir une gouttière ?",
        a: "Une pente de quelques millimètres par mètre vers la descente, généralement de l'ordre de 3 à 5 mm par mètre. Trop faible, l'eau stagne ; inversée, elle s'accumule à l'opposé de la descente et déborde.",
      },
      {
        q: "Une gouttière décrochée par une tempête est-elle couverte par l'assurance ?",
        a: "Les dégâts dus à une tempête sont souvent couverts par l'assurance habitation, selon les conditions du contrat. L'assureur peut toutefois refuser si la gouttière était déjà mal fixée ou mal entretenue. Prenez des photos et déclarez le sinistre rapidement.",
      },
    ],
    related: ["gouttiere-qui-fuit", "prix-remplacement-gouttieres-bruxelles-2026", "gouttiere-gel-hiver-bruxelles-protection"],
  },
  {
    slug: "choisir-entreprise-gouttieres-bruxelles",
    title: "Choisir son entreprise de gouttières",
    h1: "Choisir une entreprise de nettoyage de gouttières à Bruxelles sans mauvaise surprise",
    description:
      "Démarchage, devis flou, paiement en liquide : comment choisir une entreprise de nettoyage de gouttières à Bruxelles sans mauvaise surprise.",
    ...PUBLISHED,
    category: "Conseils",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1504510533704-35680f356dfd?w=800&q=80",
    imageAlt: "Devis et contrôle avant un nettoyage de gouttières",
    excerpt:
      "« On passait dans le quartier, vos gouttières sont bouchées. » Chaque automne, le démarchage reprend. Voici comment reconnaître une offre douteuse et ce qu'il faut vérifier avant de faire appel à une entreprise.",
    services: ["nettoyage-gouttieres", "demoussage-toiture"],
    intro:
      "Le nettoyage de gouttières est un service simple, ce qui en fait aussi une cible pour des intervenants peu scrupuleux. Un devis clair, une entreprise identifiable et un prix cohérent suffisent pourtant à éviter la plupart des problèmes.",
    sections: [
      {
        h2: "Le démarchage à domicile : les signaux d'alerte",
        paragraphs: [
          "Méfiez-vous d'un intervenant qui sonne sans avoir été appelé et vous annonce un problème urgent sur votre toit. Les scénarios reviennent souvent :",
        ],
        list: [
          "« vos gouttières débordent, on peut le faire tout de suite » ;",
          "« votre toit est couvert de mousse, il faut le traiter avant l'hiver » ;",
          "un prix annoncé oralement, qui grimpe une fois l'intervenant sur le toit ;",
          "un paiement demandé en liquide, immédiatement, sans facture ;",
          "aucune adresse, aucun numéro d'entreprise sur le véhicule ou les documents.",
        ],
        after: [
          "Un contrat conclu à votre domicile à la suite d'une visite non sollicitée bénéficie en principe d'un droit de rétractation de 14 jours. Le SPF Économie publie le détail de ces règles et permet de signaler les pratiques abusives.",
        ],
      },
      {
        h2: "Les cinq points à vérifier",
        list: [
          "**Le numéro d'entreprise** : toute entreprise active en Belgique en a un, inscrit à la Banque-Carrefour des Entreprises. Il doit figurer sur le devis et la facture, et se vérifie en ligne.",
          "**L'assurance responsabilité civile professionnelle** : elle couvre les dommages causés pendant l'intervention, une tuile cassée ou une gouttière pliée. Demandez-en la preuve.",
          "**Un devis écrit et détaillé** : linéaire traité, nombre de descentes, mode d'accès, évacuation des déchets, prix TVA comprise.",
          "**Une méthode adaptée** : pas de nettoyeur haute pression sur du zinc, pas de marche sur une toiture fragile ou mouillée, test d'écoulement en fin d'intervention.",
          "**Une facture** en bonne et due forme : elle vous sert de preuve d'entretien face à votre assureur.",
        ],
      },
      {
        h2: "Quel prix est normal ?",
        paragraphs: [
          "Pour une maison bruxelloise, un nettoyage de gouttières descentes comprises coûte en général **80 à 150 €** selon la longueur, la hauteur et l'accès. Un débouchage urgent se situe entre **120 et 200 €**, et un démoussage de toiture entre **3 et 6 € le m²**. Ce sont les fourchettes publiées sur notre page [tarifs](/tarifs).",
          "Un prix très inférieur cache souvent un travail bâclé (feuilles poussées dans la descente, pas de rinçage) ; un prix très supérieur annoncé à la porte doit vous faire demander un second devis. Comparez aussi ce qui est inclus : descentes, évacuation des déchets, test d'écoulement. Deux devis au même prix peuvent couvrir des prestations très différentes.",
        ],
      },
      {
        h2: "Le cas du démoussage",
        paragraphs: [
          "Le démoussage est le service le plus proposé en porte-à-porte. Un toit un peu vert n'est pas une urgence, et un nettoyage à haute pression mal mené peut abîmer les tuiles et les ardoises. Avant d'accepter, lisez notre guide [démoussage de toiture : quand, comment et à quel prix](/blog/demoussage-toiture-bruxelles-quand-comment-prix) et comparez avec notre service de [démoussage de toiture](/services/demoussage-toiture).",
        ],
      },
      {
        h2: "Faire soi-même ou faire appel à un professionnel ?",
        paragraphs: [
          "Sur une maison de plain-pied, le nettoyage peut se faire soi-même en respectant quelques règles de sécurité : voir [nettoyer ses gouttières soi-même](/blog/nettoyer-gouttieres-soi-meme). Au-delà d'un étage, ou pour un chéneau caché derrière une corniche, un professionnel équipé est plus sûr. Notre [service de nettoyage de gouttières](/services/nettoyage-gouttieres) fonctionne sur devis gratuit, prix fixé avant l'intervention. Et pour les produits à utiliser ou à éviter, consultez notre article sur les [produits de nettoyage des gouttières](/blog/produits-nettoyage-gouttieres-bruxelles).",
        ],
      },
    ],
    faqs: [
      {
        q: "Comment vérifier qu'une entreprise de gouttières est en ordre ?",
        a: "Demandez son numéro d'entreprise et vérifiez-le sur le site public de la Banque-Carrefour des Entreprises. Demandez aussi la preuve de son assurance responsabilité civile professionnelle et un devis écrit détaillé avant toute intervention.",
      },
      {
        q: "Un démarcheur a nettoyé mes gouttières et exige un prix exorbitant : que faire ?",
        a: "Ne payez pas en liquide sous la pression et exigez une facture détaillée. Un contrat conclu à votre domicile après une visite non sollicitée donne en principe droit à une rétractation. Signalez la pratique au SPF Économie.",
      },
    ],
    related: ["nettoyer-gouttieres-soi-meme", "demoussage-toiture-bruxelles-quand-comment-prix", "produits-nettoyage-gouttieres-bruxelles"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
