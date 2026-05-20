"use client";

import BottomNavbar
from "@/components/navigation/BottomNavbar";

import {
  Users,
  QrCode,
  Phone,
} from "lucide-react";

export default function GuestsPage() {

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

        Guest Experience

      </h1>

      <p
        className="
          mt-2

          text-[15px]
          leading-[1.7]

          text-[#7E746A]
        "
      >

        Manage RSVP, QR entry and hospitality beautifully.

      </p>

      {/* CARDS */}

      <div className="mt-8 space-y-4">

        {[
          {
            title: "Guest List",
            icon: Users,
          },

          {
            title: "QR Entry",
            icon: QrCode,
          },

          {
            title: "Guest Support",
            icon: Phone,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                h-[90px]

                rounded-[26px]

                bg-white/75

                border
                border-[#ECE2D7]

                px-5

                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  w-[54px]
                  h-[54px]

                  rounded-[18px]

                  bg-[#F4E8D8]

                  flex
                  items-center
                  justify-center
                "
              >

                <Icon
                  size={24}
                  className="
                    text-[#B78B45]
                  "
                />

              </div>

              <div>

                <h2
                  className="
                    text-[18px]
                    font-semibold

                    text-[#111111]
                  "
                >

                  {item.title}

                </h2>

              </div>

            </div>

          );

        })}

      </div>

      <BottomNavbar />

    </main>

  );

}