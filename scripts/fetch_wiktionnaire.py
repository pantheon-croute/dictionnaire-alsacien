"""
fetch_wiktionnaire.py
Récupère les entrées alsaciennes depuis l'API Wiktionnaire (fr.wiktionary.org)
et les convertit au format data.js du Dictionnaire Alsacien.

Usage :
    python fetch_wiktionnaire.py --explore    # Inventaire des catégories disponibles
    python fetch_wiktionnaire.py --fetch      # Fetch complet + génération data_wikt.js
    python fetch_wiktionnaire.py --limit 50  # Fetch limité (test)

Output :
    data_wikt.js   — corpus au format data.js, prêt à remplacer ou fusionner
    rapport.txt    — bilan du fetch (entrées récupérées, erreurs, couverture)
"""

import sys
import requests
import json
import re
import time
import argparse
from pathlib import Path
from collections import defaultdict

sys.stdout.reconfigure(encoding="utf-8")

API = "https://fr.wiktionary.org/w/api.php"
OUTPUT_DIR = Path(__file__).parent.parent
HEADERS = {"User-Agent": "DictionnaireAlsacien/1.0 (projet éducatif; contact via GitHub)"}

# Catégories à essayer — on ne sait pas a priori laquelle contient le plus de contenu
CATEGORIES_CANDIDATES = [
    "alsacien",
    "alémanique",
    "Mots en alsacien",
    "Mots en alémanique",
    "als",
]


# ---------------------------------------------------------------------------
# Utilitaires API
# ---------------------------------------------------------------------------

def api_get(params: dict) -> dict:
    params["format"] = "json"
    resp = requests.get(API, params=params, headers=HEADERS, timeout=15)
    resp.raise_for_status()
    return resp.json()


def get_category_members(category: str, limit: int = 0) -> list[str]:
    """Retourne tous les titres de pages dans une catégorie Wiktionnaire."""
    members = []
    params = {
        "action": "query",
        "list": "categorymembers",
        "cmtitle": f"Catégorie:{category}",
        "cmlimit": 500,
        "cmnamespace": 0,
    }

    while True:
        data = api_get(params)
        batch = [m["title"] for m in data.get("query", {}).get("categorymembers", [])]
        members.extend(batch)

        if limit and len(members) >= limit:
            members = members[:limit]
            break

        if "continue" not in data:
            break
        params["cmcontinue"] = data["continue"]["cmcontinue"]
        time.sleep(0.15)

    return members


def get_pages_batch(titles: list[str]) -> dict[str, str]:
    """Fetch le wikitext de plusieurs pages en une requête (max 50 par batch)."""
    result = {}
    for i in range(0, len(titles), 50):
        batch = titles[i:i + 50]
        params = {
            "action": "query",
            "titles": "|".join(batch),
            "prop": "revisions",
            "rvprop": "content",
            "rvslots": "main",
        }
        data = api_get(params)
        for page in data.get("query", {}).get("pages", {}).values():
            title = page.get("title", "")
            revs = page.get("revisions", [])
            if revs:
                content = revs[0].get("slots", {}).get("main", {}).get("*", "")
                result[title] = content
        time.sleep(0.1)
    return result


# ---------------------------------------------------------------------------
# Parsing wikitext
# ---------------------------------------------------------------------------

def clean_wikitext(text: str) -> str:
    """Nettoie le wikitext pour obtenir du texte brut."""
    # Supprimer les templates {{...}}
    # Passage en plusieurs fois pour gérer l'imbrication
    for _ in range(3):
        text = re.sub(r"\{\{[^{}]*\}\}", "", text)
    # Liens [[cible|texte]] → texte
    text = re.sub(r"\[\[[^\]|]*\|([^\]]+)\]\]", r"\1", text)
    # Liens [[mot]] → mot
    text = re.sub(r"\[\[([^\]]+)\]\]", r"\1", text)
    # Italique/gras
    text = re.sub(r"'{2,3}", "", text)
    # Balises HTML
    text = re.sub(r"<[^>]+>", "", text)
    # Espaces multiples
    text = re.sub(r"\s+", " ", text).strip()
    return text


def extract_alsatian_section(wikitext: str) -> str | None:
    """Extrait la section gsw (alémanique/alsacien) du wikitext Wiktionnaire.
    Format réel : == {{langue|gsw}} == ... jusqu'au prochain == {{langue|...}} ==
    """
    match = re.search(
        r"==\s*\{\{langue\|gsw\}\}\s*==(.+?)(?===\s*\{\{langue\||\Z)",
        wikitext, re.DOTALL
    )
    return match.group(1) if match else None


def clean_wikitext(text: str) -> str:
    """Nettoie le wikitext pour obtenir du texte brut lisible."""
    # Liens avec fragment [[mot#fr|Affichage]] → Affichage
    text = re.sub(r"\[\[[^\]|]*#[a-z]+\|([^\]]+)\]\]", r"\1", text)
    # Liens [[cible|texte]] → texte
    text = re.sub(r"\[\[[^\]|]+\|([^\]]+)\]\]", r"\1", text)
    # Liens simples [[mot]] → mot
    text = re.sub(r"\[\[([^\]]+)\]\]", r"\1", text)
    # Templates avec contenu utile — garder le dernier argument nommé ou positionnel
    # Ex : {{lien|abandon|fr}} → abandon
    text = re.sub(r"\{\{lien\|([^|}\s]+)[^}]*\}\}", r"\1", text)
    # Supprimer tous les autres templates
    for _ in range(4):
        text = re.sub(r"\{\{[^{}]*\}\}", "", text)
    # Italique/gras
    text = re.sub(r"'{2,3}", "", text)
    # Balises HTML
    text = re.sub(r"<[^>]+>", "", text)
    # Espaces multiples
    text = re.sub(r"\s+", " ", text).strip()
    # Ponctuation finale parasite
    text = text.strip(".,;: ")
    return text


def parse_entry(title: str, wikitext: str) -> dict | None:
    """
    Parse une page Wiktionnaire (format gsw) et retourne :
    { "als": str, "fr": str, "ex": str }
    Retourne None si pas de contenu gsw utilisable.
    """
    section = extract_alsatian_section(wikitext)
    if not section:
        return None

    entry = {"als": title, "fr": "", "ex": ""}

    # Définitions : lignes commençant par # (pas ##, #:, #*, #;)
    definitions = []
    for line in section.split("\n"):
        line = line.strip()
        if re.match(r"^#(?![#:*;])", line):
            clean = clean_wikitext(line.lstrip("#").strip())
            if clean and len(clean) > 2:
                definitions.append(clean)

    if not definitions:
        return None

    entry["fr"] = definitions[0]

    # Exemple : lignes #* (exemples dans Wiktionnaire)
    for line in section.split("\n"):
        line = line.strip()
        if line.startswith("#*") and not line.startswith("#*{{"):
            ex = clean_wikitext(line.lstrip("#* ").strip())
            if ex and len(ex) > 5:
                entry["ex"] = ex
                break

    return entry


# ---------------------------------------------------------------------------
# Formatage output
# ---------------------------------------------------------------------------

def entries_to_datajs(entries: list[dict]) -> str:
    """Convertit une liste d'entrées au format data.js du site."""
    by_letter = defaultdict(list)
    for e in entries:
        letter = e["als"][0].upper()
        if letter.isalpha():
            by_letter[letter].append(e)

    # Trier les mots dans chaque lettre
    for letter in by_letter:
        by_letter[letter].sort(key=lambda x: x["als"].lower())

    all_letters = sorted(by_letter.keys())

    lines = [
        "// Corpus Wiktionnaire — CC-BY-SA 4.0 — Source : fr.wiktionary.org",
        f"// {sum(len(v) for v in by_letter.values())} entrées — {len(all_letters)} lettres",
        "",
        "const DICTIONNAIRE = {",
    ]

    for letter in all_letters:
        lines.append(f"  {letter}: [")
        for e in by_letter[letter]:
            ex_escaped = e["ex"].replace('"', '\\"') if e["ex"] else ""
            fr_escaped = e["fr"].replace('"', '\\"')
            als_escaped = e["als"].replace('"', '\\"')
            if ex_escaped:
                lines.append(f'    {{ als: "{als_escaped}", fr: "{fr_escaped}", ex: "{ex_escaped}" }},')
            else:
                lines.append(f'    {{ als: "{als_escaped}", fr: "{fr_escaped}" }},')
        lines.append("  ],")

    lines += [
        "};",
        "",
        "const LETTERS_WITH_ENTRIES = Object.keys(DICTIONNAIRE);",
        "const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');",
    ]

    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Modes
# ---------------------------------------------------------------------------

def mode_explore():
    """Inventaire : quelles catégories existent et combien d'entrées contiennent-elles."""
    print("=== EXPLORATION CATÉGORIES WIKTIONNAIRE ===\n")
    for cat in CATEGORIES_CANDIDATES:
        try:
            members = get_category_members(cat, limit=10)
            # Si 10 résultats, chercher le total réel
            if len(members) == 10:
                # Requête pour le total
                params = {
                    "action": "query",
                    "list": "categorymembers",
                    "cmtitle": f"Catégorie:{cat}",
                    "cmlimit": 1,
                    "cmnamespace": 0,
                    "format": "json",
                }
                # Pas de moyen direct d'avoir le total via l'API — on fetch tout
                all_members = get_category_members(cat)
                count = len(all_members)
                print(f"  ✓ Catégorie:{cat} — {count} entrées")
                print(f"    Exemples : {', '.join(all_members[:5])}")
            elif members:
                print(f"  ✓ Catégorie:{cat} — {len(members)} entrées (liste complète)")
                print(f"    Exemples : {', '.join(members[:5])}")
            else:
                print(f"  ✗ Catégorie:{cat} — vide ou inexistante")
        except Exception as e:
            print(f"  ✗ Catégorie:{cat} — erreur : {e}")
        print()


def mode_fetch(limit: int = 0):
    """Fetch complet ou limité."""
    print("=== FETCH WIKTIONNAIRE ===\n")

    # Trouver la meilleure catégorie
    best_cat = None
    best_count = 0
    for cat in CATEGORIES_CANDIDATES:
        try:
            members = get_category_members(cat, limit=5)
            if members:
                print(f"  Catégorie:{cat} — accessible ({len(members)} résultats test)")
                if not best_cat:
                    best_cat = cat
        except Exception:
            pass

    if not best_cat:
        print("Aucune catégorie alsacienne trouvée. Lancer --explore pour diagnostiquer.")
        return

    print(f"\n→ Catégorie retenue : {best_cat}")
    print("  Récupération des titres...")
    titles = get_category_members(best_cat, limit=limit)
    print(f"  {len(titles)} titres récupérés\n")

    # Fetch et parse les pages
    entries = []
    errors = []
    skipped = 0

    print("  Parsing des pages (par batch de 50)...")
    pages_content = get_pages_batch(titles)

    for title, wikitext in pages_content.items():
        if not wikitext:
            skipped += 1
            continue
        entry = parse_entry(title, wikitext)
        if entry:
            entries.append(entry)
        else:
            skipped += 1

    print(f"  → {len(entries)} entrées valides / {len(titles)} titres")
    print(f"  → {skipped} pages sans contenu alsacien parsable")

    if not entries:
        print("\nAucune entrée parsée. Vérifier le format des pages avec --explore.")
        return

    # Écriture data_wikt.js
    output_js = OUTPUT_DIR / "data_wikt.js"
    output_js.write_text(entries_to_datajs(entries), encoding="utf-8")
    print(f"\n  Fichier écrit : {output_js}")

    # Rapport
    by_letter = defaultdict(int)
    for e in entries:
        by_letter[e["als"][0].upper()] += 1

    rapport_lines = [
        "=== RAPPORT FETCH WIKTIONNAIRE ===",
        f"Catégorie source : {best_cat}",
        f"Entrées totales : {len(entries)}",
        f"Pages ignorées : {skipped}",
        f"Lettres couvertes : {len(by_letter)}/26",
        "",
        "Détail par lettre :",
    ]
    for letter in sorted(by_letter):
        rapport_lines.append(f"  {letter} : {by_letter[letter]} entrées")

    rapport_lines += [
        "",
        "Licence : CC-BY-SA 4.0",
        "Attribution à ajouter : « Données issues du Wiktionnaire (fr.wiktionary.org), licence CC-BY-SA 4.0 »",
        "À placer dans le footer du site.",
    ]

    rapport_path = OUTPUT_DIR / "scripts" / "rapport_wiktionnaire.txt"
    rapport_path.write_text("\n".join(rapport_lines), encoding="utf-8")
    print(f"  Rapport écrit : {rapport_path}")
    print("\n" + "\n".join(rapport_lines))


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Fetch données Wiktionnaire — Dictionnaire Alsacien")
    parser.add_argument("--explore", action="store_true", help="Inventaire des catégories disponibles")
    parser.add_argument("--fetch", action="store_true", help="Fetch complet")
    parser.add_argument("--limit", type=int, default=0, help="Limiter à N entrées (0 = tout)")
    args = parser.parse_args()

    if args.explore:
        mode_explore()
    elif args.fetch:
        mode_fetch(limit=args.limit)
    else:
        print("Usage : python fetch_wiktionnaire.py --explore | --fetch [--limit N]")
