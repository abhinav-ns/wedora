"use client";

import Image from "next/image";

import {
  Heart,
  Star,
  ChevronRight,
} from "lucide-react";

type VendorListCardProps = {
  name: string;
  description: string;
  image: string;
  tag: string;
  price: string;
};

export default function VendorListCard({
  name,
  description,
  image,
  tag,
  price,
}: VendorListCardProps) {

  return (

    <button
      className="
        group

        flex
        gap-3

        rounded-[24px]

        border
        border-[#EFE4D8]

        bg-white/78

        p-[10px]

        text-left

        transition-all
        duration-300
      "
    >

      {/* IMAGE */}

      <div
        className="
          relative

          w-[110px]
          h-[110px]

          overflow-hidden

          rounded-[18px]

          flex-shrink-0
        "
      >

        <Image
          src={image}
          alt={name}
          fill
          className="
            object-cover

            transition-transform
            duration-500

            group-hover:scale-[1.04]
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/35
            to-transparent
          "
        />

        <div
          className="
            absolute
            left-2
            top-2

            px-[10px]
            py-[5px]

            rounded-full

            bg-white/14
            backdrop-blur-md

            border
            border-white/10

            text-[9px]
            uppercase

            tracking-[0.16em]

            text-white
          "
        >

          {tag}

        </div>

      </div>

      {/* CONTENT */}

      <div className="flex-1 py-[2px]">

        <div className="flex items-start justify-between">

          <h3
            className="
              text-[18px]
              leading-[1]

              tracking-[-0.04em]

              font-semibold

              text-[#111111]
            "
          >

            {name}

          </h3>

          <Heart
            size={16}
            className="text-[#C6B6A5]"
          />

        </div>

        <div
          className="
            flex
            items-center
            gap-[5px]

            mt-3
          "
        >

          <Star
            size={12}
            fill="#D5A14D"
            className="text-[#D5A14D]"
          />

          <p
            className="
              text-[11px]
              font-medium

              text-[#A07C4A]
            "
          >

            4.9 Rating

          </p>

        </div>

        <p
          className="
            mt-3

            text-[12px]
            leading-[1.55]

            text-[#7E746C]
          "
        >

          {description}

        </p>

        <div
          className="
            flex
            items-center
            gap-2

            mt-4
          "
        >

          <p
            className="
              text-[12px]
              font-semibold

              text-[#111111]
            "
          >

            {price}

          </p>

          <ChevronRight
            size={14}
            className="text-[#B98B49]"
          />

        </div>

      </div>

    </button>

  );

}