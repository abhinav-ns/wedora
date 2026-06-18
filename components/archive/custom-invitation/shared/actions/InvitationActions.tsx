"use client";

import RSVPButton from "../sections/RSVPButton";

import SecondaryInvitationButton from "../buttons/SecondaryInvitationButton";

interface Props {
  showRSVP?: boolean;

  showPreview?: boolean;
}

export default function InvitationActions({
  showRSVP = true,

  showPreview = true,
}: Props) {

  return (

    <div
      className="
        flex
        flex-wrap
        items-center
        gap-4
      "
    >

      {showRSVP && (
        <RSVPButton />
      )}

      {showPreview && (
        <SecondaryInvitationButton
          label="Preview Invite"
        />
      )}

    </div>

  );

}