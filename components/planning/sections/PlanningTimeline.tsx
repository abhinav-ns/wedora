"use client"

import { useMemo, useState } from "react"

import PremiumCard from "../../shared/ui/PremiumCard"
import SectionHeader from "../../shared/ui/SectionHeader"

import {
  usePlanningStore,
} from "@/store/planningStore"

import {
  upcomingEvents,
} from "@/constants/planningTimeline"

export default function PlanningTimeline() {

  const [activeStage, setActiveStage] =
    useState<number | null>(1)

  const overallProgress =
    usePlanningStore(
      (state) => state.overallProgress
    )

  const tasks =
    usePlanningStore(
      (state) => state.tasks
    )

  const timelineAnalytics =
    useMemo(() => {

      const completedTasks =
        tasks.filter(
          (task) => task.completed
        ).length

      const executionHealth =
        Math.floor(
          (
            overallProgress +
            completedTasks * 8
          ) / 1.2
        )

      const timelineStatus =
        executionHealth >= 85
          ? "Execution Stable"

          : executionHealth >= 65
          ? "Monitoring"

          : "Attention Needed"

      const criticalEvents =
        upcomingEvents.filter(
          (event) =>
            event.title
              .toLowerCase()
              .includes("ceremony")
        ).length

      return {
        completedTasks,
        executionHealth,
        timelineStatus,
        criticalEvents,
      }

    }, [tasks, overallProgress])

  const timelineColor =
    timelineAnalytics.executionHealth >= 85
      ? "text-[#4D9B67]"

      : timelineAnalytics.executionHealth >= 65
      ? "text-[#B88949]"

      : "text-[#D16B5C]"

  const executionMetrics = [

    {
      title: "Events",
      value: upcomingEvents.length,
      icon: "🗓️",
    },

    {
      title: "Critical",
      value: timelineAnalytics.criticalEvents,
      icon: "⚠️",
    },

    {
      title: "Ready",
      value: timelineAnalytics.completedTasks,
      icon: "✅",
    },

  ]

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Wedding Timeline"
        subtitle="Execution intelligence and live coordination"
        action="Timeline"
      />

      {/* OVERVIEW */}
      <PremiumCard
        glow
        className="
          relative
          overflow-hidden
          p-5
        "
      >

        {/* GLOW 1 */}
        <div
          className="
            absolute
            top-[-120px]
            right-[-70px]

            w-[240px]
            h-[240px]

            rounded-full

            bg-[#D9B06B]/20

            blur-3xl
          "
        />

        {/* GLOW 2 */}
        <div
          className="
            absolute
            bottom-[-90px]
            left-[-60px]

            w-[200px]
            h-[200px]

            rounded-full

            bg-[#F4E7D3]/60

            blur-3xl
          "
        />

        <div className="relative z-10">

          {/* TOP */}
          <div className="flex items-start justify-between gap-4">

            <div>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  text-[#B18B47]
                "
              >
                Live Timeline Intelligence
              </p>

              <h2
                className="
                  mt-2

                  text-[42px]
                  leading-none

                  font-semibold
                  tracking-[-0.06em]

                  text-[#171717]
                "
              >
                {timelineAnalytics.executionHealth}%
              </h2>

              <p
                className="
                  mt-2

                  text-[13px]

                  text-[#7B6A57]
                "
              >
                Wedding execution readiness
              </p>

            </div>

            <div className="flex flex-col items-end gap-3">

              <div
                className="
                  px-4
                  py-2

                  rounded-full

                  border
                  border-[#EFE4D7]

                  bg-[#F8F1E6]

                  text-[11px]
                  font-semibold

                  text-[#B88949]
                "
              >
                Timeline Active
              </div>

              <p
                className={`
                  text-[12px]
                  font-semibold

                  ${timelineColor}
                `}
              >
                {timelineAnalytics.timelineStatus}
              </p>

            </div>

          </div>

          {/* BAR */}
          <div className="mt-6">

            <div className="flex items-center justify-between">

              <p
                className="
                  text-[12px]
                  text-[#7C6F66]
                "
              >
                Execution Stability
              </p>

              <p
                className="
                  text-[12px]
                  font-semibold
                  text-[#B88949]
                "
              >
                {timelineAnalytics.executionHealth}%
              </p>

            </div>

            <div
              className="
                mt-2

                h-[10px]

                rounded-full

                overflow-hidden

                bg-[#F1E8DC]
              "
            >

              <div
                style={{
                  width: `${timelineAnalytics.executionHealth}%`,
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

          {/* METRICS */}
          <div className="grid grid-cols-3 gap-3 mt-6">

            {executionMetrics.map((metric) => (

              <div
                key={metric.title}

                className="
                  rounded-[22px]

                  border
                  border-[#F0E6D9]

                  bg-[#FFFCF8]

                  p-4
                "
              >

                <div
                  className="
                    w-[46px]
                    h-[46px]

                    rounded-full

                    bg-[#F7EFE2]

                    flex
                    items-center
                    justify-center

                    text-[20px]
                  "
                >
                  {metric.icon}
                </div>

                <h3
                  className="
                    mt-4

                    text-[28px]
                    leading-none

                    font-semibold
                    tracking-[-0.05em]

                    text-[#171717]
                  "
                >
                  {metric.value}
                </h3>

                <p
                  className="
                    mt-2

                    text-[12px]

                    text-[#8A7A68]
                  "
                >
                  {metric.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </PremiumCard>

      {/* EXECUTION FLOW */}
      <div className="space-y-5 mt-5">

        {upcomingEvents.map((event, index) => {

          const progress =
            55 + index * 12

          const status =
            index === 0
              ? "Critical"

              : index === 1
              ? "Monitoring"

              : "Ready"

          const expanded =
            activeStage === event.id

          const statusStyle =
            status === "Ready"

              ? "bg-[#EEF7EE] text-[#4F8A53]"

              : status === "Monitoring"

              ? "bg-[#FFF6E8] text-[#B88949]"

              : "bg-[#FFF1EE] text-[#D85B45]"

          return (

            <div
              key={event.id}

              className="
                relative

                flex
                gap-4
              "
            >

              {/* LEFT TRACK */}
              <div
                className="
                  flex
                  flex-col
                  items-center

                  shrink-0
                "
              >

                {/* DOT */}
                <div
                  className={`
                    relative

                    w-[18px]
                    h-[18px]

                    rounded-full

                    border-[4px]
                    border-[#F7EFE2]

                    z-10

                    ${
                      expanded
                        ? "bg-[#B88949]"
                        : "bg-[#D8C6AA]"
                    }
                  `}
                />

                {/* LINE */}
                {index !== upcomingEvents.length - 1 && (

                  <div
                    className="
                      w-[2px]

                      flex-1

                      min-h-[180px]

                      bg-[#EFE3D2]
                    "
                  />

                )}

              </div>

              {/* CARD */}
              <PremiumCard
                className="
                  flex-1

                  relative
                  overflow-hidden

                  p-5
                "
              >

                {/* TOP LIGHT */}
                <div
                  className="
                    absolute
                    top-[-60px]
                    right-[-40px]

                    w-[160px]
                    h-[160px]

                    rounded-full

                    bg-[#E9D2AA]/20

                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  {/* HEADER */}
                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <p
                        className="
                          text-[11px]

                          uppercase
                          tracking-[0.1em]

                          text-[#B18B47]
                        "
                      >
                        Wedding Execution Stage
                      </p>

                      <h3
                        className="
                          mt-2

                          text-[20px]
                          leading-[1.3]

                          font-semibold
                          tracking-[-0.04em]

                          text-[#171717]
                        "
                      >
                        {event.title}
                      </h3>

                    </div>

                    <div
                      className={`
                        px-3
                        py-1.5

                        rounded-full

                        text-[10px]
                        font-semibold

                        shrink-0

                        ${statusStyle}
                      `}
                    >
                      {status}
                    </div>

                  </div>

                  {/* INFO */}
                  <div className="flex flex-wrap gap-2 mt-5">

                    {[
                      {
                        icon: "📅",
                        value: event.date,
                      },

                      {
                        icon: "🕓",
                        value: event.time,
                      },

                      {
                        icon: "📍",
                        value: event.location,
                      },

                    ].map((item) => (

                      <div
                        key={item.value}

                        className="
                          flex
                          items-center
                          gap-2

                          px-3
                          py-2

                          rounded-full

                          bg-[#FBF7F1]

                          text-[12px]

                          text-[#7A6B5A]
                        "
                      >

                        <span>{item.icon}</span>

                        <span>{item.value}</span>

                      </div>

                    ))}

                  </div>

                  {/* PROGRESS */}
                  <div className="mt-6">

                    <div className="flex items-center justify-between">

                      <p
                        className="
                          text-[11px]
                          text-[#8A7A68]
                        "
                      >
                        Operational Readiness
                      </p>

                      <p
                        className="
                          text-[11px]
                          font-semibold

                          text-[#B88949]
                        "
                      >
                        {progress}%
                      </p>

                    </div>

                    <div
                      className="
                        mt-2

                        h-[7px]

                        rounded-full

                        overflow-hidden

                        bg-[#EFE4D7]
                      "
                    >

                      <div
                        style={{
                          width: `${progress}%`,
                        }}
                        className="
                          h-full

                          rounded-full

                          transition-all
                          duration-700

                          bg-gradient-to-r
                          from-[#B88949]
                          to-[#D8B06B]
                        "
                      />

                    </div>

                  </div>

                  {/* EXPAND BUTTON */}
                  <button
                    onClick={() =>
                      setActiveStage(
                        expanded
                          ? null
                          : event.id
                      )
                    }
                    className="
                      mt-5

                      text-[13px]
                      font-semibold

                      text-[#B88949]
                    "
                  >

                    {expanded
                      ? "Hide Details"
                      : "View Execution Details"}

                  </button>

                  {/* EXPANDED */}
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
                              Coordination Layer
                            </p>

                            <h4
                              className="
                                mt-1

                                text-[15px]
                                font-semibold

                                text-[#171717]
                              "
                            >
                              Live Operational Overview
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
                            Synced
                          </div>

                        </div>

                        <p
                          className="
                            mt-4

                            text-[13px]
                            leading-[1.8]

                            text-[#746452]
                          "
                        >
                          This timeline stage is actively connected
                          with hospitality movement, guest arrival
                          coordination, vendor synchronization,
                          stage readiness, and wedding execution
                          systems across the ecosystem.
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* FOOTER */}
                  <div
                    className="
                      mt-5

                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        text-[11px]

                        text-[#8A7A68]
                      "
                    >

                      <span>⚡</span>

                      <span>
                        Live execution tracking active
                      </span>

                    </div>

                    <button
                      className="
                        px-4
                        py-2

                        rounded-full

                        bg-gradient-to-r
                        from-[#B88949]
                        to-[#D8B06B]

                        text-white

                        text-[11px]
                        font-semibold

                        active:scale-[0.98]

                        transition-all
                        duration-300
                      "
                    >
                      Open Stage
                    </button>

                  </div>

                </div>

              </PremiumCard>

            </div>

          )

        })}

      </div>

      {/* COMMAND CENTER */}
      <PremiumCard
        glow
        className="
          mt-5

          relative
          overflow-hidden

          p-5
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute
            top-[-90px]
            right-[-70px]

            w-[220px]
            h-[220px]

            rounded-full

            bg-[#E8C68E]/20

            blur-3xl
          "
        />

        <div className="relative z-10">

          <div className="flex items-center justify-between gap-4">

            {/* LEFT */}
            <div>

              <p
                className="
                  text-[11px]

                  uppercase
                  tracking-[0.08em]

                  text-[#B18B47]
                "
              >
                Wedding Execution Layer
              </p>

              <h3
                className="
                  mt-2

                  text-[28px]
                  leading-[1.1]

                  font-semibold
                  tracking-[-0.05em]

                  text-[#171717]
                "
              >
                Live Command Timeline Active
              </h3>

              <p
                className="
                  mt-3

                  text-[13px]
                  leading-[1.8]

                  text-[#7B6A57]
                "
              >
                Timeline systems are actively coordinating
                hospitality, guest movement, vendor arrival,
                stage execution and operational readiness
                across the complete wedding ecosystem.
              </p>

            </div>

            {/* RIGHT */}
            <div
              className="
                relative

                w-[92px]
                h-[92px]

                rounded-full

                border-[10px]
                border-[#EFE4D7]

                flex
                items-center
                justify-center

                shrink-0
              "
            >

              <div className="text-center">

                <p
                  className="
                    text-[24px]
                    leading-none

                    font-semibold
                    tracking-[-0.05em]

                    text-[#171717]
                  "
                >
                  {overallProgress}%
                </p>

                <p
                  className="
                    mt-1

                    text-[10px]

                    text-[#8A7A68]
                  "
                >
                  Synced
                </p>

              </div>

            </div>

          </div>

        </div>

      </PremiumCard>

    </section>

  )

}