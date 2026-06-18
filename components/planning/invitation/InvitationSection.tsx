"use client";

import InvitationOverviewSection from "./sections/InvitationOverviewSection";
import InvitationInsightsSection from "./sections/InvitationInsightsSection";
import InvitationActionsSection from "./sections/InvitationActionsSection";
import InvitationBannerSection from "./sections/InvitationBannerSection";

export default function InvitationSection() {
  return (
    <section
      className="
        flex
        flex-col
        gap-3
      "
    >
      <InvitationOverviewSection />

      <InvitationInsightsSection />

      <InvitationActionsSection />

      <InvitationBannerSection />
    </section>
  );
}