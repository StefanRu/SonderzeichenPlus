"use client"

import { useLanguage } from "@/context/language-context"
import { Card, CardContent } from "@/components/ui/card"
import type { CharacterGroup } from "@/lib/characters"
import { ChevronDown, ChevronUp } from "lucide-react"

interface CharacterCardProps {
  character: CharacterGroup
  isExpanded: boolean
  onClick: () => void
}

export function CharacterCard({ character, isExpanded, onClick }: CharacterCardProps) {
  const { t } = useLanguage()

  return (
    <Card
      className={`cursor-pointer hover:shadow-md transition-all ${isExpanded ? "border-primary" : ""}`}
      onClick={onClick}
    >
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-3xl">{character.base}</div>
          <div className="text-sm text-muted-foreground">
            {character.variations.length} {t("variations")}
          </div>
        </div>
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </CardContent>
    </Card>
  )
}

