interface Props {
  label: string;
  value: string;
}

export default function InvitationDetailRow({
  label,
  value,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        border-b
        border-[#F3ECE3]

        py-3
      "
    >
      <span
        className="
          text-[13px]

          text-[#7C746B]
        "
      >
        {label}
      </span>

      <span
        className="
          text-[13px]
          font-medium

          text-[#171412]
        "
      >
        {value}
      </span>
    </div>
  );
}