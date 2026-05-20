import Image from "next/image";

export default function AuthBackground() {

  return (

    <div
      className="
        absolute
        inset-0
      "
    >

      <Image
        src="/images/auth-bg.png"
        alt="Wedding Background"
        fill
        priority
        className="
          object-cover
          object-center
        "
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_bottom,rgba(247,241,234,0.08),rgba(247,241,234,0.32))]
        "
      />

    </div>

  );

}