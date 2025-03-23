"use client"

import { useState } from "react"
import { CharacterGrid } from "@/components/character-grid"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitch } from "@/components/theme-switch"
import { AboutModal } from "@/components/about-modal"
import { DiacriticsHelp } from "@/components/diacritics-help"
import { Header } from "@/components/header"
import { SearchBox } from "@/components/search-box"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleSelectMark = (markName: string) => {
    setSearchTerm(markName)
  }

  return (
    <main className="container mx-auto px-6 py-6 max-w-6xl">
      <div className="flex justify-end mb-4 items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitch />
        <DiacriticsHelp onSelectMark={handleSelectMark} />
        <AboutModal />
      </div>
      <Header />
      <div className="flex justify-center mb-8">
        <SearchBox value={searchTerm} onSearch={handleSearch} />
      </div>
      <CharacterGrid searchTerm={searchTerm} />
    </main>
  )
}

