"use client";

import Image from "next/image";

import { Heart } from "lucide-react";

type FeaturedCollectionCardProps = {
  image: string;
  title1: string;
  title2: string;
  label: string;
};

export default function FeaturedCollectionCard({
  image,
  title1,
  title2,
  label,
}: FeaturedCollectionCardProps) {

  return (

    <div
      className="
        relative

        overflow-hidden

        rounded-[28px]

        h-[220px]
      "
    >

      <Image
        src={image}
        alt={title1}
        fill
        className="object-cover"
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/75
          via-black/10
          to-transparent
        "
      />

      {/* SAVE BUTTON */}

      <button
        className="
          absolute
          top-4
          right-4

          w-[38px]
          h-[38px]

          rounded-full

          bg-white/14
          backdrop-blur-md

          border
          border-white/10

          flex
          items-center
          justify-center
        "
      >

        <Heart
          size={16}
          className="text-white"
        />

      </button>

      {/* CONTENT */}

      <div
        className="
          absolute
          left-5
          right-5
          bottom-5
        "
      >

        <div
          className="
            w-fit

            px-[12px]
            py-[7px]

            rounded-full

            bg-white/12
            backdrop-blur-md

            border
            border-white/10

            text-[10px]
            uppercase

            tracking-[0.18em]

            text-white/90
          "
        >

          {label}

        </div>

        <h2
          className="
            mt-4

            text-[28px]
            leading-[0.95]

            tracking-[-0.06em]

            font-semibold

            text-white
          "
        >

          {title1}
          <br />

          {title2}

        </h2>

      </div>

    </div>

  );

}