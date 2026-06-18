"use client";

import { ivoryGoldTheme } from "../templates/ivory-gold/theme";

export function useInvitationTheme(
  themeId: string,
) {

  switch (themeId) {

    case "ivory-gold":

      return ivoryGoldTheme;

    default:

      return ivoryGoldTheme;
  }

}