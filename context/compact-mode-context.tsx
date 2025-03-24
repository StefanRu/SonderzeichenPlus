"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type CompactModeContextType = {
  isCompactMode: boolean
  setCompactMode: (isCompact: boolean) => void
}

const CompactModeContext = createContext<CompactModeContextType | undefined>(undefined)

export function CompactModeProvider({ children }: { children: ReactNode }) {
  const [isCompactMode, setIsCompactMode] = useState(false)

  // Check URL parameters on mount to determine if compact mode is enabled
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const compactParam = urlParams.get("compact")

      if (compactParam === "true" || compactParam === "1") {
        setIsCompactMode(true)

        // Add a class to the body for global styling in compact mode
        document.body.classList.add("compact-mode")
      }
    }
  }, [])

  const setCompactMode = (isCompact: boolean) => {
    setIsCompactMode(isCompact)

    if (typeof window !== "undefined") {
      // Update URL parameter
      const url = new URL(window.location.href)
      if (isCompact) {
        url.searchParams.set("compact", "true")
        document.body.classList.add("compact-mode")
      } else {
        url.searchParams.delete("compact")
        document.body.classList.remove("compact-mode")
      }
      window.history.replaceState({}, "", url.toString())
    }
  }

  return <CompactModeContext.Provider value={{ isCompactMode, setCompactMode }}>{children}</CompactModeContext.Provider>
}

export function useCompactMode() {
  const context = useContext(CompactModeContext)
  if (context === undefined) {
    throw new Error("useCompactMode must be used within a CompactModeProvider")
  }
  return context
}

