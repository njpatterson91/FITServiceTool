import { Button, Paper, Stack } from "@mui/material";

const links = [
  {
    text: "Carnival.com",
    link: "https://www.carnival.com",
  },
  {
    text: "Arise Okta",
    link: "https://arise.okta.com/",
  },
  {
    text: "Easy Peasy Carnival Breezy",
    link: "https://docs.google.com/spreadsheets/d/1q5CFh0hfJx2GcwUwP9ByVOp-abzbz9LGoM2BBMACyiQ/edit#gid=661269468",
  },
  {
    text: "Have Fun. Be Safe.",
    link: "https://www.carnival.com/Legal/covid-19-legal-notices/covid-19-guest-protocols?icid=advisory_cruisehealth_040122",
  },
];

export default function Links() {
  return (
    <Paper style={{ padding: 8, overflow: "auto", height: 250 }} elevation={5}>
      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        {links.map((link) => (
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            component="p"
            align="center"
            onClick={() => {
              window.open(link.link);
            }}
          >
            {link.text}
          </Button>
        ))}
      </Stack>
    </Paper>
  );
}
