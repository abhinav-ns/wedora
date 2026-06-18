"use client";

import Image from "next/image";

interface Props {
  image: string;
}

export default function InvitationBackground({
  image,
}: Props) {

  return (

    <div
      className="
        absolute
        inset-0
        opacity-[0.06]
      "
    >

      <Image
        src={image}
        alt="Invitation Background"
        fill
        priority
        className="object-cover"
      />

    </div>

  );

}