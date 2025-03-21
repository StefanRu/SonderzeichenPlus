"use client"

import { useEffect } from "react"

export function ConsoleCredits() {
  useEffect(() => {
    // Wait for the page to fully load
    const timer = setTimeout(() => {
      // Style for the main title
      const titleStyle = "font-size: 20px; font-weight: bold; color: #FFAF00; padding: 10px 0;"

      // Style for the credits text
      const creditStyle = "font-size: 14px; color: #666; padding: 2px 0;"

      // Log the styled messages
      console.log("%cSonderzeichen Plus Plus", titleStyle)
      console.log("%c✨ Coded by V0", creditStyle)
      console.log("%c✨ Supervised by Rutz Stefan", creditStyle)
      console.log("%c© " + new Date().getFullYear() + " Informatik Ausgleichskasse Basel-Stadt", creditStyle)
      console.log("%c", "padding: 5px 0;")
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return null // This component doesn't render anything visible
}

