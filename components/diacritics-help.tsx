"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HelpCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useState } from "react"

// Types for diacritical marks
type DiacriticMark = {
  name: string
  symbol: string
}

// Types for translations
type Translations = {
  title: Record<string, string>
  helpText: Record<string, string>
  descriptions: Record<string, Record<string, string>>
}

// Props interface with onSelectMark callback
interface DiacriticsHelpProps {
  onSelectMark?: (markName: string) => void
}

// Translations for all languages
const translations: Translations = {
  title: {
    en: "Diacritical Marks",
    de: "Diakritische Zeichen",
    ch: "Diakritischi Zaiche",
    fr: "Signes diacritiques",
    it: "Segni diacritici",
  },
  helpText: {
    en: "Help",
    de: "Hilfe",
    ch: "Hilf",
    fr: "Aide",
    it: "Aiuto",
  },
  descriptions: {
    Acute: {
      en: "A short diagonal line rising from left to right",
      de: "Eine kurze diagonale Linie, die von links nach rechts ansteigt",
      ch: "E churzi diagonali Linie, wo vo links noch rächts ufstygt",
      fr: "Une courte ligne diagonale montant de gauche à droite",
      it: "Una breve linea diagonale che sale da sinistra a destra",
    },
    Grave: {
      en: "A short diagonal line falling from left to right",
      de: "Eine kurze diagonale Linie, die von links nach rechts abfällt",
      ch: "E churzi diagonali Linie, wo vo links noch rächts abstygt",
      fr: "Une courte ligne diagonale descendant de gauche à droite",
      it: "Una breve linea diagonale che scende da sinistra a destra",
    },
    Circumflex: {
      en: "A small 'v' shape inverted above the letter",
      de: "Eine kleine umgekehrte 'v'-Form über dem Buchstaben",
      ch: "E chlyni umgkehrti 'v'-Form über em Buechstabe",
      fr: "Une petite forme de 'v' inversée au-dessus de la lettre",
      it: "Una piccola forma a 'v' invertita sopra la lettera",
    },
    Tilde: {
      en: "A small wavy line above the letter",
      de: "Eine kleine wellenförmige Linie über dem Buchstaben",
      ch: "E chlyni wellefermigi Linie über em Buechstabe",
      fr: "Une petite ligne ondulée au-dessus de la lettre",
      it: "Una piccola linea ondulata sopra la lettera",
    },
    "Umlaut/Diaeresis": {
      en: "Two small dots above the letter",
      de: "Zwei kleine Punkte über dem Buchstaben",
      ch: "Zwai chlyni Pünkt über em Buechstabe",
      fr: "Deux petits points au-dessus de la lettre",
      it: "Due piccoli punti sopra la lettera",
    },
    Cedilla: {
      en: "A small hook beneath the letter",
      de: "Ein kleiner Haken unter dem Buchstaben",
      ch: "E chlyne Haagge unter em Buechstabe",
      fr: "Un petit crochet sous la lettre",
      it: "Un piccolo gancio sotto la lettera",
    },
    Macron: {
      en: "A straight line above the letter",
      de: "Eine gerade Linie über dem Buchstaben",
      ch: "E gradi Linie über em Buechstabe",
      fr: "Une ligne droite au-dessus de la lettre",
      it: "Una linea retta sopra la lettera",
    },
    Breve: {
      en: "A small 'u' shape above the letter",
      de: "Eine kleine 'u'-Form über dem Buchstaben",
      ch: "E chlyni 'u'-Form über em Buechstabe",
      fr: "Une petite forme de 'u' au-dessus de la lettre",
      it: "Una piccola forma a 'u' sopra la lettera",
    },
    Ogonek: {
      en: "A small hook attached to the bottom right",
      de: "Ein kleiner Haken unten rechts am Buchstaben",
      ch: "E chlyne Haagge unde rächts am Buechstabe",
      fr: "Un petit crochet attaché en bas à droite",
      it: "Un piccolo gancio attaccato in basso a destra",
    },
    "Caron/Háček": {
      en: "A small 'v' shape above the letter",
      de: "Eine kleine 'v'-Form über dem Buchstaben",
      ch: "E chlyni 'v'-Form über em Buechstabe",
      fr: "Une petite forme de 'v' au-dessus de la lettre",
      it: "Una piccola forma a 'v' sopra la lettera",
    },
    Ring: {
      en: "A small circle above the letter",
      de: "Ein kleiner Kreis über dem Buchstaben",
      ch: "E chlyne Chreis über em Buechstabe",
      fr: "Un petit cercle au-dessus de la lettre",
      it: "Un piccolo cerchio sopra la lettera",
    },
    "Dot Above": {
      en: "A small dot above the letter",
      de: "Ein kleiner Punkt über dem Buchstaben",
      ch: "E chlyne Punkt über em Buechstabe",
      fr: "Un petit point au-dessus de la lettre",
      it: "Un piccolo punto sopra la lettera",
    },
    "Double Acute": {
      en: "Two short diagonal lines above the letter",
      de: "Zwei kurze diagonale Linien über dem Buchstaben",
      ch: "Zwai churzi diagonali Linie über em Buechstabe",
      fr: "Deux courtes lignes diagonales au-dessus de la lettre",
      it: "Due brevi linee diagonali sopra la lettera",
    },
    Stroke: {
      en: "A line through the letter",
      de: "Eine Linie durch den Buchstaben",
      ch: "E Linie dür de Buechstabe",
      fr: "Une ligne à travers la lettre",
      it: "Una linea attraverso la lettera",
    },
    Ligature: {
      en: "Two letters combined into one",
      de: "Zwei Buchstaben zu einem verbunden",
      ch: "Zwai Buechstabe zämme verbunde",
      fr: "Deux lettres combinées en une",
      it: "Due lettere combinate in una",
    },
  },
}

// List of diacritical marks with their symbols
const diacriticMarks: DiacriticMark[] = [
  { name: "Acute", symbol: "´" },
  { name: "Grave", symbol: "`" },
  { name: "Circumflex", symbol: "^" },
  { name: "Tilde", symbol: "~" },
  { name: "Umlaut/Diaeresis", symbol: "¨" },
  { name: "Cedilla", symbol: "¸" },
  { name: "Macron", symbol: "¯" },
  { name: "Breve", symbol: "˘" },
  { name: "Ogonek", symbol: "˛" },
  { name: "Caron/Háček", symbol: "ˇ" },
  { name: "Ring", symbol: "˚" },
  { name: "Dot Above", symbol: "˙" },
  { name: "Double Acute", symbol: "˝" },
  { name: "Stroke", symbol: "/" },
  { name: "Ligature", symbol: "æ" }, // Using æ as a representative symbol for ligature
]

export function DiacriticsHelp({ onSelectMark }: DiacriticsHelpProps) {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  // Get the appropriate title based on language
  const getTitle = () => {
    return translations.title[language] || translations.title.en
  }

  // Get the appropriate help text based on language
  const getHelpText = () => {
    return translations.helpText[language] || translations.helpText.en
  }

  // Get the appropriate description based on language
  const getDescription = (markName: string) => {
    return translations.descriptions[markName]?.[language] || translations.descriptions[markName]?.en || ""
  }

  // Handle copying to clipboard with fallback
  const handleCopyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement("textarea")
        textArea.value = text
        textArea.style.position = "fixed"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
      }
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  // Handle mark selection - adds the mark name to search and optionally closes the dropdown
  const handleMarkSelect = (mark: DiacriticMark) => {
    // Copy the symbol to clipboard
    handleCopyToClipboard(mark.symbol)

    // Call the callback to update the search term
    if (onSelectMark) {
      onSelectMark(mark.name)
      // Optionally close the dropdown after selection
      setIsOpen(false)
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary/30 hover:border-primary"
          aria-label={getHelpText()}
        >
          <HelpCircle className="h-4 w-4 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[350px] p-4 max-h-[80vh] overflow-y-auto sm:w-[350px] w-[280px]"
        onEscapeKeyDown={() => setIsOpen(false)}
        onInteractOutside={() => setIsOpen(false)}
      >
        <div className="space-y-4">
          <h3 className="font-medium text-base">{getTitle()}</h3>
          <div className="grid gap-3">
            {diacriticMarks.map((mark) => (
              <div
                key={mark.name}
                className="border rounded-md p-2 bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer"
                onClick={() => handleMarkSelect(mark)}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-8 h-8 flex items-center justify-center border rounded-md bg-background hover:bg-primary/10 transition-colors"
                    tabIndex={0}
                    role="button"
                    aria-label={`Copy ${mark.name} symbol and search for it`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleMarkSelect(mark)
                      }
                    }}
                  >
                    <span className="text-lg">{mark.symbol}</span>
                  </div>
                  <h4 className="font-medium text-sm">{mark.name}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{getDescription(mark.name)}</p>
              </div>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

