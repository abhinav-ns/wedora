"use client";

import Link from "next/link";

import {
  Sparkles,
  ImageIcon,
  Users,
  Wand2,
} from "lucide-react";

import { ROUTES } from "@/constants/routes";


const ITEMS = [
  {
    title: "Create Invitation",
    icon: Sparkles,
  },

  {
    title: "Choose Theme",
    icon: ImageIcon,
  },

  {
    title: "Manage Guests",
    icon: Users,
  },

  {
    title: "AI Wedding Setup",
    icon: Wand2,
  },
];

export default function CreatePage() {

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

      {/* HEADER */}

      <div>

        <p
          className="
            text-[14px]

            tracking-[0.15em]
            uppercase

            text-[#B69A6A]
          "
        >

          Wedora Studio

        </p>

        <h1
          className="
            mt-2

            text-[38px]
            leading-[1.05]

            font-semibold

            tracking-[-0.06em]

            text-[#111111]
          "
        >

          Create Your Wedding Experience

        </h1>

      </div>

      {/* HERO CARD */}

      <div
        className="
          mt-8

          rounded-[34px]

          overflow-hidden

          bg-[linear-gradient(135deg,#E8D5BD,#F7EFE5)]

          p-6
        "
      >

        <div
          className="
            h-[240px]

            rounded-[28px]

            bg-white/45

            backdrop-blur-sm

            border
            border-white/40

            flex
            flex-col
            justify-end

            p-6
          "
        >

          <h2
            className="
              text-[34px]
              leading-[1.08]

              tracking-[-0.05em]

              text-[#2B2117]
            "
          >

            Luxury Wedding Invitation

          </h2>

          <button
            className="
              mt-5

              w-fit

              px-5
              h-[50px]

              rounded-full

              bg-[#111111]

              text-white
              text-[15px]
              font-medium
            "
          >

            Start Creating

          </button>

        </div>

      </div>

      {/* ACTIONS */}

      <div className="mt-8 space-y-4">

        {ITEMS.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.title}
              href={ROUTES.main.planning}
              className="
                h-[88px]

                rounded-[28px]

                bg-white/72

                border
                border-[#ECE2D7]

                px-5

                flex
                items-center
                justify-between
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div
                  className="
                    w-[56px]
                    h-[56px]

                    rounded-[20px]

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

                <h3
                  className="
                    text-[18px]
                    font-medium

                    text-[#111111]
                  "
                >

                  {item.title}

                </h3>

              </div>

            </Link>

          );

        })}

      </div>

    </main>

  );

}
