interface Props {

  count: number;

}

export default function NotificationBadge({
  count,
}: Props) {

  if (count <= 0) return null;

  return (

    <div
      className="
        min-w-[22px]
        h-[22px]

        px-[6px]

        rounded-full

        bg-[#C9A86A]

        flex
        items-center
        justify-center

        text-white
        text-[11px]
        font-semibold
      "
    >

      {count}

    </div>

  );

}