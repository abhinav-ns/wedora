import { create } from "zustand"

import { PlanningTask } from "@/types/task"

import { planningTasks } from "@/constants/planningTasks"

interface PlanningStore {
  tasks: PlanningTask[]

  overallProgress: number

  completeTask: (
    taskId: number
  ) => void
}

export const usePlanningStore =
  create<PlanningStore>((set) => ({

    tasks: planningTasks,

    overallProgress: 16,

    completeTask: (taskId) =>

      set((state) => {

        const updatedTasks =
          state.tasks.map((task) =>

            task.id === taskId

              ? {
                  ...task,
                  completed: true,
                  progress: 100,
                }

              : task
          )

        const totalProgress =
          updatedTasks.reduce(
            (acc, task) =>
              acc + task.progress,
            0
          )

        const overallProgress =
          Math.floor(
            totalProgress /
              updatedTasks.length
          )

        return {

          tasks: updatedTasks,

          overallProgress,

        }

      }),

  }))