"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Header
    "framer.requirements.tracker": "Framer Requirements Tracker",

    // Sidebar
    "tracker.exigences": "Tracker d'exigences",
    categories: "Catégories",
    "framer.review": "Framer Review",

    // Main content
    "progression.globale": "Progression Globale",
    "completez.exigences": "Complétez toutes les exigences pour soumettre votre modèle Framer au Marketplace.",
    "soumettre.template": "Soumettre mon template",

    // Progress stages
    demarrage: "Démarrage",
    "en.cours": "En cours",
    avance: "Avancé",
    finalisation: "Finalisation",
    pret: "Prêt",

    // Categories
    originalite: "Originalité",
    "design.ux": "Design & UX",
    "mise.en.page": "Mise en Page",
    reactivite: "Réactivité",
    "effets.animations": "Effets & Animations",
    liens: "Liens",
    typographie: "Typographie",
    ressources: "Ressources",
    cms: "CMS",
    balises: "Balises",
    accessibilite: "Accessibilité",
    "contenu.protege": "Contenu Protégé",
    "code.personnalise": "Code Personnalisé",
    marketplace: "Marketplace",

    // Dialog
    felicitations: "Félicitations !",
    "template.pret":
      "Votre template est prêt à être soumis au Marketplace Framer. Toutes les exigences ont été satisfaites.",
    annuler: "Annuler",
    soumettre: "Soumettre",
  },
  en: {
    // Header
    "framer.requirements.tracker": "Framer Requirements Tracker",

    // Sidebar
    "tracker.exigences": "Requirements Tracker",
    categories: "Categories",
    "framer.review": "Framer Review",

    // Main content
    "progression.globale": "Global Progress",
    "completez.exigences": "Complete all requirements to submit your Framer template to the Marketplace.",
    "soumettre.template": "Submit my template",

    // Progress stages
    demarrage: "Start",
    "en.cours": "In Progress",
    avance: "Advanced",
    finalisation: "Finalization",
    pret: "Ready",

    // Categories
    originalite: "Originality",
    "design.ux": "Design & UX",
    "mise.en.page": "Layout",
    reactivite: "Responsiveness",
    "effets.animations": "Effects & Animations",
    liens: "Links",
    typographie: "Typography",
    ressources: "Resources",
    cms: "CMS",
    balises: "Tags",
    accessibilite: "Accessibility",
    "contenu.protege": "Protected Content",
    "code.personnalise": "Custom Code",
    marketplace: "Marketplace",

    // Dialog
    felicitations: "Congratulations!",
    "template.pret":
      "Your template is ready to be submitted to the Framer Marketplace. All requirements have been met.",
    annuler: "Cancel",
    soumettre: "Submit",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  // Charger la langue depuis localStorage au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("framer-requirements-language")
    if (savedLanguage === "en" || savedLanguage === "fr") {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Sauvegarder la langue dans localStorage à chaque changement
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("framer-requirements-language", lang)
  }

  // Fonction de traduction
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage doit être utilisé à l'intérieur d'un LanguageProvider")
  }
  return context
}
