"use client"

import { createContext, useContext, useState, useCallback } from "react"
import { en, fr } from "../lib/i18n"

type Lang = "en" | "fr"
type Translations = typeof en

const translations: Record<Lang, Translations> = { en, fr }

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  const toggleLang = useCallback(() => {
    setLang((l) => (l === "en" ? "fr" : "en"))
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useT() {
  return useContext(LanguageContext).t
}

export function useLang() {
  return useContext(LanguageContext)
}
