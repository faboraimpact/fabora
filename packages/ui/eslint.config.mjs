import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Set explicit React version to avoid eslint-plugin-react calling context.getFilename() (removed in ESLint v9+)
  {
    settings: {
      react: { version: "19" },
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    "node_modules/**",
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Désactiver la règle no-html-link-for-pages car @fabora/ui est un package de composants, pas une app Next.js
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
])

export default eslintConfig
