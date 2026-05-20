"use client";

import { POPULAR_CARDS } from "@/constants/homeData";

import PopularCard from "@/components/home/PopularCard";

export default function PopularSection() {

  return (

    <section className="px-[18px] mt-6">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-5">

        <h2
          className="
            text-[24px]
            font-bold
            text-[#111111]
            tracking-[-0.04em]
          "
        >

          Popular This Week

        </h2>

        <button
          className="
            text-[15px]
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

      {/* DOTS */}

      <div className="flex items-center justify-center gap-2 mt-5">

        <div className="w-[8px] h-[8px] rounded-full bg-[#C8A96B]" />

        <div className="w-[8px] h-[8px] rounded-full bg-[#DDD5CC]" />

        <div className="w-[8px] h-[8px] rounded-full bg-[#DDD5CC]" />

      </div>

    </section>

  );

}