type Props = {
  text: string;
  onClick?: () => void;
};

export default function AuthButton({
  text,
  onClick,
}: Props) {

  return (

    <button
      onClick={onClick}
      className="
        w-full
        h-[72px]

        rounded-[30px]

        bg-[#C8A96B]

        shadow-[0_14px_40px_rgba(200,169,107,0.28)]

        text-white
        text-[20px]
        font-semibold

        tracking-[-0.03em]

        transition-all
        duration-300

        active:scale-[0.98]
      "
    >

      {text}

    </button>

  );

}