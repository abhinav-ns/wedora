import { MapPin } from "lucide-react";

interface Props {
  venue: string;
}

export default function WeddingVenue({
  venue,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <MapPin
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
        {venue}
      </p>
    </div>
  );
}