import { Button, Paper } from "@mui/material";

export default function Links() {
  return (
    <>
      <Paper style={{ padding: 8 }}>
        <Button
          variant="p"
          component="p"
          align="center"
          onClick={() => {
            window.open("https://www.carnival.com");
          }}
        >
          Carnival
        </Button>
        <Button
          variant="p"
          component="p"
          align="center"
          onClick={() => {
            window.open("https://arise.okta.com/");
          }}
        >
          Arise
        </Button>
        <Button
          variant="p"
          component="p"
          align="center"
          onClick={() => {
            window.open(
              "https://docs.google.com/spreadsheets/d/1q5CFh0hfJx2GcwUwP9ByVOp-abzbz9LGoM2BBMACyiQ/edit#gid=661269468"
            );
          }}
        >
          Easy Breezy KB
        </Button>
        <Button
          variant="p"
          component="p"
          align="center"
          onClick={() => {
            window.open(
              "https://www.carnival.com/Legal/covid-19-legal-notices/covid-19-guest-protocols?icid=advisory_cruisehealth_040122"
            );
          }}
        >
          Have Fun. Be Safe.
        </Button>
      </Paper>
    </>
  );
}
