"use client";

import { useMemo, useState } from "react";

import {
  Wallet,
  Users,
  Building2,
  UtensilsCrossed,
  Camera,
  ClipboardList,
  Gem,
  Check,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

type StepType = {
  id: string;
  title: string;
  icon: any;
  completed: boolean;
};

const INITIAL_STEPS: StepType[] = [
  {
    id: "f0",
    title: "Started",
    icon: Gem,
    completed: true,
  },

  {
    id: "budget",
    title: "Budget",
    icon: Wallet,
    completed: false,
  },

  {
    id: "venue",
    title: "Venue",
    icon: Building2,
    completed: false,
  },

  {
    id: "guests",
    title: "Guests",
    icon: Users,
    completed: false,
  },

  {
    id: "decor",
    title: "Decor",
    icon: ClipboardList,
    completed: false,
  },

  {
    id: "food",
    title: "Food",
    icon: UtensilsCrossed,
    completed: false,
  },

  {
    id: "moments",
    title: "Moments",
    icon: Camera,
    completed: false,
  },
];

export default function WeddingPlanSection() {

  const [steps, setSteps] =
    useState(INITIAL_STEPS);

  const completeStep = (id: string) => {

    if (id === "f0") return;

    setSteps((prev) => {

      const updated = prev.map((step) =>
        step.id === id
          ? {
              ...step,
              completed: true,
            }
          : step
      );

      const f0 = updated.find(
        (step) => step.id === "f0"
      );

      const completed = updated.filter(
        (step) =>
          step.completed &&
          step.id !== "f0"
      );

      const pending = updated.filter(
        (step) => !step.completed
      );

      return [
        f0!,
        ...completed,
        ...pending,
      ];
    });
  };

  const progress = useMemo(() => {

    const total =
      steps.length - 1;

    const completed =
      steps.filter(
        (step) =>
          step.completed &&
          step.id !== "f0"
      ).length;

    return Math.round(
      (completed / total) * 100
    );
  }, [steps]);

  return (

    <section className="mt-7 px-[18px]">

      <div
        className="
          relative

          overflow-hidden

          rounded-[28px]

          border
          border-[#EFE4D8]

          bg-[linear-gradient(135deg,#F8F4EE_0%,#F5F0E8_55%,#F8F4EE_100%)]

          px-5
          py-4
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_right,rgba(214,176,107,0.08),transparent_38%)]

            pointer-events-none
          "
        />

        <div className="relative z-10">

          {/* HEADER */}

          <div className="flex items-start justify-between">

            <div>

              <h2
                className="
                  text-[16px]
                  font-semibold
                  tracking-[-0.04em]

                  text-[#111111]
                "
              >

                Build Your Wedding Plan

              </h2>

              <p
                className="
                  mt-[1px]

                  text-[11px]
                  leading-[1.45]

                  text-[#8A7B6D]
                "
              >

                Track your wedding journey beautifully

              </p>

            </div>

            {/* PROGRESS */}

            <div
              className="
                w-[44px]
                h-[44px]

                rounded-full

                border-[4px]
                border-[#D6B06B]

                bg-white/75

                flex
                items-center
                justify-center

                text-[11px]
                font-semibold

                text-[#B98B49]

                flex-shrink-0
              "
            >

              {progress}%

            </div>

          </div>

          {/* TIMELINE */}

          <div
            className="
              mt-5

              overflow-x-auto
              no-scrollbar

              touch-pan-x
            "
          >

            <div
              className="
                flex
                items-start

                min-w-max

                pr-[70px]
                pt-[2px]
                pb-[2px]
              "
            >

              <AnimatePresence>

                {steps.map(
                  (step, index) => {

                    const Icon =
                      step.icon;

                    return (

                      <motion.div
                        key={step.id}
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 18,
                        }}
                        className="
                          flex
                          items-start

                          shrink-0
                        "
                      >

                        {/* NODE */}

                        <div
                          className="
                            flex
                            flex-col
                            items-center
                          "
                        >

                          <motion.button
                            whileTap={{
                              scale: 0.96,
                            }}
                            onClick={() =>
                              completeStep(
                                step.id
                              )
                            }
                            style={{
                              WebkitTapHighlightColor:
                                "transparent",
                            }}
                            className={`
                              relative

                              w-[50px]
                              h-[50px]

                              rounded-full

                              flex
                              items-center
                              justify-center

                              transition-all
                              duration-500

                              ${
                                step.completed
                                  ? `
                                    bg-gradient-to-br
                                    from-[#DAB46F]
                                    to-[#BE8F45]

                                    shadow-[0_5px_14px_rgba(190,143,69,0.18)]
                                  `
                                  : `
                                    bg-white/78

                                    border
                                    border-[#EFE3D6]
                                  `
                              }
                            `}
                          >

                            {/* ICON */}

                            <Icon
                              size={18}
                              strokeWidth={2.1}
                              className={
                                step.completed
                                  ? "text-white"
                                  : "text-[#9D7A47]"
                              }
                            />

                            {/* CHECK */}

                            {step.completed &&
                              step.id !==
                                "f0" && (

                                <motion.div
                                  initial={{
                                    scale: 0,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    scale: 1,
                                    opacity: 1,
                                  }}
                                  transition={{
                                    duration: 0.25,
                                  }}
                                  className="
                                    absolute

                                    -right-[2px]
                                    -top-[2px]

                                    w-[16px]
                                    h-[16px]

                                    rounded-full

                                    bg-white

                                    flex
                                    items-center
                                    justify-center

                                    shadow-sm
                                  "
                                >

                                  <Check
                                    size={9}
                                    strokeWidth={3}
                                    className="
                                      text-[#BE8F45]
                                    "
                                  />

                                </motion.div>
                              )}

                          </motion.button>

                          {/* LABEL */}

                          <p
                            className={`
                              mt-[6px]

                              text-[10px]
                              font-medium

                              whitespace-nowrap

                              ${
                                step.completed
                                  ? "text-[#B98B49]"
                                  : "text-[#75685D]"
                              }
                            `}
                          >

                            {step.title}

                          </p>

                        </div>

                        {/* CONNECTOR */}

                        {index !==
                          steps.length -
                            1 && (

                          <div
                            className="
                              relative

                              w-[28px]
                              h-[3px]

                              mx-[6px]

                              mt-[24px]

                              rounded-full

                              overflow-hidden

                              bg-[#E8DED3]
                            "
                          >

                            {/* FILLED */}

                            <motion.div
                              initial={{
                                width: 0,
                              }}
                              animate={{
                                width:
                                  steps[index + 1]
                                    ?.completed
                                    ? "100%"
                                    : "0%",
                              }}
                              transition={{
                                duration: 0.7,
                                ease:
                                  "easeInOut",
                              }}
                              className="
                                absolute
                                left-0
                                top-0
                                bottom-0

                                rounded-full

                                bg-gradient-to-r
                                from-[#DAB46F]
                                to-[#BE8F45]
                              "
                            />

                          </div>
                        )}

                      </motion.div>
                    );
                  }
                )}

              </AnimatePresence>

            </div>

          </div>

          {/* RECOMMENDED CARD */}

          <motion.div
            layout
            className="
              mt-4

              rounded-[20px]

              bg-white/72

              border
              border-[#EFE4D8]

              px-4
              py-3
            "
          >

            <p
              className="
                text-[9px]
                tracking-[0.18em]
                uppercase

                text-[#B98B49]
              "
            >

              Recommended Next

            </p>

            <h3
              className="
                mt-[5px]

                text-[15px]
                font-semibold

                tracking-[-0.03em]

                text-[#1A1A1A]
              "
            >

              {
                steps.find(
                  (step) =>
                    !step.completed
                )?.title
              }

            </h3>

            <p
              className="
                mt-[3px]

                text-[11px]
                leading-[1.55]

                text-[#7A6D61]
              "
            >

              Complete this milestone to continue building your wedding beautifully.

            </p>

          </motion.div>

        </div>

      </div>

    </section>

  );

}