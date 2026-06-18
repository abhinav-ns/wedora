"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const banners = [
  "/images/planning/invitations/banners/banner-1.png",
  "/images/planning/invitations/banners/banner-2.png",
  "/images/planning/invitations/banners/banner-3.png",
  "/images/planning/invitations/banners/banner-4.png",
  "/images/planning/invitations/banners/banner-5.png",
];

export default function InvitationShowcaseBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const startAutoplay = () => {
    stopAutoplay();

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, []);

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    stopAutoplay();

    touchStartX.current =
      e.touches[0].clientX;
  };

  const handleTouchEnd = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    const touchEndX =
      e.changedTouches[0].clientX;

    const distance =
      touchStartX.current - touchEndX;

    if (distance > 50) {
      nextSlide();
    }

    if (distance < -50) {
      previousSlide();
    }

    setTimeout(() => {
      startAutoplay();
    }, 5000);
  };

  return (
    <section className="w-full">
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="
            relative
            w-full
            aspect-[5/2]
          "
        >
          <motion.div
            className="
              flex
              h-full
            "
            animate={{
              x: `-${activeIndex * 100}%`,
            }}
            transition={{
              duration: 0.55,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            {banners.map((banner, index) => (
              <div
                key={index}
                className="
                  relative
                  h-full
                  w-full
                  shrink-0
                "
              >
                <Image
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="
                    object-cover
                    select-none
                  "
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="
            absolute
            bottom-3
            left-1/2
            z-10

            flex
            -translate-x-1/2
            items-center
            gap-1.5
          "
        >
          {banners.map((_, index) => (
            <motion.button
              key={index}
              onClick={() =>
                setActiveIndex(index)
              }
              className="
                h-[4px]
                rounded-full
              "
              animate={{
                width:
                  activeIndex === index
                    ? 28
                    : 8,
              }}
              transition={{
                duration: 0.25,
              }}
              style={{
                backgroundColor:
                  activeIndex === index
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}