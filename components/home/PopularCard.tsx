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
        w-[48%]
        h-[220px]

        relative

        flex-shrink-0
        snap-start

        overflow-hidden

        rounded-[30px]
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
        "
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/65
          via-black/5
          to-transparent
        "
      />

      {/* TEXT */}

      <div
        className="
          absolute
          bottom-4
          left-4
        "
      >

        <h3
          className="
            text-white

            text-[1.2rem]
            leading-[0.95]

            tracking-[-0.04em]

            font-semibold
          "
        >

          {title1}
          <br />
          {title2}

        </h3>

      </div>

    </div>

  );

}