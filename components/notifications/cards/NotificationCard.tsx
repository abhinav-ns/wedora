"use client";

import Image from "next/image";

import NotificationBadge from "../ui/NotificationBadge";

interface Props {

  name?: string;

  role?: string;

  message?: string;

  time: string;

  unread?: number;

  avatar?: string;

  title?: string;

  description?: string;

  type: "message" | "update";

}

export default function NotificationCard({
  name,
  role,
  message,
  time,
  unread = 0,
  avatar,
  title,
  description,
  type,
}: Props) {

  return (

    <div
      className={`
        relative

        bg-white/82

        backdrop-blur-xl

        rounded-[14px]

        border
        border-[#EFE4D8]

        px-3
        py-[9px]

        flex
        gap-[10px]

        shadow-[0_2px_10px_rgba(0,0,0,0.02)]

        transition-all
        duration-200

        active:scale-[0.985]

        ${
          unread > 0
            ? "border-l-[3px] border-l-[#C8A96B]"
            : ""
        }
      `}
    >

      {/* AVATAR */}

      <div
        className="
          w-[42px]
          h-[42px]

          rounded-full

          overflow-hidden

          bg-[#F4ECE4]

          flex-shrink-0
        "
      >

        {avatar ? (

          <Image
            src={avatar}
            alt="avatar"
            width={42}
            height={42}
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
              text-[15px]
            "
          >

            W

          </div>

        )}

      </div>

      {/* CONTENT */}

      <div className="flex-1 min-w-0">

        {type === "message" ? (

          <div className="flex items-start justify-between gap-2">

            <div className="min-w-0">

              <div className="flex items-center gap-[6px] flex-wrap">

                <h3
                  className="
                    text-[13px]
                    leading-none
                    font-semibold
                    text-[#111111]
                  "
                >

                  {name}

                </h3>

                <span
                  className="
                    px-[7px]
                    py-[2px]

                    rounded-full

                    bg-[#F7F0E7]

                    text-[#C79E6B]
                    text-[8px]
                    font-medium
                  "
                >

                  {role}

                </span>

              </div>

              <p
                className="
                  mt-[5px]

                  text-[11px]
                  leading-[1.45]

                  text-[#7F7367]
                "
              >

                {message}

              </p>

            </div>

            <div className="flex flex-col items-end gap-[6px]">

              <span
                className="
                  text-[10px]
                  whitespace-nowrap
                  text-[#A89A8D]
                "
              >

                {time}

              </span>

              <NotificationBadge count={unread} />

            </div>

          </div>

        ) : (

          <div className="flex items-start justify-between gap-2">

            <div>

              <h3
                className="
                  text-[13px]
                  font-semibold
                  text-[#111111]
                "
              >

                {title}

              </h3>

              <p
                className="
                  mt-[5px]

                  text-[11px]
                  leading-[1.45]

                  text-[#7F7367]
                "
              >

                {description}

              </p>

            </div>

            <span
              className="
                text-[10px]
                whitespace-nowrap
                text-[#A89A8D]
              "
            >

              {time}

            </span>

          </div>

        )}

      </div>

    </div>

  );

}