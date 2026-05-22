"use client";

interface Props {

  title: string;

  price: string;

  description: string;

}

export default function QuotationCard({
  title,
  price,
  description,
}: Props) {

  return (

    <div
      className="
        mt-2

        rounded-[16px]

        border
        border-white/10

        bg-white/10
        backdrop-blur-md

        overflow-hidden
      "
    >

      <div className="p-4">

        <div className="flex items-start justify-between gap-3">

          <div>

            <h3
              className="
                text-[14px]
                font-semibold
                text-white
              "
            >

              {title}

            </h3>

            <p
              className="
                mt-1

                text-[11px]
                leading-[1.5]

                text-white/75
              "
            >

              {description}

            </p>

          </div>

          <span
            className="
              text-[13px]
              font-semibold
              text-white
            "
          >

            {price}

          </span>

        </div>

        <div className="flex gap-2 mt-4">

          <button
            className="
              flex-1

              h-[38px]

              rounded-full

              bg-white

              text-[#111111]

              text-[12px]
              font-medium
            "
          >

            View Details

          </button>

          <button
            className="
              flex-1

              h-[38px]

              rounded-full

              bg-[#E6D0A7]

              text-[#111111]

              text-[12px]
              font-semibold
            "
          >

            Shortlist
          </button>

        </div>

      </div>

    </div>

  );

}