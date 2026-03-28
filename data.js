const DICTIONNAIRE = {
  A: [
    { als: "Àbig", fr: "Abricot", ex: "Les Àbig de la vallée du Rhin, c'est pas des abricots comme les autres — ils ont une saison de quinze jours et tout le monde attend ça toute l'année." },
    { als: "Arig", fr: "Paresseux, fainéant", ex: "Ce gamin est un vrai Arig — mais un Arig souriant, ce qui arrange tout le monde." },
    { als: "Àwwer", fr: "Mais (conjonction)", ex: "Je veux bien venir, Àwwer faut pas que ça dure trop longtemps." },
    { als: "Àlsàss", fr: "Alsace", ex: "L'Àlsàss, c'est pas une région comme les autres — c'est un état d'esprit avec un code postal." },
    { als: "Ànkepodder", fr: "Beurre salé de ferme", ex: "Tu tartines de l'Ànkepodder sur du pain de campagne et tu comprends ce que vivre bien veut dire." },
    { als: "Àwend", fr: "Soir, soirée", ex: "L'Àwend tombe sur le vignoble et les hirondelles disparaissent d'un coup — c'est le signal pour rentrer." },
    { als: "Ànke", fr: "Beurre", ex: "Elle met de l'Ànke dans tout — dans les tartes, dans les soupes, dans la vie en général." },
    { als: "Ander", fr: "Autre", ex: "Le Ander côté du Rhin, c'est l'Allemagne, mais pour beaucoup d'Alsaciens c'est juste le voisin d'en face." }
  ],
  B: [
    { als: "Breedel", fr: "Petits gâteaux de Noël", ex: "Les Breedel se font en novembre chez la grand-mère et disparaissent avant le premier décembre." },
    { als: "Bàtzel", fr: "Coup léger, tape amicale", ex: "Un Bàtzel sur l'épaule et on sait que tout va bien — pas besoin de plus." },
    { als: "Biesel", fr: "Lutin, elfe malicieux", ex: "T'as encore renversé le sel ? C'est le Biesel — la grand-mère l'a toujours dit." },
    { als: "Blàss", fr: "Pâle, blême", ex: "Il est rentré Blàss comme un mur — sans doute les escargots de la veille." },
    { als: "Bùtz", fr: "Bisou, baiser", ex: "Un Bùtz sur le front et les pleurs s'arrêtent — ça marche à tout âge, selon les gens." },
    { als: "Bretzel", fr: "Bretzel (pain en forme de nœud)", ex: "Un Bretzel chaud sorti du four, c'est une catégorie à part — celui du supermarché n'existe pas." },
    { als: "Bàchele", fr: "Ruisseau, petit cours d'eau", ex: "Le Bàchele passe derrière le verger depuis toujours — les enfants y font flotter des bouts de bois." },
    { als: "Bùrjerschtùbb", fr: "Salle bourgeoise, salon de réception", ex: "La Bùrjerschtùbb ne sert qu'aux grandes occasions — le reste du temps la porte est fermée à double tour." }
  ],
  C: [
    { als: "Còmmiss", fr: "Commis (apprenti en cuisine ou boulangerie)", ex: "Le Còmmiss arrive à cinq heures du matin et repart à midi avec de la farine plein les sourcils." },
    { als: "Chnorres", fr: "Moustache épaisse", ex: "Son grand-père avait une Chnorres que personne n'avait jamais vu rasée — c'était presque un personnage à part." },
    { als: "Crumpeere", fr: "Pomme de terre (variante de Grumbeere)", ex: "Des Crumpeere sautées avec du saindoux et des oignons, c'est pas de la haute cuisine mais c'est pas non plus de la basse cuisine." },
    { als: "Colmar", fr: "Colmar (ville d'Alsace)", ex: "Colmar — tout le monde photographie les maisons à colombages, peu de gens savent que le vin blanc y est meilleur que la photo." },
    { als: "Chàttle", fr: "Chat (terme affectueux)", ex: "Le vieux Chàttle de la ferme fait semblant de chasser les souris — il les surveille surtout dormir." },
    { als: "Choucroute", fr: "Sàuerkrùt / chou fermenté", ex: "La Choucroute du vendredi, c'est pas une recette — c'est un rituel. Chaque famille a la sienne et personne ne cède." }
  ],
  D: [
    { als: "Drùbel", fr: "Grappe de raisin", ex: "Une Drùbel de gewurz cueillie à la main, tiède encore du soleil — c'est le mois d'octobre résumé en un geste." },
    { als: "Dànsle", fr: "Danser, faire la fête (diminutif affectueux)", ex: "On a Dànsle jusqu'à deux heures et personne a regardé l'heure — c'est le signe que c'était réussi." },
    { als: "Dibb", fr: "Pot, récipient en terre cuite", ex: "Le Dibb de cornichons est dans la cave depuis les années 80 et personne n'a le courage de demander quand il date." },
    { als: "Dùmm", fr: "Bête, naïf (sans méchanceté)", ex: "T'es pas Dùmm — tu fais juste semblant pour qu'on te laisse tranquille. C'est malin en fait." },
    { als: "Drànk", fr: "Boisson (générique)", ex: "Un Drànk frais le soir en été, n'importe lequel, suffit à tout remettre en place." },
    { als: "Dàchtùnn", fr: "Gouttière de toit", ex: "La Dàchtùnn déborde depuis l'automne dernier et personne n'a encore appelé le couvreur." },
    { als: "Dùwwel", fr: "Diable (au sens figuré, espiègle)", ex: "Ce petit Dùwwel a encore caché les clés — et il rit en sachant où elles sont." },
    { als: "Dreckig", fr: "Sale, crasseux", ex: "Rentrer Dreckig du jardin, c'est pas une honte — c'est la preuve qu'on a travaillé." }
  ],
  E: [
    { als: "Elsàss", fr: "Alsace (variante graphique)", ex: "Il dit toujours Elsàss et jamais Alsace — une façon de rappeler qui il est sans ouvrir la bouche sur le reste." },
    { als: "Ewigkeit", fr: "Éternité, très longtemps", ex: "Ça fait une Ewigkeit qu'on s'est pas vu — depuis avant le Covid au moins." },
    { als: "Ebbel", fr: "Pomme", ex: "Les Ebbel du vieux pommier derrière la maison ont pas de nom de variété — elles ont juste un goût qu'on cherche partout ailleurs." },
    { als: "Esle", fr: "Âne (terme affectueux ou moqueur)", ex: "Grosse tête d'Esle — dit avec tendresse, ça veut dire qu'on t'aime bien quand même." },
    { als: "Eckle", fr: "Petit coin, recoin", ex: "Il y a un Eckle dans la cuisine où tout le monde s'installe — personne sait pourquoi cet endroit précis." },
    { als: "Erdàpfel", fr: "Pomme de terre (lit. pomme de terre)", ex: "Erdàpfel au sens littéral : la pomme de la terre. Les Alsaciens n'ont jamais prétendu que la poésie était réservée à la littérature." }
  ],
  F: [
    { als: "Fàsnàcht", fr: "Carnaval, Mardi gras", ex: "La Fàsnàcht, c'est l'autorisation collective de se déguiser en n'importe quoi — les Alsaciens la prennent au sérieux." },
    { als: "Fùss", fr: "Pied", ex: "Il a les Fùss dans l'eau froide du ruisseau et l'air de quelqu'un qui a tout résolu." },
    { als: "Flàde", fr: "Tarte flambée (Flammekueche)", ex: "Une Flàde bien fine, avec du lard et des oignons — et la personne qui fait attendre au four se fait regarder de travers." },
    { als: "Fùnke", fr: "Étincelle", ex: "Il y a un Fùnke dans ses yeux quand il parle de son vignoble — une fierté qui ne crie pas." },
    { als: "Friehjohr", fr: "Printemps (lit. année fraîche)", ex: "Le Friehjohr arrive tôt sur les pentes exposées — les vignerons le savent avant le calendrier." },
    { als: "Fàss", fr: "Tonneau, fût", ex: "Le vieux Fàss de chêne dans la cave ne sert plus qu'à décorer — mais personne ne veut le vendre." },
    { als: "Feschter", fr: "Fenêtre (variante)", ex: "Elle passe les matins à la Feschter avec son café — c'est son poste d'observation sur le monde." },
    { als: "Fàllàwwe", fr: "Automne (lit. chute des feuilles)", ex: "Le Fàllàwwe ici, c'est pas une saison triste — c'est les vendanges, les brumes sur le vignoble, et les premières cuissons à la cocotte." }
  ],
  S: [
    { als: "Schpàtzla", fr: "Pâtes fraîches (spätzle)", ex: "Des Schpàtzla au beurre noisette, c'est le plat qu'on mange quand on veut se sentir chez soi — même si chez soi c'est loin." },
    { als: "Sàuerkrùt", fr: "Choucroute (chou fermenté)", ex: "Le Sàuerkrùt se prépare le samedi matin et se mange le dimanche midi avec la famille qui déborde de la table." },
    { als: "Schnùùf", fr: "Souffle, haleine", ex: "Reprends ton Schnùùf avant de parler — on t'entendra mieux." },
    { als: "Schtubb", fr: "Salon, pièce à vivre principale", ex: "On mange pas dans la Schtubb — c'est réservé aux grandes occasions et aux gens de passage." },
    { als: "Stebelmärik", fr: "Marché aux cigognes", ex: "Le Stebelmärik se tient au printemps quand les premières cigognes reviennent — les enfants pensent que c'est pour elles que le marché existe." },
    { als: "Schnàps", fr: "Eau-de-vie, digestif", ex: "Un petit Schnàps de mirabelle après le repas, ça s'appelle finir correctement les choses." },
    { als: "Schàff", fr: "Armoire normande alsacienne", ex: "La vieille Schàff du couloir vient de l'arrière-grand-mère — elle ne ferme plus bien mais on n'en parle pas." },
    { als: "Stùrm", fr: "Tempête, mais aussi moût en fermentation", ex: "Le Stùrm de septembre — le jus de raisin qui fermente et qu'on boit trouble, légèrement pétillant, avant qu'il ne devienne vin." },
    { als: "Sunnesching", fr: "Soleil (lit. briller du soleil)", ex: "Un jour de Sunnesching en mars vaut trois jours d'août en termes de moral collectif." },
    { als: "Schàffe", fr: "Travailler, bosser", ex: "Il Schàffe depuis six heures ce matin et il se plaint pas — il Schàffe comme son père et son grand-père avant lui." }
  ],
  W: [
    { als: "Wïhr", fr: "Village (étymologie : lieu habité)", ex: "Le Wïhr au bout de la route de vignes — quarante maisons, un Winstub, et personne ne se perd parce que tout le monde se connaît." },
    { als: "Wàckes", fr: "Gamin turbulent, garnement (affectueux)", ex: "Ce petit Wàckes a encore renversé le pot de confiture. On lui en veut pas vraiment." },
    { als: "Winstùb", fr: "Bistrot à vins alsacien", ex: "La Winstùb du coin sert le même pinot gris depuis trente ans — c'est pas de la résistance culturelle, c'est de la logique." },
    { als: "Wàss", fr: "Eau", ex: "Il a demandé un verre de Wàss — la serveuse l'a regardé comme si c'était une blague mais lui a quand même apporté." },
    { als: "Wàrme", fr: "Chaleur, chaleureux", ex: "La Wàrme d'une cuisine alsacienne en hiver — la buée sur les carreaux, l'odeur du chou, et la table déjà mise." },
    { als: "Wàckel", fr: "Vaciller, tanguer", ex: "La vieille grange Wàckel depuis l'orage de juin — mais elle tient depuis 1890, elle tiendra encore." },
    { als: "Hopfeld", fr: "Houblonnière, champ de houblon", ex: "Les Hopfeld de la plaine d'Alsace montent haut en été — des colonnes vertes qui font penser à autre chose qu'à la bière jusqu'à ce qu'on se souvienne." },
    { als: "Wìnddàch", fr: "Jour de grand vent", ex: "Un Wìnddàch sur le Champ du Feu et tu comprends pourquoi les Vosges donnent aux gens un caractère particulier." }
  ],
  G: [
    { als: "Grumbeere", fr: "Pomme de terre", ex: "Des Grumbeere avec du lard fumé, c'est pas de la cuisine, c'est une déclaration d'intention." },
    { als: "Gùnder", fr: "Dindon, coq d'Inde", ex: "Le vieux Gùnder de la ferme se prenait pour le maître des lieux — et dans les faits il n'avait pas tout à fait tort." },
    { als: "Gàss", fr: "Ruelle, petite rue", ex: "La Gàss derrière l'église n'a pas changé depuis cent ans — et c'est précisément pour ça qu'on l'aime." },
    { als: "Geiss", fr: "Chèvre", ex: "La vieille Geiss de M. Huber avait plus de caractère que lui — il le reconnaissait volontiers." },
    { als: "Gewùrz", fr: "Épice, aromate", ex: "Le Gewurztraminer — vin aux épices — c'est le Gewùrz dans le verre, et ça s'appelle pas autrement." },
    { als: "Grùss", fr: "Salutation, bonjour", ex: "Un Grùss en passant devant la maison du voisin — sans s'arrêter, sans expliquer, juste ce qu'il faut." }
  ],
  H: [
    { als: "Hopfele", fr: "Seau (terme régional)", ex: "Le Hopfele est dans la cave depuis 1987 et personne sait vraiment à qui il appartient." },
    { als: "Hàs", fr: "Lièvre", ex: "Le Hàs de Pâques en Alsace est aussi sérieux que le Père Noël — les enfants y croient deux fois plus longtemps qu'ailleurs." },
    { als: "Hàrt", fr: "Dur, ferme, résistant", ex: "Ce pain est Hàrt — c'est pas un défaut, c'est la croûte qui prouve que c'est fait correctement." },
    { als: "Hirsch", fr: "Cerf", ex: "Le Hirsch des Vosges, on le voit rarement mais on sait qu'il est là — les traces dans la boue le matin." },
    { als: "Hàsle", fr: "Courrir vite, filer", ex: "Il Hàsle depuis ce matin — tu crois qu'il va s'arrêter pour manger ?" }
  ],
  K: [
    { als: "Kàlter", fr: "Froid (adjectif)", ex: "Il fait Kàlter ce matin — le genre de froid qui coupe le souffle entre la porte et la voiture." },
    { als: "Kàlvill", fr: "Calville (variété de pomme ancienne)", ex: "La Kàlvill d'automne, c'est la pomme que les anciens connaissent encore de nom — douce et parfumée, pas faite pour les supermarchés." },
    { als: "Kàseschpàtzla", fr: "Spätzle gratinées au fromage", ex: "Les Kàseschpàtzla sont la réponse alsacienne à toutes les formes de tristesse et de froid." },
    { als: "Kàrfritig", fr: "Vendredi Saint", ex: "Le Kàrfritig, les boulangeries ferment à midi — c'est ainsi depuis toujours et ça ne se discute pas." },
    { als: "Kirch", fr: "Église", ex: "La Kirch du village sonne les heures depuis six siècles — les gens n'ont plus de montre mais ils savent l'heure." }
  ],
  M: [
    { als: "Màrck", fr: "Ville, bourg (au sens de centre urbain)", ex: "À la Màrck le samedi matin — les mêmes visages, les mêmes stands, et pourtant on y retourne." },
    { als: "Màrtini", fr: "Saint-Martin (11 novembre)", ex: "Le Màrtini marque la fin des vendanges et le début du vin nouveau — une fête qui a du sens parce qu'elle célèbre quelque chose de réel." },
    { als: "Mìlch", fr: "Lait", ex: "La Mìlch de la ferme d'en haut, livrée le matin dans des bouteilles en verre — un souvenir ou encore une réalité selon où on habite." },
    { als: "Muggeseggel", fr: "Chose minuscule (lit. scrotum de moucheron, argot affectueux)", ex: "Il mange un Muggeseggel de fromage et prétend avoir dîné — c'est pas sérieux mais on s'en amuse." }
  ],
  R: [
    { als: "Rìwe", fr: "Betterave", ex: "La Rìwe rouge de novembre, cuite au four dans sa peau — c'est une saveur douce-terreuse qu'on mange d'abord avec les yeux." },
    { als: "Rhin", fr: "Rhin (fleuve)", ex: "Le Rhin ici c'est pas un fleuve — c'est une frontière, une histoire, une humeur. Selon le jour il fait gris ou il brille." },
    { als: "Rùndwàlk", fr: "Promenade circulaire, balade en boucle", ex: "Un Rùndwàlk dans le vignoble un dimanche matin — deux heures, pas une de plus, puis fromage et vin blanc à l'arrivée." }
  ],
  T: [
    { als: "Titsch", fr: "Allemand (terme populaire pour désigner la langue ou la personne)", ex: "Il parle Titsch entre eux — les enfants ne comprennent plus mais ils reconnaissent le son." },
    { als: "Tàrte Flàmmbée", fr: "Tarte flambée (Flammekueche)", ex: "La Tàrte Flàmmbée sort du four brûlante — on se brûle les doigts, on le sait, et on recommence." },
    { als: "Tùnnel", fr: "Passage, corridor voûté", ex: "Le vieux Tùnnel sous la mairie date du XVIe siècle — les touristes le photographient, les habitants l'ignorent." }
  ]
};

const LETTERS_WITH_ENTRIES = Object.keys(DICTIONNAIRE).sort();
const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
