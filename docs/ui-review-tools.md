# Outils de Revue UI & Accessibilité

Ce document décrit les outils mis en place pour assurer la qualité visuelle et l'accessibilité des interfaces Fabora.

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────────┐
│                    Workflow UI Review                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Développement    →    Pre-commit Hook    →    Revue Manuelle │
│                                                                 │
│   ┌─────────────┐      ┌──────────────┐      ┌──────────────┐  │
│   │ Code TSX/   │  →   │ check:       │  →   │ @ui-review   │  │
│   │ CSS         │      │ contrast     │      │ Agent        │  │
│   └─────────────┘      └──────────────┘      └──────────────┘  │
│                              │                      │           │
│                              ▼                      ▼           │
│                        Bloque si             reviews/ui/        │
│                        ratio < 4.5:1         YYYY-MM-DD.md      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 1. Agent UI Reviewer

### Fichier

`.github/agents/ui-review.agent.md`

### Invocation

```
@ui-review <votre requête>
```

### Fonctionnalités

- Audit des pages pour cohérence visuelle
- Vérification des contrastes WCAG AA/AAA
- Analyse d'accessibilité (ARIA, labels, navigation clavier)
- Génération de rapports structurés

### Format de rapport

L'agent génère un fichier `reviews/ui/YYYY-MM-DD.md` avec un tableau par page :

| Problème    | Impact                  | Nature du problème | Code impacté   |
| ----------- | ----------------------- | ------------------ | -------------- |
| Description | important/modéré/mineur | Type               | `chemin:ligne` |

### Exemples d'utilisation

```
@ui-review Audite la page d'accueil de client-rh
@ui-review Vérifie l'accessibilité des formulaires
@ui-review Fais un audit complet de toutes les pages
```

---

## 2. Instructions Design System

### Fichier

`.github/instructions/ui-design-system.instructions.md`

### Scope

S'applique automatiquement aux fichiers `**/*.{tsx,jsx,css}`

### Contenu

#### Palette de couleurs Fabora

| Catégorie           | Tokens                                                 |
| ------------------- | ------------------------------------------------------ |
| **Green (Primary)** | `green-900`, `green-700`, `green-500`, `green-100`     |
| **Orange (Accent)** | `orange-900`, `orange-700`, `orange-500`, `orange-100` |
| **Neutral**         | `neutral-900` → `neutral-0`                            |

#### Contrastes validés ✅

| Fond        | Texte       | Ratio  | Usage            |
| ----------- | ----------- | ------ | ---------------- |
| neutral-100 | neutral-900 | 16.8:1 | Texte principal  |
| green-900   | white       | 5.9:1  | Boutons primary  |
| orange-900  | white       | 4.6:1  | Boutons accent   |
| neutral-0   | neutral-700 | 5.7:1  | Texte secondaire |

#### Contrastes interdits ❌

| Fond        | Texte       | Ratio |
| ----------- | ----------- | ----- |
| neutral-100 | neutral-500 | 2.1:1 |
| white       | green-500   | 2.9:1 |
| white       | orange-500  | 2.8:1 |

---

## 3. Hook Pre-commit : Validation Contraste

### Script

`scripts/check-contrast.js`

### Commande manuelle

```bash
yarn check:contrast
```

### Intégration Lefthook

Le hook est configuré dans `lefthook.yml` :

```yaml
pre-commit:
  parallel: true
  jobs:
    - run: yarn format:fix
    - run: yarn lint:fix
    - run: yarn check:contrast # ← Nouveau
    - run: yarn build
```

### Fonctionnement

1. **Scan** : Parcourt tous les fichiers TSX/CSS dans `apps/` et `packages/`
2. **Détection** : Identifie les combinaisons de couleurs problématiques
3. **Validation** : Vérifie les ratios de contraste (minimum 4.5:1)
4. **Blocage** : Empêche le commit si des problèmes sont détectés

### Sortie en cas d'erreur

```
❌ Problèmes de contraste détectés:

  apps/client-rh/src/components/Card.tsx:42
    └─ Contraste insuffisant: bg-neutral-100 + text-neutral-500 (ratio: 2.1:1, minimum: 4.5:1)

📊 Total: 1 problème(s) de contraste

💡 Référez-vous à .github/instructions/ui-design-system.instructions.md
   pour les combinaisons de couleurs validées.
```

---

## 4. Structure des fichiers

```
fabora/
├── .github/
│   ├── agents/
│   │   ├── nextjs-ui.agent.md
│   │   └── ui-review.agent.md      ← Agent de revue UI
│   └── instructions/
│       └── ui-design-system.instructions.md  ← Règles design system
├── scripts/
│   └── check-contrast.js           ← Script de validation
├── reviews/
│   └── ui/                         ← Rapports d'audit (générés)
├── lefthook.yml                    ← Configuration hooks
└── package.json                    ← Script check:contrast
```

---

## 5. Règles WCAG rappel

### Ratios de contraste minimum

| Type de contenu                   | WCAG AA | WCAG AAA |
| --------------------------------- | ------- | -------- |
| Texte normal (< 18px)             | 4.5:1   | 7:1      |
| Grand texte (≥ 18px ou 14px bold) | 3:1     | 4.5:1    |
| Éléments UI (bordures, icônes)    | 3:1     | —        |

### Checklist accessibilité

- [ ] Tous les inputs ont un label associé
- [ ] Tous les boutons icône ont un `aria-label`
- [ ] Images significatives ont un `alt` descriptif
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Hiérarchie de headings respectée (h1 → h2 → h3)
- [ ] Navigation clavier fonctionnelle

---

## Ressources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [shadcn/ui Accessibility](https://ui.shadcn.com/docs/components/accordion#accessibility)
