import {
  Bell,
  MapPin,
  CalendarDays,
} from "lucide-react";

export default function WeddingOverview() {

  return (

    <section>

      {/* TOP */}
      <div className="flex items-center justify-between">

        <div>

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.14em]
              text-[#B08A56]
            "
          >
            Wedora Planning
          </p>

          <h1
            className="
              mt-1
              text-[30px]
              leading-none
              tracking-[-0.06em]
              font-cormorant
              text-[#1A1715]
            "
          >
            Aarav & Diya
          </h1>

        </div>

        <button
          className="
            relative
            w-[42px]
            h-[42px]
            rounded-full
            bg-white/70
            border
            border-white/60
            backdrop-blur-xl
            flex
            items-center
            justify-center
            shadow-[0_4px_20px_rgba(0,0,0,0.04)]
          "
        >

          <Bell
            size={18}
            className="text-[#7B6C5C]"
          />

          <div
            className="
              absolute
              top-[10px]
              right-[11px]
              w-[7px]
              h-[7px]
              rounded-full
              bg-[#D4A35F]
            "
          />

        </button>

      </div>

      {/* HERO */}
      <div
        className="
          mt-4
          rounded-[34px]
          bg-[rgba(255,252,248,0.72)]
          border
          border-white/60
          backdrop-blur-[24px]
          p-4
          shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        "
      >

        <div className="flex gap-3">

          {/* IMAGE */}
          <div
            className="
              w-[88px]
              h-[120px]
              rounded-[24px]
              overflow-hidden
              shrink-0
            "
          >

            <img
              src="/images/invitation-preview.png"
              alt="Wedding"

              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

          {/* CONTENT */}
          <div className="flex-1 min-w-0">

            <div>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  text-[#B08A56]
                "
              >
                127 Days To Wedding
              </p>

              <h2
                className="
                  mt-2
                  text-[21px]
                  leading-[1.15]
                  tracking-[-0.04em]
                  text-[#1A1715]
                  font-semibold
                "
              >
                Grand Palace Wedding Celebration
              </h2>

            </div>

            {/* META */}
            <div className="mt-4 space-y-2">

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[12px]
                  text-[#7A6C5D]
                "
              >

                <CalendarDays size={14} />

                <span>25 December 2025</span>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[12px]
                  text-[#7A6C5D]
                "
              >

                <MapPin size={14} />

                <span>Jaipur, Rajasthan</span>

              </div>

            </div>

            {/* BUTTON */}
            <button
              className="
                mt-4
                h-[40px]
                px-5
                rounded-full
                bg-gradient-to-r
                from-[#BB8D4F]
                to-[#D6B176]
                text-white
                text-[13px]
                font-medium
                shadow-[0_8px_20px_rgba(187,141,79,0.18)]
                active:scale-[0.98]
                transition-all
              "
            >
              Open Wedding
            </button>

          </div>

        </div>

      </div>

    </section>

  );

}