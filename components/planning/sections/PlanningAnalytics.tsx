"use client"

import PremiumCard from "../../shared/PremiumCard"

import {
  usePlanningStore,
} from "@/store/planningStore"

export default function FinalReviewEntry() {

  const tasks =
    usePlanningStore(
      (state) => state.tasks
    )

  const overallProgress =
    usePlanningStore(
      (state) => state.overallProgress
    )

  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length

  const pendingTasks =
    tasks.length - completedTasks

  const weddingHealth =
    overallProgress >= 85
      ? "Excellent"
      : overallProgress >= 60
      ? "Stable"
      : "Attention Needed"

  const healthColor =
    overallProgress >= 85
      ? "text-[#4C9C68]"
      : overallProgress >= 60
      ? "text-[#B88949]"
      : "text-[#D16B5C]"

  const modules = [
    {
      icon: "💌",
      title: "Invitations",
      status:
        overallProgress >= 80
          ? "Ready"
          : "Pending",
    },

    {
      icon: "👥",
      title: "Guests",
      status:
        pendingTasks <= 1
          ? "Optimized"
          : "Pending",
    },

    {
      icon: "🎪",
      title: "Vendors",
      status:
        overallProgress >= 70
          ? "Confirmed"
          : "In Review",
    },

    {
      icon: "🗓️",
      title: "Timeline",
      status:
        completedTasks >= 2
          ? "Aligned"
          : "Updating",
    },
  ]

  return (

    <section className="px-[18px] pb-8">

      <PremiumCard
        glow
        className="
          relative

          overflow-hidden

          p-5
        "
      >

        {/* PREMIUM BACKGROUND */}
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

        {/* SECONDARY LIGHT */}
        <div
          className="
            absolute
            bottom-[-120px]
            left-[-80px]

            w-[200px]
            h-[200px]

            rounded-full

            bg-[#F4E7D3]/70

            blur-3xl
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* TOP STATUS */}
          <div className="flex items-center justify-between gap-3">

            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                px-3
                py-1.5

                rounded-full

                bg-[#F7EFE2]

                border
                border-[#EFE4D7]

                text-[11px]
                font-semibold

                text-[#B88949]
              "
            >

              <span>✨</span>

              <span>
                Operational Intelligence
              </span>

            </div>

            {/* HEALTH */}
            <div
              className={`
                text-[12px]
                font-semibold

                ${healthColor}
              `}
            >
              {weddingHealth}
            </div>

          </div>

          {/* TITLE */}
          <h2
            className="
              mt-5

              text-[30px]
              leading-[1.02]

              tracking-[-0.07em]

              font-cormorant

              text-[#171717]
            "
          >
            Wedding Operations Center
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3

              text-[14px]
              leading-[1.65]

              text-[#7A6B5A]
            "
          >
            Your planning ecosystem is actively
            tracking operational readiness, guest
            coordination, hospitality systems and
            execution intelligence across every
            wedding workflow.
          </p>

          {/* METRICS */}
          <div className="grid grid-cols-3 gap-3 mt-6">

            {/* READINESS */}
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
                Readiness
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
                {overallProgress}%
              </h3>

            </div>

            {/* COMPLETED */}
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
                {completedTasks}
              </h3>

            </div>

            {/* PENDING */}
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
                Pending
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
                {pendingTasks}
              </h3>

            </div>

          </div>

          {/* MODULES */}
          <div className="grid grid-cols-2 gap-3 mt-6">

            {modules.map((item) => (

              <div
                key={item.title}

                className="
                  rounded-[18px]

                  border
                  border-[#F0E6D9]

                  bg-[#FFFCF8]

                  p-4
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-[42px]
                    h-[42px]

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

                {/* TITLE */}
                <h3
                  className="
                    mt-4

                    text-[14px]
                    font-semibold

                    text-[#171717]
                  "
                >
                  {item.title}
                </h3>

                {/* STATUS */}
                <p
                  className="
                    mt-1

                    text-[11px]

                    text-[#8A7A68]
                  "
                >
                  {item.status}
                </p>

              </div>

            ))}

          </div>

          {/* OPERATION BAR */}
          <div className="mt-6">

            <div className="flex items-center justify-between">

              <p
                className="
                  text-[12px]
                  font-medium

                  text-[#7A6B5A]
                "
              >
                Operational Stability
              </p>

              <p
                className="
                  text-[13px]
                  font-semibold

                  text-[#B88949]
                "
              >
                {overallProgress}%
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

          </div>

          {/* FOOTER */}
          <div className="mt-7 flex items-center justify-between gap-4">

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
                Wedding Intelligence
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
                Live Monitoring
              </h3>

            </div>

            {/* BUTTON */}
            <button
              className="
                h-[50px]

                px-5

                rounded-full

                bg-gradient-to-r
                from-[#B88949]
                to-[#D8B06B]

                text-white

                text-[14px]
                font-semibold

                shadow-[0_10px_26px_rgba(185,137,73,0.24)]

                active:scale-[0.98]

                transition-all
                duration-300
              "
            >
              Open Command Center
            </button>

          </div>

        </div>

      </PremiumCard>

    </section>

  )

}