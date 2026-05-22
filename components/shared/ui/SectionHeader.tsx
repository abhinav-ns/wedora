type SectionHeaderProps = {
  title: string
  subtitle?: string
  action?: string
}

export default function SectionHeader({
  title,
  subtitle,
  action,
}: SectionHeaderProps) {

  return (

    <div
      className="
        flex
        items-end
        justify-between

        mb-3
      "
    >

      {/* LEFT */}
      <div>

        <h2
          className="
            text-[20px]
            leading-none

            tracking-[-0.04em]

            font-semibold

            text-[#171717]
          "
        >
          {title}
        </h2>

        {subtitle && (

          <p
            className="
              mt-1

              text-[12px]

              text-[#887C70]
            "
          >
            {subtitle}
          </p>

        )}

      </div>

      {/* ACTION */}
      {action && (

        <button
          className="
            flex
            items-center
            gap-1

            text-[12px]
            font-semibold

            text-[#B88949]

            active:scale-[0.98]

            transition-all
          "
        >

          <span>{action}</span>

          <span>→</span>

        </button>

      )}

    </div>

  )
}