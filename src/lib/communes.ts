/**
 * Source unique des 19 communes desservies (zone réelle du site).
 * - neighbors : communes limitrophes réelles, uniquement parmi les 19.
 * - conseils / faqs : contenu propre à chaque commune (lieux vérifiés, pas de chiffres inventés).
 * - guides : slugs d'articles du blog utiles pour la commune.
 */
export interface CommuneFaq {
  q: string;
  a: string;
}

export interface Commune {
  slug: string;
  name: string;
  /** « d'Ixelles », « de Forest » : pour « les habitants de… » */
  de: string;
  neighbors: string[];
  conseils: string[];
  faqs: CommuneFaq[];
  guides: string[];
  /** Section longue propre aux communes retravaillées : question locale + paragraphes. */
  detail?: CommuneDetailBlock;
}

/** Portion de paragraphe : texte simple, ou lien interne contextuel. */
export type DetailSegment = { text: string } | { link: { href: string; label: string } };

export interface CommuneDetailBlock {
  kicker: string;
  question: string;
  paragraphs: DetailSegment[][];
}

export const communes: Commune[] = [
  {
    slug: "anderlecht",
    name: "Anderlecht",
    de: "d'Anderlecht",
    neighbors: ["molenbeek-saint-jean", "bruxelles", "saint-gilles", "forest"],
    conseils: [
      "À Cureghem et autour des Abattoirs, les maisons de rapport sont mitoyennes et leur gouttière de façade surplombe directement le trottoir : un débordement y abîme à la fois votre brique et le mur du voisin. Faites contrôler la descente jusqu'au regard au pied du mur, souvent encombré par les déchets de rue.",
      "Vers Neerpede et la vallée de la Pede, le paysage est plus ouvert : moins de grands arbres au-dessus des toits, mais davantage de poussières, de graines et de mousses. Dans la cité-jardin de La Roue, les maisons basses ont des gouttières visibles depuis le jardin : un coup d'œil après chaque tempête suffit souvent à repérer un crochet affaissé avant qu'il ne cède.",
    ],
    faqs: [
      {
        q: "Ma gouttière à Cureghem donne sur le trottoir : faut-il une autorisation pour intervenir ?",
        a: "Une nacelle ou un échafaudage posé sur le trottoir nécessite une autorisation d'occupation de la voie publique, à demander à la commune d'Anderlecht avant les travaux. Pour une intervention à l'échelle, renseignez-vous auprès de la commune si le passage des piétons doit être dévié.",
      },
      {
        q: "Maison à Neerpede : faut-il nettoyer aussi souvent qu'en ville ?",
        a: "Pas forcément plus souvent, mais pas pour les mêmes raisons. Sans grands arbres au-dessus du toit, l'automne pèse moins ; ce sont surtout les mousses et les dépôts apportés par le vent qui s'accumulent au fil de l'année. Un contrôle annuel, complété d'un démoussage si la toiture verdit, suffit dans la plupart des cas.",
      },
    ],
    guides: ["descente-pluviale-bouchee", "gouttiere-decrochee-qui-penche"],
  },
  {
    slug: "auderghem",
    name: "Auderghem",
    de: "d'Auderghem",
    neighbors: ["watermael-boitsfort", "woluwe-saint-pierre", "ixelles"],
    conseils: [
      "Près du Rouge-Cloître et en lisière de la Forêt de Soignes, programmez le nettoyage en deux temps : fin novembre pour les feuilles de chênes et des arbres de jardin, puis en fin d'hiver pour les feuilles de hêtres restées accrochées. Un seul passage en octobre laisse passer l'essentiel des chutes de la forêt.",
      "Dans la vallée de la Woluwe, l'air plus humide entretient les mousses sur les versants nord des toitures : faites inspecter ce côté en priorité. Sur les maisons quatre façades, vérifiez aussi les crochets de la façade la plus exposée au vent ; c'est souvent là qu'une gouttière commence à pencher.",
    ],
    faqs: [
      {
        q: "J'habite près du Rouge-Cloître : quand faut-il nettoyer les gouttières ?",
        a: "Deux passages valent mieux qu'un : fin novembre, quand la plupart des arbres sont dénudés, puis en février-mars pour les feuilles de hêtres qui tombent tardivement. Un nettoyage unique en octobre est vite annulé par les chutes suivantes.",
      },
      {
        q: "La vallée de la Woluwe a-t-elle un effet sur la toiture ?",
        a: "Oui, indirectement : l'humidité plus élevée en fond de vallée favorise mousses et algues, surtout sur les pans de toit orientés au nord ou à l'ombre des arbres. Ces mousses finissent dans la gouttière. Un démoussage suivi d'un traitement limite ces apports pendant plusieurs années.",
      },
      {
        q: "Une nacelle est-elle utile sur une villa d'Auderghem en bordure de forêt ?",
        a: "Pas systématiquement. Sur beaucoup de villas, un accès par l'échelle et le toit suffit ; la nacelle devient utile quand la façade est haute, le sol en pente ou l'emplacement trop juste pour poser une échelle. On tranche lors du devis gratuit, en fonction de la configuration.",
      },
    ],
    detail: {
      kicker: "Le calendrier du Soignes",
      question: "Quand nettoyer les gouttières d'une villa à Auderghem quand la forêt reste feuillue ?",
      paragraphs: [
        [
          { text: "Auderghem est bordée par la Forêt de Soignes, et le versant boisé ne perd pas ses feuilles en même temps que la ville. Les hêtres lâchent l'essentiel en novembre, mais une partie tient encore en janvier et en février : un nettoyage calé uniquement sur octobre est donc souvent annulé par la chute suivante." },
        ],
        [
          { text: "Les villas et maisons quatre façades, courantes autour du Rouge-Cloître et vers la vallée de la Woluwe, ont de longs chenaux qui suivent les quatre pans du toit. Chaque angle retient un peu de feuilles et de mousses, et sur ces volumes l'accès se prépare : la nacelle, quand elle est nécessaire, se gare sur la voirie avec une autorisation de la commune. Ce sont des gouttières en zinc ancien, à nettoyer à la main dans les angles pour ne pas déformer les profils." },
        ],
        [
          { text: "Le bon réflexe reste un passage principal en fin d'automne, complété par un contrôle en début d'année pour les toits directement sous les arbres. Deux communes boisées voisines suivent le même rythme : " },
          { link: { href: "/communes/watermael-boitsfort", label: "Watermael-Boitsfort" } },
          { text: " et " },
          { link: { href: "/communes/woluwe-saint-pierre", label: "Woluwe-Saint-Pierre" } },
          { text: "; notre " },
          { link: { href: "/services/nettoyage-gouttieres", label: "service de nettoyage de gouttières" } },
          { text: " détaille le nettoyage des longs chenaux." },
        ],
      ],
    },
    guides: ["gouttiere-decrochee-qui-penche", "demoussage-toiture-bruxelles-quand-comment-prix"],
  },
  {
    slug: "berchem-sainte-agathe",
    name: "Berchem-Sainte-Agathe",
    de: "de Berchem-Sainte-Agathe",
    neighbors: ["ganshoren", "koekelberg", "molenbeek-saint-jean"],
    conseils: [
      "Dans les lotissements de Berchem-Sainte-Agathe, beaucoup de villas ont un garage accolé à toit plat : sa petite évacuation se bouche aussi vite que la gouttière principale et on l'oublie souvent. Faites-la contrôler lors du même passage.",
      "Près de la réserve naturelle du Zavelenberg et des jardins de l'ouest de la commune, haies et arbres fruitiers donnent des débris plus fins que les grandes feuilles : pétales au printemps, petites feuilles et fruits en fin d'été. Ils forment une pâte qui passe la crapaudine et se tasse dans le coude de la descente. Si vos gouttières datent de la construction, profitez du nettoyage pour faire noter l'état des crochets et des joints : un remplacement planifié par sections coûte moins qu'une réparation en urgence.",
    ],
    faqs: [
      {
        q: "Notre garage a un toit plat : faut-il aussi le nettoyer ?",
        a: "Oui. L'avaloir d'un toit plat de garage est petit et reçoit souvent l'eau d'une partie de la toiture principale. S'il se bouche, l'eau stagne sur la membrane et finit par s'infiltrer. Le contrôler en même temps que les gouttières ne prend que quelques minutes.",
      },
      {
        q: "Nous habitons près du Zavelenberg : combien de nettoyages par an ?",
        a: "Un passage en novembre suffit en général. Si des arbres fruitiers ou de grandes haies surplombent le toit, ajoutez un contrôle en fin d'été : les petites feuilles et les fruits tombés bouchent surtout les descentes.",
      },
    ],
    guides: ["gouttiere-decrochee-qui-penche", "gouttiere-qui-fuit"],
  },
  {
    slug: "bruxelles",
    name: "Bruxelles-Ville",
    de: "de Bruxelles-Ville",
    neighbors: ["saint-josse-ten-noode", "schaerbeek", "ixelles", "etterbeek", "molenbeek-saint-jean", "anderlecht"],
    conseils: [
      "Dans le Pentagone, et en particulier autour de la Grand-Place, beaucoup de façades sont protégées ou reprises à l'inventaire du patrimoine : avant de remplacer une gouttière en zinc par un autre matériau, renseignez-vous auprès du service de l'urbanisme de la Ville. Dans les Marolles et autour du Sablon, les rues étroites compliquent l'accès ; si une nacelle doit stationner sur la voirie, l'autorisation communale se demande quelques jours à l'avance.",
      "À Laeken, autour du parc de Laeken et du Heysel, ainsi qu'à Neder-Over-Heembeek, ce sont les grands arbres qui dictent le calendrier : attendez que marronniers et érables aient perdu leurs feuilles avant de nettoyer. Le long de l'avenue Louise et dans le quartier européen, la plupart des immeubles relèvent d'un syndic, qui commande l'entretien des parties communes.",
    ],
    faqs: [
      {
        q: "Dans le centre historique, peut-on remplacer une gouttière en zinc par du PVC ?",
        a: "Pas sans vérifier. Dans le Pentagone, de nombreuses façades sont protégées ou situées dans une zone où l'aspect extérieur est encadré par l'urbanisme. Changer le matériau ou la teinte d'une gouttière visible depuis la rue peut nécessiter un permis. En cas de doute, interrogez le service de l'urbanisme de la Ville de Bruxelles.",
      },
      {
        q: "À Laeken, quand nettoyer les gouttières d'une maison proche du parc ?",
        a: "Fin novembre ou début décembre, quand les marronniers et les érables ont perdu l'essentiel de leurs feuilles. Un nettoyage en octobre est vite annulé par les chutes suivantes. Si la maison est directement sous les arbres, un contrôle au printemps enlève graines et fleurs.",
      },
      {
        q: "Comment se passe le stationnement d'une nacelle devant une maison du centre ?",
        a: "Elle occupe une partie de la chaussée ou du trottoir, ce qui suppose une autorisation d'occupation de la voie publique demandée à la Ville de Bruxelles. On évalue l'accès lors du devis gratuit et on vous indique si une nacelle est réellement nécessaire ou si le travail se fait à l'échelle, depuis le toit, à la perche.",
      },
    ],
    detail: {
      kicker: "Accès et hauteur dans le centre",
      question: "Pourquoi les gouttières des maisons hautes du centre de Bruxelles exigent-elles souvent une nacelle ?",
      paragraphs: [
        [
          { text: "Le cœur de Bruxelles-Ville est fait de maisons mitoyennes de trois ou quatre niveaux, serrées derrière une même ligne de corniche. Leur gouttière de façade court au-dessus du trottoir et se vide dans une descente fixée au mur. Quand un bouchon s'y forme, l'eau déborde sur la brique et sur le passant plutôt que dans votre jardin : d'où l'intérêt de ne pas laisser passer une saison entière." },
        ],
        [
          { text: "Sous ces hauteurs, l'échelle simple n'est pas toujours posable. Dans les Marolles ou autour du Sablon, les rues sont trop étroites pour écarter les pieds de l'échelle, et une nacelle doit alors occuper une partie de la voirie. Cette occupation du domaine public se demande à la Ville, en général quelques jours à l'avance, surtout si un marché ou une zone piétonne complique l'accès." },
        ],
        [
          { text: "Beaucoup d'immeubles du centre et du quartier européen relèvent d'une copropriété : la gouttière et la descente sont des parties communes, et c'est le syndic qui commande le nettoyage et fait voter le devis en assemblée. Pour situer le voisinage, voyez " },
          { link: { href: "/communes/ixelles", label: "nettoyage de gouttières à Ixelles" } },
          { text: " et " },
          { link: { href: "/communes/schaerbeek", label: "Schaerbeek" } },
          { text: ", ou le détail de notre " },
          { link: { href: "/services/nettoyage-gouttieres", label: "service de nettoyage de gouttières" } },
          { text: "." },
        ],
      ],
    },
    guides: ["gouttieres-copropriete-bruxelles", "chenau-corniche-entretien"],
  },
  {
    slug: "etterbeek",
    name: "Etterbeek",
    de: "d'Etterbeek",
    neighbors: ["ixelles", "bruxelles", "woluwe-saint-lambert", "woluwe-saint-pierre"],
    conseils: [
      "Autour de la place Jourdan et dans le quartier de La Chasse, beaucoup d'anciennes maisons unifamiliales ont été divisées en appartements : la gouttière de façade devient alors une partie commune, même si elle ne dessert qu'un toit. Avant de commander un nettoyage, vérifiez dans l'acte de base qui en a la charge.",
      "Dans les rues arborées proches du parc Jean-Félix Hap et du Cinquantenaire, les arbres d'alignement remplissent les chéneaux en quelques semaines d'automne : un passage fin novembre est plus efficace qu'en octobre. Sur les toits plats des immeubles, faites vérifier le trop-plein en même temps que l'avaloir : s'il manque ou s'il est bouché, l'eau n'a plus aucune issue pendant un orage.",
    ],
    faqs: [
      {
        q: "Maison divisée en appartements à Etterbeek : qui commande le nettoyage ?",
        a: "Si la gouttière est une partie commune, c'est le syndic (ou, sans syndic, l'ensemble des copropriétaires) qui décide et répartit la facture selon les quotités de l'acte de base. Un devis écrit détaillé permet de faire voter l'entretien en assemblée générale.",
      },
      {
        q: "Notre rue près du parc Jean-Félix Hap est bordée d'arbres : faut-il deux passages ?",
        a: "Souvent un seul suffit, s'il est bien placé : fin novembre, après la chute des feuilles. Un second contrôle au printemps n'est utile que si des arbres surplombent directement la toiture ou si la gouttière a déjà débordé l'hiver précédent.",
      },
      {
        q: "Notre immeuble d'Etterbeek a une toiture plate : faut-il la nettoyer aussi souvent ?",
        a: "Elle réclame un contrôle au moins une fois par an, en même temps que la gouttière. L'avaloir d'une toiture plate est petit et se bouche vite ; s'il déborde, l'eau stagne sur la membrane et peut finir par s'infiltrer. Quand un trop-plein existe, il doit rester dégagé pour jouer son rôle de secours.",
      },
    ],
    detail: {
      kicker: "Copropriété et toits plats",
      question: "Toits plats et gouttières cachées : comment savoir qu'un immeuble d'Etterbeek doit être nettoyé ?",
      paragraphs: [
        [
          { text: "Etterbeek est dense, et beaucoup de maisons des années 50 à 70 y ont été divisées en appartements. Sur ces immeubles, la gouttière longe la façade au niveau du dernier étage, parfois en retrait derrière une corniche, et la descente est encastrée dans le mur, si bien que l'obstruction reste invisible depuis le trottoir." },
        ],
        [
          { text: "Les indices sont indirects. Après une forte averse, regardez si l'eau passe par-dessus la gouttière au lieu de rejoindre la descente, si la corniche se tache, ou si un liseré sombre se dessine sous le débord du toit. Beaucoup d'immeubles ont aussi une toiture plate avec un avaloir et un trop-plein : si l'avaloir se bouche, l'eau stagne sur la membrane et finit par s'infiltrer. Ces deux points se contrôlent en même temps." },
        ],
        [
          { text: "Comme la gouttière est souvent une partie commune, l'intervention se décide en assemblée et le syndic en commande l'exécution ; un devis chiffré facilite la décision. Le stationnement de l'échelle compte aussi ici : entre arbres d'alignement et voitures le long des trottoirs, mieux vaut repérer l'accès avant de monter. Les mêmes contraintes reviennent côté " },
          { link: { href: "/communes/ixelles", label: "Ixelles" } },
          { text: " et " },
          { link: { href: "/communes/bruxelles", label: "Bruxelles-Ville" } },
          { text: ", tandis que notre " },
          { link: { href: "/services/nettoyage-gouttieres", label: "service de nettoyage de gouttières" } },
          { text: " précise le matériel employé sur les façades hautes." },
        ],
      ],
    },
    guides: ["gouttieres-copropriete-bruxelles", "entretien-gouttieres-locataire-proprietaire"],
  },
  {
    slug: "evere",
    name: "Evere",
    de: "d'Evere",
    neighbors: ["schaerbeek", "woluwe-saint-lambert", "bruxelles"],
    conseils: [
      "Près du Moeraske, la végétation spontanée — saules, peupliers, ronces — produit graines cotonneuses et feuilles fines qui atterrissent dans les gouttières dès la fin du printemps. Un contrôle en juin évite qu'elles ne se compactent avec les pluies d'été. Autour du cimetière de Bruxelles, les grands alignements d'arbres donnent un pic de feuilles en novembre : attendez qu'ils soient dénudés avant de nettoyer.",
      "Dans les quartiers de maisons semi-mitoyennes, la descente est souvent raccordée directement à l'égout : si l'eau remonte par le regard au pied du mur, le bouchon est plus bas que la gouttière, et un simple nettoyage du chéneau ne suffira pas.",
    ],
    faqs: [
      {
        q: "Habiter près du Moeraske change-t-il la fréquence de nettoyage ?",
        a: "Oui pour les maisons en bordure : les graines cotonneuses et les feuilles fines de la végétation du site arrivent dès mai-juin. Un contrôle au début de l'été, en plus du nettoyage d'automne, évite les bouchons au moment des orages.",
      },
      {
        q: "L'eau ressort par le regard au pied de la descente : que se passe-t-il ?",
        a: "Le bouchon se trouve dans la partie enterrée : coude au pied de la descente, raccord ou conduite vers l'égout. Nettoyer la gouttière ne changera rien ; il faut déboucher la descente et vérifier l'écoulement jusqu'au raccordement.",
      },
    ],
    guides: ["descente-pluviale-bouchee", "gouttiere-decrochee-qui-penche"],
  },
  {
    slug: "forest",
    name: "Forest",
    de: "de Forest",
    neighbors: ["saint-gilles", "uccle", "anderlecht"],
    conseils: [
      "Autour du parc Duden et du parc de Forest, les grands arbres font de novembre le mois critique ; les rues qui montent vers Altitude Cent reçoivent en plus les feuilles portées par le vent. Attendez la fin de la chute pour nettoyer, sinon le travail est à refaire.",
      "Dans le bas de la commune, près de l'abbaye de Forest et du Wiels, les rangées de maisons ouvrières partagent souvent une même corniche : organiser le nettoyage avec vos voisins de rangée permet de traiter tout le linéaire d'une traite et d'éviter que le bouchon du voisin ne déborde chez vous. Sur les rues en pente, l'eau d'une gouttière qui déborde ruisselle vers les maisons situées plus bas : si votre jardin est en contrebas, surveillez le raccord entre descente et égout.",
    ],
    faqs: [
      {
        q: "Nous vivons en rangée près de l'abbaye de Forest : faut-il se coordonner avec les voisins ?",
        a: "C'est recommandé. Quand plusieurs maisons partagent une corniche continue, l'eau et les débris passent d'un toit à l'autre. Nettoyer toute la rangée le même jour évite qu'un bouchon resté chez un voisin ne refasse déborder votre partie.",
      },
      {
        q: "Maison près du parc Duden : quand programmer le nettoyage ?",
        a: "Fin novembre ou début décembre, quand les grands arbres du parc ont perdu leurs feuilles. Si la maison est sur la pente, un contrôle rapide après les grosses tempêtes d'automne permet de dégager la crapaudine avant qu'elle ne bloque la descente.",
      },
    ],
    guides: ["chenau-corniche-entretien", "gouttiere-qui-fuit"],
  },
  {
    slug: "ganshoren",
    name: "Ganshoren",
    de: "de Ganshoren",
    neighbors: ["jette", "koekelberg", "berchem-sainte-agathe"],
    conseils: [
      "Ganshoren garde de nombreux espaces verts, à commencer par le parc du château de Rivieren, et beaucoup de jardins en intérieur d'îlot. Les maisons qui les bordent reçoivent surtout des feuilles fines de bouleaux, charmes et arbres fruitiers, qui se tassent dans les coudes des descentes plus que dans le chéneau. Demandez donc un contrôle de l'écoulement complet, pas seulement un ramassage des feuilles visibles.",
      "Sur une parcelle en pente, l'eau qui déborde longe les fondations du côté bas. Vérifiez que chaque descente est bien raccordée et que la grille du regard n'est pas colmatée par la terre du jardin.",
    ],
    faqs: [
      {
        q: "Nous habitons près du parc du château de Rivieren : quand nettoyer ?",
        a: "Un passage fin novembre, après la chute des feuilles, couvre l'essentiel. Si un bouleau ou un charme surplombe le toit, ajoutez un contrôle au printemps : chatons et petites feuilles bouchent surtout les descentes.",
      },
      {
        q: "La gouttière paraît propre mais déborde quand il pleut fort : pourquoi ?",
        a: "Le bouchon est probablement dans la descente, souvent au niveau d'un coude ou du raccord au sol. Les feuilles fines passent la crapaudine puis s'y compactent. Un test d'écoulement à l'eau permet de le localiser avant de déboucher.",
      },
    ],
    guides: ["descente-pluviale-bouchee", "gouttiere-qui-fuit"],
  },
  {
    slug: "ixelles",
    name: "Ixelles",
    de: "d'Ixelles",
    neighbors: ["bruxelles", "saint-gilles", "uccle", "etterbeek", "watermael-boitsfort", "auderghem"],
    conseils: [
      "Autour des étangs d'Ixelles et de l'abbaye de la Cambre, les grands arbres et l'humidité du fond de vallée entretiennent mousses et algues : faites inspecter le versant nord de la toiture autant que la gouttière. À Boondael et près des campus du Solbosch et de la Plaine, les maisons avec jardin reçoivent davantage de feuilles que le centre : un passage fin novembre est le plus rentable.",
      "Dans les quartiers Châtelain, Flagey ou Saint-Boniface, beaucoup de maisons de maître ont été divisées en appartements : la gouttière de façade devient une partie commune, gérée par le syndic ou l'ensemble des propriétaires. Et pour une façade Art nouveau, ne laissez personne utiliser un nettoyeur haute pression sur le zinc ornemental.",
    ],
    faqs: [
      {
        q: "Près des étangs d'Ixelles, pourquoi la toiture verdit-elle si vite ?",
        a: "L'ombre des grands arbres et l'humidité plus forte autour des étangs ralentissent le séchage des tuiles et ardoises. Mousses et algues s'y installent, puis glissent dans la gouttière. Un démoussage suivi d'un traitement préventif réduit ces apports.",
      },
      {
        q: "Maison de maître divisée en appartements à Ixelles : qui paie la gouttière ?",
        a: "En copropriété, la gouttière et les descentes sont en principe des parties communes : l'entretien est décidé par le syndic ou l'assemblée générale et réparti selon les quotités de l'acte de base. Vérifiez ce que prévoit votre acte, certaines copropriétés fixant d'autres règles.",
      },
      {
        q: "La corniche d'une maison de maître d'Ixelles cache-t-elle toujours la gouttière ?",
        a: "Pas toujours, mais c'est fréquent sur ce type de façade. On juge alors sur des signes indirects : corniche tachée, peinture qui cloque, écoulement faible de la descente. En cas de doute, une inspection depuis le toit tranche avant toute réparation de la corniche.",
      },
    ],
    detail: {
      kicker: "Corniches et chéneaux cachés",
      question: "Comment repérer une gouttière bouchée derrière la corniche d'une maison d'Ixelles ?",
      paragraphs: [
        [
          { text: "Ixelles compte beaucoup de maisons de maître, souvent divisées en appartements autour du quartier Châtelain, de Flagey ou de Saint-Boniface. Sur ces façades, la gouttière est fréquemment un chéneau en zinc placé en retrait, caché derrière une corniche : depuis la rue, on ne voit pas qu'il est plein." },
        ],
        [
          { text: "Les indices arrivent par la corniche elle-même : un bois qui se tache, une peinture qui cloque, un liseré noir sous le nez de la corniche, ou une descente qui ne coule presque plus pendant une averse. Ces signes disent que l'eau passe déjà par-dessus le chéneau et imbibe le bois, et non qu'il s'agit d'un simple défaut d'aspect." },
        ],
        [
          { text: "La gouttière et la corniche relevant des parties communes, c'est au syndic ou à l'assemblée de décider du nettoyage, devis à l'appui. L'accès mérite aussi d'être anticipé : sur les rues bordées d'arbres d'alignement et de voitures stationnées, il faut savoir où poser l'échelle avant de monter. Voir aussi les pages " },
          { link: { href: "/communes/bruxelles", label: "Bruxelles-Ville" } },
          { text: " et " },
          { link: { href: "/communes/etterbeek", label: "Etterbeek" } },
          { text: ", et notre " },
          { link: { href: "/services/nettoyage-gouttieres", label: "service de nettoyage de gouttières" } },
          { text: "." },
        ],
      ],
    },
    guides: ["chenau-corniche-entretien", "gouttieres-copropriete-bruxelles"],
  },
  {
    slug: "jette",
    name: "Jette",
    de: "de Jette",
    neighbors: ["ganshoren", "koekelberg", "bruxelles"],
    conseils: [
      "Autour du bois du Laerbeek, du parc Roi Baudouin et de l'abbaye de Dieleghem, les maisons côté vert reçoivent des feuilles de chênes et de hêtres en plus de celles de leurs propres jardins : un nettoyage fin novembre y est plus efficace qu'en octobre.",
      "Plus près de la place Cardinal Mercier et de la gare de Jette, le bâti est mitoyen et les descentes courent souvent sur la façade avant : un bouchon s'y signale par des coulures sur la brique ou une tache au plafond du rez-de-chaussée. Dans les quartiers de villas, les bouleaux lâchent leurs chatons en avril-mai : si vous en avez un au-dessus du toit, prévoyez un contrôle au printemps en plus de celui d'automne.",
    ],
    faqs: [
      {
        q: "Nous avons un bouleau au-dessus du toit : faut-il nettoyer au printemps ?",
        a: "C'est conseillé. Les chatons de bouleau tombent en avril-mai, passent facilement la crapaudine et se collent dans la descente. Un contrôle en mai, en plus du nettoyage d'automne, évite qu'ils ne forment un bouchon avant les orages d'été.",
      },
      {
        q: "Maison mitoyenne près de la place Cardinal Mercier : comment repérer un bouchon ?",
        a: "Regardez la façade par temps de pluie : un filet d'eau qui passe par-dessus la gouttière, des coulures sombres sous la corniche ou une descente qui ne débite presque rien au pied du mur. À l'intérieur, une tache au plafond sous la toiture doit aussi alerter.",
      },
    ],
    guides: ["descente-pluviale-bouchee", "entretien-gouttieres-quand-faire"],
  },
  {
    slug: "koekelberg",
    name: "Koekelberg",
    de: "de Koekelberg",
    neighbors: ["ganshoren", "jette", "molenbeek-saint-jean", "berchem-sainte-agathe"],
    conseils: [
      "Autour de la basilique et du parc Élisabeth, les alignements d'arbres envoient leurs feuilles dans les gouttières des rues voisines dès les premiers coups de vent d'automne : un passage fin novembre est le bon compromis.",
      "Près de la place Simonis, les maisons mitoyennes étroites n'ont souvent qu'une descente en façade avant, qui reçoit parfois l'eau des deux versants : si elle se bouche, c'est toute la toiture qui déborde. Comme la commune est très dense, pensez aux voisins : un nettoyage organisé le même jour sur plusieurs maisons d'une rangée évite de déplacer le bouchon d'un toit à l'autre.",
    ],
    faqs: [
      {
        q: "Nous habitons près du parc Élisabeth : quand nettoyer ?",
        a: "Fin novembre, quand les arbres du parc et des avenues voisines ont perdu leurs feuilles. Nettoyer plus tôt oblige souvent à repasser. Si la maison a déjà débordé l'hiver précédent, faites aussi vérifier la descente au printemps.",
      },
      {
        q: "Une seule descente pour toute la maison : est-ce un problème ?",
        a: "Ce n'est pas un défaut en soi, mais c'est un point faible : si cette descente se bouche, toute l'eau de la toiture n'a plus d'issue. Elle doit être contrôlée à chaque nettoyage, crapaudine comprise, et débouchée au moindre ralentissement.",
      },
    ],
    guides: ["chenau-corniche-entretien", "descente-pluviale-bouchee"],
  },
  {
    slug: "molenbeek-saint-jean",
    name: "Molenbeek-Saint-Jean",
    de: "de Molenbeek-Saint-Jean",
    neighbors: ["anderlecht", "bruxelles", "koekelberg", "berchem-sainte-agathe"],
    conseils: [
      "Dans le vieux Molenbeek, entre le canal et la chaussée de Gand, les maisons de rapport de trois ou quatre niveaux ont des gouttières hautes, parfois jamais nettoyées depuis des années. Avant de rénover une façade ou une toiture, faites d'abord déboucher et contrôler les descentes : sinon l'eau abîmera les travaux neufs.",
      "Plus à l'ouest, autour du Scheutbos, du parc Marie-José et du château du Karreveld, les maisons avec jardin reçoivent beaucoup plus de feuilles : un nettoyage en fin d'automne s'impose. Si vous mettez un bien en location, gardez les factures d'entretien : elles comptent en cas de dégât des eaux chez un locataire.",
    ],
    faqs: [
      {
        q: "Maison près du Scheutbos ou du Karreveld : combien de nettoyages par an ?",
        a: "Un passage fin novembre suffit dans la plupart des cas. Si de grands arbres surplombent directement le toit, un second contrôle au printemps évite que graines et fleurs ne bouchent la descente avant l'été.",
      },
      {
        q: "Propriétaire bailleur à Molenbeek : dois-je prouver l'entretien des gouttières ?",
        a: "Aucun certificat n'est exigé, mais en cas de dégât des eaux, l'assureur peut vérifier que l'entretien a été fait. Une facture datée décrivant l'intervention est la preuve la plus simple. Qui paie l'entretien entre locataire et propriétaire dépend du bail et de la nature du travail.",
      },
    ],
    guides: ["entretien-gouttieres-locataire-proprietaire", "degat-des-eaux-gouttiere-assurance-bruxelles"],
  },
  {
    slug: "saint-gilles",
    name: "Saint-Gilles",
    de: "de Saint-Gilles",
    neighbors: ["ixelles", "forest", "anderlecht", "bruxelles"],
    conseils: [
      "Autour du Parvis, de la Barrière et de l'hôtel de ville, les maisons de maître ont souvent une corniche en bois avec un chéneau en zinc posé derrière : de la rue, on ne voit pas qu'il est plein. Des coulures sous la corniche ou une peinture qui cloque sont les premiers signes.",
      "Près de la maison Horta et dans le haut de la commune, sur les façades protégées, il est prudent de reproduire le zinc et les profils d'origine lors d'une réparation et de se renseigner sur la nécessité d'un permis. Dans le bas de Saint-Gilles, vers la gare du Midi, les cours arrière sont très étroites : l'accès à la façade arrière passe souvent par l'intérieur de la maison, ce qui se prépare avec les occupants.",
    ],
    faqs: [
      {
        q: "Ma corniche en bois est tachée : le chéneau est-il en cause ?",
        a: "Très souvent. Quand le chéneau en zinc caché derrière la corniche est bouché ou percé, l'eau déborde vers l'arrière et imbibe le bois. Taches, peinture qui cloque ou bois qui s'effrite indiquent qu'il faut nettoyer le chéneau et vérifier ses soudures avant de repeindre.",
      },
      {
        q: "Pourquoi faut-il passer par l'intérieur pour la façade arrière ?",
        a: "Dans beaucoup de maisons du bas de Saint-Gilles, la cour arrière est trop étroite pour y dresser une échelle à bonne inclinaison. L'accès se fait alors par une fenêtre d'étage ou par le toit, ce qui demande l'accord et la présence des occupants.",
      },
    ],
    guides: ["chenau-corniche-entretien", "gouttiere-qui-fuit"],
  },
  {
    slug: "saint-josse-ten-noode",
    name: "Saint-Josse-ten-Noode",
    de: "de Saint-Josse-ten-Noode",
    neighbors: ["schaerbeek", "bruxelles"],
    conseils: [
      "Autour de la place Madou et le long de la chaussée de Louvain, beaucoup d'immeubles sont mitoyens sur toute leur hauteur et leurs toits plats se touchent : une évacuation bouchée chez le voisin peut renvoyer l'eau chez vous. Faites vérifier les avaloirs et les trop-pleins en même temps que les gouttières.",
      "Près du Botanique et du square Armand Steurs, les arbres sont plus nombreux qu'ailleurs dans la commune : un contrôle en fin d'automne y reste utile. Dans une commune aussi dense, le stationnement du matériel se prépare : si une nacelle est nécessaire, l'autorisation d'occupation de la voie publique se demande à la commune avant l'intervention.",
    ],
    faqs: [
      {
        q: "Faut-il une autorisation pour une nacelle à Saint-Josse ?",
        a: "Oui, dès qu'une nacelle ou un échafaudage occupe la voirie ou le trottoir, une autorisation d'occupation de la voie publique doit être demandée à la commune de Saint-Josse-ten-Noode. Comptez quelques jours de délai et prévoyez-le dans le planning.",
      },
      {
        q: "Près du Botanique, faut-il nettoyer plus souvent ?",
        a: "Pour les immeubles directement sous les arbres, un passage fin novembre est conseillé chaque année. Ailleurs dans la commune, les gouttières reçoivent surtout des poussières et des sédiments : un contrôle annuel des gouttières et des avaloirs suffit en général.",
      },
    ],
    guides: ["gouttieres-copropriete-bruxelles", "choisir-entreprise-gouttieres-bruxelles"],
  },
  {
    slug: "schaerbeek",
    name: "Schaerbeek",
    de: "de Schaerbeek",
    neighbors: ["saint-josse-ten-noode", "bruxelles", "evere", "woluwe-saint-lambert"],
    conseils: [
      "Autour du parc Josaphat, les grands arbres et l'humidité de la vallée du parc chargent les gouttières des avenues voisines en feuilles et en mousses : c'est le secteur de la commune où deux passages par an sont le plus souvent nécessaires.",
      "Le long des avenues Louis Bertrand et Rogier, les maisons Belle Époque ont des chéneaux cachés derrière des corniches ornées : un débordement se voit d'abord par des coulures sur la corniche. Autour de la place Colignon et de Dailly, beaucoup de maisons ont été divisées en appartements, et la gouttière devient une partie commune. Dans les rues bordées de tilleuls, un contrôle en juin, après la floraison, évite que les débris collants ne se compactent avec les orages d'été.",
    ],
    faqs: [
      {
        q: "Nous habitons près du parc Josaphat : combien de nettoyages par an ?",
        a: "Deux sont souvent utiles pour les maisons en bordure du parc : fin novembre pour les feuilles, puis au printemps pour les fleurs, graines et mousses. Plus loin du parc, un passage annuel bien placé suffit en général.",
      },
      {
        q: "Maison Belle Époque avenue Louis Bertrand : comment voir si le chéneau est plein ?",
        a: "De la rue, on ne voit pas l'intérieur d'un chéneau caché. Les signes sont indirects : coulures ou mousse sur la corniche, peinture qui s'écaille sous le débord du toit, descente qui ne débite presque rien pendant une averse. En cas de doute, une inspection depuis le toit tranche.",
      },
    ],
    guides: ["chenau-corniche-entretien", "gouttieres-copropriete-bruxelles"],
  },
  {
    slug: "uccle",
    name: "Uccle",
    de: "d'Uccle",
    neighbors: ["forest", "ixelles", "watermael-boitsfort"],
    conseils: [
      "Uccle se partage entre des quartiers plus bâtis, autour de la chaussée d'Alsemberg et du centre, et le sud de la commune — Saint-Job, Fort-Jaco, Verrewinkel, le Kauwberg — où les villas sont entourées de grands arbres. Dans ce sud boisé, une maison sous des chênes ou des hêtres demande souvent deux passages par an.",
      "Autour du parc de Wolvendael et de l'Observatoire, les rues en pente font ruisseler l'eau d'une gouttière qui déborde vers les fondations du côté bas. Et sur les villas quatre façades, les gouttières passent souvent au-dessus de vérandas ou de toits plats d'annexes : faites vérifier ces petites évacuations en même temps.",
    ],
    faqs: [
      {
        q: "Villa à Saint-Job ou à Fort-Jaco sous les arbres : deux passages par an ?",
        a: "Oui dans la plupart des cas : fin novembre pour les feuilles de chênes et de hêtres, puis au printemps pour les fleurs, graines et samares. Des protections anti-feuilles peuvent espacer les nettoyages, sans les supprimer.",
      },
      {
        q: "Notre gouttière passe au-dessus d'une véranda : faut-il la nettoyer aussi ?",
        a: "Oui. Le toit d'une véranda reçoit les débris qui glissent de la toiture principale et ses petites gouttières se bouchent vite. Si elles débordent, l'eau coule le long des profilés et peut entrer par les joints. Elles se nettoient lors du même passage.",
      },
      {
        q: "Faut-il vérifier toutes les descentes d'une villa d'Uccle ?",
        a: "Oui, dans l'idéal. Sur une quatre façades, chaque pan de toit a son point bas et sa descente ; un nettoyage limité à la façade visible laisse souvent un angle bouché de l'autre côté. Un contrôle complet évite qu'une section oubliée ne déborde à la prochaine averse.",
      },
    ],
    detail: {
      kicker: "Villas, chenaux et pentes",
      question: "Pourquoi les villas quatre façades d'Uccle demandent-elles plus d'entretien de gouttières ?",
      paragraphs: [
        [
          { text: "Beaucoup de villas d'Uccle sont des quatre façades : le toit descend de tous les côtés et la gouttière en fait le tour, avec des chenaux dans les angles et parfois un chéneau encaissé. Plus la maison est large, plus le linéaire à parcourir est long et plus les creux où se déposent feuilles et mousses se multiplient." },
        ],
        [
          { text: "S'ajoute la végétation. Les avenues plantées et les jardins denses du sud de la commune, vers Saint-Job ou Fort-Jaco, lâchent des feuilles larges et des samares qui s'agglutinent dans les angles. Or sur ces façades hautes, mieux vaut organiser l'accès à l'avance : l'échelle réclame de la place au sol, et une nacelle doit parfois immobiliser un emplacement, avec l'autorisation communale correspondante." },
        ],
        [
          { text: "Le relief compte aussi. Sur un terrain en pente, l'eau d'une gouttière qui déborde file vers le bas et longe les fondations du côté aval : mieux vaut un entretien suivi qu'une réparation d'urgence. Les configurations voisines sont décrites côté " },
          { link: { href: "/communes/ixelles", label: "Ixelles" } },
          { text: " et " },
          { link: { href: "/communes/watermael-boitsfort", label: "Watermael-Boitsfort" } },
          { text: " ; notre " },
          { link: { href: "/services/nettoyage-gouttieres", label: "service de nettoyage de gouttières" } },
          { text: " explique le traitement des longs linéaires." },
        ],
      ],
    },
    guides: ["entretien-gouttieres-quand-faire", "protection-gouttieres-anti-feuilles-bruxelles"],
  },
  {
    slug: "watermael-boitsfort",
    name: "Watermael-Boitsfort",
    de: "de Watermael-Boitsfort",
    neighbors: ["auderghem", "uccle", "ixelles"],
    conseils: [
      "Dans les cités-jardins du Logis et de Floréal, les maisons basses se suivent en rangées et partagent souvent une même ligne de gouttière : un nettoyage coordonné avec vos voisins évite de laisser un bouchon au milieu du linéaire. Ces ensembles font l'objet de mesures de protection : renseignez-vous avant de changer matériaux ou teintes.",
      "Autour des étangs de Boitsfort et en lisière de la Forêt de Soignes, les hêtres gardent une partie de leurs feuilles tout l'hiver : un passage en fin d'hiver complète celui d'automne. Près de la place Keym et de la gare de Watermael, le bâti est plus serré et les arbres moins présents : un seul passage annuel suffit souvent.",
    ],
    faqs: [
      {
        q: "Nous habitons au Logis ou à Floréal : peut-on changer la couleur des gouttières ?",
        a: "Pas librement. Les cités-jardins du Logis et de Floréal sont protégées, et l'aspect des façades — gouttières comprises — y est encadré. Avant tout remplacement, renseignez-vous auprès du service de l'urbanisme de la commune ; pour un simple nettoyage, aucune démarche n'est nécessaire.",
      },
      {
        q: "Près de la place Keym, faut-il aussi deux ou trois passages par an ?",
        a: "Rarement. Loin de la forêt et des grands parcs, un nettoyage fin novembre couvre l'essentiel. Les passages multiples concernent surtout les maisons en lisière de la Forêt de Soignes ou autour des étangs.",
      },
      {
        q: "Peut-on souder une gouttière en cuivre des cités-jardins au lieu de la remplacer ?",
        a: "Souvent, oui, tant que le métal n'est pas percé et que les fixations tiennent. On nettoie sans abrasif puis on reprend la soudure au lieu de tout déposer, ce qui préserve la patine. Un remplacement ne se justifie que là où le cuivre est franchement troué ou arraché.",
      },
    ],
    detail: {
      kicker: "Cités-jardins et gouttières en cuivre",
      question: "Comment entretenir les gouttières en cuivre des cités-jardins de Watermael-Boitsfort ?",
      paragraphs: [
        [
          { text: "Dans les cités-jardins du Logis et de Floréal, les maisons basses se suivent en rangées et leurs gouttières forment parfois une seule ligne continue d'un pignon à l'autre. Nettoyer une habitation sans ses voisines revient souvent à laisser le bouchon glisser plus loin sur la même ligne d'écoulement." },
        ],
        [
          { text: "Beaucoup de ces maisons ont gardé des gouttières en zinc ou en cuivre d'époque. Le cuivre se nettoie sans abrasif pour ne pas rayer la patine, et une soudure peut suffire là où le métal reste sain. Ces quartiers étant protégés, mieux vaut interroger le service de l'urbanisme avant de changer un matériau ou une teinte visible depuis la rue." },
        ],
        [
          { text: "Plus près de la place Keym et de la gare de Watermael, le bâti est plus serré et les arbres moins présents : un passage annuel y suffit souvent, alors qu'en lisière des étangs de Boitsfort et de la Forêt de Soignes, les hêtres continuent de lâcher des feuilles une partie de l'hiver. Le même bâti de rangée se retrouve côté " },
          { link: { href: "/communes/auderghem", label: "Auderghem" } },
          { text: " et " },
          { link: { href: "/communes/uccle", label: "Uccle" } },
          { text: " ; notre " },
          { link: { href: "/services/nettoyage-gouttieres", label: "service de nettoyage de gouttières" } },
          { text: " explique comment nous traitons le zinc et le cuivre anciens." },
        ],
      ],
    },
    guides: ["protection-gouttieres-anti-feuilles-bruxelles", "demoussage-toiture-bruxelles-quand-comment-prix"],
  },
  {
    slug: "woluwe-saint-lambert",
    name: "Woluwe-Saint-Lambert",
    de: "de Woluwe-Saint-Lambert",
    neighbors: ["woluwe-saint-pierre", "etterbeek", "schaerbeek", "evere"],
    conseils: [
      "Autour du parc Malou, du parc de Roodebeek et le long de la vallée de la Woluwe, les grands arbres et l'humidité du fond de vallée chargent les gouttières en feuilles et en mousses : un passage fin novembre est le plus efficace, complété d'un démoussage si la toiture verdit.",
      "Dans la cité-jardin de Kapelleveld, les maisons en rangée partagent souvent une même ligne de gouttière, ce qui plaide pour un nettoyage groupé avec les voisins. Près du Woluwe Shopping et des cliniques universitaires Saint-Luc, les immeubles à appartements relèvent d'un syndic : c'est l'assemblée générale qui vote un contrat d'entretien, et un devis écrit détaillé facilite la décision.",
    ],
    faqs: [
      {
        q: "Nous habitons près du parc Malou : quand nettoyer ?",
        a: "Fin novembre, quand les grands arbres du parc ont perdu leurs feuilles. Pour les maisons directement en bordure, un contrôle au printemps retire les graines et les fleurs avant la saison des orages.",
      },
      {
        q: "Maison à Kapelleveld : faut-il s'organiser avec les voisins ?",
        a: "C'est conseillé quand plusieurs maisons partagent une gouttière continue : un bouchon chez un voisin peut faire déborder votre partie. Nettoyer la rangée le même jour règle le problème pour tout le monde.",
      },
    ],
    guides: ["gouttieres-copropriete-bruxelles", "preparer-gouttieres-automne-bruxelles"],
  },
  {
    slug: "woluwe-saint-pierre",
    name: "Woluwe-Saint-Pierre",
    de: "de Woluwe-Saint-Pierre",
    neighbors: ["auderghem", "woluwe-saint-lambert", "etterbeek"],
    conseils: [
      "Autour du parc de Woluwe, des étangs Mellaerts et du parc Parmentier, les villas reçoivent les feuilles des grands chênes, hêtres et marronniers : prévoyez un nettoyage fin novembre, puis un contrôle au printemps si des érables lâchent leurs samares au-dessus du toit.",
      "Au Chant d'Oiseau et à Stockel, les maisons quatre façades ont de grands linéaires et souvent des annexes à toit plat : faites vérifier ces petites évacuations en même temps que les gouttières principales. Le long de l'avenue de Tervueren, maisons de maître et immeubles ont des gouttières hautes, parfois cachées derrière une corniche : un débordement se repère d'abord aux coulures sur la façade.",
    ],
    faqs: [
      {
        q: "Villa au Chant d'Oiseau : pourquoi nettoyer aussi les toits plats d'annexe ?",
        a: "Parce qu'ils reçoivent les feuilles qui glissent du toit principal et que leurs avaloirs sont petits. Un avaloir bouché laisse l'eau stagner sur la membrane jusqu'à l'infiltration. Les contrôler en même temps que les gouttières ne prend que quelques minutes.",
      },
      {
        q: "Près des étangs Mellaerts, quand programmer le nettoyage ?",
        a: "Fin novembre, après la chute des feuilles des grands arbres. L'humidité autour des étangs favorise aussi les mousses sur les toitures : si le toit verdit, un démoussage avant l'hiver réduit ce qui finira dans la gouttière.",
      },
    ],
    guides: ["protection-gouttieres-anti-feuilles-bruxelles", "gouttiere-decrochee-qui-penche"],
  },
];

export function getCommune(slug: string): Commune {
  const c = communes.find((x) => x.slug === slug);
  if (!c) throw new Error(`Commune inconnue : ${slug}`);
  return c;
}

/** Questions locales ajoutées à la FAQ visible de la page commune. */
export function localFaqs(slug: string) {
  return getCommune(slug).faqs;
}

/** Mêmes questions au format Schema.org, ajoutées au FAQPage de la page commune. */
export function localFaqSchema(slug: string) {
  return getCommune(slug).faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));
}
