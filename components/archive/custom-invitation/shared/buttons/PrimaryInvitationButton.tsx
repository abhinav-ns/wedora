interface Props {
  label: string;

  onClick?: () => void;
}

export default function PrimaryInvitationButton({
  label,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-full

        bg-[#C79B4B]

        px-7
        py-3

        text-[14px]
        font-semibold
        text-white

        shadow-[0_10px_30px_rgba(199,155,75,0.22)]

        transition-all
        duration-300

        hover:scale-[1.02]
        hover:opacity-95
      "
    >
      {label}
    </button>
  );
}