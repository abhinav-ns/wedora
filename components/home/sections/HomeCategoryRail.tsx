"use client";

import { CATEGORIES } from "@/constants/homeData";

interface Props {

  activeCategory: string;

  onChange: (id: string) => void;

}

export default function HomeCategoryRail({
  activeCategory,
  onChange,
}: Props) {

  return (

    <section className="mb-5">

      <div
        className="
          flex
          gap-4
          overflow-x-auto
          no-scrollbar
          px-[18px]
          pr-[28px]
        "
      >

        {CATEGORIES.map((item) => {

          const Icon = item.icon;

          const isActive =
            activeCategory === item.id;

          return (

            <button
              key={item.id}

              onClick={() =>
                onChange(item.id)
              }

              className="
                flex-shrink-0
                flex
                flex-col
                items-center
              "
            >

              <div
                className={`
                  w-[57px]
                  h-[57px]
                  rounded-[18px]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-[#C9A86A]"
                      : "bg-[#F2E7DF]"
                  }
                `}
              >

                <Icon
                  size={22}
                  strokeWidth={2.1}
                  className={
                    isActive
                      ? "text-white"
                      : "text-[#B78B45]"
                  }
                />

              </div>

              <p className="mt-[8px] text-[10px] text-[#1F1F1F]">

                {item.title}

              </p>

            </button>

          );

        })}

      </div>

    </section>

  );

}