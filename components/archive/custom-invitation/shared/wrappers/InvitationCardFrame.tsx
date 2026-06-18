"use client";

import { useInvitationStyles } from "../../core/useInvitationStyles";

interface Props {
  children: React.ReactNode;

  className?: string;
}

export default function InvitationCardFrame({
  children,
  className = "",
}: Props) {

  const {
    colors,
    shadow,
    radius,
  } = useInvitationStyles();

  return (

    <div
      className={`
        relative
        overflow-hidden

        border

        ${className}
      `}
      style={{
        borderColor: colors.border,

        background:
          colors.background,

        borderRadius:
          radius.card,

        boxShadow:
          shadow.primary,
      }}
    >

      {children}

    </div>

  );

}