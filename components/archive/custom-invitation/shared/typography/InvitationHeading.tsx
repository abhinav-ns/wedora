"use client";

import { useInvitationStyles } from "../../core/useInvitationStyles";

interface Props {
  children: React.ReactNode;

  className?: string;
}

export default function InvitationHeading({
  children,
  className = "",
}: Props) {

  const { colors } =
    useInvitationStyles();

  return (

    <h1
      className={`
        font-[family:var(--font-cormorant)]

        font-semibold

        tracking-[-0.04em]

        leading-[0.95]

        break-words
        whitespace-normal

        transition-all
        duration-300

        ${className}
      `}
      style={{
        color:
          colors.secondary,
      }}
    >

      {children}

    </h1>

  );

}