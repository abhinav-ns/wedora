"use client";

import { motion } from "framer-motion";

import HomeHero from "@/components/home/HomeHero";
import CategorySection from "@/components/home/CategorySection";
import PopularSection from "@/components/home/PopularSection";
import WeddingPlanSection from "@/components/home/WeddingPlanSection";

import TodaysFocusSection from "@/components/home/TodaysFocusSection";
import InspiredMomentsSection from "@/components/home/InspiredMomentsSection";
import QuickAccessSection from "@/components/home/QuickAccessSection";
import HospitalitySection from "@/components/home/HospitalitySection";

export default function HomePage() {

  return (

    <motion.main
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        min-h-screen
        bg-[#FAF7F2]
        overflow-x-hidden
        pb-[140px]
      "
    >

      <div
        className="
          max-w-[430px]
          mx-auto
          relative
        "
      >

        <HomeHero />

        <CategorySection />

        <TodaysFocusSection />

        <PopularSection />

        <WeddingPlanSection />

        <InspiredMomentsSection />

        <QuickAccessSection />

        <HospitalitySection />

      </div>

    </motion.main>

  );

}