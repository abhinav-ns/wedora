interface Props {
  label: string;

  onClick?: () => void;
}

export default function SecondaryInvitationButton({
  label,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-full

        border border-[#E8DDCF]

        bg-white

        px-7
        py-3

        text-[14px]
        font-semibold
        text-[#171412]

        transition-all
        duration-300

        hover:bg-[#FAF6F0]
      "
    >
      {label}
    </button>
  );
}