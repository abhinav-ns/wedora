import OverviewPage from "./overview/OverviewPage";

import InvitationSection from "./invitation/InvitationSection";

import GuestsSection from "./guests/GuestsSection";

import TimelineSection from "./timeline/TimelineSection";

import VendorsSection from "./vendors/VendorsSection";

import { PlanningTab } from "./types";

interface Props {
  activeTab: PlanningTab;
}

function ComingSoonCard({
  title,
}: {
  title: string;
}) {

  return (

    <div
      className="
        mt-6

        rounded-[28px]

        border border-[#F1E8DD]

        bg-[#FFFCF8]

        p-6

        shadow-[0_10px_30px_rgba(186,155,110,0.05)]
      "
    >

      <p
        className="
          text-[18px]
          font-semibold
          tracking-[-0.03em]

          text-[#1D1A17]
        "
      >
        {title}
      </p>

      <p
        className="
          mt-2

          text-[14px]
          leading-[1.7]

          text-[#857C72]
        "
      >
        This experience is currently
        being crafted for Wedora.
      </p>

    </div>

  );

}

export default function PlanningContent({
  activeTab,
}: Props) {

  switch (activeTab) {

    case "overview":
      return <OverviewPage />;

    case "invitation":
      return <InvitationSection />;

    case "guests":
      return <GuestsSection />;

    case "timeline":
      return <TimelineSection />;

    case "vendors":
      return <VendorsSection />;

    case "budget":
      return (
        <ComingSoonCard
          title="Budget Planning"
        />
      );

    default:
      return <OverviewPage />;

  }

}