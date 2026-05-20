"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type Props = {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function AuthInput({
  placeholder,
  type = "text",
  value,
  onChange,
}: Props) {

  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  return (

    <div
      className="
        h-[62px]
        rounded-[22px]
        border
        border-[#E8DDD1]
        bg-white/70
        backdrop-blur-xl
        px-5
        flex
        items-center
        justify-between
      "
    >

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={
          isPassword
            ? show
              ? "text"
              : "password"
            : type
        }
        placeholder={placeholder}
        className="
          w-full
          bg-transparent
          outline-none
          text-[16px]
          text-[#1A1A1A]
          placeholder:text-[#A99F95]
        "
      />

      {isPassword && (

        <button
          type="button"
          onClick={() => setShow(!show)}
        >

          {show ? (
            <EyeOff
              size={21}
              className="text-[#A99F95]"
            />
          ) : (
            <Eye
              size={21}
              className="text-[#A99F95]"
            />
          )}

        </button>

      )}

    </div>

  );

}