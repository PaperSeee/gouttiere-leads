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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
