"use client";

import { HOSPITALITY_SHORTCUTS } from "@/constants/homeData";

export default function HospitalitySection() {

  return (

    <section className="px-[18px] mt-7">

      <div className="mb-4">

        <h2
          className="
            text-[22px]
            font-semibold

            tracking-[-0.05em]

            text-[#111111]
          "
        >

          Guest Experience

        </h2>

      </div>

      <div
        className="
          flex
          gap-3

          overflow-x-auto
          no-scrollbar
        "
      >

        {HOSPITALITY_SHORTCUTS.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="
                min-w-[140px]

                rounded-[24px]

                border
                border-[#EFE4D8]

                bg-white/75

                px-4
                py-4

                backdrop-blur-md

                flex-shrink-0
              "
            >

              <div
                className="
                  w-[42px]
                  h-[42px]

                  rounded-full

                  bg-[#F4ECE2]

                  flex
                  items-center
                  justify-center
                "
              >

                <Icon
                  size={18}
                  className="text-[#B98B49]"
                />

              </div>

              <h3
                className="
                  mt-4

                  text-[15px]
                  font-medium

                  text-[#1A1A1A]
                "
              >

                {item.title}

              </h3>

            </div>

          );

        })}

      </div>

    </section>

  );

}