import SectionTitle from "../shared/SectionTitle";

const stages = [
  "Invitation",
  "Guests",
  "Decor",
  "Venue",
  "Hospitality",
];

export default function PlanningJourney() {

  return (

    <section className="mt-7">

      <SectionTitle
        title="Planning Journey"
        subtitle="Your wedding progress"
      />

      <div
        className="
          flex
          items-center
          gap-2
          overflow-x-auto
          no-scrollbar
          pb-2
        "
      >

        {stages.map((stage, index) => (

          <div
            key={stage}
            className="
              flex
              items-center
              shrink-0
            "
          >

            <div className="flex flex-col items-center">

              <div
                className={`
                  w-[52px]
                  h-[52px]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-[11px]
                  font-medium
                  backdrop-blur-xl
                  border

                  ${
                    index <= 2

                      ? `
                        bg-[#C79857]
                        border-[#C79857]
                        text-white
                      `

                      : `
                        bg-white/70
                        border-white/60
                        text-[#7B6D5D]
                      `
                  }
                `}
              >
                {index + 1}
              </div>

              <p
                className="
                  mt-2
                  text-[11px]
                  text-[#7E7062]
                "
              >
                {stage}
              </p>

            </div>

            {index !== stages.length - 1 && (

              <div
                className="
                  w-[34px]
                  h-[1px]
                  bg-[#D8C5AB]
                  mx-2
                  mb-6
                "
              />

            )}

          </div>

        ))}

      </div>

    </section>

  );

}