import PrimaryInvitationButton from "../buttons/PrimaryInvitationButton";

interface Props {
  label?: string;

  onClick?: () => void;
}

export default function RSVPButton({
  label = "RSVP Now",
  onClick,
}: Props) {

  return (
    <PrimaryInvitationButton
      label={label}
      onClick={onClick}
    />
  );

}