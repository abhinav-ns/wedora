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
        fixed inset-0
        overflow-hidden
        bg-[#FAF7F2]
      "
    >
      {/* SCROLLABLE APP CONTENT */}
      <main
        className="
          h-full
          overflow-y-auto
          overflow-x-hidden
          pb-[110px]
        "
      >
        <motion.div
          key={pathname}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.22,
            ease: "easeOut",
          }}
          className="min-h-full"
        >
          {children}
        </motion.div>
      </main>

      {/* FIXED APP NAVBAR */}
      <BottomNavbar />
    </div>
  );
}