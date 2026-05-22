"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import CollectionBody from "@/components/collections/CollectionBody";

interface Props {

  activeCategory: string;

  direction: number;

}

export default function HomeDynamicBody({
  activeCategory,
  direction,
}: Props) {

  return (

    <AnimatePresence mode="wait">

      <motion.section
        key={activeCategory}

        initial={{
          opacity: 0,
          x: direction > 0 ? 40 : -40,
        }}

        animate={{
          opacity: 1,
          x: 0,
        }}

        exit={{
          opacity: 0,
          x: direction > 0 ? -40 : 40,
        }}

        transition={{
          duration: 0.34,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="mt-5"
      >

        <CollectionBody
          activeCategory={activeCategory}
        />

      </motion.section>

    </AnimatePresence>

  );

}