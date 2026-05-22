"use client";

import Image from "next/image";

import { INSPIRED_MOMENTS } from "@/constants/homeData";

export default function InspiredMomentsSection() {

  return (

    <section className="mt-7">

      {/* HEADER */}

      <div className="px-[18px] flex items-center justify-between mb-4">

        <div>

          <h2
            className="
              text-[22px]
              font-semibold

              tracking-[-0.05em]

              text-[#111111]
            "
          >

            Inspired Moments

          </h2>

          <p
            className="
              mt-[2px]

              text-[12px]

              text-[#85776B]
            "
          >

            Discover beautiful wedding atmospheres

          </p>

        </div>

      </div>

      {/* CARDS */}

      <div
        className="
          flex
          gap-[12px]

          overflow-x-auto
          no-scrollbar

          px-[18px]
          pr-[30px]
        "
      >

        {INSPIRED_MOMENTS.map((item) => (

          <div
            key={item.id}
            className="
              relative

              min-w-[215px]
              h-[255px]

              overflow-hidden

              rounded-[24px]

              border
              border-[#EFE4D8]

              flex-shrink-0
            "
          >

            {/* IMAGE */}

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* OVERLAY */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/72
                via-black/10
                to-transparent
              "
            />

            {/* CONTENT */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0

                px-4
                pb-4
              "
            >

              <span
                className="
                  inline-flex

                  px-3
                  py-[5px]

                  rounded-full

                  text-[9px]
                  tracking-[0.12em]
                  uppercase

                  text-white

                  bg-white/10
                  backdrop-blur-md
                "
              >

                {item.tag}

              </span>

              <h3
                className="
                  mt-3

                  text-[18px]
                  leading-[1.08]

                  tracking-[-0.05em]

                  font-medium

                  text-white
                "
              >

                {item.title}

              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}