"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Mic,
  Search,
  Sparkles,
  TrendingUp,
  Flame,
  Clock3,
  ChevronRight,
  X,
  Mail,
  UtensilsCrossed,
  Camera,
  Flower2,
  Tent,
  ConciergeBell,
  Music2,
  Building2,
} from "lucide-react";

const SEARCH_SUGGESTIONS = [
  "Invitations...",
  "Catering...",
  "Photography...",
  "Decor...",
  "Stage designs...",
  "Guest hospitality...",
];

const TRY_SEARCHING = [
  {
    title: "Invitations",
    icon: Mail,
  },
  {
    title: "Catering",
    icon: UtensilsCrossed,
  },
  {
    title: "Photography",
    icon: Camera,
  },
  {
    title: "Decor",
    icon: Flower2,
  },
  {
    title: "Stage",
    icon: Tent,
  },
  {
    title: "Hospitality",
    icon: ConciergeBell,
  },
  {
    title: "Entertainment",
    icon: Music2,
  },
  {
    title: "Venues",
    icon: Building2,
  },
];

const TRENDING = [
  {
    title: "Luxury Invitations",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Catering Services",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Wedding Decor",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
];

const POPULAR_SEARCHES = [
  "Kerala Wedding Venues",
  "Beach Weddings",
  "Stage Decor",
  "Bridal Makeup",
  "Wedding Photography",
  "Destination Weddings",
  "Mehendi Artists",
  "Wedding Cakes",
  "Live Entertainment",
];

const RECENT_SEARCHES = [
  "Catering",
  "Invitations",
  "Decor",
  "Photography",
];

export default function SearchPage() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex(
        (prev) =>
          (prev + 1) %
          SEARCH_SUGGESTIONS.length
      );

    }, 2600);

    return () => clearInterval(interval);

  }, []);

  return (

    <main
      className="
        min-h-screen
        bg-[#FAF7F2]
        overflow-x-hidden
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
          max-w-[430px]
          mx-auto

          px-[18px]
          pt-6
          pb-[140px]
        "
      >

        {/* =========================
            SEARCH BAR
        ========================= */}

        <div
          className="
            sticky
            top-[64px]
            z-20

            pt-2
            pb-4

            bg-[#FAF7F2]
          "
        >

          <motion.div
            layoutId="wedora-search-bar"

            initial={false}

            transition={{
              layout: {
                type: "spring",
                stiffness: 85,
                damping: 20,
                mass: 1,
              },
            }}

            className="
              bg-white/88
              backdrop-blur-xl

              rounded-[18px]

              px-5
              py-[10px]

              shadow-[0_8px_22px_rgba(0,0,0,0.04)]

              border
              border-[#F1EAE2]

              flex
              items-center
              justify-between

              will-change-transform
            "
          >

            {/* SEARCH TEXT */}

            <div className="flex items-center gap-1 text-[16px] overflow-hidden">

              <span className="text-[#A89A8D] whitespace-nowrap">

                Search

              </span>

              <AnimatePresence mode="wait">

                <motion.span
                  key={SEARCH_SUGGESTIONS[index]}

                  initial={{
                    opacity: 0,
                    y: 7,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: -7,
                  }}

                  transition={{
                    duration: 0.32,
                  }}

                  className="
                    text-[#B0A295]
                    whitespace-nowrap
                  "
                >

                  {SEARCH_SUGGESTIONS[index]}

                </motion.span>

              </AnimatePresence>

            </div>

            {/* SEARCH ICON */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
            >

              <Search
                size={24}
                strokeWidth={2.2}
                className="text-[#111111]"
              />

            </motion.div>

          </motion.div>

        </div>

        {/* =========================
            TRY SEARCHING
        ========================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 16,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.08,
            duration: 0.38,
          }}

          className="mt-3"
        >

          <div className="flex items-center gap-2 mb-4">

            <Sparkles
              size={18}
              strokeWidth={2.2}
              className="text-[#C9A15F]"
            />

            <h2
              className="
                text-[15px]
                font-semibold
                text-[#111111]
              "
            >

              Try searching

            </h2>

          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-3
            "
          >

            {TRY_SEARCHING.map((item) => {

              const Icon = item.icon;

              return (

                <motion.button
                  key={item.title}

                  whileTap={{
                    scale: 0.98,
                  }}

                  whileHover={{
                    y: -2,
                  }}

                  className="
                    h-[46px]

                    rounded-[16px]

                    bg-[#F8F4EF]

                    border
                    border-[#EFE7DD]

                    px-3

                    flex
                    items-center
                    gap-2.5

                    active:scale-[0.98]

                    transition-all
                  "
                >

                  <div
                    className="
                      w-[26px]
                      h-[26px]

                      rounded-full

                      bg-white

                      flex
                      items-center
                      justify-center

                      shrink-0
                    "
                  >

                    <Icon
                      size={14}
                      strokeWidth={2}
                      className="text-[#C9A15F]"
                    />

                  </div>

                  <span
                    className="
                      text-[13.5px]
                      font-medium
                      text-[#2A2A2A]

                      tracking-[-0.02em]
                    "
                  >

                    {item.title}

                  </span>

                </motion.button>

              );

            })}

          </div>

        </motion.section>

        {/* =========================
            TRENDING
        ========================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.14,
            duration: 0.42,
          }}

          className="mt-10"
        >

          <div className="flex items-center justify-between mb-4">

            <div className="flex items-center gap-2">

              <TrendingUp
                size={18}
                strokeWidth={2.2}
                className="text-[#C9A15F]"
              />

              <h2
                className="
                  text-[16px]
                  font-semibold
                  text-[#111111]
                "
              >

                Trending now

              </h2>

            </div>

            <button
              className="
                text-[14px]
                font-medium
                text-[#C9A15F]
              "
            >

              View all

            </button>

          </div>

          <div
            className="
              flex
              gap-4
              overflow-x-auto
              no-scrollbar
            "
          >

            {TRENDING.map((item) => (

              <motion.button
                key={item.title}

                whileHover={{
                  y: -4,
                }}

                whileTap={{
                  scale: 0.985,
                }}

                className="
                  relative
                  shrink-0

                  w-[240px]
                  h-[320px]

                  rounded-[28px]

                  overflow-hidden
                "
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={320}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0

                    p-5
                  "
                >

                  <h3
                    className="
                      text-white
                      text-[18px]
                      font-semibold
                      leading-[1.1]
                    "
                  >

                    {item.title}

                  </h3>

                  <div
                    className="
                      mt-4

                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-1

                        text-white/90
                        text-[13px]
                      "
                    >

                      <Sparkles size={13} />

                      Premium

                    </div>

                    <div
                      className="
                        w-[38px]
                        h-[38px]

                        rounded-full

                        bg-white/20
                        backdrop-blur-lg

                        flex
                        items-center
                        justify-center
                      "
                    >

                      <ChevronRight
                        size={18}
                        className="text-white"
                      />

                    </div>

                  </div>

                </div>

              </motion.button>

            ))}

          </div>

        </motion.section>

        {/* =========================
            POPULAR SEARCHES
        ========================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 18,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
            duration: 0.4,
          }}

          className="mt-10"
        >

          <div className="flex items-center gap-2 mb-4">

            <Flame
              size={18}
              strokeWidth={2.2}
              className="text-[#C9A15F]"
            />

            <h2
              className="
                text-[16px]
                font-semibold
                text-[#111111]
              "
            >

              Popular searches

            </h2>

          </div>

          <div className="flex flex-wrap gap-3">

            {POPULAR_SEARCHES.map((item) => (

              <motion.button
                key={item}

                whileTap={{
                  scale: 0.97,
                }}

                className="
                  h-[36px]

                  px-4

                  rounded-full

                  bg-[#FBF9F6]

                  border

                  flex
                  items-center
                  gap-1.5

                  text-[13px]
                  text-[#3B3B3B]

                  active:scale-[0.98]

                  transition-all
                "
                style={{
                  borderColor: "rgba(216, 204, 190, 0.45)",
                  borderWidth: "1px",
                }}
              >

                <Search
                  size={12}
                  className="text-[#C9A15F]"
                />

                {item}

              </motion.button>

            ))}

          </div>

        </motion.section>

        {/* =========================
            RECENT SEARCHES
        ========================= */}

        <motion.section
          initial={{
            opacity: 0,
            y: 18,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.26,
            duration: 0.42,
          }}

          className="mt-10"
        >

          <div className="flex items-center justify-between mb-4">

            <div className="flex items-center gap-2">

              <Clock3
                size={18}
                strokeWidth={2.2}
                className="text-[#C9A15F]"
              />

              <h2
                className="
                  text-[16px]
                  font-semibold
                  text-[#111111]
                "
              >

                Recent searches

              </h2>

            </div>

            <button
              className="
                text-[14px]
                font-medium
                text-[#C9A15F]
              "
            >

              Clear all

            </button>

          </div>

          <div className="flex flex-wrap gap-3">

            {RECENT_SEARCHES.map((item) => (

              <motion.button
                key={item}

                whileTap={{
                  scale: 0.97,
                }}

                className="
                  h-[36px]

                  px-4

                  rounded-full

                  bg-[#FBF9F6]

                  border

                  flex
                  items-center
                  gap-1.5

                  text-[13px]
                  text-[#3B3B3B]

                  transition-all
                "
                style={{
                  borderColor: "rgba(216, 204, 190, 0.45)",
                  borderWidth: "1px",
                }}
              >

                <Clock3
                  size={12}
                  className="text-[#8E8175]"
                />

                {item}

                <X
                  size={11}
                  className="text-[#8E8175]"
                />

              </motion.button>

            ))}

          </div>

        </motion.section>

      </motion.div>

    </main>

  );

}