"use client";

import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  Bell,
  Shield,
  Globe,
  Moon,
  CircleHelp,
  Info,
  LogOut,
  User,
} from "lucide-react";

import { ROUTES } from "@/constants/routes";

const SETTINGS = [

  {
    title: "Account Settings",
    subtitle: "Update personal information",
    icon: User,
  },

  {
    title: "Notification Settings",
    subtitle: "Manage notifications",
    icon: Bell,
  },

  {
    title: "Privacy & Security",
    subtitle: "Permissions & privacy",
    icon: Shield,
  },

  {
    title: "Language",
    subtitle: "English",
    icon: Globe,
  },

  {
    title: "Theme",
    subtitle: "Luxury Light",
    icon: Moon,
  },

];

const SUPPORT = [

  {
    title: "Help & Support",
    subtitle: "FAQs & support center",
    icon: CircleHelp,
  },

  {
    title: "About Wedora",
    subtitle: "Platform information",
    icon: Info,
  },

];

export default function SettingsPage() {

  return (

    <main
      className="
        min-h-screen

        bg-[#F7F1EA]

        px-5
        pt-6
        pb-12
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <Link
          href={ROUTES.main.profile}
          className="
            w-[46px]
            h-[46px]

            rounded-full

            bg-white/74

            border
            border-[#ECE2D7]

            flex
            items-center
            justify-center
          "
        >

          <ChevronLeft
            size={22}
            className="
              text-[#61584D]
            "
          />

        </Link>

        <div>

          <p
            className="
              text-[12px]

              uppercase
              tracking-[0.18em]

              text-[#B69A6A]
            "
          >

            Account

          </p>

          <h1
            className="
              mt-[2px]

              text-[32px]

              tracking-[-0.05em]

              text-[#111111]
            "
          >

            Settings

          </h1>

        </div>

      </div>

      {/* SETTINGS */}

      <div
        className="
          mt-6

          rounded-[32px]

          bg-white/74

          border
          border-[#ECE2D7]

          overflow-hidden
        "
      >

        {SETTINGS.map(
          (item, index) => {

            const Icon =
              item.icon;

            return (

              <button
                key={item.title}
                className={`
                  w-full

                  px-5
                  py-4

                  flex
                  items-center
                  justify-between

                  ${
                    index !==
                    SETTINGS.length - 1
                      ? `
                        border-b
                        border-[#F1E7DB]
                      `
                      : ""
                  }
                `}
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
                      w-[46px]
                      h-[46px]

                      rounded-[16px]

                      bg-[#F8EFE3]

                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Icon
                      size={21}
                      className="
                        text-[#B78B45]
                      "
                    />

                  </div>

                  <div className="text-left">

                    <h3
                      className="
                        text-[16px]
                        font-medium

                        text-[#111111]
                      "
                    >

                      {item.title}

                    </h3>

                    <p
                      className="
                        mt-[1px]

                        text-[13px]

                        text-[#8A7C70]
                      "
                    >

                      {item.subtitle}

                    </p>

                  </div>

                </div>

                <ChevronRight
                  size={19}
                  className="
                    text-[#A09588]
                  "
                />

              </button>

            );

          }
        )}

      </div>

      {/* SUPPORT */}

      <div
        className="
          mt-4

          rounded-[32px]

          bg-white/74

          border
          border-[#ECE2D7]

          overflow-hidden
        "
      >

        {SUPPORT.map(
          (item, index) => {

            const Icon =
              item.icon;

            return (

              <button
                key={item.title}
                className={`
                  w-full

                  px-5
                  py-4

                  flex
                  items-center
                  justify-between

                  ${
                    index !==
                    SUPPORT.length - 1
                      ? `
                        border-b
                        border-[#F1E7DB]
                      `
                      : ""
                  }
                `}
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
                      w-[46px]
                      h-[46px]

                      rounded-[16px]

                      bg-[#F8EFE3]

                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Icon
                      size={21}
                      className="
                        text-[#B78B45]
                      "
                    />

                  </div>

                  <div className="text-left">

                    <h3
                      className="
                        text-[16px]
                        font-medium

                        text-[#111111]
                      "
                    >

                      {item.title}

                    </h3>

                    <p
                      className="
                        mt-[1px]

                        text-[13px]

                        text-[#8A7C70]
                      "
                    >

                      {item.subtitle}

                    </p>

                  </div>

                </div>

                <ChevronRight
                  size={19}
                  className="
                    text-[#A09588]
                  "
                />

              </button>

            );

          }
        )}

      </div>

      {/* LOGOUT */}

      <button
        className="
          mt-5

          w-full
          h-[66px]

          rounded-[28px]

          bg-white

          border
          border-[#F0E2D7]

          flex
          items-center
          justify-center
          gap-3

          text-[#E24D4D]
          text-[18px]
          font-medium
        "
      >

        <LogOut size={21} />

        Logout

      </button>

    </main>

  );

}
