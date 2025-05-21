"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import type { RequirementsState, RequirementsAction, ProgressStage } from "@/lib/types"
import { INITIAL_CATEGORIES, PROGRESS_STAGES } from "@/lib/data"

const STORAGE_KEY = "framer-requirements-state"

// État initial
const initialState: RequirementsState = {
  categories: INITIAL_CATEGORIES,
  globalProgress: 0,
  currentStage: PROGRESS_STAGES[0].id,
}

// Réducteur pour gérer les actions
function requirementsReducer(state: RequirementsState, action: RequirementsAction): RequirementsState {
  switch (action.type) {
    case "TOGGLE_REQUIREMENT": {
      const updatedCategories = state.categories.map((category) => {
        if (category.id === action.categoryId) {
          const updatedRequirements = category.requirements.map((req) => {
            if (req.id === action.requirementId) {
              return { ...req, completed: !req.completed }
            }
            return req
          })
          return { ...category, requirements: updatedRequirements }
        }
        return category
      })

      // Calculer la progression globale
      const totalRequirements = updatedCategories.reduce((total, category) => total + category.requirements.length, 0)
      const completedRequirements = updatedCategories.reduce(
        (total, category) => total + category.requirements.filter((req) => req.completed).length,
        0,
      )
      const globalProgress = totalRequirements > 0 ? Math.round((completedRequirements / totalRequirements) * 100) : 0

      // Déterminer l'étape actuelle
      let currentStage = PROGRESS_STAGES[0].id
      for (let i = PROGRESS_STAGES.length - 1; i >= 0; i--) {
        if (globalProgress >= PROGRESS_STAGES[i].threshold) {
          currentStage = PROGRESS_STAGES[i].id
          break
        }
      }

      return {
        ...state,
        categories: updatedCategories,
        globalProgress,
        currentStage,
      }
    }
    case "RESET_ALL":
      return initialState
    case "LOAD_STATE":
      return action.state
    default:
      return state
  }
}

// Créer le contexte
type RequirementsContextType = {
  state: RequirementsState
  dispatch: React.Dispatch<RequirementsAction>
  getCategoryProgress: (categoryId: string) => { completed: number; total: number; percentage: number }
  getProgressStages: () => ProgressStage[]
  getCurrentStage: () => ProgressStage
}

const RequirementsContext = createContext<RequirementsContextType | undefined>(undefined)

// Fournisseur de contexte
export function RequirementsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(requirementsReducer, initialState)

  // Charger l'état depuis localStorage au démarrage
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY)
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState)
        dispatch({ type: "LOAD_STATE", state: parsedState })
      } catch (error) {
        console.error("Erreur lors du chargement de l'état:", error)
      }
    }
  }, [])

  // Sauvegarder l'état dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  // Fonction utilitaire pour obtenir la progression d'une catégorie
  const getCategoryProgress = (categoryId: string) => {
    const category = state.categories.find((cat) => cat.id === categoryId)
    if (!category) {
      return { completed: 0, total: 0, percentage: 0 }
    }

    const total = category.requirements.length
    const completed = category.requirements.filter((req) => req.completed).length
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

    return { completed, total, percentage }
  }

  // Fonction pour obtenir toutes les étapes de progression
  const getProgressStages = () => {
    return PROGRESS_STAGES
  }

  // Fonction pour obtenir l'étape actuelle
  const getCurrentStage = () => {
    return PROGRESS_STAGES.find((stage) => stage.id === state.currentStage) || PROGRESS_STAGES[0]
  }

  return (
    <RequirementsContext.Provider
      value={{
        state,
        dispatch,
        getCategoryProgress,
        getProgressStages,
        getCurrentStage,
      }}
    >
      {children}
    </RequirementsContext.Provider>
  )
}

// Hook personnalisé pour utiliser le contexte
export function useRequirements() {
  const context = useContext(RequirementsContext)
  if (context === undefined) {
    throw new Error("useRequirements doit être utilisé à l'intérieur d'un RequirementsProvider")
  }
  return context
}
