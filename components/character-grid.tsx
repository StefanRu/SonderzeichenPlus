"use client"

import { useSearchParams } from "next/navigation"
import {
  type ISO885915Character,
  groupedCapitalLetters,
  groupedSmallLetters,
  capitalBaseLetters,
  smallBaseLetters,
} from "@/lib/characters"
import { LetterGroup } from "@/components/letter-group"
import { CharacterCard } from "@/components/character-card"
import { useToast } from "@/hooks/use-toast"

interface CharacterGridProps {
  characters: ISO885915Character[]
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const { toast } = useToast()

  // If there's a search query, show the search results instead of the grouped view
  if (query) {
    const filteredCharacters = characters.filter(
      (char) =>
        char.name.toLowerCase().includes(query.toLowerCase()) ||
        char.description.toLowerCase().includes(query.toLowerCase()),
    )

    const handleCharacterClick = (character: ISO885915Character) => {
      navigator.clipboard.writeText(character.char)
      toast({
        title: "Buchstabe kopiert",
        description: `${character.char} (${character.name}) in die Zwischenablage kopiert`,
        duration: 2000,
      })
    }

    return (
      <div>
        {filteredCharacters.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Keine Buchstaben gefunden, die "{query}" entsprechen</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Suchergebnisse</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {filteredCharacters.map((character) => (
                <CharacterCard
                  key={character.codePoint}
                  character={character}
                  onClick={() => handleCharacterClick(character)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Otherwise, show the grouped view
  return (
    <div className="space-y-12">
      <LetterGroup baseLetters={capitalBaseLetters} groupedCharacters={groupedCapitalLetters} title="Großbuchstaben" />

      <LetterGroup baseLetters={smallBaseLetters} groupedCharacters={groupedSmallLetters} title="Kleinbuchstaben" />
    </div>
  )
}

