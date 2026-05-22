interface Props {

  label: string;

}

export default function MessageDate({
  label,
}: Props) {

  return (

    <div className="flex justify-center py-2">

      <div
        className="
          px-3
          py-[5px]

          rounded-full

          bg-[#F1E7DC]

          text-[10px]
          font-medium

          text-[#8D8176]
        "
      >

        {label}

      </div>

    </div>

  );

}