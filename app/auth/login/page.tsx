"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { supabase } from "@/lib/supabase";

import AuthBackground from "@/components/auth/AuthBackground";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import SocialLogin from "@/components/auth/SocialLogin";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {

    setError("");

    if (!email || !password) {

      setError("Please fill all fields.");

      return;

    }

    try {

      setLoading(true);

      const { error } =
        await supabase.auth.signInWithPassword({

          email,
          password,

        });

      if (error) {

        setError("Invalid email or password.");

        return;

      }

      router.push("/main/home");

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
        min-h-screen
        bg-[#F7F1EA]
        overflow-x-hidden
      "
    >

      {/* BACKGROUND */}

      <div className="pointer-events-none">

        <AuthBackground />

      </div>

      {/* CONTENT */}

      <section
        className="
          relative
          z-10

          flex
          items-end

          min-h-screen
          px-0
        "
      >

        <div
          className="
            w-full

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

          <div className="flex justify-end mt-4">

            <Link
              href="/forgot-password"
              className="
                text-[15px]
                font-medium
                text-[#C8A96B]
              "
            >
              Forgot password?
            </Link>

          </div>

          <div className="mt-7">

            <AuthButton
              text={
                loading
                  ? "Logging in..."
                  : "Login"
              }
              onClick={handleLogin}
            />

          </div>

          <div className="mt-8">

            <SocialLogin />

          </div>

          <div
            className="
              mt-8
              text-center
              text-[16px]
            "
          >

            <span className="text-[#8F857B]">
              Don&apos;t have an account?
            </span>

            <Link
              href="/signup"
              className="
                ml-2
                font-semibold
                text-[#C8A96B]
              "
            >
              Sign up
            </Link>

          </div>

        </div>

      </section>

    </main>

  );

}