"use client";

import {
  createContext,
  useContext,
} from "react";

import { invitationData } from "../data/invitationData";

import { useInvitationTheme } from "../core/useInvitationTheme";

import { InvitationData } from "../types/invitation.types";

import { InvitationTheme } from "../types/theme.types";

interface InvitationContextType {

  invitation: InvitationData;

  theme: InvitationTheme;
}

const InvitationContext =
  createContext<
    InvitationContextType | undefined
  >(undefined);

interface Props {
  children: React.ReactNode;
}

export function InvitationProvider({
  children,
}: Props) {

  const theme =
    useInvitationTheme(
      invitationData.themeId,
    );

  return (

    <InvitationContext.Provider
      value={{
        invitation:
          invitationData,

        theme,
      }}
    >

      {children}

    </InvitationContext.Provider>

  );

}

export function useInvitation() {

  const context =
    useContext(
      InvitationContext,
    );

  if (!context) {

    throw new Error(
      "useInvitation must be used within InvitationProvider",
    );
  }

  return context;
}