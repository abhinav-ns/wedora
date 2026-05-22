type PremiumCardProps = {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export default function PremiumCard({
  children,
  className = "",
  glow = false,
}: PremiumCardProps) {

  return (

    <div
      className={`
        relative

        overflow-hidden

        rounded-[28px]

        border
        border-[#EEE3D5]

        bg-[#FFFDF9]/92

        backdrop-blur-xl

        shadow-[0_6px_24px_rgba(176,138,72,0.06)]

        transition-all
        duration-300

        ${className}
      `}
    >

      {/* GLOW */}
      {glow && (

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-[#D4A85A]/[0.06]
            via-transparent
            to-transparent

            pointer-events-none
          "
        />

      )}

      {/* TOP LIGHT */}
      <div
        className="
          absolute
          top-0
          left-0

          w-full
          h-[1px]

          bg-gradient-to-r
          from-transparent
          via-white/80
          to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </div>

  )
}