"use client";

import { Sparkles } from "lucide-react";

import { POPULAR_CARDS } from "@/constants/homeData";

import PopularCard from "@/components/home/PopularCard";

export default function PopularSection() {

  return (

    <section className="px-[18px] mt-7">

      {/* HEADER */}

      <div className="flex items-end justify-between mb-5">

        <div>

          <div
            className="
              flex
              items-center
              gap-[6px]

              mb-[6px]
            "
          >

            <Sparkles
              size={14}
              className="
                text-[#C8A96B]
              "
            />

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.18em]

                text-[#B49A79]
              "
            >

              Personalized For You

            </p>

          </div>

          <h2
            className="
              text-[24px]
              leading-[1]

              font-semibold

              tracking-[-0.05em]

              text-[#111111]
            "
          >

            Continue Exploring

          </h2>

          <p
            className="
              mt-[6px]

              text-[13px]
              leading-[1.5]

              text-[#8B7F75]

              max-w-[260px]
            "
          >

            Inspirations and wedding ideas curated around your recent activity.

          </p>

        </div>

        <button
          className="
            text-[14px]
            font-medium

            text-[#C8A96B]
          "
        >

          View all

        </button>

      </div>

      {/* SLIDER */}

      <div
        className="
          flex
          gap-[12px]

          overflow-x-auto
          no-scrollbar

          snap-x
          snap-mandatory

          scroll-smooth

          pr-0
        "
      >

        {POPULAR_CARDS.map((card) => (

          <PopularCard
            key={card.id}
            title1={card.title1}
            title2={card.title2}
            image={card.image}
          />

        ))}

      </div>

      {/* ACTIVITY PILLS */}

      <div
        className="
          flex
          items-center
          gap-[8px]

          overflow-x-auto
          no-scrollbar

          mt-5
        "
      >

        {[
          "Recently viewed",
          "Trending in Kerala",
          "Saved inspirations",
          "Luxury weddings",
        ].map((item) => (

          <div
            key={item}
            className="
              flex-shrink-0

              px-[12px]
              py-[8px]

              rounded-full

              bg-[#F5ECE2]

              border
              border-[#EFE3D6]

              text-[11px]
              font-medium

              text-[#8D7760]
            "
          >

            {item}

          </div>

        ))}

      </div>

      {/* DOTS */}

      <div className="flex items-center justify-center gap-2 mt-5">

        <div className="w-[18px] h-[8px] rounded-full bg-[#C8A96B]" />

        <div className="w-[8px] h-[8px] rounded-full bg-[#DDD5CC]" />

        <div className="w-[8px] h-[8px] rounded-full bg-[#DDD5CC]" />

      </div>

    </section>

  );

}