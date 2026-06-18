"use client";

import InvitationCardFrame from "../../shared/wrappers/InvitationCardFrame";

import InvitationBackground from "../../shared/wrappers/InvitationBackground";

import CoupleNames from "../../shared/sections/CoupleNames";

import InvitationQuote from "../../shared/sections/InvitationQuote";

import InvitationDetails from "../../shared/sections/InvitationDetails";

import InvitationActions from "../../shared/actions/InvitationActions";

import InvitationSubheading from "../../shared/typography/InvitationSubheading";

import { useInvitation } from "../../context/InvitationContext";

import { useInvitationStyles } from "../../core/useInvitationStyles";

export default function IvoryGoldInvitation() {

  const {
    invitation,
  } = useInvitation();

  const {
    colors,
  } = useInvitationStyles();

  return (

    <InvitationCardFrame>

      <InvitationBackground
        image={invitation.coverImage}
      />

      <div
        className="
          relative
          z-10

          grid

          lg:grid-cols-[1.05fr_0.95fr]
        "
      >

        {/* LEFT */}
        <div
          className="
            flex
            flex-col
            justify-center

            px-7
            py-8

            sm:px-10
            lg:px-12
          "
        >

          <div
            className="
              mb-5
              w-fit

              rounded-full

              px-4
              py-2

              text-[11px]
              font-semibold
              tracking-[0.18em]
            "
            style={{
              background:
                "#FFF4E4",

              color:
                colors.primary,
            }}
          >
            YOUR INVITATION
          </div>

          <InvitationSubheading>
            Eternal Elegance
          </InvitationSubheading>

          <p
            className="
              mt-1

              font-[family:var(--font-cormorant)]

              text-[28px]
              leading-none
            "
            style={{
              color:
                colors.primary,
            }}
          >
            {invitation.tagline}
          </p>

          <div className="mt-5">

            <CoupleNames
              groomName={
                invitation.groomName
              }
              brideName={
                invitation.brideName
              }
            />

          </div>

          <div className="mt-5">

            <InvitationQuote
              quote={
                invitation.description ||
                ""
              }
            />

          </div>

          <div className="mt-8">

            <InvitationDetails
              date={
                invitation.weddingDate
              }
              venue={`
                ${invitation.venue},
                ${invitation.city}
              `}
            />

          </div>

          <div className="mt-9">

            <InvitationActions />

          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
            relative

            min-h-[420px]
          "
        >

          <img
            src={
              invitation.previewImage ||
              "/images/invitations/ivory-gold/preview.png"
            }
            alt="Invitation Preview"
            className="
              h-full
              w-full
              object-cover
            "
          />

        </div>

      </div>

    </InvitationCardFrame>

  );

}