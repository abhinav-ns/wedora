"use client";

import {
  Paperclip,
  SendHorizonal,
} from "lucide-react";

export default function MessageInput() {

  return (

    <div
      className="
        sticky
        bottom-0

        bg-[#FAF7F2]/90
        backdrop-blur-xl

        pt-3
        pb-5
      "
    >

      <div
        className="
          flex
          items-center
          gap-3

          bg-white

          border
          border-[#ECE2D8]

          rounded-full

          px-4
          h-[54px]
        "
      >

        <button>

          <Paperclip
            size={20}
            className="text-[#8D8176]"
          />

        </button>

        <input
          placeholder="Message..."

          className="
            flex-1

            bg-transparent

            outline-none

            text-[14px]

            placeholder:text-[#A5978A]
          "
        />

        <button
          className="
            w-[38px]
            h-[38px]

            rounded-full

            bg-[#C8A96B]

            flex
            items-center
            justify-center
          "
        >

          <SendHorizonal
            size={18}
            className="text-white"
          />

        </button>

      </div>

    </div>

  );

}