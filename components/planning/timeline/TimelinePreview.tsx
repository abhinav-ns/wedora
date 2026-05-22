import SectionTitle from "../shared/SectionTitle";

const timeline = [
  {
    day: "25 MAY",
    title: "Venue Visit",
    time: "11:00 AM",
  },

  {
    day: "02 JUN",
    title: "Menu Tasting",
    time: "04:00 PM",
  },

  {
    day: "18 JUN",
    title: "Decor Review",
    time: "06:30 PM",
  },
];

export default function TimelinePreview() {

  return (

    <section className="mt-7">

      <div className="flex items-center justify-between">

        <SectionTitle
          title="Timeline"
          subtitle="Upcoming wedding flow"
        />

        <button
          className="
            text-[12px]
            font-medium
            text-[#B08A56]
          "
        >
          View All
        </button>

      </div>

      <div className="mt-2 space-y-5">

        {timeline.map((item, index) => (

          <div
            key={item.title}
            className="
              flex
              gap-4
            "
          >

            {/* LEFT */}
            <div
              className="
                flex
                flex-col
                items-center
                shrink-0
              "
            >

              <div
                className="
                  w-[12px]
                  h-[12px]
                  rounded-full
                  bg-[#C79857]
                  border-[3px]
                  border-[#F4E6D3]
                "
              />

              {index !== timeline.length - 1 && (

                <div
                  className="
                    w-[1px]
                    flex-1
                    bg-[#E5D4BC]
                    mt-2
                  "
                />

              )}

            </div>

            {/* RIGHT */}
            <div className="pb-6">

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.08em]
                  text-[#B08A56]
                "
              >
                {item.day}
              </p>

              <h3
                className="
                  mt-1
                  text-[17px]
                  tracking-[-0.03em]
                  font-semibold
                  text-[#1A1715]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-1
                  text-[12px]
                  text-[#867565]
                "
              >
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}