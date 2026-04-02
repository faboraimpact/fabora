---
applyTo: "**/*.{tsx,jsx,css}"
---

# Design System Fabora - Règles UI

## Palette de couleurs

### Brand Colors

| Token                 | Valeur  | Usage                       |
| --------------------- | ------- | --------------------------- |
| `--fabora-green-900`  | #1e6b3c | Primary, CTAs principaux    |
| `--fabora-green-700`  | #2e8b57 | Secondary, liens            |
| `--fabora-green-500`  | #6ab88a | États hover légers          |
| `--fabora-green-100`  | #c8e6d5 | Backgrounds muted           |
| `--fabora-orange-900` | #e8622a | Accent, actions importantes |
| `--fabora-orange-700` | #ed8055 | Hover accent                |
| `--fabora-orange-500` | #f4a882 | États légers                |
| `--fabora-orange-100` | #faddcc | Backgrounds accent          |

### Neutrals

| Token                  | Valeur  | Usage                        |
| ---------------------- | ------- | ---------------------------- |
| `--fabora-neutral-900` | #1c1c1a | Texte principal (light mode) |
| `--fabora-neutral-700` | #5a5a56 | Texte secondaire             |
| `--fabora-neutral-500` | #a0a09c | Placeholders, désactivé      |
| `--fabora-neutral-300` | #ddddd8 | Bordures                     |
| `--fabora-neutral-100` | #f9f9f7 | Background page              |
| `--fabora-neutral-0`   | #ffffff | Cards, surfaces              |

## Règles de contraste WCAG

### Minimum requis

- **Texte normal** (< 18px) : ratio ≥ 4.5:1 (WCAG AA)
- **Grand texte** (≥ 18px ou 14px bold) : ratio ≥ 3:1
- **Éléments UI** (bordures, icônes) : ratio ≥ 3:1

### Combinaisons validées ✅

| Fond                    | Texte                   | Ratio  | Usage            |
| ----------------------- | ----------------------- | ------ | ---------------- |
| `neutral-100` (#f9f9f7) | `neutral-900` (#1c1c1a) | 16.8:1 | Texte principal  |
| `green-900` (#1e6b3c)   | `white`                 | 5.9:1  | Boutons primary  |
| `orange-900` (#e8622a)  | `white`                 | 4.6:1  | Boutons accent   |
| `neutral-0` (#ffffff)   | `neutral-700` (#5a5a56) | 5.7:1  | Texte secondaire |

### Combinaisons interdites ❌

- Texte `neutral-500` sur fond `neutral-100` (ratio 2.1:1)
- Texte `green-500` sur fond blanc (ratio 2.9:1)
- Texte `orange-500` sur fond blanc (ratio 2.8:1)

## Typography

### Familles (selon charte graphique Fabora Impact)

- **Titres & messages clés** : Monterchi (`font-headline`)
  - Usage : Titres H1-H6, CTAs principaux, messages de marque
  - Caractère : Audacieux et distinctif
- **Texte courant** : Nexa (`font-body`)
  - Usage : Paragraphes, contenus, labels, texte UI
  - Caractère : Moderne et lisible

### ⚠️ Règle stricte

**Aucune autre police ne doit être introduite dans les productions officielles.**
Les polices doivent être chargées depuis `/public/fonts/` et configurées via CSS variables.

### Tailles

| Classe      | Taille   | Usage             |
| ----------- | -------- | ----------------- |
| `text-xs`   | 0.75rem  | Labels, badges    |
| `text-sm`   | 0.875rem | Texte UI, boutons |
| `text-base` | 1rem     | Paragraphes       |
| `text-lg`   | 1.125rem | Sous-titres       |
| `text-xl`   | 1.25rem  | Titres sections   |
| `text-2xl`  | 1.5rem   | Titres pages      |

### Utilisation dans le code

```tsx
// Titres et messages clés → Monterchi
<h1 className="font-headline text-4xl font-black">Titre principal</h1>

// Texte courant → Nexa (par défaut via body)
<p className="text-base">Contenu paragraphe</p>

// Si besoin d'expliciter Nexa
<span className="font-body">Texte explicite</span>
```

## Spacing

### Échelle utilisée

| Token     | Valeur   | Usage                            |
| --------- | -------- | -------------------------------- |
| `gap-1`   | 0.25rem  | Espacement icône/texte bouton xs |
| `gap-1.5` | 0.375rem | Espacement standard boutons      |
| `gap-2`   | 0.5rem   | Espacement éléments inline       |
| `gap-3`   | 0.75rem  | Cartes small                     |
| `gap-4`   | 1rem     | Cartes, sections                 |
| `p-3`     | 0.75rem  | Padding cartes small             |
| `p-4`     | 1rem     | Padding cartes default           |

## Border Radius

| Token          | Valeur   | Usage                |
| -------------- | -------- | -------------------- |
| `rounded-sm`   | 0.375rem | Inputs, badges       |
| `rounded-md`   | 0.5rem   | Boutons              |
| `rounded-lg`   | 0.625rem | Cartes               |
| `rounded-xl`   | 0.875rem | Modals, cards larges |
| `rounded-full` | 9999px   | Avatars, tags        |

## Règles d'accessibilité

### Focus visible

Tous les éléments interactifs DOIVENT avoir :

```css
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
```

### Labels obligatoires

- Tout `<input>` doit avoir un `<label>` associé ou `aria-label`
- Tout `<button>` avec uniquement une icône doit avoir `aria-label`
- Les images significatives doivent avoir un `alt` descriptif

### Navigation clavier

- Tab order logique (éviter `tabindex` > 0)
- Tous les éléments interactifs accessibles via Tab
- Escape ferme les modals/popovers
- Enter/Space active les boutons

### Hiérarchie des headings

- Une seule `<h1>` par page
- Séquence logique : h1 → h2 → h3 (pas de saut)
- Ne pas utiliser les headings pour le style seul

## Composants shadcn/ui

Style : `radix-nova`
Base color : `neutral`
Préfixe : aucun

### Imports standards

```tsx
import { Button } from "@fabora/ui/components/button"
import { Card } from "@fabora/ui/components/card"
import { cn } from "@fabora/ui/lib/utils"
```
