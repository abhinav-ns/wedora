type PopularCardProps = {
  title1: string;
  title2: string;
  image: string;
};

export default function PopularCard({
  title1,
  title2,
  image,
}: PopularCardProps) {

  return (

    <div
      className="
        relative

        w-[calc((100%-12px)/2)]
        min-w-[calc((100%-12px)/2)]

        h-[230px]

        flex-shrink-0
        snap-start

        overflow-hidden

        rounded-[30px]

        bg-[#EDE7DF]
      "
    >

      {/* IMAGE */}

      <img
        src={image}
        alt={title1}
        className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          scale-[1.02]

          transition-transform
          duration-700
        "
      />

      {/* CINEMATIC OVERLAY */}

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

      {/* TOP LABEL */}

      <div
        className="
          absolute
          top-4
          left-4
        "
      >

        <div
          className="
            px-[12px]
            py-[7px]

            rounded-full

            bg-white/12
            backdrop-blur-md

            border
            border-white/10
          "
        >

          <p
            className="
              text-[10px]
              uppercase

              tracking-[0.18em]

              text-white/90
            "
          >

            Curated

          </p>

        </div>

      </div>

      {/* TEXT */}

      <div
        className="
          absolute
          bottom-4
          left-4
          right-4
        "
      >

        <h3
          className="
            text-white

            text-[1.9rem]
            leading-[0.9]

            tracking-[-0.06em]

            font-semibold
          "
        >

          {title1}
          <br />
          {title2}

        </h3>

        <p
          className="
            mt-[10px]

            text-[11px]

            text-white/70

            leading-[1.4]
          "
        >

          Inspired by your recent wedding exploration.

        </p>

      </div>

    </div>

  );

}