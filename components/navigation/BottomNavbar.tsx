"use client";

import { motion } from "framer-motion";

import { useRouter, usePathname } from "next/navigation";

import {
  House,
  ClipboardList,
  Search,
  User,
  Plus,
} from "lucide-react";

export default function BottomNavbar() {

  const router = useRouter();

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navigate = (path: string) => {

    /*
      Prevent reloading current route
    */

    if (pathname === path) return;

    router.push(path);

  };

  return (

    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        flex
        justify-center
        pb-[max(12px,env(safe-area-inset-bottom))]
      "
    >

      <div
        className="
          w-full
          max-w-[430px]
          px-4
        "
      >

        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-[74px]
            rounded-[26px]
            bg-[rgba(248,243,237,0.62)]
            backdrop-blur-[22px]
            backdrop-saturate-200
            border
            border-white/40
            shadow-[0_8px_24px_rgba(0,0,0,0.045)]
            flex
            items-center
            justify-between
            px-[22px]
          "
        >

          {/* HOME */}

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => navigate("/main/home")}
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-[4px]
            "
          >

            <motion.div
              animate={{
                scale: isActive("/main/home")
                  ? 1.08
                  : 1,
                y: isActive("/main/home")
                  ? -1.5
                  : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            >

              <House
                size={22}
                strokeWidth={2.1}
                className={
                  isActive("/main/home")
                    ? "text-[#C8A96B]"
                    : "text-[#7C6F66]"
                }
              />

            </motion.div>

            <motion.span
              animate={{
                opacity: isActive("/main/home")
                  ? 1
                  : 0.82,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
                text-[12px]
                font-medium
                ${
                  isActive("/main/home")
                    ? "text-[#C8A96B]"
                    : "text-[#7C6F66]"
                }
              `}
            >

              Home

            </motion.span>

          </motion.button>

          {/* PLANNING */}

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => navigate("/main/planning")}
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-[4px]
            "
          >

            <motion.div
              animate={{
                scale: isActive("/main/planning")
                  ? 1.08
                  : 1,
                y: isActive("/main/planning")
                  ? -1.5
                  : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            >

              <ClipboardList
                size={22}
                strokeWidth={2.1}
                className={
                  isActive("/main/planning")
                    ? "text-[#C8A96B]"
                    : "text-[#7C6F66]"
                }
              />

            </motion.div>

            <motion.span
              animate={{
                opacity: isActive("/main/planning")
                  ? 1
                  : 0.82,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
                text-[12px]
                font-medium
                ${
                  isActive("/main/planning")
                    ? "text-[#C8A96B]"
                    : "text-[#7C6F66]"
                }
              `}
            >

              Planning

            </motion.span>

          </motion.button>

          {/* CREATE */}

          <motion.button
            whileTap={{
              scale: 0.92,
            }}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 16,
            }}
            onClick={() => navigate("/main/create")}
            className="
              w-[58px]
              h-[58px]
              rounded-full
              bg-gradient-to-br
              from-[#D7B06B]
              to-[#BE8F45]
              shadow-[0_8px_24px_rgba(0,0,0,0.14)]
              flex
              items-center
              justify-center
              flex-shrink-0
              mx-[1px]
            "
          >

            <motion.div
              whileTap={{
                rotate: 90,
              }}
              transition={{
                duration: 0.2,
              }}
            >

              <Plus
                size={28}
                strokeWidth={2.5}
                className="text-white"
              />

            </motion.div>

          </motion.button>

          {/* EXPLORE */}

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => navigate("/main/explore")}
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-[4px]
            "
          >

            <motion.div
              animate={{
                scale: isActive("/main/explore")
                  ? 1.08
                  : 1,
                y: isActive("/main/explore")
                  ? -1.5
                  : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            >

              <Search
                size={22}
                strokeWidth={2.1}
                className={
                  isActive("/main/explore")
                    ? "text-[#C8A96B]"
                    : "text-[#7C6F66]"
                }
              />

            </motion.div>

            <motion.span
              animate={{
                opacity: isActive("/main/explore")
                  ? 1
                  : 0.82,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
                text-[12px]
                font-medium
                ${
                  isActive("/main/explore")
                    ? "text-[#C8A96B]"
                    : "text-[#7C6F66]"
                }
              `}
            >

              Explore

            </motion.span>

          </motion.button>

          {/* PROFILE */}

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => navigate("/main/profile")}
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-[4px]
            "
          >

            <motion.div
              animate={{
                scale: isActive("/main/profile")
                  ? 1.08
                  : 1,
                y: isActive("/main/profile")
                  ? -1.5
                  : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            >

              <User
                size={22}
                strokeWidth={2.1}
                className={
                  isActive("/main/profile")
                    ? "text-[#C8A96B]"
                    : "text-[#7C6F66]"
                }
              />

            </motion.div>

            <motion.span
              animate={{
                opacity: isActive("/main/profile")
                  ? 1
                  : 0.82,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
                text-[12px]
                font-medium
                ${
                  isActive("/main/profile")
                    ? "text-[#C8A96B]"
                    : "text-[#7C6F66]"
                }
              `}
            >

              Profile

            </motion.span>

          </motion.button>

        </motion.div>

      </div>

    </div>

  );

}