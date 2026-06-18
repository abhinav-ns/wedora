"use client";

import WeddingDate from "../sections/WeddingDate";

import WeddingVenue from "../sections/WeddingVenue";

interface Props {
  date: string;

  venue: string;
}

export default function InvitationDetails({
  date,
  venue,
}: Props) {

  return (

    <div
      className="
        flex
        flex-col
        gap-4
      "
    >

      <WeddingDate
        date={date}
      />

      <WeddingVenue
        venue={venue}
      />

    </div>

  );

}