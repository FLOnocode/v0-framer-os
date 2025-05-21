"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      className="w-12 h-8"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
    >
      {language === "fr" ? "EN" : "FR"}
    </Button>
  )
}
