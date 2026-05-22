"use client";

import Link from "next/link";

import {
  ArrowLeft,
  SlidersHorizontal,
} from "lucide-react";

interface Props {

  onBack?: () => void;

}

export default function NotificationHeader({
  onBack,
}: Props) {

  return (

    <div
      className="
        flex
        items-center
        justify-between

        mb-4
      "
    >

      {/* BACK */}

      {onBack ? (

        <button
          onClick={onBack}
          className="
            w-[36px]
            h-[36px]

            rounded-full

            flex
            items-center
            justify-center

            transition-all
            duration-200

            active:scale-[0.94]
          "
        >

          <ArrowLeft
            size={20}
            strokeWidth={2.3}
            className="text-[#111111]"
          />

        </button>

      ) : (

        <button
         onClick={() => window.history.back()}
        >

          <div
            className="
              w-[36px]
              h-[36px]

              rounded-full

              flex
              items-center
              justify-center

              transition-all
              duration-200

              active:scale-[0.94]
            "
          >

            <ArrowLeft
              size={20}
              strokeWidth={2.3}
              className="text-[#111111]"
            />

          </div>

        </button>

      )}

      {/* TITLE */}

      <h1
        className="
          text-[24px]
          leading-none
          font-bold

          tracking-[-0.06em]

          text-[#111111]
        "
      >

        Notifications

      </h1>

      {/* FILTER */}

      <button
        className="
          w-[36px]
          h-[36px]

          rounded-full

          flex
          items-center
          justify-center

          transition-all
          duration-200

          active:scale-[0.94]
        "
      >

        <SlidersHorizontal
          size={20}
          strokeWidth={2.2}
          className="text-[#111111]"
        />

      </button>

    </div>

  );

}