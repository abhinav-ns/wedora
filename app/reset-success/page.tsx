"use client";

import Link from "next/link";

import { Check } from "lucide-react";

export default function ResetSuccessPage() {

  return (

    <main
      className="
        h-screen

        bg-[#F7F1EA]

        flex
        items-center
        justify-center

        px-6
      "
    >

      <div
        className="
          flex
          flex-col
          items-center
        "
      >

        <div
          className="
            w-[140px]
            h-[140px]

            rounded-full

            bg-[#C8A96B]

            flex
            items-center
            justify-center
          "
        >

          <Check
            size={58}
            strokeWidth={3}
            className="text-white"
          />

        </div>

        <h1
          className="
            mt-10

            text-[36px]
            text-center

            font-semibold
          "
        >

          Password
          <br />

          Reset Complete

        </h1>

        <Link
          href="/login"
          className="
            mt-10

            w-full
            h-[64px]

            px-10

            rounded-[24px]

            bg-[#C8A96B]

            flex
            items-center
            justify-center

            text-white
            text-[18px]
            font-semibold
          "
        >

          Back to Login

        </Link>

      </div>

    </main>

  );

}