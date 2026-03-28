# DA Brief — Dictionnaire Alsacien
> MAJ 2026-03-22

---

## 1. Ambiance générale

**3 mots :** Patrimonial. Précis. Vivant.

**Ce que ce n'est PAS :**
- Pas folklore kitsch (pas de vichy, pas de cigogne en sticker géant)
- Pas Bootstrap / template SaaS bleu-gris
- Pas dictionnaire institutionnel froid (pas olcalsace.org)
- Pas Duolingo enfantin (pas de mascottes, pas de confettis)
- Pas Larousse figé (le registre éditorial oui, la chape graphique non)

**Références visuelles :**
- Frans Hals Museum (franshalsmuseum.nl) — rupture avec le template muséal générique, typographie décision centrale, couleur assumée
- TypeMates / FDI Type Foundry — registre germanique sobre, typographie au service du sens
- DeepL — minimalisme fonctionnel, premium sans ornement
- Devri.bzh — dictionnaire langue minoritaire, typographie soignée, sobre éditorial, projet indépendant de qualité

**Pourquoi ce positionnement :** La cible (boomers lettrés + linguistes dilettantes) est sensible à la qualité éditoriale. Le registre Larousse garantit la crédibilité ; l'ergonomie Duolingo garantit l'usage. Entre les deux : un objet culturel premium, pas une page Wikidata.

---

## 2. Palette

**Logique chromatique :** Blanc cassé papier + rouge Alsace affirmé + noir encre + or cuivré comme accent chaud. La palette Alsace (rouge/blanc) est assumée mais désaturée et raffinée — jamais le rouge agressif des drapeaux souvenir.

| Rôle | Hex | Usage |
|---|---|---|
| Fond principal | `#FAF7F2` | Fond global — blanc cassé papier ivoire, chaud, pas blanc digital froid |
| Texte principal | `#1C1410` | Presque noir encre — contraste élevé sur fond ivoire |
| Couleur primaire | `#B22222` | Rouge Alsace — titres de section, lettre active, bordures accent |
| Couleur secondaire | `#8B0000` | Rouge profond — états hover sur rouge, variante foncée |
| Accent / CTA | `#C8943A` | Or cuivré — CTA dons, éléments actifs secondaires, décoration sobre |
| Texte secondaire | `#6B5E52` | Gris chaud brun — étiquettes, captions, métadonnées |
| Surface cartes | `#F2EDE6` | Ivoire légèrement plus foncé — fond des entrées de dictionnaire |
| Bordures | `#D9CFC5` | Séparateurs discrets, lignes de tableau |

**Pourquoi ce choix :** Le fond ivoire crée immédiatement l'association papier/dictionnaire sans simuler une texture skeuomorphique. Le rouge `#B22222` est le rouge d'Alsace — présent dans le blason, sobre, lisible. L'or cuivré évite la banalité du rouge monochrome et donne un registre premium sans excès.

---

## 3. Typographie

### Police principale — Corps & UI
**Libre Baskerville** (Google Fonts, gratuite)
- Graisse : `400` corps, `700` gras
- Usage : corps des entrées de dictionnaire, paragraphes, labels UI
- Pourquoi : sérif classique à haute lisibilité, connotation dictionnaire/édition, digitalement optimisé, résonance Larousse sans être une copie

### Police secondaire — Titres
**Playfair Display** (Google Fonts, gratuite)
- Graisse : `700`, `900`
- Usage : titre principal H1, titres de section H2, lettre affichée en grand (la "lettre-hero" par section)
- Pourquoi : sérif de titrage avec tension entre les pleins et les déliés, résonance éditorial premium, légère évocation de la typographie d'imprimerie germanique sans tomber dans la Fraktur illisible. Option alternative si budget disponible : **Freight Display** (TypeKit) ou **Canela** (Commercial Type).

### Police tertiaire — Éléments alsaciens mis en valeur
**IM Fell English** (Google Fonts, gratuite) ou **Cormorant Garamond** (Google Fonts)
- Graisse : `400` italique
- Usage : mots alsaciens en contexte, phrases d'exemple — distinction visuelle du mot cible
- Pourquoi : le léger caractère archaïsant de IM Fell ou la finesse de Cormorant crée un écart visuel clair entre le mot alsacien (traité comme objet patrimonial) et sa traduction française

### Tailles de base
| Élément | Taille | Graisse | Police |
|---|---|---|---|
| H1 (titre app) | `3.5rem` | `900` | Playfair Display |
| H2 (section / lettre-hero) | `6rem` | `900` | Playfair Display — lettre seule, décorative |
| H3 (sous-titres) | `1.5rem` | `700` | Playfair Display |
| Body | `18px / 1.125rem` | `400` | Libre Baskerville |
| Mot alsacien (entrée) | `1.25rem` | `700` | Libre Baskerville |
| Traduction française | `1.125rem` | `400` | Libre Baskerville |
| Phrase d'exemple | `1rem` | `400` italique | Cormorant Garamond |
| Caption / label | `0.875rem` | `400` | Libre Baskerville |
| Boutons navigation A–Z | `1rem` | `700` | Libre Baskerville ou System |

---

## 4. Layout & espacement

**Largeur max contenu :** `860px` — ni trop étroit (confort lecture), ni trop large (confort dictionnaire). La navigation alphabétique peut déborder jusqu'à `1100px` pour rester compacte sur une ligne.

**Grille :**
- Desktop : layout à 1 colonne centrale pour la zone de lecture, la navigation A–Z en rangée full-width au-dessus
- Entrées de dictionnaire : disposition 2 colonnes (alsacien | français) avec séparateur vertical — clin d'œil aux colonnes des dictionnaires papier bilingues
- Mobile : 1 colonne, entrées empilées mot → traduction → exemple

**Gouttières :** `1.5rem` entre colonnes d'entrées, `2rem` entre entrées

**Espacement vertical entre sections :**
- Entre hero et navigation A–Z : `4rem`
- Entre navigation A–Z et résultats : `3rem`
- Entre entrées de dictionnaire : `1.5rem`
- Padding sections : `6rem` vertical sur desktop, `3rem` sur mobile

**Approche responsive :** Mobile-first dans le code, conception desktop-first dans les décisions visuelles.
Breakpoints : `480px` (mobile S), `768px` (tablette), `1024px` (desktop).
Note : la cible boomer est souvent sur tablette — le rendu 768px est prioritaire après desktop.

---

## 5. Éléments visuels

### Images
Pas d'images décoratives génériques. Si image : photos patrimoniales de qualité (architecture colombages, vignoble alsacien, artisanat). En cas d'absence d'image : espace négatif assumé, jamais de placeholder gris.

### Icônes
Pas de bibliothèque d'icônes générique (pas de FontAwesome). Icônes fonctionnelles uniquement : flèche de switch, chevron, icône don. Style : tracé linéaire fin `1.5px`, pas de remplissage, cohérent avec la typo sérif. Source : Heroicons ou tracés SVG custom.

### Éléments identitaires alsaciens — Traitement dosé
**Principe :** présence structurelle, pas décorative. L'alsacianité doit se lire dans la cohérence globale, pas dans une collection de cliparts.

- **Cigogne :** Une seule, sobrement tracée en SVG linéaire, positionnée dans le header ou comme favicon. Tracé épuré, noir sur fond ivoire ou rouge sur fond ivoire. Jamais colorée, jamais kitch.
- **Bretzel :** Usage uniquement dans la section dons/monétisation — icône de contribution locale. Ton léger, pas illustratif.
- **Colombages :** Abstraction graphique possible — pattern géométrique discret en fond de section ou séparateur horizontal. Jamais une photo de colombages en wallpaper.
- **Blason Alsace (bandes rouges/argent) :** Traduit en bordure latérale fine ou motif de séparation (bandes verticales alternées très légères) — abstraction, pas reproduction du blason officiel.
- **Palette rouge/blanc :** Structurellement présente dans les composants — lettre active, état hover, CTA. Le blanc n'est jamais pur `#FFFFFF` — toujours ivoire.

### Effets & animations
**Autorisés :**
- Transition hover sur boutons A–Z : fond rouge `#B22222` → texte blanc, `150ms ease-out`
- Apparition des entrées au clic sur lettre : `fade-in + translateY(8px → 0)`, `200ms ease-out`, staggered (délai `20ms` par entrée)
- Transition du switch alsacien/français : animation de pivot horizontal (`rotateY`), `250ms ease-in-out`
- Hover sur entrée de dictionnaire : léger fond `#F2EDE6 → #EAE3D8`, `150ms`

**Interdits :**
- Parallaxe
- Auto-scroll / scroll hijacking
- Animations de chargement page entières
- Transitions sur la navigation principale

**Règle `prefers-reduced-motion` :** Toutes les animations désactivées via media query. Comportement dégradé : changements d'état instantanés.

---

## 6. Ton visuel de la Porte de Saint-Pierre

*(Section Porte de Saint-Pierre laissée vide dans le brief — traitée comme "absence de contenu privé" : aucun élément gate, l'app est en accès libre)*

---

## 7. Composants spécifiques

### Boutons navigation alphabétique (A–Z)

**Forme :** Carré ou rectangle légèrement arrondi (`border-radius: 4px`), taille `44×44px` minimum, `48×48px` sur desktop.
**Typographie :** `1rem`, graisse `700`, Libre Baskerville ou fallback system sérif.
**États :**
- Repos : fond `#FAF7F2`, texte `#1C1410`, bordure `1px solid #D9CFC5`
- Hover : fond `#B22222`, texte `#FAF7F2`, bordure `1px solid #B22222`, transition `150ms ease-out`
- Actif (lettre sélectionnée) : fond `#B22222`, texte `#FAF7F2`, bordure `2px solid #8B0000` — persiste jusqu'à changement de lettre
- Disabled (lettre sans entrée) : fond `#FAF7F2`, texte `#D9CFC5`, bordure `1px solid #EAE3D8`, curseur `not-allowed`

**Layout :** Rangée flex-wrap centrée, `gap: 0.5rem`. Sur mobile : grille 9 colonnes (`grid-template-columns: repeat(9, 1fr)`).

**Pourquoi :** La taille 44px est non-négociable pour la cible boomer (tactile tablette). Le rouge actif est la seule façon de savoir où on est dans l'alphabet — clarté fonctionnelle avant tout.

---

### Switch source alsacien ↔ français

**Composant :** Pas un `<select>`. Deux boutons texte côte à côte avec séparateur `⇄` central animé.
**Disposition :** `[Alsacien → Français]  ⇄  [Français → Alsacien]`
**Taille :** Hauteur `44px`, padding horizontal `1.5rem`.
**États :**
- Source active : fond `#B22222`, texte `#FAF7F2`, graisse `700`
- Source inactive : fond transparent, texte `#6B5E52`, graisse `400`, bordure `1px solid #D9CFC5`
- Icône `⇄` : couleur `#C8943A`, taille `1.125rem`
- Transition au switch : animation pivot `rotateY(180deg)` sur le séparateur `⇄`, `250ms ease-in-out`

**Positionnement :** Sticky en haut de page après le hero title, ou juste au-dessus de la navigation A–Z — visible en permanence lors de la navigation.

**Pourquoi le `⇄` en or :** L'icône de switch est le cœur de l'app — elle doit être immédiatement identifiable. L'or cuivré la distingue des deux états boutons sans surcharge.

---

### Entrées de dictionnaire (mot + équivalent + phrase)

**Structure visuelle d'une entrée :**
```
[MOT ALSACIEN]     |     [ÉQUIVALENT FRANÇAIS]
                   |     [phrase d'exemple en italique]
```

**Disposition :** 2 colonnes sur desktop, 1 colonne empilée sur mobile (`< 600px`).
**Séparateur :** Ligne verticale `1px solid #D9CFC5` — clin d'œil au dictionnaire papier bilingue.
**Mot alsacien :** Taille `1.25rem`, graisse `700`, Libre Baskerville.
**Équivalent français :** Taille `1.125rem`, graisse `400`, Libre Baskerville.
**Phrase d'exemple :** Taille `1rem`, italique, Cormorant Garamond, couleur `#6B5E52`.
**Fond de l'entrée :** `#F2EDE6`, bordure basse `1px solid #D9CFC5`.
**Hover :** Fond `#EAE3D8`, `150ms`.
**Padding interne :** `1.25rem 1.5rem`.
**Espacement entre entrées :** `0` (les entrées s'enchaînent comme les lignes d'un dictionnaire, séparées uniquement par la bordure basse).

**Pourquoi la structure 2 colonnes :** Elle reproduit l'expérience visuelle d'un dictionnaire bilingue papier — reconnaissance immédiate pour la cible cultivée. La ligne verticale centrale est un micro-signe de qualité éditoriale.

---

### Zone d'affichage des résultats par lettre

**Header de section lettre :**
- La lettre seule, `6rem`, graisse `900`, Playfair Display, couleur `#B22222`
- À gauche, avec le titre en vis-à-vis ("X entrées pour la lettre A")
- Ligne de séparation après le header : `2px solid #B22222` full-width

**Compteur d'entrées :** Affiché en caption `0.875rem`, couleur `#6B5E52`, style "12 mots" — positionné sous la lettre ou inline à droite.

**Zone de liste :** Fond `#FAF7F2` (pas de fond différent — les entrées en `#F2EDE6` créent déjà le contraste).

**Transition d'apparition :** `fade-in + translateY(8px → 0)`, `200ms ease-out`, délai staggered `20ms` par entrée (max 10 entrées animées — au-delà, toutes apparaissent simultanément pour éviter un délai perçu).

**Pourquoi la lettre en `6rem` :** Elle crée un ancrage visuel fort — l'utilisateur sait immédiatement dans quelle section il est. La taille assume le scroll et guide l'œil. Référence : la mise en page des grands dictionnaires imprimés.

---

## 8. Monétisation — Style & placement

### Dons (style Wikipédia sobre)
**Positionnement :** Bandeau en bas de page, collapsible. Hauteur `80px` replié.
**Ton :** "Ce dictionnaire est gratuit et indépendant. Si vous le trouvez utile, un don nous aide à le faire vivre." — une phrase, jamais plus.
**Palette :** Fond `#F2EDE6`, texte `#1C1410`, CTA `#C8943A` (l'or — seul usage de couleur chaude non rouge).
**Icône :** Bretzel SVG linéaire, `24px`, à gauche du texte.

### Emplacements publicité produits alsaciens
**Format :** Encart discret `300×80px` (format "banner éditorial"), jamais intrusive.
**Placement :** Entre les sections de lettres, pas dans les entrées de dictionnaire.
**Style :** Fond `#F2EDE6`, image partenaire + nom partenaire + tagline courte. Labellisé "Partenaires alsaciens" — jamais "Publicité".
**Règle absolue :** Jamais d'AdSense générique. Jamais de bannière pleine largeur agressive. Le partenariat renforce l'identité régionale ou ne s'affiche pas.

---

## Annexe — Variables CSS clés à implémenter

```css
:root {
  --color-bg: #FAF7F2;
  --color-surface: #F2EDE6;
  --color-surface-hover: #EAE3D8;
  --color-border: #D9CFC5;
  --color-text: #1C1410;
  --color-muted: #6B5E52;
  --color-primary: #B22222;
  --color-primary-dark: #8B0000;
  --color-accent: #C8943A;

  --font-title: 'Playfair Display', Georgia, serif;
  --font-body: 'Libre Baskerville', 'Book Antiqua', Palatino, serif;
  --font-example: 'Cormorant Garamond', 'IM Fell English', Georgia, serif;

  --max-width: 860px;
  --max-width-nav: 1100px;
  --radius: 4px;

  --transition-fast: 150ms ease-out;
  --transition-mid: 250ms ease-in-out;
}
```

---

## Décisions prises en l'absence d'instruction explicite

1. **Police germanique :** Choix de Playfair Display plutôt qu'une Fraktur ou une Blackletter — le brief mentionnait "résonance germanique sobre". Fraktur serait illisible et folklorique. Playfair évoque l'imprimerie historique sans dater l'interface.
2. **Fond ivoire plutôt que blanc pur :** Non spécifié dans le brief mais cohérent avec le registre "papier/dictionnaire" mentionné. Évite aussi la froideur d'un fond `#FFFFFF` plein.
3. **Or cuivré `#C8943A` comme troisième couleur :** Le brief mentionnait rouge/blanc. L'or différencie les CTA dons des CTA primaires et évite le monochrome rouge/blanc qui aurait un fort signal "drapeaux Alsace" sans nuance.
4. **Pas de Fraktur, pas de police gothique :** Interdit dans le brief ("sobre, pas gothique") — confirmé dans les refs TypeMates/FDI qui proposent des revivals modernes non-lisibles sans contexte.
5. **Switch = 2 boutons + séparateur :** Le brief mentionnait "switch source" sans préciser le composant. Un toggle classique `on/off` est trop binaire et peu informatif. Deux boutons texte avec état actif/inactif sont plus lisibles pour la cible boomer.
