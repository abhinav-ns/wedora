"use client";

import Image from "next/image";

interface Props {

  image: string;

  title: string;

}

export default function AttachmentPreview({
  image,
  title,
}: Props) {

  return (

    <div
      className="
        mt-2

        overflow-hidden

        rounded-[14px]

        border
        border-white/10

        bg-black/5
      "
    >

      <div className="relative h-[150px] w-full">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

      </div>

      <div
        className="
          px-3
          py-2

          text-[11px]

          text-white/90
        "
      >

        {title}

      </div>

    </div>

  );

}