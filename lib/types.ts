export interface Requirement {
  id: string
  text: string
  completed: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  requirements: Requirement[]
}

export interface ProgressStage {
  id: string
  name: string
  threshold: number // Pourcentage minimum pour atteindre cette étape
}

export type RequirementsState = {
  categories: Category[]
  globalProgress: number
  currentStage: string
}

export type RequirementsAction =
  | { type: "TOGGLE_REQUIREMENT"; categoryId: string; requirementId: string }
  | { type: "RESET_ALL" }
  | { type: "LOAD_STATE"; state: RequirementsState }
