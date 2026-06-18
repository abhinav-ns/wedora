import {
  Mail,
  Users,
  TrendingUp,
  Link2,
} from "lucide-react";

import { invitationPlanningData } from "../data/invitationPlanningData";
import InvitationSectionCard from "../shared/InvitationSectionCard";

export default function InvitationInsightsSection() {
  const { insights } = invitationPlanningData;

  const getIcon = (icon: string) => {
    switch (icon) {
      case "mail":
        return <Mail size={14} />;

      case "users":
        return <Users size={14} />;

      case "chart":
        return <TrendingUp size={14} />;

      case "link":
        return <Link2 size={14} />;

      default:
        return <Mail size={14} />;
    }
  };

  return (
    <InvitationSectionCard>
      <p
        className="
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-[#B88B3D]
        "
      >
        Invitation Insights
      </p>

      <div
        className="
          mt-3

          flex
          items-center
          justify-between

          overflow-hidden
        "
      >
        {insights.map((item, index) => (
          <div
            key={item.id}
            className="
              flex
              items-center
              gap-2

              flex-1

              px-1
            "
          >
            <div
              className="
                flex
                h-6
                w-6
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#FBF7F0]

                text-[#C79B4B]
              "
            >
              {getIcon(item.icon)}
            </div>

            <div>
              <p
                className="
                  text-[15px]
                  font-semibold
                  leading-none

                  text-[#B88B3D]
                "
              >
                {item.value}
              </p>

              <p
                className="
                  mt-[2px]
                  
                  h-[18px]

                  flex
                  items-start

                  text-[7px]
                  font-medium
                  leading-[1.15]

                  text-[#7A726B]
                "
              >
                {item.label}
              </p>
            </div>

            {index !== insights.length - 1 && (
              <div
                className="
                  ml-auto

                  h-8
                  w-px

                  bg-[#EFE5D9]
                "
              />
            )}
          </div>
        ))}
      </div>
    </InvitationSectionCard>
  );
}