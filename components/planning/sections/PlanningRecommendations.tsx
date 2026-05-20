import PremiumCard from "../../shared/PremiumCard"

import SectionHeader from "../../shared/SectionHeader"

const recommendations = [

  {
    id: 1,

    title: "Luxury Floral Entrance",

    subtitle:
      "Premium floral walkway experience",

    tag: "Trending",

    icon: "🌸",
  },

  {
    id: 2,

    title: "Drone Cinematic Coverage",

    subtitle:
      "Aerial cinematic wedding production",

    tag: "Popular",

    icon: "🎥",
  },

  {
    id: 3,

    title: "VIP Hospitality Lounge",

    subtitle:
      "Luxury guest waiting experience",

    tag: "Premium",

    icon: "✨",
  },

]

export default function PlanningRecommendations() {

  return (

    <section className="px-[18px]">

      <SectionHeader
        title="Experience Recommendations"
        subtitle="Curated premium wedding upgrades"
        action="Explore"
      />

      <div className="space-y-3">

        {recommendations.map((item) => (

          <PremiumCard
            key={item.id}

            className="
              p-4
            "
          >

            <div className="flex items-start gap-3">

              {/* ICON */}
              <div
                className="
                  w-[44px]
                  h-[44px]

                  rounded-full

                  bg-[#F7EFE2]

                  flex
                  items-center
                  justify-center

                  text-[18px]

                  shrink-0
                "
              >
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="flex-1 min-w-0">

                {/* TOP */}
                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h3
                      className="
                        text-[15px]
                        leading-[1.3]

                        font-semibold

                        text-[#171717]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1

                        text-[12px]
                        leading-[1.5]

                        text-[#8A7A68]
                      "
                    >
                      {item.subtitle}
                    </p>

                  </div>

                  {/* TAG */}
                  <div
                    className="
                      px-2.5
                      py-1

                      rounded-full

                      bg-[#F7EFE2]

                      border
                      border-[#EFE4D7]

                      text-[10px]
                      font-semibold

                      text-[#B88949]

                      shrink-0
                    "
                  >
                    {item.tag}
                  </div>

                </div>

                {/* FOOTER */}
                <div className="mt-4 flex items-center justify-between">

                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      text-[11px]

                      text-[#8A7A68]
                    "
                  >
                    <span>⚡</span>

                    <span>AI curated recommendation</span>
                  </div>

                  <button
                    className="
                      px-3
                      py-1.5

                      rounded-full

                      bg-[#B88949]

                      text-white

                      text-[11px]
                      font-medium

                      shadow-[0_8px_20px_rgba(185,137,73,0.18)]
                    "
                  >
                    Add
                  </button>

                </div>

              </div>

            </div>

          </PremiumCard>

        ))}

      </div>

    </section>

  )
}