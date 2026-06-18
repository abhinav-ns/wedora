import {
  Pencil,
  Eye,
  Share2,
  QrCode,
  Link2,
  Layers3,
  Download,
  Copy,
  Bell,
  MoreHorizontal,
} from "lucide-react";

import { invitationPlanningData } from "../data/invitationPlanningData";
import InvitationSectionCard from "../shared/InvitationSectionCard";
import InvitationActionCard from "../ui/InvitationActionCard";

export default function InvitationActionsSection() {
  const { actions } = invitationPlanningData;

  const getIcon = (label: string) => {
    switch (label) {
      case "Edit":
        return (
          <Pencil
            size={20}
            strokeWidth={1.8}
          />
        );

      case "Preview":
        return (
          <Eye
            size={20}
            strokeWidth={1.8}
          />
        );

      case "Share":
        return (
          <Share2
            size={20}
            strokeWidth={1.8}
          />
        );

      case "QR Code":
        return (
          <QrCode
            size={20}
            strokeWidth={1.8}
          />
        );

      case "Copy Link":
        return (
          <Link2
            size={20}
            strokeWidth={1.8}
          />
        );

      case "Sections":
        return (
          <Layers3
            size={20}
            strokeWidth={1.8}
          />
        );

      case "PDF":
        return (
          <Download
            size={20}
            strokeWidth={1.8}
          />
        );

      case "Duplicate":
        return (
          <Copy
            size={20}
            strokeWidth={1.8}
          />
        );

      case "Reminder":
        return (
          <Bell
            size={20}
            strokeWidth={1.8}
          />
        );

      case "More":
        return (
          <MoreHorizontal
            size={20}
            strokeWidth={1.8}
          />
        );

      default:
        return (
          <Pencil
            size={20}
            strokeWidth={1.8}
          />
        );
    }
  };

  return (
    <InvitationSectionCard>
      <div>
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-[#B88B3D]
          "
        >
          Invitation Actions
        </p>

        <p
          className="
            mt-1
            text-[8px]
            text-[#8E857C]
          "
        >
          Manage and distribute your invitation.
        </p>
      </div>

      <div
        className="
          mt-2.5

          grid
          grid-cols-5

          gap-2.5
        "
      >
        {actions.map((action) => (
          <InvitationActionCard
            key={action.id}
            icon={getIcon(action.label)}
            label={action.label}
          />
        ))}
      </div>
    </InvitationSectionCard>
  );
}