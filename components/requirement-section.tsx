"use client"

import { useState } from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useRequirements } from "@/context/requirements-context"
import { RequirementItem } from "@/components/requirement-item"

interface RequirementSectionProps {
  id: string
  title: string
  defaultExpanded?: boolean
}

export function RequirementSection({ id, title, defaultExpanded = false }: RequirementSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const { state, getCategoryProgress } = useRequirements()

  const category = state.categories.find((cat) => cat.id === id)
  const { completed, total, percentage } = getCategoryProgress(id)

  if (!category) return null

  return (
    <Card>
      <CardHeader className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
        <div className="flex items-center gap-2">
          <Progress value={percentage} className="h-2 flex-1" />
          <span className="text-sm">
            {completed}/{total} · {percentage}%
          </span>
        </div>
      </CardHeader>
      {expanded && (
        <CardContent>
          {category.requirements.map((req) => (
            <RequirementItem key={req.id} id={req.id} categoryId={id} text={req.text} completed={req.completed} />
          ))}
        </CardContent>
      )}
    </Card>
  )
}
