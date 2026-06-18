interface Props {
  quote: string;
}

export default function InvitationQuote({
  quote,
}: Props) {
  return (
    <p
      className="
        max-w-[420px]

        text-[15px]
        leading-[1.8]
        text-[#6A625C]
      "
    >
      {quote}
    </p>
  );
}