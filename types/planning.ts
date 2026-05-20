export type PlanningStatus =
  | "completed"
  | "in-progress"
  | "pending"
  | "locked"

export interface PlanningStage {

  id: number

  title: string

  description: string

  status: PlanningStatus

  completed: number

  total: number

  color: string

  icon: string
}

export interface PlanningTask {

  id: number

  title: string

  due: string

  priority:
    | "Low"
    | "Medium"
    | "High"

  progress: number

  icon: string
}

export interface TimelineEvent {

  id: number

  title: string

  date: string

  time: string

  location: string
}

export interface BudgetData {

  total: number

  spent: number

  remaining: number
}