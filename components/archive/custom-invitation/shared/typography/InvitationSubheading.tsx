interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function InvitationSubheading({
  children,
  className = "",
}: Props) {
  return (
    <h2
      className={`
        font-[family:var(--font-cormorant)]
        text-[#C79B4B]
        font-medium

        text-[24px]
        leading-[1.05]

        sm:text-[30px]

        break-words
        whitespace-normal

        ${className}
      `}
    >
      {children}
    </h2>
  );
}