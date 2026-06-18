interface Props {
  children: React.ReactNode;

  className?: string;
}

export default function InvitationGlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[32px]

        border border-[#EFE3D3]

        bg-[#FFFCF8]

        shadow-[0_20px_60px_rgba(0,0,0,0.05)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}