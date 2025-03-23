"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "en" | "de" | "ch" | "fr" | "it"

type TranslationValue = string | ((count: number, total: number) => string)

type TranslationsType = {
  [key: string]: {
    [key in Language]: TranslationValue
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, params?: { count?: number; total?: number }) => string
}

const translations: TranslationsType = {
  title: {
    en: "Special Characters Plus Plus",
    de: "Sonderzeichen Plus Plus",
    ch: "Sunderzaiche Plus Plus",
    fr: "Caractères Spéciaux Plus Plus",
    it: "Caratteri Speciali Plus Plus",
  },
  subtitle: {
    en: "ISO 8859-1 and Latin Extended-A characters",
    de: "ISO 8859-1 und Latin Extended-A Zeichen",
    ch: "ISO 8859-1 und Latin Extended-A Zaiche",
    fr: "Caractères ISO 8859-1 et Latin Extended-A",
    it: "Caratteri ISO 8859-1 e Latin Extended-A",
  },
  uppercase: {
    en: "Uppercase",
    de: "Großbuchstaben",
    ch: "Groossi Buechstaabe",
    fr: "Majuscules",
    it: "Maiuscole",
  },
  lowercase: {
    en: "Lowercase",
    de: "Kleinbuchstaben",
    ch: "Glaini Buechstaabe",
    fr: "Minuscules",
    it: "Minuscole",
  },
  variations: {
    en: "Variations",
    de: "Variationen",
    ch: "Variante",
    fr: "Variations",
    it: "Variazioni",
  },
  copied: {
    en: "Copied to clipboard!",
    de: "In die Zwischenablage kopiert!",
    ch: "In Zwüschespycher kopiert!",
    fr: "Copié dans le presse-papiers!",
    it: "Copiato negli appunti!",
  },
  click_to_copy: {
    en: "Click to copy",
    de: "Klicken zum Kopieren",
    ch: "Drugge zum Kopiere",
    fr: "Cliquez pour copier",
    it: "Clicca per copiare",
  },
  copyright: {
    en: "© Informatik Ausgleichskasse Basel-Stadt",
    de: "© Informatik Ausgleichskasse Basel-Stadt",
    ch: "© Informatik Usglyychskasse Baasel-Stadt",
    fr: "© Informatique Caisse de compensation Bâle-Ville",
    it: "© Informatica Cassa di compensazione Basilea Città",
  },
  theme_light: {
    en: "Light",
    de: "Hell",
    ch: "Häll",
    fr: "Clair",
    it: "Chiaro",
  },
  theme_dark: {
    en: "Dark",
    de: "Dunkel",
    ch: "Dungkel",
    fr: "Sombre",
    it: "Scuro",
  },
  theme_system: {
    en: "System",
    de: "System",
    ch: "Syschtem",
    fr: "Système",
    it: "Sistema",
  },
  search_placeholder: {
    en: "Search characters...",
    de: "Zeichen suchen...",
    ch: "Zaiche sueche...",
    fr: "Rechercher des caractères...",
    it: "Cerca caratteri...",
  },
  no_results: {
    en: "No characters found matching your search.",
    de: "Keine Zeichen gefunden, die Ihrer Suche entsprechen.",
    ch: "Kai Zaiche gfunde, wo zu dyynere Suech basse.",
    fr: "Aucun caractère trouvé correspondant à votre recherche.",
    it: "Nessun carattere trovato corrispondente alla tua ricerca.",
  },
  showing_filtered: {
    en: (count: number, total: number) => `Showing ${count} of ${total} variations`,
    de: (count: number, total: number) => `Zeige ${count} von ${total} Variationen`,
    ch: (count: number, total: number) => `Zaig ${count} vo ${total} Variante`,
    fr: (count: number, total: number) => `Affichage de ${count} sur ${total} variations`,
    it: (count: number, total: number) => `Mostrando ${count} di ${total} variazioni`,
  },
  // New translations for favorites and recent characters
  favorites: {
    en: "Favorites",
    de: "Favoriten",
    ch: "Favorite",
    fr: "Favoris",
    it: "Preferiti",
  },
  recently_used: {
    en: "Recently Used",
    de: "Kürzlich verwendet",
    ch: "Kürzlig bruucht",
    fr: "Récemment utilisés",
    it: "Usati di recente",
  },
  clear: {
    en: "Clear",
    de: "Löschen",
    ch: "Lösche",
    fr: "Effacer",
    it: "Cancella",
  },
  add_to_favorites: {
    en: "Add to favorites",
    de: "Zu Favoriten hinzufügen",
    ch: "Zu Favorite drzue due",
    fr: "Ajouter aux favoris",
    it: "Aggiungi ai preferiti",
  },
  remove_from_favorites: {
    en: "Remove from favorites",
    de: "Aus Favoriten entfernen",
    ch: "Vo Favorite entfärne",
    fr: "Retirer des favoris",
    it: "Rimuovi dai preferiti",
  },
  added_to_favorites: {
    en: "Added to favorites",
    de: "Zu Favoriten hinzugefügt",
    ch: "Zu Favorite drzue doo",
    fr: "Ajouté aux favoris",
    it: "Aggiunto ai preferiti",
  },
  removed_from_favorites: {
    en: "Removed from favorites",
    de: "Aus Favoriten entfernt",
    ch: "Vo Favorite entfärnt",
    fr: "Retiré des favoris",
    it: "Rimosso dai preferiti",
  },
  cleared_recent: {
    en: "Cleared recent characters",
    de: "Kürzlich verwendete Zeichen gelöscht",
    ch: "Kürzlig bruuchti Zaiche glöscht",
    fr: "Caractères récents effacés",
    it: "Caratteri recenti cancellati",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Helper function to determine the initial language based on browser locale
const getInitialLanguage = (): Language => {
  // Default to German if we're not in a browser environment
  if (typeof window === "undefined") return "de"

  // Get browser language (e.g., 'en-US', 'de', 'fr-FR')
  const browserLang = navigator.language.split("-")[0].toLowerCase()

  // Map browser language to our supported languages
  const supportedLanguages: Record<string, Language> = {
    en: "en",
    de: "de",
    ch: "ch", // Swiss German
    fr: "fr",
    it: "it",
  }

  // Return the matched language or default to German
  return supportedLanguages[browserLang] || "de"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with a placeholder, will be updated in useEffect
  const [language, setLanguage] = useState<Language>("de")

  // Set the initial language based on browser locale after component mounts
  useEffect(() => {
    setLanguage(getInitialLanguage())
  }, [])

  const t = (key: string, params?: { count?: number; total?: number }) => {
    const translation = translations[key as keyof typeof translations]?.[language]

    if (!translation) return key

    if (typeof translation === "function" && params?.count !== undefined && params?.total !== undefined) {
      return translation(params.count, params.total)
    }

    return translation as string
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

