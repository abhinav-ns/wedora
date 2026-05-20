type NavItemProps = {
  icon: any
  label: string
  active?: boolean
}

export default function NavItem({
  icon: Icon,
  label,
  active = false,
}: NavItemProps) {

  return (

    <button
      className="
        flex
        flex-col
        items-center
        justify-center

        min-w-[54px]

        transition-all
        duration-200
      "
    >

      {/* ICON CONTAINER */}
      <div
        className={`
          flex
          items-center
          justify-center

          rounded-full

          transition-all
          duration-300

          ${
            active
              ? `
                w-[42px]
                h-[42px]

                bg-[#F3E6BE]

                shadow-[0_6px_18px_rgba(212,175,55,0.18)]
              `
              : `
                w-[38px]
                h-[38px]
              `
          }
        `}
      >

        <Icon
          size={20}
          strokeWidth={2.2}
          className={
            active
              ? "text-[#C79A45]"
              : "text-[#7D7066]"
          }
        />

      </div>

      {/* LABEL */}
      <p
        className={`
          mt-1

          text-[11px]
          font-medium

          transition-all

          ${
            active
              ? "text-[#C79A45]"
              : "text-[#7D7066]"
          }
        `}
      >
        {label}
      </p>

    </button>

  )
}