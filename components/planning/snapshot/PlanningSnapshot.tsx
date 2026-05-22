import SectionTitle from "../shared/SectionTitle";

const items = [

  {
    title: "Budget",
    value: "₹12.4L",
  },

  {
    title: "Guests",
    value: "248",
  },

  {
    title: "Tasks",
    value: "18",
  },

  {
    title: "Vendors",
    value: "12",
  },

];

export default function PlanningSnapshot() {

  return (

    <section className="mt-7">

      <SectionTitle
        title="Wedding Snapshot"
        subtitle="Live wedding overview"
      />

      <div className="grid grid-cols-2 gap-3">

        {items.map((item) => (

          <div
            key={item.title}
            className="
              rounded-[28px]
              bg-white/60
              backdrop-blur-xl
              border
              border-white/60
              p-4
              shadow-[0_6px_24px_rgba(0,0,0,0.03)]
            "
          >

            <p
              className="
                text-[12px]
                text-[#8B7A6A]
              "
            >
              {item.title}
            </p>

            <h3
              className="
                mt-2
                text-[24px]
                leading-none
                tracking-[-0.05em]
                font-semibold
                text-[#1A1715]
              "
            >
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </section>

  );

}