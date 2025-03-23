"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, X } from "lucide-react"
import type { CharacterVariation } from "@/lib/characters"

interface QuickAccessSectionProps {
  recentCharacters: CharacterVariation[]
  favoriteCharacters: CharacterVariation[]
  onCopyCharacter: (char: CharacterVariation) => void
  onToggleFavorite: (char: CharacterVariation) => void
  onClearRecent: () => void
}

export function QuickAccessSection({
  recentCharacters,
  favoriteCharacters,
  onCopyCharacter,
  onToggleFavorite,
  onClearRecent,
}: QuickAccessSectionProps) {
  const { t } = useLanguage()

  // Pure function to check if a character is in favorites
  const isInFavorites = (char: string) => {
    return favoriteCharacters.some((favorite) => favorite.char === char)
  }

  return (
    <div className="space-y-6 mb-8 bg-muted/20 p-4 rounded-lg border">
      {favoriteCharacters.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              {t("favorites") || "Favorites"}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {favoriteCharacters.map((variation) => (
              <Card
                key={variation.char}
                className="cursor-pointer hover:shadow-md transition-shadow group relative"
                onClick={() => onCopyCharacter(variation)}
              >
                <CardContent className="p-2 flex items-center justify-center aspect-square w-12 h-12 relative">
                  <div className="text-2xl">{variation.char}</div>
                  <div className="absolute top-0 right-0 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-0.5 bg-background rounded-full shadow-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        onToggleFavorite(variation)
                      }}
                      title={t("remove_from_favorites")}
                    >
                      <Star className="h-2.5 w-2.5 fill-primary text-primary" />
                    </button>
                  </div>
                  <div
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-popover border shadow-md 
                    text-xs text-center text-popover-foreground opacity-0 group-hover:opacity-100 
                    transition-all duration-200 ease-in-out pointer-events-none z-50 min-w-[80px] whitespace-nowrap"
                  >
                    {variation.name}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-popover border-t border-l"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {recentCharacters.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {t("recently_used") || "Recently Used"}
            </h3>
            <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={onClearRecent}>
              <X className="h-3 w-3 mr-1" />
              {t("clear") || "Clear"}
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentCharacters.map((variation) => (
              <Card
                key={variation.char}
                className="cursor-pointer hover:shadow-md transition-shadow group relative"
                onClick={() => onCopyCharacter(variation)}
              >
                <CardContent className="p-2 flex items-center justify-center aspect-square w-12 h-12 relative">
                  <div className="text-2xl">{variation.char}</div>
                  <div className="absolute top-0 right-0 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-0.5 bg-background rounded-full shadow-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        onToggleFavorite(variation)
                      }}
                      title={isInFavorites(variation.char) ? t("remove_from_favorites") : t("add_to_favorites")}
                    >
                      <Star
                        className={`h-2.5 w-2.5 ${isInFavorites(variation.char) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    </button>
                  </div>
                  <div
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-popover border shadow-md 
                    text-xs text-center text-popover-foreground opacity-0 group-hover:opacity-100 
                    transition-all duration-200 ease-in-out pointer-events-none z-50 min-w-[80px] whitespace-nowrap"
                  >
                    {variation.name}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-popover border-t border-l"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

