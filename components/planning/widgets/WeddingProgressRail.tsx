"use client";

import { useMemo, useState } from "react";

import {
  Wallet,
  MapPin,
  Mail,
  UtensilsCrossed,
  Sparkles,
  Clock3,
  Check,
} from "lucide-react";

/* =========================
   WEDDING STEPS
========================= */

const initialSteps = [
  {
    id: "budget",
    title: "Budget",
    icon: Wallet,
  },

  {
    id: "venue",
    title: "Venue",
    icon: MapPin,
  },

  {
    id: "invites",
    title: "Invites",
    icon: Mail,
  },

  {
    id: "dining",
    title: "Dining",
    icon: UtensilsCrossed,
  },

  {
    id: "decor",
    title: "Decor",
    icon: Sparkles,
  },

  {
    id: "timeline",
    title: "Timeline",
    icon: Clock3,
    fixedEnd: true,
  },
];

export default function WeddingProgressRail() {

  /* =========================
     COMPLETED STATE
  ========================= */

  const [completed, setCompleted] =
    useState<string[]>([]);

  /* =========================
     TIMELINE MODAL
  ========================= */

  const [
    showTimelineConfirm,
    setShowTimelineConfirm,
  ] = useState(false);

  /* =========================
     SORTED STEPS
  ========================= */

  const orderedSteps = useMemo(() => {

    const timeline = initialSteps.find(
      (s) => s.fixedEnd
    );

    const normalSteps = initialSteps.filter(
      (s) => !s.fixedEnd
    );

    const completedSteps = normalSteps.filter(
      (s) => completed.includes(s.id)
    );

    const pendingSteps = normalSteps.filter(
      (s) => !completed.includes(s.id)
    );

    return [
      ...completedSteps,
      ...pendingSteps,
      timeline!,
    ];

  }, [completed]);

  /* =========================
     COMPLETE STEP
  ========================= */

  const completeStep = (id: string) => {

    if (completed.includes(id)) return;

    /* TIMELINE CONFIRM */

    if (id === "timeline") {
      setShowTimelineConfirm(true);
      return;
    }

    setTimeout(() => {

      setCompleted((prev) => [...prev, id]);

    }, 450);

  };

  /* =========================
     FINALIZE TIMELINE
  ========================= */

  const finalizeTimeline = () => {

    setShowTimelineConfirm(false);

    setTimeout(() => {

      setCompleted((prev) => [
        ...prev,
        "timeline",
      ]);

    }, 350);

  };

  return (

    <section className="mt-7 px-[18px]">

      {/* =========================
          CONTAINER
      ========================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-br
          from-[#F3E8DB]
          via-[#EADACA]
          to-[#E1CEBB]
          border
          border-white/60
          shadow-[0_12px_32px_rgba(0,0,0,0.04)]
          px-5
          py-5
        "
      >

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-5">

          <h2
            className="
              text-[22px]
              font-semibold
              tracking-[-0.04em]
              text-[#171717]
              leading-[1]
            "
          >
            Build Your Wedding Plan
          </h2>

          <p
            className="
              mt-[4px]
              text-[13px]
              text-[#9A9085]
            "
          >
            Organize every important wedding moment
          </p>

        </div>

        {/* =========================
            PROGRESS RAIL
        ========================= */}

        <div
          className="
            flex
            items-start
            overflow-x-auto
            no-scrollbar
            scroll-smooth
            pb-1
          "
        >

          {/* STARTING POINT */}

          <div
            className="
              flex
              items-start
              shrink-0
            "
          >

            {/* START DOT */}

            <div
              className="
                flex
                flex-col
                items-center
                min-w-[22px]
              "
            >

              <div
                className="
                  w-[13px]
                  h-[13px]
                  rounded-full
                  bg-[#C8A96B]
                  mt-[16px]
                  shadow-[0_0_10px_rgba(200,169,107,0.45)]
                "
              />

            </div>

            {/* HALF PROGRESS LINE */}

            <div
              className="
                relative
                w-[38px]
                h-[3px]
                mt-[22px]
                rounded-full
                bg-[#DED6CD]
                overflow-hidden
              "
            >

              {/* STATIC HALF */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1/2
                  bg-[#C8A96B]
                  rounded-full
                "
              />

              {/* ANIMATED HALF */}

              <div
                className={`
                  absolute
                  left-1/2
                  top-0
                  h-full
                  rounded-full
                  bg-[#C8A96B]
                  transition-all
                  duration-[1400ms]
                  ease-out
                  ${
                    completed.length > 0
                      ? "w-1/2"
                      : "w-0"
                  }
                `}
              />

            </div>

          </div>

          {/* =========================
              STEPS
          ========================= */}

          {orderedSteps.map((step, i) => {

            const Icon = step.icon;

            const isCompleted =
              completed.includes(step.id);

            const isLast =
              i === orderedSteps.length - 1;

            return (

              <div
                key={step.id}
                className="
                  flex
                  items-start
                  shrink-0
                  transition-all
                  duration-700
                  ease-out
                "
              >

                {/* STEP */}

                <div
                  className="
                    flex
                    flex-col
                    items-center
                    min-w-[58px]
                  "
                >

                  {/* BUTTON */}

                  <button
                    onClick={() =>
                      completeStep(step.id)
                    }
                    className={`
                      relative
                      w-[48px]
                      h-[48px]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500

                      ${
                        isCompleted
                          ? `
                            bg-[#C8A96B]
                            shadow-[0_8px_18px_rgba(200,169,107,0.25)]
                          `
                          : `
                            bg-[#F7F2EC]
                            border
                            border-[#E6DDD3]
                          `
                      }
                    `}
                  >

                    {isCompleted ? (

                      <Check
                        size={20}
                        strokeWidth={2.8}
                        className="text-white"
                      />

                    ) : (

                      <Icon
                        size={20}
                        strokeWidth={2.2}
                        className="text-[#8B8177]"
                      />

                    )}

                  </button>

                  {/* LABEL */}

                  <p
                    className={`
                      mt-[8px]
                      text-[10px]
                      font-medium
                      transition-all
                      duration-500

                      ${
                        isCompleted
                          ? "text-[#C8A96B]"
                          : "text-[#8E857B]"
                      }
                    `}
                  >

                    {step.title}

                  </p>

                </div>

                {/* CONNECTOR */}

                {!isLast && (

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-[40px]
                      mt-[24px]
                    "
                  >

                    <div
                      className="
                        w-[calc(100%-6px)]
                        mx-[3px]
                        h-[3px]
                        rounded-full
                        transition-all
                        duration-[1400ms]
                        ease-out
                      "
                      style={{
                        backgroundColor: isCompleted
                          ? "#C8A96B"
                          : "#DED6CD",
                      }}
                    />

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

      {/* =========================
          TIMELINE CONFIRM MODAL
      ========================= */}

      {showTimelineConfirm && (

        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/30
            backdrop-blur-[6px]
            px-6
          "
        >

          <div
            className="
              w-full
              max-w-[340px]
              rounded-[32px]
              bg-[#F6EEE5]
              border
              border-white/60
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              p-6
            "
          >

            {/* ICON */}

            <div
              className="
                w-[68px]
                h-[68px]
                mx-auto
                rounded-full
                bg-gradient-to-br
                from-[#D8B57A]
                to-[#BE9758]
                flex
                items-center
                justify-center
                shadow-[0_12px_28px_rgba(190,151,88,0.28)]
              "
            >

              <Clock3
                size={30}
                strokeWidth={2.3}
                className="text-white"
              />

            </div>

            {/* TITLE */}

            <h3
              className="
                mt-5
                text-center
                text-[24px]
                font-semibold
                tracking-[-0.03em]
                text-[#1B1B1B]
              "
            >
              Finalize Timeline?
            </h3>

            {/* DESCRIPTION */}

            <p
              className="
                mt-3
                text-center
                text-[14px]
                leading-[1.6]
                text-[#85796B]
              "
            >
              This marks your wedding plan as
              fully prepared for the ceremony day.
            </p>

            {/* ACTIONS */}

            <div
              className="
                mt-6
                flex
                gap-3
              "
            >

              {/* CANCEL */}

              <button
                onClick={() =>
                  setShowTimelineConfirm(false)
                }
                className="
                  flex-1
                  h-[52px]
                  rounded-[18px]
                  bg-[#EFE4D7]
                  text-[#7D7062]
                  text-[15px]
                  font-medium
                  transition-all
                  duration-300
                  active:scale-[0.98]
                "
              >
                Not Yet
              </button>

              {/* FINALIZE */}

              <button
                onClick={finalizeTimeline}
                className="
                  flex-1
                  h-[52px]
                  rounded-[18px]
                  bg-gradient-to-r
                  from-[#D6B072]
                  to-[#BE9758]
                  text-white
                  text-[15px]
                  font-semibold
                  shadow-[0_10px_24px_rgba(190,151,88,0.28)]
                  transition-all
                  duration-300
                  active:scale-[0.98]
                "
              >
                Finalize
              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  );
}