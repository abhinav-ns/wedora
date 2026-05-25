"use client";

import { useRouter } from "next/navigation";

import { ROUTES } from "@/constants/routes";

import AuthBackground from "@/components/auth/AuthBackground";
import AuthButton from "@/components/auth/AuthButton";

export default function OtpVerificationPage() {

  const router = useRouter();

  const handleVerify = () => {

    router.push(ROUTES.main.home);

  };

  return (

    <main
      className="
        relative
        h-screen
        overflow-hidden
        bg-[#F7F1EA]
      "
    >

      <AuthBackground />

      <section
        className="
          absolute
          bottom-0
          left-0
          right-0

          rounded-t-[38px]

          bg-[#F7F3EE]/95
          backdrop-blur-xl

          px-6
          pt-7
          pb-8
        "
      >

        <h1
          className="
            text-[32px]
            font-semibold
            tracking-[-0.04em]
          "
        >
          OTP Verification
        </h1>

        <p
          className="
            mt-2
            text-[15px]
            leading-[1.6]
            text-[#8F857B]
          "
        >
          Enter the 4-digit verification code sent to your email.
        </p>

        {/* OTP */}

        <div
          className="
            flex
            justify-center
            gap-4
            mt-8
          "
        >

          {[1, 2, 3, 4].map((item) => (

            <input
              key={item}
              maxLength={1}
              className="
                w-[68px]
                h-[68px]

                rounded-[20px]

                bg-white/80

                border
                border-[#E7DDD2]

                text-center
                text-[28px]

                outline-none
              "
            />

          ))}

        </div>

        <div className="mt-8">

          <AuthButton
            text="Verify"
            onClick={handleVerify}
          />

        </div>

      </section>

    </main>

  );

}
