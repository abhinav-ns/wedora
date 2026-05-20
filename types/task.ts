export type TaskPriority =
  | "high"
  | "medium"
  | "low"

export interface PlanningTask {
  id: number

  title: string

  due: string

  priority: TaskPriority

  progress: number

  icon: string

  completed: boolean
}