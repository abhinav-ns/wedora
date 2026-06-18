interface Props {
  children: React.ReactNode;

  className?: string;
}

export default function InvitationSectionGroup({
  children,
  className = "",
}: Props) {

  return (

    <div
      className={`
        flex
        flex-col
        gap-5

        ${className}
      `}
    >

      {children}

    </div>

  );

}