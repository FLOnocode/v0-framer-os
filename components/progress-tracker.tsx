"use client"

import { useRequirements } from "@/context/requirements-context"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useLanguage } from "@/context/language-context"

export function ProgressTracker() {
  const { state, getProgressStages, getCurrentStage } = useRequirements()
  const stages = getProgressStages()
  const currentStage = getCurrentStage()
  const [showDialog, setShowDialog] = useState(false)
  const { t } = useLanguage()

  // Traduire les noms des étapes
  const getStageTranslation = (stageId: string) => {
    switch (stageId) {
      case "start":
        return t("demarrage")
      case "in-progress":
        return t("en.cours")
      case "advanced":
        return t("avance")
      case "finalization":
        return t("finalisation")
      case "ready":
        return t("pret")
      default:
        return stageId
    }
  }

  // Vérifier si au moins une tâche est complétée
  const hasCompletedTasks = state.categories.some((category) => category.requirements.some((req) => req.completed))

  // Fonction pour déterminer la couleur de chaque étape
  const getStageColor = (stageId: string, threshold: number) => {
    // Si aucune tâche n'est complétée, le voyant "Démarrage" ne doit pas être allumé
    if (stageId === "start" && !hasCompletedTasks) {
      return "bg-gray-500"
    }

    // Différentes nuances de bleu pour les étapes actives
    if (state.globalProgress >= threshold) {
      switch (stageId) {
        case "start":
          return "bg-blue-300"
        case "in-progress":
          return "bg-blue-400"
        case "advanced":
          return "bg-blue-500"
        case "finalization":
          return "bg-blue-600"
        case "ready":
          return state.globalProgress === 100
            ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" // Vert néon avec effet de lueur à 100%
            : "bg-blue-700" // Reste bleu si on n'est pas à 100%
        default:
          return "bg-blue-500"
      }
    }

    return "bg-gray-500"
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between mb-6">
        {stages.map((stage) => (
          <div key={stage.id} className="flex flex-col items-center">
            <div className={`h-4 w-4 rounded-full ${getStageColor(stage.id, stage.threshold)}`}></div>
            <span className="text-xs mt-1">{getStageTranslation(stage.id)}</span>
          </div>
        ))}
      </div>

      {/* Bouton "Soumettre mon template" qui apparaît uniquement à 100% */}
      {state.globalProgress === 100 && (
        <div className="mt-6 flex justify-center">
          <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
            <AlertDialogTrigger asChild>
              <Button className="bg-emerald-500 hover:bg-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                {t("soumettre.template")}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t("felicitations")}</AlertDialogTitle>
                <AlertDialogDescription>{t("template.pret")}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{t("annuler")}</AlertDialogCancel>
                <AlertDialogAction>{t("soumettre")}</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  )
}
