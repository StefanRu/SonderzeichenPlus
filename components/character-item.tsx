"use client"
import { useMemo } from "react"
import type React from "react"

import type { CharacterGroup, CharacterVariation } from "@/lib/characters"
import { Star } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface CharacterItemProps {
  character: CharacterGroup
  isExpanded: boolean
  onClick: () => void
  searchTerm?: string
  onCopyVariation: (variation: CharacterVariation) => void
  onToggleFavorite: (variation: CharacterVariation) => void
  favoriteCharacters: CharacterVariation[]
}

export function CharacterItem({
  character,
  isExpanded,
  onClick,
  searchTerm = "",
  onCopyVariation,
  onToggleFavorite,
  favoriteCharacters,
}: CharacterItemProps) {
  const { t } = useLanguage()

  // Filter variations based on search term
  const filteredVariations = useMemo(() => {
    if (!searchTerm) return character.variations

    const lowerTerm = searchTerm.toLowerCase()

    // If the base character matches the search, show all variations
    if (character.base.toLowerCase().includes(lowerTerm)) {
      return character.variations
    }

    // Otherwise, only show variations that match the search
    return character.variations.filter(
      (variation) =>
        variation.char.toLowerCase().includes(lowerTerm) || variation.name.toLowerCase().includes(lowerTerm),
    )
  }, [character.base, character.variations, searchTerm])

  // Check if a character is in favorites - pure function
  const isInFavorites = (char: string) => {
    return favoriteCharacters.some((favorite) => favorite.char === char)
  }

  // Highlight matching text in the base character
  const highlightedBase = useMemo(() => {
    if (!searchTerm) return character.base

    const lowerBase = character.base.toLowerCase()
    const lowerTerm = searchTerm.toLowerCase()

    if (lowerBase.includes(lowerTerm)) {
      const index = lowerBase.indexOf(lowerTerm)
      const before = character.base.substring(0, index)
      const match = character.base.substring(index, index + searchTerm.length)
      const after = character.base.substring(index + searchTerm.length)

      return (
        <>
          {before}
          <span className="bg-primary/20">{match}</span>
          {after}
        </>
      )
    }

    return character.base
  }, [character.base, searchTerm])

  // If there are no matching variations and the base doesn't match, don't render
  if (
    searchTerm &&
    filteredVariations.length === 0 &&
    !character.base.toLowerCase().includes(searchTerm.toLowerCase())
  ) {
    return null
  }

  // Handle copy variation - prevent direct state updates
  const handleCopyVariation = (e: React.MouseEvent, variation: CharacterVariation) => {
    e.stopPropagation()
    onCopyVariation(variation)
  }

  // Handle toggle favorite - prevent direct state updates
  const handleToggleFavorite = (e: React.MouseEvent, variation: CharacterVariation) => {
    e.stopPropagation()
    onToggleFavorite(variation)
  }

  return (
    <div className="relative group">
      <div
        className={`character-card group ${isExpanded ? "expanded" : ""}`}
        onClick={onClick}
        aria-expanded={isExpanded}
      >
        <div className="character-letter">{highlightedBase}</div>
      </div>

      <div className={`character-variations ${isExpanded ? "opacity-100 visible" : "opacity-0 invisible h-0"}`}>
        <div className="character-variations-inner inline-block whitespace-nowrap">
          <div className="flex flex-nowrap gap-2 pb-2">
            {filteredVariations.map((variation) => {
              const inFavorites = isInFavorites(variation.char)

              return (
                <div
                  key={variation.char}
                  className="variation-item flex-shrink-0 group/item relative"
                  onClick={(e) => handleCopyVariation(e, variation)}
                >
                  <span className="text-lg">{variation.char}</span>

                  <button
                    className="absolute -top-1 -right-1 opacity-0 group-hover/item:opacity-100 transition-opacity bg-background rounded-full p-0.5 shadow-sm"
                    onClick={(e) => handleToggleFavorite(e, variation)}
                    title={
                      inFavorites
                        ? t("remove_from_favorites") || "Remove from favorites"
                        : t("add_to_favorites") || "Add to favorites"
                    }
                  >
                    <Star
                      className={`h-2.5 w-2.5 ${inFavorites ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  </button>

                  <div
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-popover border shadow-md 
                    text-xs text-center text-popover-foreground opacity-0 group-hover/item:opacity-100 
                    transition-all duration-200 ease-in-out pointer-events-none z-50 min-w-[80px] whitespace-nowrap
                    max-w-[200px] overflow-hidden text-ellipsis"
                    style={{
                      // Ensure tooltip doesn't go off-screen
                      transform: "translate(-50%, 0)",
                      // Add a slight delay to prevent accidental triggering
                      transitionDelay: "150ms",
                    }}
                  >
                    {variation.name}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-popover border-t border-l"></div>
                  </div>
                </div>
              )
            })}
          </div>
          {searchTerm && filteredVariations.length < character.variations.length && (
            <div className="text-xs text-muted-foreground mt-1">
              {typeof t("showing_filtered") === "function"
                ? t("showing_filtered", { count: filteredVariations.length, total: character.variations.length })
                : `Showing ${filteredVariations.length} of ${character.variations.length} variations`}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

