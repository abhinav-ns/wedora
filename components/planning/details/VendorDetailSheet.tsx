"use client"

interface VendorDetailSheetProps {

  isOpen: boolean

  onClose: () => void

  vendor: {
    name: string
    category: string
    image: string
    status: string
    progress: number
    payment: string
    arrival: string
  } | null

}

export default function VendorDetailSheet({

  isOpen,

  onClose,

  vendor,

}: VendorDetailSheetProps) {

  if (!vendor) return null

  return (

    <div
      className={`
        fixed
        inset-0

        z-[100]

        transition-all
        duration-300

        ${
          isOpen
            ? "pointer-events-auto"
            : "pointer-events-none opacity-0"
        }
      `}
    >

      {/* BACKDROP */}
      <div
        onClick={onClose}

        className="
          absolute
          inset-0

          bg-black/40

          backdrop-blur-sm
        "
      />

      {/* SHEET */}
      <div
        className={`
          absolute
          bottom-0
          left-0
          right-0

          rounded-t-[34px]

          bg-[#FFFDF9]

          transition-all
          duration-500

          ${
            isOpen
              ? "translate-y-0"
              : "translate-y-full"
          }
        `}
      >

        {/* HANDLE */}
        <div
          className="
            flex
            justify-center

            pt-3
          "
        >

          <div
            className="
              w-[70px]
              h-[5px]

              rounded-full

              bg-[#E7D9C7]
            "
          />

        </div>

        <div className="p-5 pb-10">

          {/* HEADER */}
          <div className="flex gap-4">

            {/* IMAGE */}
            <div
              className="
                w-[92px]
                h-[120px]

                rounded-[24px]

                overflow-hidden

                shrink-0
              "
            >

              <img
                src={vendor.image}
                alt={vendor.name}

                className="
                  w-full
                  h-full

                  object-cover
                "
              />

            </div>

            {/* INFO */}
            <div className="flex-1">

              <p
                className="
                  text-[11px]

                  uppercase
                  tracking-[0.08em]

                  text-[#B18B47]
                "
              >
                {vendor.category}
              </p>

              <h2
                className="
                  mt-2

                  text-[28px]
                  leading-[1.05]

                  tracking-[-0.06em]

                  font-semibold

                  text-[#171717]
                "
              >
                {vendor.name}
              </h2>

              <div
                className="
                  mt-4

                  inline-flex
                  items-center
                  gap-2

                  px-3
                  py-2

                  rounded-full

                  bg-[#F8F1E6]

                  border
                  border-[#EFE4D7]
                "
              >

                <span
                  className="
                    text-[11px]
                    font-semibold

                    text-[#B88949]
                  "
                >
                  {vendor.status}
                </span>

              </div>

            </div>

          </div>

          {/* EXECUTION */}
          <div
            className="
              mt-6

              rounded-[24px]

              border
              border-[#F1E8DC]

              bg-[#FFFCF8]

              p-4
            "
          >

            <div className="flex items-center justify-between">

              <p
                className="
                  text-[12px]

                  text-[#7B6A57]
                "
              >
                Execution Progress
              </p>

              <p
                className="
                  text-[13px]
                  font-semibold

                  text-[#B88949]
                "
              >
                {vendor.progress}%
              </p>

            </div>

            <div
              className="
                mt-3

                h-[8px]

                rounded-full

                overflow-hidden

                bg-[#EFE4D7]
              "
            >

              <div
                style={{
                  width: `${vendor.progress}%`,
                }}
                className="
                  h-full

                  rounded-full

                  bg-gradient-to-r
                  from-[#B88949]
                  to-[#D8B06B]
                "
              />

            </div>

          </div>

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-3 mt-4">

            <div
              className="
                rounded-[20px]

                border
                border-[#F1E8DC]

                bg-[#FFFCF8]

                p-4
              "
            >

              <p
                className="
                  text-[11px]

                  uppercase
                  tracking-[0.08em]

                  text-[#B18B47]
                "
              >
                Payment
              </p>

              <h3
                className="
                  mt-2

                  text-[18px]
                  font-semibold

                  text-[#171717]
                "
              >
                {vendor.payment}
              </h3>

            </div>

            <div
              className="
                rounded-[20px]

                border
                border-[#F1E8DC]

                bg-[#FFFCF8]

                p-4
              "
            >

              <p
                className="
                  text-[11px]

                  uppercase
                  tracking-[0.08em]

                  text-[#B18B47]
                "
              >
                Arrival
              </p>

              <h3
                className="
                  mt-2

                  text-[18px]
                  font-semibold

                  text-[#171717]
                "
              >
                {vendor.arrival}
              </h3>

            </div>

          </div>

          {/* AI INSIGHTS */}
          <div
            className="
              mt-4

              rounded-[24px]

              border
              border-[#F1E8DC]

              bg-[#FBF7F1]

              p-4
            "
          >

            <p
              className="
                text-[11px]

                uppercase
                tracking-[0.08em]

                text-[#B18B47]
              "
            >
              AI Coordination Insight
            </p>

            <p
              className="
                mt-3

                text-[14px]
                leading-[1.7]

                text-[#171717]
              "
            >
              Vendor execution is synchronized with
              timeline operations, hospitality readiness
              and ceremony sequencing systems.
            </p>

          </div>

          {/* ACTIONS */}
          <div className="grid grid-cols-2 gap-3 mt-5">

            <button
              className="
                h-[52px]

                rounded-full

                border
                border-[#E9DCCB]

                bg-white

                text-[14px]
                font-semibold

                text-[#7A6B5A]
              "
            >
              Contact Vendor
            </button>

            <button
              className="
                h-[52px]

                rounded-full

                bg-gradient-to-r
                from-[#B88949]
                to-[#D8B06B]

                text-white

                text-[14px]
                font-semibold

                shadow-[0_10px_26px_rgba(185,137,73,0.22)]
              "
            >
              Open Operations
            </button>

          </div>

        </div>

      </div>

    </div>

  )

}