"use client";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

import BottomNavbar from "@/components/navigation/BottomNavbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  return (

    <div
      className="
        min-h-screen
        bg-[#FAF7F2]
        overflow-x-hidden
      "
    >

      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.22,
          ease: "easeOut",
        }}
        className="
          min-h-screen
        "
      >

        {children}

      </motion.div>

      <BottomNavbar />

    </div>

  );

}