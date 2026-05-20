"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import { Bell, Search } from "lucide-react";

import { Cormorant_Garamond } from "next/font/google";

import { SEARCH_SUGGESTIONS } from "@/constants/homeData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {

  /* =========================
     TIME-BASED GREETING
  ========================= */

  const currentHour = new Date().getHours();

  let greeting = "Good Evening";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
  }

  /* =========================
     SEARCH ANIMATION
  ========================= */

  const [index, setIndex] = useState(0);

  const [fade, setFade] = useState(true);

  useEffect(() => {

    const interval = setInterval(() => {

      setFade(false);

      setTimeout(() => {

        setIndex(
          (prev) =>
            (prev + 1) %
            SEARCH_SUGGESTIONS.length
        );

        setFade(true);

      }, 250);

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="relative overflow-hidden px-[18px] pt-6 pb-5">

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

        <div className="flex items-center justify-between mb-5">

          <div className="flex flex-col">

            <span className="text-[18px] text-[#B7AA9C] font-medium">

              {greeting},

            </span>

            <h2 className="text-[24px] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111111] mt-[2px]">

              Cruz

            </h2>

          </div>

          <button>

            <Bell
              size={24}
              strokeWidth={2.2}
              className="text-[#111111]"
            />

          </button>

        </div>

        {/* =========================
            HERO TITLE
        ========================= */}

        <div className="max-w-[62%] mt-5">

          <h1
            className={`
              ${cormorant.className}
              font-semibold
              text-[#111111]
              leading-[0.84]
              tracking-[-0.06em]
              text-[clamp(2.4rem,8.4vw,3.4rem)]
            `}
          >

            Create Your
            <br />

            Smart{" "}

            <span className="text-[#C8A96B]">

              Wedding

            </span>

            <br />

            Invitation

          </h1>

          <p className="mt-1 text-[15px] text-[#7E746C] leading-[1.5]">

            Plan every detail beautifully

          </p>

        </div>

        {/* =========================
            SEARCH BAR
        ========================= */}

        <div
          className="
            mt-4
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
          "
        >

          <div className="flex items-center gap-1 text-[16px] overflow-hidden">

            <span className="text-[#9D9187] whitespace-nowrap">

              Search

            </span>

            <span
              className={`
                text-[#C0B4A8]
                transition-all
                duration-500
                whitespace-nowrap
                ${
                  fade
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                }
              `}
            >

              {SEARCH_SUGGESTIONS[index]}

            </span>

          </div>

          <button>

            <Search
              size={24}
              strokeWidth={2.2}
              className="text-[#111111]"
            />

          </button>

        </div>

      </div>

    </section>

  );
}