# Brief — Dictionnaire Alsacien
> Généré le : 22.03.2026

## Produit
Web app d'équivalence bidirectionnelle alsacien ↔ français.
Site multi-page / app hybride — home + navigation alphabétique + affichage par lettre.

**Structure principale :**
- Home avec titre + navigation alphabétique (bouton par lettre)
- Clic sur une lettre → affichage des mots correspondants avec leur équivalent
- Switch source : "Je cherche en alsacien" / "Je cherche en français"
- Pas de moteur de recherche full-text pour le MVP — navigation par lettre uniquement

## Cible
Deux profils cultivés :
- Boomers alsaciens lettrés, attachés à leur langue et culture régionale
- Linguistes dilettantes, nouveaux arrivants dans la région, curieux de s'imprégner

Commun aux deux : niveau de culture général élevé, sensible à la qualité éditoriale, pas technophobe mais pas geek.

## Objectif principal
Trouver rapidement l'équivalent d'un mot — dans les deux sens. Rendre la langue alsacienne accessible et plaisante à explorer, sans friction.

## Ton & registre
**Duolingo × Larousse** — l'ergonomie ludique du premier, la typographie et le registre éditorial du second.
- Ludique mais pas enfantin
- Élégant mais pas froid
- Ce que ce n'est PAS : Bootstrap bleu, design générique, folklore kitsch

## Identité visuelle
Intégrer des éléments identitaires alsaciens de manière dosée et assumée :
- Références visuelles : cigogne, bretzel, colombages, blason alsacien
- Palette : rouge/blanc typique Alsace, touches de noir pour l'ancrage éditorial
- Typographie : possibilité d'une police à résonance germanique pour les titres — sobre, pas gothique
- Registre papier/dictionnaire rendu web-native — pas une simple numérisation

## Contenu disponible
- Corpus réel : à construire par scraping (phase 2, à faire avec le user)
- MVP : dummy data dimensionnée — plusieurs lettres remplies (A, B, C minimum), assez pour valider la navigation et le switch source

Format des données : mot alsacien | équivalent français | [optionnel : exemple de phrase]

## Contraintes
- Stack : HTML/CSS/JS vanilla (pas de framework lourd pour le MVP)
- Données : JSON statique pour le MVP — pas de backend/BDD
- Langue d'interface : français
- Responsive : oui — les boomers sont sur tablette et téléphone
- Pas de login, pas de compte utilisateur

## Monétisation
- Dons discrets, style Wikipédia (bandeau sobre, non intrusif)
- Emplacements pub produits alsaciens spécifiques (épicerie fine, artisanat local, tourisme) — pas d'AdSense générique

## Porte de Saint-Pierre
[laisser vide — défaut]

## Notes libres
- Le switch alsacien/français est une feature centrale — l'UX autour de ce toggle doit être claire et plaisante
- Le site doit pouvoir évoluer vers un corpus scrappé sans refonte — prévoir la structure JSON extensible
- Potentiel de monétisation indirect : boutique partenaires locaux si audience confirmée
