type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {

  return (

    <div className="mb-3">

      <h2
        className="
          text-[20px]
          tracking-[-0.05em]
          text-[#1D1A17]
          font-cormorant
        "
      >
        {title}
      </h2>

      {subtitle && (

        <p
          className="
            mt-1
            text-[12px]
            text-[#8A7A6A]
          "
        >
          {subtitle}
        </p>

      )}

    </div>

  );

}