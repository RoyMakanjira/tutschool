// Create a language provider component for the entire application
"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type LanguageType = "ru" | "en"

type LanguageContextType = {
  language: LanguageType
  setLanguage: (lang: LanguageType) => void
  t: (key: string, fallback: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "ru",
  setLanguage: () => { },
  t: (_, fallback) => fallback,
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>("ru")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Get language preference from localStorage on initial load
    const savedLanguage = localStorage.getItem("language") as LanguageType | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    // Load translations
    const loadTranslations = async () => {
      try {
        // In a real app, you would load translations from a JSON file or API
        // For now, we'll use a simple object
        setTranslations({
          home: {
            ru: "Главная",
            en: "Home",
          },
          about: {
            ru: "О нас",
            en: "About Us",
          },
          values: {
            ru: "Наши ценности",
            en: "Our Values",
          },
          // Add more translations as needed
        })
        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to load translations:", error)
      }
    }

    loadTranslations()
  }, [])

  const handleSetLanguage = (lang: LanguageType) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  // Translation helper function
  const t = (key: string, fallback: string): string => {
    if (!isMounted || !isLoaded) return fallback
    return translations[key]?.[language] || fallback
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
