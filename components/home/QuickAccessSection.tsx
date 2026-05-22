"use client";

import { ChevronRight } from "lucide-react";

import { QUICK_ACCESS } from "@/constants/homeData";

export default function QuickAccessSection() {

  return (

    <section className="px-[18px] mt-8">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-4">

        <div>

          <h2
            className="
              text-[22px]
              font-semibold
              tracking-[-0.05em]
              text-[#111111]
            "
          >

            Quick Access

          </h2>

          <p
            className="
              mt-[2px]
              text-[12px]
              text-[#9A8E84]
            "
          >

            Smart shortcuts across your wedding

          </p>

        </div>

      </div>

      {/* GRID */}

      <div
        className="
          grid
          grid-cols-2
          gap-[10px]
        "
      >

        {QUICK_ACCESS.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.id}
              className="
                group
                relative

                overflow-hidden

                rounded-[22px]

                border
                border-[#EFE7DD]

                bg-white/78

                px-[14px]
                py-[14px]

                backdrop-blur-xl

                transition-all
                duration-300

                active:scale-[0.98]
              "
            >

              {/* GLOW */}

              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top_right,rgba(214,176,107,0.10),transparent_45%)]

                  opacity-80
                "
              />

              <div className="relative z-10">

                {/* TOP */}

                <div className="flex items-start justify-between">

                  <div
                    className="
                      w-[42px]
                      h-[42px]

                      rounded-full

                      bg-[#F7EFE5]

                      flex
                      items-center
                      justify-center

                      shadow-[0_4px_10px_rgba(0,0,0,0.03)]
                    "
                  >

                    <Icon
                      size={17}
                      strokeWidth={2.2}
                      className="
                        text-[#B98B49]
                      "
                    />

                  </div>

                  <ChevronRight
                    size={16}
                    className="
                      text-[#C6B8AA]

                      transition-transform
                      duration-300

                      group-hover:translate-x-[2px]
                    "
                  />

                </div>

                {/* CONTENT */}

                <div className="mt-5 text-left">

                  <p
                    className="
                      text-[15px]
                      font-semibold
                      tracking-[-0.03em]
                      text-[#161616]
                    "
                  >

                    {item.title}

                  </p>

                  <p
                    className="
                      mt-[4px]
                      text-[11px]
                      leading-[1.45]
                      text-[#8E8175]
                    "
                  >

                    {item.value}

                  </p>

                </div>

                {/* STATUS BAR */}

                <div
                  className="
                    mt-4
                    h-[4px]
                    w-full
                    rounded-full
                    bg-[#F2E8DC]
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      h-full
                      w-[68%]

                      rounded-full

                      bg-gradient-to-r
                      from-[#D9B16B]
                      to-[#C7964A]
                    "
                  />

                </div>

              </div>

            </button>

          );

        })}

      </div>

    </section>

  );

}