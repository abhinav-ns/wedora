"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

import { ROUTES } from "@/constants/routes";

import AuthBackground from "@/components/auth/AuthBackground";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";

export default function SignupPage() {

  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const validateEmail = (email: string) => {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  };

  const handleSignup = async () => {

    setError("");

    if (!fullName || !email || !password) {

      setError("Please fill all fields.");

      return;

    }

    if (!validateEmail(email)) {

      setError("Enter a valid email address.");

      return;

    }

    if (password.length < 6) {

      setError("Password must be at least 6 characters.");

      return;

    }

    try {

      setLoading(true);

      const { error } = await supabase.auth.signUp({

        email,
        password,

        options: {

          data: {
            full_name: fullName,
          },

        },

      });

      if (error) {

        setError(error.message);

        return;

      }

      router.push(ROUTES.auth.login);

    } catch {

      setError("Something went wrong.");

    } finally {

      setLoading(false);

    }

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

        <div className="space-y-4">

          <AuthInput
            placeholder="Full name"
            value={fullName}
            onChange={setFullName}
          />

          <AuthInput
            placeholder="Email address"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <AuthInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />

        </div>

        {error && (

          <p
            className="
              mt-4
              text-[14px]
              text-red-500
            "
          >
            {error}
          </p>

        )}

        <div className="mt-7">

          <AuthButton
            text={
              loading
                ? "Creating..."
                : "Create Account"
            }
            onClick={handleSignup}
          />

        </div>

        <div
          className="
            mt-8
            text-center
            text-[16px]
          "
        >

          <span className="text-[#8F857B]">
            Already have an account?
          </span>

          <Link
            href={ROUTES.auth.login}
            className="
              ml-2
              font-semibold
              text-[#C8A96B]
            "
          >
            Login
          </Link>

        </div>

      </section>

    </main>

  );

}
