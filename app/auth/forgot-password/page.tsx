"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ROUTES } from "@/constants/routes";

import AuthBackground from "@/components/auth/AuthBackground";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";

export default function ForgotPasswordPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleContinue = () => {

    if (!email) return;

    router.push(ROUTES.auth.otpVerification);

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
          Reset Password
        </h1>

        <p
          className="
            mt-2
            text-[15px]
            leading-[1.6]
            text-[#8F857B]
          "
        >
          Enter your email address to receive verification code.
        </p>

        <div className="mt-7">

          <AuthInput
            placeholder="Email address"
            type="email"
            value={email}
            onChange={setEmail}
          />

        </div>

        <div className="mt-7">

          <AuthButton
            text="Continue"
            onClick={handleContinue}
          />

        </div>

        <div className="mt-7 text-center">

          <Link
            href={ROUTES.auth.login}
            className="
              text-[15px]
              font-medium
              text-[#C8A96B]
            "
          >
            Back to Login
          </Link>

        </div>

      </section>

    </main>

  );

}
