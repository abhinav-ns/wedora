"use client"

import { useMemo, useState } from "react"

import PremiumCard from "../../shared/PremiumCard"
import SectionHeader from "../../shared/SectionHeader"

import {
  usePlanningStore,
} from "@/store/planningStore"

export default function PlanningGuests() {

  const [activeSegment, setActiveSegment] =
    useState("Accepted")

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

      const totalGuests = 450

      const acceptedGuests =
        228 + completedTasks * 6

      const pendingGuests =
        Math.max(
          totalGuests -
            acceptedGuests -
            20,
          0
        )

      const declinedGuests = 20

      const vipGuests = 34

      const checkedInGuests = 126

      const hospitalityRequests = 18

      const guestReadiness =
        Math.floor(
          (
            acceptedGuests /
            totalGuests
          ) * 100
        )

      const operationalStatus =
        guestReadiness >= 80
          ? "Operationally Stable"

          : guestReadiness >= 60
          ? "Monitoring"

          : "Attention Needed"

      return {
        totalGuests,
        acceptedGuests,
        pendingGuests,
        declinedGuests,
        vipGuests,
        checkedInGuests,
        hospitalityRequests,
        guestReadiness,
        operationalStatus,
      }

    }, [tasks])

  const operationalColor =
    analytics.guestReadiness >= 80
      ? "text-[#4D9B67]"

      : analytics.guestReadiness >= 60
      ? "text-[#B88949]"

      : "text-[#D16B5C]"

  const guestSegments = [

    {
      icon: "✅",
      value: analytics.acceptedGuests,
      label: "Accepted",
      bg: "bg-[#EEF7EE]",
      ring: "border-[#DDEEDF]",
    },

    {
      icon: "⏳",
      value: analytics.pendingGuests,
      label: "Pending",
      bg: "bg-[#FFF6E8]",
      ring: "border-[#F4E3BE]",
    },

    {
      icon: "⭐",
      value: analytics.vipGuests,
      label: "VIP Guests",
      bg: "bg-[#F6F1FF]",
      ring: "border-[#E6DBFF]",
    },

    {
      icon: "📍",
      value: analytics.checkedInGuests,
      label: "Checked In",
      bg: "bg-[#EEF5FF]",
      ring: "border-[#D7E4F7]",
    },

  ]

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Guest Operations"
        subtitle="RSVP intelligence and hospitality coordination"
        action="Guests"
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

        <div className="relative z-10">

          {/* HEADER */}
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
                Guest Intelligence
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
                {analytics.totalGuests}
              </h2>

              <p
                className="
                  mt-2

                  text-[13px]

                  text-[#7B6A57]
                "
              >
                Total wedding guest capacity
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
                RSVP Active
              </div>

              <p
                className={`
                  text-[12px]
                  font-semibold

                  ${operationalColor}
                `}
              >
                {analytics.operationalStatus}
              </p>

            </div>

          </div>

          {/* READINESS */}
          <div className="mt-6">

            <div className="flex items-center justify-between">

              <p
                className="
                  text-[12px]
                  text-[#7C6F66]
                "
              >
                Guest Readiness
              </p>

              <p
                className="
                  text-[12px]
                  font-semibold
                  text-[#B88949]
                "
              >
                {analytics.guestReadiness}%
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
                  width: `${analytics.guestReadiness}%`,
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

          {/* SEGMENTS */}
          <div className="grid grid-cols-2 gap-3 mt-6">

            {guestSegments.map((item) => (

              <button
                key={item.label}

                onClick={() =>
                  setActiveSegment(
                    item.label
                  )
                }

                className={`
                  rounded-[22px]

                  border

                  transition-all
                  duration-300

                  text-left

                  ${
                    activeSegment === item.label

                      ? `
                        border-[#C89B5C]
                        bg-[#FFFDF9]
                        scale-[1.01]
                      `

                      : `${item.ring} bg-[#FFFCF8]`
                  }

                  p-4
                `}
              >

                <div
                  className={`
                    w-[46px]
                    h-[46px]

                    rounded-full

                    flex
                    items-center
                    justify-center

                    text-[20px]

                    ${item.bg}
                  `}
                >
                  {item.icon}
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
                  {item.value}
                </h3>

                <p
                  className="
                    mt-2

                    text-[12px]

                    text-[#8A7A68]
                  "
                >
                  {item.label}
                </p>

              </button>

            ))}

          </div>

          {/* ACTIVE SEGMENT PANEL */}
          <div
            className="
              mt-5

              rounded-[24px]

              border
              border-[#EFE4D7]

              bg-[#FFFCF8]

              p-5
            "
          >

            {/* HEADER */}
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
                  Active Guest Segment
                </p>

                <h3
                  className="
                    mt-2

                    text-[22px]
                    font-semibold

                    tracking-[-0.04em]

                    text-[#171717]
                  "
                >
                  {activeSegment}
                </h3>

              </div>

              <div
                className="
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
                Live Data
              </div>

            </div>

            {/* CONTENT */}
            <div className="mt-5 space-y-3">

              {activeSegment === "Accepted" && (

                <>
                  {[
                    "Guest confirmations stabilized",
                    "Family seating allocation synced",
                    "QR entry generation active",
                  ].map((item) => (

                    <div
                      key={item}

                      className="
                        flex
                        items-center
                        gap-3

                        rounded-[18px]

                        bg-[#FBF7F1]

                        border
                        border-[#EFE4D7]

                        px-4
                        py-3
                      "
                    >

                      <div
                        className="
                          w-[34px]
                          h-[34px]

                          rounded-full

                          bg-[#EEF7EE]

                          flex
                          items-center
                          justify-center
                        "
                      >
                        ✅
                      </div>

                      <p
                        className="
                          text-[13px]

                          text-[#171717]
                        "
                      >
                        {item}
                      </p>

                    </div>

                  ))}
                </>

              )}

              {activeSegment === "Pending" && (

                <>
                  {[
                    "42 RSVP reminders scheduled",
                    "Transport preference pending",
                    "Manual family follow-up required",
                  ].map((item) => (

                    <div
                      key={item}

                      className="
                        flex
                        items-center
                        gap-3

                        rounded-[18px]

                        bg-[#FBF7F1]

                        border
                        border-[#EFE4D7]

                        px-4
                        py-3
                      "
                    >

                      <div
                        className="
                          w-[34px]
                          h-[34px]

                          rounded-full

                          bg-[#FFF6E8]

                          flex
                          items-center
                          justify-center
                        "
                      >
                        ⏳
                      </div>

                      <p
                        className="
                          text-[13px]

                          text-[#171717]
                        "
                      >
                        {item}
                      </p>

                    </div>

                  ))}
                </>

              )}

              {activeSegment === "VIP Guests" && (

                <>
                  {[
                    "Luxury hospitality routing active",
                    "Private lounge access enabled",
                    "Dedicated concierge assigned",
                  ].map((item) => (

                    <div
                      key={item}

                      className="
                        flex
                        items-center
                        gap-3

                        rounded-[18px]

                        bg-[#FBF7F1]

                        border
                        border-[#EFE4D7]

                        px-4
                        py-3
                      "
                    >

                      <div
                        className="
                          w-[34px]
                          h-[34px]

                          rounded-full

                          bg-[#F6F1FF]

                          flex
                          items-center
                          justify-center
                        "
                      >
                        ⭐
                      </div>

                      <p
                        className="
                          text-[13px]

                          text-[#171717]
                        "
                      >
                        {item}
                      </p>

                    </div>

                  ))}
                </>

              )}

              {activeSegment === "Checked In" && (

                <>
                  {[
                    "QR check-in operational",
                    "Arrival flow stabilized",
                    "Welcome desk load optimized",
                  ].map((item) => (

                    <div
                      key={item}

                      className="
                        flex
                        items-center
                        gap-3

                        rounded-[18px]

                        bg-[#FBF7F1]

                        border
                        border-[#EFE4D7]

                        px-4
                        py-3
                      "
                    >

                      <div
                        className="
                          w-[34px]
                          h-[34px]

                          rounded-full

                          bg-[#EEF5FF]

                          flex
                          items-center
                          justify-center
                        "
                      >
                        📍
                      </div>

                      <p
                        className="
                          text-[13px]

                          text-[#171717]
                        "
                      >
                        {item}
                      </p>

                    </div>

                  ))}
                </>

              )}

            </div>

          </div>

        </div>

      </PremiumCard>

    </section>

  )

}