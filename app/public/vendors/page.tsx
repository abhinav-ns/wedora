"use client";

import BottomNavbar
from "@/components/navigation/BottomNavbar";

export default function VendorsPage() {

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

      <h1
        className="
          text-[34px]
          font-bold

          tracking-[-0.05em]

          text-[#111111]
        "
      >

        Vendor Discovery

      </h1>

      <p
        className="
          mt-2

          text-[15px]
          leading-[1.7]

          text-[#7E746A]
        "
      >

        Explore photographers, decor, catering and premium wedding services.

      </p>

      <div className="mt-8 space-y-4">

        {[1,2,3].map((item) => (

          <div
            key={item}
            className="
              rounded-[28px]

              bg-white/75

              border
              border-[#ECE2D7]

              p-4
            "
          >

            <div
              className="
                h-[180px]

                rounded-[22px]

                bg-[linear-gradient(135deg,#E9D6C1,#F6EEE4)]
              "
            />

            <h2
              className="
                mt-4

                text-[20px]
                font-semibold

                text-[#111111]
              "
            >

              Premium Wedding Studio

            </h2>

          </div>

        ))}

      </div>

      <BottomNavbar />

    </main>

  );

}