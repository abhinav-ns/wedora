"use client";

import PlanningHero from "@/components/planning/widgets/PlanningHero";

import PlanningProgress from "@/components/planning/sections/PlanningProgress";

import PlanningTasks from "@/components/planning/sections/PlanningTasks";

import PlanningInsights from "@/components/planning/widgets/PlanningInsights";

import PlanningBudget from "@/components/planning/sections/PlanningBudget";

import PlanningGuests from "@/components/planning/sections/PlanningGuests";

import PlanningTimeline from "@/components/planning/sections/PlanningTimeline";

import PlanningVendors from "@/components/planning/sections/PlanningVendors";

import PlanningHospitality from "@/components/planning/sections/PlanningHospitality";

import FinalReviewEntry from "@/components/planning/widgets/FinalReviewEntry";

export default function PlanningPage() {

  return (

    <main
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#F8F5F1]
        pb-[130px]
      "
    >

      {/* GLOBAL BACKGROUND */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          overflow-hidden
          z-0
        "
      >

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            top-[-180px]
            right-[-120px]
            w-[380px]
            h-[380px]
            rounded-full
            bg-[#E6D0AA]/25
            blur-3xl
          "
        />

        {/* CENTER LIGHT */}

        <div
          className="
            absolute
            top-[35%]
            left-[-120px]
            w-[300px]
            h-[300px]
            rounded-full
            bg-[#F4E6D4]/35
            blur-3xl
          "
        />

        {/* BOTTOM LIGHT */}

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-80px]
            w-[320px]
            h-[320px]
            rounded-full
            bg-[#E8D8C2]/25
            blur-3xl
          "
        />

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HERO */}

        <PlanningHero />

        {/* DASHBOARD */}

        <section
          className="
            mt-5
            space-y-5
          "
        >

          <PlanningProgress />

          <PlanningTasks />

          <PlanningInsights />

          <PlanningBudget />

          <PlanningGuests />

          <PlanningTimeline />

          <PlanningVendors />

          <PlanningHospitality />

          <FinalReviewEntry />

        </section>

      </div>

    </main>

  );

}