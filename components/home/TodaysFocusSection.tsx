"use client";

import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { TODAY_FOCUS } from "@/constants/homeData";

export default function TodaysFocusSection() {

  return (

    <section className="px-[18px] mt-7">

      <div
        className="
          relative
          overflow-hidden

          rounded-[28px]

          h-[210px]

          border
          border-[#EFE4D8]
        "
      >

        {/* IMAGE */}

        <Image
          src={TODAY_FOCUS.image}
          alt="Today's Focus"
          fill
          className="object-cover"
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "
        />

        {/* CONTENT */}

        <div
          className="
            absolute
            inset-0

            flex
            flex-col
            justify-end

            px-5
            pb-5
          "
        >

          <p
            className="
              text-[10px]
              tracking-[0.18em]
              uppercase

              text-white/70
            "
          >

            {TODAY_FOCUS.tag}

          </p>

          <h2
            className="
              mt-[6px]

              text-[23px]
              leading-[1.05]

              tracking-[-0.05em]

              font-semibold

              text-white
            "
          >

            {TODAY_FOCUS.title}

          </h2>

          <p
            className="
              mt-[7px]

              text-[12px]
              leading-[1.5]

              text-white/78

              max-w-[88%]
            "
          >

            {TODAY_FOCUS.subtitle}

          </p>

          <button
            className="
              mt-4

              w-fit

              flex
              items-center
              gap-2

              px-4
              py-[10px]

              rounded-full

              bg-white/14
              backdrop-blur-md

              border
              border-white/10
            "
          >

            <span
              className="
                text-[12px]
                font-medium

                text-white
              "
            >

              Explore Moments

            </span>

            <ArrowRight
              size={14}
              className="text-white"
            />

          </button>

        </div>

      </div>

    </section>

  );

}