import { PlanningTask } from "@/types/task"

export const planningTasks: PlanningTask[] = [

  {
    id: 1,

    title: "Finalize Guest List",

    due: "Today",

    priority: "high",

    progress: 70,

    completed: false,

    icon: "👥",
  },

  {
    id: 2,

    title: "Confirm Catering Menu",

    due: "Tomorrow",

    priority: "medium",

    progress: 45,

    completed: false,

    icon: "🍽️",
  },

  {
    id: 3,

    title: "Stage Decoration Review",

    due: "2 Days Left",

    priority: "high",

    progress: 20,

    completed: false,

    icon: "✨",
  },

  {
    id: 4,

    title: "Photography Shot Planning",

    due: "This Week",

    priority: "low",

    progress: 85,

    completed: false,

    icon: "📸",
  },

]