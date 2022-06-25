import { Paper } from "@mui/material";
import TypographyWithTT from "../../../components/TypographyWithTT";

const script = [
  {
    text: "Thanks for calling Carnival, my name is ______. Who do I have the pleasure of speaking with?",
    tooltip: false,
    tooltipSRC: "",
  },
  {
    text: "Thank you,___ TA/DG's_NAME___. May I please have your booking number?",
  },
  { text: "** Proceed to pull up booking in Navigator.**" },
  { text: "** While waiting on NAVI, can ask how your day is going etc. **" },
];

export default function OpeningScript() {
  return (
    <Paper style={{ margin: "4%" }} elevation={10}>
      {script.map((item) => (
        <TypographyWithTT script={item} />
      ))}
    </Paper>
  );
}
