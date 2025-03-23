"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Info } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function AboutModal() {
  const { language } = useLanguage()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full px-4 border-primary/30 hover:border-primary">
          <Info className="h-4 w-4 text-primary" />
          <span className="ml-2">Info</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-4 text-sm">
        <div className="space-y-3">
          <h3 className="font-medium text-base">Sonderzeichen Plus Plus</h3>
          <p className="text-muted-foreground leading-relaxed">
            In allen Personenregistern der Schweiz gilt seit dem 1. Januar 2024 ein einheitlicher Zeichensatz ISO 8859-1
            + Latin Extended-A, damit nahezu alle Sonderzeichen europäischer Sprachen - mit wenigen Ausnahmen - erfasst
            werden können. Dies hat der Bundesrat an seiner Sitzung vom 12. Mai 2021 entschieden. Diese Website wurde
            als Eingabehilfe zur Verwendung der neuen Sonderzeichen entwickelt.
          </p>
          <p className="text-xs text-muted-foreground pt-2 border-t">
            ©Informatik-Abteilung Ausgleichskasse Basel-Stadt
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

