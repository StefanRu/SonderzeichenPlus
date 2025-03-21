"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { useLanguage } from "@/context/language-context"
import type { CharacterGroup, CharacterVariation } from "@/lib/characters"
import { useToast } from "@/hooks/use-toast"

interface CharacterItemProps {
  character: CharacterGroup
  isExpanded: boolean
  onClick: () => void
  searchTerm?: string
}

export function CharacterItem({ character, isExpanded, onClick, searchTerm = "" }: CharacterItemProps) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [copiedChar, setCopiedChar] = useState<string | null>(null)

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

  const copyToClipboard = async (char: string) => {
    try {
      await navigator.clipboard.writeText(char)
      setCopiedChar(char)
      toast({
        title: t("copied"),
        description: char,
        duration: 1500,
      })

      // Reset the copied state after 1.5 seconds
      setTimeout(() => {
        setCopiedChar(null)
      }, 1500)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const handleVariationClick = (e: React.MouseEvent, variation: CharacterVariation) => {
    e.stopPropagation()
    copyToClipboard(variation.char)
  }

  // Highlight matching text in the base character
  const highlightBase = () => {
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
  }

  // If there are no matching variations and the base doesn't match, don't render
  if (
    searchTerm &&
    filteredVariations.length === 0 &&
    !character.base.toLowerCase().includes(searchTerm.toLowerCase())
  ) {
    return null
  }

  return (
    <div className="relative group">
      <div
        className={`character-card group ${isExpanded ? "expanded" : ""}`}
        onClick={onClick}
        aria-expanded={isExpanded}
      >
        <div className="character-letter">{highlightBase()}</div>
      </div>

      <div className={`character-variations ${isExpanded ? "opacity-100 visible" : "opacity-0 invisible h-0"}`}>
        <div className="character-variations-inner inline-block whitespace-nowrap">
          <div className="flex flex-nowrap gap-2 pb-2">
            {filteredVariations.map((variation) => (
              <div
                key={variation.char}
                className="variation-item flex-shrink-0"
                onClick={(e) => handleVariationClick(e, variation)}
                title={variation.name}
              >
                <span className="text-lg">{variation.char}</span>
              </div>
            ))}
          </div>
          {searchTerm && filteredVariations.length < character.variations.length && (
            <div className="text-xs text-muted-foreground mt-1">
              {t("showing_filtered", { count: filteredVariations.length, total: character.variations.length })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

