"use client"

import { useMemo, useState } from "react"

import PremiumCard from "../../shared/PremiumCard"
import SectionHeader from "../../shared/SectionHeader"

import {
  usePlanningStore,
} from "@/store/planningStore"

export default function PlanningTasks() {

  const [expandedTask, setExpandedTask] =
    useState<number | null>(null)

  const tasks =
    usePlanningStore(
      (state) => state.tasks
    )

  const completeTask =
    usePlanningStore(
      (state) => state.completeTask
    )

  const analytics = useMemo(() => {

    const completedTasks =
      tasks.filter(
        (task) => task.completed
      ).length

    const pendingTasks =
      tasks.length - completedTasks

    const completionRate =
      Math.floor(
        (
          completedTasks /
          tasks.length
        ) * 100
      )

    const executionStatus =
      completionRate >= 80
        ? "Execution Stable"

        : completionRate >= 50
        ? "Monitoring"

        : "Attention Needed"

    return {
      completedTasks,
      pendingTasks,
      completionRate,
      executionStatus,
    }

  }, [tasks])

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Operational Tasks"
        subtitle="Execution and coordination management"
        action="Manage"
      />

      {/* ANALYTICS */}
      <PremiumCard
        glow
        className="
          relative
          overflow-hidden
          p-5
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            top-[-100px]
            right-[-60px]

            w-[220px]
            h-[220px]

            rounded-full

            bg-[#D9B06B]/20

            blur-3xl
          "
        />

        <div className="relative z-10">

          <div className="flex items-start justify-between">

            <div>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  text-[#B18B47]
                "
              >
                Operational Execution
              </p>

              <h2
                className="
                  mt-2
                  text-[40px]
                  leading-none
                  font-semibold
                  tracking-[-0.06em]
                  text-[#171717]
                "
              >
                {analytics.completionRate}%
              </h2>

              <p
                className="
                  mt-2
                  text-[13px]
                  text-[#7B6A57]
                "
              >
                {analytics.executionStatus}
              </p>

            </div>

            <div
              className="
                flex
                flex-col
                items-end
                gap-2
              "
            >

              <div
                className="
                  px-3
                  py-2

                  rounded-full

                  bg-[#F8F1E6]

                  border
                  border-[#EFE4D7]

                  text-[11px]
                  font-semibold

                  text-[#B88949]
                "
              >
                {analytics.pendingTasks} Pending
              </div>

              <div
                className="
                  text-[12px]
                  text-[#887C70]
                "
              >
                {analytics.completedTasks} Completed
              </div>

            </div>

          </div>

          {/* MAIN BAR */}
          <div
            className="
              mt-6

              h-[10px]

              rounded-full

              overflow-hidden

              bg-[#EFE4D7]
            "
          >

            <div
              style={{
                width: `${analytics.completionRate}%`,
              }}
              className="
                h-full

                rounded-full

                transition-all
                duration-700

                bg-gradient-to-r
                from-[#B88949]
                via-[#D6B06C]
                to-[#E7CB94]
              "
            />

          </div>

        </div>

      </PremiumCard>

      {/* TASKS */}
      <div className="space-y-4 mt-5">

        {tasks.map((task) => {

          const expanded =
            expandedTask === task.id

          return (

            <PremiumCard
              key={task.id}
              className={`
                relative
                overflow-hidden

                transition-all
                duration-300

                ${
                  task.completed
                    ? "opacity-80"
                    : ""
                }
              `}
            >

              {/* TOP STRIP */}
              <div
                className={`
                  h-[4px]
                  w-full

                  ${
                    task.completed

                      ? "bg-[#67B97A]"

                      : task.priority === "high"

                      ? "bg-[#D16B5C]"

                      : task.priority === "medium"

                      ? "bg-[#C89B5C]"

                      : "bg-[#7C91A6]"
                  }
                `}
              />

              <div className="p-4">

                {/* HEADER */}
                <div className="flex gap-4">

                  {/* ICON */}
                  <div
                    className={`
                      relative

                      w-[60px]
                      h-[60px]

                      rounded-[20px]

                      flex
                      items-center
                      justify-center

                      text-[24px]

                      shrink-0

                      ${
                        task.completed

                          ? "bg-[#EAF6ED]"

                          : "bg-[#F7EFE2]"
                      }
                    `}
                  >

                    <div
                      className="
                        absolute
                        inset-0

                        rounded-[20px]

                        border
                        border-white/40
                      "
                    />

                    {task.completed
                      ? "✅"
                      : task.icon}

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <h3
                          className={`
                            text-[17px]
                            font-semibold
                            tracking-[-0.03em]

                            ${
                              task.completed
                                ? "line-through text-[#7E8B81]"
                                : "text-[#171717]"
                            }
                          `}
                        >
                          {task.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[13px]
                            text-[#887C70]
                          "
                        >
                          Due • {task.due}
                        </p>

                      </div>

                      {/* PRIORITY */}
                      <div
                        className={`
                          px-3
                          py-1.5

                          rounded-full

                          text-[11px]
                          font-semibold

                          capitalize

                          ${
                            task.priority === "high"

                              ? "bg-[#FFF1EE] text-[#D16B5C]"

                              : task.priority === "medium"

                              ? "bg-[#FFF6E8] text-[#B88949]"

                              : "bg-[#EEF3F7] text-[#6A7D92]"
                          }
                        `}
                      >
                        {task.priority}
                      </div>

                    </div>

                    {/* STATUS ROW */}
                    <div
                      className="
                        mt-4

                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div>

                        <p
                          className="
                            text-[11px]
                            uppercase
                            tracking-[0.08em]
                            text-[#9C8C78]
                          "
                        >
                          Execution
                        </p>

                        <p
                          className="
                            mt-1
                            text-[13px]
                            font-medium
                            text-[#171717]
                          "
                        >

                          {task.completed
                            ? "Successfully Completed"
                            : task.progress >= 70
                            ? "Near Completion"
                            : task.progress >= 40
                            ? "In Progress"
                            : "Pending Execution"}

                        </p>

                      </div>

                      <div
                        className="
                          text-right
                        "
                      >

                        <p
                          className="
                            text-[11px]
                            uppercase
                            tracking-[0.08em]
                            text-[#9C8C78]
                          "
                        >
                          Progress
                        </p>

                        <p
                          className="
                            mt-1
                            text-[16px]
                            font-semibold
                            text-[#B88949]
                          "
                        >
                          {task.progress}%
                        </p>

                      </div>

                    </div>

                    {/* PROGRESS BAR */}
                    <div
                      className="
                        mt-4

                        h-[8px]

                        rounded-full

                        overflow-hidden

                        bg-[#EFE4D7]
                      "
                    >

                      <div
                        style={{
                          width: `${task.progress}%`,
                        }}
                        className={`
                          h-full

                          rounded-full

                          transition-all
                          duration-700

                          ${
                            task.completed

                              ? `
                                bg-gradient-to-r
                                from-[#67B97A]
                                to-[#8ED9A0]
                              `

                              : `
                                bg-gradient-to-r
                                from-[#B88949]
                                to-[#D6B06C]
                              `
                          }
                        `}
                      />

                    </div>

                    {/* EXPAND */}
                    <button
                      onClick={() =>
                        setExpandedTask(
                          expanded
                            ? null
                            : task.id
                        )
                      }
                      className="
                        mt-4

                        text-[13px]
                        font-semibold

                        text-[#B88949]
                      "
                    >

                      {expanded
                        ? "Hide Details"
                        : "View Details"}

                    </button>

                  </div>

                </div>

                {/* EXPANDED SECTION */}
                <div
                  className={`
                    grid

                    transition-all
                    duration-300

                    ${
                      expanded
                        ? "grid-rows-[1fr] opacity-100 mt-5"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div
                      className="
                        rounded-[24px]

                        bg-[#FAF5EE]

                        border
                        border-[#EFE4D7]

                        p-4
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <div>

                          <p
                            className="
                              text-[11px]
                              uppercase
                              tracking-[0.08em]
                              text-[#A28F79]
                            "
                          >
                            Operational Notes
                          </p>

                          <h4
                            className="
                              mt-1
                              text-[15px]
                              font-semibold
                              text-[#171717]
                            "
                          >
                            Coordination Overview
                          </h4>

                        </div>

                        <div
                          className="
                            px-3
                            py-1.5

                            rounded-full

                            bg-white

                            text-[11px]
                            font-semibold

                            text-[#B88949]
                          "
                        >
                          Active
                        </div>

                      </div>

                      <p
                        className="
                          mt-4
                          text-[13px]
                          leading-[1.7]
                          text-[#746452]
                        "
                      >
                        This operational workflow is connected with
                        wedding execution tracking, vendor coordination,
                        and hospitality scheduling systems.
                      </p>

                    </div>

                  </div>

                </div>

                {/* ACTION BUTTON */}
                <button
                  onClick={() =>
                    completeTask(task.id)
                  }

                  disabled={task.completed}

                  className={`
                    mt-5

                    w-full
                    h-[50px]

                    rounded-full

                    text-[14px]
                    font-semibold

                    transition-all
                    duration-300

                    ${
                      task.completed

                        ? `
                          bg-[#EEF7EE]
                          text-[#5E9B6B]
                        `

                        : `
                          bg-gradient-to-r
                          from-[#B88949]
                          to-[#D6B06C]

                          text-white

                          active:scale-[0.98]
                        `
                    }
                  `}
                >

                  {task.completed
                    ? "Task Completed"
                    : "Mark As Completed"}

                </button>

              </div>

            </PremiumCard>

          )

        })}

      </div>

    </section>

  )

}