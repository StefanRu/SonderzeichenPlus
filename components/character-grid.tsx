"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { uppercaseLetters, lowercaseLetters, type CharacterGroup } from "@/lib/characters"
import { CharacterSection } from "@/components/character-section"
import { SearchBox } from "@/components/search-box"

export function CharacterGrid() {
  const { t } = useLanguage()
  const [expandedCharacter, setExpandedCharacter] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const handleCharacterClick = (characterBase: string) => {
    if (expandedCharacter === characterBase) {
      setExpandedCharacter(null) // collapse if already expanded
    } else {
      setExpandedCharacter(characterBase) // expand this character
    }
  }

  const filterCharacters = (characters: CharacterGroup[], term: string): CharacterGroup[] => {
    if (!term) return characters

    const lowerTerm = term.toLowerCase()

    return characters.filter((char) => {
      // Match base character
      if (char.base.toLowerCase().includes(lowerTerm)) return true

      // Match variation characters
      if (char.variations.some((v) => v.char.toLowerCase().includes(lowerTerm))) return true

      // Match variation names
      if (char.variations.some((v) => v.name.toLowerCase().includes(lowerTerm))) return true

      return false
    })
  }

  const filteredUppercase = filterCharacters(uppercaseLetters, searchTerm)
  const filteredLowercase = filterCharacters(lowercaseLetters, searchTerm)

  const hasResults = filteredUppercase.length > 0 || filteredLowercase.length > 0

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-8">
        <SearchBox onSearch={setSearchTerm} />
      </div>

      {!hasResults && (
        <div className="text-center py-8 text-muted-foreground">
          <p>{t("no_results") || "No characters found matching your search."}</p>
        </div>
      )}

      {filteredUppercase.length > 0 && (
        <CharacterSection
          title={t("uppercase")}
          characters={filteredUppercase}
          expandedCharacter={expandedCharacter}
          onCharacterClick={handleCharacterClick}
          searchTerm={searchTerm}
        />
      )}

      {filteredLowercase.length > 0 && (
        <CharacterSection
          title={t("lowercase")}
          characters={filteredLowercase}
          expandedCharacter={expandedCharacter}
          onCharacterClick={handleCharacterClick}
          searchTerm={searchTerm}
        />
      )}
    </div>
  )
}

