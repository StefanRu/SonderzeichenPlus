"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { useLanguage } from "@/context/language-context"
import { uppercaseLetters, lowercaseLetters, type CharacterVariation } from "@/lib/characters"
import { CharacterSection } from "@/components/character-section"
import { QuickAccessSection } from "@/components/quick-access-section"
import { useToast } from "@/hooks/use-toast"

// Maximum number of recent characters to store
const MAX_RECENT_CHARS = 10

interface CharacterGridProps {
  searchTerm?: string
}

export function CharacterGrid({ searchTerm = "" }: CharacterGridProps) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [expandedCharacter, setExpandedCharacter] = useState<string | null>(null)
  const [recentCharacters, setRecentCharacters] = useState<CharacterVariation[]>([])
  const [favoriteCharacters, setFavoriteCharacters] = useState<CharacterVariation[]>([])
  const [pendingToast, setPendingToast] = useState<{
    title: string
    description?: string
    duration?: number
  } | null>(null)
  const expandedRef = useRef<HTMLDivElement>(null)

  // Handle toast notifications separately from state updates
  useEffect(() => {
    if (pendingToast) {
      toast(pendingToast)
      setPendingToast(null)
    }
  }, [pendingToast, toast])

  // Memoize filtered characters to avoid recalculation on every render
  const filteredUppercase = useMemo(() => {
    if (!searchTerm) return uppercaseLetters

    const lowerTerm = searchTerm.toLowerCase()

    return uppercaseLetters.filter((char) => {
      // Match base character
      if (char.base.toLowerCase().includes(lowerTerm)) return true

      // Match variation characters
      if (char.variations.some((v) => v.char.toLowerCase().includes(lowerTerm))) return true

      // Match variation names
      if (char.variations.some((v) => v.name.toLowerCase().includes(lowerTerm))) return true

      return false
    })
  }, [searchTerm])

  const filteredLowercase = useMemo(() => {
    if (!searchTerm) return lowercaseLetters

    const lowerTerm = searchTerm.toLowerCase()

    return lowercaseLetters.filter((char) => {
      // Match base character
      if (char.base.toLowerCase().includes(lowerTerm)) return true

      // Match variation characters
      if (char.variations.some((v) => v.char.toLowerCase().includes(lowerTerm))) return true

      // Match variation names
      if (char.variations.some((v) => v.name.toLowerCase().includes(lowerTerm))) return true

      return false
    })
  }, [searchTerm])

  // Load favorites from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedFavorites = localStorage.getItem("spp-favorites")
        if (storedFavorites) {
          setFavoriteCharacters(JSON.parse(storedFavorites))
        }
      } catch (error) {
        console.error("Error loading favorites:", error)
      }
    }
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined" && favoriteCharacters.length > 0) {
      try {
        localStorage.setItem("spp-favorites", JSON.stringify(favoriteCharacters))
      } catch (error) {
        console.error("Error saving favorites:", error)
      }
    }
  }, [favoriteCharacters])

  // Handle character click - expand/collapse
  const handleCharacterClick = useCallback((characterBase: string) => {
    setExpandedCharacter((prev) => (prev === characterBase ? null : characterBase))
  }, [])

  // Handle clicks outside the expanded character
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedRef.current && !expandedRef.current.contains(event.target as Node)) {
        setExpandedCharacter(null)
      }
    }

    // Add event listener when a character is expanded
    if (expandedCharacter) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expandedCharacter])

  // Copy character to clipboard
  const handleCopyCharacter = useCallback(
    async (variation: CharacterVariation) => {
      try {
        await navigator.clipboard.writeText(variation.char)

        // Schedule toast for next render cycle
        setPendingToast({
          title: t("copied"),
          description: variation.char,
          duration: 1500,
        })

        // Update recent characters
        setRecentCharacters((prev) => {
          // Remove if already exists
          const filtered = prev.filter((item) => item.char !== variation.char)
          // Add to beginning and limit length
          return [variation, ...filtered].slice(0, MAX_RECENT_CHARS)
        })
      } catch (err) {
        console.error("Failed to copy:", err)
      }
    },
    [t],
  )

  // Toggle favorite status for a character
  const handleToggleFavorite = useCallback(
    (variation: CharacterVariation) => {
      setFavoriteCharacters((prev) => {
        // Check if already in favorites
        const isAlreadyFavorite = prev.some((fav) => fav.char === variation.char)

        // Schedule toast for next render cycle
        if (isAlreadyFavorite) {
          setPendingToast({
            title: t("removed_from_favorites") || "Removed from favorites",
            description: variation.char,
            duration: 1500,
          })
          return prev.filter((fav) => fav.char !== variation.char)
        } else {
          setPendingToast({
            title: t("added_to_favorites") || "Added to favorites",
            description: variation.char,
            duration: 1500,
          })
          return [...prev, variation]
        }
      })
    },
    [t],
  )

  // Clear all recent characters
  const handleClearRecent = useCallback(() => {
    setRecentCharacters([])
    setPendingToast({
      title: t("cleared_recent") || "Cleared recent characters",
      duration: 1500,
    })
  }, [t])

  const hasResults = filteredUppercase.length > 0 || filteredLowercase.length > 0

  // Render the component
  return (
    <div className="space-y-8" ref={expandedRef}>
      {/* Only render QuickAccessSection if there are items to show */}
      {(recentCharacters.length > 0 || favoriteCharacters.length > 0) && (
        <QuickAccessSection
          recentCharacters={recentCharacters}
          favoriteCharacters={favoriteCharacters}
          onCopyCharacter={handleCopyCharacter}
          onToggleFavorite={handleToggleFavorite}
          onClearRecent={handleClearRecent}
        />
      )}

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
          onCopyCharacter={handleCopyCharacter}
          onToggleFavorite={handleToggleFavorite}
          favoriteCharacters={favoriteCharacters}
        />
      )}

      {filteredLowercase.length > 0 && (
        <CharacterSection
          title={t("lowercase")}
          characters={filteredLowercase}
          expandedCharacter={expandedCharacter}
          onCharacterClick={handleCharacterClick}
          searchTerm={searchTerm}
          onCopyCharacter={handleCopyCharacter}
          onToggleFavorite={handleToggleFavorite}
          favoriteCharacters={favoriteCharacters}
        />
      )}
    </div>
  )
}

