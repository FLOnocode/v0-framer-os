"use client"

import { useRequirements } from "@/context/requirements-context"
import type { JSX } from "react"

interface CategorySidebarItemProps {
  id: string
  icon: string
  label: string
}

export function CategorySidebarItem({ id, icon, label }: CategorySidebarItemProps) {
  const { getCategoryProgress } = useRequirements()
  const { completed, total, percentage } = getCategoryProgress(id)
  const progress = `${completed}/${total}`

  // Déterminer la couleur du cercle en fonction de la progression
  const getCircleColor = () => {
    if (percentage === 100) {
      return "border-emerald-500 bg-emerald-500/20" // Vert néon pour 100%
    } else if (percentage > 0) {
      return "border-yellow-500 bg-yellow-500/20" // Jaune néon pour en cours
    }
    return "border-muted-foreground" // Couleur par défaut
  }

  // Déterminer la couleur du point intérieur
  const getDotColor = () => {
    if (percentage === 100) {
      return "bg-emerald-500" // Vert néon pour 100%
    } else if (percentage > 0) {
      return "bg-yellow-500" // Jaune néon pour en cours
    }
    return "bg-muted-foreground" // Couleur par défaut
  }

  const circleColor = getCircleColor()
  const dotColor = getDotColor()

  const iconMap: Record<string, JSX.Element> = {
    circle: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    palette: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    layout: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    zap: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    sparkles: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    link: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    type: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    folder: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    database: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    package: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    accessibility: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    shield: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    code: (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
    "shopping-bag": (
      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${circleColor}`}>
        <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
      </div>
    ),
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {iconMap[icon]}
        <span className="text-sm">{label}</span>
      </div>
      <span
        className={`text-xs ${completed > 0 ? (percentage === 100 ? "text-emerald-500" : "text-yellow-500") : "text-muted-foreground"}`}
      >
        {progress}
      </span>
    </div>
  )
}
