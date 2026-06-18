"use client";

import { InvitationProvider } from "../context/InvitationContext";

import InvitationRenderer from "../core/InvitationRenderer";

export default function InvitationPreview() {

  return (

    <section className="w-full">

      <InvitationProvider>

        <InvitationRenderer />

      </InvitationProvider>

    </section>

  );

}