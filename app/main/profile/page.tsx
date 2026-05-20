"use client";

import Link from "next/link";

import {
  CalendarDays,
  Users,
  Wallet,
  Mail,
  ChevronRight,
  Settings2,
  HeartHandshake,
  UserCircle2,
} from "lucide-react";

import BottomNavbar
from "@/components/navigation/BottomNavbar";

const QUICK_ACTIONS = [

  {
    title: "Wedding Details",
    subtitle: "Venue, date & timeline",
    icon: CalendarDays,
  },

  {
    title: "Partner Details",
    subtitle: "Manage couple profile",
    icon: HeartHandshake,
  },

  {
    title: "Family Members",
    subtitle: "Guests & relationships",
    icon: Users,
  },

  {
    title: "Invitation Preferences",
    subtitle: "Themes & invitation style",
    icon: Mail,
  },

];

export default function ProfilePage() {

  return (

    <main
      className="
        min-h-screen

        bg-[#F7F1EA]

        px-5
        pt-6
        pb-[130px]
      "
    >

      {/* TOP */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div>

          <p
            className="
              text-[12px]

              uppercase
              tracking-[0.18em]

              text-[#B69A6A]
            "
          >

            Your Wedding

          </p>

          <h1
            className="
              mt-[2px]

              text-[34px]
              leading-[1]

              tracking-[-0.06em]

              text-[#111111]
            "
          >

            Profile

          </h1>

        </div>

        <Link
          href="/profile/settings"
          className="
            w-[48px]
            h-[48px]

            rounded-full

            bg-white/75

            border
            border-[#ECE2D7]

            flex
            items-center
            justify-center
          "
        >

          <Settings2
            size={21}
            className="
              text-[#7D7368]
            "
          />

        </Link>

      </div>

      {/* HERO CARD */}

      <div
        className="
          mt-5

          rounded-[34px]

          bg-white/76

          border
          border-[#ECE2D7]

          p-5
        "
      >

        <div
          className="
            flex
            items-start
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

            {/* AVATAR */}

            <div
              className="
                w-[82px]
                h-[82px]

                rounded-full

                bg-[#E8D5BC]

                flex
                items-center
                justify-center

                shadow-[0_8px_24px_rgba(0,0,0,0.06)]
              "
            >

              <UserCircle2
                size={44}
                className="
                  text-[#8E6A38]
                "
              />

            </div>

            {/* INFO */}

            <div>

              <h2
                className="
                  text-[26px]

                  tracking-[-0.05em]

                  text-[#111111]
                "
              >

                Varsha Sharma

              </h2>

              <p
                className="
                  mt-[2px]

                  text-[14px]

                  text-[#84776B]
                "
              >

                Varsha & Rahul Wedding

              </p>

              <p
                className="
                  mt-[2px]

                  text-[14px]

                  text-[#B78B45]
                "
              >

                12 February 2027

              </p>

            </div>

          </div>

          <ChevronRight
            size={20}
            className="
              mt-2

              text-[#9A8E81]
            "
          />

        </div>

        {/* EDIT */}

        <button
          className="
            mt-5

            h-[48px]

            px-5

            rounded-full

            bg-[#F6E6CC]

            text-[#AF803B]
            text-[15px]
            font-medium

            transition-all
            duration-300

            active:scale-[0.98]
          "
        >

          Edit Profile

        </button>

      </div>

      {/* QUICK STATS */}

      <div
        className="
          mt-4

          grid
          grid-cols-2
          gap-3
        "
      >

        {/* DAYS */}

        <div
          className="
            rounded-[28px]

            bg-white/72

            border
            border-[#ECE2D7]

            p-4
          "
        >

          <p
            className="
              text-[12px]

              uppercase
              tracking-[0.15em]

              text-[#B69A6A]
            "
          >

            Countdown

          </p>

          <h3
            className="
              mt-2

              text-[32px]

              tracking-[-0.06em]

              text-[#111111]
            "
          >

            236

          </h3>

          <p
            className="
              text-[14px]

              text-[#84776B]
            "
          >

            Days Remaining

          </p>

        </div>

        {/* GUESTS */}

        <div
          className="
            rounded-[28px]

            bg-white/72

            border
            border-[#ECE2D7]

            p-4
          "
        >

          <p
            className="
              text-[12px]

              uppercase
              tracking-[0.15em]

              text-[#B69A6A]
            "
          >

            Guests

          </p>

          <h3
            className="
              mt-2

              text-[32px]

              tracking-[-0.06em]

              text-[#111111]
            "
          >

            420

          </h3>

          <p
            className="
              text-[14px]

              text-[#84776B]
            "
          >

            Invitations Planned

          </p>

        </div>

        {/* BUDGET */}

        <div
          className="
            rounded-[28px]

            bg-white/72

            border
            border-[#ECE2D7]

            p-4
          "
        >

          <p
            className="
              text-[12px]

              uppercase
              tracking-[0.15em]

              text-[#B69A6A]
            "
          >

            Budget

          </p>

          <h3
            className="
              mt-2

              text-[32px]

              tracking-[-0.06em]

              text-[#111111]
            "
          >

            74%

          </h3>

          <p
            className="
              text-[14px]

              text-[#84776B]
            "
          >

            Wedding Planned

          </p>

        </div>

        {/* RSVP */}

        <div
          className="
            rounded-[28px]

            bg-white/72

            border
            border-[#ECE2D7]

            p-4
          "
        >

          <p
            className="
              text-[12px]

              uppercase
              tracking-[0.15em]

              text-[#B69A6A]
            "
          >

            RSVP

          </p>

          <h3
            className="
              mt-2

              text-[32px]

              tracking-[-0.06em]

              text-[#111111]
            "
          >

            188

          </h3>

          <p
            className="
              text-[14px]

              text-[#84776B]
            "
          >

            Confirmed Guests

          </p>

        </div>

      </div>

      {/* QUICK ACTIONS */}

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

        {QUICK_ACTIONS.map(
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
                    QUICK_ACTIONS.length - 1
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

      <BottomNavbar />

    </main>

  );

}