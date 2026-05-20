import PremiumCard from "../../shared/PremiumCard"

export default function PlanningHero() {

  return (

    <section className="page-padding pt-4">

      {/* TOP */}
      <div className="flex items-center justify-between">

        <div>

          <p
            className="
              text-[12px]
              font-medium

              uppercase
              tracking-[0.08em]

              text-[#B18B47]
            "
          >
            Wedora Planning
          </p>

          <h1
            className="
              mt-1

              text-[26px]
              leading-[1]

              tracking-[-0.05em]

              text-[#171717]

              font-cormorant
            "
          >
            Aarav & Diya
          </h1>

          <p
            className="
              mt-1

              text-[14px]

              text-[#7E7062]
            "
          >
            Your luxury wedding command center
          </p>

        </div>

        {/* NOTIFICATION */}
        <button
          className="
            relative

            w-[44px]
            h-[44px]

            rounded-full

            bg-white

            border
            border-[#EFE7DC]

            flex
            items-center
            justify-center

            shadow-[0_4px_18px_rgba(0,0,0,0.04)]
          "
        >

          <span className="text-[18px]">
            🔔
          </span>

          <div
            className="
              absolute
              top-[10px]
              right-[11px]

              w-[8px]
              h-[8px]

              rounded-full

              bg-[#D7A34B]
            "
          />

        </button>

      </div>

      {/* HERO CARD */}
      <PremiumCard
        glow
        className="
          mt-4

          p-4
        "
      >

        {/* MAIN */}
        <div className="flex gap-4">

          {/* INVITATION */}
          <div
            className="
              w-[88px]
              h-[118px]

              rounded-[24px]

              overflow-hidden

              bg-[#EFE3D2]

              border
              border-[#F1E7D8]

              shrink-0
            "
          >

            <img
              src="/images/invitation-preview.png"
              alt="Invitation"

              className="
                w-full
                h-full

                object-cover
              "
            />

          </div>

          {/* DETAILS */}
          <div className="flex-1 min-w-0">

            <h2
              className="
                text-[20px]
                leading-[1]

                tracking-[-0.04em]

                text-[#171717]

                font-cormorant
              "
            >
              Aarav & Diya Wedding
            </h2>

            {/* META */}
            <div className="mt-3 space-y-1.5">

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-[13px]

                  text-[#6F6254]
                "
              >
                <span>📅</span>

                <span>25 Dec 2025</span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-[13px]

                  text-[#6F6254]
                "
              >
                <span>📍</span>

                <span>Jaipur</span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-[13px]

                  text-[#7E7062]
                "
              >
                <span>🏛️</span>

                <span>Grand Palace Resort</span>
              </div>

            </div>

            {/* PROGRESS */}
            <div className="mt-4">

              <div className="flex items-center justify-between">

                <p
                  className="
                    text-[12px]
                    font-medium

                    text-[#6D6258]
                  "
                >
                  Planning Progress
                </p>

                <p
                  className="
                    text-[12px]
                    font-semibold

                    text-[#B98A3D]
                  "
                >
                  72%
                </p>

              </div>

              {/* BAR */}
              <div
                className="
                  mt-2

                  h-[7px]

                  rounded-full

                  bg-[#EFE7DC]

                  overflow-hidden
                "
              >

                <div
                  className="
                    h-full
                    w-[72%]

                    rounded-full

                    bg-gradient-to-r
                    from-[#B98A3D]
                    to-[#D5AF68]
                  "
                />

              </div>

            </div>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-4 flex gap-3">

          <button
            className="
              flex-1

              h-[46px]

              rounded-full

              bg-[#C3923F]

              text-white

              text-[14px]
              font-semibold

              shadow-[0_10px_24px_rgba(185,138,61,0.20)]
            "
          >
            Final Review
          </button>

          <button
            className="
              px-5

              rounded-full

              border
              border-[#E8DDCF]

              bg-white

              text-[14px]
              font-medium

              text-[#5F564E]
            "
          >
            Timeline
          </button>

        </div>

        {/* UPCOMING EVENT */}
        <div
          className="
            mt-4

            rounded-[22px]

            bg-[#FBF7F1]

            border
            border-[#F1E8DC]

            p-4
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p
                className="
                  text-[11px]

                  uppercase
                  tracking-[0.08em]

                  text-[#B18B47]
                "
              >
                Upcoming Event
              </p>

              <h3
                className="
                  mt-2

                  text-[16px]
                  font-semibold

                  text-[#171717]
                "
              >
                Catering Tasting
              </h3>

            </div>

            <div
              className="
                px-4
                py-2

                rounded-full

                bg-white

                border
                border-[#E7DCCC]

                text-[13px]
                font-medium

                text-[#7E6C58]
              "
            >
              25 MAY
            </div>

          </div>

        </div>

      </PremiumCard>

    </section>

  )
}