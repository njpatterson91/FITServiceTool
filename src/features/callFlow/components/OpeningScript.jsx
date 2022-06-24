import { Typography, Paper } from "@mui/material";

const script = [
  "Thanks for calling Carnival, my name is ______. Who do I have the pleasure of speaking with?",
  "Thank you,___ TA/DG's_NAME___. May I please have your booking number?",
  "** Proceed to pull up booking in Navigator.**",
  "** While waiting on NAVI, can ask how your day is going etc. **",
];

export default function OpeningScript() {
  return (
    <Paper style={{ margin: "4%" }} elevation={10}>
      {script.map((item) => (
        <Typography margin padding>
          {item}
        </Typography>
      ))}
    </Paper>
  );
}
