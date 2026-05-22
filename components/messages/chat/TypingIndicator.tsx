"use client";

export default function TypingIndicator() {

  return (

    <div className="flex justify-start">

      <div
        className="
          bg-white

          border
          border-[#EFE4D8]

          rounded-[18px]
          rounded-bl-[6px]

          px-4
          py-3

          flex
          items-center
          gap-[5px]
        "
      >

        <span className="w-[6px] h-[6px] rounded-full bg-[#C6B6A7] animate-bounce" />

        <span className="w-[6px] h-[6px] rounded-full bg-[#C6B6A7] animate-bounce [animation-delay:0.15s]" />

        <span className="w-[6px] h-[6px] rounded-full bg-[#C6B6A7] animate-bounce [animation-delay:0.3s]" />

      </div>

    </div>

  );

}