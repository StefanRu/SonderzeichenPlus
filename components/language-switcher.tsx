"use client"

import { useLanguage, type Language } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; name: string }[] = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "ch", name: "Baaseldytsch" },
    { code: "fr", name: "Français" },
    { code: "it", name: "Italiano" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary/30 hover:border-primary"
          aria-label={languages.find((lang) => lang.code === language)?.name}
        >
          <Globe className="h-4 w-4 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-primary/10 text-primary-foreground dark:text-foreground" : ""}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

