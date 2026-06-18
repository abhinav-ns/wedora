"use client";

import { useState } from "react";

import PlanningHero from "./PlanningHero";
import PlanningSwitcher from "./PlanningSwitcher";
import PlanningContent from "./PlanningContent";

import { PlanningTab } from "./types";

export default function PlanningPage() {
  const [activeTab, setActiveTab] =
    useState<PlanningTab>("overview");

  return (
    <main
      className="
        min-h-screen
        bg-[#F7F1EA]
      "
    >
      {/* PAGE WRAPPER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[390px]
          px-4
          pt-4
          pb-[130px]
        "
      >
        {/* HERO */}
        <PlanningHero />

        {/* SWITCHER */}
        <div className="mt-5">
          <PlanningSwitcher
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* CONTENT */}
        <div className="mt-4">
          <PlanningContent activeTab={activeTab} />
        </div>
      </div>

      {/* SOFT BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          fixed inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[-120px]
            top-[180px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#FFF8EF]
            opacity-70
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            bottom-[120px]
            right-[-100px]
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#F3E6D2]
            opacity-60
            blur-[90px]
          "
        />
      </div>
    </main>
  );
}