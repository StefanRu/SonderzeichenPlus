"use client"

import { useLanguage } from "@/context/language-context"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { useState } from "react"

interface SearchBoxProps {
  onSearch: (term: string) => void
}

export function SearchBox({ onSearch }: SearchBoxProps) {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setSearchTerm("")
    onSearch("")
  }

  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        <Search size={16} className="text-primary/70" />
      </div>
      <Input
        type="text"
        placeholder={t("search_placeholder") || "Search characters..."}
        className="pl-9 pr-9 py-2 h-9 text-sm border-primary/30 focus-visible:ring-primary/30"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}

