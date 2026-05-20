"use client"

import { useState } from "react"

import PlanningHero from "@/components/planning/widgets/PlanningHero"

import PlanningNavigation from "@/components/planning/widgets/PlanningNavigation"

import PlanningProgress from "@/components/planning/sections/PlanningProgress"

import PlanningInsights from "@/components/planning/widgets/PlanningInsights"

import PlanningTasks from "@/components/planning/sections/PlanningTasks"

import PlanningRecommendations from "@/components/planning/sections/PlanningRecommendations"

import PlanningTimeline from "@/components/planning/sections/PlanningTimeline"

import PlanningBudget from "@/components/planning/sections/PlanningBudget"

import PlanningGuests from "@/components/planning/sections/PlanningGuests"

import PlanningVendors from "@/components/planning/sections/PlanningVendors"

import PlanningHospitality from "@/components/planning/sections/PlanningHospitality"

import PlanningAnalytics from "@/components/planning/sections/PlanningAnalytics"

import FinalReviewEntry from "@/components/planning/widgets/FinalReviewEntry"

import BottomNavbar from "@/components/navigation/BottomNavbar"

export default function PlanningDashboard() {

  const [
    activeSection,
    setActiveSection,
  ] = useState("overview")

  return (

    <main
      className="
        relative

        min-h-screen

        overflow-x-hidden

        bg-[#F7F1EA]

        pb-[120px]
      "
    >

      {/* TOP GLOW */}
      <div
        className="
          pointer-events-none

          fixed
          top-[-180px]
          right-[-120px]

          w-[340px]
          h-[340px]

          rounded-full

          bg-[#EAD7BE]/30

          blur-3xl

          z-0
        "
      />

      {/* BOTTOM GLOW */}
      <div
        className="
          pointer-events-none

          fixed
          bottom-[80px]
          left-[-100px]

          w-[240px]
          h-[240px]

          rounded-full

          bg-[#F3E7D6]/25

          blur-3xl

          z-0
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <PlanningHero />

        {/* NAVIGATION */}
        <PlanningNavigation
          activeSection={activeSection}
          onChange={setActiveSection}
        />

        {/* CONTENT LAYER */}
        <div className="mt-4 space-y-4">

          {/* OVERVIEW */}
          {activeSection === "overview" && (

            <>
              <PlanningInsights />

              <PlanningProgress />

              <PlanningRecommendations />

              <FinalReviewEntry />
            </>

          )}

          {/* TASKS */}
          {activeSection === "tasks" && (

            <PlanningTasks />

          )}

          {/* TIMELINE */}
          {activeSection === "timeline" && (

            <PlanningTimeline />

          )}

          {/* GUESTS */}
          {activeSection === "guests" && (

            <PlanningGuests />

          )}

          {/* VENDORS */}
          {activeSection === "vendors" && (

            <PlanningVendors />

          )}

          {/* HOSPITALITY */}
          {activeSection === "hospitality" && (

            <PlanningHospitality />

          )}

          {/* BUDGET */}
          {activeSection === "budget" && (

            <PlanningBudget />

          )}

          {/* ANALYTICS */}
          {activeSection === "analytics" && (

            <PlanningAnalytics />

          )}

        </div>

      </div>

      {/* NAVBAR */}
      <BottomNavbar />

    </main>

  )

}