"use client";

import Image from "next/image";

interface Props {

  sender: "user" | "vendor";

  text?: string;

  time: string;

  image?: string;

  title?: string;

  type?: "quotation";

  quotation?: {

    title: string;

    price: string;

    description: string;

  };

}

export default function MessageBubble({
  sender,
  text,
  time,
  image,
  title,
  type,
  quotation,
}: Props) {

  const isUser =
    sender === "user";

  /* =========================
     QUOTATION CARD
  ========================= */

  if (
    type === "quotation" &&
    quotation
  ) {

    return (

      <div
        className={`
          flex

          ${
            isUser
              ? "justify-end"
              : "justify-start"
          }
        `}
      >

        <div
          className="
            w-[270px]

            bg-white

            border
            border-[#EFE4D8]

            rounded-[20px]

            p-4
          "
        >

          <span
            className="
              text-[10px]

              uppercase

              tracking-[0.12em]

              text-[#C79E6B]
            "
          >

            Premium Proposal

          </span>

          <h3
            className="
              mt-2

              text-[16px]
              font-semibold

              text-[#111111]
            "
          >

            {quotation.title}

          </h3>

          <p
            className="
              mt-2

              text-[13px]
              leading-[1.55]

              text-[#7F7367]
            "
          >

            {quotation.description}

          </p>

          <div
            className="
              mt-4

              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                text-[18px]
                font-semibold

                text-[#C8A96B]
              "
            >

              {quotation.price}

            </span>

            <button
              className="
                h-[38px]

                px-4

                rounded-full

                bg-[#C8A96B]

                text-white
                text-[12px]
                font-medium
              "
            >

              View Details

            </button>

          </div>

        </div>

      </div>

    );

  }

  return (

    <div
      className={`
        flex

        ${
          isUser
            ? "justify-end"
            : "justify-start"
        }
      `}
    >

      <div
        className={`
          max-w-[78%]

          px-4
          py-3

          rounded-[18px]

          ${
            isUser
              ? `
                bg-[#C8A96B]
                text-white
                rounded-br-[6px]
              `
              : `
                bg-white
                text-[#111111]
                border
                border-[#EFE4D8]
                rounded-bl-[6px]
              `
          }
        `}
      >

        {/* IMAGE */}

        {image && (

          <div
            className="
              mb-3

              overflow-hidden

              rounded-[14px]
            "
          >

            <Image
              src={image}
              alt={title || "image"}
              width={500}
              height={300}
              className="
                w-full
                h-auto
                object-cover
              "
            />

          </div>

        )}

        {/* TITLE */}

        {title && (

          <h3
            className="
              mb-2

              text-[14px]
              font-semibold
            "
          >

            {title}

          </h3>

        )}

        {/* TEXT */}

        {text && (

          <p
            className="
              text-[13px]
              leading-[1.55]
            "
          >

            {text}

          </p>

        )}

        {/* TIME */}

        <span
          className={`
            mt-2

            block

            text-[10px]

            ${
              isUser
                ? "text-white/75"
                : "text-[#9F9387]"
            }
          `}
        >

          {time}

        </span>

      </div>

    </div>

  );

}