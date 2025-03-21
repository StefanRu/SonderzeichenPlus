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
    { code: "ch", name: "Schweizerdeutsch" },
    { code: "fr", name: "Français" },
    { code: "it", name: "Italiano" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full px-4 border-primary/30 hover:border-primary">
          <Globe className="h-4 w-4 mr-2 text-primary" />
          {languages.find((lang) => lang.code === language)?.name}
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

