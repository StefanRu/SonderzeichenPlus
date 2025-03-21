"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, Monitor } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useEffect, useState } from "react"

export function ThemeSwitch() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Only render theme switch client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const themeLabels = {
    light: t("theme_light") || "Light",
    dark: t("theme_dark") || "Dark",
    system: t("theme_system") || "System",
  }

  const getIcon = () => {
    if (!mounted) return <Sun className="h-4 w-4" />

    const currentTheme = theme === "system" ? resolvedTheme : theme

    switch (currentTheme) {
      case "light":
        return <Sun className="h-4 w-4 text-primary" />
      case "dark":
        return <Moon className="h-4 w-4 text-primary" />
      default:
        return <Monitor className="h-4 w-4 text-primary" />
    }
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="rounded-full px-4 border-primary/30 hover:border-primary">
        <Sun className="h-4 w-4 text-primary" />
        <span className="ml-2">{themeLabels.system}</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full px-4 border-primary/30 hover:border-primary">
          {getIcon()}
          <span className="ml-2">{themeLabels[theme as keyof typeof themeLabels] || themeLabels.system}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4 text-primary" />
          <span>{themeLabels.light}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4 text-primary" />
          <span>{themeLabels.dark}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4 text-primary" />
          <span>{themeLabels.system}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

