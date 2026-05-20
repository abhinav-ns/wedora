import PremiumCard from "../../shared/PremiumCard"

import SectionHeader from "../../shared/SectionHeader"

const stats = [

  {
    title: "Guests",
    value: "450",
    icon: "👥",
  },

  {
    title: "Budget",
    value: "₹18.5L",
    icon: "💳",
  },

  {
    title: "Bookings",
    value: "12",
    icon: "🎪",
  },

  {
    title: "Days Left",
    value: "235",
    icon: "⏳",
  },

]

export default function PlanningInsights() {

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Wedding Snapshot"
        subtitle="Quick operational overview"
      />

      <div className="grid grid-cols-2 gap-3">

        {stats.map((item) => (

          <PremiumCard
            key={item.title}

            className="
              p-4

              min-h-[126px]
            "
          >

            {/* TOP */}
            <div className="flex items-center justify-between">

              <div
                className="
                  w-[42px]
                  h-[42px]

                  rounded-full

                  bg-[#F7EFE2]

                  flex
                  items-center
                  justify-center

                  text-[20px]
                "
              >
                {item.icon}
              </div>

              <div
                className="
                  w-[8px]
                  h-[8px]

                  rounded-full

                  bg-[#D4AF37]
                "
              />

            </div>

            {/* VALUE */}
            <div className="mt-5">

              <h3
                className="
                  text-[28px]
                  leading-none

                  tracking-[-0.05em]

                  font-semibold

                  text-[#171717]
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-2

                  text-[13px]

                  text-[#8A7867]
                "
              >
                {item.title}
              </p>

            </div>

          </PremiumCard>

        ))}

      </div>

    </section>

  )
}