import { CalendarDays } from "lucide-react";

interface Props {
  date: string;
}

export default function WeddingDate({
  date,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <CalendarDays
        size={16}
        className="text-[#C79B4B]"
      />

      <p
        className="
          text-[14px]
          font-medium
          text-[#5E5650]
        "
      >
        {date}
      </p>
    </div>
  );
}