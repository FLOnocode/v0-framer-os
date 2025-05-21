"use client"

import { useRequirements } from "@/context/requirements-context"

interface RequirementItemProps {
  id: string
  categoryId: string
  text: string
  completed: boolean
}

export function RequirementItem({ id, categoryId, text, completed }: RequirementItemProps) {
  const { dispatch } = useRequirements()

  const handleToggle = () => {
    dispatch({
      type: "TOGGLE_REQUIREMENT",
      categoryId,
      requirementId: id,
    })
  }

  return (
    <div className="flex items-start gap-3 mb-4">
      <div
        className={`h-5 w-5 rounded-full border flex-shrink-0 flex items-center justify-center cursor-pointer ${
          completed ? "border-blue-500 bg-blue-500/10" : "border-muted-foreground"
        }`}
        onClick={handleToggle}
      >
        {completed && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  )
}
