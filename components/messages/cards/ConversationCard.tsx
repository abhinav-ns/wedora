"use client";

import Image from "next/image";

import Link from "next/link";

import { ROUTES } from "@/constants/routes";

interface Props {

  id: number;

  name: string;

  role: string;

  lastMessage: string;

  time: string;

  unread: number;

  avatar?: string;

}

export default function ConversationCard({
  id,
  name,
  role,
  lastMessage,
  time,
  unread,
  avatar,
}: Props) {

  return (

    <Link
      href={ROUTES.main.messageDetail(id)}
      className="block"
    >

      <div
        className="
          bg-white/80

          border
          border-[#EFE4D8]

          rounded-[18px]

          px-3
          py-3

          flex
          items-center
          gap-3
        "
      >

        {/* AVATAR */}

        <div
          className="
            w-[48px]
            h-[48px]

            rounded-full

            overflow-hidden

            bg-[#F4ECE4]

            flex-shrink-0
          "
        >

          {avatar ? (

            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />

          ) : (

            <div
              className="
                w-full
                h-full

                flex
                items-center
                justify-center

                text-[#C79E6B]
                font-semibold
              "
            >

              W

            </div>

          )}

        </div>

        {/* CONTENT */}

        <div className="flex-1 min-w-0">

          <div className="flex items-center justify-between gap-2">

            <div className="flex items-center gap-2">

              <h3
                className="
                  text-[14px]
                  font-semibold
                  text-[#111111]
                "
              >

                {name}

              </h3>

              <span
                className="
                  px-2
                  py-[2px]

                  rounded-full

                  bg-[#F7F0E7]

                  text-[#C79E6B]
                  text-[9px]
                  font-medium
                "
              >

                {role}

              </span>

            </div>

            <span
              className="
                text-[10px]
                text-[#A89A8D]
                whitespace-nowrap
              "
            >

              {time}

            </span>

          </div>

          <div className="flex items-center justify-between mt-1">

            <p
              className="
                text-[12px]
                text-[#7F7367]

                truncate
                pr-2
              "
            >

              {lastMessage}

            </p>

            {unread > 0 && (

              <div
                className="
                  w-[22px]
                  h-[22px]

                  rounded-full

                  bg-[#C8A96B]

                  flex
                  items-center
                  justify-center

                  text-white
                  text-[10px]
                  font-semibold
                "
              >

                {unread}

              </div>

            )}

          </div>

        </div>

      </div>

    </Link>

  );

}
