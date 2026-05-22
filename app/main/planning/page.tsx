"use client";

import PlanningShell from "@/components/planning/layout/PlanningShell";

import WeddingOverview from "@/components/planning/hero/WeddingOverview";

import PlanningJourney from "@/components/planning/journey/PlanningJourney";

import TimelinePreview from "@/components/planning/timeline/TimelinePreview";

import PlanningSnapshot from "@/components/planning/snapshot/PlanningSnapshot";

import TodaysFocus from "@/components/planning/focus/TodaysFocus";

export default function PlanningPage() {

  return (

    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#F7F2EC]
        pb-[130px]
      "
    >

      <PlanningShell>

        <WeddingOverview />

        <PlanningJourney />

        <TimelinePreview />

        <PlanningSnapshot />

        <TodaysFocus />

      </PlanningShell>

    </main>

  );

}