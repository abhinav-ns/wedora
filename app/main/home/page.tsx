"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import HomeHero from "@/components/home/sections/HomeHero";

import HomeCategoryRail from "@/components/home/sections/HomeCategoryRail";

import HomeDynamicBody from "@/components/home/HomeDynamicBody";

import { CATEGORIES } from "@/constants/homeData";

export default function HomePage() {

  const [activeCategory, setActiveCategory] =
    useState("discover");

  const [direction, setDirection] =
    useState(1);

  const handleCategoryChange = (
    nextCategory: string
  ) => {

    const currentIndex =
      CATEGORIES.findIndex(
        (item) =>
          item.id === activeCategory
      );

    const nextIndex =
      CATEGORIES.findIndex(
        (item) =>
          item.id === nextCategory
      );

    setDirection(
      nextIndex > currentIndex ? 1 : -1
    );

    setActiveCategory(nextCategory);

  };

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

        <HomeCategoryRail
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
        />

        <HomeDynamicBody
          activeCategory={activeCategory}
          direction={direction}
        />

      </div>

    </motion.main>

  );

}