"use client"

import { useState } from "react"
import { CharacterGrid } from "@/components/character-grid"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitch } from "@/components/theme-switch"
import { AboutModal } from "@/components/about-modal"
import { DiacriticsHelp } from "@/components/diacritics-help"
import { Header } from "@/components/header"
import { SearchBox } from "@/components/search-box"
import { useCompactMode } from "@/context/compact-mode-context"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Expand, Minimize } from "lucide-react"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const { isCompactMode, setCompactMode } = useCompactMode()

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleSelectMark = (markName: string) => {
    setSearchTerm(markName)
  }

  const toggleCompactMode = () => {
    setCompactMode(!isCompactMode)
  }

  return (
    <main className={`container mx-auto px-6 py-6 ${isCompactMode ? "max-w-full p-2" : "max-w-6xl"}`}>
      {!isCompactMode && (
        <>
          <div className="flex justify-end mb-4 items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitch />
            <DiacriticsHelp onSelectMark={handleSelectMark} />
            <AboutModal />
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 hover:border-primary"
              onClick={toggleCompactMode}
              aria-label="Compact Mode"
            >
              <Minimize className="h-4 w-4 text-primary" />
            </Button>
          </div>
          <Header />
          <div className="flex justify-center mb-8">
            <SearchBox value={searchTerm} onSearch={handleSearch} />
          </div>
        </>
      )}

      {isCompactMode && (
        <div className="flex justify-end mb-2">
          <Button variant="ghost" size="sm" className="h-7 px-2" onClick={toggleCompactMode} title="Exit Compact Mode">
            <Expand className="h-4 w-4" />
          </Button>
        </div>
      )}

      <CharacterGrid searchTerm={searchTerm} isCompactMode={isCompactMode} />

      {!isCompactMode && <Footer />}
    </main>
  )
}

