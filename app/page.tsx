"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"
import { RequirementsProvider, useRequirements } from "@/context/requirements-context"
import { CategorySidebarItem } from "@/components/category-sidebar-item"
import { RequirementSection } from "@/components/requirement-section"
import { ProgressTracker } from "@/components/progress-tracker"
import { Header } from "@/components/header"
import { useLanguage } from "@/context/language-context"

function Dashboard() {
  const { theme, setTheme } = useTheme()
  const { state } = useRequirements()
  const { t } = useLanguage()

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-4 flex items-center gap-3 border-b border-border">
          <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">FR</div>
          <div>
            <h2 className="font-bold">Framer Requirements</h2>
            <p className="text-xs text-muted-foreground">{t("tracker.exigences")}</p>
          </div>
        </div>

        {/* Espace supplémentaire pour maintenir l'espacement */}
        <div className="p-2"></div>

        <div className="p-4 border-t border-border">
          <h3 className="text-sm font-medium mb-4">{t("categories")}</h3>
          <div className="space-y-3">
            {state.categories.map((category) => (
              <CategorySidebarItem key={category.id} id={category.id} icon={category.icon} label={t(category.id)} />
            ))}
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-border text-xs text-muted-foreground flex justify-between">
          <span>v1.0.0</span>
          <span>{t("framer.review")}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header />

        <main className="p-6">
          <h1 className="text-3xl font-bold mb-8">{t("framer.requirements.tracker")}</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t("progression.globale")}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={state.globalProgress} className="h-2 mb-4" />
              <p className="text-right text-blue-500 font-bold">{state.globalProgress}%</p>
              <p className="mt-4">{t("completez.exigences")}</p>

              <ProgressTracker />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {state.categories.slice(0, 6).map((category) => (
              <RequirementSection
                key={category.id}
                id={category.id}
                title={t(category.id)}
                defaultExpanded={category.id === "originality"}
              />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {state.categories.slice(6).map((category) => (
              <RequirementSection key={category.id} id={category.id} title={t(category.id)} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <RequirementsProvider>
      <Dashboard />
    </RequirementsProvider>
  )
}
