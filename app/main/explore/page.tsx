"use client";

import Image from "next/image";

import {
  Search,
  SlidersHorizontal,
  Sparkles,
  Crown,
  Heart,
} from "lucide-react";

/* ======================================================
   CATEGORY PILLS
====================================================== */

const CATEGORIES = [
  "All",
  "Invitations",
  "Luxury",
  "Traditional",
  "Minimal",
  "Beach",
  "Royal",
  "Photography",
  "Decor",
];

/* ======================================================
   TRENDING THEMES
====================================================== */

const TRENDING = [
  {
    title: "Golden Grace",
    subtitle: "Premium",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Royal Motif",
    subtitle: "Luxury",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Blush Bloom",
    subtitle: "Minimal",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ======================================================
   LUXURY COLLECTIONS
====================================================== */

const COLLECTIONS = [
  {
    title: "Royal Collection",
    description:
      "Timeless luxury wedding inspirations",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Beach Ceremony",
    description:
      "Golden sunsets & ocean elegance",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ======================================================
   VENDORS
====================================================== */

const VENDORS = [
  {
    name: "Velvet Weddings",
    category: "Luxury Decor",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Golden Catering",
    category: "Premium Dining",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExplorePage() {

  return (

    <main
      className="
        min-h-screen
        bg-[#F7F1EA]

        pb-[130px]
      "
    >

      {/* ======================================================
          HEADER
      ====================================================== */}

      <section className="px-5 pt-8">

        <p
          className="
            text-[13px]
            uppercase
            tracking-[0.16em]

            text-[#B69A6A]
          "
        >

          Discover

        </p>

        <div
          className="
            mt-3

            flex
            items-center
            justify-between
          "
        >

          <h1
            className="
              max-w-[260px]

              text-[40px]
              leading-[0.98]

              font-semibold

              tracking-[-0.08em]

              text-[#111111]
            "
          >

            Explore Wedding Inspirations

          </h1>

          <button
            className="
              w-[52px]
              h-[52px]

              rounded-full

              bg-white/70

              border
              border-[#ECE2D7]

              flex
              items-center
              justify-center
            "
          >

            <SlidersHorizontal
              size={20}
              className="text-[#111111]"
            />

          </button>

        </div>

      </section>

      {/* ======================================================
          SEARCH
      ====================================================== */}

      <section className="px-5 mt-7">

        <div
          className="
            h-[62px]

            rounded-full

            bg-white/78

            border
            border-[#ECE2D7]

            backdrop-blur-xl

            px-5

            flex
            items-center
            justify-between

            shadow-[0_10px_30px_rgba(0,0,0,0.04)]
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <Search
              size={20}
              className="text-[#A38E78]"
            />

            <p
              className="
                text-[16px]

                text-[#A38E78]
              "
            >

              Search luxury invitations...

            </p>

          </div>

          <Sparkles
            size={18}
            className="text-[#C8A96B]"
          />

        </div>

      </section>

      {/* ======================================================
          CATEGORY PILLS
      ====================================================== */}

      <section
        className="
          mt-7

          overflow-x-auto
          no-scrollbar

          pl-5
          pr-3
        "
      >

        <div
          className="
            flex
            gap-3

            w-max
          "
        >

          {CATEGORIES.map((item, index) => (

            <button
              key={item}
              className={`
                h-[42px]

                px-5

                rounded-full

                whitespace-nowrap

                text-[14px]
                font-medium

                transition-all
                duration-300

                ${
                  index === 0
                    ? `
                      bg-[#C8A96B]
                      text-white

                      shadow-[0_10px_24px_rgba(200,169,107,0.35)]
                    `
                    : `
                      bg-white/70
                      text-[#7B6A58]

                      border
                      border-[#ECE2D7]
                    `
                }
              `}
            >

              {item}

            </button>

          ))}

        </div>

      </section>

      {/* ======================================================
          TRENDING NOW
      ====================================================== */}

      <section className="mt-9">

        <div
          className="
            px-5

            flex
            items-center
            justify-between
          "
        >

          <h2
            className="
              text-[28px]

              tracking-[-0.05em]

              text-[#111111]
            "
          >

            Trending Now

          </h2>

          <button
            className="
              text-[15px]

              text-[#C8A96B]
            "
          >

            View all

          </button>

        </div>

        <div
          className="
            mt-5

            overflow-x-auto
            no-scrollbar

            pl-5
            pr-4
          "
        >

          <div
            className="
              flex
              gap-4

              w-max
            "
          >

            {TRENDING.map((item) => (

              <div
                key={item.title}
                className="
                  relative

                  w-[185px]
                  h-[260px]

                  overflow-hidden

                  rounded-[32px]
                "
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
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

                <button
                  className="
                    absolute
                    top-4
                    right-4

                    w-[38px]
                    h-[38px]

                    rounded-full

                    bg-white/18

                    backdrop-blur-xl

                    flex
                    items-center
                    justify-center
                  "
                >

                  <Heart
                    size={16}
                    className="text-white"
                  />

                </button>

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                  "
                >

                  <h3
                    className="
                      text-[22px]
                      leading-[1.05]

                      tracking-[-0.05em]

                      text-white
                    "
                  >

                    {item.title}

                  </h3>

                  <div
                    className="
                      mt-2

                      flex
                      items-center
                      gap-2
                    "
                  >

                    <Crown
                      size={14}
                      className="text-[#E7C37A]"
                    />

                    <p
                      className="
                        text-[13px]

                        text-[#F2E6D4]
                      "
                    >

                      {item.subtitle}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
          PREMIUM COLLECTIONS
      ====================================================== */}

      <section className="mt-10 px-5">

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <h2
            className="
              text-[28px]

              tracking-[-0.05em]

              text-[#111111]
            "
          >

            Premium Collections

          </h2>

          <button
            className="
              text-[15px]

              text-[#C8A96B]
            "
          >

            View all

          </button>

        </div>

        <div className="mt-5 space-y-5">

          {COLLECTIONS.map((item) => (

            <div
              key={item.title}
              className="
                relative

                h-[210px]

                overflow-hidden

                rounded-[34px]
              "
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-black/35
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  p-6

                  flex
                  flex-col
                  justify-end
                "
              >

                <h3
                  className="
                    text-[34px]
                    leading-[0.95]

                    tracking-[-0.07em]

                    text-white
                  "
                >

                  {item.title}

                </h3>

                <p
                  className="
                    mt-3

                    max-w-[240px]

                    text-[15px]

                    text-[#F4ECE1]
                  "
                >

                  {item.description}

                </p>

                <button
                  className="
                    mt-5

                    w-fit

                    px-5
                    h-[44px]

                    rounded-full

                    bg-white

                    text-[14px]
                    font-medium

                    text-[#111111]
                  "
                >

                  Explore

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ======================================================
          VENDORS
      ====================================================== */}

      <section className="mt-10 px-5">

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <h2
            className="
              text-[28px]

              tracking-[-0.05em]

              text-[#111111]
            "
          >

            Top Vendors

          </h2>

          <button
            className="
              text-[15px]

              text-[#C8A96B]
            "
          >

            View all

          </button>

        </div>

        <div className="mt-5 space-y-5">

          {VENDORS.map((item) => (

            <div
              key={item.name}
              className="
                overflow-hidden

                rounded-[30px]

                bg-white/75

                border
                border-[#ECE2D7]
              "
            >

              <div className="relative h-[220px]">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-5">

                <p
                  className="
                    text-[12px]

                    uppercase
                    tracking-[0.15em]

                    text-[#B69A6A]
                  "
                >

                  {item.category}

                </p>

                <h3
                  className="
                    mt-2

                    text-[26px]

                    tracking-[-0.05em]

                    text-[#111111]
                  "
                >

                  {item.name}

                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>

  );

}
