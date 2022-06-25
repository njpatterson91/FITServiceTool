import { Paper } from "@mui/material";
import TypographyWithTT from "../../../components/TypographyWithTT";

const script = [
  {
    text: "**Once you have appropriately qualified the booking, please move immediately to the guest info tab to confirmm there is info regarding the guest's email addres and phone number. Only one set of info is required per booking per call.",
    tooltip: false,
    tooltipSRC: "",
  },
  {
    text: "If there is not vaccination status on Guest Info Tab say: and to confirm, all guests are fully vaccinated?",
    tooltip: false,
    tooltipSRC: "",
  },
  {
    text: " Then enter comment: Vaxed if vaccinated next to pax code section.",
    tooltip: true,
    tooltipSRC: "addVaccination.png",
  },
];

export default function VerifyingInfo() {
  return (
    <Paper style={{ margin: "4%" }} elevation={10}>
      {script.map((item) => (
        <TypographyWithTT script={item} />
      ))}
    </Paper>
  );
}
