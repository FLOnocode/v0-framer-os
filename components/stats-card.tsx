"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRequirements } from "@/context/requirements-context"

export function StatsCard() {
  const { state } = useRequirements()

  // Calculer les statistiques
  const totalRequirements = state.categories.reduce((total, category) => total + category.requirements.length, 0)

  const completedRequirements = state.categories.reduce(
    (total, category) => total + category.requirements.filter((req) => req.completed).length,
    0,
  )

  const remainingRequirements = totalRequirements - completedRequirements

  // Trouver la catégorie avec le plus de progrès
  let bestCategory = { name: "", percentage: 0 }
  let worstCategory = { name: "", percentage: 100 }

  state.categories.forEach((category) => {
    const total = category.requirements.length
    if (total === 0) return

    const completed = category.requirements.filter((req) => req.completed).length
    const percentage = Math.round((completed / total) * 100)

    if (percentage > bestCategory.percentage) {
      bestCategory = { name: category.name, percentage }
    }

    if (percentage < worstCategory.percentage && total > 0) {
      worstCategory = { name: category.name, percentage }
    }
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistiques</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Exigences complétées</p>
            <p className="text-2xl font-bold">
              {completedRequirements} / {totalRequirements}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Progression globale</p>
            <p className="text-2xl font-bold">{state.globalProgress}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Meilleure catégorie</p>
            <p className="text-lg font-medium">{bestCategory.name}</p>
            <p className="text-sm text-blue-500">{bestCategory.percentage}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Catégorie à améliorer</p>
            <p className="text-lg font-medium">{worstCategory.name}</p>
            <p className="text-sm text-orange-500">{worstCategory.percentage}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
