"use client"

import { useLanguage } from "@/context/language-context"

export function Header() {
  const { t } = useLanguage()

  const highlightLetters = (text: string) => {
    // Get the title text
    const title = text

    // Find the first letter and all occurrences of 'P' in "Plus Plus"
    const firstLetter = title.charAt(0)

    // For English, German, and Swiss German, highlight the P's in "Plus Plus"
    if (title.includes("Plus Plus")) {
      const parts = title.split("Plus Plus")
      const before = parts[0]

      return (
        <>
          <span className="text-primary">{firstLetter}</span>
          <span>{title.slice(1, before.length)}</span>
          <span className="text-primary">P</span>
          <span>lus </span>
          <span className="text-primary">P</span>
          <span>lus</span>
          {parts[1] && <span>{parts[1]}</span>}
        </>
      )
    }

    // For French "Plus Plus" is "Plus Plus"
    if (title.includes("Plus Plus")) {
      const parts = title.split("Plus Plus")
      const before = parts[0]

      return (
        <>
          <span className="text-primary">{firstLetter}</span>
          <span>{title.slice(1, before.length)}</span>
          <span className="text-primary">P</span>
          <span>lus </span>
          <span className="text-primary">P</span>
          <span>lus</span>
          {parts[1] && <span>{parts[1]}</span>}
        </>
      )
    }

    // For Italian "Plus Plus" is "Plus Plus"
    if (title.includes("Plus Plus")) {
      const parts = title.split("Plus Plus")
      const before = parts[0]

      return (
        <>
          <span className="text-primary">{firstLetter}</span>
          <span>{title.slice(1, before.length)}</span>
          <span className="text-primary">P</span>
          <span>lus </span>
          <span className="text-primary">P</span>
          <span>lus</span>
          {parts[1] && <span>{parts[1]}</span>}
        </>
      )
    }

    // Default case: just highlight the first letter
    return (
      <>
        <span className="text-primary">{firstLetter}</span>
        <span>{title.slice(1)}</span>
      </>
    )
  }

  return (
    <header className="text-center mb-12 py-8">
      <h1 className="text-4xl font-bold mb-3 relative inline-block">{highlightLetters(t("title"))}</h1>
      <p className="text-sm text-muted-foreground max-w-md mx-auto">{t("subtitle")}</p>
    </header>
  )
}

