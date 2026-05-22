export default function PlanningShell({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div
      className="
        relative
        max-w-[430px]
        mx-auto
        px-4
        pt-4
      "
    >

      {/* TOP LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          top-[-120px]
          right-[-80px]
          w-[240px]
          h-[240px]
          rounded-full
          bg-[#E9D2AE]/30
          blur-3xl
        "
      />

      {/* CENTER LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          top-[28%]
          left-[-120px]
          w-[220px]
          h-[220px]
          rounded-full
          bg-[#F2E5D6]/40
          blur-3xl
        "
      />

      <div className="relative z-10">

        {children}

      </div>

    </div>

  );

}