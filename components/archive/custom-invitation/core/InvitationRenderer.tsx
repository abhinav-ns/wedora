"use client";

import { useInvitation } from "../context/InvitationContext";

import IvoryGoldInvitation from "../templates/ivory-gold/IvoryGoldInvitation";

export default function InvitationRenderer() {

  const { invitation } =
    useInvitation();

  switch (
    invitation.themeId
  ) {

    case "ivory-gold":

      return (
        <IvoryGoldInvitation />
      );

    default:

      return (
        <IvoryGoldInvitation />
      );
  }

}