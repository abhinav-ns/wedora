"use client";

import {
  ArrowLeft,
  SlidersHorizontal,
} from "lucide-react";

export default function MessagesHeader() {

  return (

    <header
      className="
        flex
        items-center
        justify-between

        mb-4
      "
    >

      {/* BACK */}

      <button
        className="
          w-[40px]
          h-[40px]

          rounded-full

          bg-white

          border
          border-[#EFE4D8]

          flex
          items-center
          justify-center
        "
      >

        <ArrowLeft
          size={18}
          className="text-[#111111]"
        />

      </button>

      {/* TITLE */}

      <h1
        className="
          text-[20px]
          font-semibold

          text-[#111111]
        "
      >

        Messages

      </h1>

      {/* FILTER */}

      <button
        className="
          w-[40px]
          h-[40px]

          rounded-full

          bg-white

          border
          border-[#EFE4D8]

          flex
          items-center
          justify-center
        "
      >

        <SlidersHorizontal
          size={18}
          className="text-[#111111]"
        />

      </button>

    </header>

  );

}