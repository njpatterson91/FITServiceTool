import { Button, Paper, Stack, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { shipCode } from "../../../store/atoms";

export default function ShipLinks() {
  const shipInfo = useRecoilValue(shipCode);
  const links = [
    {
      text: "Ship Home Page",
      link: `https://www.carnival.com/cruise-ships/carnival-${shipInfo.name}`,
    },
    {
      text: "Onboard Activities",
      link: `https://www.carnival.com/onboard/view-all-onboard-activities/?shipCode=${shipInfo.code}`,
    },
    {
      text: "Dining Options",
      link: `https://www.carnival.com/cruise-food/?shipCode=${shipInfo.code}`,
    },
  ];
  return (
    <>
      {shipInfo === "" && (
        <Paper style={{ margin: "4%", padding: "2%" }} elevation={10}>
          <Typography>Please Select a ship to view links.</Typography>
        </Paper>
      )}
      {shipInfo !== "" && (
        <Paper style={{ padding: 8 }} elevation={5}>
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
                key={link.text}
              >
                {link.text}
              </Button>
            ))}
          </Stack>
        </Paper>
      )}
    </>
  );
}
