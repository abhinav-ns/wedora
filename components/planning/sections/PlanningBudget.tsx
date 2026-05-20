"use client"

import { useMemo, useState } from "react"

import PremiumCard from "../../shared/PremiumCard"
import SectionHeader from "../../shared/SectionHeader"

import {
  usePlanningStore,
} from "@/store/planningStore"

const budgetCategories = [

  {
    id: 1,

    title: "Catering",

    allocated: 950000,

    spent: 720000,

    progress: 76,

    status: "High Spend",

    icon: "🍽️",

    vendor: "Royal Catering Studio",

    pending: "₹1.1L Pending",

    color:
      "from-[#B88949] to-[#D8B06B]",
  },

  {
    id: 2,

    title: "Decor & Stage",

    allocated: 580000,

    spent: 310000,

    progress: 53,

    status: "Stable",

    icon: "✨",

    vendor: "Aura Wedding Decor",

    pending: "₹80K Pending",

    color:
      "from-[#D6A46A] to-[#E4C08B]",
  },

  {
    id: 3,

    title: "Hospitality",

    allocated: 340000,

    spent: 160000,

    progress: 47,

    status: "Healthy",

    icon: "🏨",

    vendor: "Elite Hospitality",

    pending: "₹45K Pending",

    color:
      "from-[#C5975E] to-[#E0BD86]",
  },

  {
    id: 4,

    title: "Photography",

    allocated: 280000,

    spent: 90000,

    progress: 32,

    status: "Optimized",

    icon: "📸",

    vendor: "Cinematic Moments",

    pending: "Advance Pending",

    color:
      "from-[#B88949] to-[#E6C791]",
  },

]

export default function PlanningBudget() {

  const [activeFinance, setActiveFinance] =
    useState<number | null>(1)

  const overallProgress =
    usePlanningStore(
      (state) => state.overallProgress
    )

  const tasks =
    usePlanningStore(
      (state) => state.tasks
    )

  const analytics =
    useMemo(() => {

      const completedTasks =
        tasks.filter(
          (task) => task.completed
        ).length

      const totalBudget = 2500000

      const spentAmount =
        1280000 +
        completedTasks * 45000

      const remainingAmount =
        totalBudget - spentAmount

      const utilization =
        Math.floor(
          (
            spentAmount /
            totalBudget
          ) * 100
        )

      const reserveBuffer =
        Math.floor(
          remainingAmount * 0.18
        )

      const pendingPayments =
        325000

      const financialHealth =
        utilization <= 70
          ? "Financially Stable"

          : utilization <= 85
          ? "Monitoring"

          : "Attention Needed"

      return {
        totalBudget,
        spentAmount,
        remainingAmount,
        utilization,
        reserveBuffer,
        pendingPayments,
        financialHealth,
      }

    }, [tasks])

  const healthColor =
    analytics.utilization <= 70
      ? "text-[#4D9B67]"

      : analytics.utilization <= 85
      ? "text-[#B88949]"

      : "text-[#D16B5C]"

  const formatCurrency = (
    amount: number
  ) => {

    if (amount >= 100000) {

      return `₹${(
        amount / 100000
      ).toFixed(1)}L`

    }

    if (amount >= 1000) {

      return `₹${(
        amount / 1000
      ).toFixed(0)}K`

    }

    return `₹${amount}`

  }

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Budget Intelligence"
        subtitle="Operational financial command center"
        action="Finance"
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

        {/* GLOW */}
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

        {/* GLOW */}
        <div
          className="
            absolute
            bottom-[-100px]
            left-[-70px]

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
                Financial Intelligence
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
                ₹25L
              </h2>

              <p
                className="
                  mt-2

                  text-[13px]

                  text-[#7B6A57]
                "
              >
                Total wedding operational allocation
              </p>

            </div>

            <div className="flex flex-col items-end gap-3">

              <div
                className="
                  px-4
                  py-2

                  rounded-full

                  bg-[#EEF7EE]

                  border
                  border-[#D9EFD9]

                  text-[11px]
                  font-semibold

                  text-[#4F8A53]
                "
              >
                Finance Active
              </div>

              <p
                className={`
                  text-[12px]
                  font-semibold

                  ${healthColor}
                `}
              >
                {analytics.financialHealth}
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
                Budget Utilization
              </p>

              <p
                className="
                  text-[12px]
                  font-semibold
                  text-[#B88949]
                "
              >
                {analytics.utilization}%
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
                  width: `${analytics.utilization}%`,
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
          <div className="grid grid-cols-2 gap-3 mt-6">

            {[
              {
                label: "Spent",
                value:
                  formatCurrency(
                    analytics.spentAmount
                  ),
              },

              {
                label: "Remaining",
                value:
                  formatCurrency(
                    analytics.remainingAmount
                  ),
              },

              {
                label: "Reserve",
                value:
                  formatCurrency(
                    analytics.reserveBuffer
                  ),
              },

              {
                label: "Pending",
                value:
                  formatCurrency(
                    analytics.pendingPayments
                  ),
              },

            ].map((item) => (

              <div
                key={item.label}

                className="
                  rounded-[22px]

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
                  {item.label}
                </p>

                <h3
                  className="
                    mt-3

                    text-[28px]
                    leading-none

                    font-semibold
                    tracking-[-0.05em]

                    text-[#171717]
                  "
                >
                  {item.value}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </PremiumCard>

      {/* CATEGORY INTELLIGENCE */}
      <div className="space-y-4 mt-5">

        {budgetCategories.map((category) => {

          const expanded =
            activeFinance === category.id

          return (

            <PremiumCard
              key={category.id}

              className="
                relative
                overflow-hidden
                p-5
              "
            >

              {/* LIGHT */}
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

                {/* TOP */}
                <div className="flex items-start justify-between gap-3">

                  <div className="flex items-start gap-4">

                    {/* ICON */}
                    <div
                      className="
                        w-[56px]
                        h-[56px]

                        rounded-full

                        bg-[#F7EFE2]

                        flex
                        items-center
                        justify-center

                        text-[24px]

                        shrink-0
                      "
                    >
                      {category.icon}
                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3
                        className="
                          text-[18px]
                          font-semibold

                          text-[#171717]
                        "
                      >
                        {category.title}
                      </h3>

                      <p
                        className="
                          mt-1

                          text-[13px]

                          text-[#8A7A68]
                        "
                      >
                        Vendor • {category.vendor}
                      </p>

                    </div>

                  </div>

                  {/* STATUS */}
                  <div
                    className="
                      px-3
                      py-1.5

                      rounded-full

                      bg-[#FBF7F1]

                      border
                      border-[#EFE4D7]

                      text-[10px]
                      font-semibold

                      text-[#B88949]
                    "
                  >
                    {category.status}
                  </div>

                </div>

                {/* BAR */}
                <div className="mt-6">

                  <div className="flex items-center justify-between">

                    <p
                      className="
                        text-[11px]
                        text-[#8A7A68]
                      "
                    >
                      Budget Consumption
                    </p>

                    <p
                      className="
                        text-[11px]
                        font-semibold

                        text-[#B88949]
                      "
                    >
                      {category.progress}%
                    </p>

                  </div>

                  <div
                    className="
                      mt-2

                      h-[8px]

                      rounded-full

                      overflow-hidden

                      bg-[#EFE4D7]
                    "
                  >

                    <div
                      style={{
                        width: `${category.progress}%`,
                      }}
                      className={`
                        h-full

                        rounded-full

                        bg-gradient-to-r

                        ${category.color}
                      `}
                    />

                  </div>

                </div>

                {/* STATS */}
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
                        text-[#8A7A68]
                      "
                    >
                      Allocated
                    </p>

                    <h4
                      className="
                        mt-2

                        text-[22px]
                        leading-none

                        font-semibold

                        text-[#171717]
                      "
                    >
                      {formatCurrency(
                        category.allocated
                      )}
                    </h4>

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
                        text-[#8A7A68]
                      "
                    >
                      Current Spend
                    </p>

                    <h4
                      className="
                        mt-2

                        text-[22px]
                        leading-none

                        font-semibold

                        text-[#171717]
                      "
                    >
                      {formatCurrency(
                        category.spent
                      )}
                    </h4>

                  </div>

                </div>

                {/* ACTIONS */}
                <div className="mt-5 flex gap-3">

                  <button
                    onClick={() =>
                      setActiveFinance(
                        expanded
                          ? null
                          : category.id
                      )
                    }
                    className="
                      flex-1

                      h-[48px]

                      rounded-full

                      border
                      border-[#EADCCB]

                      bg-[#FBF7F1]

                      text-[13px]
                      font-semibold

                      text-[#8A6F49]
                    "
                  >

                    {expanded
                      ? "Hide Details"
                      : "View Analytics"}

                  </button>

                  <button
                    className="
                      flex-1

                      h-[48px]

                      rounded-full

                      bg-gradient-to-r
                      from-[#B88949]
                      to-[#D8B06B]

                      text-white

                      text-[13px]
                      font-semibold

                      active:scale-[0.98]

                      transition-all
                      duration-300
                    "
                  >
                    Open Finance
                  </button>

                </div>

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

                        border
                        border-[#EFE4D7]

                        bg-[#FAF5EE]

                        p-4
                      "
                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <p
                            className="
                              text-[11px]

                              uppercase
                              tracking-[0.08em]

                              text-[#B18B47]
                            "
                          >
                            Vendor Payment Layer
                          </p>

                          <h4
                            className="
                              mt-1

                              text-[16px]
                              font-semibold

                              text-[#171717]
                            "
                          >
                            Financial Coordination Active
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
                        Vendor payments, milestone releases,
                        operational reserves, hospitality
                        expenses and execution allocations are
                        actively synchronized within the
                        wedding finance ecosystem.
                      </p>

                      <div
                        className="
                          mt-5

                          flex
                          items-center
                          justify-between
                        "
                      >

                        <div>

                          <p
                            className="
                              text-[11px]

                              text-[#8A7A68]
                            "
                          >
                            Pending Release
                          </p>

                          <h5
                            className="
                              mt-1

                              text-[20px]
                              font-semibold

                              text-[#171717]
                            "
                          >
                            {category.pending}
                          </h5>

                        </div>

                        <div
                          className="
                            px-4
                            py-2

                            rounded-full

                            bg-[#FFF7EC]

                            border
                            border-[#F0DEC0]

                            text-[11px]
                            font-semibold

                            text-[#B88949]
                          "
                        >
                          Monitoring
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </PremiumCard>

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
                Financial Operations Layer
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
                Live Budget Monitoring Active
              </h3>

              <p
                className="
                  mt-3

                  text-[13px]
                  leading-[1.8]

                  text-[#7B6A57]
                "
              >
                Financial systems are actively tracking
                allocations, vendor releases,
                hospitality expenses, operational reserves
                and execution spending across the wedding
                ecosystem.
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
                  Stable
                </p>

              </div>

            </div>

          </div>

        </div>

      </PremiumCard>

    </section>

  )

}