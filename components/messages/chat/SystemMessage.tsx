interface Props {

  text: string;

}

export default function SystemMessage({
  text,
}: Props) {

  return (

    <div className="flex justify-center">

      <div
        className="
          px-4
          py-[7px]

          rounded-full

          bg-[#EFE4D8]

          text-[11px]
          font-medium

          text-[#8E8074]
        "
      >

        {text}

      </div>

    </div>

  );

}