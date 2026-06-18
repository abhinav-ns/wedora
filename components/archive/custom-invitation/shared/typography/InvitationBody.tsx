interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function InvitationBody({
  children,
  className = "",
}: Props) {
  return (
    <p
      className={`
        font-[family:var(--font-inter)]
        text-[#5E5650]

        text-[14px]
        leading-[1.7]

        sm:text-[15px]

        ${className}
      `}
    >
      {children}
    </p>
  );
}