"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"
import type { CharacterVariation } from "@/lib/characters"
import { useToast } from "@/hooks/use-toast"

interface VariationRowProps {
  variations: CharacterVariation[]
}

export function VariationRow({ variations }: VariationRowProps) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [copiedChar, setCopiedChar] = useState<string | null>(null)

  const copyToClipboard = async (char: CharacterVariation) => {
    try {
      await navigator.clipboard.writeText(char.char)
      setCopiedChar(char.char)
      toast({
        title: t("copied"),
        description: char.char,
        duration: 2000,
      })

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedChar(null)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="pl-4 py-2 border-l-2 border-primary">
      <div className="flex flex-wrap gap-2">
        {variations.map((variation) => (
          <Card
            key={variation.char}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => copyToClipboard(variation)}
          >
            <CardContent className="p-3 flex items-center gap-2">
              <div className="text-2xl">{variation.char}</div>
              <div className="text-xs text-muted-foreground">{variation.name}</div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 ml-1"
                onClick={(e) => {
                  e.stopPropagation()
                  copyToClipboard(variation)
                }}
              >
                {copiedChar === variation.char ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-2 text-xs text-muted-foreground">{t("click_to_copy")}</div>
    </div>
  )
}

