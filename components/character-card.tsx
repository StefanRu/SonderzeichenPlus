"use client"

import { useState } from "react"
import type { ISO885915Character } from "@/lib/characters"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CharacterCardProps {
  character: ISO885915Character
  onClick: () => void
  isVariation?: boolean
}

export function CharacterCard({ character, onClick, isVariation = false }: CharacterCardProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    if (isVariation) {
      try {
        await navigator.clipboard.writeText(character.char)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      } catch (err) {
        console.error("Failed to copy: ", err)
      }
    }

    onClick()
  }

  return (
    <Card
      className={cn(
        "cursor-pointer hover:shadow-md transition-all relative overflow-hidden",
        copied && "ring-2 ring-primary",
        isVariation && "bg-muted/50",
        isVariation ? "w-12 h-12" : "w-full", // Make variation cards smaller and square
      )}
      onClick={handleClick}
    >
      <CardContent className={cn("flex items-center justify-center", isVariation ? "p-0 h-full" : "p-4 text-center")}>
        <div className={cn(isVariation ? "text-2xl" : "text-4xl mb-2")}>{character.char}</div>

        {!isVariation && (
          <div className="text-xs text-muted-foreground truncate">{character.name.split(" ").slice(-1)[0]}</div>
        )}

        {copied && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <div className="flex items-center gap-1 text-sm font-medium text-primary">
              <Check className="h-4 w-4" />
              <span>Kopiert!</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

