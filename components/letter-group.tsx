"use client"

import { useState } from "react"
import type { ISO885915Character } from "@/lib/characters"
import { CharacterCard } from "@/components/character-card"
import { useToast } from "@/hooks/use-toast"
import { Card } from "@/components/ui/card"

interface LetterGroupProps {
  baseLetters: string[]
  groupedCharacters: Record<string, ISO885915Character[]>
  title: string
}

export function LetterGroup({ baseLetters, groupedCharacters, title }: LetterGroupProps) {
  const [selectedBaseLetter, setSelectedBaseLetter] = useState<string | null>(null)
  const { toast } = useToast()

  // Filter to only include base letters with variations (more than 1 character)
  const baseLettersWithVariations = baseLetters.filter((baseLetter) => groupedCharacters[baseLetter].length > 1)

  const handleBaseLetterClick = (baseLetter: string) => {
    if (selectedBaseLetter === baseLetter) {
      setSelectedBaseLetter(null)
    } else {
      setSelectedBaseLetter(baseLetter)
    }
  }

  const handleVariationClick = (character: ISO885915Character) => {
    toast({
      title: "Buchstabe kopiert",
      description: `${character.char} (${character.name}) in die Zwischenablage kopiert`,
      duration: 2000,
    })
  }

  // Get the representative character for each base letter (usually the plain version)
  const getRepresentativeCharacter = (baseLetter: string): ISO885915Character => {
    const chars = groupedCharacters[baseLetter]

    // Try to find the plain version first (without diacritics)
    const plainChar = chars.find(
      (c) => c.char.normalize("NFD").length === 1 || c.name.toLowerCase().indexOf("with") === -1,
    )

    return plainChar || chars[0]
  }

  // If there are no base letters with variations, show a message
  if (baseLettersWithVariations.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-muted-foreground text-center py-4">Keine Buchstaben mit Variationen gefunden.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
        {baseLettersWithVariations.map((baseLetter) => {
          const representativeChar = getRepresentativeCharacter(baseLetter)
          const isSelected = selectedBaseLetter === baseLetter

          return (
            <div key={baseLetter} className="space-y-2">
              <CharacterCard character={representativeChar} onClick={() => handleBaseLetterClick(baseLetter)} />

              {isSelected && (
                <Card className="p-2 border border-dashed">
                  <div className="flex flex-row flex-wrap gap-2 justify-center">
                    {groupedCharacters[baseLetter].map((char) => (
                      <div key={char.codePoint} className="flex-shrink-0">
                        <CharacterCard character={char} onClick={() => handleVariationClick(char)} isVariation={true} />
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

