"use client"

import { usePlanningStore } from "@/store/planningStore"

import PremiumCard from "../../shared/ui/PremiumCard"
import SectionHeader from "../../shared/ui/SectionHeader"

import {
  planningStages,
} from "@/constants/planningData"

export default function PlanningProgress() {

  const overallProgress =
    usePlanningStore(
      (state) => state.overallProgress
    )

  const completedStages =
    planningStages.filter(
      (item) => item.status === "completed"
    ).length

  const totalStages =
    planningStages.length

  const readinessStatus =
    overallProgress >= 80
      ? "Operationally Stable"
      : overallProgress >= 60
      ? "Monitoring"
      : "Attention Needed"

  const readinessColor =
    overallProgress >= 80
      ? "text-[#4D9B67]"
      : overallProgress >= 60
      ? "text-[#B88949]"
      : "text-[#D16B5C]"

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Planning Progress"
        subtitle="Wedding operational tracking"
        action="View All"
      />

      <PremiumCard
        glow
        className="
          relative
          overflow-hidden
          p-4
        "
      >

        {/* BACKGROUND LIGHT */}
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

          {/* TOP */}
          <div className="flex items-center justify-between">

            {/* LEFT */}
            <div>

              <p
                className="
                  text-[12px]
                  uppercase
                  tracking-[0.08em]
                  text-[#B18B47]
                "
              >
                Overall Progress
              </p>

              <h2
                className="
                  mt-1
                  text-[36px]
                  leading-none
                  tracking-[-0.06em]
                  font-semibold
                  text-[#171717]
                "
              >
                {overallProgress}%
              </h2>

              <p
                className={`
                  mt-2
                  text-[13px]
                  font-medium
                  ${readinessColor}
                `}
              >
                {readinessStatus}
              </p>

            </div>

            {/* MINI CIRCLE */}
            <div
              className="
                relative
                w-[78px]
                h-[78px]
                rounded-full
                flex
                items-center
                justify-center
              "
            >

              {/* BASE */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border-[8px]
                  border-[#EFE4D7]
                "
              />

              {/* ACTIVE */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border-[8px]
                  border-[#C89B5C]
                  border-r-transparent
                  border-b-transparent
                  rotate-[40deg]
                "
              />

              {/* CENTER */}
              <div
                className="
                  w-[48px]
                  h-[48px]
                  rounded-full
                  bg-[#FFFDF9]
                  flex
                  items-center
                  justify-center
                "
              >

                <span
                  className="
                    text-[14px]
                    font-semibold
                    text-[#B88949]
                  "
                >
                  {overallProgress}%
                </span>

              </div>

            </div>

          </div>

          {/* MAIN BAR */}
          <div
            className="
              mt-6
              h-[8px]
              rounded-full
              overflow-hidden
              bg-[#F1E8DC]
            "
          >

            <div
              style={{
                width: `${overallProgress}%`,
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#B88949]
                via-[#D6B06C]
                to-[#E7CB94]
                transition-all
                duration-500
              "
            />

          </div>

          {/* METRICS */}
          <div className="grid grid-cols-2 gap-3 mt-5">

            <div
              className="
                rounded-[18px]
                border
                border-[#F0E6D9]
                bg-[#FFFCF8]
                p-4
              "
            >

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.08em]
                  text-[#B18B47]
                "
              >
                Completed
              </p>

              <h3
                className="
                  mt-2
                  text-[24px]
                  leading-none
                  font-semibold
                  tracking-[-0.05em]
                  text-[#171717]
                "
              >
                {completedStages}
              </h3>

            </div>

            <div
              className="
                rounded-[18px]
                border
                border-[#F0E6D9]
                bg-[#FFFCF8]
                p-4
              "
            >

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.08em]
                  text-[#B18B47]
                "
              >
                Total Stages
              </p>

              <h3
                className="
                  mt-2
                  text-[24px]
                  leading-none
                  font-semibold
                  tracking-[-0.05em]
                  text-[#171717]
                "
              >
                {totalStages}
              </h3>

            </div>

          </div>

          {/* STAGES */}
          <div className="space-y-3 mt-5">

            {planningStages.map((item) => {

              const percentage =
                Math.floor(
                  (item.completed / item.total) * 100
                )

              return (

                <div
                  key={item.id}
                  className="
                    rounded-[20px]
                    border
                    border-[#F1E8DC]
                    bg-[#FFFCF8]
                    p-3.5
                  "
                >

                  {/* TOP */}
                  <div className="flex items-start gap-3">

                    {/* ICON */}
                    <div
                      className="
                        w-[44px]
                        h-[44px]
                        rounded-full
                        bg-[#F7EFE2]
                        flex
                        items-center
                        justify-center
                        text-[18px]
                        shrink-0
                      "
                    >
                      {item.icon}
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 min-w-0">

                      <div className="flex items-center justify-between gap-3">

                        <div>

                          <h3
                            className="
                              text-[15px]
                              font-semibold
                              text-[#171717]
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-[12px]
                              text-[#8A7A68]
                            "
                          >
                            {item.description}
                          </p>

                        </div>

                        {/* COUNT */}
                        <div
                          className="
                            text-[13px]
                            font-semibold
                            text-[#B88949]
                            shrink-0
                          "
                        >
                          {item.completed}/{item.total}
                        </div>

                      </div>

                      {/* BAR */}
                      <div
                        className="
                          mt-3
                          h-[6px]
                          rounded-full
                          overflow-hidden
                          bg-[#EFE4D7]
                        "
                      >

                        <div
                          style={{
                            width: `${percentage}%`,
                            backgroundColor: item.color,
                          }}
                          className="
                            h-full
                            rounded-full
                          "
                        />

                      </div>

                    </div>

                  </div>

                </div>

              )

            })}

          </div>

        </div>

      </PremiumCard>

    </section>

  )

}