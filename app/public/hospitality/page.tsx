"use client";

import BottomNavbar
from "@/components/navigation/BottomNavbar";

export default function HospitalityPage() {

  return (

    <main
      className="
        min-h-screen

        bg-[#F7F1EA]

        px-5
        pt-8
        pb-[120px]
      "
    >

      <h1
        className="
          text-[34px]
          font-bold

          tracking-[-0.05em]

          text-[#111111]
        "
      >

        Hospitality Experience

      </h1>

      <p
        className="
          mt-2

          text-[15px]
          leading-[1.7]

          text-[#7E746A]
        "
      >

        Enhance your guests experience with premium hospitality features.

      </p>

      <div
        className="
          mt-8

          rounded-[30px]

          bg-white/75

          border
          border-[#ECE2D7]

          p-5
        "
      >

        <div
          className="
            h-[240px]

            rounded-[24px]

            bg-[linear-gradient(135deg,#EFE1CF,#F9F3EC)]

            flex
            items-center
            justify-center
          "
        >

          <h2
            className="
              text-[28px]

              text-[#B78B45]
            "
          >

            Premium Guest Care

          </h2>

        </div>

      </div>

      <BottomNavbar />

    </main>

  );

}