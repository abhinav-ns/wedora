"use client";

type CollectionFiltersProps = {
  filters: string[];
};

export default function CollectionFilters({
  filters,
}: CollectionFiltersProps) {

  return (

    <div
      className="
        flex
        gap-[8px]

        overflow-x-auto
        no-scrollbar
      "
    >

      {filters.map((item, index) => (

        <button
          key={item}
          className={`
            flex-shrink-0

            px-[12px]
            py-[8px]

            rounded-full

            text-[11px]
            font-medium

            border

            ${
              index === 0
                ? `
                  bg-[#F5ECE2]
                  border-[#EADBCB]
                  text-[#A97B3C]
                `
                : `
                  bg-white/72
                  border-[#EFE4D8]
                  text-[#8B7F75]
                `
            }
          `}
        >

          {item}

        </button>

      ))}

    </div>

  );

}