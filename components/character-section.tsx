"use client"

import type { CharacterGroup, CharacterVariation } from "@/lib/characters"
import { CharacterItem } from "@/components/character-item"

interface CharacterSectionProps {
  title: string
  characters: CharacterGroup[]
  expandedCharacter: string | null
  onCharacterClick: (base: string) => void
  searchTerm?: string
  onCopyCharacter?: (variation: CharacterVariation) => void
  onToggleFavorite?: (variation: CharacterVariation) => void
  favoriteCharacters?: CharacterVariation[]
}

export function CharacterSection({
  title,
  characters,
  expandedCharacter,
  onCharacterClick,
  searchTerm = "",
  onCopyCharacter,
  onToggleFavorite,
  favoriteCharacters = [],
}: CharacterSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="section-title">{title}</h2>
      <div className="flex flex-wrap gap-1">
        {characters.map((char) => (
          <CharacterItem
            key={char.base}
            character={char}
            isExpanded={expandedCharacter === char.base}
            onClick={() => onCharacterClick(char.base)}
            searchTerm={searchTerm}
            onCopyVariation={onCopyCharacter || (() => {})}
            onToggleFavorite={onToggleFavorite || (() => {})}
            favoriteCharacters={favoriteCharacters}
          />
        ))}
      </div>
    </section>
  )
}

