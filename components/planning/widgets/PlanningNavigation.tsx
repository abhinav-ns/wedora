"use client"

interface PlanningNavigationProps {

  activeSection: string

  onChange: (
    section: string
  ) => void

}

const planningSections = [

  {
    id: "overview",
    label: "Overview",
    icon: "✨",
  },

  {
    id: "tasks",
    label: "Tasks",
    icon: "✅",
  },

  {
    id: "timeline",
    label: "Timeline",
    icon: "🗓️",
  },

  {
    id: "guests",
    label: "Guests",
    icon: "👥",
  },

  {
    id: "vendors",
    label: "Vendors",
    icon: "🎪",
  },

  {
    id: "hospitality",
    label: "Hospitality",
    icon: "🏨",
  },

  {
    id: "budget",
    label: "Budget",
    icon: "💳",
  },

  {
    id: "analytics",
    label: "Analytics",
    icon: "📊",
  },

]

export default function PlanningNavigation({

  activeSection,

  onChange,

}: PlanningNavigationProps) {

  return (

    <section
      className="
        sticky
        top-[70px]

        z-30

        px-[18px]
        pt-3
      "
    >

      <div
        className="
          flex
          gap-2

          overflow-x-auto

          no-scrollbar
        "
      >

        {planningSections.map((section) => {

          const isActive =
            activeSection === section.id

          return (

            <button
              key={section.id}

              onClick={() =>
                onChange(section.id)
              }

              className={`
                flex
                items-center
                gap-2

                px-4
                py-3

                rounded-full

                whitespace-nowrap

                border

                transition-all
                duration-300

                ${
                  isActive

                    ? `
                      border-[#D6B06C]

                      bg-gradient-to-r
                      from-[#B88949]
                      to-[#D6B06C]

                      text-white

                      shadow-[0_10px_25px_rgba(185,137,73,0.24)]
                    `

                    : `
                      border-[#EFE4D7]

                      bg-[#FFFDF9]

                      text-[#7B6A57]
                    `
                }
              `}
            >

              <span
                className="
                  text-[15px]
                "
              >
                {section.icon}
              </span>

              <span
                className="
                  text-[13px]
                  font-semibold
                "
              >
                {section.label}
              </span>

            </button>

          )

        })}

      </div>

    </section>

  )

}