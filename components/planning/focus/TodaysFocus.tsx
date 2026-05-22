import SectionTitle from "../shared/SectionTitle";

const tasks = [

  {
    title: "Finalize Floral Theme",
    status: "Pending",
  },

  {
    title: "Confirm Guest Hotels",
    status: "In Progress",
  },

  {
    title: "Approve Invitation Print",
    status: "Urgent",
  },

];

export default function TodaysFocus() {

  return (

    <section className="mt-7">

      <SectionTitle
        title="Today’s Focus"
        subtitle="Things requiring attention"
      />

      <div className="space-y-3">

        {tasks.map((task) => (

          <div
            key={task.title}
            className="
              flex
              items-center
              justify-between
              gap-4
              rounded-[24px]
              bg-white/60
              backdrop-blur-xl
              border
              border-white/60
              px-4
              py-3.5
              shadow-[0_6px_24px_rgba(0,0,0,0.03)]
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-[10px]
                  h-[10px]
                  rounded-full
                  bg-[#C79857]
                "
              />

              <div>

                <h3
                  className="
                    text-[14px]
                    font-medium
                    text-[#1A1715]
                  "
                >
                  {task.title}
                </h3>

              </div>

            </div>

            <div
              className="
                px-3
                py-1.5
                rounded-full
                bg-[#F5EBDD]
                text-[11px]
                font-medium
                text-[#A6763F]
              "
            >
              {task.status}
            </div>

          </div>

        ))}

      </div>

    </section>

  );

}