"use client";

interface Props {

  activeTab: string;

  onChange: (
    tab: string
  ) => void;

}

const tabs = [
  "All",
  "Messages",
  "Updates",
];

export default function NotificationTabs({
  activeTab,
  onChange,
}: Props) {

  return (

    <div
      className="
        flex
        gap-2

        mb-4
      "
    >

      {tabs.map((tab) => {

        const active =
          activeTab === tab;

        return (

          <button
            key={tab}

            onClick={() =>
              onChange(tab)
            }

            className={`
              h-[40px]

              px-4

              rounded-full

              text-[13px]
              font-medium

              transition-all
              duration-200

              ${
                active
                  ? "bg-[#C8A96B] text-white"
                  : "bg-white/65 text-[#7D7065] border border-[#E9DED2]"
              }
            `}
          >

            {tab}

          </button>

        );

      })}

    </div>

  );

}