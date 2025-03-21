"use client"

import type { CharacterGroup } from "@/lib/characters"
import { CharacterItem } from "@/components/character-item"

interface CharacterSectionProps {
  title: string
  characters: CharacterGroup[]
  expandedCharacter: string | null
  onCharacterClick: (base: string) => void
  searchTerm?: string
}

export function CharacterSection({
  title,
  characters,
  expandedCharacter,
  onCharacterClick,
  searchTerm = "",
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
          />
        ))}
      </div>
    </section>
  )
}

