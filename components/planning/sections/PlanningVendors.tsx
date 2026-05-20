"use client"

import { useState } from "react"

import PremiumCard from "../../shared/PremiumCard"
import SectionHeader from "../../shared/SectionHeader"

import {
  usePlanningStore,
} from "@/store/planningStore"

import {
  planningVendors,
} from "@/constants/planningVendors"

export default function PlanningVendors() {

  const overallProgress =
    usePlanningStore(
      (state) => state.overallProgress
    )

  const [
    activeVendorId,
    setActiveVendorId,
  ] = useState<number | null>(null)

  const totalVendors =
    planningVendors.length

  const confirmedVendors =
    planningVendors.filter(
      (vendor) =>
        vendor.status === "Confirmed"
    ).length

  const activeVendors =
    planningVendors.filter(
      (vendor) =>
        vendor.status !== "Pending"
    ).length

  const criticalVendors =
    planningVendors.filter(
      (vendor) =>
        vendor.progress < 50
    ).length

  const vendorHealth =
    Math.floor(
      planningVendors.reduce(
        (acc, vendor) =>
          acc + vendor.progress,
        0
      ) / planningVendors.length
    )

  const coordinationStatus =
    vendorHealth >= 80
      ? "Operationally Stable"
      : vendorHealth >= 60
      ? "Monitoring"
      : "Attention Needed"

  const coordinationColor =
    vendorHealth >= 80
      ? "text-[#4C9C68]"
      : vendorHealth >= 60
      ? "text-[#B88949]"
      : "text-[#D16B5C]"

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Vendor Coordination"
        subtitle="Operational partner intelligence"
        action="Vendors"
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

        {/* LIGHT */}
        <div
          className="
            absolute
            top-[-100px]
            right-[-60px]

            w-[240px]
            h-[240px]

            rounded-full

            bg-[#D9B06B]/20

            blur-3xl
          "
        />

        <div className="relative z-10">

          {/* TOP */}
          <div className="flex items-start justify-between gap-4">

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
                Vendor Operations Intelligence
              </p>

              <h2
                className="
                  mt-1

                  text-[42px]
                  leading-none

                  tracking-[-0.07em]

                  font-semibold

                  text-[#171717]
                "
              >
                {vendorHealth}%
              </h2>

              <p
                className="
                  mt-2

                  text-[13px]

                  text-[#7B6A57]
                "
              >
                Real-time coordination ecosystem stability
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end">

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
                Coordination Live
              </div>

              <p
                className={`
                  mt-3

                  text-[12px]
                  font-semibold

                  ${coordinationColor}
                `}
              >
                {coordinationStatus}
              </p>

            </div>

          </div>

          {/* MAIN BAR */}
          <div className="mt-6">

            <div className="flex items-center justify-between">

              <p
                className="
                  text-[12px]
                  text-[#7C6F66]
                "
              >
                Ecosystem Stability
              </p>

              <p
                className="
                  text-[12px]
                  font-semibold
                  text-[#B88949]
                "
              >
                {vendorHealth}%
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
                  width: `${vendorHealth}%`,
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
          <div className="grid grid-cols-4 gap-3 mt-6">

            {[
              {
                title: "Total",
                value: totalVendors,
                icon: "🎪",
              },

              {
                title: "Confirmed",
                value: confirmedVendors,
                icon: "✅",
              },

              {
                title: "Active",
                value: activeVendors,
                icon: "⚡",
              },

              {
                title: "Critical",
                value: criticalVendors,
                icon: "⚠️",
              },

            ].map((item) => (

              <div
                key={item.title}

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
                    w-[44px]
                    h-[44px]

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

                    text-[26px]
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
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </PremiumCard>

      {/* VENDOR WORKFLOW */}
      <div className="space-y-4 mt-4">

        {planningVendors.map((vendor) => {

          const expanded =
            activeVendorId === vendor.id

          const priorityLevel =
            vendor.progress >= 80
              ? "Stable"
              : vendor.progress >= 50
              ? "Monitoring"
              : "Critical"

          const priorityStyle =
            vendor.progress >= 80

              ? "bg-[#EEF7EE] text-[#4F8A53]"

              : vendor.progress >= 50

              ? "bg-[#FFF6E8] text-[#B88949]"

              : "bg-[#FFF1EE] text-[#D85B45]"

          return (

            <PremiumCard
              key={vendor.id}
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
                  top-[-50px]
                  right-[-30px]

                  w-[140px]
                  h-[140px]

                  rounded-full

                  bg-[#D9B06B]/10

                  blur-3xl
                "
              />

              <div className="relative z-10">

                {/* MAIN */}
                <div className="flex gap-4">

                  {/* IMAGE */}
                  <div
                    className="
                      relative

                      w-[88px]
                      h-[124px]

                      rounded-[24px]

                      overflow-hidden

                      shrink-0
                    "
                  >

                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 min-w-0">

                    {/* HEADER */}
                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <p
                          className="
                            text-[11px]
                            uppercase
                            tracking-[0.08em]
                            text-[#B18B47]
                          "
                        >
                          {vendor.category}
                        </p>

                        <h3
                          className="
                            mt-1

                            text-[18px]
                            leading-[1.3]

                            font-semibold

                            text-[#171717]
                          "
                        >
                          {vendor.name}
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

                          ${priorityStyle}
                        `}
                      >
                        {priorityLevel}
                      </div>

                    </div>

                    {/* PROGRESS */}
                    <div className="mt-5">

                      <div className="flex items-center justify-between">

                        <p
                          className="
                            text-[11px]
                            text-[#8A7A68]
                          "
                        >
                          Execution Readiness
                        </p>

                        <p
                          className="
                            text-[11px]
                            font-semibold
                            text-[#B88949]
                          "
                        >
                          {vendor.progress}%
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
                            width: `${vendor.progress}%`,
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

                    {/* DETAILS */}
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
                          Payment
                        </p>

                        <p
                          className="
                            mt-1

                            text-[13px]
                            font-medium

                            text-[#171717]
                          "
                        >
                          {vendor.payment}
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
                          Arrival
                        </p>

                        <p
                          className="
                            mt-1

                            text-[13px]
                            font-medium

                            text-[#171717]
                          "
                        >
                          {vendor.arrival}
                        </p>

                      </div>

                    </div>

                    {/* ACTIONS */}
                    <div className="mt-5 flex items-center gap-3">

                      <button
                        onClick={() =>
                          setActiveVendorId(
                            expanded
                              ? null
                              : vendor.id
                          )
                        }

                        className="
                          flex-1

                          h-[44px]

                          rounded-full

                          bg-gradient-to-r
                          from-[#B88949]
                          to-[#D8B06B]

                          text-white

                          text-[12px]
                          font-semibold

                          active:scale-[0.98]

                          transition-all
                          duration-300
                        "
                      >
                        {expanded
                          ? "Close Details"
                          : "Open Operations"}
                      </button>

                      <button
                        className="
                          h-[44px]

                          px-4

                          rounded-full

                          border
                          border-[#EFE4D7]

                          bg-white

                          text-[12px]
                          font-semibold

                          text-[#B88949]
                        "
                      >
                        Contact
                      </button>

                    </div>

                  </div>

                </div>

                {/* EXPANDED SHEET */}
                {expanded && (

                  <div
                    className="
                      mt-5

                      rounded-[24px]

                      border
                      border-[#F1E8DC]

                      bg-[#FBF7F1]

                      p-4
                    "
                  >

                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-3">

                      <div>

                        <p
                          className="
                            text-[11px]
                            uppercase
                            tracking-[0.08em]
                            text-[#B18B47]
                          "
                        >
                          Vendor Command Center
                        </p>

                        <h4
                          className="
                            mt-1

                            text-[18px]
                            font-semibold

                            text-[#171717]
                          "
                        >
                          Operational Workflow
                        </h4>

                      </div>

                      <div
                        className="
                          px-3
                          py-1.5

                          rounded-full

                          bg-white

                          border
                          border-[#EFE4D7]

                          text-[10px]
                          font-semibold

                          text-[#B88949]
                        "
                      >
                        Live Sync
                      </div>

                    </div>

                    {/* WORKFLOW */}
                    <div className="space-y-4 mt-5">

                      {[
                        {
                          title: "Contract Verification",
                          status: "Completed",
                        },

                        {
                          title: "Payment Synchronization",
                          status: "In Progress",
                        },

                        {
                          title: "Arrival Coordination",
                          status: "Monitoring",
                        },

                        {
                          title: "Execution Confirmation",
                          status: "Pending",
                        },

                      ].map((step) => (

                        <div
                          key={step.title}

                          className="
                            flex
                            items-center
                            justify-between

                            rounded-[18px]

                            border
                            border-[#EFE4D7]

                            bg-white

                            px-4
                            py-3
                          "
                        >

                          <div className="flex items-center gap-3">

                            <div
                              className="
                                w-[38px]
                                h-[38px]

                                rounded-full

                                bg-[#F7EFE2]

                                flex
                                items-center
                                justify-center

                                text-[15px]
                              "
                            >
                              ⚡
                            </div>

                            <div>

                              <h5
                                className="
                                  text-[13px]
                                  font-semibold
                                  text-[#171717]
                                "
                              >
                                {step.title}
                              </h5>

                            </div>

                          </div>

                          <div
                            className="
                              text-[11px]
                              font-semibold
                              text-[#B88949]
                            "
                          >
                            {step.status}
                          </div>

                        </div>

                      ))}

                    </div>

                    {/* INSIGHT */}
                    <div
                      className="
                        mt-5

                        rounded-[20px]

                        bg-white

                        border
                        border-[#EFE4D7]

                        p-4
                      "
                    >

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.08em]
                          text-[#B18B47]
                        "
                      >
                        Coordination Insight
                      </p>

                      <p
                        className="
                          mt-2

                          text-[13px]
                          leading-[1.6]

                          text-[#171717]
                        "
                      >
                        Vendor execution systems are actively
                        monitoring timing synchronization,
                        logistics readiness and operational
                        dependencies across the wedding flow.
                      </p>

                    </div>

                  </div>

                )}

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

          p-5
        "
      >

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
              Vendor Operations Layer
            </p>

            <h3
              className="
                mt-1

                text-[26px]
                leading-none

                font-semibold

                tracking-[-0.05em]

                text-[#171717]
              "
            >
              Live Coordination Ecosystem
            </h3>

            <p
              className="
                mt-2

                text-[13px]
                leading-[1.7]

                text-[#7B6A57]
              "
            >
              Real-time vendor systems are coordinating
              arrivals, payment flows, execution timing,
              staffing dependencies and operational
              synchronization across the wedding ecosystem.
            </p>

          </div>

          {/* RIGHT */}
          <div
            className="
              w-[84px]
              h-[84px]

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
                Synced
              </p>

            </div>

          </div>

        </div>

      </PremiumCard>

    </section>

  )

}