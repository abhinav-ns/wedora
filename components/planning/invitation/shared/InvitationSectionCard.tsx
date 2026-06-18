interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function InvitationSectionCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[24px]
        border border-[#EFE7DD]
        bg-[#FFFCF9]
        p-4
        shadow-[0_4px_18px_rgba(0,0,0,0.03)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}