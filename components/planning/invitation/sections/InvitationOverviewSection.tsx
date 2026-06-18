import Image from "next/image";
import { Eye, Palette } from "lucide-react";

import { invitationPlanningData } from "../data/invitationPlanningData";
import InvitationSectionCard from "../shared/InvitationSectionCard";
import InvitationThemeCard from "../ui/InvitationThemeCard";

export default function InvitationOverviewSection() {
  const { couple, wedding, invitation, themes } =
  invitationPlanningData;

  return (
    <div className="flex flex-col">
      {/* HERO */}

      <InvitationSectionCard className="relative overflow-hidden">
        {/* IMAGE */}

        <div
          className="
            absolute
            right-0
            top-0
            bottom-0
            flex
            items-center
            justify-end
          "
        >
          <div className="relative h-full">
            <Image
              src={invitation.coverImage}
              alt={invitation.title}
              width={560}
              height={840}
              priority
              className="
                h-full
                w-auto
                object-cover
                object-right
              "
            />
            <div
  className="
absolute
top-1/2
left-[62%]

-translate-y-1/2

rotate-[6deg]

flex
flex-col
items-center

pointer-events-none
z-10
"
  style={{
  transform: "translateY(-10px)",
}}
>
  <h3
    className="
      text-[17px]
      font-semibold
      leading-none
      tracking-[0.08em]
    "
    style={{
      fontFamily:
        '"Cormorant Garamond","Playfair Display",serif',
      background:
        "linear-gradient(180deg,#E7C67A 0%,#C89D47 45%,#A8782B 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {couple.initials.charAt(0)} & {couple.initials.charAt(1)}
  </h3>

  <p
    className="
      mt-2.5

      text-[7px]
      font-semibold
      uppercase
      tracking-[0.28em]

      text-[#A8864C]
    "
  >
    {couple.weddingTitle}
  </p>

  <p
    className="
      mt-1

      text-[7px]
      font-medium
      tracking-[0.18em]

      text-[#C7A56A]
    "
  >
    {wedding.date}
  </p>
</div>

            <div
              className="
                absolute
                left-[-80px]
                top-0
                bottom-0
                w-[100px]
                bg-gradient-to-r
                from-[#FFFCF9]
                via-[#FFFCF9]/70
                to-transparent
                pointer-events-none
              "
            />
          </div>
        </div>

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[110px]
            flex-col
            gap-2.5
          "
        >
          <div className="max-w-[190px]">
            <div>
  <p
    className="
      text-[9px]
      font-semibold
      uppercase
      tracking-[0.22em]

      text-[#C79B4B]
    "
  >
    {couple.weddingTitle}
  </p>

  <p
    className="
      mt-1

      text-[8px]
      font-medium
      uppercase

      tracking-[0.22em]

      text-[#B8AA97]
    "
  >
    Your Invitation
  </p>
</div>

            <h2
              className="
                mt-1.5
                text-[23px]
                leading-[0.92]
                tracking-[-0.05em]
                text-[#171412]
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond","Playfair Display",serif',
              }}
            >
              {invitation.title}
            </h2>

            <p
              className="
                mt-1
                text-[12px]
                font-medium
                text-[#B88B3D]
              "
            >
              {invitation.collection}
            </p>

            <p
              className="
                mt-1.5
                text-[11px]
                leading-[1.7]
                text-[#7A726B]
              "
            >
              {invitation.description}
            </p>
          </div>

          <div
            className="
              mt-0
              flex
              flex-col
              gap-2
            "
          >
            <button
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-[#D1AA58]
                px-3
                py-2
                text-[10px]
                font-medium
                text-white
              "
            >
              <Palette size={14} />
              Customize Invitation
            </button>

            <button
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border border-[#EADFD1]
                bg-white
                px-3
                py-2
                text-[10px]
                font-medium
                text-[#171412]
              "
            >
              <Eye size={14} />
              Preview Invitation
            </button>
          </div>
        </div>
      </InvitationSectionCard>

      {/* THEME STRIP */}

      <div
        className="
          mt-2
          px-1
          grid
          grid-cols-5
          gap-1.5
        "
      >
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="w-full"
          >
            <InvitationThemeCard
  name={theme.name}
  image={theme.image}
  selected={theme.selected}
  groomName={couple.groomName}
  brideName={couple.brideName}
  weddingDate={wedding.date}
/>
          </div>
        ))}
      </div>
    </div>
  );
}