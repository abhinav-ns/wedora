interface Props {
  label: string;
  value: string;
  subtext: string;
}

export default function InvitationMetricCard({
  label,
  value,
  subtext,
}: Props) {
  return (
    <div
      className="
        h-[100px]

        rounded-[20px]

        border border-[#F0E8DE]

        bg-white

        p-3.5
      "
    >
      <p
        className="
          text-[11px]
          font-medium

          text-[#8B8177]
        "
      >
        {label}
      </p>

      <h3
        className="
          mt-2

          text-[20px]
          font-semibold
          tracking-[-0.04em]

          text-[#171412]
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-1

          text-[11px]
          font-medium

          text-[#C79B4B]
        "
      >
        {subtext}
      </p>
    </div>
  );
}