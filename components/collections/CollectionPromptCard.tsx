"use client";

type CollectionPromptCardProps = {
  label: string;
  title: string;
  options: string[];
};

export default function CollectionPromptCard({
  label,
  title,
  options,
}: CollectionPromptCardProps) {

  return (

    <div
      className="
        rounded-[24px]

        border
        border-[#EFE4D8]

        bg-[linear-gradient(135deg,#F8F4EE_0%,#F5F0E8_100%)]

        px-5
        py-5
      "
    >

      <p
        className="
          text-[11px]
          uppercase

          tracking-[0.18em]

          text-[#B98B49]
        "
      >

        {label}

      </p>

      <h3
        className="
          mt-2

          text-[20px]
          leading-[1.1]

          tracking-[-0.05em]

          font-semibold

          text-[#111111]
        "
      >

        {title}

      </h3>

      <div
        className="
          flex
          flex-wrap
          gap-[10px]

          mt-5
        "
      >

        {options.map((item) => (

          <button
            key={item}
            className="
              px-[14px]
              py-[10px]

              rounded-full

              bg-white/75

              border
              border-[#EFE4D8]

              text-[12px]
              font-medium

              text-[#7B7067]
            "
          >

            {item}

          </button>

        ))}

      </div>

    </div>

  );

}