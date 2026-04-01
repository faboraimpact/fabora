"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@fabora/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@fabora/ui/components/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Éviter le flash de contenu incorrect lors du montage
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Déterminer l'icône à afficher
  const getIcon = () => {
    if (!mounted) {
      // Pendant le chargement, afficher une icône neutre
      return <Monitor className="size-5" />
    }

    // Si le thème est "system", utiliser l'icône du thème résolu
    if (theme === "system") {
      return resolvedTheme === "dark" ? (
        <Moon className="size-5" />
      ) : (
        <Sun className="size-5" />
      )
    }

    // Sinon, utiliser l'icône du thème sélectionné
    return theme === "dark" ? (
      <Moon className="size-5" />
    ) : (
      <Sun className="size-5" />
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Basculer le thème">
          {getIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">
            <Sun className="mr-2 size-4" />
            <span>Clair</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <Moon className="mr-2 size-4" />
            <span>Sombre</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <Monitor className="mr-2 size-4" />
            <span>Système</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
