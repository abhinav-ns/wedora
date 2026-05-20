"use client";

import {
  Globe,
  Apple,
} from "lucide-react";

export default function SocialLogin() {

  return (

    <div
      className="
        flex
        items-center
        justify-center

        gap-6
      "
    >

      {/* GOOGLE */}

      <button
        className="
          w-[62px]
          h-[62px]

          rounded-[20px]

          bg-white/42

          backdrop-blur-md

          border
          border-[#EEE3D7]

          flex
          items-center
          justify-center

          shadow-[0_4px_14px_rgba(0,0,0,0.03)]

          active:scale-[0.95]

          transition-all
          duration-300
        "
      >

        <Globe
          size={24}
          strokeWidth={2.2}
          className="text-[#1A1A1A]"
        />

      </button>

      {/* APPLE */}

      <button
        className="
          w-[68px]
          h-[68px]

          rounded-[22px]

          bg-[#C8A96B]

          flex
          items-center
          justify-center

          shadow-[0_10px_24px_rgba(200,169,107,0.24)]

          active:scale-[0.95]

          transition-all
          duration-300
        "
      >

        <Apple
          size={28}
          strokeWidth={2.2}
          className="text-white"
        />

      </button>

      {/* FACEBOOK */}

      <button
        className="
          w-[62px]
          h-[62px]

          rounded-[20px]

          bg-white/42

          backdrop-blur-md

          border
          border-[#EEE3D7]

          flex
          items-center
          justify-center

          shadow-[0_4px_14px_rgba(0,0,0,0.03)]

          active:scale-[0.95]

          transition-all
          duration-300
        "
      >

        <Globe
          size={24}
          strokeWidth={2.2}
          className="text-[#1A1A1A]"
        />

      </button>

    </div>

  );

}