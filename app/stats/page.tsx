"use client"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RequirementsProvider, useRequirements } from "@/context/requirements-context"
import { StatsCard } from "@/components/stats-card"
import Link from "next/link"

function CategoryProgressBar({ id, name }: { id: string; name: string }) {
  const { getCategoryProgress } = useRequirements()
  const { completed, total, percentage } = getCategoryProgress(id)

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">
          {completed}/{total} ({percentage}%)
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}

function StatsPage() {
  const { state } = useRequirements()

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Statistiques détaillées</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard />

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Progression par étape</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                  <span>Démarrage</span>
                </div>
                <span className="text-sm">{state.globalProgress >= 0 ? "Complété" : "En attente"}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`h-4 w-4 rounded-full ${state.globalProgress >= 20 ? "bg-blue-500" : "bg-gray-500"} mr-2`}
                  ></div>
                  <span>En cours</span>
                </div>
                <span className="text-sm">{state.globalProgress >= 20 ? "Complété" : "En attente"}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`h-4 w-4 rounded-full ${state.globalProgress >= 50 ? "bg-blue-500" : "bg-gray-500"} mr-2`}
                  ></div>
                  <span>Avancé</span>
                </div>
                <span className="text-sm">{state.globalProgress >= 50 ? "Complété" : "En attente"}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`h-4 w-4 rounded-full ${state.globalProgress >= 80 ? "bg-blue-500" : "bg-gray-500"} mr-2`}
                  ></div>
                  <span>Finalisation</span>
                </div>
                <span className="text-sm">{state.globalProgress >= 80 ? "Complété" : "En attente"}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`h-4 w-4 rounded-full ${state.globalProgress >= 100 ? "bg-blue-500" : "bg-gray-500"} mr-2`}
                  ></div>
                  <span>Prêt</span>
                </div>
                <span className="text-sm">{state.globalProgress >= 100 ? "Complété" : "En attente"}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progression par catégorie</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {state.categories.map((category) => (
              <CategoryProgressBar key={category.id} id={category.id} name={category.name} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function StatsWrapper() {
  return (
    <RequirementsProvider>
      <StatsPage />
    </RequirementsProvider>
  )
}
