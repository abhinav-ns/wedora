"use client";

import Image from "next/image";

import Link from "next/link";

import { useEffect, useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { Bell, Search } from "lucide-react";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* =========================
   SEARCH SUGGESTIONS
========================= */

const SEARCH_SUGGESTIONS = [

  "Invitations...",

  "Catering...",

  "Photography...",

  "Decor...",

  "Stage designs...",

  "Guest hospitality...",

];

export default function HomeHero() {

  /* =========================
     TIME-BASED GREETING
  ========================= */

  const currentHour = new Date().getHours();

  let greeting = "Good Evening";

  if (currentHour >= 5 && currentHour < 12) {

    greeting = "Good Morning";

  } else if (
    currentHour >= 12 &&
    currentHour < 17
  ) {

    greeting = "Good Afternoon";

  }

  /* =========================
     SEARCH ANIMATION
  ========================= */

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex(
        (prev) =>
          (prev + 1) %
          SEARCH_SUGGESTIONS.length
      );

    }, 2600);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="relative overflow-hidden px-[18px] pt-6 pb-8">

      {/* HERO GLOW */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#F4E7D7]/90 via-[#F8F6F2]/70 to-transparent pointer-events-none" />

      {/* FLOWERS */}

      <Image
        src="/images/hero-flower.png"
        alt="Wedora Flower"
        width={420}
        height={420}
        priority
        className="
          absolute

          right-[2px]
          top-[-160px]

          w-[309px]
          h-auto

          opacity-[0.93]

          pointer-events-none
          mix-blend-normal
        "
      />

      <div className="relative z-10">

        {/* =========================
            TOP BAR
        ========================= */}

        <div
          className="
            flex
            items-start
            justify-between

            mb-4

            pt-[2px]
          "
        >

          {/* LEFT */}

          <div
            className="
              flex
              flex-col

              -mt-[2px]
            "
          >

            <span
              className="
                text-[16px]

                text-[#B7AA9C]

                font-medium

                tracking-[-0.025em]

                leading-none
              "
            >

              {greeting},

            </span>

            <h2
              className="
                text-[21px]

                leading-[0.95]

                font-[650]

                tracking-[-0.045em]

                text-[#111111]

                mt-[4px]
              "
            >

              Cruz

            </h2>

          </div>

          {/* NOTIFICATIONS */}

          <Link href="/main/notifications">

            <button
              className="
                relative

                w-[42px]
                h-[42px]

                rounded-full

                bg-white/78

                backdrop-blur-xl

                border
                border-[#EFE4D8]

                flex
                items-center
                justify-center

                shadow-[0_4px_14px_rgba(0,0,0,0.03)]

                transition-all
                duration-200

                active:scale-[0.96]
              "
            >

              {/* BELL ICON */}

              <Bell
                size={21}
                strokeWidth={2.2}
                className="text-[#8B6B47]"
              />

              {/* NOTIFICATION BADGE */}

              <div
                className="
                  absolute

                  -top-[3px]
                  -right-[3px]

                  min-w-[18px]
                  h-[18px]

                  px-[4px]

                  rounded-full

                  bg-[#C8872D]

                  border-[2px]
                  border-[#FAF7F2]

                  flex
                  items-center
                  justify-center

                  text-[9px]
                  font-semibold
                  text-white

                  shadow-[0_4px_10px_rgba(200,135,45,0.45)]

                  z-30
                "
              >

                2

              </div>

            </button>

          </Link>

        </div>

        {/* =========================
            HERO TITLE
        ========================= */}

        <div className="max-w-[62%] mt-7">

          <h1
            className={`
              ${cormorant.className}
              font-semibold
              text-[#111111]
              leading-[0.84]
              tracking-[-0.06em]
              text-[clamp(2rem,7vw,2.9rem)]
            `}
          >

            Discover
            <br />

            Kerala’s{" "}

            <span className="text-[#C8A96B]">

              Elegant

            </span>

            <br />

            Weddings

          </h1>

          <p
            className="
              mt-3
              text-[14px]
              text-[#9C8E81]
              leading-[1.4]
            "
          >

            Curated wedding experiences across Kerala

          </p>

        </div>

        {/* =========================
            SEARCH BAR
        ========================= */}

        <Link
          href="/main/home/search"
          className="block"
        >

          <motion.div
            layoutId="wedora-search-bar"

            initial={false}

            transition={{
              layout: {
                type: "spring",
                stiffness: 82,
                damping: 20,
                mass: 0.95,
              },
            }}

            whileTap={{
              scale: 0.985,
            }}

            className="
              mt-5

              bg-white/88
              backdrop-blur-xl

              rounded-[18px]

              px-5
              py-[10px]

              shadow-[0_8px_22px_rgba(0,0,0,0.04)]

              border
              border-[#F1EAE2]

              flex
              items-center
              justify-between

              will-change-transform
            "
          >

            {/* SEARCH TEXT */}

            <div className="flex items-center gap-1 text-[16px] overflow-hidden">

              <span className="text-[#A89A8D] whitespace-nowrap">

                Search

              </span>

              <AnimatePresence mode="wait">

                <motion.span
                  key={SEARCH_SUGGESTIONS[index]}

                  initial={{
                    opacity: 0,
                    y: 7,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: -7,
                  }}

                  transition={{
                    duration: 0.32,
                  }}

                  className="
                    text-[#B0A295]
                    whitespace-nowrap
                  "
                >

                  {SEARCH_SUGGESTIONS[index]}

                </motion.span>

              </AnimatePresence>

            </div>

            {/* SEARCH ICON */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
            >

              <Search
                size={24}
                strokeWidth={2.2}
                className="text-[#111111]"
              />

            </motion.div>

          </motion.div>

        </Link>

      </div>

      {/* =========================
          BOTTOM FADE
      ========================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-[90px]

          bg-gradient-to-b
          from-transparent
          to-[#FAF7F2]

          pointer-events-none
        "
      />

    </section>

  );

}