"use client";

import { useInvitation } from "../context/InvitationContext";

export function useInvitationStyles() {

  const { theme } =
    useInvitation();

  return {

    colors:
      theme.colors,

    radius:
      theme.radius,

    shadow:
      theme.shadow,
  };

}