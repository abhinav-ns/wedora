"use client";

import BottomNavbar
from "@/components/navigation/BottomNavbar";

export default function InvitationPage() {

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

        <h1
          className="
            text-[34px]
            font-bold

            tracking-[-0.05em]

            text-[#111111]
          "
        >

          Invitation Experience

        </h1>

        <p
          className="
            mt-2

            text-[15px]
            leading-[1.7]

            text-[#7E746A]
          "
        >

          Create and manage your wedding invitations beautifully.

        </p>

      </div>

      {/* TEMPLATE CARD */}

      <div
        className="
          mt-8

          rounded-[30px]

          bg-white/72

          border
          border-[#ECE2D7]

          p-5
        "
      >

        <div
          className="
            h-[240px]

            rounded-[24px]

            bg-[linear-gradient(135deg,#E7D4BE,#F6EEE4)]

            flex
            items-center
            justify-center
          "
        >

          <h2
            className="
              text-[30px]

              text-[#B78B45]

              tracking-[-0.04em]
            "
          >

            Wedora Invite

          </h2>

        </div>

        <button
          className="
            mt-5

            w-full
            h-[60px]

            rounded-[22px]

            bg-[#C8A96B]

            text-white
            text-[17px]
            font-semibold
          "
        >

          Customize Invitation

        </button>

      </div>

      <BottomNavbar />

    </main>

  );

}