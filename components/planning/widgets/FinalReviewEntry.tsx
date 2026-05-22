import PremiumCard from "../../shared/ui/PremiumCard"

export default function FinalReviewEntry() {

  return (

    <section className="px-[18px] pb-8">

      <PremiumCard
        glow
        className="
          relative
          overflow-hidden
          p-5
        "
      >

        {/* BACKGROUND LIGHT */}
        <div
          className="
            absolute
            top-[-100px]
            right-[-60px]

            w-[220px]
            h-[220px]

            rounded-full

            bg-[#D9B06B]/20

            blur-3xl
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-3
              py-1.5

              rounded-full

              bg-[#F7EFE2]

              border
              border-[#EFE4D7]

              text-[11px]
              font-semibold

              text-[#B88949]
            "
          >

            <span>✨</span>

            <span>
              Final Wedding Review
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
              mt-4

              text-[22px]
              leading-[1.12]

              tracking-[-0.04em]

              font-cormorant

              text-[#171717]
            "
          >
            Your Wedding Experience
            <br />
            Is Almost Ready
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3

              text-[13px]
              leading-[1.75]

              text-[#7A6B5A]
            "
          >
            Review your complete wedding planning
            progress, vendor coordination, guest readiness,
            hospitality arrangements, invitation flow and
            operational timeline before final confirmation.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-2.5 mt-5">

            {[
              {
                icon: "💌",
                title: "Invitations",
                subtitle:
                  "RSVP and invitation systems operational",
              },

              {
                icon: "👥",
                title: "Guests",
                subtitle:
                  "Hospitality and RSVP tracking active",
              },

              {
                icon: "🎪",
                title: "Vendors",
                subtitle:
                  "Vendor coordination and approvals synced",
              },

              {
                icon: "🗓️",
                title: "Timeline",
                subtitle:
                  "Wedding operational schedule optimized",
              },

            ].map((item) => (

              <div
                key={item.title}

                className="
                  rounded-[22px]

                  border
                  border-[#F0E6D9]

                  bg-[#FFFCF8]

                  p-3.5
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-[52px]
                    h-[52px]

                    rounded-full

                    bg-[#F7EFE2]

                    flex
                    items-center
                    justify-center

                    text-[24px]
                  "
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-5

                    text-[15px]
                    font-semibold

                    text-[#171717]
                  "
                >
                  {item.title}
                </h3>

                {/* SUBTITLE */}
                <p
                  className="
                    mt-2

                    text-[12px]
                    leading-[1.6]

                    text-[#8A7A68]
                  "
                >
                  {item.subtitle}
                </p>

              </div>

            ))}

          </div>

          {/* FOOTER */}
          <div
            className="
              mt-5

              flex
              items-center
              justify-between

              gap-3
            "
          >

            {/* SCORE */}
            <div>

              <p
                className="
                  text-[11px]

                  uppercase
                  tracking-[0.08em]

                  text-[#B18B47]
                "
              >
                Readiness Score
              </p>

              <h3
                className="
                  mt-1

                  text-[24px]
                  leading-none

                  font-semibold

                  tracking-[-0.05em]

                  text-[#171717]
                "
              >
                92%
              </h3>

            </div>

            {/* BUTTON */}
            <button
              className="
                h-[48px]

                px-5

                rounded-full

                bg-gradient-to-r
                from-[#B88949]
                to-[#D8B06B]

                text-white

                text-[14px]
                font-semibold

                shadow-[0_10px_26px_rgba(185,137,73,0.24)]

                active:scale-[0.98]

                transition-all
              "
            >
              Open Final Review
            </button>

          </div>

        </div>

      </PremiumCard>

    </section>

  )
}