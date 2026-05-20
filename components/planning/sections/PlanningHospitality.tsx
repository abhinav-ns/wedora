"use client"

import PremiumCard from "../../shared/PremiumCard"
import SectionHeader from "../../shared/SectionHeader"

import {
  usePlanningStore,
} from "@/store/planningStore"

const hospitalityServices = [

  {
    id: 1,

    title: "Airport Pickup Coordination",

    active: 18,

    icon: "🚘",

    status: "Active",

    completion: 82,

    workload: "Moderate",

    coordinator: "Transport Desk",

    insight:
      "6 premium guest arrivals scheduled tonight",

    priority: "VIP",

    arrivals: "12 Flights",

    team: 8,
  },

  {
    id: 2,

    title: "Luxury Room Management",

    active: 46,

    icon: "🏨",

    status: "Ready",

    completion: 94,

    workload: "Stable",

    coordinator: "Hospitality Team",

    insight:
      "Suite allocations finalized for VIP families",

    priority: "Critical",

    arrivals: "46 Rooms",

    team: 14,
  },

  {
    id: 3,

    title: "Guest Assistance Desk",

    active: 6,

    icon: "🤝",

    status: "Monitoring",

    completion: 58,

    workload: "Low",

    coordinator: "Experience Team",

    insight:
      "Pending multilingual support assignment",

    priority: "Medium",

    arrivals: "24/7 Support",

    team: 5,
  },

]

export default function PlanningHospitality() {

  const overallProgress =
    usePlanningStore(
      (state) => state.overallProgress
    )

  const tasks =
    usePlanningStore(
      (state) => state.tasks
    )

  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length

  const hospitalityHealth =
    Math.floor(
      hospitalityServices.reduce(
        (acc, service) =>
          acc + service.completion,
        0
      ) / hospitalityServices.length
    )

  const vipGuests = 34

  const activeRequests =
    hospitalityServices.reduce(
      (acc, service) =>
        acc + service.active,
      0
    )

  const operationalTeams =
    hospitalityServices.reduce(
      (acc, service) =>
        acc + service.team,
      0
    )

  const hospitalityStatus =
    hospitalityHealth >= 85
      ? "Operationally Stable"
      : hospitalityHealth >= 65
      ? "Monitoring"
      : "Attention Needed"

  const hospitalityColor =
    hospitalityHealth >= 85
      ? "text-[#4D9B67]"
      : hospitalityHealth >= 65
      ? "text-[#B88949]"
      : "text-[#D16B5C]"

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Hospitality Operations"
        subtitle="Guest experience intelligence center"
        action="Manage"
      />

      {/* OVERVIEW */}
      <PremiumCard
        glow
        className="
          relative
          overflow-hidden
          p-4
        "
      >

        {/* LIGHTS */}
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

        <div
          className="
            absolute
            bottom-[-120px]
            left-[-80px]

            w-[200px]
            h-[200px]

            rounded-full

            bg-[#F4E7D3]/60

            blur-3xl
          "
        />

        <div className="relative z-10">

          {/* HEADER */}
          <div className="flex items-start justify-between gap-4">

            <div>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.08em]
                  text-[#B18B47]
                "
              >
                Hospitality Intelligence
              </p>

              <h2
                className="
                  mt-1
                  text-[38px]
                  leading-none
                  tracking-[-0.06em]
                  font-semibold
                  text-[#171717]
                "
              >
                {hospitalityHealth}%
              </h2>

              <p
                className="
                  mt-2
                  text-[13px]
                  text-[#7B6A57]
                "
              >
                Guest experience operational readiness
              </p>

            </div>

            <div
              className="
                flex
                flex-col
                items-end
              "
            >

              <div
                className="
                  px-3
                  py-1.5

                  rounded-full

                  bg-[#EEF7EE]

                  border
                  border-[#D9EFD9]

                  text-[11px]
                  font-semibold

                  text-[#4F8A53]
                "
              >
                Concierge Active
              </div>

              <p
                className={`
                  mt-3
                  text-[12px]
                  font-semibold
                  ${hospitalityColor}
                `}
              >
                {hospitalityStatus}
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
                Experience Readiness
              </p>

              <p
                className="
                  text-[12px]
                  font-semibold
                  text-[#B88949]
                "
              >
                {hospitalityHealth}%
              </p>

            </div>

            <div
              className="
                mt-2
                h-[8px]
                rounded-full
                overflow-hidden
                bg-[#F1E8DC]
              "
            >

              <div
                style={{
                  width: `${hospitalityHealth}%`,
                }}
                className="
                  h-full
                  rounded-full

                  bg-gradient-to-r
                  from-[#B88949]
                  via-[#D6B06C]
                  to-[#E7CB94]
                "
              />

            </div>

          </div>

          {/* METRICS */}
          <div className="grid grid-cols-4 gap-3 mt-5">

            {[
              {
                label: "Requests",
                value: activeRequests,
                icon: "📩",
              },

              {
                label: "VIP Guests",
                value: vipGuests,
                icon: "⭐",
              },

              {
                label: "Teams",
                value: operationalTeams,
                icon: "👥",
              },

              {
                label: "Completed",
                value: completedTasks,
                icon: "✅",
              },

            ].map((item) => (

              <div
                key={item.label}
                className="
                  rounded-[18px]

                  border
                  border-[#F0E6D9]

                  bg-[#FFFCF8]

                  p-4
                "
              >

                <div
                  className="
                    w-[40px]
                    h-[40px]

                    rounded-full

                    bg-[#F7EFE2]

                    flex
                    items-center
                    justify-center

                    text-[18px]
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    mt-4
                    text-[24px]
                    leading-none
                    font-semibold
                    tracking-[-0.05em]
                    text-[#171717]
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-[11px]
                    text-[#8A7A68]
                  "
                >
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </PremiumCard>

      {/* SERVICES */}
      <div className="space-y-4 mt-4">

        {hospitalityServices.map((service) => {

          const statusStyle =
            service.status === "Ready"

              ? "bg-[#EEF7EE] text-[#4F8A53]"

              : service.status === "Active"

              ? "bg-[#FFF6E8] text-[#B88949]"

              : "bg-[#FFF1EE] text-[#D85B45]"

          return (

            <PremiumCard
              key={service.id}
              className="
                relative
                overflow-hidden
                p-4
              "
            >

              {/* LIGHT */}
              <div
                className="
                  absolute
                  right-[-20px]
                  top-[-30px]

                  w-[120px]
                  h-[120px]

                  rounded-full

                  bg-[#D9B06B]/10

                  blur-3xl
                "
              />

              <div className="relative z-10">

                {/* TOP */}
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
                    {service.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 min-w-0">

                    {/* HEADER */}
                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <h3
                          className="
                            text-[17px]
                            font-semibold
                            text-[#171717]
                          "
                        >
                          {service.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[12px]
                            text-[#8A7A68]
                          "
                        >
                          {service.active} live hospitality operations
                        </p>

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
                        {service.status}
                      </div>

                    </div>

                    {/* BAR */}
                    <div className="mt-5">

                      <div className="flex items-center justify-between">

                        <p
                          className="
                            text-[11px]
                            text-[#8A7A68]
                          "
                        >
                          Operational Completion
                        </p>

                        <p
                          className="
                            text-[11px]
                            font-semibold
                            text-[#B88949]
                          "
                        >
                          {service.completion}%
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
                            width: `${service.completion}%`,
                          }}
                          className="
                            h-full
                            rounded-full

                            bg-gradient-to-r
                            from-[#B88949]
                            to-[#D8B06B]
                          "
                        />

                      </div>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-2 gap-4 mt-5">

                      <div>

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.08em]
                            text-[#B18B47]
                          "
                        >
                          Workload
                        </p>

                        <p
                          className="
                            mt-1
                            text-[13px]
                            font-medium
                            text-[#171717]
                          "
                        >
                          {service.workload}
                        </p>

                      </div>

                      <div>

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.08em]
                            text-[#B18B47]
                          "
                        >
                          Coordination
                        </p>

                        <p
                          className="
                            mt-1
                            text-[13px]
                            font-medium
                            text-[#171717]
                          "
                        >
                          {service.coordinator}
                        </p>

                      </div>

                      <div>

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.08em]
                            text-[#B18B47]
                          "
                        >
                          Priority
                        </p>

                        <p
                          className="
                            mt-1
                            text-[13px]
                            font-medium
                            text-[#171717]
                          "
                        >
                          {service.priority}
                        </p>

                      </div>

                      <div>

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.08em]
                            text-[#B18B47]
                          "
                        >
                          Logistics
                        </p>

                        <p
                          className="
                            mt-1
                            text-[13px]
                            font-medium
                            text-[#171717]
                          "
                        >
                          {service.arrivals}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* INSIGHT */}
                <div
                  className="
                    mt-5

                    rounded-[20px]

                    border
                    border-[#F1E8DC]

                    bg-[#FBF7F1]

                    p-4
                  "
                >

                  <div className="flex items-center justify-between gap-3">

                    <div>

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.08em]
                          text-[#B18B47]
                        "
                      >
                        Operational Insight
                      </p>

                      <p
                        className="
                          mt-1
                          text-[13px]
                          leading-[1.6]
                          text-[#171717]
                        "
                      >
                        {service.insight}
                      </p>

                    </div>

                    <button
                      className="
                        px-4
                        py-2

                        rounded-full

                        bg-white

                        border
                        border-[#EFE4D7]

                        text-[11px]
                        font-medium

                        text-[#B88949]

                        shrink-0
                      "
                    >
                      Open
                    </button>

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
          mt-4
          p-4
        "
      >

        <div className="flex items-center justify-between gap-4">

          <div>

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.08em]
                text-[#B18B47]
              "
            >
              Guest Experience Ecosystem
            </p>

            <h3
              className="
                mt-1
                text-[24px]
                leading-none
                font-semibold
                tracking-[-0.05em]
                text-[#171717]
              "
            >
              Concierge Operations Active
            </h3>

            <p
              className="
                mt-2
                text-[13px]
                text-[#7B6A57]
              "
            >
              Hospitality systems are actively managing
              room intelligence, arrival logistics,
              guest support and premium VIP experiences
              across the wedding ecosystem.
            </p>

          </div>

          <div
            className="
              w-[82px]
              h-[82px]

              rounded-full

              border-[8px]
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
                  text-[22px]
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

      </PremiumCard>

    </section>

  )

}