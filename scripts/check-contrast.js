#!/usr/bin/env node

/**
 * Script de validation des contrastes de couleurs
 * Vérifie les combinaisons de couleurs dans les fichiers TSX/CSS
 * pour s'assurer qu'elles respectent les ratios WCAG AA
 */

const fs = require("fs")
const path = require("path")

// Couleurs Fabora avec leurs valeurs hex
const FABORA_COLORS = {
  // Greens
  "fabora-green-900": "#1e6b3c",
  "fabora-green-700": "#2e8b57",
  "fabora-green-500": "#6ab88a",
  "fabora-green-100": "#c8e6d5",
  // Oranges
  "fabora-orange-900": "#e8622a",
  "fabora-orange-700": "#ed8055",
  "fabora-orange-500": "#f4a882",
  "fabora-orange-100": "#faddcc",
  // Neutrals
  "fabora-neutral-900": "#1c1c1a",
  "fabora-neutral-700": "#5a5a56",
  "fabora-neutral-500": "#a0a09c",
  "fabora-neutral-300": "#ddddd8",
  "fabora-neutral-100": "#f9f9f7",
  "fabora-neutral-0": "#ffffff",
  // Aliases courants
  white: "#ffffff",
  black: "#000000",
}

// Combinaisons interdites (ratio < 4.5:1 pour texte normal)
const FORBIDDEN_COMBINATIONS = [
  { bg: "neutral-100", fg: "neutral-500", ratio: 2.1 },
  { bg: "white", fg: "green-500", ratio: 2.9 },
  { bg: "white", fg: "orange-500", ratio: 2.8 },
  { bg: "neutral-0", fg: "neutral-500", ratio: 2.1 },
  { bg: "green-100", fg: "green-500", ratio: 1.8 },
  { bg: "orange-100", fg: "orange-500", ratio: 1.9 },
]

// Patterns à détecter dans le code
const CONTRAST_PATTERNS = [
  // Classes Tailwind avec bg-* et text-*
  /bg-(fabora-)?(green|orange|neutral)-(\d+)\s+.*?text-(fabora-)?(green|orange|neutral)-(\d+)/g,
  /text-(fabora-)?(green|orange|neutral)-(\d+)\s+.*?bg-(fabora-)?(green|orange|neutral)-(\d+)/g,
  // Classes avec muted, primary, etc.
  /bg-muted\s+.*?text-muted-foreground/g,
]

/**
 * Calcule la luminance relative d'une couleur hex
 */
function getLuminance(hex) {
  const rgb = hexToRgb(hex)
  const [r, g, b] = rgb.map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * Convertit une couleur hex en RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0]
}

/**
 * Calcule le ratio de contraste entre deux couleurs
 */
function getContrastRatio(hex1, hex2) {
  const l1 = getLuminance(hex1)
  const l2 = getLuminance(hex2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Vérifie un fichier pour les problèmes de contraste
 */
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8")
  const issues = []
  const lines = content.split("\n")

  lines.forEach((line, index) => {
    FORBIDDEN_COMBINATIONS.forEach((combo) => {
      const bgPattern = new RegExp(`bg-(fabora-)?${combo.bg}`, "i")
      const fgPattern = new RegExp(`text-(fabora-)?${combo.fg}`, "i")

      if (bgPattern.test(line) && fgPattern.test(line)) {
        issues.push({
          file: filePath,
          line: index + 1,
          message: `Contraste insuffisant: bg-${combo.bg} + text-${combo.fg} (ratio: ${combo.ratio}:1, minimum: 4.5:1)`,
          severity: "error",
        })
      }
    })

    // Vérifier les couleurs explicites text-[#xxx]
    const explicitColors = line.match(/text-\[#([a-fA-F0-9]{6})\]/g)
    const explicitBgs = line.match(/bg-\[#([a-fA-F0-9]{6})\]/g)

    if (explicitColors && explicitBgs) {
      explicitColors.forEach((textColor) => {
        const textHex = "#" + textColor.match(/#([a-fA-F0-9]{6})/)[1]
        explicitBgs.forEach((bgColor) => {
          const bgHex = "#" + bgColor.match(/#([a-fA-F0-9]{6})/)[1]
          const ratio = getContrastRatio(textHex, bgHex)
          if (ratio < 4.5) {
            issues.push({
              file: filePath,
              line: index + 1,
              message: `Contraste insuffisant: ${bgColor} + ${textColor} (ratio: ${ratio.toFixed(2)}:1, minimum: 4.5:1)`,
              severity: "error",
            })
          }
        })
      })
    }
  })

  return issues
}

/**
 * Trouve tous les fichiers TSX/CSS dans les répertoires
 */
function findFiles(dir, extensions = [".tsx", ".jsx", ".css"]) {
  const files = []

  if (!fs.existsSync(dir)) return files

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (
      stat.isDirectory() &&
      !item.startsWith(".") &&
      item !== "node_modules"
    ) {
      files.push(...findFiles(fullPath, extensions))
    } else if (stat.isFile() && extensions.some((ext) => item.endsWith(ext))) {
      files.push(fullPath)
    }
  }

  return files
}

// Main
function main() {
  const rootDir = process.cwd()
  const dirs = ["apps", "packages"]
  const allIssues = []

  console.log("🎨 Vérification des contrastes de couleurs...\n")

  for (const dir of dirs) {
    const fullDir = path.join(rootDir, dir)
    const files = findFiles(fullDir)

    for (const file of files) {
      const issues = checkFile(file)
      allIssues.push(...issues)
    }
  }

  if (allIssues.length > 0) {
    console.log("❌ Problèmes de contraste détectés:\n")

    allIssues.forEach((issue) => {
      const relativePath = path.relative(rootDir, issue.file)
      console.log(`  ${relativePath}:${issue.line}`)
      console.log(`    └─ ${issue.message}\n`)
    })

    console.log(`\n📊 Total: ${allIssues.length} problème(s) de contraste`)
    console.log(
      "\n💡 Référez-vous à .github/instructions/ui-design-system.instructions.md"
    )
    console.log("   pour les combinaisons de couleurs validées.\n")

    process.exit(1)
  } else {
    console.log("✅ Aucun problème de contraste détecté!\n")
    process.exit(0)
  }
}

main()
