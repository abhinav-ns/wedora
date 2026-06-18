"use client";

export function useResponsiveTypography(
  text: string,
) {

  const length =
    text.length;

  if (length <= 12) {

    return {

      heading:
        "text-[52px] sm:text-[72px]",

      subheading:
        "text-[28px]",
    };
  }

  if (length <= 22) {

    return {

      heading:
        "text-[42px] sm:text-[60px]",

      subheading:
        "text-[24px]",
    };
  }

  return {

    heading:
      "text-[34px] sm:text-[48px]",

    subheading:
      "text-[22px]",
  };

}