interface Props {
  name: string;
  image: string;
  selected?: boolean;
  groomName: string;
  brideName: string;
  weddingDate: string;
}

export default function InvitationThemeCard({
  name,
  image,
  selected = false,
  groomName,
  brideName,
  weddingDate,
}: Props) {
  return (
    <button
      className="
        relative
        w-full
      "
    >
      <div
        className={`
          relative
          overflow-hidden

          rounded-[12px]
          border

          ${
            selected
              ? "border-[#D0A85A]"
              : "border-[#EFE5D9]"
          }
        `}
      >
        <img
          src={image}
          alt={name}
          className="
            aspect-[3/4]
            w-full
            object-cover
          "
        />

        {/* INVITATION PREVIEW */}

        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            pointer-events-none
          "
        >
          <div
            className="
              rotate-[4deg]
              text-center
            "
          >
            <h4
              className="
                text-[8px]
                font-semibold
                leading-none
                tracking-[0.08em]

                text-[#C9A24D]/90
              "
              style={{
                fontFamily:
                  '"Cormorant Garamond","Playfair Display",serif',
              }}
            >
              A & D
            </h4>

            <p
              className="
                mt-[1px]

                text-[3.5px]
                font-semibold
                uppercase

                tracking-[0.12em]

                text-[#B58E4A]
              "
            >
              {groomName} & {brideName}
            </p>

            <p
              className="
                mt-[1px]

                text-[3px]

                tracking-[0.08em]

                text-[#C7A56A]
              "
            >
              {weddingDate}
            </p>
          </div>
        </div>

        {selected && (
          <div
            className="
              absolute
              right-1.5
              top-1.5

              flex
              h-5
              w-5

              items-center
              justify-center

              rounded-full

              bg-[#D0A85A]

              text-[10px]
              text-white
            "
          >
            ✓
          </div>
        )}
      </div>

      <p
        className="
          mt-1.5

          truncate

          text-center

          text-[9px]
          font-medium

          text-[#171412]
        "
      >
        {name}
      </p>
    </button>
  );
}