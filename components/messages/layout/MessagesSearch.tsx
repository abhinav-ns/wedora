"use client";

import { Search } from "lucide-react";

export default function MessagesSearch() {

  return (

    <div
      className="
        h-[50px]

        rounded-full

        bg-white

        border
        border-[#EFE4D8]

        px-4

        flex
        items-center
        gap-3
      "
    >

      <Search
        size={18}
        className="text-[#A89A8D]"
      />

      <input
        type="text"

        placeholder="Search conversations"

        className="
          flex-1

          bg-transparent

          outline-none

          text-[13px]

          text-[#111111]

          placeholder:text-[#A89A8D]
        "
      />

    </div>

  );

}
