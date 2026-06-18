"use client";

import InvitationHeading from "../typography/InvitationHeading";

import { useInvitationStyles } from "../../core/useInvitationStyles";

import { useResponsiveTypography } from "../../core/useResponsiveTypography";

interface Props {
  groomName: string;

  brideName: string;
}

export default function CoupleNames({
  groomName,
  brideName,
}: Props) {

  const { colors } =
    useInvitationStyles();

  const fullName =
    `${groomName} ${brideName}`;

  const typography =
    useResponsiveTypography(
      fullName,
    );

  return (

    <InvitationHeading
      className={typography.heading}
    >

      {groomName}

      <span
        className="mx-3"
        style={{
          color: colors.primary,
        }}
      >
        &
      </span>

      {brideName}

    </InvitationHeading>

  );

}