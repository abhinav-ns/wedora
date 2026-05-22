"use client";

interface Props {

  title: string;

  children: React.ReactNode;

}

export default function NotificationSection({
  title,
  children,
}: Props) {

  return (

    <section className="mt-5">

      <h2
        className="
          text-[16px]
          font-bold

          tracking-[-0.05em]

          text-[#111111]

          mb-3
        "
      >

        {title}

      </h2>

      <div className="flex flex-col gap-3">

        {children}

      </div>

    </section>

  );

}