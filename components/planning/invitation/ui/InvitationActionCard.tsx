import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
}

export default function InvitationActionCard({
  icon,
  label,
}: Props) {
  return (
    <button
      className="
        flex
        h-[58px]

        flex-col
        items-center
        justify-center

        rounded-[18px]

        bg-white

        shadow-[0_4px_18px_rgba(184,139,61,0.08)]

        transition-all
        duration-200

        active:scale-[0.97]
      "
    >
      <div
        className="
          text-[#C79B4B]

          mb-2
        "
      >
        {icon}
      </div>

      <span
        className="
          px-1

          text-center

          text-[8px]
          font-medium
          leading-[1.15]

          text-[#171412]
        "
      >
        {label}
      </span>
    </button>
  );
}